import os
from pathlib import Path
from typing import Any, Dict, List, Optional

import pandas as pd
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from redis import Redis
from redis.exceptions import RedisError, ResponseError
from viz_pipeline import generate_map_data

app = FastAPI(title="xAI Talent Search API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DATA_PATH = Path(__file__).parent.parent / "data" / "senior_researchers_20251122_204419.csv"
REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
REDIS_INDEX = os.getenv("REDIS_INDEX", "researchers")
REDIS_PREFIX = os.getenv("REDIS_PREFIX", "researcher:")

researchers_df: Optional[pd.DataFrame] = None
text_search: Optional["TextSearch"] = None
map_data: List[Dict[str, Any]] = []

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

class TextSearch:
    def __init__(self, redis_url: str, index_name: str, prefix: str):
        self.redis_url = redis_url
        self.index_name = index_name
        self.prefix = prefix
        self.rdb: Redis = Redis.from_url(redis_url, decode_responses=True)
        self.records: Dict[str, Dict[str, Any]] = {}
        self.ready = False

    def init(self, df: pd.DataFrame) -> None:
        if df is None:
            raise ValueError("No researcher data loaded")
        self._create_index(df)
        self.ready = True

    def _create_index(self, df: pd.DataFrame) -> None:
        try:
            self.rdb.execute_command("FT.DROPINDEX", self.index_name, "DD")
        except ResponseError as exc:
            if "Unknown Index" not in str(exc):
                raise

        schema = [
            "FT.CREATE",
            self.index_name,
            "ON",
            "HASH",
            "PREFIX",
            "1",
            self.prefix,
            "NOOFFSETS",
            "SCHEMA",
            "name",
            "TEXT",
            "WEIGHT",
            "5",
            "PHONETIC",
            "dm:en",
            "title",
            "TEXT",
            "WEIGHT",
            "3",
            "company",
            "TEXT",
            "NOSTEM",
            "WEIGHT",
            "3",
            "location",
            "TEXT",
            "about",
            "TEXT",
            "current_role",
            "TEXT",
            "source_query",
            "TEXT",
            "company_tag",
            "TAG",
            "location_tag",
            "TAG",
            "total_publications",
            "NUMERIC",
            "total_patents",
            "NUMERIC",
        ]

        self.rdb.execute_command(*schema)

        pipe = self.rdb.pipeline()
        self.records = {}
        for idx, row in df.iterrows():
            doc_id = f"{self.prefix}{idx}"
            record = self._record_from_row(row)
            payload = self._payload_for_record(record)
            pipe.hset(doc_id, mapping=payload)
            self.records[doc_id] = record
        pipe.execute()

    def search(
        self,
        query: str,
        *,
        company_filter: Optional[str] = None,
        limit: int = 100,
    ) -> tuple[int, List[str]]:
        if not self.ready:
            raise RuntimeError("Search index is not ready")

        limit = max(1, limit)
        base_query = query.strip() or "*"
        final_query = base_query
        if company_filter:
            tag_value = self._escape_tag_value(company_filter.lower())
            filter_clause = f"@company_tag:{{{tag_value}}}"
            if final_query == "*":
                final_query = filter_clause
            else:
                final_query = f"({final_query}) {filter_clause}"

        response = self.rdb.execute_command(
            "FT.SEARCH",
            self.index_name,
            final_query,
            "RETURN",
            "0",
            "LIMIT",
            "0",
            str(limit),
        )

        if not response:
            return 0, []

        count = response[0]
        if len(response) <= 1:
            return count, []

        doc_ids: List[str] = []
        idx = 1
        while idx < len(response):
            doc_ids.append(response[idx])
            idx += 2

        return count, doc_ids

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

    def _payload_for_record(self, record: Dict[str, Any]) -> Dict[str, str]:
        payload = {
            "name": record["name"],
            "title": record["title"],
            "company": record["company"],
            "location": record["location"],
            "about": record["about"],
            "current_role": record["current_role"],
            "source_query": record["source_query"],
            "total_publications": str(record["total_publications"]),
            "total_patents": str(record["total_patents"]),
        }

        if record.get("company"):
            payload["company_tag"] = record["company"].lower()
        if record.get("location"):
            payload["location_tag"] = record["location"].lower()

        return {key: value if isinstance(value, str) else str(value) for key, value in payload.items()}

    def _escape_tag_value(self, value: str) -> str:
        escaped = value.replace("\\", "\\\\").replace(",", "\\,")
        return escaped.replace(" ", "\\ ")


text_search = TextSearch(REDIS_URL, REDIS_INDEX, REDIS_PREFIX)
def load_data() -> None:
    global researchers_df

    df = pd.read_csv(DATA_PATH)
    df = df.fillna("")
    for column in ["total_publications", "total_patents"]:
        if column in df.columns:
            df[column] = (
                pd.to_numeric(df[column], errors="coerce")
                .fillna(0)
                .astype(int)
            )

    researchers_df = df

@app.on_event("startup")
async def startup_event():
    global map_data
    load_data()
    if researchers_df is None:
        raise RuntimeError("Failed to load researcher data")

    # Initialize Search Index
    try:
        text_search.init(researchers_df)
        print("Full-text search index ready")
    except RedisError as exc:
        print(f"Failed to initialize Redis search index: {exc}")

    # Generate Visualization Data
    try:
        print("Generating visualization map...")
        map_data = generate_map_data(researchers_df)
        print("Visualization map ready")
    except Exception as e:
        print(f"Failed to generate visualization map: {e}")

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

    if text_search is None or not text_search.ready:
        raise HTTPException(status_code=503, detail="Search index not ready")

    try:
        total, doc_ids = text_search.search(
            query,
            company_filter=company_filter,
            limit=limit,
        )
    except RedisError as exc:
        raise HTTPException(status_code=500, detail="Search backend unavailable") from exc

    records = text_search.records_from_ids(doc_ids)
    researchers = [Researcher(**record) for record in records]

    return SearchResponse(researchers=researchers, total=int(total))

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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
