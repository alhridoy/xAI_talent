import json
import os
from pathlib import Path
from typing import Any, Dict, List, Optional, Tuple

import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import networkx as nx
from sklearn.feature_extraction.text import TfidfVectorizer
from viz_pipeline import generate_map_data
from semantic_search import EmbeddingIndex

app = FastAPI(title="xAI Talent Search API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DATA_DIR = Path(__file__).parent.parent / "data"
DATA_PATH = BASE_DATA_DIR / "senior_researchers_20251122_204419.csv"
SAMPLE_DATA_PATH = BASE_DATA_DIR / "sample_researchers.csv"
KNOWLEDGE_GRAPH_PATH = BASE_DATA_DIR / "ai_talent_knowledge_graph.json"
DOC_PREFIX = "researcher:"
EMBED_MODEL = os.getenv("OPENAI_EMBED_MODEL", "text-embedding-3-small")
EMBED_CACHE_PATH = BASE_DATA_DIR / "researcher_embeddings.npz"
try:
    EMBED_BATCH_SIZE = int(os.getenv("OPENAI_EMBED_BATCH", "50"))
except ValueError:
    EMBED_BATCH_SIZE = 50

researchers_df: Optional[pd.DataFrame] = None
semantic_index: Optional[EmbeddingIndex] = None
map_data: List[Dict[str, Any]] = []
knowledge_graph_payload: Dict[str, Any] = {}

class Researcher(BaseModel):
    name: str
    title: str
    company: str
    location: str
    linkedin_url: Optional[str]
    twitter: Optional[str]
    google_scholar: Optional[str]
    github: Optional[str]
    personal_website: Optional[str]
    about: Optional[str]
    current_role: Optional[str]
    total_publications: int
    total_patents: int
    source_query: str

class SearchRequest(BaseModel):
    query: str
    limit: Optional[int] = 20
    company_filter: Optional[str] = None

class SearchResponse(BaseModel):
    researchers: List[Researcher]
    total: int

class LexicalSearch:
    def __init__(self, prefix: str = DOC_PREFIX) -> None:
        self.vectorizer = TfidfVectorizer(
            stop_words="english",
            ngram_range=(1, 2),
            min_df=1,
            max_features=50000,
        )
        self.matrix = None
        self.doc_ids: List[str] = []
        self.records: Dict[str, Dict[str, Any]] = {}
        self.ready = False
        self.prefix = prefix

    def init(self, df: pd.DataFrame) -> None:
        if df is None or df.empty:
            raise ValueError("No researcher data loaded")

        texts: List[str] = []
        self.records = {}
        self.doc_ids = []

        for idx, row in df.iterrows():
            doc_id = f"{self.prefix}{idx}"
            record = self._record_from_row(row)
            self.records[doc_id] = record
            self.doc_ids.append(doc_id)
            texts.append(self._text_from_record(record))

        self.matrix = self.vectorizer.fit_transform(texts)
        self.ready = True

    def search(
        self,
        query: str,
        *,
        company_filter: Optional[str] = None,
        limit: int = 100,
    ) -> Tuple[int, List[str], Dict[str, float]]:
        if not self.ready or self.matrix is None:
            raise RuntimeError("Search index is not ready")

        limit = max(1, limit)
        normalized_query = (query or "").strip()
        company_lower = company_filter.lower() if company_filter else None

        candidate_indices: List[int] = []
        for idx, doc_id in enumerate(self.doc_ids):
            if not company_lower:
                candidate_indices.append(idx)
                continue
            company_value = (self.records[doc_id].get("company") or "").lower()
            if company_value == company_lower:
                candidate_indices.append(idx)

        total_matches = len(candidate_indices)
        lexical_scores: Dict[str, float] = {}

        if normalized_query:
            query_vec = self.vectorizer.transform([normalized_query])
            similarities = (self.matrix @ query_vec.T).toarray().ravel()
            ranked: List[Tuple[float, str]] = []
            for matrix_idx in candidate_indices:
                score = float(similarities[matrix_idx])
                if score <= 0:
                    continue
                doc_id = self.doc_ids[matrix_idx]
                ranked.append((score, doc_id))

            ranked.sort(key=lambda item: item[0], reverse=True)
            top_ranked = ranked[:limit]
            doc_ids = [doc_id for _, doc_id in top_ranked]
            lexical_scores = {doc_id: score for score, doc_id in top_ranked}

            if doc_ids:
                return total_matches or len(ranked), doc_ids, lexical_scores

        # Fallback: either empty query or no positive TF-IDF matches
        limited_indices = candidate_indices[:limit]
        doc_ids = [self.doc_ids[idx] for idx in limited_indices]
        for position, doc_id in enumerate(doc_ids):
            lexical_scores[doc_id] = float(limit - position) / float(limit)
        return total_matches or len(doc_ids), doc_ids, lexical_scores

    def records_from_ids(self, doc_ids: List[str]) -> List[Dict[str, Any]]:
        return [self.records[doc_id] for doc_id in doc_ids if doc_id in self.records]

    def _record_from_row(self, row: pd.Series) -> Dict[str, Any]:
        def to_str(value: Any) -> str:
            if isinstance(value, str):
                return value.strip()
            if value is None or pd.isna(value):
                return ""
            return str(value).strip()

        def to_int(value: Any) -> int:
            try:
                if value in ("", None):
                    return 0
                return int(float(value))
            except (TypeError, ValueError):
                return 0

        return {
            "name": to_str(row.get("name", "")),
            "title": to_str(row.get("title", "")),
            "company": to_str(row.get("company", "")),
            "location": to_str(row.get("location", "")),
            "linkedin_url": to_str(row.get("linkedin_url", "")),
            "twitter": to_str(row.get("twitter", "")),
            "google_scholar": to_str(row.get("google_scholar", "")),
            "github": to_str(row.get("github", "")),
            "personal_website": to_str(row.get("personal_website", "")),
            "about": to_str(row.get("about", "")),
            "current_role": to_str(row.get("current_role", "")),
            "total_publications": to_int(row.get("total_publications", 0)),
            "total_patents": to_int(row.get("total_patents", 0)),
            "source_query": to_str(row.get("source_query", "")),
        }

    def _text_from_record(self, record: Dict[str, Any]) -> str:
        parts = []
        for key in ["name", "title", "company", "location", "about", "current_role", "source_query"]:
            value = record.get(key)
            if value:
                parts.append(str(value))
        return " | ".join(parts)


lexical_search = LexicalSearch(prefix=DOC_PREFIX)
def load_data() -> None:
    global researchers_df

    candidate_paths = [DATA_PATH, SAMPLE_DATA_PATH]
    loaded_df: Optional[pd.DataFrame] = None
    for path in candidate_paths:
        if path.exists():
            loaded_df = pd.read_csv(path)
            break

    if loaded_df is None:
        raise RuntimeError("No researcher dataset available. Add data to the data/ directory.")

    loaded_df = loaded_df.fillna("")
    for column in ["total_publications", "total_patents"]:
        if column in loaded_df.columns:
            loaded_df[column] = (
                pd.to_numeric(loaded_df[column], errors="coerce")
                .fillna(0)
                .astype(int)
            )

    researchers_df = loaded_df


def load_knowledge_graph() -> None:
    """Load and normalize the pre-built knowledge graph artifact."""
    global knowledge_graph_payload

    if not KNOWLEDGE_GRAPH_PATH.exists():
        knowledge_graph_payload = {}
        print(f"Knowledge graph artifact missing at {KNOWLEDGE_GRAPH_PATH}")
        return

    with KNOWLEDGE_GRAPH_PATH.open("r", encoding="utf-8") as handle:
        raw_graph = json.load(handle)

    nodes: List[Dict[str, Any]] = []
    for node_type, node_map in raw_graph.get("nodes", {}).items():
        if not isinstance(node_map, dict):
            continue
        for node_id, node_data in node_map.items():
            if not isinstance(node_data, dict):
                continue
            normalized = dict(node_data)
            normalized.setdefault("id", node_id)
            normalized.setdefault("type", node_type)
            normalized.setdefault("name", normalized.get("title") or str(node_id))
            # Attempt to find image URL if available in properties or top-level
            normalized.setdefault("image_url", normalized.get("profile_image_url") or normalized.get("image_url") or None)
            nodes.append(normalized)

    edges: List[Dict[str, Any]] = []
    G = nx.Graph()

    for edge in raw_graph.get("edges", []):
        if not isinstance(edge, dict):
            continue
        s, t = edge.get("source"), edge.get("target")
        rel = edge.get("relationship", "")
        
        if s and t:
            edges.append(
                {
                    "source": s,
                    "target": t,
                    "relationship": rel,
                    "properties": edge.get("properties", {}) or {},
                }
            )
            G.add_edge(s, t, relationship=rel)

    # --- Network Analysis: Centrality & Communities ---
    # 1. Compute Centrality (Influence)
    degree_centrality = nx.degree_centrality(G)
    try:
        # Eigenvector centrality for "connectedness to important nodes"
        eigen_centrality = nx.eigenvector_centrality(G, max_iter=500, tol=1e-04)
    except:
        eigen_centrality = degree_centrality

    # 2. Detect Communities (Louvain/Greedy)
    # This groups researchers into "Labs" or "Schools of Thought"
    communities = list(nx.community.greedy_modularity_communities(G))
    community_map = {}
    for idx, comm in enumerate(communities):
        for node_id in comm:
            community_map[node_id] = idx

    # 3. Enrich Nodes with Metrics
    for node in nodes:
        nid = node["id"]
        node["metrics"] = {
            "centrality": eigen_centrality.get(nid, 0),
            "degree": degree_centrality.get(nid, 0),
            "community": community_map.get(nid, 0)
        }
        # Assign a "Network Color" based on community (for frontend usage)
        # We can just pass the ID and handle color in frontend, but passing metadata is good.
    
    # 4. Infer "Collaboration" Edges for a denser Social Graph
    # Connect people if they share a Project or ResearchCluster
    people_nodes = [n for n in nodes if n["type"] == "Person"]
    derived_edges = []
    
    # Map generic nodes to people
    project_to_people = {}
    cluster_to_people = {}
    
    for edge in edges:
        s, t, rel = edge["source"], edge["target"], edge["relationship"]
        # Ensure s, t are strings
        if isinstance(s, dict): s = s.get("id")
        if isinstance(t, dict): t = t.get("id")
        
        # Check if this connects a person to a project/cluster
        # (We need to know types, but edge doesn't have them. We assume from ID or nodes dict)
        # Simpler: just check relationships
        if rel == "CONTRIBUTED_TO": # Person -> Project
            if t not in project_to_people: project_to_people[t] = []
            project_to_people[t].append(s)
        elif rel == "BELONGS_TO_CLUSTER": # Person -> Cluster
            if t not in cluster_to_people: cluster_to_people[t] = []
            cluster_to_people[t].append(s)

    # Generate clique edges for shared projects (Strong Link)
    import itertools
    for proj, peeps in project_to_people.items():
        if len(peeps) > 1:
            for p1, p2 in itertools.combinations(peeps, 2):
                derived_edges.append({
                    "source": p1,
                    "target": p2,
                    "relationship": "CO_WORKER",
                    "properties": {"inferred_from": proj, "weight": 2.0}
                })

    # Add derived edges to the main list (optional, or keep separate? User wants "Network Analysis")
    # Let's add them but mark them.
    for de in derived_edges:
        # Check if edge already exists to avoid dupes
        if not G.has_edge(de["source"], de["target"]):
             edges.append(de)

    node_types = sorted({node.get("type", "unknown") for node in nodes})
    knowledge_graph_payload = {
        "nodes": nodes,
        "edges": edges,
        "meta": {
            "node_types": node_types,
            "counts": {"nodes": len(nodes), "edges": len(edges)},
            "communities": len(communities)
        },
    }

@app.on_event("startup")
async def startup_event():
    global map_data, semantic_index
    load_data()
    if researchers_df is None:
        raise RuntimeError("Failed to load researcher data")

    lexical_search.init(researchers_df)
    print("Lexical search index ready")

    api_key = os.getenv("OPENAI_API_KEY")
    if api_key:
        semantic_index = EmbeddingIndex(
            prefix=DOC_PREFIX,
            cache_path=EMBED_CACHE_PATH,
            model=EMBED_MODEL,
            batch_size=EMBED_BATCH_SIZE,
        )
        try:
            semantic_index.init(researchers_df)
            if semantic_index.ready:
                print("Semantic search index ready")
            else:
                print("Semantic search index disabled: initialization failed")
                semantic_index = None
        except Exception as exc:  # pragma: no cover - external dependency
            print(f"Semantic search disabled: {exc}")
            semantic_index = None
    else:
        print("Semantic search disabled: OPENAI_API_KEY not set")

    # Generate Visualization Data
    try:
        print("Generating visualization map...")
        map_data = generate_map_data(researchers_df)
        print("Visualization map ready")
    except Exception as e:
        print(f"Failed to generate visualization map: {e}")

    try:
        load_knowledge_graph()
        if knowledge_graph_payload:
            counts = knowledge_graph_payload.get("meta", {}).get("counts", {})
            print(
                f"Knowledge graph ready: {counts.get('nodes', 0)} nodes / {counts.get('edges', 0)} edges"
            )
        else:
            print("Knowledge graph artifact missing or empty")
    except Exception as exc:  # pragma: no cover - defensive logging
        print(f"Failed to load knowledge graph: {exc}")

@app.get("/")
async def root():
    return {"message": "xAI Talent Search API", "status": "running"}

@app.get("/api/researchers", response_model=SearchResponse)
async def get_all_researchers(limit: int = 50, offset: int = 0):
    if researchers_df is None:
        raise HTTPException(status_code=503, detail="Researcher dataset unavailable")

    total = len(researchers_df)
    researchers_data = researchers_df.iloc[offset:offset+limit].to_dict('records')
    
    researchers = [
        Researcher(
            name=r['name'],
            title=r['title'],
            company=r['company'],
            location=r['location'],
            linkedin_url=r.get('linkedin_url', ''),
            twitter=r.get('twitter', ''),
            google_scholar=r.get('google_scholar', ''),
            github=r.get('github', ''),
            personal_website=r.get('personal_website', ''),
            about=r.get('about', ''),
            current_role=r.get('current_role', ''),
            total_publications=int(r.get('total_publications', 0)),
            total_patents=int(r.get('total_patents', 0)),
            source_query=r['source_query']
        ) for r in researchers_data
    ]
    
    return SearchResponse(researchers=researchers, total=total)

@app.post("/api/search", response_model=SearchResponse)
async def search_researchers(request: SearchRequest):
    if researchers_df is None:
        raise HTTPException(status_code=503, detail="Researcher dataset unavailable")

    limit = max(1, request.limit or 20)
    company_filter = request.company_filter.strip() if request.company_filter else None
    query = request.query or ""

    if not query.strip() and not company_filter:
        return await get_all_researchers(limit=limit, offset=0)

    if not lexical_search.ready:
        raise HTTPException(status_code=503, detail="Search index not ready")

    total, lexical_doc_ids, lexical_scores = lexical_search.search(
        query,
        company_filter=company_filter,
        limit=limit * 2,
    )

    ranking_scores: Dict[str, float] = {}
    for doc_id in lexical_doc_ids:
        ranking_scores[doc_id] = ranking_scores.get(doc_id, 0.0) + lexical_scores.get(doc_id, 0.0)

    semantic_results: List[tuple[str, float]] = []
    if semantic_index is not None and semantic_index.ready and query.strip():
        allowed_ids: Optional[List[str]] = None
        if company_filter:
            company_lower = company_filter.lower()
            allowed_ids = [
                doc_id
                for doc_id, record in lexical_search.records.items()
                if (record.get("company") or "").lower() == company_lower
            ]
        semantic_results = semantic_index.search(
            query,
            limit=limit * 3,
            allowed_doc_ids=allowed_ids,
        )
        for doc_id, score in semantic_results:
            semantic_boost = max(score, 0.0)
            ranking_scores[doc_id] = ranking_scores.get(doc_id, 0.0) + (semantic_boost * 1.5)

    if not ranking_scores:
        ranking_scores = {doc_id: float(limit - idx) for idx, doc_id in enumerate(lexical_doc_ids)}

    ordered_doc_ids = [
        doc_id
        for doc_id, _ in sorted(
            ranking_scores.items(), key=lambda item: item[1], reverse=True
        )
    ]

    company_filter_lower = company_filter.lower() if company_filter else None
    selected_records: List[Dict[str, Any]] = []
    for doc_id in ordered_doc_ids:
        record = lexical_search.records.get(doc_id)
        if not record:
            continue
        if company_filter_lower and (record.get("company") or "").lower() != company_filter_lower:
            continue
        selected_records.append(record)
        if len(selected_records) >= limit:
            break

    if not selected_records:
        selected_records = lexical_search.records_from_ids(lexical_doc_ids[:limit])

    researchers = [Researcher(**record) for record in selected_records]
    total_matches = max(int(total), len(ranking_scores))

    return SearchResponse(researchers=researchers, total=total_matches)

@app.get("/api/stats")
async def get_stats():
    if researchers_df is None:
        raise HTTPException(status_code=503, detail="Researcher dataset unavailable")

    companies = researchers_df['company'].value_counts().to_dict()
    locations = researchers_df['location'].value_counts().head(10).to_dict()
    total_researchers = len(researchers_df)
    
    return {
        "total_researchers": total_researchers,
        "top_companies": dict(list(companies.items())[:10]),
        "top_locations": locations
    }

@app.get("/api/map")
async def get_map_data():
    if not map_data:
        raise HTTPException(status_code=503, detail="Map data not available")
    return map_data


@app.get("/api/knowledge-graph")
async def get_knowledge_graph():
    if not knowledge_graph_payload:
        load_knowledge_graph()
    if not knowledge_graph_payload:
        raise HTTPException(status_code=503, detail="Knowledge graph not available")
    return knowledge_graph_payload

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
