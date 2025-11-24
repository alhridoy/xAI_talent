from __future__ import annotations

import hashlib
import json
import os
from pathlib import Path
from typing import Any, List, Optional, Sequence, Tuple

import numpy as np
import pandas as pd

try:
    from openai import OpenAI
except ImportError:  # pragma: no cover - optional dependency
    OpenAI = None  # type: ignore


class EmbeddingIndex:
    def __init__(
        self,
        *,
        prefix: str,
        cache_path: Path,
        model: str,
        batch_size: int = 64,
    ) -> None:
        self.prefix = prefix
        self.cache_path = cache_path
        self.meta_path = cache_path.with_suffix(".meta.json")
        self.model = model
        self.batch_size = max(1, batch_size)
        self.doc_ids: List[str] = []
        self.embeddings: Optional[np.ndarray] = None
        self.dataset_hash: Optional[str] = None
        self.ready = False
        self._client: Optional[Any] = None

    def init(self, df: pd.DataFrame) -> None:
        if df is None or df.empty:
            return

        self.dataset_hash = self._compute_dataset_hash(df)
        if self._load_cache():
            self.ready = True
            return

        embeddings = self._build_embeddings(df)
        self.embeddings = embeddings
        self.ready = True
        self._write_cache()

    def search(
        self,
        query: str,
        *,
        limit: int = 20,
        allowed_doc_ids: Optional[Sequence[str]] = None,
    ) -> List[Tuple[str, float]]:
        if not self.ready or self.embeddings is None:
            return []

        query = (query or "").strip()
        if not query:
            return []

        query_vector = self._normalize_vectors(self._embed_texts([query]))[0]
        scores = self.embeddings @ query_vector
        order = np.argsort(-scores)

        allowed = set(allowed_doc_ids) if allowed_doc_ids else None
        results: List[Tuple[str, float]] = []
        for idx in order:
            doc_id = self.doc_ids[int(idx)]
            if allowed and doc_id not in allowed:
                continue
            results.append((doc_id, float(scores[int(idx)])))
            if len(results) >= limit:
                break
        return results

    def _build_embeddings(self, df: pd.DataFrame) -> np.ndarray:
        texts: List[str] = []
        doc_ids: List[str] = []
        for idx, row in df.iterrows():
            doc_id = f"{self.prefix}{idx}"
            doc_ids.append(doc_id)
            texts.append(self._text_from_row(row))

        self.doc_ids = doc_ids
        vectors = self._embed_texts(texts)
        return self._normalize_vectors(vectors)

    def _embed_texts(self, texts: Sequence[str]) -> np.ndarray:
        if not texts:
            return np.zeros((0, 0), dtype=np.float32)

        client = self._get_client()
        vectors: List[np.ndarray] = []
        for start in range(0, len(texts), self.batch_size):
            batch = list(texts[start : start + self.batch_size])
            response = client.embeddings.create(model=self.model, input=batch)
            for item in response.data:
                vectors.append(np.array(item.embedding, dtype=np.float32))

        if not vectors:
            raise RuntimeError("Failed to generate embeddings")

        return np.vstack(vectors)

    def _normalize_vectors(self, matrix: np.ndarray) -> np.ndarray:
        if matrix.size == 0:
            return matrix
        norms = np.linalg.norm(matrix, axis=1, keepdims=True)
        norms = np.where(norms == 0, 1.0, norms)
        return matrix / norms

    def _compute_dataset_hash(self, df: pd.DataFrame) -> str:
        relevant_columns = [
            col
            for col in ["name", "title", "company", "location", "about", "current_role"]
            if col in df.columns
        ]

        if not relevant_columns:
            return ""

        flattened = (
            df[relevant_columns]
            .fillna("")
            .astype(str)
            .apply(lambda row: "|".join(row.values.tolist()), axis=1)
            .str.cat(sep="||")
        )
        return hashlib.sha256(flattened.encode("utf-8")).hexdigest()

    def _load_cache(self) -> bool:
        if not self.cache_path.exists() or not self.meta_path.exists():
            return False

        with self.meta_path.open("r", encoding="utf-8") as meta_file:
            meta = json.load(meta_file)

        if meta.get("dataset_hash") != self.dataset_hash or meta.get("model") != self.model:
            return False

        data = np.load(self.cache_path, allow_pickle=False)
        self.doc_ids = data["doc_ids"].astype(str).tolist()
        self.embeddings = data["embeddings"]

        if self.embeddings.shape[0] != len(self.doc_ids):
            self.doc_ids = []
            self.embeddings = None
            return False

        return True

    def _write_cache(self) -> None:
        if self.embeddings is None or not self.doc_ids:
            return

        np.savez_compressed(
            self.cache_path,
            doc_ids=np.array(self.doc_ids, dtype=str),
            embeddings=self.embeddings,
        )

        meta = {
            "model": self.model,
            "dataset_hash": self.dataset_hash,
            "size": len(self.doc_ids),
        }
        with self.meta_path.open("w", encoding="utf-8") as meta_file:
            json.dump(meta, meta_file)

    def _text_from_row(self, row: pd.Series) -> str:
        parts = []
        for key in ["name", "title", "company", "location", "about", "current_role"]:
            value = row.get(key, "")
            if isinstance(value, str) and value.strip():
                parts.append(value.strip())
        return " | ".join(parts) if parts else str(row.get("name", ""))

    def _get_client(self) -> Any:
        if self._client is not None:
            return self._client

        if OpenAI is None:
            raise RuntimeError("The 'openai' package is not installed (pip install openai)")

        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise RuntimeError("OPENAI_API_KEY environment variable is not set")

        self._client = OpenAI(api_key=api_key)
        return self._client
