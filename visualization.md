Directory structure:
└── context-labs-aella-data-explorer/
    ├── README.md
    ├── LICENSE
    ├── Taskfile.yml
    ├── backend/
    │   ├── download_db.sh
    │   ├── import-to-local-d1.sh
    │   ├── pyproject.toml
    │   ├── wrangler.toml
    │   ├── .dev.vars.example
    │   └── src/
    │       ├── cache_generator.py
    │       ├── models.py
    │       └── worker.py
    ├── frontend/
    │   ├── eslint.config.js
    │   ├── index.html
    │   ├── package.json
    │   ├── postcss.config.js
    │   ├── prettier.config.cjs
    │   ├── tailwind.config.js
    │   ├── tsconfig.json
    │   ├── vite.config.ts
    │   ├── .prettierignore
    │   └── src/
    │       ├── index.css
    │       ├── LaionApp.tsx
    │       ├── main.tsx
    │       ├── vite-env.d.ts
    │       ├── components/
    │       │   ├── ClusterLegend.tsx
    │       │   ├── ClusterVisualization.tsx
    │       │   ├── DistributionChart.tsx
    │       │   ├── ForceDirectedCluster.tsx
    │       │   ├── LaionHotKeys.tsx
    │       │   ├── LearnMoreContent.tsx
    │       │   ├── LearnMoreSheet.tsx
    │       │   ├── PaperDetail.tsx
    │       │   ├── PaperSampleViewer.tsx
    │       │   ├── TemporalHeatmap.tsx
    │       │   └── TemporalStackedChart.tsx
    │       ├── lib/
    │       │   ├── models.ts
    │       │   ├── ui-client-utils.ts
    │       │   └── ui-shared.tsx
    │       ├── state/
    │       │   └── chartDataCache.ts
    │       ├── styles/
    │       │   └── fonts/
    │       │       └── inter.css
    │       ├── types/
    │       │   ├── assets.d.ts
    │       │   └── index.ts
    │       ├── ui/
    │       │   ├── index.tsx
    │       │   ├── components/
    │       │   │   ├── custom/
    │       │   │   │   ├── AlertInfo.tsx
    │       │   │   │   ├── AlertWarning.tsx
    │       │   │   │   ├── Centered.tsx
    │       │   │   │   ├── Code.tsx
    │       │   │   │   ├── CodeBlock.tsx
    │       │   │   │   ├── Col.tsx
    │       │   │   │   ├── CommandBlock.tsx
    │       │   │   │   ├── FakeH1.tsx
    │       │   │   │   ├── FeatureCard.tsx
    │       │   │   │   ├── GradientCard.tsx
    │       │   │   │   ├── Grid.tsx
    │       │   │   │   ├── HeaderComponents.tsx
    │       │   │   │   ├── HomePageBackdrop.tsx
    │       │   │   │   ├── InferenceIcon.tsx
    │       │   │   │   ├── JsonComponent.tsx
    │       │   │   │   ├── LoadingScreen.tsx
    │       │   │   │   ├── ResponsiveRow.tsx
    │       │   │   │   ├── Row.tsx
    │       │   │   │   ├── ScoreBadge.tsx
    │       │   │   │   ├── SearchInput.tsx
    │       │   │   │   ├── SelectableCard.tsx
    │       │   │   │   ├── StakingDashboardBanner.tsx
    │       │   │   │   ├── ThemeToggle.tsx
    │       │   │   │   ├── TooltipContentComponent.tsx
    │       │   │   │   └── WorkerLogsTerminal.tsx
    │       │   │   └── ui/
    │       │   │       ├── Accordion.tsx
    │       │   │       ├── Alert.tsx
    │       │   │       ├── AlertDialog.tsx
    │       │   │       ├── Avatar.tsx
    │       │   │       ├── Badge.tsx
    │       │   │       ├── Breadcrumb.tsx
    │       │   │       ├── Button.tsx
    │       │   │       ├── Calendar.tsx
    │       │   │       ├── Card.tsx
    │       │   │       ├── Chart.tsx
    │       │   │       ├── Checkbox.tsx
    │       │   │       ├── DateTimePicker.tsx
    │       │   │       ├── Dialog.tsx
    │       │   │       ├── DropdownMenu.tsx
    │       │   │       ├── Input.tsx
    │       │   │       ├── Label.tsx
    │       │   │       ├── Popover.tsx
    │       │   │       ├── ScaleLoader.tsx
    │       │   │       ├── Select.tsx
    │       │   │       ├── Separator.tsx
    │       │   │       ├── SeparatorBorder.tsx
    │       │   │       ├── Sheet.tsx
    │       │   │       ├── Skeleton.tsx
    │       │   │       ├── Slider.tsx
    │       │   │       ├── Spinner.tsx
    │       │   │       ├── Switch.tsx
    │       │   │       ├── Table.tsx
    │       │   │       ├── Tabs.tsx
    │       │   │       ├── Textarea.tsx
    │       │   │       ├── Toast.tsx
    │       │   │       ├── Toaster.tsx
    │       │   │       └── Tooltip.tsx
    │       │   ├── constants/
    │       │   │   └── ColorSystem.ts
    │       │   ├── hooks/
    │       │   │   ├── useBreakpoints.hook.ts
    │       │   │   ├── useHasMounted.hook.ts
    │       │   │   └── useToast.hook.ts
    │       │   ├── lib/
    │       │   │   └── utils.ts
    │       │   ├── providers/
    │       │   │   └── ThemeProvider.tsx
    │       │   ├── styles/
    │       │   │   └── global.css
    │       │   └── utils/
    │       │       └── getThemeColor.ts
    │       └── utils/
    │           ├── api.ts
    │           ├── layoutTransforms.ts
    │           └── routeMapping.ts
    └── .github/
        └── workflows/
            └── pr-checks.yml


Files Content:

================================================
FILE: README.md
================================================
# Aella Science Dataset Explorer

Interactive visualization and exploration of scientific papers from the Aella open science dataset.

This project is a collaboration between [Inference.net](https://inference.net) and [LAION](https://laion.ai). LAION curated the original dataset which is about ~100m scrapped scientific and research articles and Inference.net fine-tuned a custom model to extract structured summaries from the articles. This repo contains a visual explorer for a small subset of the extracted dataset.

View the live explorer at [https://aella.inference.net](https://aella.inference.net).

## Overview

A web application for exploring scientific papers with semantic embeddings, dimensionality reduction, and clustering visualizations.

## Architecture

- **Frontend**: React + TypeScript + Vite with D3.js for interactive visualizations
- **Backend**: Python FastAPI serving data from SQLite (D1 in production)
- **Storage**: SQLite locally, Cloudflare D1 + R2 in production

## Prerequisites

You'll need the following tools installed:

- **Python 3.11+** - [Download](https://www.python.org/downloads/)
- **uv** - Python dependency management - [Install](https://docs.astral.sh/uv/getting-started/installation/)
- **bun** - JavaScript runtime - [Install](https://bun.sh/)
- **Task** - Task runner - [Install](https://taskfile.dev/installation/)

## Setup

Install all dependencies:

```bash
task setup
```

This will install both backend and frontend dependencies.

## Quick Start

### 1. Get the Database

Download the database from R2:

```bash
task db:setup
```

This will download the SQLite database to `backend/data/db.sqlite`.

### 2. Run the Application

Run the backend and frontend in separate terminals:

**Backend (Terminal 1):**

```bash
task backend:dev
```

**Frontend (Terminal 2):**

```bash
task frontend:dev
```

The application will be available at:

- Frontend: `http://localhost:5173`
- API: `http://localhost:8787`
- API Docs: `http://localhost:8787/docs`

## Data Pipeline

> The code for the data pipeline that we used to construct this dataset is not yet open source, mostly because it was setup for a one-time process and not production-ready.

However, the general process was:

1. Initial data extraction and filtering

- Ran a pipeline to generate the summaries
- Excluded specific non-scientific content and failed summaries
- Compiled results for further processing

2. Semantic Embedding

- Generates 768-dimensional embeddings using SPECTER2 (allenai/specter2_base)
- Processes papers in batches with GPU acceleration support
- Stores embeddings as binary blobs for similarity search

3. Visualization & Clustering

- Reduces embeddings to 2D coordinates using UMAP with cosine distance
- Applies K-Means clustering with automatic optimization (20-60 clusters via silhouette scores)
- Generates initial cluster labels using TF-IDF analysis of titles and fields

4. LLM-Curated Labels

- Applies manually reviewed, domain-specific cluster labels
- Improves interpretability over automated TF-IDF labels

## Deployment

Deploy to Cloudflare:

```bash
task deploy
```

This will prompt you to deploy the backend API and/or frontend.

## Contributing

We welcome contributions to this project! Here's what you should know:

**Bug Fixes & Minor Improvements**

- Bug fixes are always welcome! Please submit a PR with a clear description of the issue and fix.
- Minor improvements to documentation, code quality, or performance are appreciated.

**New Features**

- This project is intentionally scoped as a one-time preview of this dataset.
- We are generally not planning to greatly expand the functionality beyond its current scope.
- If you want to add significant new features, we encourage you to fork the project and build on it!

**Before Submitting a PR**

- Ensure your code passes linting and formatting checks:
  ```bash
  task check
  ```
- Keep changes focused and well-documented.
- Test your changes with sample data when applicable.

## License

MIT License - see [LICENSE](LICENSE) file for details.



================================================
FILE: LICENSE
================================================
MIT License

Copyright (c) 2025 Inference.net

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



================================================
FILE: Taskfile.yml
================================================
# Taskfile for Cloudflare Workers (Python) workflow
# Requires: go-task (https://taskfile.dev) and Cloudflare Wrangler (v3.60+)
# Optional: Node.js (to install wrangler), Python 3.11+

version: '3'

vars:
  # Optional env selection for wrangler environments (e.g. "production", "staging").
  ENV: '{{.ENV | default ""}}'
  PORT: '{{.PORT | default "8000"}}'

tasks:
  default:
    desc: Show common tasks
    cmds:
      - task --list

  backend:setup:
    desc: Install Python dependencies
    cmds:
      - |
        echo "==> Installing Python dependencies";
        cd backend;
        uv sync

  db:setup:
    desc: Download database from R2
    cmds:
      - |
        cd backend;
        ./download_db.sh

  backend:dev:
    desc: Run local dev server (Python)
    cmds:
      - |
        echo "==> Starting local dev server";
        cd backend;
        uv run pywrangler dev

  backend:deploy:
    desc: Deploy the Worker to Cloudflare
    cmds:
      - |
        echo "==> Deploying Cloudflare Worker";
        cd backend;
        uv run pywrangler deploy

  backend:tail:
    desc: Stream Worker logs
    cmds:
      - |
        echo "==> Tailing logs";
        cd backend;
        uv run pywrangler tail --format=pretty

  backend:format:
    desc: Format backend code with Ruff
    cmds:
      - |
        echo "==> Formatting backend code";
        cd backend;
        uv run ruff format

  backend:format:check:
    desc: Check backend code formatting
    cmds:
      - |
        echo "==> Checking backend formatting";
        cd backend;
        uv run ruff format --check

  backend:lint:
    desc: Lint backend code with Ruff
    cmds:
      - |
        echo "==> Linting backend code";
        cd backend;
        uv run ruff check

  backend:lint:fix:
    desc: Lint and fix backend code
    cmds:
      - |
        echo "==> Linting and fixing backend code";
        cd backend;
        uv run ruff check --fix

  frontend:setup:
    desc: Install frontend dependencies
    cmds:
      - |
        echo "==> Installing frontend dependencies";
        cd frontend;
        bun install
  
  frontend:dev:
    desc: Run local dev server (Frontend)
    cmds:
      - |
        echo "==> Starting local dev server";
        cd frontend;
        bun run dev
        
  frontend:deploy:
    desc: Deploy frontend
    cmds:
      - |
        echo "==> Deploying frontend";
        cd frontend;
        bun run deploy

  frontend:format:
    desc: Format frontend code with Prettier
    cmds:
      - |
        echo "==> Formatting frontend code";
        cd frontend;
        bun run format

  frontend:format:check:
    desc: Check frontend code formatting with Prettier
    cmds:
      - |
        echo "==> Checking frontend formatting";
        cd frontend;
        bun run format:check

  frontend:tsc:
    desc: Check frontend code with TypeScript
    cmds:
      - |
        echo "==> Checking frontend code with TypeScript";
        cd frontend;
        bun run tsc

  frontend:lint:
    desc: Lint frontend code with ESLint
    cmds:
      - |
        echo "==> Linting frontend code";
        cd frontend;
        bun run lint

  frontend:lint:fix:
    desc: Lint and fix frontend code with ESLint
    cmds:
      - |
        echo "==> Linting and fixing frontend code";
        cd frontend;
        bun run lint:fix

  format:
    desc: Format both frontend and backend code
    cmds:
      - task backend:format
      - task frontend:format

  format:check:
    desc: Check formatting for both frontend and backend
    cmds:
      - task backend:format:check
      - task frontend:format:check

  lint:
    desc: Lint both frontend and backend code
    cmds:
      - task backend:lint
      - task frontend:lint

  lint:fix:
    desc: Lint and fix both frontend and backend code
    cmds:
      - task backend:lint:fix
      - task frontend:lint:fix

  setup:
    desc: Setup tasks
    cmds:
      - task backend:setup
      - task frontend:setup

  whoami:
    desc: Show Cloudflare account and user info
    cmds:
      - wrangler whoami

  check:
    desc: Check formatting and linting
    cmds:
      - task format:check
      - task lint
      - task frontend:tsc

  deploy:
    desc: Deploy API and/or frontend with prompts
    cmds:
      - |
        echo "==> Deploy workflow";
        
        # Prompt for API deployment
        read -p "Deploy the Cloudflare worker? y/n: " api_choice;
        
        # Prompt for frontend deployment
        read -p "Deploy the frontend? y/n: " frontend_choice;
        
        # Deploy API if user confirmed
        if [ "$api_choice" = "y" ] || [ "$api_choice" = "Y" ]; then
          echo "";
          echo "==> Deploying API...";
          task backend:deploy;
        else
          echo "==> Skipping API deployment";
        fi
        
        # Deploy frontend if user confirmed
        if [ "$frontend_choice" = "y" ] || [ "$frontend_choice" = "Y" ]; then
          echo "";
          echo "==> Deploying frontend...";
          task frontend:deploy;
        else
          echo "==> Skipping frontend deployment";
        fi
        
        echo "";
        echo "==> Deploy workflow complete!";

  


================================================
FILE: backend/download_db.sh
================================================
#!/bin/bash
set -e

# Download database from R2
R2_URL="https://laion-data-assets.inference.net/db.sqlite"
DB_PATH="data/db.sqlite"

echo "==> Downloading database from R2..."
echo "    Source: ${R2_URL}"
echo "    Target: ${DB_PATH}"

# Create data directory if it doesn't exist
mkdir -p data

# Download the database
curl -L -o "${DB_PATH}" "${R2_URL}"

echo "==> Database downloaded successfully!"
echo "    Location: ${DB_PATH}"



================================================
FILE: backend/import-to-local-d1.sh
================================================
#!/bin/bash
# Script to set up local D1 database for development
# This copies your existing SQLite database to where Wrangler expects it

set -e

echo "Setting up local D1 database for development..."
echo ""

# Find the D1 database path (Wrangler stores it in .wrangler/state/v3/d1/miniflare-D1DatabaseObject/)
D1_DIR=".wrangler/state/v3/d1/miniflare-D1DatabaseObject"

if [ ! -d "$D1_DIR" ]; then
    echo "Error: D1 directory not found at $D1_DIR"
    echo "Please run 'task dev' first to initialize the D1 database, then run this script."
    exit 1
fi

# Find the actual .sqlite file in the directory
D1_DB_FILE=$(find "$D1_DIR" -name "*.sqlite" -type f | head -n 1)

if [ -z "$D1_DB_FILE" ]; then
    echo "Error: No .sqlite file found in $D1_DIR"
    echo "Please run 'task dev' first to initialize the D1 database, then run this script."
    exit 1
fi

echo "Found local D1 database at: $D1_DB_FILE"
echo "Copying data/db.sqlite to replace it..."
echo ""

# Backup the existing database first
if [ -f "$D1_DB_FILE" ]; then
    echo "Creating backup: ${D1_DB_FILE}.backup"
    cp "$D1_DB_FILE" "${D1_DB_FILE}.backup"
fi

# Copy our database
cp data/db.sqlite "$D1_DB_FILE"

echo ""
echo "✓ Database copied successfully!"
echo ""
echo "You can now run: task dev"
echo ""
echo "Note: The local D1 database is stored at: $D1_DB_FILE"
echo "If you need to reset it, just delete that file and run 'task dev' again to recreate it."



================================================
FILE: backend/pyproject.toml
================================================
[project]
name = "laion-api"
version = "1.0.0"
description = "LAION Paper Visualizer API - Python Worker for Cloudflare"
requires-python = ">=3.11"

dependencies = ["fastapi>=0.110.0", "pydantic>=2.6.0", "webtypy>=0.1.7"]

[dependency-groups]
dev = ["ruff>=0.14.1", "workers-py"]

[tool.ruff]
line-length = 200
target-version = "py311"

[tool.ruff.lint]
select = [
    "E",   # pycodestyle errors
    "W",   # pycodestyle warnings
    "F",   # pyflakes
    "I",   # isort
    "N",   # pep8-naming
    "UP",  # pyupgrade
    "B",   # flake8-bugbear
    "C4",  # flake8-comprehensions
    "SIM", # flake8-simplify
]
ignore = []

[tool.ruff.format]
quote-style = "double"
indent-style = "space"



================================================
FILE: backend/wrangler.toml
================================================
name = "laion-api"
main = "src/worker.py"
compatibility_date = "2025-10-09"
compatibility_flags = ["python_workers", "python_dedicated_snapshot"]

[vars]
R2_ASSETS_URL = "https://laion-data-assets.inference.net"

[env.production.vars]
R2_ASSETS_URL = "https://laion-data-assets.inference.net"

# D1 database binding
# For local dev, this creates a local SQLite database in .wrangler/state/
# For production, this points to the remote D1 database
[[d1_databases]]
binding = "LAION_DB"
database_name = "laion-data-exploration"
database_id = "48ad4777-ba9c-418b-be05-904dca96a7bf"

[observability]
[observability.logs]
enabled = true
head_sampling_rate = 1
invocation_logs = true
persist = true



================================================
FILE: backend/.dev.vars.example
================================================
# Local development environment variables for Wrangler
# Copy this file to .dev.vars and update with your local paths
# These are only used in local dev mode (wrangler dev)

# Absolute path to the local SQLite database
# Example: /Users/yourname/Documents/laion-data-explorer/backend/data/db.sqlite
LOCAL_DB_PATH=



================================================
FILE: backend/src/cache_generator.py
================================================
"""Generate and cache compressed API responses in SQLite tables."""

import json
import sqlite3
import time
from pathlib import Path

from models import ClusterInfo, ClustersResponse

# Paths
DB_PATH = Path(__file__).parent.parent / "data" / "db.sqlite"


def get_db():
    """Get database connection."""
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    return conn


def initialize_cache_tables():
    """Create cache table if it doesn't exist."""
    print("Initializing cache table...")
    conn = get_db()
    cursor = conn.cursor()

    # Table for clusters cache (JSON format, small so no compression needed)
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS cache_clusters (
            id INTEGER PRIMARY KEY CHECK (id = 1),
            data TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    conn.commit()
    conn.close()
    print("  Cache table ready")


def get_cluster_color(cluster_id: int) -> str:
    """Get consistent color for a cluster (copied from main.py)."""
    cluster_colors = [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#9467bd",
        "#8c564b",
        "#e377c2",
        "#7f7f7f",
        "#bcbd22",
        "#17becf",
        "#aec7e8",
        "#ffbb78",
        "#98df8a",
        "#ff9896",
        "#c5b0d5",
        "#c49c94",
        "#f7b6d2",
        "#c7c7c7",
        "#dbdb8d",
        "#9edae5",
        "#393b79",
        "#637939",
        "#8c6d31",
        "#843c39",
        "#7b4173",
        "#5254a3",
        "#8ca252",
        "#bd9e39",
        "#ad494a",
        "#a55194",
    ]
    if cluster_id < 0:
        return "#E8E8E8"  # Light gray pastel for unclustered
    return cluster_colors[cluster_id % len(cluster_colors)]


def generate_clusters_cache():
    """Generate cached response for clusters query and store in SQLite."""
    print("Generating cache for clusters...")
    start_time = time.time()

    conn = get_db()
    cursor = conn.cursor()

    query = """
        SELECT cluster_id,
               COALESCE(claude_label, cluster_label) as cluster_label,
               COUNT(*) as count
        FROM papers
        WHERE cluster_id IS NOT NULL AND x IS NOT NULL
        GROUP BY cluster_id, COALESCE(claude_label, cluster_label)
        ORDER BY cluster_id
    """

    query_start = time.time()
    cursor.execute(query)
    rows = cursor.fetchall()
    query_time = time.time() - query_start
    print(f"  DB Query: {query_time:.3f}s, {len(rows)} clusters")

    clusters = [
        ClusterInfo(
            cluster_id=row["cluster_id"],
            cluster_label=row["cluster_label"],
            count=row["count"],
            color=get_cluster_color(row["cluster_id"]),
        )
        for row in rows
    ]

    response_data = ClustersResponse(clusters=clusters)

    # Serialize to JSON (no compression needed for small payload)
    serialization_start = time.time()
    json_str = json.dumps(response_data.model_dump())
    serialization_time = time.time() - serialization_start
    print(f"  Serialization: {serialization_time:.3f}s")

    # Save to SQLite cache table
    save_start = time.time()
    cursor.execute(
        "INSERT OR REPLACE INTO cache_clusters (id, data, created_at) VALUES (1, ?, CURRENT_TIMESTAMP)",
        (json_str,),
    )
    conn.commit()
    save_time = time.time() - save_start
    print(f"  DB Write: {save_time:.3f}s")

    total_time = time.time() - start_time
    size = len(json_str.encode("utf-8"))

    print(f"  Total: {total_time:.3f}s")
    print(f"  Size: {size:,} bytes")
    print("  Saved to: cache_clusters table")

    conn.close()


if __name__ == "__main__":
    print("=" * 60)
    print("API Response Cache Generator")
    print("=" * 60)
    print()

    # Initialize cache table
    initialize_cache_tables()
    print()

    # Generate clusters cache
    generate_clusters_cache()
    print()

    print("✓ Cache generation complete!")
    print("✓ Cluster data stored in SQLite cache table")



================================================
FILE: backend/src/models.py
================================================
"""Pydantic models for API responses."""

from pydantic import BaseModel


class PaperSummary(BaseModel):
    """Summary view of a paper for list/visualization."""

    id: int
    title: str | None
    x: float | None
    y: float | None
    z: float | None
    cluster_id: int | None
    cluster_label: str | None
    field_subfield: str | None
    publication_year: int | None
    classification: str | None


class PaperDetail(BaseModel):
    """Detailed view of a paper."""

    id: int
    title: str | None
    sample: str | None
    summarization: str | None
    x: float | None
    y: float | None
    z: float | None
    cluster_id: int | None
    cluster_label: str | None
    field_subfield: str | None
    publication_year: int | None
    classification: str | None
    nearest_papers: list["PaperSummary"]


class PaperSample(BaseModel):
    """Paper sample with extracted data and cluster info."""

    paper_id: int
    sample: str
    title: str | None
    summarization: str | None
    cluster_id: int | None
    cluster_label: str | None
    field_subfield: str | None
    publication_year: int | None
    classification: str | None


class PaperSampleList(BaseModel):
    """List of paper IDs that have samples."""

    paper_ids: list[int]


class ClusterInfo(BaseModel):
    """Information about a cluster."""

    cluster_id: int
    cluster_label: str
    count: int
    color: str


class PapersResponse(BaseModel):
    """Response containing list of papers."""

    papers: list[PaperSummary]


class ClustersResponse(BaseModel):
    """Response containing cluster information."""

    clusters: list[ClusterInfo]


class TemporalDataPoint(BaseModel):
    """Data point for a specific year in temporal analysis."""

    year: int
    count: int


class ClusterTemporalData(BaseModel):
    """Temporal evolution data for a single cluster."""

    cluster_id: int
    cluster_label: str
    color: str
    temporal_data: list[TemporalDataPoint]


class TemporalDataResponse(BaseModel):
    """Response containing temporal evolution data for all clusters."""

    clusters: list[ClusterTemporalData]



================================================
FILE: backend/src/worker.py
================================================
"""FastAPI server for paper visualization."""

import gzip
import json
import logging
import os
import sqlite3
import time
from collections.abc import Sequence
from pathlib import Path
from typing import Any

from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, Response
from workers import WorkerEntrypoint

from models import (
    ClusterInfo,
    ClustersResponse,
    ClusterTemporalData,
    PaperDetail,
    PaperSample,
    PaperSampleList,
    PapersResponse,
    PaperSummary,
    TemporalDataPoint,
    TemporalDataResponse,
)

# Configure logging
# Note: In Cloudflare Workers, all logs go to stderr and show as errors in wrangler
# Set to WARNING to reduce log noise, or INFO for detailed performance metrics
logging.basicConfig(
    level=logging.INFO,  # Changed to INFO for debugging database connection
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="LAION Paper Visualizer API",
    description="API for exploring scientific papers with embeddings and clusters",
    version="1.0.0",
)

# Enable CORS for frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for now
    allow_credentials=False,  # Must be False when using wildcard
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database path - try multiple locations for robustness
# First, check if we're in local dev mode using an environment variable
DB_PATH = None
local_db_path = os.environ.get("LOCAL_DB_PATH")

if local_db_path:
    # Use explicitly configured path for local development
    DB_PATH = Path(local_db_path)
else:
    # Try relative to the worker file
    DB_PATH = Path(__file__).parent.parent / "data" / "db.sqlite"
    if not DB_PATH.exists():
        # Try relative to current working directory
        DB_PATH = Path("backend/data/db.sqlite")
    if not DB_PATH.exists():
        # Try just data/db.sqlite (when cwd is backend/)
        DB_PATH = Path("data/db.sqlite")

logger.info(f"Using database at: {DB_PATH.resolve()} (exists: {DB_PATH.exists()})")
CACHE_TTL_SECONDS = 5


@app.middleware("http")
async def apply_cache_headers(request: Request, call_next):
    """Apply short-lived caching so browsers and Cloudflare cache responses."""
    response = await call_next(request)
    cache_control_value = f"public, max-age={CACHE_TTL_SECONDS}"
    response.headers["Cache-Control"] = cache_control_value
    response.headers["CDN-Cache-Control"] = cache_control_value
    response.headers["Surrogate-Control"] = cache_control_value

    # Ensure compressed responses vary correctly for downstream caches.
    if "Vary" in response.headers:
        if "accept-encoding" not in response.headers["Vary"].lower():
            response.headers["Vary"] = f"{response.headers['Vary']}, Accept-Encoding"
    else:
        response.headers["Vary"] = "Accept-Encoding"

    return response


@app.exception_handler(Exception)
async def handle_uncaught_exceptions(request: Request, exc: Exception) -> JSONResponse:
    """Log uncaught exceptions and return a generic error response."""
    import asyncio

    if isinstance(exc, HTTPException):
        headers = getattr(exc, "headers", None)
        return JSONResponse(
            status_code=exc.status_code,
            content={"detail": exc.detail},
            headers=headers if headers is not None else None,
        )

    # Suppress InvalidStateError - it's a harmless ASGI adapter issue
    # that occurs after responses are already sent successfully
    if isinstance(exc, asyncio.InvalidStateError):
        return JSONResponse(
            status_code=200,
            content={"detail": "OK"},
        )

    logger.exception("Unhandled error during request %s %s", request.method, request.url)

    return JSONResponse(
        status_code=500,
        content={"detail": "Internal Server Error"},
    )


def _normalize_params(params: Sequence[Any] | None) -> Sequence[Any]:
    """Ensure query parameters are always a tuple."""
    if params is None:
        return ()
    if isinstance(params, tuple):
        return params
    if isinstance(params, list):
        return tuple(params)
    return (params,)


class BaseDatabase:
    async def fetch_all(self, query: str, params: Sequence[Any] | None = None) -> list[dict[str, Any]]:
        raise NotImplementedError

    async def fetch_one(self, query: str, params: Sequence[Any] | None = None) -> dict[str, Any] | None:
        raise NotImplementedError


class SqliteDatabase(BaseDatabase):
    def __init__(self, db_path: Path) -> None:
        self.db_path = db_path
        logger.info(f"SqliteDatabase initialized with path: {self.db_path.resolve()}")
        logger.info(f"Database file exists: {self.db_path.exists()}")

    async def fetch_all(self, query: str, params: Sequence[Any] | None = None) -> list[dict[str, Any]]:
        params = _normalize_params(params)
        try:
            with sqlite3.connect(str(self.db_path)) as conn:
                conn.row_factory = sqlite3.Row
                cursor = conn.cursor()
                cursor.execute(query, params)
                rows = cursor.fetchall()
            return [dict(row) for row in rows]
        except sqlite3.OperationalError as e:
            logger.error(f"SQLite error with db_path={self.db_path.resolve()}, exists={self.db_path.exists()}: {e}")
            raise

    async def fetch_one(self, query: str, params: Sequence[Any] | None = None) -> dict[str, Any] | None:
        params = _normalize_params(params)
        try:
            with sqlite3.connect(str(self.db_path)) as conn:
                conn.row_factory = sqlite3.Row
                cursor = conn.cursor()
                cursor.execute(query, params)
                row = cursor.fetchone()
            return dict(row) if row else None
        except sqlite3.OperationalError as e:
            logger.error(f"SQLite error with db_path={self.db_path.resolve()}, exists={self.db_path.exists()}: {e}")
            raise


class D1Database(BaseDatabase):
    def __init__(self, binding: Any) -> None:
        self.binding = binding

    def _convert_row(self, row: Any) -> dict[str, Any]:
        """Convert a D1 row (JsProxy) to a Python dict, handling null values."""
        result = {}
        for key, value in row.object_entries():
            # Convert JavaScript null to Python None
            # Check type name as JsNull doesn't work well with isinstance
            type_name = type(value).__name__
            if value is None or type_name == "JsNull":
                result[key] = None
            else:
                result[key] = value
        return result

    async def fetch_all(self, query: str, params: Sequence[Any] | None = None) -> list[dict[str, Any]]:
        params = _normalize_params(params)
        statement = self.binding.prepare(query)
        if params:
            statement = statement.bind(*params)
        result = await statement.all()
        # Convert JsProxy objects to Python dicts
        return [self._convert_row(row) for row in result.results]

    async def fetch_one(self, query: str, params: Sequence[Any] | None = None) -> dict[str, Any] | None:
        params = _normalize_params(params)
        statement = self.binding.prepare(query)
        if params:
            statement = statement.bind(*params)
        result = await statement.first()
        # Convert JsProxy object to Python dict
        if result is None:
            return None
        return self._convert_row(result)


def get_database(request: Request | None = None) -> BaseDatabase:
    """Return an appropriate database client for the current environment."""
    if request is not None:
        env = request.scope.get("env")
        if env is not None:
            binding = getattr(env, "LAION_DB", None) or getattr(env, "DB", None)
            if binding is not None:
                return D1Database(binding)
    return SqliteDatabase(DB_PATH)


# Predefined color palette for clusters (pastel theme)
CLUSTER_COLORS = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
    "#aec7e8",
    "#ffbb78",
    "#98df8a",
    "#ff9896",
    "#c5b0d5",
    "#c49c94",
    "#f7b6d2",
    "#c7c7c7",
    "#dbdb8d",
    "#9edae5",
    "#393b79",
    "#637939",
    "#8c6d31",
    "#843c39",
    "#7b4173",
    "#5254a3",
    "#8ca252",
    "#bd9e39",
    "#ad494a",
    "#a55194",
]


def get_cluster_color(cluster_id: int) -> str:
    """Get consistent color for a cluster."""
    if cluster_id < 0:
        return "#E8E8E8"  # Light gray pastel for unclustered
    return CLUSTER_COLORS[cluster_id % len(CLUSTER_COLORS)]


@app.get("/")
async def root():
    """Root endpoint."""
    return {
        "message": "LAION Paper Visualizer API",
        "version": "1.0.0",
        "docs": "/docs",
    }


@app.get("/api/papers")
async def get_papers(
    request: Request,
    cluster_id: int | None = Query(None, description="Filter by cluster ID"),
    limit: int | None = Query(None, description="Limit number of results"),
    sample_size: int | None = Query(None, description="Sample N most recent papers per cluster"),
):
    """Get all papers with coordinates and cluster information (gzip compressed)."""
    start_time = time.time()

    # Check if R2 cache is available (production mode)
    # Only use R2 cache if no filters are applied (full dataset request)
    env = request.scope.get("env")
    r2_assets_url = getattr(env, "R2_ASSETS_URL", None) if env else None

    if r2_assets_url and cluster_id is None and limit is None and sample_size is None:
        # Fetch from R2 cache using native Workers fetch API
        logger.info(f"Fetching papers from R2: {r2_assets_url}")
        try:
            from js import fetch as js_fetch

            r2_url = f"{r2_assets_url}/cache-papers.gz"
            response = await js_fetch(r2_url)

            if not response.ok:
                raise Exception(f"R2 fetch failed with status {response.status}")

            # Get the response as bytes (arrayBuffer)
            array_buffer = await response.arrayBuffer()
            # Convert JavaScript ArrayBuffer to Python bytes
            content = bytes(array_buffer.to_py())

            # Return the gzipped content directly
            return Response(
                content=content,
                media_type="application/octet-stream",
                headers={"X-Content-Compressed": "gzip"},
            )
        except Exception as e:
            logger.warning(f"Failed to fetch from R2, falling back to database: {e}")
            # Fall through to database query

    db = get_database(request)

    # Query papers table directly
    # If sample_size is specified, use a subquery approach with GROUP BY and random sampling
    if sample_size is not None and cluster_id is None:
        query_start = time.time()

        # Use a simpler approach: get papers ordered by cluster and year,
        # then limit in Python (more efficient than N queries)
        # But ONLY fetch what we need with LIMIT
        max_clusters = 100
        max_fetch = sample_size * max_clusters  # Fetch at most this many total

        all_rows = await db.fetch_all(
            """
            SELECT id, title, x, y, z, cluster_id,
                   COALESCE(claude_label, cluster_label) as cluster_label,
                   field_subfield, publication_year, classification
            FROM papers
            WHERE x IS NOT NULL AND y IS NOT NULL AND cluster_id IS NOT NULL
            ORDER BY cluster_id, publication_year DESC, id DESC
            LIMIT ?
            """,
            (max_fetch,),
        )

        # Sample N papers per cluster in Python (fast since data is pre-sorted)
        cluster_samples = {}
        for row in all_rows:
            cid = row["cluster_id"]
            if cid not in cluster_samples:
                cluster_samples[cid] = []
            if len(cluster_samples[cid]) < sample_size:
                cluster_samples[cid].append(row)

        # Flatten back to a list
        rows = []
        for cid in sorted(cluster_samples.keys()):
            rows.extend(cluster_samples[cid])

        query_time = time.time() - query_start
        logger.info(f"DB Query (sample_size={sample_size}): {query_time:.3f}s, fetched {len(all_rows)} rows, sampled {len(rows)} papers from {len(cluster_samples)} clusters")
    else:
        # Original query for full data or single cluster
        query = """
            SELECT id, title, x, y, z, cluster_id,
                   COALESCE(claude_label, cluster_label) as cluster_label,
                   field_subfield, publication_year, classification
            FROM papers
            WHERE x IS NOT NULL AND y IS NOT NULL
        """
        params: list[Any] = []

        if cluster_id is not None:
            query += " AND cluster_id = ?"
            params.append(cluster_id)

        query += " ORDER BY id"

        if limit is not None:
            query += " LIMIT ?"
            params.append(limit)

        query_start = time.time()
        rows = await db.fetch_all(query, params)
        query_time = time.time() - query_start

        logger.info(f"DB Query (cluster_id={cluster_id}, limit={limit}): {query_time:.3f}s, returned {len(rows)} papers")

    papers = [
        PaperSummary(
            id=row["id"],
            title=row["title"],
            x=row["x"],
            y=row["y"],
            z=row["z"],
            cluster_id=row["cluster_id"],
            cluster_label=row["cluster_label"],
            field_subfield=row["field_subfield"],
            publication_year=row["publication_year"],
            classification=row["classification"],
        )
        for row in rows
    ]

    response_data = PapersResponse(papers=papers)

    # Compress the JSON response
    serialization_start = time.time()
    json_str = json.dumps(response_data.model_dump())
    serialization_time = time.time() - serialization_start

    compression_start = time.time()
    compressed_content = gzip.compress(json_str.encode("utf-8"), compresslevel=6)
    compression_time = time.time() - compression_start

    total_time = time.time() - start_time

    uncompressed_size = len(json_str.encode("utf-8"))
    compressed_size = len(compressed_content)
    compression_ratio = (compressed_size / uncompressed_size) * 100

    logger.info(f"Serialization: {serialization_time:.3f}s, Compression: {compression_time:.3f}s, Total: {total_time:.3f}s")
    logger.info(f"Size: {uncompressed_size:,} -> {compressed_size:,} bytes ({compression_ratio:.1f}% compression)")

    return Response(
        content=compressed_content,
        media_type="application/octet-stream",
        headers={"X-Content-Compressed": "gzip"},
    )


@app.get("/api/papers/{paper_id}", response_model=PaperDetail)
async def get_paper(paper_id: int, request: Request):
    """Get detailed information for a specific paper, including nearest papers."""
    db = get_database(request)

    # Note: 'sample' column excluded from query (not available in D1)
    row = await db.fetch_one(
        """
        SELECT id, title, summarization, x, y, z, cluster_id,
               COALESCE(claude_label, cluster_label) as cluster_label,
               field_subfield, publication_year, classification, nearest_paper_ids
        FROM papers
        WHERE id = ?
    """,
        (paper_id,),
    )

    if not row:
        raise HTTPException(status_code=404, detail="Paper not found")

    # Fetch nearest papers if pre-computed IDs exist
    nearest_papers = []
    if row["nearest_paper_ids"]:
        try:
            nearest_ids = json.loads(row["nearest_paper_ids"])
            if nearest_ids:
                # Fetch papers by IDs
                placeholders = ",".join("?" * len(nearest_ids))
                nearest_rows = await db.fetch_all(
                    f"""
                    SELECT id, title, x, y, z, cluster_id,
                           COALESCE(claude_label, cluster_label) as cluster_label,
                           field_subfield, publication_year, classification
                    FROM papers
                    WHERE id IN ({placeholders})
                """,
                    nearest_ids,
                )

                # Maintain order from nearest_ids
                row_map = {r["id"]: r for r in nearest_rows}
                ordered_rows = [row_map[pid] for pid in nearest_ids if pid in row_map]

                nearest_papers = [
                    PaperSummary(
                        id=r["id"],
                        title=r["title"],
                        x=r["x"],
                        y=r["y"],
                        z=r["z"],
                        cluster_id=r["cluster_id"],
                        cluster_label=r["cluster_label"],
                        field_subfield=r["field_subfield"],
                        publication_year=r["publication_year"],
                        classification=r["classification"],
                    )
                    for r in ordered_rows
                ]
        except (json.JSONDecodeError, KeyError):
            logger.warning(f"Failed to parse nearest_paper_ids for paper {paper_id}")
            # nearest_papers remains empty list

    return PaperDetail(
        id=row["id"],
        title=row["title"],
        sample=None,  # Excluded from query (not in D1)
        summarization=row["summarization"],
        x=row["x"],
        y=row["y"],
        z=row["z"],
        cluster_id=row["cluster_id"],
        cluster_label=row["cluster_label"],
        field_subfield=row["field_subfield"],
        publication_year=row["publication_year"],
        classification=row["classification"],
        nearest_papers=nearest_papers,
    )


@app.get("/api/clusters", response_model=ClustersResponse)
async def get_clusters(request: Request):
    """Get cluster statistics and colors."""
    start_time = time.time()

    # Check if R2 cache is available (production mode)
    env = request.scope.get("env")
    r2_assets_url = getattr(env, "R2_ASSETS_URL", None) if env else None

    if r2_assets_url:
        # Fetch from R2 cache using native Workers fetch API
        logger.info(f"Fetching clusters from R2: {r2_assets_url}")
        try:
            from js import fetch as js_fetch

            r2_url = f"{r2_assets_url}/cache-clusters.gz"
            response = await js_fetch(r2_url)

            if not response.ok:
                raise Exception(f"R2 fetch failed with status {response.status}")

            # Get the response as bytes (arrayBuffer)
            array_buffer = await response.arrayBuffer()
            # Convert JavaScript ArrayBuffer to Python bytes
            content = bytes(array_buffer.to_py())

            # Decompress and return as JSON
            decompressed = gzip.decompress(content)
            return JSONResponse(content=json.loads(decompressed))
        except Exception as e:
            logger.warning(f"Failed to fetch from R2, falling back to database: {e}")
            # Fall through to database query

    db = get_database(request)

    # Query papers table directly
    rows = await db.fetch_all(
        """
        SELECT cluster_id,
               COALESCE(claude_label, cluster_label) as cluster_label,
               COUNT(*) as count
        FROM papers
        WHERE cluster_id IS NOT NULL AND x IS NOT NULL
        GROUP BY cluster_id, COALESCE(claude_label, cluster_label)
        ORDER BY cluster_id
    """
    )

    clusters = [
        ClusterInfo(
            cluster_id=row["cluster_id"],
            cluster_label=row["cluster_label"],
            count=row["count"],
            color=get_cluster_color(row["cluster_id"]),
        )
        for row in rows
    ]

    total_time = time.time() - start_time
    logger.info(f"Generated clusters response in {total_time:.3f}s")

    return ClustersResponse(clusters=clusters)


@app.get("/api/search")
async def search_papers(
    request: Request,
    q: str = Query(..., description="Search query for title or field"),
    limit: int = Query(100, description="Maximum number of results"),
):
    """Search papers by title or field (gzip compressed)."""
    db = get_database(request)

    query = """
        SELECT id, title, x, y, z, cluster_id,
               COALESCE(claude_label, cluster_label) as cluster_label,
               field_subfield, publication_year, classification
        FROM papers
        WHERE x IS NOT NULL AND y IS NOT NULL
            AND (title LIKE ? OR field_subfield LIKE ?)
        ORDER BY id
        LIMIT ?
    """
    search_pattern = f"%{q}%"
    rows = await db.fetch_all(query, (search_pattern, search_pattern, limit))

    papers = [
        PaperSummary(
            id=row["id"],
            title=row["title"],
            x=row["x"],
            y=row["y"],
            z=row["z"],
            cluster_id=row["cluster_id"],
            cluster_label=row["cluster_label"],
            field_subfield=row["field_subfield"],
            publication_year=row["publication_year"],
            classification=row["classification"],
        )
        for row in rows
    ]

    response_data = PapersResponse(papers=papers)

    # Compress the JSON response
    json_str = json.dumps(response_data.model_dump())
    compressed_content = gzip.compress(json_str.encode("utf-8"), compresslevel=6)

    return Response(
        content=compressed_content,
        media_type="application/octet-stream",
        headers={"X-Content-Compressed": "gzip"},
    )


@app.get("/api/papers/{paper_id}/nearest", response_model=PapersResponse)
async def get_nearest_papers(
    request: Request,
    paper_id: int,
    limit: int = Query(15, description="Number of nearest papers to return"),
):
    """Get the nearest papers to a given paper based on Euclidean distance in embedding space."""
    db = get_database(request)

    # Try to use pre-computed nearest neighbors first (fast path)
    target_paper = await db.fetch_one(
        """
        SELECT nearest_paper_ids, x, y, z
        FROM papers
        WHERE id = ?
    """,
        (paper_id,),
    )

    if not target_paper:
        raise HTTPException(status_code=404, detail="Paper not found")

    # Fast path: use pre-computed nearest neighbors if available
    if target_paper["nearest_paper_ids"]:
        try:
            nearest_ids = json.loads(target_paper["nearest_paper_ids"])
            # Limit to requested number
            nearest_ids = nearest_ids[:limit]

            if nearest_ids:
                # Fetch papers by IDs
                placeholders = ",".join("?" * len(nearest_ids))
                rows = await db.fetch_all(
                    f"""
                    SELECT id, title, x, y, z, cluster_id,
                           COALESCE(claude_label, cluster_label) as cluster_label,
                           field_subfield, publication_year, classification
                    FROM papers
                    WHERE id IN ({placeholders})
                """,
                    nearest_ids,
                )

                # Maintain order from nearest_ids
                row_map = {row["id"]: row for row in rows}
                ordered_rows = [row_map[pid] for pid in nearest_ids if pid in row_map]

                papers = [
                    PaperSummary(
                        id=row["id"],
                        title=row["title"],
                        x=row["x"],
                        y=row["y"],
                        z=row["z"],
                        cluster_id=row["cluster_id"],
                        cluster_label=row["cluster_label"],
                        field_subfield=row["field_subfield"],
                        publication_year=row["publication_year"],
                        classification=row["classification"],
                    )
                    for row in ordered_rows
                ]

                return PapersResponse(papers=papers)
        except (json.JSONDecodeError, KeyError):
            logger.warning(f"Failed to parse pre-computed nearest neighbors for paper {paper_id}, falling back to distance calculation")
            # Fall through to slow path

    # Slow path: compute distances in real-time (fallback for papers without pre-computed data)
    if target_paper["x"] is None or target_paper["y"] is None:
        raise HTTPException(status_code=404, detail="Paper has no coordinates")

    target_x, target_y, target_z = target_paper["x"], target_paper["y"], target_paper["z"]
    target_z = target_z if target_z is not None else 0.0

    logger.info(f"Computing nearest neighbors in real-time for paper {paper_id} (pre-computed data not available)")

    # Find nearest papers using Euclidean distance. SQLite doesn't include sqrt, so we sort on squared distance.
    rows = await db.fetch_all(
        """
        SELECT id, title, x, y, z, cluster_id,
               COALESCE(claude_label, cluster_label) as cluster_label,
               field_subfield, publication_year, classification,
               ((x - ?) * (x - ?) + (y - ?) * (y - ?) +
                (COALESCE(z, 0) - ?) * (COALESCE(z, 0) - ?)) as distance_sq
        FROM papers
        WHERE x IS NOT NULL AND y IS NOT NULL AND id != ?
        ORDER BY distance_sq
        LIMIT ?
    """,
        (
            target_x,
            target_x,
            target_y,
            target_y,
            target_z,
            target_z,
            paper_id,
            limit,
        ),
    )

    papers = [
        PaperSummary(
            id=row["id"],
            title=row["title"],
            x=row["x"],
            y=row["y"],
            z=row["z"],
            cluster_id=row["cluster_id"],
            cluster_label=row["cluster_label"],
            field_subfield=row["field_subfield"],
            publication_year=row["publication_year"],
            classification=row["classification"],
        )
        for row in rows
    ]

    return PapersResponse(papers=papers)


@app.get("/api/stats")
async def get_stats(request: Request):
    """Get overall statistics."""
    db = get_database(request)

    total_row = await db.fetch_one("SELECT COUNT(*) as total FROM papers")
    total = total_row["total"] if total_row else 0

    with_coords_row = await db.fetch_one("SELECT COUNT(*) as with_coords FROM papers WHERE x IS NOT NULL")
    with_coords = with_coords_row["with_coords"] if with_coords_row else 0

    num_clusters_row = await db.fetch_one("SELECT COUNT(DISTINCT cluster_id) as num_clusters FROM papers WHERE cluster_id IS NOT NULL")
    num_clusters = num_clusters_row["num_clusters"] if num_clusters_row else 0

    return {
        "total_papers": total,
        "papers_with_coordinates": with_coords,
        "num_clusters": num_clusters,
    }


@app.get("/api/temporal-data", response_model=TemporalDataResponse)
async def get_temporal_data(
    request: Request,
    min_year: int = Query(1990, description="Minimum publication year"),
    max_year: int = Query(2025, description="Maximum publication year"),
):
    """Get temporal evolution data showing paper counts per cluster per year."""
    db = get_database(request)

    rows = await db.fetch_all(
        """
        SELECT
            cluster_id,
            COALESCE(claude_label, cluster_label) as cluster_label,
            publication_year,
            COUNT(*) as count
        FROM papers
        WHERE cluster_id IS NOT NULL
            AND publication_year IS NOT NULL
            AND publication_year >= ?
            AND publication_year <= ?
        GROUP BY cluster_id, cluster_label, publication_year
        ORDER BY cluster_id, publication_year
    """,
        (min_year, max_year),
    )

    # Organize data by cluster
    cluster_data_map: dict[int, dict[str, Any]] = {}
    for row in rows:
        cluster_id = row["cluster_id"]
        cluster_label = row["cluster_label"]
        year = row["publication_year"]
        count = row["count"]

        if cluster_id not in cluster_data_map:
            cluster_data_map[cluster_id] = {
                "cluster_id": cluster_id,
                "cluster_label": cluster_label,
                "color": get_cluster_color(cluster_id),
                "temporal_data": [],
            }

        cluster_data_map[cluster_id]["temporal_data"].append({"year": int(year), "count": count})

    # Convert to list and create response objects
    clusters = [
        ClusterTemporalData(
            cluster_id=data["cluster_id"],
            cluster_label=data["cluster_label"],
            color=data["color"],
            temporal_data=[TemporalDataPoint(year=point["year"], count=point["count"]) for point in data["temporal_data"]],
        )
        for data in cluster_data_map.values()
    ]

    return TemporalDataResponse(clusters=clusters)


@app.get("/health")
async def health():
    """Health check endpoint."""
    return {"status": "ok"}


@app.get("/api/samples", response_model=PaperSampleList)
async def get_sample_ids(request: Request):
    """Get list of paper IDs that have samples available."""
    db = get_database(request)

    rows = await db.fetch_all(
        """
        SELECT paper_id
        FROM paper_samples
        ORDER BY paper_id
    """
    )

    paper_ids = [row["paper_id"] for row in rows]
    return PaperSampleList(paper_ids=paper_ids)


@app.get("/api/samples/{paper_id}", response_model=PaperSample)
async def get_paper_sample(paper_id: int, request: Request):
    """Get paper sample with extracted data and cluster info."""
    db = get_database(request)

    # Join paper_samples with papers table to get all data
    row = await db.fetch_one(
        """
        SELECT
            ps.paper_id,
            ps.sample,
            p.title,
            p.summarization,
            p.cluster_id,
            COALESCE(p.claude_label, p.cluster_label) as cluster_label,
            p.field_subfield,
            p.publication_year,
            p.classification
        FROM paper_samples ps
        JOIN papers p ON ps.paper_id = p.id
        WHERE ps.paper_id = ?
    """,
        (paper_id,),
    )

    if not row:
        raise HTTPException(status_code=404, detail="Paper sample not found")

    return PaperSample(
        paper_id=row["paper_id"],
        sample=row["sample"],
        title=row["title"],
        summarization=row["summarization"],
        cluster_id=row["cluster_id"],
        cluster_label=row["cluster_label"],
        field_subfield=row["field_subfield"],
        publication_year=row["publication_year"],
        classification=row["classification"],
    )


class Default(WorkerEntrypoint):
    async def fetch(self, request):
        import asgi

        return await asgi.fetch(app, request.js_object, self.env)



================================================
FILE: frontend/eslint.config.js
================================================
import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginReadableTailwind from "eslint-plugin-readable-tailwind";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/*.config.js",
      "**/*.config.cjs",
      "dist/**",
      ".output/**",
      ".vercel/**",
      "**/.tanstack/**",
    ],
  },
  {
    files: ["**/*.js", "**/*.ts", "**/*.tsx"],
    plugins: {
      import: importPlugin,
      react: reactPlugin,
      "react-hooks": hooksPlugin,
      "react-refresh": reactRefresh,
      "readable-tailwind": eslintPluginReadableTailwind,
    },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    rules: {
      // React Hooks rules
      ...hooksPlugin.configs.recommended.rules,

      // Readable Tailwind rules
      ...eslintPluginReadableTailwind.configs.warning.rules,

      // TypeScript rules
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/prefer-ts-expect-error": "off",
      "@typescript-eslint/no-base-to-string": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/prefer-regexp-exec": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-unnecessary-condition": [
        "error",
        {
          allowConstantLoopConditions: true,
        },
      ],
      "@typescript-eslint/no-non-null-assertion": "error",

      // Import rules
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { project: true } },
  },
);



================================================
FILE: frontend/index.html
================================================
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LAION Dataset Explorer 🔬</title>

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://laion.inference.net" />
    <meta property="og:title" content="LAION Dataset Explorer" />
    <meta
      property="og:description"
      content="Explore interactive visualizations of a large scientific research article dataset built in collaboration between Inference.net and LAION"
    />
    <meta
      property="og:image"
      content="https://laion.inference.net/src/assets/laion-social-graph.png"
    />
    <meta
      property="og:logo"
      content="https://laion.inference.net/src/assets/laion-social-graph.png"
    />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="LAION Dataset Explorer" />
    <meta
      name="twitter:description"
      content="Explore interactive visualizations of a large scientific research article dataset built in collaboration between Inference.net and LAION"
    />
    <meta
      name="twitter:image"
      content="https://laion.inference.net/src/assets/laion-social-graph.png"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>



================================================
FILE: frontend/package.json
================================================
{
  "name": "@kuzco/laion",
  "description": "Laion dataset explorer",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "dev:wrangler": "bunx wrangler pages dev dist",
    "build": "tsc && vite build",
    "build:production": "tsc && vite build --mode production",
    "preview": "vite preview",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "tsc": "tsc --noEmit",
    "deploy": "bun run build:production && bunx wrangler pages deploy dist --project-name=laion-dataset-explorer-frontend",
    "upload:db:cloudflare": "bunx wrangler d1 execute laion-data-exploration --remote --file=./data/db_cloudflare.sql"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "1.2.12",
    "@radix-ui/react-alert-dialog": "1.1.15",
    "@radix-ui/react-avatar": "1.1.10",
    "@radix-ui/react-checkbox": "1.3.3",
    "@radix-ui/react-dialog": "1.1.15",
    "@radix-ui/react-dropdown-menu": "2.1.16",
    "@radix-ui/react-icons": "1.3.2",
    "@radix-ui/react-label": "2.1.7",
    "@radix-ui/react-popover": "1.1.15",
    "@radix-ui/react-select": "2.2.6",
    "@radix-ui/react-separator": "1.1.7",
    "@radix-ui/react-slider": "1.3.6",
    "@radix-ui/react-slot": "1.2.3",
    "@radix-ui/react-switch": "1.2.6",
    "@radix-ui/react-tabs": "1.1.13",
    "@radix-ui/react-toast": "1.2.15",
    "@radix-ui/react-toggle": "1.1.10",
    "@radix-ui/react-tooltip": "1.2.8",
    "@tanstack/react-query": "5.90.2",
    "@types/react-plotly.js": "^2.6.3",
    "@uiw/react-json-view": "2.0.0-alpha.39",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "d3-drag": "^3.0.0",
    "d3-force": "^3.0.0",
    "d3-selection": "^3.0.0",
    "d3-zoom": "^3.0.0",
    "date-fns": "4.1.0",
    "invariant": "2.2.4",
    "jotai": "2.12.2",
    "lucide-react": "0.441.0",
    "pako": "2.1.0",
    "plotly.js": "2.27.1",
    "posthog-js": "^1.279.3",
    "react": "19.1.0",
    "react-day-picker": "9.6.6",
    "react-dom": "19.1.0",
    "react-plotly.js": "2.6.0",
    "react-syntax-highlighter": "15.6.1",
    "recharts": "2.15.2",
    "superjson": "2.2.1",
    "tailwind-merge": "2.6.0",
    "tailwindcss-animate": "1.0.7",
    "usehooks-ts": "2.16.0",
    "wouter": "^3.7.1"
  },
  "devDependencies": {
    "@eslint/js": "9.24.0",
    "@ianvs/prettier-plugin-sort-imports": "^4.7.0",
    "@types/d3-drag": "^3.0.7",
    "@types/d3-force": "^3.0.10",
    "@types/d3-selection": "^3.0.11",
    "@types/d3-zoom": "^3.0.8",
    "@types/invariant": "2.2.37",
    "@types/pako": "2.0.3",
    "@types/plotly.js": "2.29.3",
    "@types/react": "19.1.0",
    "@types/react-dom": "19.1.0",
    "@types/react-syntax-highlighter": "15.5.13",
    "@vitejs/plugin-react": "4.7.0",
    "autoprefixer": "10.4.21",
    "eslint": "9.24.0",
    "eslint-plugin-import": "2.31.0",
    "eslint-plugin-react": "7.37.5",
    "eslint-plugin-react-hooks": "5.1.0-canary-cb151849e1-20240424",
    "eslint-plugin-react-refresh": "0.4.19",
    "eslint-plugin-readable-tailwind": "1.9.1",
    "postcss": "8.5.6",
    "prettier": "^3.6.2",
    "tailwindcss": "3.4.17",
    "typescript": "5.7.3",
    "typescript-eslint": "8.29.1",
    "vite": "6.3.6",
    "vite-plugin-node-polyfills": "^0.24.0",
    "vite-tsconfig-paths": "^5.1.4",
    "wrangler": "^4.44.0"
  }
}



================================================
FILE: frontend/postcss.config.js
================================================
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};



================================================
FILE: frontend/prettier.config.cjs
================================================
/** @type {import("prettier").Config} */
module.exports = {
  semi: true,
  trailingComma: "all",
  singleQuote: false,
  printWidth: 80,
  tabWidth: 2,
  endOfLine: "auto",
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  embeddedLanguageFormatting: "off",
  importOrderParserPlugins: ["typescript", "jsx"],
};



================================================
FILE: frontend/tailwind.config.js
================================================
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gray: {
          0: "rgb(255, 255, 255)",
          25: "rgb(252, 252, 253)",
          50: "rgb(248, 250, 252)",
          100: "rgb(238, 242, 246)",
          200: "rgb(227, 232, 239)",
          300: "rgb(205, 213, 223)",
          400: "rgb(154, 164, 178)",
          500: "rgb(105, 117, 134)",
          600: "rgb(75, 85, 101)",
          700: "rgb(54, 65, 82)",
          800: "rgb(32, 41, 57)",
          900: "rgb(18, 25, 38)",
          950: "rgb(13, 18, 28)",
          1000: "rgb(5, 5, 6)",
        },
        yellow: {
          25: "rgb(255, 252, 245)",
          50: "rgb(255, 250, 235)",
          100: "rgb(254, 240, 199)",
          200: "rgb(254, 223, 137)",
          300: "rgb(254, 200, 75)",
          400: "rgb(253, 176, 34)",
          500: "rgb(247, 144, 9)",
          600: "rgb(220, 104, 3)",
          700: "rgb(181, 71, 8)",
          800: "rgb(147, 55, 13)",
          900: "rgb(122, 46, 14)",
          950: "rgb(78, 29, 9)",
        },
        red: {
          25: "rgb(255, 251, 250)",
          50: "rgb(254, 243, 242)",
          100: "rgb(254, 228, 226)",
          200: "rgb(254, 205, 202)",
          300: "rgb(253, 162, 155)",
          400: "rgb(249, 112, 102)",
          500: "rgb(240, 68, 56)",
          600: "rgb(217, 45, 32)",
          700: "rgb(180, 35, 24)",
          800: "rgb(145, 32, 24)",
          900: "rgb(122, 39, 26)",
          950: "rgb(85, 22, 12)",
        },
        green: {
          25: "rgb(246, 254, 249)",
          50: "rgb(236, 253, 243)",
          100: "rgb(220, 250, 230)",
          200: "rgb(171, 239, 198)",
          300: "rgb(117, 224, 167)",
          400: "rgb(71, 205, 137)",
          500: "rgb(23, 178, 106)",
          600: "rgb(7, 148, 85)",
          700: "rgb(6, 118, 71)",
          800: "rgb(8, 93, 58)",
          900: "rgb(7, 77, 49)",
          950: "rgb(5, 51, 33)",
        },
        blue: {
          25: "rgb(245, 250, 255)",
          50: "rgb(239, 248, 255)",
          100: "rgb(209, 233, 255)",
          200: "rgb(178, 221, 255)",
          300: "rgb(132, 202, 255)",
          400: "rgb(83, 177, 253)",
          500: "rgb(46, 144, 250)",
          600: "rgb(21, 112, 239)",
          700: "rgb(23, 92, 211)",
          800: "rgb(24, 73, 169)",
          900: "rgb(25, 65, 133)",
          950: "rgb(16, 42, 86)",
        },
        chart: {
          1: "rgb(21, 112, 239)",
          2: "rgb(46, 144, 250)",
          3: "rgb(83, 177, 253)",
          4: "rgb(132, 202, 255)",
          5: "rgb(23, 92, 211)",
          6: "rgb(24, 73, 169)",
          7: "rgb(25, 65, 133)",
          8: "rgb(16, 42, 86)",
        },
        marketing: {
          green: "rgb(22, 211, 107)",
          pink: "rgb(191, 12, 166)",
          blue: "rgb(46, 144, 250)",
          orange: "rgb(248, 159, 39)",
        },
        retro: {
          cream: "rgb(255, 250, 240)",
          beige: "rgb(245, 235, 220)",
          mint: "rgb(152, 251, 152)",
          coral: "rgb(255, 127, 130)",
          peach: "rgb(255, 218, 185)",
          lavender: "rgb(230, 230, 250)",
          sky: "rgb(135, 206, 235)",
          rose: "rgb(255, 182, 193)",
          amber: "rgb(255, 191, 0)",
          teal: "rgb(64, 224, 208)",
          neon: {
            pink: "rgb(255, 16, 240)",
            cyan: "rgb(0, 255, 255)",
            green: "rgb(57, 255, 20)",
            orange: "rgb(255, 165, 0)",
            purple: "rgb(191, 64, 191)",
            blue: "rgb(30, 144, 255)",
          },
          dark: {
            space: "rgb(15, 12, 41)",
            purple: "rgb(30, 20, 60)",
            teal: "rgb(20, 40, 60)",
            slate: "rgb(25, 25, 40)",
            charcoal: "rgb(35, 35, 45)",
            gunmetal: "rgb(20, 24, 32)",
          },
        },
        rgb: {
          gray: {
            0: "255 255 255",
            25: "252 252 253",
            50: "248 250 252",
            100: "238 242 246",
            200: "227 232 239",
            300: "205 213 223",
            400: "154 164 178",
            500: "105 117 134",
            600: "75 85 101",
            700: "54 65 82",
            800: "32 41 57",
            900: "18 25 38",
            950: "13 18 28",
            1000: "5 5 6",
          },
          yellow: {
            25: "255 252 245",
            50: "255 250 235",
            100: "254 240 199",
            200: "254 223 137",
            300: "254 200 75",
            400: "253 176 34",
            500: "247 144 9",
            600: "220 104 3",
            700: "181 71 8",
            800: "147 55 13",
            900: "122 46 14",
            950: "78 29 9",
          },
          red: {
            25: "255 251 250",
            50: "254 243 242",
            100: "254 228 226",
            200: "254 205 202",
            300: "253 162 155",
            400: "249 112 102",
            500: "240 68 56",
            600: "217 45 32",
            700: "180 35 24",
            800: "145 32 24",
            900: "122 39 26",
            950: "85 22 12",
          },
          green: {
            25: "246 254 249",
            50: "236 253 243",
            100: "220 250 230",
            200: "171 239 198",
            300: "117 224 167",
            400: "71 205 137",
            500: "23 178 106",
            600: "7 148 85",
            700: "6 118 71",
            800: "8 93 58",
            900: "7 77 49",
            950: "5 51 33",
          },
          blue: {
            25: "245 250 255",
            50: "239 248 255",
            100: "209 233 255",
            200: "178 221 255",
            300: "132 202 255",
            400: "83 177 253",
            500: "46 144 250",
            600: "21 112 239",
            700: "23 92 211",
            800: "24 73 169",
            900: "25 65 133",
            950: "16 42 86",
          },
          chart: {
            1: "21 112 239",
            2: "46 144 250",
            3: "83 177 253",
            4: "132 202 255",
            5: "23 92 211",
            6: "24 73 169",
            7: "25 65 133",
            8: "16 42 86",
          },
          marketing: {
            green: "22 211 107",
            pink: "191 12 166",
            blue: "46 144 250",
            orange: "248 159 39",
          },
          retro: {
            cream: "255 250 240",
            beige: "245 235 220",
            mint: "152 251 152",
            coral: "255 127 130",
            peach: "255 218 185",
            lavender: "230 230 250",
            sky: "135 206 235",
            rose: "255 182 193",
            amber: "255 191 0",
            teal: "64 224 208",
            neon: {
              pink: "255 16 240",
              cyan: "0 255 255",
              green: "57 255 20",
              orange: "255 165 0",
              purple: "191 64 191",
              blue: "30 144 255",
            },
            dark: {
              space: "15 12 41",
              purple: "30 20 60",
              teal: "20 40 60",
              slate: "25 25 40",
              charcoal: "35 35 45",
              darkGreen: "20 40 60",
              gunmetal: "20 24 32",
            },
          },
        },
        background: "rgb(var(--background) / <alpha-value>)",
        "background-muted": "rgb(var(--background-muted) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        sidebar: "rgb(var(--sidebar) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        switch: "rgb(var(--switch) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        skeleton: "rgb(var(--skeleton) / <alpha-value>)",
        code: "rgb(var(--code) / <alpha-value>)",
        "primary-cta": {
          DEFAULT: "rgb(var(--primary-cta) / <alpha-value>)",
          foreground: "rgb(var(--primary-cta-foreground) / <alpha-value>)",
          border: "rgb(var(--primary-cta-border) / <alpha-value>)",
          hover: "rgb(var(--primary-cta-hover) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
          border: "rgb(var(--primary-border) / <alpha-value>)",
          hover: "rgb(var(--primary-hover) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
          border: "rgb(var(--secondary-border) / <alpha-value>)",
          hover: "rgb(var(--secondary-hover) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
          border: "rgb(var(--destructive-border) / <alpha-value>)",
          hover: "rgb(var(--destructive-hover) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
          border: "rgb(var(--muted-border) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
          hover: "rgb(var(--card-hover) / <alpha-value>)",
        },
        link: {
          DEFAULT: "rgb(var(--link) / <alpha-value>)",
          hover: "rgb(var(--link-hover) / <alpha-value>)",
        },
        detail: {
          success: "rgb(var(--detail-success) / <alpha-value>)",
          failure: "rgb(var(--detail-failure) / <alpha-value>)",
          warning: "rgb(var(--detail-warning) / <alpha-value>)",
          neutral: "rgb(var(--detail-neutral) / <alpha-value>)",
          brand: "rgb(var(--detail-brand) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        "jet-brains": ["JetBrains Mono", "sans-serif"],
        berkeley: ["Berkeley Mono", ...fontFamily.mono],
        inter: ["Inter", "sans-serif"],
        newsreader: ["Newsreader", "serif"],
      },
      fontSize: {
        xs: "var(--text-xs, 0.75rem)",
        sm: "var(--text-sm, 0.875rem)",
        md: "var(--text-sm, 0.875rem)",
        base: "var(--text-base, 1rem)",
        lg: "var(--text-lg, 1.125rem)",
        xl: "var(--text-xl, 1.25rem)",
        "2xl": "var(--text-2xl, 1.5rem)",
        "3xl": "var(--text-3xl, 2rem)",
        "4xl": "var(--text-4xl, 2.25rem)",
        "5xl": "var(--text-5xl, 2.75rem)",
        "6xl": "var(--text-6xl, 3.25rem)",
        "7xl": "var(--text-7xl, 3.75rem)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shimmer: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};



================================================
FILE: frontend/tsconfig.json
================================================
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "composite": true,
    "emitDeclarationOnly": true,
    "baseUrl": ".",
    "outDir": "dist",
    "paths": {
      "~/ui": ["./src/ui/index.tsx"],
      "~/ui/*": ["./src/ui/*"],
      "~/*": ["src/*"]
    },
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.tsx", "src/**/*.json", "vite.config.ts"]
}



================================================
FILE: frontend/vite.config.ts
================================================
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ["buffer", "process"],
    }),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    react(),
  ],
  server: {
    host: true, // Expose on local network
    port: 5173,
    allowedHosts: ["localhost", "127.0.0.1", "0.0.0.0"],
    proxy: {
      "/api": {
        target: "http://localhost:8787",
        changeOrigin: true,
      },
    },
  },
});



================================================
FILE: frontend/.prettierignore
================================================
**/build
**/public
**/dist
**/.output
**/.vercel
**/.vinxi
.DS_Store
**/inter.css
**/jetbrains.css
**/helmfile.yaml
.claude


================================================
FILE: frontend/src/index.css
================================================
/* Import fonts */
@import "./styles/fonts/inter.css";

/* Import the base Tailwind styles from ui-library */
@import "./ui/styles/global.css";

:root {
  font-family: "Inter", "JetBrains Mono", sans-serif;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Light mode autofill styles */
input:-webkit-autofill {
  -webkit-text-fill-color: rgb(25, 25, 25);
}

/* Dark mode autofill styles */
.dark input:-webkit-autofill {
  -webkit-text-fill-color: rgb(250, 250, 250);
  box-shadow: 0 0 0px 1000px rgb(41, 41, 41) inset;
  transition: background-color 5000s ease-in-out 0s;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  width: 100%;
  height: 100vh;
}

/* Loading ellipsis animation */
@keyframes ellipsis {
  0%,
  20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  60%,
  100% {
    opacity: 1;
  }
}

.loading-dots span {
  animation: ellipsis 1.5s infinite;
}

.loading-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

a {
  text-decoration: underline;
}



================================================
FILE: frontend/src/LaionApp.tsx
================================================
import { useSwipeRightDetector } from "~/lib/ui-shared";
import {
  Button,
  Card,
  Centered,
  Checkbox,
  cn,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  InferenceIcon,
  Input,
  Label,
  Row,
  Select,
  Sheet,
  SheetContent,
  SheetTrigger,
  Skeleton,
  Slider,
  ThemeToggle,
} from "~/ui";
import {
  AtomIcon,
  BarChart3Icon,
  BarChartIcon,
  BookIcon,
  ChartNetworkIcon,
  ChevronRightIcon,
  GithubIcon,
  LayoutGridIcon,
  Menu,
  MicroscopeIcon,
  NetworkIcon,
  NotebookTextIcon,
  PlusIcon,
  SunMoonIcon,
} from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import LaionDarkLogo from "./assets/logos/Laion-dark.svg";
import LaionLightLogo from "./assets/logos/Laion-light.svg";
import { ClusterLegend } from "./components/ClusterLegend";
import { ClusterVisualization } from "./components/ClusterVisualization";
import { DistributionChart } from "./components/DistributionChart";
import { ForceDirectedCluster } from "./components/ForceDirectedCluster";
import { LearnMoreContent } from "./components/LearnMoreContent";
import { LearnMoreSheet } from "./components/LearnMoreSheet";
import { PaperDetail } from "./components/PaperDetail";
import { PaperSampleViewer } from "./components/PaperSampleViewer";
import type { HeatmapSortOption } from "./components/TemporalHeatmap";
import { TemporalHeatmap } from "./components/TemporalHeatmap";
import type {
  StackedSortOption,
  StackMode,
} from "./components/TemporalStackedChart";
import { TemporalStackedChart } from "./components/TemporalStackedChart";
import type {
  ClusterInfo,
  ClustersResponse,
  PapersResponse,
  PaperSummary,
} from "./types";
import { fetchCompressed, getApiUrl } from "./utils/api";
import type { LayoutType } from "./utils/layoutTransforms";
import { getPathFromViewMode, getViewModeFromPath } from "./utils/routeMapping";
import type { ViewMode } from "./utils/routeMapping";

type SwipeableSheetContentProps = {
  children: React.ReactNode;
  className?: string;
  setMobileMenuOpen: (open: boolean) => void;
};

function SwipeableSheetContent({
  children,
  className = "",
  setMobileMenuOpen,
}: SwipeableSheetContentProps) {
  const { onTouchEnd, onTouchMove, onTouchStart } =
    useSwipeRightDetector(setMobileMenuOpen);

  return (
    <SheetContent
      className={cn(
        `
          fixed right-0 top-0 flex h-full w-full flex-col px-0 pt-6

          sm:w-[350px]
        `,
        className,
      )}
      closeButtonAriaLabel="Close Mobile Navigation Menu"
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
      side="right"
    >
      <DialogTitle className="border-b pb-6 pl-5">
        <div className="flex items-center">
          <a
            href="https://inference.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <InferenceIcon height={20} width={120} />
          </a>
          <PlusIcon className="ml-4 h-4 w-4 text-muted-foreground" />
          <a
            href="https://laion.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <img
              src={LaionLightLogo}
              alt="LAION"
              className={`
                h-12

                dark:hidden
              `}
            />
            <img
              src={LaionDarkLogo}
              alt="LAION"
              className={`
                hidden h-12

                dark:block
              `}
            />
          </a>
        </div>
      </DialogTitle>
      <DialogDescription className="hidden">
        Navigation menu for dataset controls and cluster legend.
      </DialogDescription>
      <div className="flex-1 overflow-hidden">{children}</div>
    </SheetContent>
  );
}

type MobileNavigationProps = {
  viewMode: "3d" | "heatmap" | "stacked" | "distribution" | "samples" | "force";
  onRandomPaper: () => void;
  clusters: ClusterInfo[];
  selectedClusterIds: Set<number>;
  onToggleCluster: (clusterId: number) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  onSelectRandom: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  totalPapers: number;
  setMobileMenuOpen: (open: boolean) => void;
  loading: boolean;
  onEmailCTAClick: () => void;
};

function MobileNavigation({
  clusters,
  loading,
  onClearAll,
  onEmailCTAClick,
  onRandomPaper,
  onSearchChange,
  onSearchSubmit,
  onSelectAll,
  onSelectRandom,
  onToggleCluster,
  searchQuery,
  selectedClusterIds,
  setMobileMenuOpen,
  totalPapers,
  viewMode,
}: MobileNavigationProps) {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="space-y-4 p-4">
        <div
          className={`space-y-3 rounded-lg border border-border bg-muted/50 p-4`}
        >
          <div className="flex items-start gap-3">
            <AtomIcon
              className={`mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground`}
            />
            <div>
              <h3 className="text-sm font-semibold">Aella Dataset Explorer</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                This is a dataset of structured summaries from 100,000
                scientific papers generated using a custom fine-tuned model.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                View on desktop for additional visualizations and more controls.
              </p>
              <Button
                type="button"
                onClick={() => {
                  onEmailCTAClick();
                  setMobileMenuOpen(false);
                }}
                variant="default"
                size="xs"
                className="mt-4 flex w-full items-center justify-center gap-2"
              >
                Interested in the full dataset?
              </Button>
            </div>
          </div>
        </div>

        {/* Controls for 3D View */}
        {!loading && (
          <div className="space-y-3 pt-4">
            <Button
              type="button"
              onClick={() => {
                onRandomPaper();
                setMobileMenuOpen(false);
              }}
              variant="outline"
              size="xs"
              className="flex w-full items-center gap-2"
            >
              <MicroscopeIcon className="h-4 w-4" />
              Select a Random Paper
            </Button>
          </div>
        )}

        {/* Theme Toggle */}
        <div>
          <ThemeToggle
            trigger={
              <Button
                variant="outline"
                size="xs"
                className="flex w-full items-center gap-2"
              >
                <SunMoonIcon className="h-4 w-4" />
                Toggle Theme
              </Button>
            }
          />
        </div>

        {/* Cluster Legend */}
        {loading ? (
          <div className="space-y-3 border-t pt-4">
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-8 w-full" />
          </div>
        ) : (
          <div className="border-t pt-4">
            <ClusterLegend
              clusters={clusters}
              selectedClusterIds={selectedClusterIds}
              onToggleCluster={onToggleCluster}
              onSelectAll={onSelectAll}
              onClearAll={onClearAll}
              onSelectRandom={onSelectRandom}
              isCollapsed={false}
              onToggleCollapse={() => null}
              viewMode={viewMode}
              paperSearchQuery={searchQuery}
              onPaperSearchChange={onSearchChange}
              onPaperSearchSubmit={onSearchSubmit}
              totalPapers={totalPapers}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function LaionApp() {
  const posthog = usePostHog();
  const [location, setLocation] = useLocation();

  const [papers, setPapers] = useState<PaperSummary[]>([]);
  const [clusters, setClusters] = useState<ClusterInfo[]>([]);
  const [selectedPaperId, setSelectedPaperId] = useState<number | null>(null);
  const [selectedClusterIds, setSelectedClusterIds] = useState<Set<number>>(
    new Set(),
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [allPapers, setAllPapers] = useState<PaperSummary[]>([]);
  const [viewMode, setViewMode] = useState<ViewMode>(() =>
    getViewModeFromPath(location),
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [layoutType, setLayoutType] = useState<LayoutType>("original");
  const [welcomeDialogOpen, setWelcomeDialogOpen] = useState(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcomeDialog");
    return hasSeenWelcome !== "true";
  });
  const [learnMoreSheetOpen, setLearnMoreSheetOpen] = useState(false);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailSubmitting, setEmailSubmitting] = useState(false);
  const [emailSubmitSuccess, setEmailSubmitSuccess] = useState(false);
  const [interestedInFullDataset, setInterestedInFullDataset] = useState(true);
  const [interestedInModelTraining, setInterestedInModelTraining] =
    useState(false);
  const [hasOpenedPaperDetail, setHasOpenedPaperDetail] = useState(false);

  // Heatmap controls
  const [heatmapMinYear, setHeatmapMinYear] = useState(1990);
  const [heatmapMaxYear, setHeatmapMaxYear] = useState(2025);
  const [heatmapTopN, setHeatmapTopN] = useState(30);
  const [heatmapSortBy, setHeatmapSortBy] =
    useState<HeatmapSortOption>("total");
  const [heatmapColorScale, setHeatmapColorScale] = useState("Viridis");
  const [heatmapNormalizeByYear, setHeatmapNormalizeByYear] = useState(false);

  // Stacked chart controls
  const [stackedMinYear, setStackedMinYear] = useState(1990);
  const [stackedMaxYear, setStackedMaxYear] = useState(2025);
  const [stackedTopN, setStackedTopN] = useState(20);
  const [stackedStackMode, setStackedStackMode] =
    useState<StackMode>("absolute");
  const [stackedSortBy, setStackedSortBy] =
    useState<StackedSortOption>("total");
  const [stackedShowOther, setStackedShowOther] = useState(false);

  // Distribution chart controls
  const [distributionTopN, setDistributionTopN] = useState(100);
  const [totalClusters, setTotalClusters] = useState(100);

  // Store in local storage when welcome dialog is closed
  useEffect(() => {
    if (!welcomeDialogOpen) {
      localStorage.setItem("hasSeenWelcomeDialog", "true");
    }
  }, [welcomeDialogOpen]);

  // Sync viewMode changes to URL (except for samples mode, which manages its own URL with paper index)
  useEffect(() => {
    // Skip URL updates for samples mode - PaperSampleViewer manages its own URL including paper index
    if (viewMode === "samples") {
      return;
    }

    const newPath = getPathFromViewMode(viewMode);
    if (location !== newPath) {
      setLocation(newPath);
    }
  }, [viewMode, location, setLocation]);

  // Sync URL changes to viewMode (for browser back/forward)
  useEffect(() => {
    const newViewMode = getViewModeFromPath(location);
    if (newViewMode !== viewMode) {
      setViewMode(newViewMode);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Track when user opens their first paper detail
  useEffect(() => {
    if (selectedPaperId !== null && !hasOpenedPaperDetail) {
      setHasOpenedPaperDetail(true);
    }
  }, [selectedPaperId, hasOpenedPaperDetail]);

  // Trigger window resize when sidebar is collapsed/expanded to force plot to resize
  useEffect(() => {
    // Small delay to let CSS transition complete
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 350);
    return () => clearTimeout(timer);
  }, [sidebarCollapsed]);

  // Fetch papers and clusters on mount
  useEffect(() => {
    Promise.all([
      fetchCompressed<PapersResponse>(getApiUrl("/api/papers")),
      fetch(getApiUrl("/api/clusters")).then((res) => res.json()),
    ])
      .then(
        ([papersData, clustersData]: [PapersResponse, ClustersResponse]) => {
          setAllPapers(papersData.papers);
          setClusters(clustersData.clusters);
          setLoading(false);
        },
      )
      .catch((err: Error) => {
        console.error("Error fetching papers and clusters", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Force embeddings view on mobile regardless of URL
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 1024 && viewMode !== "3d") {
        setViewMode("3d");
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [viewMode]);

  // Always filter for full text papers only
  useEffect(() => {
    setPapers(allPapers.filter((p) => p.classification === "FULL_TEXT"));
  }, [allPapers]);

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      // If search is empty, reset to all papers
      fetchCompressed<PapersResponse>(getApiUrl("/api/papers"))
        .then((data) => setAllPapers(data.papers))
        .catch((err: Error) => setError(err.message));
      return;
    }

    fetchCompressed<PapersResponse>(
      getApiUrl(`/api/search?q=${encodeURIComponent(searchQuery)}`),
    )
      .then((data) => setAllPapers(data.papers))
      .catch((err: Error) => setError(err.message));
  };

  const handleToggleCluster = (clusterId: number) => {
    const newSelected = new Set(selectedClusterIds);
    if (newSelected.has(clusterId)) {
      newSelected.delete(clusterId);
    } else {
      newSelected.add(clusterId);
    }
    setSelectedClusterIds(newSelected);
  };

  const handleSelectAll = () => {
    setSelectedClusterIds(new Set());
  };

  const handleClearAll = () => {
    setSelectedClusterIds(new Set(clusters.map(() => -1))); // Select none by using invalid IDs
  };

  const handleSelectRandom = () => {
    if (clusters.length === 0) return;
    const randomIndex = Math.floor(Math.random() * clusters.length);
    const randomCluster = clusters[randomIndex];
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (randomCluster) {
      setSelectedClusterIds(new Set([randomCluster.cluster_id]));
    }
  };

  const handleRandomPaper = () => {
    if (papers.length === 0) return;
    const randomIndex = Math.floor(Math.random() * papers.length);
    const randomPaper = papers[randomIndex];
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (randomPaper) {
      setSelectedPaperId(randomPaper.id);
    }
  };

  const handleHeatmapClick = (clusterId: number, year: number) => {
    // Filter papers by cluster and year, then show the first one
    const filteredPapers = papers.filter(
      (p) => p.cluster_id === clusterId && p.publication_year === year,
    );
    if (filteredPapers.length > 0 && filteredPapers[0]) {
      setSelectedPaperId(filteredPapers[0].id);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    // Clear any previous errors and start submitting
    setEmailError("");
    setEmailSubmitting(true);

    try {
      // Track email submission in PostHog
      posthog.capture("email_submitted", {
        email,
        interested_in_full_dataset: interestedInFullDataset,
        interested_in_model_training: interestedInModelTraining,
      });

      // Show success state
      setEmailSubmitSuccess(true);

      // Close dialog after a delay to show success message
      setTimeout(() => {
        setEmailDialogOpen(false);
        // Reset form state after dialog closes
        setTimeout(() => {
          setEmail("");
          setEmailError("");
          setEmailSubmitting(false);
          setEmailSubmitSuccess(false);
          setInterestedInFullDataset(true);
          setInterestedInModelTraining(false);
        }, 300); // Wait for dialog close animation
      }, 1500); // Show success for 1.5 seconds
    } catch (err: unknown) {
      console.error("Error submitting email", err);
      setEmailError("Failed to submit. Please try again.");
      setEmailSubmitting(false);
    }
  };

  if (error) {
    return (
      <Centered className="flex h-screen flex-col bg-background">
        <Card
          className={`
            flex flex-col items-center justify-center gap-6 p-6 py-8 text-xl
          `}
        >
          <h3 className="font-semibold">Failed to load...</h3>
          <p className="text-muted-foreground">Please try again later.</p>
        </Card>
      </Centered>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-background">
      <style>{`
        @keyframes shimmer {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        .shimmer-text {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
      <header
        className={cn(`
          border-b border-border bg-background text-foreground shadow-md

          lg:hidden
        `)}
      >
        {/* First row: logos and menu */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <a
              href="https://inference.net"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <InferenceIcon height={20} width={120} />
            </a>
            <PlusIcon className="ml-3 h-3 w-3 text-muted-foreground" />
            <a
              href="https://laion.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <img
                src={LaionLightLogo}
                alt="LAION"
                className={`
                  h-10

                  dark:hidden
                `}
              />
              <img
                src={LaionDarkLogo}
                alt="LAION"
                className={`
                  hidden h-10

                  dark:block
                `}
              />
            </a>
          </div>
          <Sheet onOpenChange={setMobileMenuOpen} open={mobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                aria-label="Open Mobile Navigation Menu"
                size="icon"
                variant="ghost"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SwipeableSheetContent setMobileMenuOpen={setMobileMenuOpen}>
              <MobileNavigation
                viewMode={viewMode}
                onRandomPaper={handleRandomPaper}
                clusters={clusters}
                selectedClusterIds={selectedClusterIds}
                onToggleCluster={handleToggleCluster}
                onSelectAll={handleSelectAll}
                onClearAll={handleClearAll}
                onSelectRandom={handleSelectRandom}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                onSearchSubmit={handleSearch}
                totalPapers={papers.length}
                setMobileMenuOpen={setMobileMenuOpen}
                loading={loading}
                onEmailCTAClick={() => setEmailDialogOpen(true)}
              />
            </SwipeableSheetContent>
          </Sheet>
        </div>
        {/* Second row: cluster plot select and what is this button */}
        <div
          className={`
            flex items-center justify-between border-t border-border px-4 py-2
          `}
        >
          {loading ? (
            <span className="text-sm text-muted-foreground">Loading...</span>
          ) : viewMode === "3d" ? (
            <Select
              value={layoutType}
              onValueChange={(value) => setLayoutType(value as LayoutType)}
              options={[
                { value: "original", label: "Embeddings" },
                { value: "sphere", label: "Sphere" },
                { value: "galaxy", label: "Galaxy" },
                { value: "wave", label: "Wave" },
                { value: "helix", label: "Helix" },
                { value: "torus", label: "Torus" },
              ]}
              placeholder="Select layout"
              className="w-[160px]"
            />
          ) : (
            <div />
          )}
          <Button
            size="xs"
            onClick={() => setLearnMoreSheetOpen(true)}
            variant="outline"
          >
            <AtomIcon className="mr-1.5 h-3.5 w-3.5" />
            What is this?
          </Button>
        </div>
      </header>
      <header
        className={`
          hidden border-b border-border bg-background text-foreground shadow-md

          lg:block
        `}
      >
        <div className="space-y-1 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href="https://inference.net"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <InferenceIcon height={24} width={164} />
              </a>
              <PlusIcon className="ml-4 h-4 w-4 text-muted-foreground" />
              <a
                href="https://laion.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <img
                  src={LaionLightLogo}
                  alt="LAION"
                  className={`
                    h-14

                    dark:hidden
                  `}
                />
                <img
                  src={LaionDarkLogo}
                  alt="LAION"
                  className={`
                    hidden h-14

                    dark:block
                  `}
                />
              </a>
              <ChevronRightIcon className="mr-3 h-4 w-4 text-muted-foreground" />
              <h2 className="font-semibold">Science Dataset Explorer</h2>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle
                trigger={
                  <Button
                    variant="ghost"
                    size="xs"
                    className={`flex items-center gap-2`}
                  >
                    <SunMoonIcon className="h-4 w-4" />
                    Theme
                  </Button>
                }
              />
              <Button
                size="xs"
                disabled={viewMode === "samples"}
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://inference.net/blog/project-aella",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <BookIcon className="mr-2 h-4 w-4" />
                Read Blog
              </Button>
              <Button
                size="xs"
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://github.com/context-labs/laion-data-explorer",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button
                size="xs"
                disabled={viewMode === "samples"}
                variant="outline"
                onClick={() =>
                  setViewMode(viewMode === "samples" ? "3d" : "samples")
                }
              >
                <NotebookTextIcon className="mr-2 h-4 w-4" />
                Paper Explorer
              </Button>
              <Button
                size="xs"
                variant="default"
                onClick={() => setEmailDialogOpen(true)}
              >
                Interested in the full dataset?
              </Button>
              <Button size="xs" onClick={() => setLearnMoreSheetOpen(true)}>
                <AtomIcon className="mr-2 h-4 w-4" />
                What is this?
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button
                type="button"
                onClick={() => setViewMode("3d")}
                variant={viewMode === "3d" ? "default" : "outline"}
                size="xs"
                className="flex w-fit items-center justify-start gap-1.5"
              >
                <ChartNetworkIcon className="h-3.5 w-3.5" />
                Embeddings
              </Button>
              <Button
                type="button"
                onClick={() => setViewMode("force")}
                variant={viewMode === "force" ? "default" : "outline"}
                size="xs"
                className="flex w-fit items-center justify-start gap-1.5"
              >
                <NetworkIcon className="h-3.5 w-3.5" />
                Force Graph
              </Button>
              <Button
                type="button"
                onClick={() => setViewMode("distribution")}
                variant={viewMode === "distribution" ? "default" : "outline"}
                size="xs"
                className="flex w-32 items-center gap-1.5"
              >
                <BarChart3Icon className="h-3.5 w-3.5" />
                Distribution
              </Button>
              <Button
                type="button"
                onClick={() => setViewMode("stacked")}
                variant={viewMode === "stacked" ? "default" : "outline"}
                size="xs"
                className="flex w-fit items-center justify-start gap-1.5"
              >
                <BarChartIcon className="h-3.5 w-3.5" />
                Stacked
              </Button>
              <Button
                type="button"
                onClick={() => setViewMode("heatmap")}
                variant={viewMode === "heatmap" ? "default" : "outline"}
                size="xs"
                className="flex w-fit items-center justify-start gap-1.5"
              >
                <LayoutGridIcon className="h-3.5 w-3.5" />
                Heatmap
              </Button>
              {viewMode === "3d" && (
                <span
                  className={`
                    ml-2 text-xs text-muted-foreground

                    ${!hasOpenedPaperDetail ? "shimmer-text" : ""}
                  `}
                >
                  Click + Cmd/Ctrl Key on a cluster node to open paper details
                </span>
              )}
            </div>
            <Row className="items-center gap-4">
              {!loading && viewMode === "3d" && (
                <>
                  <Select
                    value={layoutType}
                    onValueChange={(value) =>
                      setLayoutType(value as LayoutType)
                    }
                    options={[
                      { value: "original", label: "Embeddings" },
                      { value: "sphere", label: "Sphere" },
                      { value: "galaxy", label: "Galaxy" },
                      { value: "wave", label: "Wave" },
                      { value: "helix", label: "Helix" },
                      { value: "torus", label: "Torus" },
                    ]}
                    placeholder="Select layout"
                    className="w-[180px]"
                  />
                  <Button
                    type="button"
                    onClick={handleRandomPaper}
                    variant="outline"
                    size="xs"
                    className="flex items-center gap-2"
                  >
                    <MicroscopeIcon className="h-4 w-4" />
                    Select a Random Paper
                  </Button>
                </>
              )}
              {!loading && viewMode === "distribution" && (
                <div className="flex items-center gap-3">
                  <label className="text-sm text-foreground">
                    Clusters:{" "}
                    <span className="font-semibold">{distributionTopN}</span>
                  </label>
                  <Slider
                    aria-label="Number of clusters to display"
                    className="w-48"
                    value={[distributionTopN]}
                    min={10}
                    max={totalClusters}
                    step={1}
                    onValueChange={([value]) =>
                      value && setDistributionTopN(value)
                    }
                  />
                </div>
              )}
            </Row>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        {viewMode === "3d" ? (
          <>
            <aside
              className={`
                hidden overflow-y-auto border-r border-border bg-background
                shadow-sm transition-all duration-300

                lg:block

                ${sidebarCollapsed ? "w-10 overflow-hidden" : "w-[360px]"}
              `}
            >
              {loading ? (
                <div className="space-y-3 p-4">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-10 w-full" />
                  <Row className="gap-4">
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-8 w-1/3" />
                    <Skeleton className="h-8 w-1/3" />
                  </Row>
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                  <Skeleton className="h-16 w-full" />
                </div>
              ) : (
                <ClusterLegend
                  clusters={clusters}
                  selectedClusterIds={selectedClusterIds}
                  onToggleCluster={handleToggleCluster}
                  onSelectAll={handleSelectAll}
                  onClearAll={handleClearAll}
                  onSelectRandom={handleSelectRandom}
                  isCollapsed={sidebarCollapsed}
                  onToggleCollapse={() =>
                    setSidebarCollapsed(!sidebarCollapsed)
                  }
                  viewMode={viewMode}
                  paperSearchQuery={searchQuery}
                  onPaperSearchChange={setSearchQuery}
                  onPaperSearchSubmit={handleSearch}
                  totalPapers={papers.length}
                />
              )}
            </aside>
            <main className="flex-1 overflow-hidden bg-background p-0">
              {loading ? (
                <div className="flex h-full items-center justify-center">
                  <div className="relative">
                    <Skeleton className="h-96 w-96 rounded-full" />
                    <span
                      className={`
                        absolute left-1/2 top-1/2 -translate-x-1/2
                        -translate-y-1/2 text-base text-muted-foreground

                        lg:hidden
                      `}
                    >
                      Loading Visualization...
                    </span>
                  </div>
                </div>
              ) : (
                <ClusterVisualization
                  papers={papers}
                  clusters={clusters}
                  onPaperClick={(paperId) => {
                    if (!selectedPaperId) {
                      setSelectedPaperId(paperId);
                    }
                  }}
                  selectedClusterIds={selectedClusterIds}
                  layoutType={layoutType}
                />
              )}
            </main>
          </>
        ) : viewMode === "distribution" ? (
          <main className="flex-1 overflow-hidden bg-background">
            {loading ? (
              <div className="flex h-full items-center justify-center">
                <div className="relative">
                  <Skeleton className="h-96 w-96 rounded-full" />
                  <span
                    className={`
                      absolute left-1/2 top-1/2 -translate-x-1/2
                      -translate-y-1/2 text-base text-muted-foreground

                      lg:hidden
                    `}
                  >
                    Loading Distribution Chart...
                  </span>
                </div>
              </div>
            ) : (
              <DistributionChart
                onClusterClick={(clusterId) => {
                  // When clicking a cluster in the distribution chart, switch to 3D view and select that cluster
                  setViewMode("3d");
                  setSelectedClusterIds(new Set([clusterId]));
                }}
                topN={distributionTopN}
                onTotalClustersLoaded={setTotalClusters}
              />
            )}
          </main>
        ) : viewMode === "heatmap" ? (
          <main className="flex-1 overflow-hidden bg-background">
            {loading ? (
              <div className="flex h-full items-center justify-center">
                <div className="relative">
                  <Skeleton className="h-96 w-96 rounded-full" />
                  <span
                    className={`
                      absolute left-1/2 top-1/2 -translate-x-1/2
                      -translate-y-1/2 text-base text-muted-foreground

                      lg:hidden
                    `}
                  >
                    Loading Heatmap...
                  </span>
                </div>
              </div>
            ) : (
              <TemporalHeatmap
                onPaperClick={handleHeatmapClick}
                minYear={heatmapMinYear}
                maxYear={heatmapMaxYear}
                topN={heatmapTopN}
                sortBy={heatmapSortBy}
                colorScale={heatmapColorScale}
                normalizeByYear={heatmapNormalizeByYear}
                onMinYearChange={setHeatmapMinYear}
                onMaxYearChange={setHeatmapMaxYear}
                onTopNChange={setHeatmapTopN}
                onSortByChange={setHeatmapSortBy}
                onColorScaleChange={setHeatmapColorScale}
                onNormalizeByYearChange={setHeatmapNormalizeByYear}
              />
            )}
          </main>
        ) : viewMode === "samples" ? (
          <main className="flex-1 overflow-hidden bg-background">
            <PaperSampleViewer
              clusters={clusters}
              currentPath={location}
              onPathChange={setLocation}
            />
          </main>
        ) : viewMode === "force" ? (
          <main className="flex-1 overflow-hidden bg-background">
            {loading ? (
              <div className="flex h-full items-center justify-center">
                <div className="relative">
                  <Skeleton className="h-96 w-96 rounded-full" />
                  <span
                    className={`
                      absolute left-1/2 top-1/2 -translate-x-1/2
                      -translate-y-1/2 text-base text-muted-foreground

                      lg:hidden
                    `}
                  >
                    Loading Force Graph...
                  </span>
                </div>
              </div>
            ) : (
              <ForceDirectedCluster
                papers={papers}
                clusters={clusters}
                onPaperClick={(paperId) => setSelectedPaperId(paperId)}
                selectedClusterIds={selectedClusterIds}
              />
            )}
          </main>
        ) : (
          <main className="flex-1 overflow-hidden bg-background">
            {loading ? (
              <div className="flex h-full items-center justify-center">
                <div className="relative">
                  <Skeleton className="h-96 w-96 rounded-full" />
                  <span
                    className={`
                      absolute left-1/2 top-1/2 -translate-x-1/2
                      -translate-y-1/2 text-base text-muted-foreground

                      lg:hidden
                    `}
                  >
                    Loading Stacked Chart...
                  </span>
                </div>
              </div>
            ) : (
              <TemporalStackedChart
                onPaperClick={handleHeatmapClick}
                minYear={stackedMinYear}
                maxYear={stackedMaxYear}
                topN={stackedTopN}
                stackMode={stackedStackMode}
                sortBy={stackedSortBy}
                showOther={stackedShowOther}
                onMinYearChange={setStackedMinYear}
                onMaxYearChange={setStackedMaxYear}
                onTopNChange={setStackedTopN}
                onStackModeChange={setStackedStackMode}
                onSortByChange={setStackedSortBy}
                onShowOtherChange={setStackedShowOther}
              />
            )}
          </main>
        )}
      </div>
      <PaperDetail
        paperId={selectedPaperId}
        onClose={() => setSelectedPaperId(null)}
        onPaperClick={(paperId) => {
          setSelectedPaperId(paperId);
          if (!hasOpenedPaperDetail) {
            setHasOpenedPaperDetail(true);
          }
        }}
        clusters={clusters}
      />
      <DialogRoot open={welcomeDialogOpen} onOpenChange={setWelcomeDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Welcome to the Science Dataset Explorer</DialogTitle>
            <DialogDescription>
              Explore a comprehensive dataset of scientific research papers
            </DialogDescription>
          </DialogHeader>
          <div className="p-4">
            <LearnMoreContent />
          </div>
          <DialogFooter className="flex items-center justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setWelcomeDialogOpen(false);
                setLearnMoreSheetOpen(true);
              }}
            >
              Learn More
            </Button>
            <Button onClick={() => setWelcomeDialogOpen(false)}>
              View Dataset
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
      <LearnMoreSheet
        open={learnMoreSheetOpen}
        onClose={() => setLearnMoreSheetOpen(false)}
        onEmailCTAClick={() => setEmailDialogOpen(true)}
      />
      <DialogRoot
        open={emailDialogOpen}
        onOpenChange={(open) => {
          // Prevent closing during submission
          if (emailSubmitting || emailSubmitSuccess) return;
          setEmailDialogOpen(open);
          if (!open) {
            setEmailError("");
          }
        }}
      >
        <DialogContent className="max-w-md">
          {emailSubmitSuccess ? (
            <>
              <DialogHeader>
                <DialogTitle>Thank You!</DialogTitle>
                <DialogDescription>
                  We've received your information and will keep you updated.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center justify-center p-8">
                <div
                  className={`
                    flex h-16 w-16 items-center justify-center rounded-full
                    bg-green-100

                    dark:bg-green-900
                  `}
                >
                  <svg
                    className={`
                      h-8 w-8 text-green-600

                      dark:text-green-400
                    `}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle>Stay Updated on the Full Dataset</DialogTitle>
                <DialogDescription>
                  The full ~50m dataset is currently being processed. Enter your
                  email below if you would like to be notified with updates.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleEmailSubmit}>
                <div className="space-y-4 p-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      required
                      disabled={emailSubmitting}
                      className={emailError ? "border-red-500" : ""}
                    />
                    {emailError && (
                      <p className="text-sm text-red-500">{emailError}</p>
                    )}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="full-dataset"
                        checked={interestedInFullDataset}
                        onCheckedChange={(checked) =>
                          setInterestedInFullDataset(checked === true)
                        }
                        disabled={emailSubmitting}
                      />
                      <Label htmlFor="full-dataset" className="cursor-pointer">
                        I'm interested in the full dataset
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="model-training"
                        checked={interestedInModelTraining}
                        onCheckedChange={(checked) =>
                          setInterestedInModelTraining(checked === true)
                        }
                        disabled={emailSubmitting}
                      />
                      <Label
                        htmlFor="model-training"
                        className="cursor-pointer"
                      >
                        I'm interested in custom model-training
                      </Label>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setEmailDialogOpen(false)}
                    disabled={emailSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={emailSubmitting}>
                    {emailSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </DialogFooter>
              </form>
            </>
          )}
        </DialogContent>
      </DialogRoot>
    </div>
  );
}



================================================
FILE: frontend/src/main.tsx
================================================
import { createLocalStorage, LOCAL_STORAGE_KEYS } from "~/lib/ui-client-utils";
import { ThemeProvider } from "~/ui";
import { createStore } from "jotai";
import { Provider as JotaiProvider } from "jotai/react";
import { PostHogProvider } from "posthog-js/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "wouter";
import { LaionHotKeys } from "./components/LaionHotKeys";
import LaionApp from "./LaionApp";
import "./index.css";

const jotaiStore = createStore();

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <PostHogProvider
        apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
        options={options}
      >
        <JotaiProvider store={jotaiStore}>
          <ThemeProvider
            storage={createLocalStorage()}
            storageKey={LOCAL_STORAGE_KEYS.THEME}
          >
            <LaionHotKeys />
            <LaionApp />
          </ThemeProvider>
        </JotaiProvider>
      </PostHogProvider>
    </Router>
  </React.StrictMode>,
);



================================================
FILE: frontend/src/vite-env.d.ts
================================================
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  // Add other env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}



================================================
FILE: frontend/src/components/ClusterLegend.tsx
================================================
import { Button, Input } from "~/ui";
import { ChevronLeftIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import type { ClusterInfo } from "../types";

interface ClusterLegendProps {
  clusters: ClusterInfo[];
  selectedClusterIds: Set<number>;
  onToggleCluster: (clusterId: number) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  onSelectRandom: () => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  viewMode: "3d" | "heatmap" | "stacked" | "distribution" | "samples" | "force";
  paperSearchQuery: string;
  onPaperSearchChange: (query: string) => void;
  onPaperSearchSubmit: (e: React.FormEvent) => void;
  totalPapers: number;
}

export function ClusterLegend({
  clusters,
  selectedClusterIds,
  onToggleCluster,
  onSelectAll,
  onClearAll,
  onSelectRandom,
  isCollapsed,
  onToggleCollapse,
  viewMode,
  paperSearchQuery,
  onPaperSearchChange,
  onPaperSearchSubmit,
  totalPapers,
}: ClusterLegendProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedClusters = [...clusters].sort(
    // alphabetically by cluster_label
    (a, b) => {
      if (a.cluster_label < b.cluster_label) return -1;
      if (a.cluster_label > b.cluster_label) return 1;
      return 0;
    },
  );

  const filteredClusters = sortedClusters.filter((cluster) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return cluster.cluster_label.toLowerCase().includes(query);
  });

  if (isCollapsed) {
    return (
      <div className="flex h-full items-center justify-center p-0">
        <div
          className={`cursor-pointer p-4 text-muted-foreground`}
          onClick={onToggleCollapse}
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      {viewMode === "3d" && (
        <div className="mb-4">
          <h3
            onClick={onToggleCollapse}
            className={`
              mb-3 flex cursor-pointer items-center justify-between
              font-semibold text-foreground
            `}
          >
            Search Papers
            <ChevronLeftIcon
              className={`
                ml-2 hidden h-4 w-4

                lg:block
              `}
            />
          </h3>
          <form
            onSubmit={onPaperSearchSubmit}
            className={`flex items-center gap-2`}
          >
            <Input
              type="text"
              placeholder={`Search ${totalPapers.toLocaleString()} papers...`}
              value={paperSearchQuery}
              onChange={(e) => onPaperSearchChange(e.target.value)}
              className="h-8 flex-1 text-sm"
            />
            <Button type="submit" size="xs" variant="secondary">
              <SearchIcon className="mr-2 h-4 w-4" />
              Search
            </Button>
          </form>
        </div>
      )}
      <div className="mb-4">
        <h3 className="mb-3 font-semibold text-foreground">Dataset Clusters</h3>
        <Input
          type="text"
          placeholder={`Search ${clusters.length.toLocaleString()} clusters...`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-3 h-8 text-sm"
        />
        <div className="grid grid-cols-3 gap-2">
          <Button
            onClick={onSelectAll}
            variant="secondary"
            size="xs"
            className="w-full"
          >
            Select All
          </Button>
          <Button
            onClick={onClearAll}
            variant="secondary"
            size="xs"
            className="w-full"
          >
            Clear All
          </Button>
          <Button
            onClick={onSelectRandom}
            variant="secondary"
            size="xs"
            className="w-full"
          >
            Random
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {filteredClusters.length === 0 && searchQuery.trim() && (
          <p className="py-4 text-center text-sm text-muted-foreground">
            No clusters match "{searchQuery}"
          </p>
        )}
        {filteredClusters.map((cluster) => {
          const isSelected =
            selectedClusterIds.size === 0 ||
            selectedClusterIds.has(cluster.cluster_id);

          return (
            <div
              key={cluster.cluster_id}
              className={`
                flex cursor-pointer items-center gap-0.5 rounded-md border
                border-border px-3 py-2 transition-all

                hover:translate-x-0.5 hover:bg-muted/50

                ${isSelected ? "bg-muted/30" : "opacity-50"}
              `}
              onClick={() => onToggleCluster(cluster.cluster_id)}
            >
              <div
                className={`
                  mr-1.5 h-3.5 w-3.5 flex-shrink-0 rounded-sm border
                  border-border/50
                `}
                style={{
                  backgroundColor: cluster.color,
                  opacity: isSelected ? 1 : 0.3,
                }}
              />
              <div className="min-w-0 flex-1">
                <div
                  className={`
                    overflow-hidden text-ellipsis whitespace-nowrap text-sm
                    font-medium text-foreground
                  `}
                >
                  {cluster.cluster_label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {cluster.count.toLocaleString()} papers
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



================================================
FILE: frontend/src/components/ClusterVisualization.tsx
================================================
import { Label, Slider, Switch, useTheme } from "~/ui";
import type { Data } from "plotly.js";
import { useEffect, useMemo, useRef, useState } from "react";
import Plot from "react-plotly.js";
import type { ClusterInfo, PaperSummary } from "../types";
import type { LayoutType } from "../utils/layoutTransforms";
import {
  applyLayoutTransform,
  getCameraForLayout,
} from "../utils/layoutTransforms";

interface SceneAnnotation {
  x: number;
  y: number;
  z: number;
  text: string;
  showarrow: boolean;
  font: {
    size: number;
    color: string;
    family: string;
  };
  bgcolor: string;
  bordercolor: string;
  borderwidth: number;
  borderpad: number;
  xanchor: "left" | "center" | "right" | "auto";
  yanchor: "top" | "middle" | "bottom" | "auto";
}

interface ClusterVisualizationProps {
  papers: PaperSummary[];
  clusters: ClusterInfo[];
  onPaperClick: (paperId: number) => void;
  selectedClusterIds: Set<number>;
  layoutType?: LayoutType;
}

export function ClusterVisualization({
  papers,
  clusters,
  onPaperClick,
  selectedClusterIds,
  layoutType = "original",
}: ClusterVisualizationProps) {
  const { isDarkTheme } = useTheme();
  const [plotData, setPlotData] = useState<Data[]>([]);
  const [sceneAnnotations, setSceneAnnotations] = useState<SceneAnnotation[]>(
    [],
  );
  const [isLoaded, setIsLoaded] = useState(false);
  const [cameraRevision, setCameraRevision] = useState(0);
  const [showAllLabels, setShowAllLabels] = useState(false);
  const [densityPercent, setDensityPercent] = useState(() => {
    // Set lower density on mobile for better performance
    return typeof window !== "undefined" && window.innerWidth < 1024 ? 20 : 100;
  });
  const [zoomLevel, setZoomLevel] = useState(1.5); // Default zoom level for mobile
  // Use ref instead of state to avoid re-renders when modifier key is pressed
  const isModifierPressedRef = useRef(false);
  const [prevLayoutType, setPrevLayoutType] = useState(layoutType);
  // Use a stable string to maintain camera position across data changes
  // Only change when we explicitly want to reset (R key or layout change)
  const uirevision = `camera-stable-${layoutType}-${cameraRevision}`;

  useEffect(() => {
    // Group papers by cluster
    const clusterMap = new Map<number, PaperSummary[]>();
    const clusterColorMap = new Map<number, string>();

    // Build cluster color map
    clusters.forEach((cluster) => {
      clusterColorMap.set(cluster.cluster_id, cluster.color);
    });

    // Group papers by cluster
    papers.forEach((paper) => {
      if (
        paper.x === null ||
        paper.y === null ||
        paper.z === null ||
        paper.cluster_id === null
      )
        return;

      // Skip if cluster is not selected
      if (
        selectedClusterIds.size > 0 &&
        !selectedClusterIds.has(paper.cluster_id)
      ) {
        return;
      }

      if (!clusterMap.has(paper.cluster_id)) {
        clusterMap.set(paper.cluster_id, []);
      }
      clusterMap.get(paper.cluster_id)?.push(paper);
    });

    // Sample papers based on density percentage
    if (densityPercent < 100) {
      clusterMap.forEach((clusterPapers, clusterId) => {
        const targetCount = Math.ceil(
          (clusterPapers.length * densityPercent) / 100,
        );
        if (targetCount < clusterPapers.length) {
          // Use deterministic sampling based on paper ID to keep it stable
          const sampledPapers = clusterPapers
            .sort((a, b) => a.id - b.id) // Sort by ID for consistency
            .filter((_, index, arr) => {
              // Sample evenly across the sorted array
              const step = arr.length / targetCount;
              return index % Math.ceil(step) === 0;
            })
            .slice(0, targetCount);
          clusterMap.set(clusterId, sampledPapers);
        }
      });
    }

    // Create 3D traces for each cluster
    const traces = Array.from(clusterMap.entries()).map(
      ([clusterId, clusterPapers], clusterIndex) => {
        const color = clusterColorMap.get(clusterId) ?? "#cccccc";
        const clusterLabel =
          clusterPapers[0]?.cluster_label ?? `Cluster ${clusterId}`;

        // Extract original coordinates
        const originalPoints = clusterPapers.map((p) => ({
          x: p.x ?? 0,
          y: p.y ?? 0,
          z: p.z ?? 0,
        }));

        // Apply layout transformation
        const transformedPoints = applyLayoutTransform(
          originalPoints,
          layoutType,
          {
            clusterId,
            clusterIndex,
            totalClusters: clusterMap.size,
          },
        );

        return {
          x: transformedPoints.map((p) => p.x),
          y: transformedPoints.map((p) => p.y),
          z: transformedPoints.map((p) => p.z),
          mode: "markers",
          type: "scatter3d",
          name: clusterLabel,
          hovertemplate: clusterPapers.map((p) => {
            const title = p.title ?? "Untitled";
            const wrappedTitle =
              title.length > 60 ? title.substring(0, 60) + "..." : title;
            return (
              `Cluster: <b>${clusterLabel}</b><br>` +
              `<br>` +
              `Title: <b>${wrappedTitle}</b><br>` +
              `Field: ${p.field_subfield ?? "Unknown"}<br>` +
              `Year: ${p.publication_year ?? "N/A"}<extra></extra>`
            );
          }),
          hoverlabel: {
            bgcolor: isDarkTheme ? "#1f2937" : "white",
            // bordercolor: color,
            font: {
              size: 12,
              color: isDarkTheme ? "#f9fafb" : "#333",
            },
            align: "left",
            namelength: -1,
          },
          marker: {
            color: color,
            size: 3,
            opacity: 0.7,
            line: {
              color: isDarkTheme ? "#374151" : "white",
              width: 0.2,
            },
          },
          customdata: clusterPapers.map((p) => [p.id, clusterId]), // Store both paper ID and cluster ID
        } as Data;
      },
    );

    setPlotData(traces);
  }, [
    papers,
    clusters,
    selectedClusterIds,
    isDarkTheme,
    layoutType,
    densityPercent,
  ]);

  // Update scene annotations based on showAllLabels toggle
  useEffect(() => {
    if (!showAllLabels) {
      setSceneAnnotations([]);
      return;
    }

    // Show all cluster labels when toggle is on
    const clusterMap = new Map<number, PaperSummary[]>();
    const clusterColorMap = new Map<number, string>();

    clusters.forEach((cluster) => {
      clusterColorMap.set(cluster.cluster_id, cluster.color);
    });

    papers.forEach((paper) => {
      if (
        paper.x === null ||
        paper.y === null ||
        paper.z === null ||
        paper.cluster_id === null
      )
        return;

      if (
        selectedClusterIds.size > 0 &&
        !selectedClusterIds.has(paper.cluster_id)
      ) {
        return;
      }

      if (!clusterMap.has(paper.cluster_id)) {
        clusterMap.set(paper.cluster_id, []);
      }
      clusterMap.get(paper.cluster_id)?.push(paper);
    });

    const annotations: SceneAnnotation[] = [];

    Array.from(clusterMap.entries()).forEach(
      ([clusterId, clusterPapers], clusterIndex) => {
        const originalPoints = clusterPapers.map((p) => ({
          x: p.x ?? 0,
          y: p.y ?? 0,
          z: p.z ?? 0,
        }));

        const transformedPoints = applyLayoutTransform(
          originalPoints,
          layoutType,
          {
            clusterId,
            clusterIndex,
            totalClusters: clusterMap.size,
          },
        );

        const sumX = transformedPoints.reduce((sum, p) => sum + p.x, 0);
        const sumY = transformedPoints.reduce((sum, p) => sum + p.y, 0);
        const sumZ = transformedPoints.reduce((sum, p) => sum + p.z, 0);
        const centroidX = sumX / transformedPoints.length;
        const centroidY = sumY / transformedPoints.length;
        const centroidZ = sumZ / transformedPoints.length;

        const clusterLabel =
          clusterPapers[0]?.cluster_label ?? `Cluster ${clusterId}`;
        const color = clusterColorMap.get(clusterId) ?? "#cccccc";

        annotations.push({
          x: centroidX,
          y: centroidY,
          z: centroidZ,
          text: clusterLabel,
          showarrow: false,
          font: {
            size: 11,
            color: isDarkTheme ? "#f9fafb" : "#333",
            family: "Arial, sans-serif",
          },
          bgcolor: isDarkTheme
            ? "rgba(18, 25, 38, 0.9)"
            : "rgba(255, 255, 255, 0.8)",
          bordercolor: color,
          borderwidth: 1,
          borderpad: 4,
          xanchor: "center",
          yanchor: "middle",
        });
      },
    );

    setSceneAnnotations(annotations);
  }, [
    showAllLabels,
    papers,
    clusters,
    selectedClusterIds,
    layoutType,
    isDarkTheme,
  ]);

  // Separate effect to trigger animation only once
  useEffect(() => {
    if (!isLoaded && plotData.length > 0) {
      const timer = setTimeout(() => setIsLoaded(true), 100);
      return () => clearTimeout(timer);
    }
  }, [plotData.length, isLoaded]);

  // Reset camera when layout type changes
  useEffect(() => {
    if (prevLayoutType !== layoutType) {
      setPrevLayoutType(layoutType);
      setCameraRevision((prev) => prev + 1);
    }
  }, [layoutType, prevLayoutType]);

  // Track modifier key state (Ctrl on Windows/Linux, Cmd on Mac)
  // Using ref instead of state to avoid re-renders
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        isModifierPressedRef.current = true;
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      // When Ctrl or Meta is released, check if either is still pressed
      if (!event.ctrlKey && !event.metaKey) {
        isModifierPressedRef.current = false;
      }
    };

    // Reset state when window loses focus
    const handleBlur = () => {
      isModifierPressedRef.current = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("blur", handleBlur);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);

  // Handle reset camera on 'R' key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Only reset if R is pressed alone (no modifier keys)
      if (
        (event.key === "r" || event.key === "R") &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        // Change camera revision to reset the camera view
        setCameraRevision((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Memoize layout config to prevent unnecessary re-renders
  const plotLayout = useMemo(() => {
    const baseCamera = getCameraForLayout(layoutType);
    // Apply zoom level to camera eye position
    const camera = {
      ...baseCamera,
      eye: {
        x: baseCamera.eye.x * zoomLevel,
        y: baseCamera.eye.y * zoomLevel,
        z: baseCamera.eye.z * zoomLevel,
      },
    };

    return {
      showlegend: false,
      legend: {
        orientation: "v" as const,
        yanchor: "top" as const,
        y: 1,
        xanchor: "left" as const,
        x: 1.02,
        bgcolor: isDarkTheme
          ? "rgba(18, 25, 38, 0.9)"
          : "rgba(255, 255, 255, 0.8)",
        bordercolor: isDarkTheme ? "#374151" : "#ddd",
        borderwidth: 1,
      },
      hovermode: "closest" as const,
      hoverlabel: {
        bgcolor: isDarkTheme ? "#1f2937" : "white",
        bordercolor: isDarkTheme ? "#374151" : "#ddd",
        font: { size: 12, color: isDarkTheme ? "#f9fafb" : "#333" },
        align: "left" as const,
        namelength: -1,
      },
      scene: {
        bgcolor: isDarkTheme ? "#0d121c" : "white",
        xaxis: {
          title: "",
          zeroline: false,
          showgrid: true,
          gridcolor: isDarkTheme ? "#374151" : "#e0e0e0",
          backgroundcolor: isDarkTheme ? "#0d121c" : "#fafafa",
          showticklabels: false,
        },
        yaxis: {
          title: "",
          zeroline: false,
          showgrid: true,
          gridcolor: isDarkTheme ? "#374151" : "#e0e0e0",
          backgroundcolor: isDarkTheme ? "#0d121c" : "#fafafa",
          showticklabels: false,
        },
        zaxis: {
          title: "",
          zeroline: false,
          showgrid: true,
          gridcolor: isDarkTheme ? "#374151" : "#e0e0e0",
          backgroundcolor: isDarkTheme ? "#0d121c" : "#fafafa",
          showticklabels: false,
        },
        camera: camera,
        annotations: sceneAnnotations,
      },
      paper_bgcolor: isDarkTheme ? "#0d121c" : "white",
      plot_bgcolor: isDarkTheme ? "#0d121c" : "white",
      margin: { t: 10, r: 10, b: 10, l: 10 },
      autosize: true,
      uirevision: uirevision,
    };
  }, [isDarkTheme, layoutType, sceneAnnotations, uirevision, zoomLevel]);

  // Memoize plot config to prevent unnecessary re-renders
  const plotConfig = useMemo(
    () => ({
      displayModeBar: false,
      displaylogo: false,
      responsive: true,
      scrollZoom: true,
      doubleClick: "reset" as const,
    }),
    [],
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: isDarkTheme ? "#0d121c" : "white",
        touchAction: "auto",
      }}
    >
      <style>{`
        @keyframes plotFadeInZoom {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .plot-container-animated {
          animation: plotFadeInZoom 1.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .plot-container-static {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
      {/* Mobile zoom slider */}
      <div
        className={`
          absolute left-1/2 top-2.5 z-10 -translate-x-1/2

          lg:hidden
        `}
        style={{
          width: "calc(100% - 20px)",
          maxWidth: "400px",
        }}
      >
        <div
          style={{
            backgroundColor: isDarkTheme
              ? "rgba(18, 25, 38, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
            padding: "8px 12px",
            borderRadius: "8px",
            fontSize: "12px",
            color: isDarkTheme ? "#d1d5db" : "#666",
            border: isDarkTheme ? "1px solid #374151" : "1px solid #ddd",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <Label
              htmlFor="zoom-slider-mobile"
              style={{
                fontSize: "12px",
                margin: 0,
                color: isDarkTheme ? "#d1d5db" : "#666",
              }}
            >
              Zoom
            </Label>
            <span
              style={{
                fontSize: "12px",
                fontWeight: "600",
                color: isDarkTheme ? "#f9fafb" : "#333",
              }}
            >
              {Math.round((2 / zoomLevel) * 100)}%
            </span>
          </div>
          <Slider
            id="zoom-slider-mobile"
            value={[zoomLevel]}
            min={0.5}
            max={2}
            step={0.1}
            onValueChange={([value]) => value && setZoomLevel(value)}
            aria-label="Zoom level"
            className="my-2"
          />
        </div>
      </div>
      <div
        className={`
          absolute right-2.5 top-2.5 z-10 hidden

          lg:block
        `}
      >
        <div className="flex flex-col gap-2">
          <div
            style={{
              backgroundColor: isDarkTheme
                ? "rgba(18, 25, 38, 0.9)"
                : "rgba(255, 255, 255, 0.9)",
              padding: "8px 12px",
              borderRadius: "4px",
              fontSize: "12px",
              color: isDarkTheme ? "#d1d5db" : "#666",
              border: isDarkTheme ? "1px solid #374151" : "1px solid #ddd",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              minWidth: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Label
                htmlFor="density-slider"
                style={{
                  fontSize: "12px",
                  margin: 0,
                  color: isDarkTheme ? "#d1d5db" : "#666",
                }}
              >
                Density by Cluster (%)
              </Label>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: isDarkTheme ? "#f9fafb" : "#333",
                }}
              >
                {densityPercent}%
              </span>
            </div>
            <Slider
              id="density-slider"
              value={[densityPercent]}
              min={1}
              max={100}
              step={1}
              onValueChange={([value]) => value && setDensityPercent(value)}
              aria-label="Node density percentage"
              className="my-1"
            />
          </div>
          <div
            style={{
              backgroundColor: isDarkTheme
                ? "rgba(18, 25, 38, 0.9)"
                : "rgba(255, 255, 255, 0.9)",
              padding: "8px 12px",
              borderRadius: "4px",
              fontSize: "12px",
              color: isDarkTheme ? "#d1d5db" : "#666",
              border: isDarkTheme ? "1px solid #374151" : "1px solid #ddd",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Label
              htmlFor="show-labels-toggle"
              style={{
                fontSize: "12px",
                margin: 0,
                cursor: "pointer",
                color: isDarkTheme ? "#d1d5db" : "#666",
              }}
            >
              Show Labels
            </Label>
            <Switch
              id="show-labels-toggle"
              checked={showAllLabels}
              onCheckedChange={setShowAllLabels}
            />
          </div>
          <div
            style={{
              backgroundColor: isDarkTheme
                ? "rgba(18, 25, 38, 0.9)"
                : "rgba(255, 255, 255, 0.9)",
              padding: "8px 12px",
              borderRadius: "4px",
              fontSize: "12px",
              color: isDarkTheme ? "#d1d5db" : "#666",
              border: isDarkTheme ? "1px solid #374151" : "1px solid #ddd",
            }}
          >
            Right click + drag to pan | Press 'R' to reset viewpoint
          </div>
        </div>
      </div>
      <div
        className={
          isLoaded ? "plot-container-animated" : `plot-container-static`
        }
        style={{
          width: "100%",
          height: "100%",
          opacity: isLoaded ? undefined : 0,
        }}
      >
        <Plot
          data={plotData}
          layout={plotLayout}
          config={plotConfig}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
          onClick={(e: unknown) => {
            const eventData = e as {
              points?: { customdata: [number, number] }[];
            };
            if (eventData.points?.[0]?.customdata) {
              const [paperId] = eventData.points[0].customdata;
              if (!paperId) return;

              // On mobile (< 1024px), allow direct tap. On desktop, require modifier key
              const isMobile =
                typeof window !== "undefined" && window.innerWidth < 1024;

              if (isMobile) {
                // Mobile: tap to open
                onPaperClick(paperId);
              } else if (isModifierPressedRef.current) {
                // Desktop: only open if Ctrl/Cmd is pressed
                onPaperClick(paperId);
              }
            }
          }}
        />
      </div>
    </div>
  );
}



================================================
FILE: frontend/src/components/DistributionChart.tsx
================================================
import { useTheme } from "~/ui";
import { useAtom } from "jotai";
import type { Data, Layout, PlotMouseEvent } from "plotly.js";
import { useEffect, useMemo, useRef, useState } from "react";
import Plot from "react-plotly.js";
import { clustersDataAtom } from "../state/chartDataCache";
import type { ClusterInfo, ClustersResponse } from "../types";
import { getApiUrl } from "../utils/api";

export function DistributionChart({
  onClusterClick,
  topN = 100,
  onTotalClustersLoaded,
}: {
  onClusterClick?: (clusterId: number) => void;
  topN?: number;
  onTotalClustersLoaded?: (total: number) => void;
}) {
  const { isDarkTheme } = useTheme();
  const [cachedData, setCachedData] = useAtom(clustersDataAtom);
  const [data, setData] = useState<ClusterInfo[]>([]);
  const [loading, setLoading] = useState(!cachedData);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If we have cached data, use it immediately
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
      if (onTotalClustersLoaded) {
        onTotalClustersLoaded(cachedData.length);
      }
      return;
    }

    // Otherwise, fetch the data
    fetch(getApiUrl("/api/clusters"))
      .then((res) => res.json())
      .then((clustersData: ClustersResponse) => {
        const clusters: ClusterInfo[] = clustersData.clusters;
        // Sort by count in descending order
        const sorted = [...clusters].sort((a, b) => b.count - a.count);
        setData(sorted);
        setCachedData(sorted); // Cache the data
        setLoading(false);
        // Notify parent of total clusters count
        if (onTotalClustersLoaded) {
          onTotalClustersLoaded(sorted.length);
        }
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [cachedData, setCachedData, onTotalClustersLoaded]);

  const plotData: Data[] = useMemo(() => {
    if (!data.length) return [];

    // Limit to top N clusters
    const displayData = data.slice(0, topN);

    return [
      {
        type: "bar",
        x: displayData.map((d) => d.cluster_label),
        y: displayData.map((d) => d.count),
        marker: {
          color: displayData.map((d) => d.color),
          line: {
            color: "rgba(0,0,0,0.2)",
            width: 1,
          },
        },
        hovertemplate:
          "<b>%{x}</b><br>" + "Papers: %{y:,}<br>" + "<extra></extra>",
        customdata: displayData.map((d) => d.cluster_id),
      },
    ];
  }, [data, topN]);

  const layout: Partial<Layout> = useMemo(
    () => ({
      autosize: true,
      margin: { l: 100, r: 40, t: 60, b: 120 },
      xaxis: {
        title: "Research Cluster",
        tickangle: -45,
        automargin: true,
        tickfont: { color: isDarkTheme ? "#d1d5db" : "#333" },
        titlefont: { color: isDarkTheme ? "#f9fafb" : "#111" },
        gridcolor: isDarkTheme ? "#374151" : "#e0e0e0",
      },
      yaxis: {
        title: {
          text: "Number of Papers",
          standoff: 20,
        },
        tickfont: { color: isDarkTheme ? "#d1d5db" : "#333" },
        titlefont: { color: isDarkTheme ? "#f9fafb" : "#111" },
        gridcolor: isDarkTheme ? "#374151" : "#e0e0e0",
      },
      title: {
        text: "Paper Distribution by Research Cluster",
        font: {
          size: 18,
          color: isDarkTheme ? "#f9fafb" : "#111",
        },
      },
      hovermode: "closest",
      plot_bgcolor: isDarkTheme ? "#0d121c" : "white",
      paper_bgcolor: isDarkTheme ? "#0d121c" : "white",
    }),
    [isDarkTheme],
  );

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Loading distribution data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-destructive">Error loading data: {error}</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="h-full w-full p-4">
      <Plot
        data={plotData}
        layout={layout}
        config={{
          responsive: true,
          displayModeBar: false,
          displaylogo: false,
        }}
        className="h-full w-full"
        useResizeHandler
        style={{ width: "100%", height: "100%" }}
        onClick={(event) => {
          const eventData = event as PlotMouseEvent;
          if (onClusterClick && eventData.points[0]) {
            const clusterId = eventData.points[0].customdata as number;
            onClusterClick(clusterId);
          }
        }}
      />
    </div>
  );
}



================================================
FILE: frontend/src/components/ForceDirectedCluster.tsx
================================================
import { Button, Label, Slider, useTheme } from "~/ui";
import * as d3Force from "d3-force";
import * as d3Selection from "d3-selection";
import * as d3Zoom from "d3-zoom";
import { useEffect, useRef, useState } from "react";
import type { ClusterInfo, PaperSummary } from "../types";

interface ForceDirectedClusterProps {
  papers: PaperSummary[];
  clusters: ClusterInfo[];
  onPaperClick: (paperId: number) => void;
  selectedClusterIds: Set<number>;
}

type NodeType = "cluster" | "paper";

interface ForceNode extends d3Force.SimulationNodeDatum {
  id: string; // Changed to string to support both "cluster-X" and "paper-X" formats
  type: NodeType;
  clusterId: number;
  clusterLabel: string;
  color: string;
  // For cluster nodes
  paperCount?: number;
  // For paper nodes
  paperId?: number;
  title?: string;
  field?: string;
  year?: number;
}

interface ForceLink extends d3Force.SimulationLinkDatum<ForceNode> {
  source: string | ForceNode;
  target: string | ForceNode;
}

export function ForceDirectedCluster({
  papers,
  clusters,
  onPaperClick,
  selectedClusterIds,
}: ForceDirectedClusterProps) {
  const { isDarkTheme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const simulationRef = useRef<d3Force.Simulation<ForceNode, ForceLink> | null>(
    null,
  );
  const transformRef = useRef<d3Zoom.ZoomTransform>(d3Zoom.zoomIdentity);
  const hoveredNodeRef = useRef<ForceNode | null>(null);
  const [expandedClusters, setExpandedClusters] = useState<Set<number>>(
    new Set(),
  );
  const [densityPercent, setDensityPercent] = useState(20);
  const [resetTrigger, setResetTrigger] = useState(0);
  const nodesRef = useRef<ForceNode[]>([]);
  const linksRef = useRef<ForceLink[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [hoveredNodeDisplay, setHoveredNodeDisplay] =
    useState<ForceNode | null>(null);
  const draggedNodeRef = useRef<ForceNode | null>(null);
  const isDraggingRef = useRef(false);
  const [cursorStyle, setCursorStyle] = useState<"grab" | "move" | "grabbing">(
    "grab",
  );
  const zoomBehaviorRef = useRef<d3Zoom.ZoomBehavior<
    HTMLCanvasElement,
    unknown
  > | null>(null);

  // Update dimensions on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Create and run the force simulation
  useEffect(() => {
    if (!canvasRef.current || !papers.length || !clusters.length) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Build cluster info maps
    const clusterColorMap = new Map<number, string>();
    const clusterLabelMap = new Map<number, string>();
    const clusterCountMap = new Map<number, number>();

    clusters.forEach((cluster) => {
      clusterColorMap.set(cluster.cluster_id, cluster.color);
      clusterLabelMap.set(cluster.cluster_id, cluster.cluster_label);
      clusterCountMap.set(cluster.cluster_id, 0);
    });

    // Count papers per cluster
    papers.forEach((paper) => {
      if (paper.cluster_id !== null) {
        clusterCountMap.set(
          paper.cluster_id,
          (clusterCountMap.get(paper.cluster_id) ?? 0) + 1,
        );
      }
    });

    // Filter papers based on selected clusters
    const filteredPapers = papers.filter((paper) => {
      if (paper.cluster_id === null) return false;
      if (
        selectedClusterIds.size > 0 &&
        !selectedClusterIds.has(paper.cluster_id)
      ) {
        return false;
      }
      return true;
    });

    // Group papers by cluster
    const papersByCluster = new Map<number, PaperSummary[]>();
    filteredPapers.forEach((paper) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (!papersByCluster.has(paper.cluster_id!)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        papersByCluster.set(paper.cluster_id!, []);
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      papersByCluster.get(paper.cluster_id!)?.push(paper);
    });

    // Sample papers based on density
    if (densityPercent < 100) {
      papersByCluster.forEach((clusterPapers, clusterId) => {
        const targetCount = Math.ceil(
          (clusterPapers.length * densityPercent) / 100,
        );
        if (targetCount < clusterPapers.length) {
          const sampledPapers = clusterPapers
            .sort((a, b) => a.id - b.id)
            .filter((_, index, arr) => {
              const step = arr.length / targetCount;
              return index % Math.ceil(step) === 0;
            })
            .slice(0, targetCount);
          papersByCluster.set(clusterId, sampledPapers);
        }
      });
    }

    // Build nodes and links
    const nodes: ForceNode[] = [];
    const links: ForceLink[] = [];
    const nodeMap = new Map<string, ForceNode>();

    // Get visible cluster IDs
    const visibleClusterIds = Array.from(papersByCluster.keys());

    // Store existing node positions to maintain them across updates
    const previousNodes = nodesRef.current;
    const previousPositions = new Map<
      string,
      {
        x: number;
        y: number;
        fx?: number | null | undefined;
        fy?: number | null | undefined;
      }
    >();
    previousNodes.forEach((node) => {
      if (node.x !== undefined && node.y !== undefined) {
        previousPositions.set(node.id, {
          x: node.x,
          y: node.y,
          fx: node.fx,
          fy: node.fy,
        });
      }
    });

    visibleClusterIds.forEach((clusterId) => {
      const clusterPapers = papersByCluster.get(clusterId) ?? [];
      const color = clusterColorMap.get(clusterId) ?? "#cccccc";
      const label = clusterLabelMap.get(clusterId) ?? `Cluster ${clusterId}`;

      if (expandedClusters.has(clusterId)) {
        // Get the cluster node's previous position if it existed
        const clusterNodeId = `cluster-${clusterId}`;
        const clusterPos = previousPositions.get(clusterNodeId);
        const baseX = clusterPos?.x ?? dimensions.width / 2;
        const baseY = clusterPos?.y ?? dimensions.height / 2;

        // Create paper nodes for expanded cluster
        const paperNodesInCluster: ForceNode[] = [];
        clusterPapers.forEach((paper, index) => {
          const paperId = `paper-${paper.id}`;
          const previousPos = previousPositions.get(paperId);

          // Small spiral pattern for initial positions
          const angle = (index / clusterPapers.length) * Math.PI * 2;
          const radius = 30;
          const offsetX = Math.cos(angle) * radius;
          const offsetY = Math.sin(angle) * radius;

          const node: ForceNode = {
            id: paperId,
            type: "paper",
            paperId: paper.id,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            clusterId: paper.cluster_id!,
            clusterLabel: label,
            title: paper.title ?? "Untitled",
            color: color,
            field: paper.field_subfield ?? undefined,
            year: paper.publication_year ?? undefined,
            // Initialize near cluster position if new, otherwise use previous position
            x: previousPos?.x ?? baseX + offsetX,
            y: previousPos?.y ?? baseY + offsetY,
            // Preserve fixed positions
            fx: previousPos?.fx,
            fy: previousPos?.fy,
          };
          nodes.push(node);
          nodeMap.set(node.id, node);
          paperNodesInCluster.push(node);
        });

        // Create links to k-nearest neighbors (k=5) based on original embedding space
        const k = 5;
        paperNodesInCluster.forEach((node, nodeIndex) => {
          const sourcePaper = clusterPapers[nodeIndex];

          // Calculate distances to all other papers in the cluster using original coordinates
          const distances: { index: number; distance: number }[] = [];
          clusterPapers.forEach((targetPaper, targetIndex) => {
            if (targetIndex === nodeIndex) return; // Skip self

            // Use original x, y, z coordinates for distance calculation
            const dx = (sourcePaper.x ?? 0) - (targetPaper.x ?? 0);
            const dy = (sourcePaper.y ?? 0) - (targetPaper.y ?? 0);
            const dz = (sourcePaper.z ?? 0) - (targetPaper.z ?? 0);
            const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            distances.push({ index: targetIndex, distance });
          });

          // Sort by distance and take k nearest neighbors
          distances.sort((a, b) => a.distance - b.distance);
          const nearestNeighbors = distances.slice(0, k);

          // Create links to nearest neighbors
          nearestNeighbors.forEach(({ index: neighborIndex }) => {
            const targetNode = paperNodesInCluster[neighborIndex];
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            if (targetNode) {
              // Only add link if it doesn't exist (avoid duplicates)
              const linkExists = links.some(
                (link) =>
                  (link.source === node.id && link.target === targetNode.id) ||
                  (link.source === targetNode.id && link.target === node.id),
              );
              if (!linkExists) {
                links.push({
                  source: node.id,
                  target: targetNode.id,
                });
              }
            }
          });
        });
      } else {
        // Create cluster node for unexpanded cluster
        const nodeId = `cluster-${clusterId}`;
        const previousPos = previousPositions.get(nodeId);

        const node: ForceNode = {
          id: nodeId,
          type: "cluster",
          clusterId: clusterId,
          clusterLabel: label,
          color: color,
          paperCount: clusterPapers.length,
          // Preserve position if it existed
          x: previousPos?.x,
          y: previousPos?.y,
          fx: previousPos?.fx,
          fy: previousPos?.fy,
        };
        nodes.push(node);
        nodeMap.set(node.id, node);
      }
    });

    nodesRef.current = nodes;
    linksRef.current = links;

    // Create simulation
    const simulation = d3Force
      .forceSimulation<ForceNode, ForceLink>(nodes)
      .force(
        "link",
        d3Force
          .forceLink<ForceNode, ForceLink>(links)
          .id((d) => d.id)
          .strength(0)
          .distance(30),
      )
      .force("charge", d3Force.forceManyBody<ForceNode>().strength(0))
      .force(
        "center",
        d3Force.forceCenter<ForceNode>(
          dimensions.width / 2,
          dimensions.height / 2,
        ),
      )
      .force(
        "collision",
        d3Force
          .forceCollide<ForceNode>()
          .radius((d) => (d.type === "cluster" ? 20 : 8)),
      )
      .force(
        "x",
        d3Force.forceX<ForceNode>(dimensions.width / 2).strength(0.02),
      )
      .force(
        "y",
        d3Force.forceY<ForceNode>(dimensions.height / 2).strength(0.02),
      )
      .alphaDecay(0.05) // Faster decay for smoother settling
      .velocityDecay(0.4) // Higher friction for less chaos
      .alpha(0.3); // Start with lower energy for gentler animation

    simulationRef.current = simulation;

    // Drawing function that reads from refs
    function draw() {
      if (!context) return;

      const transform = transformRef.current;
      const hoveredNode = hoveredNodeRef.current;

      // Clear canvas
      context.save();
      context.clearRect(0, 0, dimensions.width, dimensions.height);

      // Apply zoom transform
      context.translate(transform.x, transform.y);
      context.scale(transform.k, transform.k);

      // Draw links
      context.strokeStyle = isDarkTheme
        ? "rgba(100, 116, 139, 0.2)"
        : "rgba(203, 213, 225, 0.3)";
      context.lineWidth = 1;

      linksRef.current.forEach((link) => {
        const source =
          typeof link.source === "string"
            ? nodesRef.current.find((n) => n.id === link.source)
            : link.source;
        const target =
          typeof link.target === "string"
            ? nodesRef.current.find((n) => n.id === link.target)
            : link.target;

        if (
          !source ||
          !target ||
          source.x === undefined ||
          source.y === undefined ||
          target.x === undefined ||
          target.y === undefined
        )
          return;

        context.beginPath();
        context.moveTo(source.x, source.y);
        context.lineTo(target.x, target.y);
        context.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        if (node.x === undefined || node.y === undefined) return;

        const radius = node.type === "cluster" ? 15 : 5;

        context.beginPath();
        context.arc(node.x, node.y, radius, 0, 2 * Math.PI);
        context.fillStyle = node.color;
        context.globalAlpha = node.type === "cluster" ? 0.9 : 0.7;
        context.fill();
        context.globalAlpha = 1;
        context.strokeStyle = isDarkTheme ? "#374151" : "white";
        context.lineWidth = node.type === "cluster" ? 2 : 1;
        context.stroke();

        // Draw paper count on cluster nodes
        if (node.type === "cluster" && node.paperCount) {
          context.fillStyle = isDarkTheme ? "#f9fafb" : "#1f2937";
          context.font = "bold 10px sans-serif";
          context.textAlign = "center";
          context.textBaseline = "middle";
          context.fillText(node.paperCount.toString(), node.x, node.y);
        }
      });

      // Draw hovered node highlight
      if (hoveredNode?.x !== undefined && hoveredNode.y !== undefined) {
        const radius = hoveredNode.type === "cluster" ? 18 : 8;
        context.beginPath();
        context.arc(hoveredNode.x, hoveredNode.y, radius, 0, 2 * Math.PI);
        context.strokeStyle = isDarkTheme ? "#f9fafb" : "#333";
        context.lineWidth = 2;
        context.stroke();
      }

      context.restore();
    }

    // Continuous render loop
    function render() {
      draw();
      animationFrameRef.current = requestAnimationFrame(render);
    }

    // Start render loop
    render();

    // Update on simulation ticks (just to trigger re-render during physics simulation)
    simulation.on("tick", () => {
      // Drawing is handled by render loop, no need to call draw here
    });

    return () => {
      simulation.stop();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [
    papers,
    clusters,
    selectedClusterIds,
    dimensions,
    isDarkTheme,
    densityPercent,
    expandedClusters,
    resetTrigger,
  ]);

  // Reset layout function
  const handleResetLayout = () => {
    // Collapse all expanded clusters
    setExpandedClusters(new Set());

    // Clear all fixed positions and nodes (will force recreation)
    nodesRef.current = [];
    linksRef.current = [];

    // Reset zoom/pan
    if (canvasRef.current && zoomBehaviorRef.current) {
      const canvas = d3Selection.select(canvasRef.current);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      canvas.call(zoomBehaviorRef.current.transform, d3Zoom.zoomIdentity);
    }

    // Trigger re-simulation with fresh state
    setResetTrigger((prev) => prev + 1);
  };

  // Helper function to find any node at mouse position
  const findNodeAtPosition = (
    clientX: number,
    clientY: number,
  ): ForceNode | null => {
    if (!canvasRef.current) return null;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const transform = transformRef.current;
    const transformedX = (x - transform.x) / transform.k;
    const transformedY = (y - transform.y) / transform.k;

    const nodes = nodesRef.current;
    for (const node of nodes) {
      if (node.x === undefined || node.y === undefined) continue;
      const radius = node.type === "cluster" ? 15 : 5;
      const dx = node.x - transformedX;
      const dy = node.y - transformedY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < radius + 5) {
        return node;
      }
    }
    return null;
  };

  // Setup zoom and pan
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = d3Selection.select(canvasRef.current);
    const zoom = d3Zoom
      .zoom<HTMLCanvasElement, unknown>()
      .scaleExtent([0.1, 10])
      .on("zoom", (event: d3Zoom.D3ZoomEvent<HTMLCanvasElement, unknown>) => {
        transformRef.current = event.transform;
        // Redraw with new transform - no need to restart simulation
      })
      // Disable zoom in certain cases
      .filter((event) => {
        // Disable on double-click (used for cluster expansion)
        if (event.type === "dblclick") {
          return false;
        }

        // Disable when already dragging
        if (isDraggingRef.current) {
          return false;
        }

        // Disable zoom pan on mousedown/touchstart if clicking on any node
        if (event.type === "mousedown" || event.type === "touchstart") {
          const mouseEvent = event as MouseEvent;
          const node = findNodeAtPosition(
            mouseEvent.clientX,
            mouseEvent.clientY,
          );
          if (node) {
            return false; // Let drag handler take over
          }
        }

        return true;
      });

    zoomBehaviorRef.current = zoom;
    canvas.call(zoom);

    return () => {
      canvas.on(".zoom", null);
    };
  }, []);

  // Handle mouse move for hover
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    let rafId: number | null = null;

    function handleMouseMove(event: MouseEvent) {
      if (rafId) return; // Throttle to animation frame

      rafId = requestAnimationFrame(() => {
        rafId = null;

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Transform mouse coordinates based on zoom/pan
        const transform = transformRef.current;
        const transformedX = (x - transform.x) / transform.k;
        const transformedY = (y - transform.y) / transform.k;

        // Find closest node
        const nodes = nodesRef.current;
        let closestNode: ForceNode | null = null;
        let closestDist = Infinity;

        for (const node of nodes) {
          if (node.x === undefined || node.y === undefined) continue;
          const radius = node.type === "cluster" ? 15 : 5;
          const dx = node.x - transformedX;
          const dy = node.y - transformedY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < radius + 5 && dist < closestDist) {
            closestDist = dist;
            closestNode = node;
          }
        }

        hoveredNodeRef.current = closestNode;
        setHoveredNodeDisplay(closestNode);

        // Update cursor style - all nodes can be dragged
        if (!isDraggingRef.current) {
          if (closestNode !== null) {
            setCursorStyle("move"); // All nodes can be dragged
          } else {
            setCursorStyle("grab"); // Empty space - default grab for panning
          }
        }
      });
    }

    canvas.addEventListener("mousemove", handleMouseMove);
    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Handle single click with modifier key (for paper nodes to view details)
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    function handleClick(event: MouseEvent) {
      // Don't handle clicks if we just finished dragging
      if (isDraggingRef.current) return;

      // Only handle if Cmd (Mac) or Ctrl (Windows/Linux) is pressed
      if (!event.metaKey && !event.ctrlKey) return;

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Transform mouse coordinates
      const transform = transformRef.current;
      const transformedX = (x - transform.x) / transform.k;
      const transformedY = (y - transform.y) / transform.k;

      // Find clicked node
      const nodes = nodesRef.current;
      for (const node of nodes) {
        if (node.x === undefined || node.y === undefined) continue;
        const radius = node.type === "cluster" ? 15 : 5;
        const dx = node.x - transformedX;
        const dy = node.y - transformedY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius + 5) {
          // Open paper details when Cmd/Ctrl+click on paper nodes
          if (node.type === "paper" && node.paperId) {
            onPaperClick(node.paperId);
          }
          break;
        }
      }
    }

    canvas.addEventListener("click", handleClick);
    return () => canvas.removeEventListener("click", handleClick);
  }, [onPaperClick]);

  // Handle double click (for cluster nodes to expand/collapse)
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    function handleDoubleClick(event: MouseEvent) {
      event.preventDefault(); // Prevent default behavior
      event.stopPropagation(); // Stop event from bubbling

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Transform mouse coordinates
      const transform = transformRef.current;
      const transformedX = (x - transform.x) / transform.k;
      const transformedY = (y - transform.y) / transform.k;

      // Find clicked node
      const nodes = nodesRef.current;
      for (const node of nodes) {
        if (node.x === undefined || node.y === undefined) continue;
        const radius = node.type === "cluster" ? 15 : 5;
        const dx = node.x - transformedX;
        const dy = node.y - transformedY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius + 5) {
          if (node.type === "cluster") {
            // Toggle cluster expansion
            console.log(
              "Expanding cluster:",
              node.clusterId,
              node.clusterLabel,
            );
            setExpandedClusters((prev) => {
              const newSet = new Set(prev);
              if (newSet.has(node.clusterId)) {
                newSet.delete(node.clusterId);
              } else {
                newSet.add(node.clusterId);
              }
              return newSet;
            });
          } else {
            // Collapse the cluster if double-clicking a paper node
            console.log("Collapsing cluster:", node.clusterId);
            setExpandedClusters((prev) => {
              const newSet = new Set(prev);
              newSet.delete(node.clusterId);
              return newSet;
            });
          }
          break;
        }
      }
    }

    canvas.addEventListener("dblclick", handleDoubleClick, { capture: true });
    return () =>
      canvas.removeEventListener("dblclick", handleDoubleClick, {
        capture: true,
      });
  }, []);

  // Handle node dragging (all nodes)
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    function handleMouseDown(event: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Transform mouse coordinates
      const transform = transformRef.current;
      const transformedX = (x - transform.x) / transform.k;
      const transformedY = (y - transform.y) / transform.k;

      // Find any node at mouse position (all nodes can be dragged)
      const nodes = nodesRef.current;
      for (const node of nodes) {
        if (node.x === undefined || node.y === undefined) continue;
        const radius = node.type === "cluster" ? 15 : 5;
        const dx = node.x - transformedX;
        const dy = node.y - transformedY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < radius + 5) {
          // Start dragging this node
          isDraggingRef.current = true;
          draggedNodeRef.current = node;
          setCursorStyle("grabbing");
          // Fix node position during drag
          node.fx = node.x;
          node.fy = node.y;
          event.preventDefault();
          event.stopPropagation();
          break;
        }
      }
    }

    function handleMouseMove(event: MouseEvent) {
      if (!isDraggingRef.current || !draggedNodeRef.current) return;

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Transform mouse coordinates
      const transform = transformRef.current;
      const transformedX = (x - transform.x) / transform.k;
      const transformedY = (y - transform.y) / transform.k;

      // Update node position
      const node = draggedNodeRef.current;
      node.fx = transformedX;
      node.fy = transformedY;

      // Reheat simulation slightly to adjust connected nodes
      if (simulationRef.current) {
        simulationRef.current.alpha(0.1).restart();
      }

      event.preventDefault();
    }

    function handleMouseUp() {
      if (isDraggingRef.current && draggedNodeRef.current) {
        // Keep node fixed at its current position (user can drag again to move)
        // Alternatively, unfix to let physics take over:
        // draggedNodeRef.current.fx = null;
        // draggedNodeRef.current.fy = null;

        isDraggingRef.current = false;
        draggedNodeRef.current = null;

        // Reset cursor based on current hover state
        setCursorStyle(hoveredNodeRef.current ? "move" : "grab");
      }
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseUp); // Handle case where mouse leaves canvas

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        backgroundColor: isDarkTheme ? "#0d121c" : "white",
      }}
    >
      {/* Controls */}
      <div
        className={`
          absolute right-2.5 top-2.5 z-10 hidden

          lg:block
        `}
      >
        <div className="flex flex-col gap-2">
          <div
            style={{
              backgroundColor: isDarkTheme
                ? "rgba(18, 25, 38, 0.9)"
                : "rgba(255, 255, 255, 0.9)",
              padding: "8px 12px",
              borderRadius: "4px",
              fontSize: "12px",
              color: isDarkTheme ? "#d1d5db" : "#666",
              border: isDarkTheme ? "1px solid #374151" : "1px solid #ddd",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              minWidth: "200px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Label
                htmlFor="force-density-slider"
                style={{
                  fontSize: "12px",
                  margin: 0,
                  color: isDarkTheme ? "#d1d5db" : "#666",
                }}
              >
                Node Density (%)
              </Label>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  color: isDarkTheme ? "#f9fafb" : "#333",
                }}
              >
                {densityPercent}%
              </span>
            </div>
            <Slider
              id="force-density-slider"
              value={[densityPercent]}
              min={1}
              max={100}
              step={1}
              onValueChange={([value]) => value && setDensityPercent(value)}
              aria-label="Node density percentage"
              className="my-1"
            />
          </div>
          <div
            style={{
              backgroundColor: isDarkTheme
                ? "rgba(18, 25, 38, 0.9)"
                : "rgba(255, 255, 255, 0.9)",
              padding: "8px 12px",
              borderRadius: "4px",
              fontSize: "12px",
              color: isDarkTheme ? "#d1d5db" : "#666",
              border: isDarkTheme ? "1px solid #374151" : "1px solid #ddd",
              lineHeight: "1.5",
            }}
          >
            <div>Scroll: zoom | Drag space: pan | Drag node: reposition</div>
            <div className="mt-0.5">
              Cmd/Ctrl+click paper: details | Double-click: expand/collapse
            </div>
          </div>
          <Button
            type="button"
            onClick={handleResetLayout}
            variant="outline"
            size="xs"
            className="flex w-full items-center justify-center gap-2"
          >
            Reset Layout
          </Button>
        </div>
      </div>

      {/* Hover tooltip */}
      {hoveredNodeDisplay && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: "20px",
            transform: "translateX(-50%)",
            backgroundColor: isDarkTheme
              ? "rgba(18, 25, 38, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
            padding: "12px 16px",
            borderRadius: "6px",
            fontSize: "13px",
            color: isDarkTheme ? "#f9fafb" : "#333",
            border: isDarkTheme ? "1px solid #374151" : "1px solid #ddd",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            maxWidth: "400px",
            pointerEvents: "none",
            zIndex: 20,
          }}
        >
          {hoveredNodeDisplay.type === "cluster" ? (
            <>
              <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                {hoveredNodeDisplay.clusterLabel}
              </div>
              <div style={{ marginBottom: "4px" }}>
                <strong>Papers:</strong> {hoveredNodeDisplay.paperCount}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: isDarkTheme ? "#9ca3af" : "#6b7280",
                }}
              >
                Double-click to expand
              </div>
            </>
          ) : (
            <>
              <div style={{ fontWeight: "600", marginBottom: "4px" }}>
                Cluster: {hoveredNodeDisplay.clusterLabel}
              </div>
              <div style={{ marginBottom: "4px" }}>
                <strong>Title:</strong>{" "}
                {hoveredNodeDisplay.title &&
                hoveredNodeDisplay.title.length > 80
                  ? hoveredNodeDisplay.title.substring(0, 80) + "..."
                  : hoveredNodeDisplay.title}
              </div>
              {hoveredNodeDisplay.field && (
                <div style={{ marginBottom: "4px" }}>
                  <strong>Field:</strong> {hoveredNodeDisplay.field}
                </div>
              )}
              {hoveredNodeDisplay.year && (
                <div>
                  <strong>Year:</strong> {hoveredNodeDisplay.year}
                </div>
              )}
            </>
          )}
        </div>
      )}

      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        style={{
          width: "100%",
          height: "100%",
          cursor: cursorStyle,
        }}
      />
    </div>
  );
}



================================================
FILE: frontend/src/components/LaionHotKeys.tsx
================================================
import { isTypingInputElementFocused } from "~/lib/ui-client-utils";
import { useTheme } from "~/ui";
import { useCallback, useEffect } from "react";

const HOT_KEY_MAP = {
  TOGGLE_THEME: "t",
};

type HotKey = keyof typeof HOT_KEY_MAP;

export function LaionHotKeys() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [setTheme, theme]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isTypingInputElementFocused()) {
        return;
      }

      const matchedKey = Object.entries(HOT_KEY_MAP).find(
        ([_, value]) => value === event.key,
      );
      if (matchedKey == null) {
        return;
      }

      const metaKeysPressed = event.metaKey || event.ctrlKey;
      if (metaKeysPressed) {
        return;
      }

      // This prevents the closest active element from being focused.
      event.preventDefault();
      document.body.focus();

      const hotKey = matchedKey[0] as HotKey;
      switch (hotKey) {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        case "TOGGLE_THEME": {
          toggleTheme();
          break;
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleTheme]);

  return null;
}



================================================
FILE: frontend/src/components/LearnMoreContent.tsx
================================================
export const LearnMoreLinks = () => {
  return (
    <p className="text-base text-muted-foreground">
      This dataset was built using a specialized small model, fine-tuned by{" "}
      <a
        href="https://inference.net"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          underline

          hover:text-foreground
        `}
      >
        Inference.net
      </a>
      , in collaboration with{" "}
      <a
        href="https://laion.ai"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          underline

          hover:text-foreground
        `}
      >
        LAION
      </a>
      .
    </p>
  );
};

export function LearnMoreContent() {
  return (
    <div className="space-y-4">
      <LearnMoreLinks />
      <p className="text-base text-muted-foreground">
        This is a small 100,000 sample preview of the full ~50m sample dataset.
        Our fine-tuned model extracts structured summaries from original,
        arbitrary text data.
      </p>
    </div>
  );
}



================================================
FILE: frontend/src/components/LearnMoreSheet.tsx
================================================
import {
  Button,
  CodeBlock,
  Col,
  Separator,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/ui";
import { useTheme } from "~/ui/providers/ThemeProvider";
import { GithubIcon } from "lucide-react";
import BenchmarksDarkImage from "../assets/benchmark-dark-theme.webp";
import BenchmarksLightImage from "../assets/benchmark-light-theme.webp";
import { LearnMoreLinks } from "./LearnMoreContent";

const SCHEMA_CODE = `interface ScientificSummary {
  title: string;
  authors: string;
  publication_year: number | null;
  field_subfield: string;
  type_of_paper: string;
  executive_summary: string;
  research_context: string;
  key_results: string;
  three_takeaways: string;
  claims?: {
    details: string;
    supporting_evidence: string;
    contradicting_evidence: string;
    implications: string;
  }[];
}

interface SummarizationData {
  article_classification:
    | "SCIENTIFIC_TEXT"
    | "PARTIAL_SCIENTIFIC_TEXT"
    | "NON_SCIENTIFIC_TEXT";
  summary: ScientificSummary | null;
}`;

interface LearnMoreSheetProps {
  open: boolean;
  onClose: () => void;
  onEmailCTAClick: () => void;
}

export function LearnMoreSheet({
  open,
  onClose,
  onEmailCTAClick,
}: LearnMoreSheetProps) {
  const { isDarkTheme } = useTheme();

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent
        className={`
          flex h-full w-full flex-col overflow-y-auto

          sm:max-w-5xl
        `}
        side="right"
      >
        <SheetHeader className="flex-shrink-0">
          <SheetTitle>About This Project</SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto pb-6">
          <Col className="mt-6 gap-2">
            <LearnMoreLinks />
            <p className="text-base text-muted-foreground">
              We fine-tuned a 14B Qwen model to specialize in the task of
              extracting structured summaries from scientific papers. We
              carefully benchmarked this model across a variety of closed source
              models.
            </p>
            <p className="text-base text-muted-foreground">
              We evaluated the model's performance on 1,000 samples withheld
              from the training set using an LLM-as-a-Judge methodology, on a
              qualitative 5-point rubric.
            </p>
            <h2 className="mt-6">Model Benchmarks</h2>
            <img
              src={isDarkTheme ? BenchmarksDarkImage : BenchmarksLightImage}
              alt="Model Benchmarks"
              className="my-4 w-full rounded-lg border"
            />
            <h2 className="mt-6">Structured Extraction Schema</h2>
            <p className="text-base text-muted-foreground">
              The fine-tuned model extracts structured summaries from papers
              following this TypeScript schema:
            </p>
            <CodeBlock
              language="typescript"
              code={SCHEMA_CODE}
              obfuscatedCode={SCHEMA_CODE}
              copyButton={<></>}
              className="mt-2"
              customStyle={{ fontSize: "0.8rem" }}
            />
          </Col>
          <Col className="mt-12 gap-2">
            <h2>Dataset Exploration</h2>
            <b>Embeddings</b>
            <p className="text-base text-muted-foreground">
              Paper embeddings were generated using{" "}
              <a
                href="https://huggingface.co/allenai/specter2_base"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  underline

                  hover:text-foreground
                `}
              >
                SPECTER2
              </a>
              , a transformer model from AllenAI specifically designed for
              scientific documents. The model processes each paper's title,
              executive summary, and research context to generate
              768-dimensional embeddings optimized for semantic search over
              scientific literature.
            </p>
            <b>Cluster Algorithm</b>
            <p className="text-base text-muted-foreground">
              The visualization uses UMAP (Uniform Manifold Approximation and
              Projection) to reduce the 768D embeddings to 3D coordinates,
              preserving local and global structure. K-Means clustering groups
              papers into ~100 clusters based on semantic similarity in the
              embedding space. Cluster labels are automatically generated using
              TF-IDF analysis of paper fields and key takeaways, identifying the
              most distinctive terms for each cluster.
            </p>
          </Col>
          <Separator className="my-8" />
          <div className="mt-8 flex justify-start gap-3">
            <Button
              variant="default"
              onClick={() => {
                onEmailCTAClick();
                onClose();
              }}
              className={`
                w-full

                sm:w-auto
              `}
            >
              Interested in the full dataset?
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://github.com/context-labs/laion-data-explorer",
                  "_blank",
                  "noopener,noreferrer",
                )
              }
              className={`
                w-full

                sm:w-auto
              `}
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}



================================================
FILE: frontend/src/components/PaperDetail.tsx
================================================
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "~/ui";
import { useEffect, useState } from "react";
import type {
  ClusterInfo,
  PaperDetail as PaperDetailType,
  SummarizationData,
} from "../types";
import { getApiUrl } from "../utils/api";

interface PaperDetailProps {
  paperId: number | null;
  onClose: () => void;
  onPaperClick?: (paperId: number) => void;
  clusters?: ClusterInfo[];
}

export function PaperDetail({
  paperId,
  onClose,
  onPaperClick,
  clusters = [],
}: PaperDetailProps) {
  const [paper, setPaper] = useState<PaperDetailType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accordionValue, setAccordionValue] = useState<string>("");

  useEffect(() => {
    if (!paperId) {
      setPaper(null);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(getApiUrl(`/api/papers/${paperId}`))
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch paper");
        return res.json();
      })
      .then((data: PaperDetailType) => {
        setPaper(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [paperId]);

  const handleNearestPaperClick = (nearPaperId: number) => {
    // Close the accordion when navigating to a nearest paper
    setAccordionValue("");
    if (onPaperClick) {
      onPaperClick(nearPaperId);
    }
  };

  let summaryData: SummarizationData | null = null;
  if (paper?.summarization) {
    try {
      summaryData = JSON.parse(paper.summarization);
    } catch (e) {
      console.error("Failed to parse summarization:", e);
    }
  }

  // Get cluster color from clusters data
  const clusterColor = paper?.cluster_id
    ? (clusters.find((c) => c.cluster_id === paper.cluster_id)?.color ??
      "#888888")
    : "#888888";

  // Convert hex color to rgba with opacity for border
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const clusterBorderColor = hexToRgba(clusterColor, 0.8);

  return (
    <Sheet
      open={paperId !== null}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
          setAccordionValue("");
        }
      }}
    >
      <SheetContent
        autoFocus={false}
        className={`
          w-full overflow-y-auto border-none

          lg:w-[1000px] lg:max-w-[1000px]

          sm:w-[600px] sm:max-w-[600px]
        `}
      >
        <SheetHeader
          className={`-mx-6 -mt-6 mb-6 border-b border-border bg-background p-6`}
        >
          <SheetTitle
            className={`text-left text-2xl leading-tight text-foreground`}
          >
            Paper Details
          </SheetTitle>
        </SheetHeader>
        <div className="space-y-6">
          {loading && (
            <p className="text-muted-foreground">Loading paper details...</p>
          )}
          {error && <p className="text-destructive">Error: {error}</p>}
          {paper && (
            <>
              <div className="rounded-lg border border-border bg-muted/50 p-4">
                <div>
                  <h3
                    className={`
                      mb-3 text-base font-semibold text-card-foreground
                    `}
                  >
                    Paper Title
                  </h3>
                  <h2 className="w-[95%] leading-tight text-foreground">
                    {paper.title === ""
                      ? "[No title extracted]"
                      : (paper.title ?? "Untitled")}
                  </h2>
                </div>
                <div
                  className={`
                    mt-4 flex flex-col gap-8

                    sm:flex-row
                  `}
                >
                  <div>
                    <div
                      className={`
                        mb-1 text-xs font-medium uppercase tracking-wide
                        text-muted-foreground
                      `}
                    >
                      Cluster
                    </div>
                    <div
                      className={`
                        inline-flex items-center rounded-sm px-3 py-1 text-sm
                        font-medium text-foreground
                      `}
                      style={{
                        border: `1px solid ${clusterBorderColor}`,
                      }}
                    >
                      {paper.cluster_label ?? "N/A"}
                    </div>
                  </div>
                  <div>
                    <div
                      className={`
                        mb-1 text-xs font-medium uppercase tracking-wide
                        text-muted-foreground
                      `}
                    >
                      Field
                    </div>
                    <div className="py-1 text-sm font-medium text-foreground">
                      {paper.field_subfield ?? "Unknown"}
                    </div>
                  </div>
                  <div>
                    <div
                      className={`
                        mb-1 text-xs font-medium uppercase tracking-wide
                        text-muted-foreground
                      `}
                    >
                      Year
                    </div>
                    <div className="py-1 text-sm font-medium text-foreground">
                      {paper.publication_year ?? "Unknown"}
                    </div>
                  </div>
                </div>
              </div>
              {paper.nearest_papers.length > 0 && (
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  value={accordionValue}
                  onValueChange={setAccordionValue}
                >
                  <AccordionItem value="nearest" className="border-border">
                    <AccordionTrigger>
                      <p
                        className={`
                          ml-1 text-base font-semibold text-foreground

                          hover:underline
                        `}
                      >
                        View Nearest Papers
                      </p>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-1 text-base text-muted-foreground">
                        Showing {paper.nearest_papers.length} papers closest to
                        this one in embedding space, calculated using Euclidean
                        distance.
                      </p>
                      <p className="mb-4 text-base text-muted-foreground">
                        These papers are semantically similar based on their
                        content and methodology.
                      </p>
                      <div className="space-y-2">
                        {paper.nearest_papers.map((nearPaper) => (
                          <button
                            key={nearPaper.id}
                            onClick={() =>
                              handleNearestPaperClick(nearPaper.id)
                            }
                            className={`
                              w-full rounded-md border border-border bg-card p-3
                              text-left text-sm transition-colors

                              hover:bg-accent hover:text-accent-foreground
                            `}
                          >
                            <div className="font-medium text-card-foreground">
                              {nearPaper.title ?? "Untitled"}
                            </div>
                            <div
                              className={`
                                mt-1 flex items-center gap-2 text-xs
                                text-muted-foreground
                              `}
                            >
                              {nearPaper.publication_year && (
                                <span>{nearPaper.publication_year}</span>
                              )}
                              {nearPaper.field_subfield && (
                                <>
                                  <span>•</span>
                                  <span>{nearPaper.field_subfield}</span>
                                </>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
              {summaryData?.summary && (
                <div className="space-y-6">
                  {summaryData.summary.authors && (
                    <section
                      className={`rounded-lg border border-border bg-card p-4`}
                    >
                      <h3
                        className={`
                          mb-3 text-base font-semibold text-card-foreground
                        `}
                      >
                        Authors
                      </h3>
                      <p
                        className={`
                          text-sm leading-relaxed text-muted-foreground
                        `}
                      >
                        {summaryData.summary.authors}
                      </p>
                    </section>
                  )}
                  <section
                    className={`rounded-lg border border-border bg-card p-4`}
                  >
                    <h3
                      className={`
                        mb-3 text-base font-semibold text-card-foreground
                      `}
                    >
                      Executive Summary
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {summaryData.summary.executive_summary}
                    </p>
                  </section>
                  <section
                    className={`rounded-lg border border-border bg-card p-4`}
                  >
                    <h3
                      className={`
                        mb-3 text-base font-semibold text-card-foreground
                      `}
                    >
                      Research Context
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {summaryData.summary.research_context}
                    </p>
                  </section>
                  <section
                    className={`rounded-lg border border-border bg-card p-4`}
                  >
                    <h3
                      className={`
                        mb-3 text-base font-semibold text-card-foreground
                      `}
                    >
                      Key Results
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {summaryData.summary.key_results}
                    </p>
                  </section>
                  <section
                    className={`rounded-lg border border-border bg-card p-4`}
                  >
                    <h3
                      className={`
                        mb-3 text-base font-semibold text-card-foreground
                      `}
                    >
                      Three Takeaways
                    </h3>
                    <p
                      className={`
                        whitespace-pre-wrap text-sm leading-relaxed
                        text-muted-foreground
                      `}
                    >
                      {summaryData.summary.three_takeaways}
                    </p>
                  </section>
                  {summaryData.summary.claims &&
                    summaryData.summary.claims.length > 0 && (
                      <section>
                        <h3
                          className={`
                            mb-4 text-base font-semibold text-foreground
                          `}
                        >
                          Key Claims
                        </h3>
                        <div className="space-y-3">
                          {summaryData.summary.claims.map((claim, idx) => (
                            <div
                              key={idx}
                              className={`
                                rounded-lg border border-border bg-card p-4
                              `}
                            >
                              <h4
                                className={`
                                  mb-3 font-semibold text-card-foreground
                                `}
                              >
                                Claim {idx + 1}
                              </h4>
                              <div className="space-y-2">
                                <div>
                                  <span
                                    className={`
                                      text-sm font-semibold text-foreground
                                    `}
                                  >
                                    Details:
                                  </span>{" "}
                                  <span
                                    className={`text-sm text-muted-foreground`}
                                  >
                                    {claim.details}
                                  </span>
                                </div>
                                <div>
                                  <span
                                    className={`
                                      text-sm font-semibold text-foreground
                                    `}
                                  >
                                    Supporting Evidence:
                                  </span>{" "}
                                  <span
                                    className={`text-sm text-muted-foreground`}
                                  >
                                    {claim.supporting_evidence}
                                  </span>
                                </div>
                                {claim.contradicting_evidence && (
                                  <div>
                                    <span
                                      className={`
                                        text-sm font-semibold text-foreground
                                      `}
                                    >
                                      Contradicting Evidence:
                                    </span>{" "}
                                    <span
                                      className={`text-sm text-muted-foreground`}
                                    >
                                      {claim.contradicting_evidence}
                                    </span>
                                  </div>
                                )}
                                <div>
                                  <span
                                    className={`
                                      text-sm font-semibold text-foreground
                                    `}
                                  >
                                    Implications:
                                  </span>{" "}
                                  <span
                                    className={`text-sm text-muted-foreground`}
                                  >
                                    {claim.implications}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                </div>
              )}
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}



================================================
FILE: frontend/src/components/PaperSampleViewer.tsx
================================================
import { Button, CodeBlock, Row, Skeleton } from "~/ui";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { ClusterInfo, PaperSample, PaperSampleList } from "../types";
import { getApiUrl } from "../utils/api";
import {
  getPaperIndexFromPath,
  getPathFromViewMode,
} from "../utils/routeMapping";

interface PaperSampleViewerProps {
  clusters: ClusterInfo[];
  currentPath: string;
  onPathChange: (path: string) => void;
}

export function PaperSampleViewer({
  clusters,
  currentPath,
  onPathChange,
}: PaperSampleViewerProps) {
  const [sampleIds, setSampleIds] = useState<number[]>([]);
  const initialIndexFromPath = getPaperIndexFromPath(currentPath);
  const [currentIndex, setCurrentIndex] = useState(initialIndexFromPath ?? 0);
  const [loadingSampleIds, setLoadingSampleIds] = useState(true);
  const [loadingSample, setLoadingSample] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sampleCache, setSampleCache] = useState<Map<number, PaperSample>>(
    new Map(),
  );
  const [jumpToIndex, setJumpToIndex] = useState("");
  const lastSetPathRef = useRef<string | null>(null);
  const lastSetIndexRef = useRef<number | null>(null);

  // Sync URL changes to local state (for browser back/forward)
  useEffect(() => {
    const indexFromPath = getPaperIndexFromPath(currentPath);
    const newIndex = indexFromPath ?? 0;

    // Only update if the URL actually changed to a different index
    if (newIndex !== currentIndex && currentPath !== lastSetPathRef.current) {
      lastSetIndexRef.current = newIndex;
      setCurrentIndex(newIndex);
    }
  }, [currentPath, currentIndex]);

  // Update URL when currentIndex changes (skip if we just set it from URL)
  useEffect(() => {
    // Skip if this index change came from the URL
    if (lastSetIndexRef.current === currentIndex) {
      lastSetIndexRef.current = null;
      return;
    }

    const newPath = getPathFromViewMode("samples", currentIndex);

    // Only update URL if it's actually different
    if (currentPath !== newPath) {
      lastSetPathRef.current = newPath;
      onPathChange(newPath);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Fetch list of sample IDs on mount
  useEffect(() => {
    fetch(getApiUrl("/api/samples"))
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch sample IDs");
        return res.json();
      })
      .then((data: PaperSampleList) => {
        setSampleIds(data.paper_ids);
        setLoadingSampleIds(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoadingSampleIds(false);
      });
  }, []);

  // Fetch current sample
  useEffect(() => {
    if (sampleIds.length === 0) return;

    const paperId = sampleIds[currentIndex];
    if (!paperId) return;

    // Check cache first
    if (sampleCache.has(paperId)) {
      return;
    }

    setLoadingSample(true);
    fetch(getApiUrl(`/api/samples/${paperId}`))
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch paper sample");
        return res.json();
      })
      .then((data: PaperSample) => {
        setSampleCache(new Map(sampleCache.set(paperId, data)));
        setLoadingSample(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoadingSample(false);
      });
  }, [currentIndex, sampleIds, sampleCache]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < sampleIds.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleJumpToIndex = (e: React.FormEvent) => {
    e.preventDefault();
    const index = parseInt(jumpToIndex, 10);
    if (isNaN(index) || index < 1 || index > sampleIds.length) {
      return;
    }
    setCurrentIndex(index - 1); // Convert 1-based to 0-based
    setJumpToIndex("");
  };

  if (loadingSampleIds) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <Skeleton className="h-96 w-full max-w-6xl" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <p className="text-lg font-semibold text-destructive">Error</p>
          <p className="text-sm text-muted-foreground">{error}</p>
        </div>
      </div>
    );
  }

  if (sampleIds.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="text-center">
          <p className="text-lg font-semibold">No Samples Available</p>
          <p className="text-sm text-muted-foreground">
            No paper samples found in the database.
          </p>
        </div>
      </div>
    );
  }

  const currentPaperId = sampleIds[currentIndex];
  const currentSample = currentPaperId
    ? sampleCache.get(currentPaperId)
    : undefined;

  // Get cluster color from clusters data
  const clusterColor =
    currentSample?.cluster_id !== null &&
    currentSample?.cluster_id !== undefined
      ? (clusters.find((c) => c.cluster_id === currentSample.cluster_id)
          ?.color ?? "#888888")
      : "#888888";

  // Convert hex color to rgba with opacity for border
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const clusterBorderColor = hexToRgba(clusterColor, 0.8);

  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">
      {/* Header */}
      <div
        className={`
          flex items-center justify-between border-b border-border p-4
        `}
      >
        <div>
          <Row className="items-center gap-2">
            <h2 className="text-lg font-semibold">Paper Sample Viewer</h2>
            <p className="text-sm text-muted-foreground">
              — These summaries are extracted using a custom fine-tuned small
              model.
            </p>
          </Row>
          <p className="text-sm text-muted-foreground">
            Viewing {currentIndex + 1} of {sampleIds.length} Sample Papers
          </p>
        </div>
        <Row className="gap-2">
          <Button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            variant="outline"
            size="sm"
          >
            <ChevronLeftIcon className="mr-1 h-4 w-4" />
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentIndex === sampleIds.length - 1}
            variant="outline"
            size="sm"
          >
            Next
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Button>
          <form
            onSubmit={handleJumpToIndex}
            className="flex items-center gap-1"
          >
            <input
              type="number"
              min="1"
              max={sampleIds.length}
              value={jumpToIndex}
              onChange={(e) => setJumpToIndex(e.target.value)}
              placeholder={`1-${sampleIds.length}`}
              className={`
                h-8 w-20 rounded-md border border-input bg-background px-2
                text-sm
              `}
            />
            <Button type="submit" variant="outline" size="sm">
              Go
            </Button>
          </form>
        </Row>
      </div>

      {/* Content */}
      {loadingSample || !currentSample ? (
        <div className="flex h-full items-center justify-center p-8">
          <Skeleton className="h-96 w-full" />
        </div>
      ) : (
        <div
          className={`
            grid h-full grid-cols-1 overflow-hidden

            lg:grid-cols-2
          `}
        >
          {/* Left: Paper Sample */}
          <div className="flex flex-col overflow-hidden border-r border-border">
            <div
              className={`
                flex h-32 flex-shrink-0 flex-col border-b border-border
                bg-muted/50 p-4
              `}
            >
              <h3 className="mb-3 text-sm font-semibold">
                Original Paper Sample
              </h3>
              <div>
                <div
                  className={`
                    mb-1 text-xs font-medium uppercase tracking-wide
                    text-muted-foreground
                  `}
                >
                  Extracted Title
                </div>
                <div
                  className={`line-clamp-2 text-xs font-medium text-foreground`}
                >
                  {currentSample.title ?? "[No title extracted]"}
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <pre
                className={`
                  whitespace-pre-wrap text-xs leading-relaxed
                  text-muted-foreground
                `}
              >
                {currentSample.sample}
              </pre>
            </div>
          </div>

          {/* Right: Extracted JSON */}
          <div className="flex flex-col overflow-hidden">
            <div
              className={`
                flex h-32 flex-shrink-0 flex-col border-b border-border
                bg-muted/50 p-4
              `}
            >
              <h3 className="mb-3 text-sm font-semibold">
                Extracted Data (JSON)
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentSample.cluster_label && (
                  <div>
                    <div
                      className={`
                        mb-1 text-xs font-medium uppercase tracking-wide
                        text-muted-foreground
                      `}
                    >
                      Cluster
                    </div>
                    <div
                      className={`
                        inline-flex items-center rounded-sm px-3 py-1 text-xs
                        font-medium text-foreground
                      `}
                      style={{
                        border: `1px solid ${clusterBorderColor}`,
                      }}
                    >
                      {currentSample.cluster_label}
                    </div>
                  </div>
                )}
                {currentSample.field_subfield && (
                  <div>
                    <div
                      className={`
                        mb-1 text-xs font-medium uppercase tracking-wide
                        text-muted-foreground
                      `}
                    >
                      Field
                    </div>
                    <div className="py-1 text-xs font-medium text-foreground">
                      {currentSample.field_subfield}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <CodeBlock
                language="json"
                code={
                  currentSample.summarization
                    ? JSON.stringify(
                        JSON.parse(currentSample.summarization),
                        null,
                        2,
                      )
                    : "{}"
                }
                obfuscatedCode={
                  currentSample.summarization
                    ? JSON.stringify(
                        JSON.parse(currentSample.summarization),
                        null,
                        2,
                      )
                    : "{}"
                }
                copyButton={<></>}
                customStyle={{ fontSize: "0.7rem" }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



================================================
FILE: frontend/src/components/TemporalHeatmap.tsx
================================================
import { Input, Select, Switch, useTheme } from "~/ui";
import { useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import Plot from "react-plotly.js";
import {
  createYearRangeKey,
  temporalDataAtomFamily,
} from "../state/chartDataCache";
import type { ClusterTemporalData, TemporalDataResponse } from "../types";
import { getApiUrl } from "../utils/api";

interface TemporalHeatmapProps {
  onPaperClick?: (clusterId: number, year: number) => void;
  minYear?: number;
  maxYear?: number;
  topN?: number;
  sortBy?: HeatmapSortOption;
  colorScale?: string;
  normalizeByYear?: boolean;
  onMinYearChange?: (value: number) => void;
  onMaxYearChange?: (value: number) => void;
  onTopNChange?: (value: number) => void;
  onSortByChange?: (value: HeatmapSortOption) => void;
  onColorScaleChange?: (value: string) => void;
  onNormalizeByYearChange?: (value: boolean) => void;
}

export type HeatmapSortOption = "total" | "peak_year" | "alphabetical";

export function TemporalHeatmap({
  onPaperClick,
  minYear: propMinYear,
  maxYear: propMaxYear,
  topN: propTopN,
  sortBy: propSortBy,
  colorScale: propColorScale,
  normalizeByYear: propNormalizeByYear,
  onMinYearChange,
  onMaxYearChange,
  onTopNChange,
  onSortByChange,
  onColorScaleChange,
  onNormalizeByYearChange,
}: TemporalHeatmapProps) {
  const { isDarkTheme } = useTheme();
  const [temporalData, setTemporalData] = useState<ClusterTemporalData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Controls - use props if provided, otherwise use local state
  const [localMinYear, setLocalMinYear] = useState(1990);
  const [localMaxYear, setLocalMaxYear] = useState(2025);
  const [localTopN, setLocalTopN] = useState(30);
  const [localSortBy, setLocalSortBy] = useState<HeatmapSortOption>("total");
  const [localColorScale, setLocalColorScale] = useState("Viridis");
  const [localNormalizeByYear, setLocalNormalizeByYear] = useState(false);

  // Separate state for committed year values (used for API fetch)
  const [committedMinYear, setCommittedMinYear] = useState(1990);
  const [committedMaxYear, setCommittedMaxYear] = useState(2025);

  const minYear = propMinYear ?? localMinYear;
  const maxYear = propMaxYear ?? localMaxYear;
  const topN = propTopN ?? localTopN;
  const sortBy = propSortBy ?? localSortBy;
  const colorScale = propColorScale ?? localColorScale;
  const normalizeByYear = propNormalizeByYear ?? localNormalizeByYear;

  const setMinYear = onMinYearChange ?? setLocalMinYear;
  const setMaxYear = onMaxYearChange ?? setLocalMaxYear;
  const setTopN = onTopNChange ?? setLocalTopN;
  const setSortBy = onSortByChange ?? setLocalSortBy;
  const setColorScale = onColorScaleChange ?? setLocalColorScale;
  const setNormalizeByYear = onNormalizeByYearChange ?? setLocalNormalizeByYear;

  // Statistics
  const [stats, setStats] = useState({
    totalPapers: 0,
    mostActiveYear: 0,
    mostActiveCluster: "",
    fastestGrowing: "",
  });

  // Fetch temporal data - use committed values with caching
  const fetchMinYear = propMinYear ?? committedMinYear;
  const fetchMaxYear = propMaxYear ?? committedMaxYear;
  const yearRangeKey = createYearRangeKey(fetchMinYear, fetchMaxYear);
  const [cachedTemporalData, setCachedTemporalData] = useAtom(
    temporalDataAtomFamily(yearRangeKey),
  );

  useEffect(() => {
    // If we have cached data for this year range, use it immediately
    if (cachedTemporalData) {
      setTemporalData(cachedTemporalData);
      setLoading(false);
      return;
    }

    // Otherwise, fetch the data
    setLoading(true);
    fetch(
      getApiUrl(
        `/api/temporal-data?min_year=${fetchMinYear}&max_year=${fetchMaxYear}`,
      ),
    )
      .then((res) => res.json())
      .then((data: TemporalDataResponse) => {
        setTemporalData(data.clusters);
        setCachedTemporalData(data.clusters); // Cache the data
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [
    fetchMinYear,
    fetchMaxYear,
    yearRangeKey,
    cachedTemporalData,
    setCachedTemporalData,
  ]);

  // Process data for heatmap
  const processedData = useMemo(() => {
    if (!temporalData.length) return null;

    // Calculate total papers per cluster
    const clusterTotals = temporalData.map((cluster) => ({
      cluster_id: cluster.cluster_id,
      cluster_label: cluster.cluster_label,
      color: cluster.color,
      total: cluster.temporal_data.reduce((sum, d) => sum + d.count, 0),
      peak_year: cluster.temporal_data.reduce(
        (max, d) => (d.count > max.count ? d : max),
        cluster.temporal_data[0] ?? { year: 0, count: 0 },
      ).year,
      temporal_data: cluster.temporal_data,
    }));

    // Sort clusters
    let sortedClusters = [...clusterTotals];
    if (sortBy === "total") {
      sortedClusters.sort((a, b) => b.total - a.total);
    } else if (sortBy === "peak_year") {
      sortedClusters.sort((a, b) => b.peak_year - a.peak_year);
    } else {
      sortedClusters.sort((a, b) =>
        a.cluster_label.localeCompare(b.cluster_label),
      );
    }

    // Take top N clusters
    sortedClusters = sortedClusters.slice(0, topN);

    // Get all years in range
    const years = Array.from(
      { length: maxYear - minYear + 1 },
      (_, i) => minYear + i,
    );

    // Build matrix: rows = clusters, columns = years
    const matrix: number[][] = [];
    const clusterLabels: string[] = [];
    const clusterIds: number[] = [];

    // Calculate year totals for normalization
    const yearTotals = new Map<number, number>();
    if (normalizeByYear) {
      temporalData.forEach((cluster) => {
        cluster.temporal_data.forEach((d) => {
          yearTotals.set(d.year, (yearTotals.get(d.year) ?? 0) + d.count);
        });
      });
    }

    sortedClusters.forEach((cluster) => {
      clusterLabels.push(cluster.cluster_label);
      clusterIds.push(cluster.cluster_id);

      // Create a map of year -> count for this cluster
      const yearCountMap = new Map(
        cluster.temporal_data.map((d) => [d.year, d.count]),
      );

      // Build row for this cluster
      const row = years.map((year) => {
        const count = yearCountMap.get(year) ?? 0;
        if (normalizeByYear && count > 0) {
          const yearTotal = yearTotals.get(year) ?? 1;
          return (count / yearTotal) * 100; // Percentage
        }
        return count;
      });
      matrix.push(row);
    });

    // Calculate statistics
    const totalPapers = clusterTotals.reduce((sum, c) => sum + c.total, 0);
    const yearCounts = new Map<number, number>();
    temporalData.forEach((cluster) => {
      cluster.temporal_data.forEach((d) => {
        yearCounts.set(d.year, (yearCounts.get(d.year) ?? 0) + d.count);
      });
    });
    const mostActiveYear = Array.from(yearCounts.entries()).reduce((max, e) =>
      e[1] > max[1] ? e : max,
    )[0];
    const mostActiveCluster = clusterTotals[0]?.cluster_label ?? "N/A";

    // Calculate fastest growing cluster (% increase from first to last year with data)
    const growthRates = clusterTotals
      .map((cluster) => {
        const data = cluster.temporal_data;
        if (data.length < 2) return { label: cluster.cluster_label, rate: 0 };

        const firstYear = data[0];
        const lastYear = data[data.length - 1];
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (!firstYear || !lastYear || firstYear.count === 0)
          return { label: cluster.cluster_label, rate: 0 };

        const rate =
          ((lastYear.count - firstYear.count) / firstYear.count) * 100;
        return { label: cluster.cluster_label, rate };
      })
      .filter((r) => r.rate > 0);

    const fastestGrowing =
      growthRates.length > 0
        ? growthRates.reduce((max, r) => (r.rate > max.rate ? r : max)).label
        : "N/A";

    return {
      matrix,
      years,
      clusterLabels,
      clusterIds,
      stats: {
        totalPapers,
        mostActiveYear,
        mostActiveCluster,
        fastestGrowing,
      },
    };
  }, [temporalData, sortBy, topN, minYear, maxYear, normalizeByYear]);

  // Update stats when processedData changes
  useEffect(() => {
    if (processedData?.stats) {
      setStats(processedData.stats);
    }
  }, [processedData]);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Loading heatmap data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-destructive">Error: {error}</p>
      </div>
    );
  }

  if (!processedData) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">No data available</p>
      </div>
    );
  }

  const { matrix, years, clusterLabels, clusterIds } = processedData;

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Controls Panel */}
      <div className="border-b border-border bg-background px-6 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm text-foreground">
              Year Range:
            </label>
            <Input
              type="number"
              value={minYear}
              onChange={(e) => setMinYear(parseInt(e.target.value))}
              onBlur={(e) => {
                const value = parseInt(e.target.value);
                if (!propMinYear) {
                  setCommittedMinYear(value);
                }
              }}
              className="w-20 text-sm"
              min={1990}
              max={2025}
            />
            <span className="text-sm text-muted-foreground">to</span>
            <Input
              type="number"
              value={maxYear}
              onChange={(e) => setMaxYear(parseInt(e.target.value))}
              onBlur={(e) => {
                const value = parseInt(e.target.value);
                if (!propMaxYear) {
                  setCommittedMaxYear(value);
                }
              }}
              className="w-20 text-sm"
              min={1990}
              max={2025}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm text-foreground">
              Top Clusters:
            </label>
            <Select
              value={topN.toString()}
              onValueChange={(value) => setTopN(parseInt(value))}
              options={[
                { value: "20", label: "20" },
                { value: "30", label: "30" },
                { value: "50", label: "50" },
                { value: "100", label: "100" },
              ]}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm text-foreground">
              Sort By:
            </label>
            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as HeatmapSortOption)}
              options={[
                { value: "total", label: "Total Papers" },
                { value: "peak_year", label: "Peak Year" },
                { value: "alphabetical", label: "Alphabetical" },
              ]}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm text-foreground">
              Color Scale:
            </label>
            <Select
              value={colorScale}
              onValueChange={(value) => setColorScale(value)}
              options={[
                { value: "Viridis", label: "Viridis" },
                { value: "Blues", label: "Blues" },
                { value: "Reds", label: "Reds" },
                { value: "Greens", label: "Greens" },
                { value: "YlOrRd", label: "Yellow-Orange-Red" },
                { value: "Plasma", label: "Plasma" },
              ]}
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch
              checked={normalizeByYear}
              onCheckedChange={setNormalizeByYear}
              label="Normalize by Year"
              labelClassName="text-sm text-foreground"
            />
          </div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="flex-1 overflow-hidden p-4">
        <Plot
          data={[
            {
              z: matrix,
              x: years,
              y: clusterLabels,
              type: "heatmap",
              colorscale: colorScale,
              hovertemplate:
                "<b>%{y}</b><br>" +
                "Year: %{x}<br>" +
                (normalizeByYear ? "Percentage: %{z:.1f}%" : "Papers: %{z}") +
                "<extra></extra>",
              colorbar: {
                title: normalizeByYear ? "% of Year" : "Papers",
                titleside: "right",
              },
            },
          ]}
          layout={{
            xaxis: {
              title: "Publication Year",
              tickfont: { color: isDarkTheme ? "#d1d5db" : "#333" },
              titlefont: { color: isDarkTheme ? "#f9fafb" : "#111" },
              gridcolor: isDarkTheme ? "#374151" : "#e0e0e0",
            },
            yaxis: {
              tickfont: {
                size: 10,
                color: isDarkTheme ? "#d1d5db" : "#333",
              },
              automargin: true,
            },
            paper_bgcolor: isDarkTheme ? "#0d121c" : "white",
            plot_bgcolor: isDarkTheme ? "#0d121c" : "white",
            margin: { t: 20, r: 120, b: 60, l: 250 },
            autosize: true,
            hovermode: "closest",
          }}
          config={{
            displayModeBar: false,
            displaylogo: false,
            responsive: true,
          }}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
          onClick={(e: unknown) => {
            const event = e as { points?: { x: number; y: number }[] };
            if (event.points?.[0] && onPaperClick) {
              const point = event.points[0];
              const year = point.x;
              const clusterIndex = point.y;
              const clusterId = clusterIds[clusterIndex];
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              if (clusterId !== undefined) {
                onPaperClick(clusterId, year);
              }
            }
          }}
        />
      </div>
      <div className="border-t border-border bg-background px-6 py-3">
        <div className="flex items-center justify-around text-sm">
          <div>
            <span className="text-muted-foreground">Total Papers: </span>
            <span className="font-semibold text-foreground">
              {stats.totalPapers.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Most Active Year: </span>
            <span className="font-semibold text-foreground">
              {stats.mostActiveYear}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Largest Cluster: </span>
            <span className="font-semibold text-foreground">
              {stats.mostActiveCluster}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Fastest Growing: </span>
            <span className="font-semibold text-foreground">
              {stats.fastestGrowing}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}



================================================
FILE: frontend/src/components/TemporalStackedChart.tsx
================================================
import { Input, Select, Switch, useTheme } from "~/ui";
import { useAtom } from "jotai";
import { useEffect, useMemo, useState } from "react";
import Plot from "react-plotly.js";
import {
  createYearRangeKey,
  temporalDataAtomFamily,
} from "../state/chartDataCache";
import type { ClusterTemporalData, TemporalDataResponse } from "../types";
import { getApiUrl } from "../utils/api";

interface TemporalStackedChartProps {
  onPaperClick?: (clusterId: number, year: number) => void;
  minYear?: number;
  maxYear?: number;
  topN?: number;
  stackMode?: StackMode;
  sortBy?: StackedSortOption;
  showOther?: boolean;
  onMinYearChange?: (value: number) => void;
  onMaxYearChange?: (value: number) => void;
  onTopNChange?: (value: number) => void;
  onStackModeChange?: (value: StackMode) => void;
  onSortByChange?: (value: StackedSortOption) => void;
  onShowOtherChange?: (value: boolean) => void;
}

export type StackMode = "absolute" | "percentage";
export type StackedSortOption = "total" | "average_year" | "alphabetical";

export function TemporalStackedChart({
  onPaperClick,
  minYear: propMinYear,
  maxYear: propMaxYear,
  topN: propTopN,
  stackMode: propStackMode,
  sortBy: propSortBy,
  showOther: propShowOther,
  onMinYearChange,
  onMaxYearChange,
  onTopNChange,
  onStackModeChange,
  onSortByChange,
  onShowOtherChange,
}: TemporalStackedChartProps) {
  const { isDarkTheme } = useTheme();
  const [temporalData, setTemporalData] = useState<ClusterTemporalData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Controls - use props if provided, otherwise use local state
  const [localMinYear, setLocalMinYear] = useState(1990);
  const [localMaxYear, setLocalMaxYear] = useState(2025);
  const [localTopN, setLocalTopN] = useState(20);
  const [localStackMode, setLocalStackMode] = useState<StackMode>("percentage");
  const [localSortBy, setLocalSortBy] = useState<StackedSortOption>("total");
  const [localShowOther, setLocalShowOther] = useState(false);

  const minYear = propMinYear ?? localMinYear;
  const maxYear = propMaxYear ?? localMaxYear;
  const topN = propTopN ?? localTopN;
  const stackMode = propStackMode ?? localStackMode;
  const sortBy = propSortBy ?? localSortBy;
  const showOther = propShowOther ?? localShowOther;

  const setMinYear = onMinYearChange ?? setLocalMinYear;
  const setMaxYear = onMaxYearChange ?? setLocalMaxYear;
  const setTopN = onTopNChange ?? setLocalTopN;
  const setStackMode = onStackModeChange ?? setLocalStackMode;
  const setSortBy = onSortByChange ?? setLocalSortBy;
  const setShowOther = onShowOtherChange ?? setLocalShowOther;

  // Statistics
  const [stats, setStats] = useState({
    totalPapers: 0,
    peakYear: 0,
    avgPerYear: 0,
    fastestGrowing: "",
  });

  // Fetch temporal data with caching
  const yearRangeKey = createYearRangeKey(minYear, maxYear);
  const [cachedTemporalData, setCachedTemporalData] = useAtom(
    temporalDataAtomFamily(yearRangeKey),
  );

  useEffect(() => {
    // If we have cached data for this year range, use it immediately
    if (cachedTemporalData) {
      setTemporalData(cachedTemporalData);
      setLoading(false);
      return;
    }

    // Otherwise, fetch the data
    setLoading(true);
    fetch(
      getApiUrl(`/api/temporal-data?min_year=${minYear}&max_year=${maxYear}`),
    )
      .then((res) => res.json())
      .then((data: TemporalDataResponse) => {
        setTemporalData(data.clusters);
        setCachedTemporalData(data.clusters); // Cache the data
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [
    minYear,
    maxYear,
    yearRangeKey,
    cachedTemporalData,
    setCachedTemporalData,
  ]);

  // Process data for stacked bar chart
  const processedData = useMemo(() => {
    if (!temporalData.length) return null;

    // Calculate total papers per cluster
    const clusterTotals = temporalData.map((cluster) => ({
      cluster_id: cluster.cluster_id,
      cluster_label: cluster.cluster_label,
      color: cluster.color,
      total: cluster.temporal_data.reduce((sum, d) => sum + d.count, 0),
      avg_year:
        cluster.temporal_data.reduce((sum, d) => sum + d.year * d.count, 0) /
        cluster.temporal_data.reduce((sum, d) => sum + d.count, 0),
      temporal_data: cluster.temporal_data,
    }));

    // Sort clusters
    const sortedClusters = [...clusterTotals];
    if (sortBy === "total") {
      sortedClusters.sort((a, b) => b.total - a.total);
    } else if (sortBy === "average_year") {
      sortedClusters.sort((a, b) => a.avg_year - b.avg_year);
    } else {
      sortedClusters.sort((a, b) =>
        a.cluster_label.localeCompare(b.cluster_label),
      );
    }

    // Take top N clusters
    const topClusters = sortedClusters.slice(0, topN);
    const otherClusters = sortedClusters.slice(topN);

    // Get all years in range
    const years = Array.from(
      { length: maxYear - minYear + 1 },
      (_, i) => minYear + i,
    );

    // Build year totals for percentage mode
    const yearTotals = new Map<number, number>();
    temporalData.forEach((cluster) => {
      cluster.temporal_data.forEach((d) => {
        yearTotals.set(d.year, (yearTotals.get(d.year) ?? 0) + d.count);
      });
    });

    // Create traces for each cluster
    const traces = topClusters.map((cluster) => {
      const yearCountMap = new Map(
        cluster.temporal_data.map((d) => [d.year, d.count]),
      );

      const counts = years.map((year) => {
        const count = yearCountMap.get(year) ?? 0;
        if (stackMode === "percentage" && count > 0) {
          const yearTotal = yearTotals.get(year) ?? 1;
          return (count / yearTotal) * 100;
        }
        return count;
      });

      return {
        cluster_id: cluster.cluster_id,
        cluster_label: cluster.cluster_label,
        color: cluster.color,
        counts,
      };
    });

    // Add "Other" category if there are more clusters and showOther is true
    if (showOther && otherClusters.length > 0) {
      const otherCounts = years.map((year) => {
        let total = 0;
        otherClusters.forEach((cluster) => {
          const yearData = cluster.temporal_data.find((d) => d.year === year);
          if (yearData) {
            total += yearData.count;
          }
        });

        if (stackMode === "percentage" && total > 0) {
          const yearTotal = yearTotals.get(year) ?? 1;
          return (total / yearTotal) * 100;
        }
        return total;
      });

      traces.push({
        cluster_id: -1,
        cluster_label: `Other (${otherClusters.length} clusters)`,
        color: "#E8E8E8",
        counts: otherCounts,
      });
    }

    // Calculate statistics
    const totalPapers = clusterTotals.reduce((sum, c) => sum + c.total, 0);
    const peakYear = Array.from(yearTotals.entries()).reduce((max, e) =>
      e[1] > max[1] ? e : max,
    )[0];
    const avgPerYear = totalPapers / years.length;

    // Calculate growth rates (papers in last 3 years vs first 3 years)
    const growthRates = clusterTotals
      .map((cluster) => {
        const data = cluster.temporal_data.sort((a, b) => a.year - b.year);
        if (data.length < 6) return { label: cluster.cluster_label, rate: 0 };

        const firstThree = data
          .slice(0, 3)
          .reduce((sum, d) => sum + d.count, 0);
        const lastThree = data.slice(-3).reduce((sum, d) => sum + d.count, 0);

        if (firstThree === 0) return { label: cluster.cluster_label, rate: 0 };

        const rate = ((lastThree - firstThree) / firstThree) * 100;
        return { label: cluster.cluster_label, rate };
      })
      .filter((r) => r.rate > 0);

    const fastestGrowing =
      growthRates.length > 0
        ? growthRates.reduce((max, r) => (r.rate > max.rate ? r : max)).label
        : "N/A";

    return {
      traces,
      years,
      stats: {
        totalPapers,
        peakYear,
        avgPerYear: Math.round(avgPerYear),
        fastestGrowing,
      },
    };
  }, [temporalData, topN, stackMode, sortBy, minYear, maxYear, showOther]);

  // Update stats when processedData changes
  useEffect(() => {
    if (processedData?.stats) {
      setStats(processedData.stats);
    }
  }, [processedData]);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Loading stacked chart data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-destructive">Error: {error}</p>
      </div>
    );
  }

  if (!processedData) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">No data available</p>
      </div>
    );
  }

  const { traces, years } = processedData;

  // Create Plotly data
  const plotData = traces.map((trace) => ({
    x: years,
    y: trace.counts,
    name: trace.cluster_label,
    type: "bar" as const,
    marker: {
      color: trace.color,
      line: {
        color: isDarkTheme ? "#374151" : "#ffffff",
        width: 0.5,
      },
    },
    hovertemplate:
      "<b>%{fullData.name}</b><br>" +
      "Year: %{x}<br>" +
      (stackMode === "percentage" ? "Percentage: %{y:.1f}%" : "Papers: %{y}") +
      "<extra></extra>",
    customdata: Array(years.length).fill(trace.cluster_id),
  }));

  return (
    <div className="flex h-full flex-col bg-background">
      {/* Controls Panel */}
      <div className="border-b border-border bg-background px-6 py-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm text-foreground">
              Year Range:
            </label>
            <Input
              type="number"
              value={minYear}
              onChange={(e) => setMinYear(parseInt(e.target.value))}
              className="w-20 text-sm"
              min={1990}
              max={2025}
            />
            <span className="text-sm text-muted-foreground">to</span>
            <Input
              type="number"
              value={maxYear}
              onChange={(e) => setMaxYear(parseInt(e.target.value))}
              className="w-20 text-sm"
              min={1990}
              max={2025}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm text-foreground">
              Top Clusters:
            </label>
            <Select
              value={topN.toString()}
              onValueChange={(value) => setTopN(parseInt(value))}
              options={[
                { value: "10", label: "10" },
                { value: "20", label: "20" },
                { value: "30", label: "30" },
                { value: "50", label: "50" },
              ]}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm text-foreground">
              Stack Mode:
            </label>
            <Select
              value={stackMode}
              onValueChange={(value) => setStackMode(value as StackMode)}
              options={[
                { value: "absolute", label: "Absolute Count" },
                { value: "percentage", label: "Percentage (100%)" },
              ]}
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap text-sm text-foreground">
              Sort By:
            </label>
            <Select
              value={sortBy}
              onValueChange={(value) => setSortBy(value as StackedSortOption)}
              options={[
                { value: "total", label: "Total Papers" },
                { value: "average_year", label: "Average Year" },
                { value: "alphabetical", label: "Alphabetical" },
              ]}
            />
          </div>

          <div className="flex items-center gap-2">
            <Switch
              checked={showOther}
              onCheckedChange={setShowOther}
              label="Show Other Papers"
              labelClassName="text-sm text-foreground"
            />
          </div>
        </div>
      </div>

      {/* Stacked Bar Chart */}
      <div className="flex-1 overflow-hidden p-4">
        <Plot
          data={plotData}
          layout={{
            barmode: "stack",
            xaxis: {
              title: "Publication Year",
              tickfont: { color: isDarkTheme ? "#d1d5db" : "#333" },
              titlefont: { color: isDarkTheme ? "#f9fafb" : "#111" },
              gridcolor: isDarkTheme ? "#374151" : "#e0e0e0",
            },
            yaxis: {
              title:
                stackMode === "percentage"
                  ? "Percentage of Papers (%)"
                  : "Number of Papers",
              tickfont: { color: isDarkTheme ? "#d1d5db" : "#333" },
              titlefont: { color: isDarkTheme ? "#f9fafb" : "#111" },
              gridcolor: isDarkTheme ? "#374151" : "#e0e0e0",
            },
            legend: {
              orientation: "v",
              yanchor: "top",
              y: 1,
              xanchor: "left",
              x: 1.02,
              bgcolor: isDarkTheme
                ? "rgba(18, 25, 38, 0.9)"
                : "rgba(255, 255, 255, 0.9)",
              bordercolor: isDarkTheme ? "#374151" : "#ddd",
              borderwidth: 1,
              font: {
                size: 10,
                color: isDarkTheme ? "#d1d5db" : "#333",
              },
            },
            paper_bgcolor: isDarkTheme ? "#0d121c" : "white",
            plot_bgcolor: isDarkTheme ? "#0d121c" : "white",
            margin: { t: 20, r: 200, b: 60, l: 100 },
            autosize: true,
            hovermode: "closest",
          }}
          config={{
            displayModeBar: false,
            displaylogo: false,
            responsive: true,
          }}
          useResizeHandler={true}
          style={{ width: "100%", height: "100%" }}
          onClick={(e: unknown) => {
            const event = e as {
              points?: { x: number; customdata: number }[];
            };
            if (event.points?.[0] && onPaperClick) {
              const point = event.points[0];
              const year = point.x;
              const clusterId = point.customdata;
              if (clusterId !== -1) {
                // Don't handle "Other" clicks
                onPaperClick(clusterId, year);
              }
            }
          }}
        />
      </div>

      {/* Statistics Panel */}
      <div className="border-t border-border bg-background px-6 py-3">
        <div className="flex items-center justify-around text-sm">
          <div>
            <span className="text-muted-foreground">Total Papers: </span>
            <span className="font-semibold text-foreground">
              {stats.totalPapers.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Peak Year: </span>
            <span className="font-semibold text-foreground">
              {stats.peakYear}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Avg/Year: </span>
            <span className="font-semibold text-foreground">
              {stats.avgPerYear.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="text-muted-foreground">Fastest Growing: </span>
            <span className="font-semibold text-foreground">
              {stats.fastestGrowing}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}



================================================
FILE: frontend/src/lib/models.ts
================================================
// Stub for @kuzco/models
// This file contains minimal stubs to replace imports from the monorepo @kuzco/models package

export enum LogLevel {
  Debug = 0,
  Info = 1,
  Warn = 2,
  Error = 3,
  Fatal = 4,
}

export interface LogMessage {
  timestamp: string;
  level: LogLevel;
  message: string;
  header: string;
}

export const LINKS = {
  INFERENCE_DEVNET_STAKING_PROTOCOL_DOCUMENTATION:
    "https://docs.example.com/staking",
  // Add other links as needed
};



================================================
FILE: frontend/src/lib/ui-client-utils.ts
================================================
// Stub for @kuzco/ui-client-utils
// This file contains minimal stubs to replace imports from the monorepo @kuzco/ui-client-utils package

export const LOCAL_STORAGE_KEYS = {
  THEME: "theme",
  // Add other keys as needed
};

export function createLocalStorage(): Storage {
  if (typeof window === "undefined") {
    // Return a mock storage for SSR
    const mockStorage: Record<string, string> = {};
    return {
      getItem: (key: string) => mockStorage[key] ?? null,
      setItem: (key: string, value: string) => {
        mockStorage[key] = value;
      },
      removeItem: (key: string) => {
        delete mockStorage[key];
      },
      clear: () => {
        Object.keys(mockStorage).forEach((key) => delete mockStorage[key]);
      },
      key: (index: number) => Object.keys(mockStorage)[index] ?? null,
      length: Object.keys(mockStorage).length,
    };
  }
  return window.localStorage;
}

export function isTypingInputElementFocused(): boolean {
  if (typeof document === "undefined") return false;

  const activeElement = document.activeElement;
  if (!activeElement) return false;

  const tagName = activeElement.tagName.toLowerCase();
  const isInput = tagName === "input" || tagName === "textarea";
  const isContentEditable =
    activeElement.getAttribute("contenteditable") === "true";

  return isInput || isContentEditable;
}



================================================
FILE: frontend/src/lib/ui-shared.tsx
================================================
// Stub for @kuzco/ui-shared
// This file contains minimal stubs to replace imports from the monorepo @kuzco/ui-shared package

import { useCallback, useState } from "react";
import type { TouchEvent } from "react";

export const ICONS = {
  // Add icon definitions as needed
  // Example: HOME: "home-icon"
};

export function useSwipeRightDetector(callback: (open: boolean) => void) {
  const [touchStartX, setTouchStartX] = useState(0);

  const onTouchStart = useCallback((e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  }, []);

  const onTouchMove = useCallback((_e: TouchEvent) => {
    // Can be used to provide visual feedback during swipe
  }, []);

  const onTouchEnd = useCallback(
    (e: TouchEvent) => {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchEndX - touchStartX > 50) {
        callback(false);
      }
    },
    [touchStartX, callback],
  );

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}



================================================
FILE: frontend/src/state/chartDataCache.ts
================================================
import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import type { ClusterInfo, ClusterTemporalData } from "../types";

// Cache for cluster distribution data
export const clustersDataAtom = atom<ClusterInfo[] | null>(null);

// Cache family for temporal data by year range
// Key format: "minYear-maxYear"
export const temporalDataAtomFamily = atomFamily((_yearRange: string) =>
  atom<ClusterTemporalData[] | null>(null),
);

// Helper to create year range key
export function createYearRangeKey(minYear: number, maxYear: number): string {
  return `${minYear}-${maxYear}`;
}



================================================
FILE: frontend/src/styles/fonts/inter.css
================================================
/* Original Google Font link:
 * https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap
 */

/* cyrillic-ext */
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCm3FwrK3iLTcvnUwkT9mI1F55MKw.woff2") format("woff2");
  unicode-range:
    U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCm3FwrK3iLTcvnUwAT9mI1F55MKw.woff2") format("woff2");
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCm3FwrK3iLTcvnUwgT9mI1F55MKw.woff2") format("woff2");
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCm3FwrK3iLTcvnUwcT9mI1F55MKw.woff2") format("woff2");
  unicode-range:
    U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCm3FwrK3iLTcvnUwsT9mI1F55MKw.woff2") format("woff2");
  unicode-range:
    U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329,
    U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCm3FwrK3iLTcvnUwoT9mI1F55MKw.woff2") format("woff2");
  unicode-range:
    U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304,
    U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Inter";
  font-style: italic;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCm3FwrK3iLTcvnUwQT9mI1F54.woff2") format("woff2");
  unicode-range:
    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCo3FwrK3iLTcvvYwYZ8UA3J58.woff2") format("woff2");
  unicode-range:
    U+0460-052F, U+1C80-1C8A, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCo3FwrK3iLTcvmYwYZ8UA3J58.woff2") format("woff2");
  unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* greek-ext */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCo3FwrK3iLTcvuYwYZ8UA3J58.woff2") format("woff2");
  unicode-range: U+1F00-1FFF;
}
/* greek */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCo3FwrK3iLTcvhYwYZ8UA3J58.woff2") format("woff2");
  unicode-range:
    U+0370-0377, U+037A-037F, U+0384-038A, U+038C, U+038E-03A1, U+03A3-03FF;
}
/* vietnamese */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCo3FwrK3iLTcvtYwYZ8UA3J58.woff2") format("woff2");
  unicode-range:
    U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329,
    U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCo3FwrK3iLTcvsYwYZ8UA3J58.woff2") format("woff2");
  unicode-range:
    U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304,
    U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 100 900;
  font-display: block;
  src: url("/fonts/inter/UcCo3FwrK3iLTcviYwYZ8UA3.woff2") format("woff2");
  unicode-range:
    U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
    U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212,
    U+2215, U+FEFF, U+FFFD;
}



================================================
FILE: frontend/src/types/assets.d.ts
================================================
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const value: unknown;
  export default value;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}



================================================
FILE: frontend/src/types/index.ts
================================================
export interface PaperSummary {
  id: number;
  title: string | null;
  x: number | null;
  y: number | null;
  z: number | null;
  cluster_id: number | null;
  cluster_label: string | null;
  field_subfield: string | null;
  publication_year: number | null;
  classification: string | null;
}

export interface PaperDetail extends PaperSummary {
  sample: string | null;
  summarization: string | null;
  nearest_papers: PaperSummary[];
}

export interface ClusterInfo {
  cluster_id: number;
  cluster_label: string;
  count: number;
  color: string;
}

export interface PapersResponse {
  papers: PaperSummary[];
}

export interface ClustersResponse {
  clusters: ClusterInfo[];
}

export interface ScientificSummary {
  title: string;
  authors: string;
  publication_year: number | null;
  field_subfield: string;
  type_of_paper: string;
  executive_summary: string;
  research_context: string;
  key_results: string;
  three_takeaways: string;
  claims?: {
    details: string;
    supporting_evidence: string;
    contradicting_evidence: string;
    implications: string;
  }[];
}

export interface SummarizationData {
  article_classification: string;
  summary: ScientificSummary | null;
}

export interface TemporalDataPoint {
  year: number;
  count: number;
}

export interface ClusterTemporalData {
  cluster_id: number;
  cluster_label: string;
  color: string;
  temporal_data: TemporalDataPoint[];
}

export interface TemporalDataResponse {
  clusters: ClusterTemporalData[];
}

export interface PaperSample {
  paper_id: number;
  sample: string;
  title: string | null;
  summarization: string | null;
  cluster_id: number | null;
  cluster_label: string | null;
  field_subfield: string | null;
  publication_year: number | null;
  classification: string | null;
}

export interface PaperSampleList {
  paper_ids: number[];
}



================================================
FILE: frontend/src/ui/index.tsx
================================================
/** ******************************************************************************
 *  Constants
 ******************************************************************************* */

export {
  TailwindColors,
  ColorSystem,
  type ThemeColorName,
} from "./constants/ColorSystem";

/** ******************************************************************************
 *  Providers
 ******************************************************************************* */

export { ThemeProvider, useTheme } from "./providers/ThemeProvider";

/** ******************************************************************************
 *  Hooks
 ******************************************************************************* */

export { ToastAction } from "./components/ui/Toast";
export { useBreakpoints } from "./hooks/useBreakpoints.hook";
export { useHasMounted } from "./hooks/useHasMounted.hook";
export { useToast, toast } from "./hooks/useToast.hook";

/** ******************************************************************************
 *  Utils
 ******************************************************************************* */

export { cn } from "./lib/utils";
export { getThemeColor } from "./utils/getThemeColor";

/** ******************************************************************************
 *  Components
 ******************************************************************************* */

export { Spinner } from "./components/ui/Spinner";
export { Toaster } from "./components/ui/Toaster";
export { Alert, AlertTitle, AlertDescription } from "./components/ui/Alert";
export { AlertWarning } from "./components/custom/AlertWarning";
export { AlertInfo } from "./components/custom/AlertInfo";
export { Grid } from "./components/custom/Grid";
export { Avatar, AvatarFallback, AvatarImage } from "./components/ui/Avatar";
export { Badge } from "./components/ui/Badge";
export { Button } from "./components/ui/Button";
export type { ButtonProps, ButtonVariantProp } from "./components/ui/Button";
export {
  Card,
  CardComponent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./components/ui/Card";
export { Checkbox } from "./components/ui/Checkbox";
export { Col } from "./components/custom/Col";
export { Input } from "./components/ui/Input";
export { Label } from "./components/ui/Label";
export { Row } from "./components/custom/Row";
export { Select } from "./components/ui/Select";
export { Separator } from "./components/ui/Separator";
export { SeparatorBorder } from "./components/ui/SeparatorBorder";
export { Skeleton } from "./components/ui/Skeleton";
export { Switch } from "./components/ui/Switch";
export { ThemeToggle } from "./components/custom/ThemeToggle";
export { ScaleLoader } from "./components/ui/ScaleLoader";
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui/Accordion";
export { Centered } from "./components/custom/Centered";
export { Slider } from "./components/ui/Slider";
export { Tooltip } from "./components/ui/Tooltip";
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "./components/ui/Table";
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./components/ui/Tabs";
export {
  Dialog,
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "./components/ui/Dialog";
export {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "./components/ui/AlertDialog";
export { Code } from "./components/custom/Code";
export {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
} from "./components/ui/Chart";
export { LoadingScreen } from "./components/custom/LoadingScreen";
export { CommandBlock } from "./components/custom/CommandBlock";
export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "./components/ui/Sheet";
export { JsonComponent } from "./components/custom/JsonComponent";
export { CodeBlock } from "./components/custom/CodeBlock";
export {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./components/ui/Popover";
export { Calendar } from "./components/ui/Calendar";
export {
  DateTimePicker,
  TimePickerInput,
  TimePicker,
} from "./components/ui/DateTimePicker";
export { FakeH1 } from "./components/custom/FakeH1";
export {
  HeaderComponent,
  HeaderHoverLinkContainer,
} from "./components/custom/HeaderComponents";
export { FeatureCard, FeatureCardsRow } from "./components/custom/FeatureCard";
export { SearchInput } from "./components/custom/SearchInput";
export { TooltipContentComponent } from "./components/custom/TooltipContentComponent";
export { Textarea } from "./components/ui/Textarea";
export { SelectableCard } from "./components/custom/SelectableCard";
export { ResponsiveRow } from "./components/custom/ResponsiveRow";
export { WorkerLogsTerminal } from "./components/custom/WorkerLogsTerminal";
export { GradientCard } from "./components/custom/GradientCard";
export { ScoreBadge } from "./components/custom/ScoreBadge";
export { HomePageBackdrop } from "./components/custom/HomePageBackdrop";
export { StakingDashboardBanner } from "./components/custom/StakingDashboardBanner";
export { default as InferenceIcon } from "./components/custom/InferenceIcon";



================================================
FILE: frontend/src/ui/components/custom/AlertInfo.tsx
================================================
import { Alert } from "~/ui/components/ui/Alert";
import { InfoIcon } from "lucide-react";

type AlertInfoProps = {
  title: string;
  content?: string | React.ReactNode;
  className?: string;
};

export function AlertInfo({ className, content, title }: AlertInfoProps) {
  return (
    <Alert className={className} variant="info">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <InfoIcon className="h-5 w-5 text-detail-brand" />
        </div>
        <div className="flex-1">
          <h6 className="font-semibold text-foreground">{title}</h6>
          {content && (
            <div className="mt-1">
              {typeof content === "string" ? (
                <p className="text-sm text-muted-foreground">{content}</p>
              ) : (
                content
              )}
            </div>
          )}
        </div>
      </div>
    </Alert>
  );
}



================================================
FILE: frontend/src/ui/components/custom/AlertWarning.tsx
================================================
import { Alert } from "~/ui/components/ui/Alert";
import { AlertTriangleIcon } from "lucide-react";

type AlertWarningProps = {
  title: string;
  content?: string | React.ReactNode;
  className?: string;
};

export function AlertWarning({ className, content, title }: AlertWarningProps) {
  return (
    <Alert className={className} variant="warning">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">
          <AlertTriangleIcon className="h-5 w-5 text-detail-warning" />
        </div>
        <div className="flex-1">
          <h6 className="font-semibold text-foreground">{title}</h6>
          {content && (
            <div className="mt-1">
              {typeof content === "string" ? (
                <p className="text-sm text-muted-foreground">{content}</p>
              ) : (
                content
              )}
            </div>
          )}
        </div>
      </div>
    </Alert>
  );
}



================================================
FILE: frontend/src/ui/components/custom/Centered.tsx
================================================
import { cn } from "~/ui/lib/utils";
import React from "react";

type CenteredProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const Centered = React.forwardRef<HTMLDivElement, CenteredProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        className={cn("flex items-center justify-center", className)}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);

Centered.displayName = "Centered";



================================================
FILE: frontend/src/ui/components/custom/Code.tsx
================================================
import { toast } from "~/ui/hooks/useToast.hook";
import { cn } from "~/ui/lib/utils";
import { CopyIcon } from "lucide-react";
import React, { forwardRef } from "react";
import { useCopyToClipboard } from "usehooks-ts";

type CodeProps = React.HTMLAttributes<HTMLElement> & {
  disableCopyToClipboard?: boolean;
  children: React.ReactNode;
  textToCopy?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  showCopyIcon?: boolean;
};

const ToastSnippet: React.FC<{ value: string }> = ({ value }) => (
  <code
    className={`
      inline-block max-w-[20rem] overflow-hidden text-ellipsis whitespace-nowrap
      rounded-md bg-muted px-1.5 py-1 font-mono text-xs text-detail-brand ring-1
      ring-inset ring-border/50
    `}
    title={value}
  >
    {value}
  </code>
);

export const Code = forwardRef<HTMLElement, CodeProps>(
  (
    {
      children,
      className,
      disableCopyToClipboard,
      onClick,
      showCopyIcon = false,
      textToCopy,
      ...rest
    },
    ref,
  ) => {
    const [, copyToClipboard] = useCopyToClipboard();

    const valueToCopy = disableCopyToClipboard
      ? null
      : (textToCopy ?? (typeof children === "string" ? children : null));

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (valueToCopy) {
        void copyToClipboard(valueToCopy);

        toast.info({
          description: (
            <div className="flex flex-wrap items-center gap-1">
              <span>Copied</span>
              <ToastSnippet value={valueToCopy} />
            </div>
          ),
          title: "Success",
        });
      }

      if (onClick) {
        onClick(e);
        return;
      }
    };

    return (
      <code
        className={cn(
          "flex w-fit items-center rounded-sm p-0 font-mono text-detail-brand",
          valueToCopy && "hover:cursor-pointer hover:text-blue-400",
          className,
        )}
        onClick={handleClick}
        ref={ref}
        {...rest}
      >
        {showCopyIcon && <CopyIcon className="mr-1 h-4 w-4" />}
        {children}
      </code>
    );
  },
);

Code.displayName = "Code";
export default Code;



================================================
FILE: frontend/src/ui/components/custom/CodeBlock.tsx
================================================
import { Row } from "~/ui/components/custom/Row";
import { Button } from "~/ui/components/ui/Button";
import { Card } from "~/ui/components/ui/Card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/ui/components/ui/Tabs";
import { Tooltip } from "~/ui/components/ui/Tooltip";
import { toast } from "~/ui/hooks/useToast.hook";
import { cn } from "~/ui/lib/utils";
import { useTheme } from "~/ui/providers/ThemeProvider";
import { Copy } from "lucide-react";
import { useCallback, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  a11yLight,
  atomOneDark,
} from "react-syntax-highlighter/dist/esm/styles/hljs";
import type { ClassNameValue } from "tailwind-merge";
import { useCopyToClipboard } from "usehooks-ts";

type CopyCodeButtonProps = {
  onCopy: () => void;
};

function CopyCodeButton({ onCopy }: CopyCodeButtonProps) {
  return (
    <Tooltip content="Copy to clipboard">
      <Button
        aria-label="Copy code to clipboard"
        className="group bg-secondary/80"
        onClick={onCopy}
        size="icon"
        variant="ghost"
      >
        <Copy
          className={`
            size-4 text-muted-foreground

            group-hover:text-foreground
          `}
        />
      </Button>
    </Tooltip>
  );
}

export type CodeBlockTab = {
  label: string;
  code: string;
  obfuscatedCode: string;
  language?: string;
};

type SharedProps = {
  className?: ClassNameValue;
  cta?: React.ReactNode;
  copyButton?: React.ReactNode;
  customStyle?: React.CSSProperties;
  onCopy?: () => void;
};

type CodeBlockTabsProps = SharedProps & {
  language?: string;
  tabs: CodeBlockTab[];
};

type CodeBlockCodeProps = SharedProps & {
  code: string;
  obfuscatedCode: string;
  language: string;
};

type CodeBlockProps = CodeBlockTabsProps | CodeBlockCodeProps;

type CodeContentProps = {
  copyButton?: React.ReactNode;
  code: string;
  obfuscatedCode: string;
  language: string;
  handleCopy: (code: string) => void;
  customStyle?: React.CSSProperties;
};

export function CodeContent({
  code,
  copyButton,
  customStyle,
  handleCopy,
  language = "plaintext",
  obfuscatedCode,
}: CodeContentProps) {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={`
        relative h-full w-auto rounded-md p-2

        dark:bg-stone-950
      `}
    >
      {copyButton && (
        <div className="absolute right-2 top-2">
          <CopyCodeButton onCopy={() => handleCopy(code)} />
        </div>
      )}
      <SyntaxHighlighter
        codeTagProps={{ style: { fontFamily: "inherit" } }}
        customStyle={customStyle}
        id="CodeContent"
        language={language}
        style={{
          ...(isDarkTheme ? atomOneDark : a11yLight),
          hljs: {
            ...(isDarkTheme ? atomOneDark.hljs : a11yLight.hljs),
            background: "transparent",
          },
        }}
        wrapLongLines={false}
      >
        {obfuscatedCode}
      </SyntaxHighlighter>
    </div>
  );
}

export function CodeBlock({
  className,
  copyButton = <></>,
  cta,
  customStyle,
  language,
  onCopy,
  ...rest
}: CodeBlockProps) {
  const [, copyToClipboard] = useCopyToClipboard();
  const [tab, setTab] = useState<string>(
    ("tabs" in rest ? rest.tabs[0]?.label : null) ?? "",
  );

  const handleCopy = useCallback(
    (codeToClip: string) => {
      if (codeToClip) {
        void copyToClipboard(codeToClip);
        toast.success({
          description: "Code snippet has been copied to your clipboard.",
          title: "Code Copied",
        });
        onCopy?.();
      }
    },
    [copyToClipboard, onCopy],
  );

  const code = "code" in rest ? rest.code : null;
  if (code) {
    const obfuscatedCode = "obfuscatedCode" in rest ? rest.obfuscatedCode : "";
    return (
      <Card className={cn("relative flex flex-col rounded-lg", className)}>
        {code && (
          <CodeContent
            code={code}
            copyButton={copyButton}
            customStyle={customStyle}
            handleCopy={handleCopy}
            language={language ?? "plaintext"}
            obfuscatedCode={obfuscatedCode}
          />
        )}
      </Card>
    );
  }

  const tabs = "tabs" in rest ? rest.tabs : [];
  return (
    <Card
      className={cn(
        `
          relative flex flex-col

          dark:bg-stone-950
        `,
        className,
      )}
    >
      <Tabs onValueChange={setTab} value={tab}>
        <TabsList className="w-full rounded-none border-b bg-card px-2 py-[6px]">
          <Row className="w-full justify-between">
            <Row className="gap-2">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.label} value={tab.label}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </Row>
            {cta != null && cta}
          </Row>
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.label} value={tab.label}>
            <CodeContent
              code={tab.code}
              copyButton={copyButton}
              customStyle={customStyle}
              handleCopy={handleCopy}
              language={tab.language ?? "plaintext"}
              obfuscatedCode={tab.obfuscatedCode}
            />
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
}



================================================
FILE: frontend/src/ui/components/custom/Col.tsx
================================================
import { cn } from "~/ui/lib/utils";
import React from "react";

type ColProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const Col = React.forwardRef<HTMLDivElement, ColProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cn("flex flex-col", className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

Col.displayName = "Col";



================================================
FILE: frontend/src/ui/components/custom/CommandBlock.tsx
================================================
import { Col } from "~/ui/components/custom/Col";
import { Row } from "~/ui/components/custom/Row";
import { Button } from "~/ui/components/ui/Button";
import { Tooltip } from "~/ui/components/ui/Tooltip";
import { toast } from "~/ui/hooks/useToast.hook";
import { CopyIcon } from "lucide-react";
import React from "react";
import { useCopyToClipboard } from "usehooks-ts";

type CommandBlockProps = React.HTMLAttributes<HTMLDivElement> & {
  cmd: string;
  toastDescription?: string;
};

export function CommandBlock({
  cmd,
  toastDescription,
  ...rest
}: CommandBlockProps) {
  const [_, copy] = useCopyToClipboard();

  const handleCopy = () => {
    void copy(cmd);
    toast.success({
      description:
        toastDescription ?? "The command has been copied to your clipboard.",
      title: "Code Copied",
    });
  };

  return (
    <Row
      className={`
        w-full justify-between gap-1 rounded-md border border-border bg-muted
        p-3 text-sm
      `}
      {...rest}
    >
      <Row className="w-full items-center justify-between">
        <pre className="whitespace-break-spaces font-mono text-green-500">
          <code>{cmd}</code>
        </pre>
      </Row>
      <Col className="h-full items-start">
        <Tooltip content="Copy to clipboard">
          <Button
            className="flex-shrink-0"
            onClick={handleCopy}
            size="icon"
            variant="secondary"
          >
            <CopyIcon className="size-4" />
          </Button>
        </Tooltip>
      </Col>
    </Row>
  );
}



================================================
FILE: frontend/src/ui/components/custom/FakeH1.tsx
================================================
import { cn } from "~/ui/lib/utils";

// This className has custom CSS applied to it in our global stylesheet.
const FAKE_H1_CLASS_NAME = "fake-h1";

type FakeH1Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};

/**
 * This is an H2 tag which specific styling overrides to match our H1 tag
 * styles. This is to avoid rendering multiple H1 tags on a single page
 * (which is problematic for HTML semantics/SEO), while allowing us to
 * still have multiple heading titles which appear like H1s.
 */
export function FakeH1({ children, className, style }: FakeH1Props) {
  return (
    <h2 className={cn(FAKE_H1_CLASS_NAME, className)} style={style}>
      {children}
    </h2>
  );
}



================================================
FILE: frontend/src/ui/components/custom/FeatureCard.tsx
================================================
import { Card } from "~/ui/components/ui/Card";
import { cn } from "~/ui/lib/utils";

export type FeatureCard = {
  title: string;
  description: string;
  icon: string;
};

type FeatureCardProps = {
  card: FeatureCard;
  className?: string;
};

export function FeatureCard({ card, className }: FeatureCardProps) {
  return (
    <Card
      className={cn(
        `
          flex flex-col rounded-lg border p-6 transition-all

          hover:shadow-md
        `,
        className,
      )}
    >
      <div className="mb-5">
        <div
          className={`
            flex h-12 w-12 items-center justify-center rounded-full
            bg-card-foreground/10
          `}
        >
          <img
            alt={card.title}
            className={`
              invert

              dark:invert-0
            `}
            src={card.icon}
          />
        </div>
      </div>
      <h3 className="mb-3 font-semibold">{card.title}</h3>
      <p className="text-muted-foreground">{card.description}</p>
    </Card>
  );
}

export type FeatureCardsRowProps = {
  cards: FeatureCard[];
  className?: string;
};
export function FeatureCardsRow({ cards, className }: FeatureCardsRowProps) {
  return (
    <div
      className={cn(
        `
          grid grid-cols-1 gap-4

          md:grid-cols-3
        `,
        className,
      )}
    >
      {cards.map((card, index) => (
        <FeatureCard card={card} key={index} />
      ))}
    </div>
  );
}



================================================
FILE: frontend/src/ui/components/custom/GradientCard.tsx
================================================
export function GradientCard() {
  return (
    <div
      className={`
        pointer-events-none absolute inset-0 bg-gradient-to-br from-stone-500/5
        via-transparent to-slate-500/5
      `}
    />
  );
}



================================================
FILE: frontend/src/ui/components/custom/Grid.tsx
================================================
import { cn } from "~/ui/lib/utils";
import React from "react";

type GridProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cn("grid", className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

Grid.displayName = "Grid";



================================================
FILE: frontend/src/ui/components/custom/HeaderComponents.tsx
================================================
import { cn } from "~/ui/lib/utils";

type HeaderComponentProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeaderComponent({ children, className }: HeaderComponentProps) {
  return (
    <div
      className={cn(
        `
          fixed left-0 top-0 z-50 w-full border border-border bg-card
          backdrop-blur-sm transition-[top] duration-200 ease-in-out

          lg:left-1/2 lg:top-4 lg:w-[1024px] lg:-translate-x-1/2 lg:rounded-xl
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}

type HeaderHoverLinkContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function HeaderHoverLinkContainer({
  children,
  className,
}: HeaderHoverLinkContainerProps) {
  return (
    <div
      className={cn(
        `
          invisible absolute -left-6 top-full pt-2 opacity-0 transition-all
          duration-200

          group-hover:visible group-hover:opacity-100
        `,
        className,
      )}
    >
      {children}
    </div>
  );
}



================================================
FILE: frontend/src/ui/components/custom/HomePageBackdrop.tsx
================================================
import { useTheme } from "~/ui/providers/ThemeProvider";

export function HomePageBackdrop() {
  const { resolvedTheme: theme } = useTheme();

  if (theme !== "dark") {
    return null;
  }

  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: `
            radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 200, 255, 0.15), transparent),
            radial-gradient(ellipse 70% 40% at 80% 50%, rgba(120, 255, 180, 0.08), transparent),
            radial-gradient(ellipse 90% 60% at 20% 100%, rgba(100, 180, 255, 0.06), transparent),
            linear-gradient(180deg, 
              #0a0a0a 0%, 
              #0f0f11 20%, 
              #131316 50%, 
              #0a0a0c 100%)
          `,
      }}
    />
  );
}



================================================
FILE: frontend/src/ui/components/custom/InferenceIcon.tsx
================================================
const CLIP_PATH_ID = "inference-icon";

type InferenceIconProps = {
  height?: number | string;
  width?: number | string;
};

export default function InferenceIcon({ height, width }: InferenceIconProps) {
  return (
    <svg
      fill="none"
      height={height ?? 116}
      viewBox="0 0 880 116"
      width={width ?? 880}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${CLIP_PATH_ID})`}>
        <path
          d="M209.001 67.2804L161.875 2.466H135.667V113.515H163.341V47.6802L212.101 113.515H236.694V2.466H209.001V67.2804Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path
          d="M253.788 113.515H282.057V69.9346H320.348V46.2139H282.057V26.1867H321.832V2.466H253.788V113.515Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path
          d="M334.788 113.515H404.15V89.8133H363.075V68.5983H402.684V44.8961H363.075V26.1867H404.15V2.466H334.788V113.515Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path
          d="M499.738 38.1214C499.738 15.44 481.623 2.48456 455.266 2.48456H418.59V113.534H447.155V73.7582L477.502 113.534H512.267L476.927 69.4892C490.773 63.8838 499.757 52.9886 499.757 38.1214H499.738ZM455.118 52.2462H447.174V25.8898H455.118C464.695 25.8898 470.431 31.0497 470.431 38.9937C470.431 46.9378 464.695 52.2462 455.118 52.2462Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path
          d="M516.239 113.515H585.619V89.8133H544.525V68.5983H584.134V44.8961H544.525V26.1867H585.619V2.466H516.239V113.515Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path
          d="M673.393 67.2804L626.267 2.466H600.041V113.515H627.734V47.6802L676.474 113.515H701.086V2.466H673.393V67.2804Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path
          d="M712.557 58C712.557 89.5163 738.635 115.297 771.023 115.297C780.007 115.297 788.99 113.534 796.656 109.989V78.0271C791.347 83.7624 782.512 88.1985 771.617 88.1985C754.096 88.1985 741.419 75.3915 741.419 58C741.419 40.6085 754.077 27.8015 771.617 27.8015C782.512 27.8015 791.347 32.219 796.656 37.9729V6.0111C788.99 2.63302 780.007 0.702698 771.023 0.702698C738.616 0.702698 712.557 26.4837 712.557 58Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path
          d="M879.289 26.1867V2.466H809.927V113.515H879.289V89.8133H838.195V68.5983H877.822V44.8961H838.195V26.1867H879.289Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path
          d="M118.573 2.466H89.7107V113.515H118.573V2.466Z"
          className={`
            fill-black

            dark:fill-white
          `}
        />
        <path d="M75.029 2.466H54.5564V113.515H75.029V2.466Z" fill="#FF4405" />
        <path
          d="M40.8214 2.466H25.1189V113.515H40.8214V2.466Z"
          fill="#FAC515"
        />
        <path
          d="M11.9407 2.466H0.711426V113.515H11.9407V2.466Z"
          fill="#53B1FD"
        />
      </g>
      <defs>
        <clipPath id={CLIP_PATH_ID}>
          <rect
            className={`
              fill-white

              dark:fill-black
            `}
            height="114.595"
            transform="translate(0.711426 0.702698)"
            width="878.577"
          />
        </clipPath>
      </defs>
    </svg>
  );
}



================================================
FILE: frontend/src/ui/components/custom/JsonComponent.tsx
================================================
import JsonView from "@uiw/react-json-view";
import { lightTheme } from "@uiw/react-json-view/light";
import { vscodeTheme } from "@uiw/react-json-view/vscode";
import { useTheme } from "~/ui/providers/ThemeProvider";

type JsonComponentProps = {
  data: object | null | undefined;
};

export function JsonComponent({ data }: JsonComponentProps) {
  const { isDarkTheme } = useTheme();
  if (data == null) {
    return <p>No data present.</p>;
  }
  return (
    <JsonView style={isDarkTheme ? vscodeTheme : lightTheme} value={data} />
  );
}



================================================
FILE: frontend/src/ui/components/custom/LoadingScreen.tsx
================================================
import { Centered } from "~/ui/components/custom/Centered";
import { ScaleLoader } from "~/ui/components/ui/ScaleLoader";

export function LoadingScreen() {
  return (
    <Centered className="absolute left-0 top-0 h-full w-full bg-background">
      <ScaleLoader />
    </Centered>
  );
}



================================================
FILE: frontend/src/ui/components/custom/ResponsiveRow.tsx
================================================
import { Col } from "~/ui/components/custom/Col";
import { cn } from "~/ui/lib/utils";
import React from "react";

type ResponsiveRowProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const ResponsiveRow = React.forwardRef<
  HTMLDivElement,
  ResponsiveRowProps
>(({ children, className, ...rest }, ref) => {
  return (
    <Col
      className={cn(
        `
          flex items-start

          md:flex-row md:items-center
        `,
        className,
      )}
      ref={ref}
      {...rest}
    >
      {children}
    </Col>
  );
});



================================================
FILE: frontend/src/ui/components/custom/Row.tsx
================================================
import { cn } from "~/ui/lib/utils";
import React from "react";

type RowProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={cn("flex flex-row", className)} ref={ref} {...rest}>
        {children}
      </div>
    );
  },
);

Row.displayName = "Row";



================================================
FILE: frontend/src/ui/components/custom/ScoreBadge.tsx
================================================
import { CheckCircleIcon, SquareActivityIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import { Badge } from "../ui/Badge";

export type ScoreBadgeProps = {
  scorePercent: number | null | undefined;
  label?: string;
  showIcon?: boolean;
  className?: string;
};

export function ScoreBadge({
  scorePercent,
  label,
  showIcon = true,
  className,
}: ScoreBadgeProps) {
  if (scorePercent == null) {
    return (
      <Badge
        variant="outline"
        className={cn(
          "rounded-md border-border bg-secondary text-muted-foreground",
          className,
        )}
      >
        {showIcon && <SquareActivityIcon className="mr-1 h-4 w-4" />}
        N/A
      </Badge>
    );
  }

  const isPerfectScore = Math.floor(scorePercent) === 100;
  const isHighScore = scorePercent >= 95;
  const isMediumScore = scorePercent >= 50 && scorePercent < 80;
  const isLowScore = scorePercent < 50;
  const formattedScore = scorePercent.toFixed(2);

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-md border-border bg-secondary",
        isHighScore &&
          "border-detail-success bg-detail-success/10 text-detail-success",
        isMediumScore &&
          "border-detail-warning bg-detail-warning/10 text-detail-warning",
        isLowScore &&
          "border-detail-failure bg-detail-failure/10 text-detail-failure",
        className,
      )}
    >
      {showIcon &&
        (isPerfectScore ? (
          <CheckCircleIcon className="mr-1 h-4 w-4" />
        ) : (
          <SquareActivityIcon className="mr-1 h-4 w-4" />
        ))}
      {label
        ? `${label} ${isPerfectScore ? "100%" : `${formattedScore}%`}`
        : isPerfectScore
          ? "100%"
          : `${formattedScore}%`}
    </Badge>
  );
}



================================================
FILE: frontend/src/ui/components/custom/SearchInput.tsx
================================================
import { Row } from "~/ui/components/custom/Row";
import { Input } from "~/ui/components/ui/Input";
import { cn } from "~/ui/lib/utils";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";

type SearchInputProps = {
  className?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  debounceMs?: number;
};

export function SearchInput({
  className,
  debounceMs = 300,
  defaultValue = "",
  onChange,
  placeholder = "Search...",
}: SearchInputProps) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(value);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [value, onChange, debounceMs]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <Row className={cn("relative", className)}>
      <SearchIcon
        className={`
          absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2
          text-muted-foreground
        `}
      />
      <Input
        className="w-full pl-9 pr-4"
        onChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    </Row>
  );
}



================================================
FILE: frontend/src/ui/components/custom/SelectableCard.tsx
================================================
import { Label } from "~/ui/components/ui/Label";

type SelectableCardProps = {
  selected: boolean;
  title: string;
  description: string;
  recommended?: boolean;
  onClick: () => void;
};

export function SelectableCard({
  description,
  onClick,
  recommended = false,
  selected,
  title,
}: SelectableCardProps) {
  return (
    <div
      className={`
        cursor-pointer rounded-lg border p-4 transition-colors

        ${
          selected
            ? "border-detail-brand"
            : `
              border-card-border

              hover:border-card-border-hover
            `
        }
      `}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 flex items-center justify-center">
          <div
            className={`
              h-4 w-4 rounded-full border

              ${
                selected
                  ? "border-detail-brand bg-detail-brand"
                  : "border-card-border"
              }
            `}
          >
            {selected && (
              <div
                className={`h-full w-full scale-50 rounded-full bg-secondary`}
              />
            )}
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <Label className="text-base font-semibold">{title}</Label>
            {recommended && (
              <span
                className={`
                  rounded border border-detail-brand px-2 py-1 text-xs
                  font-medium text-detail-brand
                `}
              >
                RECOMMENDED
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}



================================================
FILE: frontend/src/ui/components/custom/StakingDashboardBanner.tsx
================================================
import { LINKS } from "~/lib/models";
import { cn } from "~/ui";
import { ExternalLink, TestTube2Icon } from "lucide-react";
import type { ClassNameValue } from "tailwind-merge";

function BannerContent() {
  const LINK_STYLES: ClassNameValue = cn(`
    ml-2 inline-flex items-center font-medium underline

    hover:cursor-pointer
  `);

  return (
    <div className="flex items-center justify-center text-base text-white">
      <p
        className={`
          text-center text-xs

          md:text-base
        `}
      >
        <TestTube2Icon className="mr-2 inline-block text-amber-400" size={18} />
        <span className="font-semibold">Inference Devnet:</span> This is a test
        network running on <span className="font-semibold">Solana Devnet</span>.
        No tokens have any financial value.
        <a
          className={LINK_STYLES}
          href={LINKS.INFERENCE_DEVNET_STAKING_PROTOCOL_DOCUMENTATION}
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn More
          <ExternalLink className="ml-1" size={16} />
        </a>
      </p>
    </div>
  );
}

export function StakingDashboardBanner() {
  return (
    <div
      className={`
        fixed z-50 w-full

        sm:relative
      `}
    >
      <div
        className={`
          w-full bg-gradient-to-r from-cyan-600 via-emerald-500 to-amber-500 p-3
        `}
      >
        <div
          className={`
            mx-auto flex max-w-7xl items-center justify-center px-4

            lg:px-8

            sm:px-6
          `}
        >
          <BannerContent />
        </div>
      </div>
    </div>
  );
}



================================================
FILE: frontend/src/ui/components/custom/ThemeToggle.tsx
================================================
import { Button } from "~/ui/components/ui/Button";
import { Separator } from "~/ui/components/ui/Separator";
import { useTheme } from "~/ui/providers/ThemeProvider";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/DropdownMenu";

type ThemeToggleProps = {
  trigger?: React.ReactNode;
};

export function ThemeToggle({ trigger }: ThemeToggleProps) {
  const { setTheme, theme } = useTheme();

  const themeLabel = theme
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {trigger ?? <Button variant="outline">{themeLabel}</Button>}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem onClick={() => setTheme("retro-light")}>
          Retro Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("retro-dark")}>
          Retro Dark
        </DropdownMenuItem>
        <Separator />
        <p
          className={`
            mb-1 ml-2 mt-2 hidden text-[10px] text-muted-foreground

            sm:block
          `}
        >
          Or press 't' to toggle
        </p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}



================================================
FILE: frontend/src/ui/components/custom/TooltipContentComponent.tsx
================================================
import { Col } from "~/ui/components/custom/Col";
import { cn } from "~/ui/lib/utils";
import type React from "react";

type TooltipContentComponentProps = {
  content: React.ReactNode | string[];
  title: React.ReactNode;
  className?: string;
};

export function TooltipContentComponent({
  className,
  content,
  title,
}: TooltipContentComponentProps) {
  return (
    <Col className={cn("w-[400px] gap-2 pb-1", className)}>
      <p className="font-semibold">{title}</p>
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <p className="text-sm text-muted-foreground" key={index}>
            {item}
          </p>
        ))
      ) : typeof content === "string" ? (
        <p className="text-sm text-muted-foreground">{content}</p>
      ) : (
        content
      )}
    </Col>
  );
}



================================================
FILE: frontend/src/ui/components/custom/WorkerLogsTerminal.tsx
================================================
import type { LogMessage } from "~/lib/models";
import { LogLevel } from "~/lib/models";
import { Col } from "~/ui/components/custom/Col";
import { Button } from "~/ui/components/ui/Button";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type WorkerLogsTerminalProps = {
  logs: LogMessage[];
};

const logLevelToReadable = (level: LogLevel) => {
  switch (level) {
    case LogLevel.Debug:
      return "DEBUG";
    case LogLevel.Info:
      return "INFO";
    case LogLevel.Warn:
      return "WARN";
    case LogLevel.Error:
      return "ERROR";
    case LogLevel.Fatal:
      return "FATAL";
  }
};

const logLevelToColor = (level: LogLevel) => {
  switch (level) {
    case LogLevel.Debug:
      return "text-gray-500";
    case LogLevel.Info:
      return "text-blue-500";
    case LogLevel.Warn:
      return "text-yellow-500";
    case LogLevel.Error:
      return "text-red-500";
    case LogLevel.Fatal:
      return "text-red-700";
  }
};

// Simple hash function similar to winstonLogger.ts
function simpleHash(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// Color palette using only confirmed available Tailwind colors
const HEADER_COLORS = [
  "text-green-600",
  "text-yellow-600",
  "text-purple-400",
  "text-blue-500",
  "text-green-400",
  "text-yellow-400",
  "text-teal-400",
  "text-yellow-300",
  "text-green-600",
];

// Get color for a header part based on hash
function getHeaderColor(part: string): string {
  const hash = simpleHash(part);
  const colorIndex = Math.abs(hash) % HEADER_COLORS.length;
  return HEADER_COLORS[colorIndex] ?? "text-white";
}

// Colorize header similar to buildColorizedHeader in winstonLogger.ts
function renderColorizedHeader(header: string) {
  // Remove brackets and colon from header to get the clean content
  const cleanHeader = header.replace(/^\[|\]:?$/g, "").trim();

  // If no actual content, don't render any brackets
  if (!cleanHeader) {
    return null;
  }

  // Split by pipe and colorize each part
  const nameParts = cleanHeader.split("|");

  return (
    <>
      <span className="text-white">[</span>
      {nameParts.map((part, index) => (
        <span key={index}>
          <span className={getHeaderColor(part.trim())}>{part.trim()}</span>
          {index < nameParts.length - 1 && (
            <span className="text-gray-400">|</span>
          )}
        </span>
      ))}
      <span className="text-white">]:</span>
    </>
  );
}

export function WorkerLogsTerminal({ logs }: WorkerLogsTerminalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    if (containerRef.current && autoScroll) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [logs, autoScroll]);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const { clientHeight, scrollHeight, scrollTop } = containerRef.current;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 10;

    setAutoScroll(isAtBottom);
    setShowScrollButton(!isAtBottom);
  };

  const scrollToBottom = () => {
    if (!containerRef.current) {
      return;
    }
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
    setAutoScroll(true);
    setShowScrollButton(false);
  };

  if (logs.length === 0) {
    return (
      <span className="font-jet-brains text-sm text-green-600">
        Starting...
      </span>
    );
  }

  return (
    <div className="relative h-full">
      <Col
        className="h-full overflow-y-auto"
        onScroll={handleScroll}
        ref={containerRef}
      >
        {logs.map((log, i) => {
          const headerElement = renderColorizedHeader(log.header);

          return (
            <span className="font-jet-brains text-sm" key={i}>
              {headerElement}
              {headerElement && <>&nbsp;</>}
              <span className="text-gray-500">{log.timestamp}</span>
              &nbsp;
              <span className={logLevelToColor(log.level)}>
                {logLevelToReadable(log.level)}
              </span>
              &nbsp;
              <span className="text-muted-foreground">{log.message}</span>
            </span>
          );
        })}
      </Col>
      {showScrollButton && (
        <Button
          className={`
            absolute bottom-4 right-4 opacity-80

            hover:opacity-100
          `}
          onClick={scrollToBottom}
          size="sm"
          variant="secondary"
        >
          <ArrowDown className="mr-1 h-4 w-4" />
          Scroll to Bottom
        </Button>
      )}
    </div>
  );
}



================================================
FILE: frontend/src/ui/components/ui/Accordion.tsx
================================================
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "~/ui/lib/utils";
import { ChevronDown } from "lucide-react";
import * as React from "react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    className={cn("border-b", className)}
    ref={ref}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    enableFocusStyle?: boolean;
  }
>(({ children, className, enableFocusStyle = false, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      aria-label={props["aria-label"] ?? "Accordion Trigger"}
      className={cn(
        `
          flex flex-1 items-center py-4 font-medium transition-all

          [&[data-state=open]>svg]:rotate-180
        `,
        className,
        !enableFocusStyle &&
          `
            focus-visible:ring-0 focus-visible:ring-transparent

            focus:outline-none focus:ring-0 focus:ring-transparent
            focus:ring-offset-0
          `,
      )}
      ref={ref}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          `ml-2 h-5 w-5 shrink-0 transition-transform duration-200`,
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <AccordionPrimitive.Content
    className={`
      overflow-hidden text-sm transition-all

      data-[state=closed]:animate-accordion-up

      data-[state=open]:animate-accordion-down
    `}
    ref={ref}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };



================================================
FILE: frontend/src/ui/components/ui/Alert.tsx
================================================
import { cn } from "~/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

const alertVariants = cva(
  `
    relative w-full rounded-lg border bg-card p-4

    [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground

    [&>svg+div]:translate-y-[-3px]

    [&>svg~*]:pl-7
  `,
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: "text-foreground",
        destructive: cn(`
          border-detail-failure/50 text-detail-failure

          [&>svg]:text-detail-failure

          dark:border-detail-failure
        `),
        info: cn(`
          border-detail-brand text-foreground

          dark:border-detail-brand
        `),
        warning: cn(`
          border-detail-warning text-detail-warning

          dark:border-detail-warning
        `),
      },
    },
  },
);

type AlertVariantProp = VariantProps<typeof alertVariants>["variant"];

const AlertBase = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    className={cn(alertVariants({ variant }), className)}
    ref={ref}
    role="alert"
    {...props}
  />
));
AlertBase.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    ref={ref}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      `
        text-sm

        [&_p]:leading-relaxed
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

type AlertProps = React.ComponentPropsWithoutRef<typeof AlertBase> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: AlertVariantProp;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ children, description, icon, title, variant, ...props }, ref) => {
    return (
      <AlertBase ref={ref} {...props} variant={variant}>
        {icon}
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
        {children}
      </AlertBase>
    );
  },
);
Alert.displayName = "Alert";

export { Alert, AlertTitle, AlertDescription };



================================================
FILE: frontend/src/ui/components/ui/AlertDialog.tsx
================================================
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import type { ButtonProps } from "~/ui/components/ui/Button";
import { buttonVariants } from "~/ui/components/ui/Button";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const AlertDialogRoot = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      `
        fixed inset-0 z-50 bg-black/80

        data-[state=closed]:animate-out data-[state=closed]:fade-out-0

        data-[state=open]:animate-in data-[state=open]:fade-in-0
      `,
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      className={cn(
        `
          fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg
          translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6
          shadow-lg duration-200

          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95
          data-[state=closed]:slide-out-to-left-1/2
          data-[state=closed]:slide-out-to-top-[48%]

          data-[state=open]:animate-in data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-left-1/2
          data-[state=open]:slide-in-from-top-[48%]

          sm:rounded-lg
        `,
        className,
      )}
      ref={ref}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      `
        flex flex-col space-y-2 text-center

        sm:text-left
      `,
      className,
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      `
        flex flex-col-reverse

        sm:flex-row sm:justify-end sm:space-x-2
      `,
      className,
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    className={cn("text-lg font-semibold", className)}
    ref={ref}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    className={cn("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action> & {
    variant?: ButtonProps["variant"];
  }
>(({ className, variant = "default", ...props }, ref) => (
  <AlertDialogPrimitive.Action
    className={cn(buttonVariants({ variant }), className)}
    ref={ref}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ComponentRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    className={cn(
      buttonVariants({ variant: "outline" }),
      `
        mt-2

        sm:mt-0
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialogRoot,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};



================================================
FILE: frontend/src/ui/components/ui/Avatar.tsx
================================================
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    className={cn("aspect-square h-full w-full", className)}
    ref={ref}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    className={cn(
      `
        flex h-full w-full items-center justify-center rounded-full border
        border-border bg-muted
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };



================================================
FILE: frontend/src/ui/components/ui/Badge.tsx
================================================
import { cn } from "~/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

const badgeVariants = cva(
  `
    inline-flex items-center rounded-full border px-3 py-1.5 text-xs
    font-semibold transition-colors

    focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
  `,
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        default: `
          border-transparent bg-primary text-primary-foreground

          hover:bg-primary/80
        `,
        destructive: `
          border-transparent bg-destructive text-destructive-foreground

          hover:bg-destructive/80
        `,
        failure: `
          border-transparent bg-detail-failure text-detail-failure-foreground

          hover:bg-detail-failure/80
        `,
        outline: "text-foreground",
        secondary: `
          border-transparent bg-secondary text-secondary-foreground

          hover:bg-secondary/80
        `,
        success: "border bg-background font-medium text-green-500",
      },
    },
  },
);

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof badgeVariants>;

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };



================================================
FILE: frontend/src/ui/components/ui/Breadcrumb.tsx
================================================
import { Slot } from "@radix-ui/react-slot";
import { cn } from "~/ui/lib/utils";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav aria-label="breadcrumb" ref={ref} {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    className={cn(
      `
        flex flex-wrap items-center gap-1.5 break-words text-sm
        text-muted-foreground

        sm:gap-2.5
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    className={cn("inline-flex items-center gap-1.5", className)}
    ref={ref}
    {...props}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      className={cn(
        `
          transition-colors

          hover:text-foreground
        `,
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span
    aria-current="page"
    aria-disabled="true"
    className={cn("font-normal text-foreground", className)}
    ref={ref}
    role="link"
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    role="presentation"
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    role="presentation"
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};



================================================
FILE: frontend/src/ui/components/ui/Button.tsx
================================================
import { Slot } from "@radix-ui/react-slot";
import { cn } from "~/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  `
    inline-flex items-center justify-center whitespace-nowrap rounded text-base
    ring-offset-background transition-colors

    disabled:cursor-not-allowed disabled:opacity-50

    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
    focus-visible:ring-offset-2
  `,
  {
    defaultVariants: {
      size: "default",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-10 px-4 py-2",
        icon: "h-10 w-10",
        "2xl": "h-16 rounded-md px-8",
        xl: "h-14 rounded-md px-6",
        lg: "h-12 rounded-md px-4",
        sm: "h-9 rounded-md px-3",
        xs: "h-8 rounded-md px-2 py-1 text-sm",
      },
      variant: {
        default: cn(`
          border border-primary-border bg-primary text-primary-foreground

          dark:border-primary-cta-border dark:bg-primary-cta
          dark:text-primary-cta-foreground dark:hover:bg-primary-cta-hover

          hover:bg-primary-hover
        `),
        primary: cn(`
          border border-primary-border bg-primary text-primary-foreground

          dark:border-primary-cta-border dark:bg-primary-cta
          dark:text-primary-cta-foreground dark:hover:bg-primary-cta-hover

          hover:bg-primary-hover
        `),
        destructive: cn(`
          border border-destructive-border bg-destructive
          text-destructive-foreground

          focus:ring-1 focus:ring-ring focus:ring-offset-1

          hover:bg-destructive-hover
        `),
        ghost: cn(`
          focus:ring-1 focus:ring-ring focus:ring-offset-1

          hover:bg-muted/90 hover:text-foreground
        `),
        link: cn(`
          text-md font-normal text-link underline-offset-4

          hover:text-link-hover hover:underline
        `),
        outline: cn(`
          border border-border bg-background-muted

          hover:bg-accent
        `),
        plainLink: cn(`
          text-foreground underline-offset-4

          hover:text-foreground hover:underline
        `),
        secondary: cn(`
          border border-secondary-border bg-secondary text-secondary-foreground

          focus:ring-1 focus:ring-ring focus:ring-offset-1

          hover:bg-secondary-hover
        `),
        tertiary: cn(`
          bg-tertiary border border-tertiary-border text-tertiary-foreground

          focus:ring-1 focus:ring-ring focus:ring-offset-1

          hover:bg-tertiary-hover
        `),
      },
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    enableFocusStyle?: boolean;
    loading?: boolean;
  };

export type ButtonVariantProp = VariantProps<typeof buttonVariants>["variant"];

export type ButtonSizeProp = VariantProps<typeof buttonVariants>["size"];

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      className,
      disabled,
      enableFocusStyle = false,
      loading,
      size,
      variant,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ className, size, variant }),
          !enableFocusStyle &&
            `
              focus-visible:ring-0 focus-visible:ring-transparent

              focus:outline-none focus:ring-0 focus:ring-transparent
              focus:ring-offset-0
            `,
        )}
        disabled={disabled ?? loading}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };



================================================
FILE: frontend/src/ui/components/ui/Calendar.tsx
================================================
import { buttonVariants } from "~/ui/components/ui/Button";
import { cn } from "~/ui/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      className={cn("p-3", className)}
      classNames={{
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          `
            h-9 w-9 p-0 font-normal

            aria-selected:opacity-100
          `,
        ),
        day_disabled: "text-muted-foreground opacity-50",
        day_hidden: "invisible",
        day_outside:
          "day-outside text-muted-foreground aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
        day_range_end: "day-range-end",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        head_row: "flex",
        month: "space-y-4",
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          `
            h-7 w-7 bg-transparent p-0 opacity-50

            hover:opacity-100
          `,
        ),
        nav_button_next: "absolute right-1",
        nav_button_previous: "absolute left-1",
        row: "flex w-full mt-2",
        table: "w-full border-collapse space-y-1",
        ...classNames,
      }}
      components={{
        // @ts-expect-error - Types are wrong?
        IconLeft: ({ className, ...props }: { className: string }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }: { className: string }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };



================================================
FILE: frontend/src/ui/components/ui/Card.tsx
================================================
import { Button } from "~/ui/components/ui/Button";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    ref={ref}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4 className={cn(className)} ref={ref} {...props} />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("p-6 pt-0", className)} ref={ref} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={cn("flex items-center p-6 pt-0", className)}
    ref={ref}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

type CardProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  primaryButton?: {
    label: string;
    onClick: () => void;
  };
  secondaryButton?: {
    label: string;
    onClick: () => void;
  };
};

type CombinedCardProps = CardProps &
  Omit<React.ComponentPropsWithoutRef<typeof Card>, keyof CardProps>;

const CardComponent = React.forwardRef<HTMLDivElement, CombinedCardProps>(
  (
    {
      children,
      className,
      description,
      primaryButton,
      secondaryButton,
      title,
      ...props
    },
    ref,
  ) => {
    return (
      <Card className={cn(className)} ref={ref} {...props}>
        {(title ?? description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        {children && <CardContent>{children}</CardContent>}
        {(primaryButton ?? secondaryButton) && (
          <CardFooter className="flex justify-between">
            {secondaryButton && (
              <Button onClick={secondaryButton.onClick} variant={"outline"}>
                {secondaryButton.label}
              </Button>
            )}
            {primaryButton && (
              <Button onClick={primaryButton.onClick} variant={"default"}>
                {primaryButton.label}
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    );
  },
);
CardComponent.displayName = "Card";

export {
  Card,
  CardComponent,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};



================================================
FILE: frontend/src/ui/components/ui/Chart.tsx
================================================
import { useBreakpoints } from "~/ui/hooks/useBreakpoints.hook";
import { cn } from "~/ui/lib/utils";
import * as React from "react";
import * as RechartsPrimitive from "recharts";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { dark: ".dark", light: "" } as const;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
    | { color?: string; theme?: never }
  )
>;

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"];
  }
>(({ children, className, config, id, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn(
          `
            flex aspect-video justify-center text-xs

            [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground

            [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50

            [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border

            [&_.recharts-dot[stroke='#fff']]:stroke-transparent

            [&_.recharts-layer]:outline-none

            [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border

            [&_.recharts-radial-bar-background-sector]:fill-muted

            [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted

            [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border

            [&_.recharts-sector[stroke='#fff']]:stroke-transparent

            [&_.recharts-sector]:outline-none

            [&_.recharts-surface]:outline-none
          `,
          className,
        )}
        data-chart={chartId}
        ref={ref}
        {...props}
      >
        <ChartStyle config={config} id={chartId} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ config, id }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme ?? config.color,
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ??
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    React.ComponentProps<typeof RechartsPrimitive.Tooltip> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "dashed" | "dot" | "line";
      nameKey?: string;
      labelKey?: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      valueFormatter?: (value: any) => string;
    }
>(
  (
    {
      active,
      className,
      color,
      formatter,
      hideIndicator = false,
      hideLabel = false,
      indicator = "dot",
      label,
      labelClassName,
      labelFormatter,
      labelKey,
      nameKey,
      payload,
      valueFormatter,
    },
    ref,
  ) => {
    const { config } = useChart();
    const { isMobile } = useBreakpoints();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey ?? item.dataKey ?? item.name ?? "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? (config[label].label ?? label)
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {labelFormatter(value, payload)}
          </div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [
      label,
      labelFormatter,
      payload,
      hideLabel,
      labelClassName,
      config,
      labelKey,
    ]);

    if (isMobile) {
      return null;
    }

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        className={cn(
          `
            grid min-w-[8rem] items-start gap-1.5 rounded-lg border
            border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl
          `,
          className,
        )}
        ref={ref}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            const indicatorColor =
              color ?? (item.payload.fill as string | undefined) ?? item.color;

            return (
              <div
                className={cn(
                  `
                    flex w-full flex-wrap items-stretch gap-2

                    [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground
                  `,
                  indicator === "dot" && "items-center",
                )}
                key={item.dataKey}
              >
                {formatter && item.value !== undefined && item.name ? (
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                  formatter(item.value, item.name, item, index, item.payload)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            `
                              shrink-0 rounded-[2px] border-[--color-border]
                              bg-[--color-bg]
                            `,
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "my-0.5": nestLabel && indicator === "dashed",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "w-1": indicator === "line",
                            },
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between gap-2 leading-none",
                        nestLabel ? "items-end" : "items-center",
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label ?? item.name}
                        </span>
                      </div>
                      {item.value && (
                        <span
                          className={cn(`
                            font-mono font-medium tabular-nums text-foreground
                          `)}
                        >
                          {valueFormatter
                            ? valueFormatter(item.value)
                            : item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> &
    React.ComponentProps<"div"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(
  (
    { className, hideIcon = false, nameKey, payload, verticalAlign = "bottom" },
    ref,
  ) => {
    const { config } = useChart();

    if (!payload?.length) {
      return null;
    }

    return (
      <div
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className,
        )}
        ref={ref}
      >
        {payload.map((item) => {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          const key = `${nameKey ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              className={cn(
                `
                  flex items-center gap-1.5

                  [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground
                `,
              )}
              key={item.value as string}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  },
);
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};



================================================
FILE: frontend/src/ui/components/ui/Checkbox.tsx
================================================
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "~/ui/lib/utils";
import { Check } from "lucide-react";
import * as React from "react";

const CheckboxBase = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    className={cn(
      `
        peer h-4 w-4 shrink-0 rounded-sm border border-primary-cta
        ring-offset-background

        data-[state=checked]:bg-secondary
        data-[state=checked]:text-bg-background

        disabled:cursor-not-allowed disabled:opacity-50

        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2
      `,
      className,
    )}
    ref={ref}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
CheckboxBase.displayName = CheckboxPrimitive.Root.displayName;

type CheckboxProps = React.ComponentPropsWithoutRef<typeof CheckboxBase> & {
  label?: React.ReactNode;
  labelClassName?: string;
};

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxBase>,
  CheckboxProps
>(({ className, id, label, labelClassName, ...props }, ref) => {
  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <CheckboxBase id={id} ref={ref} {...props} />
      {label && (
        <label
          className={cn(
            `
              whitespace-nowrap text-sm font-medium leading-none

              peer-disabled:cursor-not-allowed peer-disabled:opacity-70
            `,
            labelClassName,
          )}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };



================================================
FILE: frontend/src/ui/components/ui/DateTimePicker.tsx
================================================
import { Button, buttonVariants } from "~/ui/components/ui/Button";
import type { CalendarProps } from "~/ui/components/ui/Calendar";
import { Input } from "~/ui/components/ui/Input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/ui/components/ui/Popover";
import { Select, SelectTrigger, SelectValue } from "~/ui/components/ui/Select";
import { cn } from "~/ui/lib/utils";
import { add, format } from "date-fns";
import type { Locale } from "date-fns/locale";
import { enUS } from "date-fns/locale";
import {
  Calendar as CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import * as React from "react";
import { useImperativeHandle, useRef } from "react";
import { DayPicker } from "react-day-picker";

/** ******************************************************************************
 * NOTE: This DateTimePicker component is lifted from https://shadcnui-expansions.typeart.cc/docs/datetime-picker
 * and modified to fit our needs. It's built on top of our ShadCN component foundation.
 ******************************************************************************* */

/**
 * regular expression to check for valid hour format (01-23)
 */
function isValidHour(value: string) {
  return /^(0[0-9]|1[0-9]|2[0-3])$/.test(value);
}

/**
 * regular expression to check for valid 12 hour format (01-12)
 */
function isValid12Hour(value: string) {
  return /^(0[1-9]|1[0-2])$/.test(value);
}

/**
 * regular expression to check for valid minute format (00-59)
 */
function isValidMinuteOrSecond(value: string) {
  return /^[0-5][0-9]$/.test(value);
}

type GetValidNumberConfig = { max: number; min?: number; loop?: boolean };

function getValidNumber(
  value: string,
  { loop = false, max, min = 0 }: GetValidNumberConfig,
) {
  let numericValue = parseInt(value, 10);

  if (!Number.isNaN(numericValue)) {
    if (!loop) {
      if (numericValue > max) numericValue = max;
      if (numericValue < min) numericValue = min;
    } else {
      if (numericValue > max) numericValue = min;
      if (numericValue < min) numericValue = max;
    }
    return numericValue.toString().padStart(2, "0");
  }

  return "00";
}

function getValidHour(value: string) {
  if (isValidHour(value)) return value;
  return getValidNumber(value, { max: 23 });
}

function getValid12Hour(value: string) {
  if (isValid12Hour(value)) return value;
  return getValidNumber(value, { max: 12, min: 1 });
}

function getValidMinuteOrSecond(value: string) {
  if (isValidMinuteOrSecond(value)) return value;
  return getValidNumber(value, { max: 59 });
}

type GetValidArrowNumberConfig = {
  min: number;
  max: number;
  step: number;
};

function getValidArrowNumber(
  value: string,
  { max, min, step }: GetValidArrowNumberConfig,
) {
  let numericValue = parseInt(value, 10);
  if (!Number.isNaN(numericValue)) {
    numericValue += step;
    return getValidNumber(String(numericValue), { loop: true, max, min });
  }
  return "00";
}

function getValidArrowHour(value: string, step: number) {
  return getValidArrowNumber(value, { max: 23, min: 0, step });
}

function getValidArrow12Hour(value: string, step: number) {
  return getValidArrowNumber(value, { max: 12, min: 1, step });
}

function getValidArrowMinuteOrSecond(value: string, step: number) {
  return getValidArrowNumber(value, { max: 59, min: 0, step });
}

function setMinutes(date: Date, value: string) {
  const minutes = getValidMinuteOrSecond(value);
  date.setMinutes(parseInt(minutes, 10));
  return date;
}

function setSeconds(date: Date, value: string) {
  const seconds = getValidMinuteOrSecond(value);
  date.setSeconds(parseInt(seconds, 10));
  return date;
}

function setHours(date: Date, value: string) {
  const hours = getValidHour(value);
  date.setHours(parseInt(hours, 10));
  return date;
}

function set12Hours(date: Date, value: string, period: Period) {
  const hours = parseInt(getValid12Hour(value), 10);
  const convertedHours = convert12HourTo24Hour(hours, period);
  date.setHours(convertedHours);
  return date;
}

type TimePickerType = "minutes" | "seconds" | "hours" | "12hours";
type Period = "AM" | "PM";

function setDateByType(
  date: Date,
  value: string,
  type: TimePickerType,
  period?: Period,
) {
  switch (type) {
    case "minutes":
      return setMinutes(date, value);
    case "seconds":
      return setSeconds(date, value);
    case "hours":
      return setHours(date, value);
    case "12hours": {
      if (!period) return date;
      return set12Hours(date, value, period);
    }
    default:
      return date;
  }
}

function getDateByType(date: Date | null, type: TimePickerType) {
  if (!date) return "00";
  switch (type) {
    case "minutes":
      return getValidMinuteOrSecond(String(date.getMinutes()));
    case "seconds":
      return getValidMinuteOrSecond(String(date.getSeconds()));
    case "hours":
      return getValidHour(String(date.getHours()));
    case "12hours":
      return getValid12Hour(String(display12HourValue(date.getHours())));
    default:
      return "00";
  }
}

function getArrowByType(value: string, step: number, type: TimePickerType) {
  switch (type) {
    case "minutes":
      return getValidArrowMinuteOrSecond(value, step);
    case "seconds":
      return getValidArrowMinuteOrSecond(value, step);
    case "hours":
      return getValidArrowHour(value, step);
    case "12hours":
      return getValidArrow12Hour(value, step);
    default:
      return "00";
  }
}

/**
 * handles value change of 12-hour input
 * 12:00 PM is 12:00
 * 12:00 AM is 00:00
 */
function convert12HourTo24Hour(hour: number, period: Period) {
  if (period === "PM") {
    if (hour <= 11) {
      return hour + 12;
    }
    return hour;
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (period === "AM") {
    if (hour === 12) return 0;
    return hour;
  }
  return hour;
}

/**
 * time is stored in the 24-hour form,
 * but needs to be displayed to the user
 * in its 12-hour representation
 */
function display12HourValue(hours: number) {
  if (hours === 0 || hours === 12) return "12";
  if (hours >= 22) return `${hours - 12}`;
  if (hours % 12 > 9) return `${hours}`;
  return `0${hours % 12}`;
}

function genMonths(
  locale: Pick<Locale, "options" | "localize" | "formatLong">,
) {
  return Array.from({ length: 12 }, (_, i) => ({
    label: format(new Date(2021, i), "MMMM", { locale }),
    value: i,
  }));
}

function genYears(yearRange = 50) {
  const today = new Date();
  return Array.from({ length: yearRange * 2 + 1 }, (_, i) => ({
    label: (today.getFullYear() - yearRange + i).toString(),
    value: today.getFullYear() - yearRange + i,
  }));
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  yearRange = 50,
  ...props
}: CalendarProps & { yearRange?: number }) {
  const MONTHS = React.useMemo(() => {
    let locale: Pick<Locale, "options" | "localize" | "formatLong"> = enUS;
    const { formatLong, localize, options } = props.locale ?? {};
    if (options && localize && formatLong) {
      locale = {
        formatLong,
        localize,
        options,
      };
    }
    return genMonths(locale);
  }, [props.locale]);

  const YEARS = React.useMemo(() => genYears(yearRange), [yearRange]);
  const disableLeftNavigation = () => {
    const today = new Date();
    const startDate = new Date(today.getFullYear() - yearRange, 0, 1);
    if (props.month) {
      return (
        props.month.getMonth() === startDate.getMonth() &&
        props.month.getFullYear() === startDate.getFullYear()
      );
    }
    return false;
  };
  const disableRightNavigation = () => {
    const today = new Date();
    const endDate = new Date(today.getFullYear() + yearRange, 11, 31);
    if (props.month) {
      return (
        props.month.getMonth() === endDate.getMonth() &&
        props.month.getFullYear() === endDate.getFullYear()
      );
    }
    return false;
  };

  return (
    <DayPicker
      className={cn("p-3", className)}
      classNames={{
        button_next: cn(
          buttonVariants({ variant: "outline" }),
          `
            absolute right-4 top-5 h-7 w-7 bg-transparent p-0 opacity-50

            hover:opacity-100
          `,
          disableRightNavigation() && "pointer-events-none",
        ),
        button_previous: cn(
          buttonVariants({ variant: "outline" }),
          `
            absolute left-4 top-5 h-7 w-7 bg-transparent p-0 opacity-50

            hover:opacity-100
          `,
          disableLeftNavigation() && "pointer-events-none",
        ),
        caption_label: "text-sm font-medium",
        day: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20 rounded-1",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          `
            h-9 w-9 rounded-l-md rounded-r-md p-0 font-normal

            aria-selected:opacity-100
          `,
        ),
        disabled: "text-muted-foreground opacity-50",
        hidden: "invisible",
        month: "flex flex-col items-center space-y-4",
        month_caption: "flex justify-center pt-1 relative items-center",
        month_grid: "w-full border-collapse space-y-1",
        months:
          "flex flex-col sm:flex-row space-y-4  sm:space-y-0 justify-center",
        nav: "space-x-1 flex items-center ",
        outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        range_end: "day-range-end",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground rounded-l-md rounded-r-md",
        today: "bg-accent text-accent-foreground",
        week: "flex w-full mt-2",
        weekday:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",
        weekdays: cn("flex", props.showWeekNumber && "justify-end"),
        ...classNames,
      }}
      components={{
        Chevron: ({ ...props }) =>
          props.orientation === "left" ? (
            <ChevronLeftIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          ),
        MonthCaption: ({ calendarMonth }) => {
          return (
            <div className="inline-flex gap-2">
              <Select
                defaultValue={calendarMonth.date.getMonth().toString()}
                onValueChange={(value) => {
                  const newDate = new Date(calendarMonth.date);
                  newDate.setMonth(Number.parseInt(value, 10));
                  props.onMonthChange?.(newDate);
                }}
                options={MONTHS.map((month) => ({
                  label: month.label,
                  value: month.value.toString(),
                }))}
              >
                <SelectTrigger
                  className={`
                    w-fit gap-12 border-none p-0

                    focus:bg-accent focus:text-accent-foreground
                  `}
                >
                  <SelectValue />
                </SelectTrigger>
              </Select>
              <Select
                defaultValue={calendarMonth.date.getFullYear().toString()}
                onValueChange={(value) => {
                  const newDate = new Date(calendarMonth.date);
                  newDate.setFullYear(Number.parseInt(value, 10));
                  props.onMonthChange?.(newDate);
                }}
                options={YEARS.map((year) => ({
                  label: year.label,
                  value: year.value.toString(),
                }))}
              >
                <SelectTrigger
                  className={`
                    w-fit gap-2 border-none p-0

                    focus:bg-accent focus:text-accent-foreground
                  `}
                >
                  <SelectValue />
                </SelectTrigger>
              </Select>
            </div>
          );
        },
      }}
      showOutsideDays={showOutsideDays}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

type PeriodSelectorProps = {
  period: Period;
  setPeriod?: (m: Period) => void;
  date?: Date | null;
  onDateChange?: (date: Date | undefined) => void;
  onRightFocus?: () => void;
  onLeftFocus?: () => void;
};

const TimePeriodSelect = React.forwardRef<
  HTMLButtonElement,
  PeriodSelectorProps
>(
  (
    { date, onDateChange, onLeftFocus, onRightFocus, period, setPeriod },
    ref,
  ) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === "ArrowRight") onRightFocus?.();
      if (e.key === "ArrowLeft") onLeftFocus?.();
    };

    const handleValueChange = (value: Period) => {
      setPeriod?.(value);

      /**
       * trigger an update whenever the user switches between AM and PM;
       * otherwise user must manually change the hour each time
       */
      if (date) {
        const tempDate = new Date(date);
        const hours = display12HourValue(date.getHours());
        onDateChange?.(
          setDateByType(
            tempDate,
            hours.toString(),
            "12hours",
            period === "AM" ? "PM" : "AM",
          ),
        );
      }
    };

    return (
      <div className="flex h-10 items-center">
        <Select
          defaultValue={period}
          onValueChange={(value: Period) => handleValueChange(value)}
          options={["AM", "PM"].map((period) => ({
            label: period,
            value: period,
          }))}
        >
          <SelectTrigger
            className={`
              w-[65px]

              focus:bg-accent focus:text-accent-foreground
            `}
            onKeyDown={handleKeyDown}
            ref={ref}
          >
            <SelectValue />
          </SelectTrigger>
        </Select>
      </div>
    );
  },
);

TimePeriodSelect.displayName = "TimePeriodSelect";

type TimePickerInputProps = {
  picker: TimePickerType;
  date?: Date | null;
  onDateChange?: (date: Date | undefined) => void;
  period?: Period;
  onRightFocus?: () => void;
  onLeftFocus?: () => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TimePickerInput = React.forwardRef<
  HTMLInputElement,
  TimePickerInputProps
>(
  (
    {
      className,
      date = new Date(new Date().setHours(0, 0, 0, 0)),
      id,
      name,
      onChange,
      onDateChange,
      onKeyDown,
      onLeftFocus,
      onRightFocus,
      period,
      picker,
      type = "tel",
      value,
      ...props
    },
    ref,
  ) => {
    const [flag, setFlag] = React.useState<boolean>(false);
    const [prevIntKey, setPrevIntKey] = React.useState<string>("0");

    /**
     * allow the user to enter the second digit within 2 seconds
     * otherwise start again with entering first digit
     */
    React.useEffect(() => {
      if (flag) {
        const timer = setTimeout(() => {
          setFlag(false);
        }, 2000);

        return () => clearTimeout(timer);
      }
    }, [flag]);

    const calculatedValue = React.useMemo(() => {
      return getDateByType(date, picker);
    }, [date, picker]);

    const calculateNewValue = (key: string) => {
      /*
       * If picker is '12hours' and the first digit is 0, then the second digit is automatically set to 1.
       * The second entered digit will break the condition and the value will be set to 10-12.
       */
      if (picker === "12hours") {
        if (flag && calculatedValue.slice(1, 2) === "1" && prevIntKey === "0")
          return `0${key}`;
      }

      return !flag ? `0${key}` : calculatedValue.slice(1, 2) + key;
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab") return;
      e.preventDefault();
      if (e.key === "ArrowRight") onRightFocus?.();
      if (e.key === "ArrowLeft") onLeftFocus?.();
      if (["ArrowUp", "ArrowDown"].includes(e.key)) {
        const step = e.key === "ArrowUp" ? 1 : -1;
        const newValue = getArrowByType(calculatedValue, step, picker);
        if (flag) setFlag(false);
        const tempDate = date ? new Date(date) : new Date();
        onDateChange?.(setDateByType(tempDate, newValue, picker, period));
      }
      if (e.key >= "0" && e.key <= "9") {
        if (picker === "12hours") setPrevIntKey(e.key);

        const newValue = calculateNewValue(e.key);
        if (flag) onRightFocus?.();
        setFlag((prev) => !prev);
        const tempDate = date ? new Date(date) : new Date();
        onDateChange?.(setDateByType(tempDate, newValue, picker, period));
      }
    };

    return (
      <Input
        className={cn(
          `
            w-[48px] text-center font-mono text-base tabular-nums
            caret-transparent

            [&::-webkit-inner-spin-button]:appearance-none

            focus:bg-accent focus:text-accent-foreground
          `,
          className,
        )}
        id={id ?? picker}
        inputMode="decimal"
        name={name ?? picker}
        onChange={(e) => {
          e.preventDefault();
          onChange?.(e);
        }}
        onKeyDown={(e) => {
          onKeyDown?.(e);
          handleKeyDown(e);
        }}
        ref={ref}
        type={type}
        value={value ?? calculatedValue}
        {...props}
      />
    );
  },
);

TimePickerInput.displayName = "TimePickerInput";

type TimePickerProps = {
  date?: Date | null;
  onChange?: (date: Date | undefined) => void;
  hourCycle?: 12 | 24;
  /**
   * Determines the smallest unit that is displayed in the datetime picker.
   * Default is 'second'.
   * */
  granularity?: Granularity;
};

type TimePickerRef = {
  minuteRef: HTMLInputElement | null;
  hourRef: HTMLInputElement | null;
  secondRef: HTMLInputElement | null;
};

const TimePicker = React.forwardRef<TimePickerRef, TimePickerProps>(
  ({ date, granularity = "second", hourCycle = 24, onChange }, ref) => {
    const minuteRef = React.useRef<HTMLInputElement>(null);
    const hourRef = React.useRef<HTMLInputElement>(null);
    const secondRef = React.useRef<HTMLInputElement>(null);
    const periodRef = React.useRef<HTMLButtonElement>(null);
    const [period, setPeriod] = React.useState<Period>(
      date && date.getHours() >= 12 ? "PM" : "AM",
    );

    useImperativeHandle(
      ref,
      () => ({
        hourRef: hourRef.current,
        minuteRef: minuteRef.current,
        periodRef: periodRef.current,
        secondRef: secondRef.current,
      }),
      [minuteRef, hourRef, secondRef],
    );
    return (
      <div className="flex items-center justify-center gap-2">
        {/* <label className="cursor-pointer" htmlFor="datetime-picker-hour-input">
          <Clock className="mr-2 h-4 w-4" />
        </label> */}
        <TimePickerInput
          date={date}
          id="datetime-picker-hour-input"
          onDateChange={onChange}
          onRightFocus={() => minuteRef.current?.focus()}
          period={period}
          picker={hourCycle === 24 ? "hours" : "12hours"}
          ref={hourRef}
        />
        {(granularity === "minute" || granularity === "second") && (
          <>
            :
            <TimePickerInput
              date={date}
              onDateChange={onChange}
              onLeftFocus={() => hourRef.current?.focus()}
              onRightFocus={() => secondRef.current?.focus()}
              picker="minutes"
              ref={minuteRef}
            />
          </>
        )}
        {granularity === "second" && (
          <>
            :
            <TimePickerInput
              date={date}
              onDateChange={onChange}
              onLeftFocus={() => minuteRef.current?.focus()}
              onRightFocus={() => periodRef.current?.focus()}
              picker="seconds"
              ref={secondRef}
            />
          </>
        )}
        {hourCycle === 12 && (
          <div className="grid gap-1 text-center">
            <TimePeriodSelect
              date={date}
              onDateChange={(date) => {
                onChange?.(date);
                if (date && date.getHours() >= 12) {
                  setPeriod("PM");
                } else {
                  setPeriod("AM");
                }
              }}
              onLeftFocus={() => secondRef.current?.focus()}
              period={period}
              ref={periodRef}
              setPeriod={setPeriod}
            />
          </div>
        )}
      </div>
    );
  },
);
TimePicker.displayName = "TimePicker";

type Granularity = "day" | "hour" | "minute" | "second";

type DateTimePickerProps = {
  value?: Date;
  onChange: (date: Date | undefined) => void;
  onMonthChange?: (date: Date | undefined) => void;
  disabled?: boolean;
  /** showing `AM/PM` or not. */
  hourCycle?: 12 | 24;
  placeholder?: string;
  /**
   * The year range will be: `This year + yearRange` and `this year - yearRange`.
   * Default is 50.
   * For example:
   * This year is 2024, The year dropdown will be 1974 to 2024 which is generated by `2024 - 50 = 1974` and `2024 + 50 = 2074`.
   * */
  yearRange?: number;
  /**
   * The format is derived from the `date-fns` documentation.
   * @reference https://date-fns.org/v3.6.0/docs/format
   **/
  displayFormat?: { hour24?: string; hour12?: string };
  /**
   * The granularity prop allows you to control the smallest unit that is displayed by DateTimePicker.
   * By default, the value is `second` which shows all time inputs.
   **/
  granularity?: Granularity;
  className?: string;
  /**
   * Show the default month and time when popup the calendar. Default is the current Date().
   **/
  defaultPopupValue?: Date;
} & Pick<
  CalendarProps,
  "locale" | "weekStartsOn" | "showWeekNumber" | "showOutsideDays"
>;

type DateTimePickerRef = {
  value?: Date;
} & Omit<HTMLButtonElement, "value">;

const DateTimePicker = React.forwardRef<
  Partial<DateTimePickerRef>,
  DateTimePickerProps
>(
  (
    {
      className,
      defaultPopupValue = new Date(new Date().setHours(0, 0, 0, 0)),
      disabled = false,
      displayFormat,
      granularity = "second",
      hourCycle = 12,
      locale = enUS,
      onChange,
      onMonthChange,
      placeholder = "Pick a date",
      value,
      yearRange = 50,
      ...props
    },
    ref,
  ) => {
    const [month, setMonth] = React.useState<Date>(value ?? defaultPopupValue);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const displayDate = value;
    const setDisplayDate = onChange;
    onMonthChange ??= onChange;
    /**
     * carry over the current time when a user clicks a new day
     * instead of resetting to 00:00
     */
    const handleMonthChange = (newDay: Date | undefined) => {
      if (!newDay) {
        return;
      }
      const diff = newDay.getTime() - defaultPopupValue.getTime();
      const diffInDays = diff / (1000 * 60 * 60 * 24);
      const newDateFull = add(defaultPopupValue, {
        days: Math.ceil(diffInDays),
      });
      newDateFull.setHours(
        month.getHours(),
        month.getMinutes(),
        month.getSeconds(),
      );
      onMonthChange(newDateFull);
      setMonth(newDateFull);
    };

    const onSelect = (newDay?: Date) => {
      if (!newDay) {
        return;
      }
      onChange(newDay);
      setMonth(newDay);
      setDisplayDate(newDay);
    };

    useImperativeHandle(
      ref,
      () => ({
        ...buttonRef.current,
        value: displayDate,
      }),
      [displayDate],
    );

    const initHourFormat = {
      hour12:
        displayFormat?.hour12 ??
        `PP hh:mm${granularity === "second" ? ":ss" : ""} b`,
      hour24:
        displayFormat?.hour24 ??
        `PPP HH:mm${granularity === "second" ? ":ss" : ""}`,
    };

    let loc = enUS;
    const { formatLong, localize, options } = locale;
    if (options && localize && formatLong) {
      loc = {
        ...enUS,
        formatLong,
        localize,
        options,
      };
    }

    return (
      <Popover>
        <PopoverTrigger asChild disabled={disabled}>
          <Button
            className={cn(
              "w-full justify-start text-left font-normal",
              !displayDate && "text-muted-foreground",
              className,
            )}
            ref={buttonRef}
            variant="outline"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {displayDate ? (
              format(
                displayDate,
                hourCycle === 24
                  ? initHourFormat.hour24
                  : initHourFormat.hour12,
                {
                  locale: loc,
                },
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 p-0">
          <Calendar
            locale={locale}
            mode="single"
            month={month}
            onMonthChange={handleMonthChange}
            onSelect={(newDate) => {
              if (newDate) {
                newDate.setHours(
                  month.getHours(),
                  month.getMinutes(),
                  month.getSeconds(),
                );
                onSelect(newDate);
              }
            }}
            selected={displayDate}
            yearRange={yearRange}
            {...props}
          />
          {granularity !== "day" && (
            <div className="border-t border-border p-3">
              <TimePicker
                date={month}
                granularity={granularity}
                hourCycle={hourCycle}
                onChange={(value) => {
                  onChange(value);
                  setDisplayDate(value);
                  if (value) {
                    setMonth(value);
                  }
                }}
              />
            </div>
          )}
        </PopoverContent>
      </Popover>
    );
  },
);

DateTimePicker.displayName = "DateTimePicker";

export { DateTimePicker, TimePickerInput, TimePicker };
export type { TimePickerType, DateTimePickerProps, DateTimePickerRef };



================================================
FILE: frontend/src/ui/components/ui/Dialog.tsx
================================================
import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ButtonVariantProp } from "~/ui/components/ui/Button";
import { Button } from "~/ui/components/ui/Button";
import { cn } from "~/ui/lib/utils";
import { X } from "lucide-react";
import * as React from "react";

const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      `
        fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm

        data-[state=closed]:animate-out data-[state=closed]:fade-out-0

        data-[state=open]:animate-in data-[state=open]:fade-in-0
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    forceFocus?: boolean;
  }
>(({ children, className, forceFocus, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay
      className={cn(`
        fixed inset-0 flex flex-col items-center bg-black/50

        sm:overflow-hidden
      `)}
    >
      <div
        className={cn(`
          flex h-full w-full flex-col

          sm:h-auto sm:min-h-fit sm:w-auto sm:justify-center
        `)}
      >
        <DialogPrimitive.Content
          className={cn(
            `
              relative z-50 flex h-full max-h-screen w-full flex-col border
              bg-background shadow-lg duration-200

              data-[state=closed]:animate-out data-[state=closed]:fade-out-0
              data-[state=closed]:zoom-out-95
              data-[state=closed]:slide-out-to-top-[5%]

              data-[state=open]:animate-in data-[state=open]:fade-in-0
              data-[state=open]:zoom-in-95
              data-[state=open]:slide-in-from-top-[5%]

              sm:mb-48 sm:mt-24 sm:h-auto sm:max-h-[calc(100vh-12rem)]
              sm:max-w-lg sm:overflow-visible sm:rounded-lg
            `,
            className,
          )}
          onEscapeKeyDown={
            forceFocus
              ? (e) => {
                  e.preventDefault();
                }
              : undefined
          }
          onInteractOutside={forceFocus ? (e) => e.preventDefault() : undefined}
          onPointerDownOutside={
            forceFocus ? (e) => e.preventDefault() : undefined
          }
          ref={ref}
          {...props}
        >
          {children}
          <DialogPrimitive.Close
            className={`
              absolute right-4 top-4 rounded-sm opacity-70
              ring-offset-background transition-opacity

              data-[state=open]:bg-accent
              data-[state=open]:text-muted-foreground

              disabled:pointer-events-none

              focus:outline-none focus:ring-2 focus:ring-ring
              focus:ring-offset-2

              hover:opacity-100
            `}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </div>
    </DialogOverlay>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      `
        flex flex-col space-y-2 rounded-t-lg border-b bg-background p-6
        text-center

        sm:text-left
      `,
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(`flex flex-row space-x-2 border-t p-6`, className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    className={cn(
      "text-2xl font-semibold leading-none tracking-tighter",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    className={cn("text-base text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

type DialogProps = {
  children?: React.ReactNode;
  confirmButtonVariant?: ButtonVariantProp;
  confirmTitle?: string;
  cancelTitle?: string;
  dialogDescription?: React.ReactNode;
  dialogTitle?: React.ReactNode;
  disabled?: boolean;
  leftButton?: React.ReactNode | string;
  loading?: boolean;
  maxWidth?: number;
  modal?: boolean;
  onConfirm: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
  trigger?: React.ReactNode | string;
  footer?: React.ReactNode | string;
  hideCloseButton?: boolean;
  hideConfirmButton?: boolean;
  className?: string;
  confirmButton?: React.ReactNode;
  forceFocus?: boolean;
};

function Dialog(props: DialogProps) {
  const {
    cancelTitle = "Cancel",
    children,
    className,
    confirmButton,
    confirmButtonVariant = "default",
    confirmTitle = "Save Changes",
    dialogDescription,
    dialogTitle = "Are you sure?",
    disabled = false,
    footer,
    forceFocus = false,
    hideCloseButton = false,
    hideConfirmButton = false,
    leftButton = undefined,
    loading = false,
    maxWidth,
    modal = true,
    onConfirm,
    onOpenChange,
    open,
    trigger,
  } = props;

  const shouldShowLeftButton = leftButton != null || !hideCloseButton;
  const shouldShowConfirmButton = confirmButton != null || !hideConfirmButton;
  const shouldShowFooter = shouldShowLeftButton || shouldShowConfirmButton;

  return (
    <DialogRoot
      modal={modal}
      onOpenChange={
        forceFocus
          ? (open) => {
              // If forceFocus is true, only allow explicit open changes, not closing
              if (open === true) {
                onOpenChange(open);
              }
            }
          : onOpenChange
      }
      open={open}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        className={cn(
          `
            w-max-[425px]

            md:w-[700px]
          `,
          className,
        )}
        forceFocus={forceFocus}
        onCloseAutoFocus={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
        style={{ maxWidth }}
      >
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          {dialogDescription && (
            <DialogDescription>{dialogDescription}</DialogDescription>
          )}
        </DialogHeader>
        {children != null && (
          <div className={`min-h-0 flex-1 overflow-y-auto px-6 pb-6 pt-6`}>
            {children}
          </div>
        )}
        {footer != null && footer}
        {footer == null && shouldShowFooter && (
          <DialogFooter className="flex items-end justify-end gap-2">
            {}
            {leftButton != null ? (
              leftButton
            ) : hideCloseButton ? (
              <div />
            ) : (
              <Button
                disabled={disabled || loading}
                onClick={() => onOpenChange(false)}
                variant="secondary"
              >
                {cancelTitle}
              </Button>
            )}
            {}
            {confirmButton != null ? (
              confirmButton
            ) : hideConfirmButton ? (
              <div />
            ) : (
              <Button
                className="w-fit"
                disabled={disabled || loading}
                onClick={onConfirm}
                variant={confirmButtonVariant}
              >
                {loading ? "Loading..." : confirmTitle}
              </Button>
            )}
          </DialogFooter>
        )}
      </DialogContent>
    </DialogRoot>
  );
}

export {
  Dialog,
  DialogRoot,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};



================================================
FILE: frontend/src/ui/components/ui/DropdownMenu.tsx
================================================
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "~/ui/lib/utils";
import { Check, ChevronRight, Circle } from "lucide-react";
import * as React from "react";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ children, className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      `
        flex cursor-default select-none items-center rounded-sm px-2 py-1.5
        text-sm outline-none

        data-[state=open]:bg-accent

        focus:bg-accent
      `,
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      `
        z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1
        text-popover-foreground shadow-lg

        data-[side=bottom]:slide-in-from-top-2

        data-[side=left]:slide-in-from-right-2

        data-[side=right]:slide-in-from-left-2

        data-[side=top]:slide-in-from-bottom-2

        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=closed]:zoom-out-95

        data-[state=open]:animate-in data-[state=open]:fade-in-0
        data-[state=open]:zoom-in-95
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={cn(
        `
          z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1
          text-popover-foreground shadow-md

          data-[side=bottom]:slide-in-from-top-2

          data-[side=left]:slide-in-from-right-2

          data-[side=right]:slide-in-from-left-2

          data-[side=top]:slide-in-from-bottom-2

          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95

          data-[state=open]:animate-in data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95
        `,
        className,
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      `
        relative flex cursor-default select-none items-center rounded-sm px-2
        py-1.5 text-sm outline-none transition-colors

        data-[disabled]:pointer-events-none data-[disabled]:opacity-50

        focus:bg-accent focus:text-accent-foreground
      `,
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ checked, children, className, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      `
        relative flex cursor-default select-none items-center rounded-sm py-1.5
        pl-8 pr-2 text-sm outline-none transition-colors

        data-[disabled]:pointer-events-none data-[disabled]:opacity-50

        focus:bg-accent focus:text-accent-foreground
      `,
      className,
    )}
    ref={ref}
    {...props}
  >
    <span
      className={cn(`
        absolute left-2 flex h-3.5 w-3.5 items-center justify-center
      `)}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ children, className, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      `
        relative flex cursor-default select-none items-center rounded-sm py-1.5
        pl-8 pr-2 text-sm outline-none transition-colors

        data-[disabled]:pointer-events-none data-[disabled]:opacity-50

        focus:bg-accent focus:text-accent-foreground
      `,
      className,
    )}
    ref={ref}
    {...props}
  >
    <span
      className={`absolute left-2 flex h-3.5 w-3.5 items-center justify-center`}
    >
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className,
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ComponentRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};



================================================
FILE: frontend/src/ui/components/ui/Input.tsx
================================================
import { cn } from "~/ui/lib/utils";
import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string | null;
  hasError?: boolean;
  hint?: string;
  label?: string;
  icon?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, hasError, hint, icon, label, type, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="text-sm font-medium leading-none">{label}</label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              {icon}
            </div>
          )}
          <input
            className={cn(
              `
                flex h-10 w-full rounded border border-input bg-background px-3
                py-2 text-sm ring-offset-background

                disabled:cursor-not-allowed disabled:opacity-50

                file:border-0 file:bg-transparent file:text-sm file:font-medium

                focus-visible:outline-none focus-visible:ring-1
                focus-visible:ring-primary-cta/60 focus-visible:ring-offset-2

                placeholder:text-muted-foreground
              `,
              (error ?? hasError) &&
                cn(`
                  border-detail-failure

                  focus-visible:ring-detail-failure
                `),
              icon && "pl-7",
              label && "mt-[4px]",
              className,
            )}
            ref={ref}
            type={type}
            {...props}
          />
        </div>
        {error && <p className="mt-2 text-sm text-detail-failure">{error}</p>}
        {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };



================================================
FILE: frontend/src/ui/components/ui/Label.tsx
================================================
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "~/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

const labelVariants = cva(
  `
    text-sm font-medium leading-none

    peer-disabled:cursor-not-allowed peer-disabled:opacity-70
  `,
);

const Label = React.forwardRef<
  React.ComponentRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    className={cn(labelVariants(), className)}
    ref={ref}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };



================================================
FILE: frontend/src/ui/components/ui/Popover.tsx
================================================
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ align = "center", className, sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      className={cn(
        `
          z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground
          shadow-md outline-none

          data-[side=bottom]:slide-in-from-top-2

          data-[side=left]:slide-in-from-right-2

          data-[side=right]:slide-in-from-left-2

          data-[side=top]:slide-in-from-bottom-2

          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95

          data-[state=open]:animate-in data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95
        `,
        className,
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };



================================================
FILE: frontend/src/ui/components/ui/ScaleLoader.tsx
================================================
import type { ThemeColorName } from "../../constants/ColorSystem";
import { useTheme } from "../../providers/ThemeProvider";
import { getThemeColor } from "../../utils/getThemeColor";

type ScaleLoaderProps = {
  className?: string;
  height?: number;
  width?: number;
  animationColor?: ThemeColorName;
};

export function ScaleLoader({
  animationColor = "foreground",
  className,
  height = 18,
  width = 3,
}: ScaleLoaderProps) {
  const { darkOrLightTheme } = useTheme();
  const color = getThemeColor(darkOrLightTheme, animationColor);

  return (
    <div
      className={`
        flex items-center justify-center space-x-1

        ${className ?? ""}
      `}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <div
          className="animate-scale"
          key={index}
          style={{
            animationDelay: `${index * 0.1}s`,
            backgroundColor: color,
            borderRadius: "2px",
            display: "inline-block",
            height: `${height}px`,
            margin: "0 2px",
            width: `${width}px`,
          }}
        />
      ))}
      <style>{`
        @keyframes scale {
          0%, 100% {
            transform: scaleY(1.0);
          }
          50% {
            transform: scaleY(1.8);
          }
        }
        .animate-scale {
          animation: scale 1200ms ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}



================================================
FILE: frontend/src/ui/components/ui/Select.tsx
================================================
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "~/ui/lib/utils";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";
import type { ClassNameValue } from "tailwind-merge";

const SelectBase = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Trigger
    className={cn(
      `
        flex h-10 w-full items-center justify-between rounded-md border
        border-input bg-background px-3 py-2 text-sm ring-offset-background

        [&>span]:line-clamp-1

        disabled:cursor-not-allowed disabled:opacity-50

        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2

        placeholder:text-muted-foreground
      `,
      className,
    )}
    ref={ref}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="ml-1 h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    ref={ref}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    ref={ref}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, className, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        `
          relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border
          bg-popover text-popover-foreground shadow-md

          data-[side=bottom]:slide-in-from-top-2

          data-[side=left]:slide-in-from-right-2

          data-[side=right]:slide-in-from-left-2

          data-[side=top]:slide-in-from-bottom-2

          data-[state=closed]:animate-out data-[state=closed]:fade-out-0
          data-[state=closed]:zoom-out-95

          data-[state=open]:animate-in data-[state=open]:fade-in-0
          data-[state=open]:zoom-in-95
        `,
        position === "popper" &&
          `
            data-[side=bottom]:translate-y-1

            data-[side=left]:-translate-x-1

            data-[side=right]:translate-x-1

            data-[side=top]:-translate-y-1
          `,
        className,
      )}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            `
              h-[var(--radix-select-trigger-height)] w-full
              min-w-[var(--radix-select-trigger-width)]
            `,
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    ref={ref}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, className, ...props }, ref) => (
  <SelectPrimitive.Item
    className={cn(
      `
        relative flex w-full cursor-default select-none items-center rounded-sm
        py-1.5 pl-2 pr-2 text-sm outline-none

        data-[disabled]:pointer-events-none data-[disabled]:opacity-50

        focus:bg-accent focus:text-accent-foreground
      `,
      className,
    )}
    ref={ref}
    {...props}
  >
    <span className={cn(`mr-1 flex h-3.5 w-3.5 items-center justify-center`)}>
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    ref={ref}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

type SelectProps = React.ComponentPropsWithoutRef<typeof SelectBase> & {
  placeholder?: string;
  label?: string;
  className?: ClassNameValue;
  enableFocusStyle?: boolean;
  options: { disabled?: boolean; value: string; label: string }[];
};

const Select: React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<React.ComponentRef<typeof SelectBase>>
> = React.forwardRef<React.ComponentRef<typeof SelectBase>, SelectProps>(
  (
    {
      className,
      enableFocusStyle = false,
      label,
      options,
      placeholder,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={cn(className)}>
        {label && (
          <label className="text-sm font-medium leading-none">{label}</label>
        )}
        <SelectBase {...props}>
          <SelectTrigger
            aria-label={placeholder}
            className={cn(
              "w-full",
              className,
              !enableFocusStyle &&
                `
                  focus-visible:ring-0 focus-visible:ring-transparent

                  focus:outline-none focus:ring-0 focus:ring-transparent
                  focus:ring-offset-0
                `,
            )}
            ref={ref}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {label && <SelectLabel>{label}</SelectLabel>}
              {options.map((option) => (
                <SelectItem
                  disabled={option.disabled}
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </SelectBase>
      </div>
    );
  },
);
Select.displayName = "Select";

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};



================================================
FILE: frontend/src/ui/components/ui/Separator.tsx
================================================
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const Separator = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, decorative = true, orientation = "horizontal", ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className,
      )}
      decorative={decorative}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };



================================================
FILE: frontend/src/ui/components/ui/SeparatorBorder.tsx
================================================
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const SeparatorBorder = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SeparatorPrimitive.Root
    className={cn("shrink-0 border-b border-muted", className)}
    ref={ref}
    {...props}
  />
));
SeparatorBorder.displayName = "SeparatorBorder";

export { SeparatorBorder };



================================================
FILE: frontend/src/ui/components/ui/Sheet.tsx
================================================
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "~/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      `
        fixed inset-0 z-50 bg-black/80

        data-[state=closed]:animate-out data-[state=closed]:fade-out-0

        data-[state=open]:animate-in data-[state=open]:fade-in-0
      `,
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  `
    fixed z-50 gap-4 bg-background p-6 shadow-lg outline-none transition
    ease-in-out

    data-[state=closed]:duration-300 data-[state=closed]:animate-out

    data-[state=open]:duration-300 data-[state=open]:animate-in
  `,
  {
    defaultVariants: {
      side: "right",
    },
    variants: {
      side: {
        bottom: cn(`
          inset-x-0 bottom-0 border-t

          data-[state=closed]:slide-out-to-bottom

          data-[state=open]:slide-in-from-bottom
        `),
        left: cn(`
          inset-y-0 left-0 h-full w-3/4 border-r

          data-[state=closed]:slide-out-to-left

          data-[state=open]:slide-in-from-left

          sm:max-w-sm
        `),
        right: cn(`
          inset-y-0 right-0 h-full w-3/4 border-l

          data-[state=closed]:slide-out-to-right

          data-[state=open]:slide-in-from-right

          sm:max-w-sm
        `),
        top: cn(`
          inset-x-0 top-0 border-b

          data-[state=closed]:slide-out-to-top

          data-[state=open]:slide-in-from-top
        `),
      },
    },
  },
);

type SheetContentProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
> & {
  closeButtonAriaLabel?: string;
} & VariantProps<typeof sheetVariants>;

const SheetContent = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(
  (
    {
      children,
      className,
      closeButtonAriaLabel = "Close Side Panel",
      side = "right",
      ...props
    },
    ref,
  ) => (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        onOpenAutoFocus={(e) => e.preventDefault()}
        className={cn(sheetVariants({ side }), className)}
        ref={ref}
        {...props}
      >
        {children}
        <SheetPrimitive.Close
          aria-label={closeButtonAriaLabel}
          className={`
            absolute right-3 top-3 h-10 w-10 rounded-md border
            border-secondary-border bg-secondary opacity-70
            ring-offset-background transition-opacity

            data-[state=open]:bg-secondary

            disabled:pointer-events-none

            focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2

            hover:opacity-100
          `}
        >
          <X className="m-auto h-4 w-4" />
          <span className="sr-only">{closeButtonAriaLabel}</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      `
        flex flex-col space-y-2 text-center

        sm:text-left
      `,
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      `
        flex flex-col-reverse

        sm:flex-row sm:justify-end sm:space-x-2
      `,
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <h2 className={cn(className)} ref={ref} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ComponentRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    className={cn("text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};



================================================
FILE: frontend/src/ui/components/ui/Skeleton.tsx
================================================
import { cn } from "~/ui/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-skeleton", className)}
      {...props}
    />
  );
}

export { Skeleton };



================================================
FILE: frontend/src/ui/components/ui/Slider.tsx
================================================
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track
      className={cn(`
        relative h-2 w-full grow overflow-hidden rounded-full border
        bg-secondary
      `)}
    >
      <SliderPrimitive.Range className="absolute h-full bg-ring" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      aria-label={props["aria-label"] ?? "Slider Thumb"}
      className={`
        block h-5 w-5 rounded-full border-2 border-ring bg-background
        ring-offset-background transition-colors

        disabled:pointer-events-none disabled:opacity-50

        focus-visible:outline-none focus-visible:ring-ring

        hover:cursor-pointer
      `}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };



================================================
FILE: frontend/src/ui/components/ui/Spinner.tsx
================================================
import { cn } from "~/ui/lib/utils";
import { Loader2Icon } from "lucide-react";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  );
}

export { Spinner };



================================================
FILE: frontend/src/ui/components/ui/Switch.tsx
================================================
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const SwitchBase = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      `
        peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center
        rounded-full border-2 border-transparent transition-colors

        data-[state=checked]:bg-ring

        data-[state=unchecked]:bg-switch

        disabled:cursor-not-allowed disabled:opacity-50

        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2 focus-visible:ring-offset-background
      `,
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `
          pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg
          ring-0 transition-transform

          data-[state=checked]:translate-x-5

          data-[state=unchecked]:translate-x-0
        `,
      )}
    />
  </SwitchPrimitives.Root>
));
SwitchBase.displayName = SwitchPrimitives.Root.displayName;

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchBase> & {
  label?: React.ReactNode;
  labelClassName?: string;
};

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchBase>,
  SwitchProps
>(({ className, id, label, labelClassName, ...props }, ref) => {
  return (
    <label
      className={cn("flex cursor-pointer items-center space-x-2", className)}
      htmlFor={id}
    >
      <SwitchBase id={id} ref={ref} {...props} />
      {label && (
        <span
          className={cn(
            `
              font-medium leading-none

              peer-disabled:cursor-not-allowed peer-disabled:opacity-70
            `,
            labelClassName,
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
});
Switch.displayName = "Switch";

export { Switch, SwitchBase };



================================================
FILE: frontend/src/ui/components/ui/Table.tsx
================================================
import { cn } from "~/ui/lib/utils";
import type { ClassValue } from "clsx";
import * as React from "react";

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement> & {
    wrapperClassName?: ClassValue;
  }
>(({ className, wrapperClassName, ...props }, ref) => (
  <div
    className={cn(
      `
        relative w-full overflow-hidden rounded-lg border border-b-0
        border-border
      `,
      wrapperClassName,
    )}
  >
    <div className="overflow-auto">
      <table
        className={cn("w-full caption-bottom text-sm", className)}
        ref={ref}
        {...props}
      />
    </div>
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    className={cn(
      `
        bg-background

        [&_tr]:border-b
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody className={cn(className)} ref={ref} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    className={cn(
      `
        border-t bg-muted/50 font-medium

        [&>tr]:last:border-b-0
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    className={cn(
      `
        border-b bg-card text-muted-foreground transition-colors

        data-[state=selected]:bg-muted

        hover:bg-muted/50
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    className={cn(
      `
        h-12 px-4 text-left align-middle font-medium text-foreground

        [&:has([role=checkbox])]:pr-0
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    className={cn(
      `
        p-4 align-middle

        [&:has([role=checkbox])]:pr-0
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};



================================================
FILE: frontend/src/ui/components/ui/Tabs.tsx
================================================
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    className={cn(
      `
        flex h-auto flex-wrap items-center justify-start gap-2 rounded-md p-1
        text-muted-foreground

        sm:inline-flex sm:h-auto sm:justify-center
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      `
        inline-flex items-center justify-center whitespace-nowrap rounded-sm
        bg-secondary/20 px-4 py-1.5 text-sm font-medium ring-offset-background
        transition-all

        data-[state=active]:text-foreground data-[state=active]:shadow-sm

        disabled:pointer-events-none disabled:opacity-50

        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        focus-visible:ring-offset-2

        hover:bg-secondary/80 hover:text-foreground
      `,
      `
        w-full

        sm:w-auto
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    className={cn(
      `
        mt-[2px] ring-offset-background

        focus-visible:outline-none focus-visible:none
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };



================================================
FILE: frontend/src/ui/components/ui/Textarea.tsx
================================================
import { cn } from "~/ui/lib/utils";
import * as React from "react";

export type TextareaProps = React.ComponentProps<"textarea"> & {
  error?: string | null;
  hasError?: boolean;
  hint?: string;
  label?: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, hasError, hint, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="text-sm font-medium leading-none">{label}</label>
        )}
        <textarea
          className={cn(
            `
              flex min-h-[80px] w-full rounded-md border border-input
              bg-background px-3 py-2 text-base ring-offset-background

              disabled:cursor-not-allowed disabled:opacity-50

              focus-visible:outline-none focus-visible:ring-1
              focus-visible:ring-primary-cta/60 focus-visible:ring-offset-2

              md:text-sm

              placeholder:text-muted-foreground
            `,
            (error ?? hasError) &&
              cn(`
                border-detail-failure

                focus-visible:ring-detail-failure
              `),
            label && "mt-[4px]",
            className,
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-2 text-sm text-detail-failure">{error}</p>}
        {hint && <p className="mt-1 text-sm text-muted-foreground">{hint}</p>}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };



================================================
FILE: frontend/src/ui/components/ui/Toast.tsx
================================================
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cn } from "~/ui/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import * as React from "react";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    className={cn(
      `
        fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4

        md:w-fit md:min-w-[420px]

        sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  `
    group pointer-events-auto relative flex w-full items-center justify-between
    space-x-4 overflow-hidden rounded border p-6 pr-8 shadow-lg transition-all

    data-[state=closed]:animate-out data-[state=closed]:fade-out-80
    data-[state=closed]:slide-out-to-right-full

    data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full
    data-[state=open]:sm:slide-in-from-bottom-full

    data-[swipe=cancel]:translate-x-0

    data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]
    data-[swipe=end]:animate-out

    data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]
    data-[swipe=move]:transition-none
  `,
  {
    defaultVariants: {
      variant: "info",
    },
    variants: {
      variant: {
        destructive: "group border-destructive bg-red-400 text-gray-950",
        info: "border bg-background text-foreground",
        success: "border bg-green-400 text-gray-950",
        warning: "border bg-yellow-200 text-gray-950",
      },
    },
  },
);

type ToastVariantProp = VariantProps<typeof toastVariants>["variant"];

const Toast = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      className={cn(toastVariants({ variant }), className)}
      ref={ref}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    className={cn(
      `
        inline-flex h-8 shrink-0 items-center justify-center rounded-md border
        bg-transparent px-3 text-sm font-medium ring-offset-background
        transition-colors

        disabled:pointer-events-none disabled:opacity-50

        focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2

        group-[.destructive]:border-muted/40
        group-[.destructive]:hover:border-destructive/30
        group-[.destructive]:hover:bg-destructive
        group-[.destructive]:hover:text-destructive-foreground
        group-[.destructive]:focus:ring-destructive
      `,
      className,
    )}
    ref={ref}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close> & {
    variant: ToastVariantProp;
  }
>(({ className, variant, ...props }, ref) => (
  <ToastPrimitives.Close
    className={cn(
      `
        absolute right-2 top-2 rounded-md p-1 text-gray-950 transition-opacity

        focus:opacity-100 focus:outline-none focus:ring-2

        group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50
        group-[.destructive]:focus:ring-red-400
        group-[.destructive]:focus:ring-offset-red-600

        group-[.info]:text-blue-300 group-[.info]:hover:text-blue-50

        group-hover:opacity-100

        hover:text-gray-800
      `,
      className,
      variant === "info" &&
        cn(`
          text-muted-foreground

          hover:text-foreground
        `),
    )}
    ref={ref}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    className={cn("text-sm font-semibold", className)}
    ref={ref}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ComponentRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    className={cn("text-sm opacity-90", className)}
    ref={ref}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};



================================================
FILE: frontend/src/ui/components/ui/Toaster.tsx
================================================
import { Row } from "~/ui/components/custom/Row";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "~/ui/components/ui/Toast";
import { useToast } from "~/ui/hooks/useToast.hook";
import { AlertTriangleIcon, CheckCircle, InfoIcon } from "lucide-react";
import { useEffect } from "react";

const TOAST_REMOVE_ON_WINDOW_BLUR_DELAY_MS = 500;

export function Toaster() {
  const { dismiss, toasts } = useToast();

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const handleBlur = () => {
      toasts.forEach((toast) => {
        const timer = setTimeout(() => {
          dismiss(toast.id);
        }, TOAST_REMOVE_ON_WINDOW_BLUR_DELAY_MS);
        timers.push(timer);
      });
    };

    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("blur", handleBlur);
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [dismiss, toasts]);

  return (
    <ToastProvider>
      {toasts.map(function ({
        action,
        description,
        id,
        title,
        variant,
        ...props
      }) {
        return (
          <Toast key={id} variant={variant} {...props}>
            <div className="grid gap-1">
              {title && (
                <Row className="gap-[6px]">
                  {variant === "info" && <InfoIcon size={18} />}
                  {variant === "success" && <CheckCircle size={18} />}
                  {variant === "warning" && <AlertTriangleIcon size={18} />}
                  {variant === "destructive" && <AlertTriangleIcon size={18} />}
                  <ToastTitle>{title}</ToastTitle>
                </Row>
              )}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose variant={variant} />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}



================================================
FILE: frontend/src/ui/components/ui/Tooltip.tsx
================================================
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "~/ui/lib/utils";
import * as React from "react";

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ComponentRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    className={cn(
      `
        z-50 overflow-hidden rounded border bg-popover px-3 py-1.5 text-sm
        text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95

        data-[side=bottom]:slide-in-from-top-2

        data-[side=left]:slide-in-from-right-2

        data-[side=right]:slide-in-from-left-2

        data-[side=top]:slide-in-from-bottom-2

        data-[state=closed]:animate-out data-[state=closed]:fade-out-0
        data-[state=closed]:zoom-out-95
      `,
      className,
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  disabled?: boolean;
  side?: TooltipPrimitive.TooltipContentProps["side"];
};

function Tooltip({ children, content, disabled = false, side }: TooltipProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <TooltipRoot>
        {!disabled && (
          <TooltipPrimitive.Portal>
            <TooltipContent side={side}>{content}</TooltipContent>
          </TooltipPrimitive.Portal>
        )}
        <TooltipTrigger asChild>{children}</TooltipTrigger>
      </TooltipRoot>
    </TooltipProvider>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };



================================================
FILE: frontend/src/ui/constants/ColorSystem.ts
================================================
// This file is auto-generated from the Tailwind config. Do not edit manually.
// Regenerate with `bun run colors` from the `@kuzco/ui` package.

export const TailwindColors = {
  "gray-0": "rgb(255, 255, 255)",
  "gray-25": "rgb(252, 252, 253)",
  "gray-50": "rgb(248, 250, 252)",
  "gray-100": "rgb(238, 242, 246)",
  "gray-200": "rgb(227, 232, 239)",
  "gray-300": "rgb(205, 213, 223)",
  "gray-400": "rgb(154, 164, 178)",
  "gray-500": "rgb(105, 117, 134)",
  "gray-600": "rgb(75, 85, 101)",
  "gray-700": "rgb(54, 65, 82)",
  "gray-800": "rgb(32, 41, 57)",
  "gray-900": "rgb(18, 25, 38)",
  "gray-950": "rgb(13, 18, 28)",
  "gray-1000": "rgb(5, 5, 6)",
  "yellow-25": "rgb(255, 252, 245)",
  "yellow-50": "rgb(255, 250, 235)",
  "yellow-100": "rgb(254, 240, 199)",
  "yellow-200": "rgb(254, 223, 137)",
  "yellow-300": "rgb(254, 200, 75)",
  "yellow-400": "rgb(253, 176, 34)",
  "yellow-500": "rgb(247, 144, 9)",
  "yellow-600": "rgb(220, 104, 3)",
  "yellow-700": "rgb(181, 71, 8)",
  "yellow-800": "rgb(147, 55, 13)",
  "yellow-900": "rgb(122, 46, 14)",
  "yellow-950": "rgb(78, 29, 9)",
  "red-25": "rgb(255, 251, 250)",
  "red-50": "rgb(254, 243, 242)",
  "red-100": "rgb(254, 228, 226)",
  "red-200": "rgb(254, 205, 202)",
  "red-300": "rgb(253, 162, 155)",
  "red-400": "rgb(249, 112, 102)",
  "red-500": "rgb(240, 68, 56)",
  "red-600": "rgb(217, 45, 32)",
  "red-700": "rgb(180, 35, 24)",
  "red-800": "rgb(145, 32, 24)",
  "red-900": "rgb(122, 39, 26)",
  "red-950": "rgb(85, 22, 12)",
  "green-25": "rgb(246, 254, 249)",
  "green-50": "rgb(236, 253, 243)",
  "green-100": "rgb(220, 250, 230)",
  "green-200": "rgb(171, 239, 198)",
  "green-300": "rgb(117, 224, 167)",
  "green-400": "rgb(71, 205, 137)",
  "green-500": "rgb(23, 178, 106)",
  "green-600": "rgb(7, 148, 85)",
  "green-700": "rgb(6, 118, 71)",
  "green-800": "rgb(8, 93, 58)",
  "green-900": "rgb(7, 77, 49)",
  "green-950": "rgb(5, 51, 33)",
  "blue-25": "rgb(245, 250, 255)",
  "blue-50": "rgb(239, 248, 255)",
  "blue-100": "rgb(209, 233, 255)",
  "blue-200": "rgb(178, 221, 255)",
  "blue-300": "rgb(132, 202, 255)",
  "blue-400": "rgb(83, 177, 253)",
  "blue-500": "rgb(46, 144, 250)",
  "blue-600": "rgb(21, 112, 239)",
  "blue-700": "rgb(23, 92, 211)",
  "blue-800": "rgb(24, 73, 169)",
  "blue-900": "rgb(25, 65, 133)",
  "blue-950": "rgb(16, 42, 86)",
} as const;

export type TailwindColorName = keyof typeof TailwindColors;

export const TailwindThemeColors = {
  dark: {
    background: TailwindColors["gray-950"],
    "background-muted": TailwindColors["gray-900"],
    foreground: TailwindColors["gray-50"],
    sidebar: TailwindColors["gray-900"],
    muted: TailwindColors["gray-800"],
    "muted-foreground": TailwindColors["gray-400"],
    "muted-border": TailwindColors["gray-800"],
    card: TailwindColors["gray-900"],
    "card-foreground": TailwindColors["gray-25"],
    "card-hover": TailwindColors["gray-800"],
    popover: TailwindColors["gray-900"],
    "popover-foreground": TailwindColors["gray-25"],
    border: TailwindColors["gray-800"],
    input: TailwindColors["gray-800"],
    switch: TailwindColors["gray-600"],
    primary: TailwindColors["blue-950"],
    "primary-foreground": TailwindColors["gray-25"],
    "primary-border": TailwindColors["blue-800"],
    "primary-hover": TailwindColors["blue-900"],
    secondary: TailwindColors["gray-950"],
    "secondary-border": TailwindColors["gray-700"],
    "secondary-foreground": TailwindColors["gray-300"],
    "secondary-hover": TailwindColors["gray-800"],
    accent: TailwindColors["gray-800"],
    "accent-foreground": TailwindColors["gray-25"],
    destructive: TailwindColors["red-800"],
    "destructive-foreground": TailwindColors["gray-25"],
    "destructive-border": TailwindColors["red-500"],
    "destructive-hover": TailwindColors["red-700"],
    "primary-cta": TailwindColors["gray-50"],
    "primary-cta-foreground": TailwindColors["gray-900"],
    "primary-cta-border": TailwindColors["gray-200"],
    "primary-cta-hover": TailwindColors["gray-200"],
    ring: TailwindColors["blue-500"],
    link: TailwindColors["blue-500"],
    "link-hover": TailwindColors["blue-400"],
    skeleton: TailwindColors["gray-800"],
    code: TailwindColors["yellow-200"],
    "chart-1-primary": TailwindColors["blue-500"],
    "chart-2-primary": TailwindColors["green-500"],
    "chart-3-primary": TailwindColors["yellow-500"],
    "chart-1": TailwindColors["blue-600"],
    "chart-2": TailwindColors["blue-500"],
    "chart-3": TailwindColors["blue-400"],
    "chart-4": TailwindColors["blue-300"],
    "chart-5": TailwindColors["blue-700"],
    "chart-6": TailwindColors["blue-600"],
    "chart-7": TailwindColors["blue-900"],
    "chart-8": TailwindColors["blue-950"],
    "detail-success": TailwindColors["green-500"],
    "detail-failure": TailwindColors["red-500"],
    "detail-warning": TailwindColors["yellow-400"],
    "detail-neutral": TailwindColors["gray-200"],
    "detail-brand": TailwindColors["blue-500"],
  },
  light: {
    background: TailwindColors["gray-100"],
    "background-muted": TailwindColors["gray-200"],
    foreground: TailwindColors["gray-950"],
    sidebar: TailwindColors["gray-100"],
    muted: TailwindColors["gray-200"],
    "muted-foreground": TailwindColors["gray-500"],
    "muted-border": TailwindColors["gray-200"],
    card: TailwindColors["gray-50"],
    "card-foreground": TailwindColors["gray-900"],
    "card-hover": TailwindColors["gray-50"],
    popover: TailwindColors["gray-50"],
    "popover-foreground": TailwindColors["gray-900"],
    border: TailwindColors["gray-300"],
    input: TailwindColors["gray-400"],
    switch: TailwindColors["gray-300"],
    primary: TailwindColors["blue-700"],
    "primary-foreground": TailwindColors["gray-25"],
    "primary-border": TailwindColors["blue-800"],
    "primary-hover": TailwindColors["blue-600"],
    secondary: TailwindColors["gray-0"],
    "secondary-border": TailwindColors["gray-200"],
    "secondary-foreground": TailwindColors["gray-900"],
    "secondary-hover": TailwindColors["gray-0"],
    accent: TailwindColors["gray-200"],
    "accent-foreground": TailwindColors["gray-900"],
    destructive: TailwindColors["red-700"],
    "destructive-foreground": TailwindColors["gray-25"],
    "destructive-border": TailwindColors["red-950"],
    "destructive-hover": TailwindColors["red-600"],
    "primary-cta": TailwindColors["gray-900"],
    "primary-cta-foreground": TailwindColors["gray-50"],
    "primary-cta-border": TailwindColors["gray-800"],
    "primary-cta-hover": TailwindColors["gray-700"],
    ring: TailwindColors["blue-600"],
    link: TailwindColors["blue-500"],
    "link-hover": TailwindColors["blue-400"],
    skeleton: TailwindColors["gray-200"],
    code: TailwindColors["yellow-200"],
    "chart-1-primary": TailwindColors["blue-500"],
    "chart-2-primary": TailwindColors["green-500"],
    "chart-3-primary": TailwindColors["yellow-500"],
    "chart-1": TailwindColors["blue-600"],
    "chart-2": TailwindColors["blue-500"],
    "chart-3": TailwindColors["blue-400"],
    "chart-4": TailwindColors["blue-300"],
    "chart-5": TailwindColors["blue-700"],
    "chart-6": TailwindColors["blue-600"],
    "chart-7": TailwindColors["blue-900"],
    "chart-8": TailwindColors["blue-950"],
    "detail-success": TailwindColors["green-500"],
    "detail-failure": TailwindColors["red-500"],
    "detail-warning": TailwindColors["yellow-400"],
    "detail-neutral": TailwindColors["gray-200"],
    "detail-brand": TailwindColors["blue-500"],
  },
} as const;

export type ThemeColorName = keyof (typeof TailwindThemeColors)["light"];

export const ColorSystem = {
  TailwindColors,
  TailwindThemeColors,
} as const;



================================================
FILE: frontend/src/ui/hooks/useBreakpoints.hook.ts
================================================
import { useHasMounted } from "~/ui/hooks/useHasMounted.hook";
import { useEffect, useState } from "react";

type BreakpointContext = {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWidescreen: boolean;
};

export const BREAKPOINTS = {
  desktop: 1024,
  mobile: 0,
  tablet: 768,
  widescreen: 1440,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

const sortedBreakpoints = Object.entries(BREAKPOINTS)
  .map(([key, value]) => ({ key, value }))
  .sort((a, b) => a.value - b.value);

const getCurrentBreakpoint = (): Breakpoint => {
  let current: Breakpoint = "desktop";
  if (typeof window === "undefined") {
    return current;
  }

  const width = window.innerWidth;
  for (const { key, value } of sortedBreakpoints) {
    if (width >= value) {
      current = key as Breakpoint;
    }
  }

  return current;
};

export function useBreakpoints(): BreakpointContext {
  const mounted = useHasMounted();
  const [breakpoint, setBreakpoint] = useState(getCurrentBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      const newBreakpoint = getCurrentBreakpoint();
      setBreakpoint(newBreakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let context: BreakpointContext = {
    breakpoint,
    isDesktop: breakpoint === "desktop",
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isWidescreen: breakpoint === "widescreen",
  };

  // We default to desktop breakpoint for SSR.
  if (!mounted) {
    context = {
      breakpoint,
      isDesktop: true,
      isMobile: false,
      isTablet: false,
      isWidescreen: false,
    };
  }

  return context;
}



================================================
FILE: frontend/src/ui/hooks/useHasMounted.hook.ts
================================================
import { useEffect, useState } from "react";

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return hasMounted;
}



================================================
FILE: frontend/src/ui/hooks/useToast.hook.ts
================================================
import type { ToastActionElement, ToastProps } from "~/ui/components/ui/Toast";
import { useEffect, useState } from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 500;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
} as const;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: ToasterToast;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: ToasterToast["id"];
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<ToasterToast>;
    };

type State = {
  toasts: ToasterToast[];
};

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      toastId: toastId,
      type: "REMOVE_TOAST",
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      };

    case "DISMISS_TOAST": {
      const { toastId } = action;

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: ((state: State) => void)[] = [];

let memoryState: State = { toasts: [] };

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}

type Toast = Omit<ToasterToast, "id">;

function toastFn({ ...props }: Toast) {
  const id = genId();

  const update = (props: ToasterToast) =>
    dispatch({
      toast: { ...props, id },
      type: "UPDATE_TOAST",
    });
  const dismiss = () => dispatch({ toastId: id, type: "DISMISS_TOAST" });

  dispatch({
    toast: {
      ...props,
      id,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
      open: true,
    },
    type: "ADD_TOAST",
  });

  return {
    dismiss,
    id,
    update,
  };
}

const toast = {
  error: (props: Toast) => toastFn({ ...props, variant: "destructive" }),
  info: (props: Toast) => toastFn({ ...props, variant: "info" }),
  success: (props: Toast) => toastFn({ ...props, variant: "success" }),
  warning: (props: Toast) => toastFn({ ...props, variant: "warning" }),
};

function useToast() {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    dismiss: (toastId?: string) => dispatch({ toastId, type: "DISMISS_TOAST" }),
  };
}

export { useToast, toast };



================================================
FILE: frontend/src/ui/lib/utils.ts
================================================
import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}



================================================
FILE: frontend/src/ui/providers/ThemeProvider.tsx
================================================
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type CoreTheme = "dark" | "light";

export type Theme = CoreTheme | "system" | "retro-dark" | "retro-light";

const DEFAULT_THEME: Theme = "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  storageKey: string;
  enableMarketingBehavior?: boolean;
  storage: Storage;
};

type ThemeProviderState = {
  theme: Theme;
  isDarkTheme: boolean;
  isLightTheme: boolean;
  isRetroTheme: boolean;
  appliedTheme?: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: CoreTheme | "retro-dark" | "retro-light";
  darkOrLightTheme: CoreTheme;
};

const initialState: ThemeProviderState = {
  resolvedTheme: "dark" as const,
  setTheme: () => null,
  theme: "system" as const,
  darkOrLightTheme: "dark" as const,
  isDarkTheme: true,
  isLightTheme: false,
  isRetroTheme: false,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

const getSystemTheme = (): CoreTheme => {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function ThemeProvider({
  children,
  enableMarketingBehavior = false,
  storage,
  storageKey,
  ...props
}: ThemeProviderProps) {
  const [appliedTheme, setAppliedTheme] = useState<Theme | undefined>();
  const [theme, setTheme] = useState<Theme>(
    () => (storage.getItem(storageKey) ?? DEFAULT_THEME) as Theme,
  );
  const [systemTheme, setSystemTheme] = useState<CoreTheme>(getSystemTheme);

  const updateDocumentBodyTheme = useCallback(
    (themeToApply: Theme) => {
      const root = window.document.body;
      root.classList.remove("light", "dark", "retro-light", "retro-dark");
      const resolvedTheme =
        themeToApply === "system" ? systemTheme : themeToApply;

      // Add base theme class for Tailwind utilities (dark: or light:)
      if (resolvedTheme === "retro-dark") {
        root.classList.add("dark", "retro-dark");
      } else if (resolvedTheme === "retro-light") {
        root.classList.add("light", "retro-light");
      } else {
        root.classList.add(resolvedTheme);
      }
    },
    [systemTheme],
  );

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    const resolvedTheme = theme === "system" ? systemTheme : theme;
    if (enableMarketingBehavior && resolvedTheme === "light") {
      setAppliedTheme("dark");
      updateDocumentBodyTheme("dark");
    } else if (appliedTheme !== resolvedTheme) {
      setAppliedTheme(undefined);
      updateDocumentBodyTheme(theme);
    }
  }, [
    appliedTheme,
    enableMarketingBehavior,
    theme,
    systemTheme,
    updateDocumentBodyTheme,
  ]);

  useEffect(() => {
    updateDocumentBodyTheme(theme);
  }, [theme, systemTheme, updateDocumentBodyTheme]);

  const resolvedTheme = appliedTheme
    ? appliedTheme === "system"
      ? systemTheme
      : appliedTheme
    : theme === "system"
      ? systemTheme
      : theme;

  const darkOrLightTheme =
    resolvedTheme === "retro-dark"
      ? "dark"
      : resolvedTheme === "retro-light"
        ? "light"
        : resolvedTheme;

  const state: ThemeProviderState = {
    appliedTheme,
    resolvedTheme,
    setTheme: (theme: Theme) => {
      storage.setItem(storageKey, theme);
      setTheme(theme);
    },
    theme,
    darkOrLightTheme,
    isDarkTheme: darkOrLightTheme === "dark",
    isLightTheme: darkOrLightTheme === "light",
    isRetroTheme:
      resolvedTheme === "retro-dark" || resolvedTheme === "retro-light",
  };

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === storageKey && event.newValue) {
        if (
          event.newValue !== "dark" &&
          event.newValue !== "light" &&
          event.newValue !== "system" &&
          event.newValue !== "retro-dark" &&
          event.newValue !== "retro-light"
        ) {
          return;
        }
        setTheme(event.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storageKey]);

  return (
    <ThemeProviderContext.Provider {...props} value={state}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme(): ThemeProviderState {
  const context = useContext(ThemeProviderContext);

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (context == undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  const resolvedTheme = context.appliedTheme
    ? context.appliedTheme === "system"
      ? getSystemTheme()
      : context.appliedTheme
    : context.resolvedTheme;

  const darkOrLightTheme =
    resolvedTheme === "retro-dark"
      ? "dark"
      : resolvedTheme === "retro-light"
        ? "light"
        : resolvedTheme;

  return {
    ...context,
    isDarkTheme: resolvedTheme === "dark" || resolvedTheme === "retro-dark",
    isLightTheme: resolvedTheme === "light" || resolvedTheme === "retro-light",
    isRetroTheme:
      resolvedTheme === "retro-dark" || resolvedTheme === "retro-light",
    resolvedTheme,
    theme: context.theme,
    darkOrLightTheme,
  };
}



================================================
FILE: frontend/src/ui/styles/global.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ****************************************************************************
 * [IMPORTANT]
 *
 * Most of these CSS rules/settings (esp. colors and typography settings) are
 * derived from our design system and should not be edited directly.
 *****************************************************************************/

@layer base {
  :root {
    /* App (default) font sizes */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 2rem;
    --text-4xl: 2.25rem;
    --text-5xl: 2.75rem;
    --text-6xl: 3.25rem;
    --text-7xl: 3.75rem;

    /* Colors */
    --background: theme("colors.rgb.gray.100");
    --background-muted: theme("colors.rgb.gray.200");
    --foreground: theme("colors.rgb.gray.950");
    --sidebar: theme("colors.rgb.gray.100");
    --muted: theme("colors.rgb.gray.200");
    --muted-foreground: theme("colors.rgb.gray.500");
    --muted-border: theme("colors.rgb.gray.200");
    --card: theme("colors.rgb.gray.50");
    --card-foreground: theme("colors.rgb.gray.900");
    --card-hover: theme("colors.rgb.gray.50");
    --popover: theme("colors.rgb.gray.50");
    --popover-foreground: theme("colors.rgb.gray.900");
    --border: theme("colors.rgb.gray.300");
    --input: theme("colors.rgb.gray.400");
    --switch: theme("colors.rgb.gray.300");
    --primary: theme("colors.rgb.blue.700");
    --primary-foreground: theme("colors.rgb.gray.25");
    --primary-border: theme("colors.rgb.blue.800");
    --primary-hover: theme("colors.rgb.blue.600");
    --secondary: theme("colors.rgb.gray.0");
    --secondary-border: theme("colors.rgb.gray.200");
    --secondary-foreground: theme("colors.rgb.gray.900");
    --secondary-hover: theme("colors.rgb.gray.0");
    --accent: theme("colors.rgb.gray.200");
    --accent-foreground: theme("colors.rgb.gray.900");
    --destructive: theme("colors.rgb.red.700");
    --destructive-foreground: theme("colors.rgb.gray.25");
    --destructive-border: theme("colors.rgb.red.950");
    --destructive-hover: theme("colors.rgb.red.600");
    --primary-cta: theme("colors.rgb.gray.900");
    --primary-cta-foreground: theme("colors.rgb.gray.50");
    --primary-cta-border: theme("colors.rgb.gray.800");
    --primary-cta-hover: theme("colors.rgb.gray.700");
    --ring: theme("colors.rgb.blue.600");
    --link: theme("colors.rgb.blue.500");
    --link-hover: theme("colors.rgb.blue.400");
    --skeleton: theme("colors.rgb.gray.200");
    --code: theme("colors.rgb.yellow.200");
    --chart-1-primary: theme("colors.rgb.blue.500");
    --chart-2-primary: theme("colors.rgb.green.500");
    --chart-3-primary: theme("colors.rgb.yellow.500");
    --chart-1: theme("colors.rgb.blue.600");
    --chart-2: theme("colors.rgb.blue.500");
    --chart-3: theme("colors.rgb.blue.400");
    --chart-4: theme("colors.rgb.blue.300");
    --chart-5: theme("colors.rgb.blue.700");
    --chart-6: theme("colors.rgb.blue.600");
    --chart-7: theme("colors.rgb.blue.900");
    --chart-8: theme("colors.rgb.blue.950");
    --detail-success: theme("colors.rgb.green.500");
    --detail-failure: theme("colors.rgb.red.500");
    --detail-warning: theme("colors.rgb.yellow.400");
    --detail-neutral: theme("colors.rgb.gray.200");
    --detail-brand: theme("colors.rgb.blue.500");
  }

  .dark {
    --background: theme("colors.rgb.gray.950");
    --background-muted: theme("colors.rgb.gray.900");
    --foreground: theme("colors.rgb.gray.50");
    --sidebar: theme("colors.rgb.gray.900");
    --muted: theme("colors.rgb.gray.800");
    --muted-foreground: theme("colors.rgb.gray.400");
    --muted-border: theme("colors.rgb.gray.800");
    --card: theme("colors.rgb.gray.900");
    --card-foreground: theme("colors.rgb.gray.25");
    --card-hover: theme("colors.rgb.gray.800");
    --popover: theme("colors.rgb.gray.900");
    --popover-foreground: theme("colors.rgb.gray.25");
    --border: theme("colors.rgb.gray.800");
    --input: theme("colors.rgb.gray.800");
    --switch: theme("colors.rgb.gray.600");
    --primary: theme("colors.rgb.blue.950");
    --primary-foreground: theme("colors.rgb.gray.25");
    --primary-border: theme("colors.rgb.blue.800");
    --primary-hover: theme("colors.rgb.blue.900");
    --secondary: theme("colors.rgb.gray.950");
    --secondary-border: theme("colors.rgb.gray.700");
    --secondary-foreground: theme("colors.rgb.gray.300");
    --secondary-hover: theme("colors.rgb.gray.800");
    --accent: theme("colors.rgb.gray.800");
    --accent-foreground: theme("colors.rgb.gray.25");
    --destructive: theme("colors.rgb.red.800");
    --destructive-foreground: theme("colors.rgb.gray.25");
    --destructive-border: theme("colors.rgb.red.500");
    --destructive-hover: theme("colors.rgb.red.700");
    --primary-cta: theme("colors.rgb.gray.50");
    --primary-cta-foreground: theme("colors.rgb.gray.900");
    --primary-cta-border: theme("colors.rgb.gray.200");
    --primary-cta-hover: theme("colors.rgb.gray.200");
    --ring: theme("colors.rgb.blue.500");
    --link: theme("colors.rgb.blue.500");
    --link-hover: theme("colors.rgb.blue.400");
    --skeleton: theme("colors.rgb.gray.800");
    --code: theme("colors.rgb.yellow.200");
    --chart-1-primary: theme("colors.rgb.blue.500");
    --chart-2-primary: theme("colors.rgb.green.500");
    --chart-3-primary: theme("colors.rgb.yellow.500");
    --chart-1: theme("colors.rgb.blue.600");
    --chart-2: theme("colors.rgb.blue.500");
    --chart-3: theme("colors.rgb.blue.400");
    --chart-4: theme("colors.rgb.blue.300");
    --chart-5: theme("colors.rgb.blue.700");
    --chart-6: theme("colors.rgb.blue.600");
    --chart-7: theme("colors.rgb.blue.900");
    --chart-8: theme("colors.rgb.blue.950");
    --detail-success: theme("colors.rgb.green.500");
    --detail-failure: theme("colors.rgb.red.500");
    --detail-warning: theme("colors.rgb.yellow.400");
    --detail-neutral: theme("colors.rgb.gray.200");
    --detail-brand: theme("colors.rgb.blue.500");
  }

  .retro-light {
    --background: theme("colors.rgb.retro.cream");
    --background-muted: theme("colors.rgb.retro.beige");
    --foreground: theme("colors.rgb.retro.dark.purple");
    --sidebar: theme("colors.rgb.retro.beige");
    --muted: theme("colors.rgb.retro.peach");
    --muted-foreground: theme("colors.rgb.retro.dark.slate");
    --muted-border: theme("colors.rgb.retro.rose");
    --card: theme("colors.rgb.retro.lavender");
    --card-foreground: theme("colors.rgb.retro.dark.purple");
    --card-hover: theme("colors.rgb.retro.sky");
    --popover: theme("colors.rgb.retro.lavender");
    --popover-foreground: theme("colors.rgb.retro.dark.purple");
    --border: theme("colors.rgb.retro.coral");
    --input: theme("colors.rgb.retro.rose");
    --switch: theme("colors.rgb.retro.coral");
    --primary: theme("colors.rgb.retro.teal");
    --primary-foreground: theme("colors.rgb.retro.cream");
    --primary-border: theme("colors.rgb.retro.teal");
    --primary-hover: theme("colors.rgb.retro.sky");
    --secondary: theme("colors.rgb.retro.peach");
    --secondary-border: theme("colors.rgb.retro.coral");
    --secondary-foreground: theme("colors.rgb.retro.dark.purple");
    --secondary-hover: theme("colors.rgb.retro.rose");
    --accent: theme("colors.rgb.retro.mint");
    --accent-foreground: theme("colors.rgb.retro.dark.purple");
    --destructive: theme("colors.rgb.retro.coral");
    --destructive-foreground: theme("colors.rgb.retro.cream");
    --destructive-border: theme("colors.rgb.red.400");
    --destructive-hover: theme("colors.rgb.red.300");
    --primary-cta: theme("colors.rgb.retro.amber");
    --primary-cta-foreground: theme("colors.rgb.retro.dark.purple");
    --primary-cta-border: theme("colors.rgb.retro.amber");
    --primary-cta-hover: theme("colors.rgb.yellow.300");
    --ring: theme("colors.rgb.retro.teal");
    --link: theme("colors.rgb.retro.teal");
    --link-hover: theme("colors.rgb.retro.sky");
    --skeleton: theme("colors.rgb.retro.peach");
    --code: theme("colors.rgb.retro.peach");
    --chart-1-primary: theme("colors.rgb.retro.teal");
    --chart-2-primary: theme("colors.rgb.retro.coral");
    --chart-3-primary: theme("colors.rgb.retro.amber");
    --chart-1: theme("colors.rgb.retro.teal");
    --chart-2: theme("colors.rgb.retro.mint");
    --chart-3: theme("colors.rgb.retro.sky");
    --chart-4: theme("colors.rgb.retro.coral");
    --chart-5: theme("colors.rgb.retro.amber");
    --chart-6: theme("colors.rgb.retro.lavender");
    --chart-7: theme("colors.rgb.retro.peach");
    --chart-8: theme("colors.rgb.retro.rose");
    --detail-success: theme("colors.rgb.retro.mint");
    --detail-failure: theme("colors.rgb.retro.coral");
    --detail-warning: theme("colors.rgb.retro.amber");
    --detail-neutral: theme("colors.rgb.retro.peach");
    --detail-brand: theme("colors.rgb.retro.teal");
  }

  .retro-dark {
    --background: theme("colors.rgb.gray.900");
    --background-muted: theme("colors.rgb.gray.900");
    --foreground: theme("colors.rgb.retro.beige");
    --sidebar: theme("colors.rgb.gray.900");
    --muted: theme("colors.rgb.gray.800");
    --muted-foreground: theme("colors.rgb.retro.sky");
    --muted-border: theme("colors.rgb.retro.coral");
    --card: theme("colors.rgb.gray.900");
    --card-foreground: theme("colors.rgb.retro.beige");
    --card-hover: theme("colors.rgb.gray.700");
    --popover: theme("colors.rgb.gray.800");
    --popover-foreground: theme("colors.rgb.retro.beige");
    --border: theme("colors.rgb.retro.teal");
    --input: theme("colors.rgb.retro.lavender");
    --switch: theme("colors.rgb.retro.mint");
    --primary: theme("colors.rgb.retro.sky");
    --primary-foreground: theme("colors.rgb.gray.900");
    --primary-border: theme("colors.rgb.retro.sky");
    --primary-hover: theme("colors.rgb.retro.lavender");
    --secondary: theme("colors.rgb.gray.800");
    --secondary-border: theme("colors.rgb.retro.coral");
    --secondary-foreground: theme("colors.rgb.retro.beige");
    --secondary-hover: theme("colors.rgb.gray.700");
    --accent: theme("colors.rgb.retro.peach");
    --accent-foreground: theme("colors.rgb.gray.900");
    --destructive: theme("colors.rgb.retro.coral");
    --destructive-foreground: theme("colors.rgb.gray.900");
    --destructive-border: theme("colors.rgb.retro.coral");
    --destructive-hover: theme("colors.rgb.retro.rose");
    --primary-cta: theme("colors.rgb.retro.mint");
    --primary-cta-foreground: theme("colors.rgb.gray.900");
    --primary-cta-border: theme("colors.rgb.retro.mint");
    --primary-cta-hover: theme("colors.rgb.retro.sky");
    --ring: theme("colors.rgb.retro.lavender");
    --link: theme("colors.rgb.retro.sky");
    --link-hover: theme("colors.rgb.retro.mint");
    --skeleton: theme("colors.rgb.gray.700");
    --code: theme("colors.rgb.retro.peach");
    --chart-1-primary: theme("colors.rgb.retro.mint");
    --chart-2-primary: theme("colors.rgb.retro.peach");
    --chart-3-primary: theme("colors.rgb.retro.sky");
    --chart-1: theme("colors.rgb.retro.mint");
    --chart-2: theme("colors.rgb.retro.peach");
    --chart-3: theme("colors.rgb.retro.sky");
    --chart-4: theme("colors.rgb.retro.lavender");
    --chart-5: theme("colors.rgb.retro.coral");
    --chart-6: theme("colors.rgb.retro.rose");
    --chart-7: theme("colors.rgb.retro.beige");
    --chart-8: theme("colors.rgb.retro.amber");
    --detail-success: theme("colors.rgb.retro.mint");
    --detail-failure: theme("colors.rgb.retro.coral");
    --detail-warning: theme("colors.rgb.retro.amber");
    --detail-neutral: theme("colors.rgb.retro.lavender");
    --detail-brand: theme("colors.rgb.retro.sky");
  }
}

@layer base {
  * {
    @apply border-border;
  }

  /* App styles (default) */
  h1 {
    @apply text-5xl max-sm:text-3xl font-inter font-normal leading-none tracking-tight;
  }

  h2 {
    @apply text-2xl max-sm:text-xl font-inter font-normal leading-none tracking-tight;
  }

  h3 {
    @apply text-lg max-sm:text-base font-inter font-normal leading-none tracking-tight;
  }

  h4 {
    @apply text-base max-sm:text-sm font-inter font-normal leading-none tracking-normal;
  }

  p {
    @apply text-sm font-inter font-normal leading-normal tracking-normal;
  }

  /* Marketing styles */
  .marketing {
    /* Override font sizes for marketing context */
    --text-md: 1.125rem;
    --text-lg: 1.25rem;
    --text-xl: 1.5rem;
    --text-2xl: 2rem;
    --text-3xl: 2.25rem;
    --text-4xl: 2.75rem;
    --text-5xl: 3rem;
    --text-6xl: 3.75rem;
  }

  .marketing h1 {
    @apply text-6xl max-sm:text-4xl font-newsreader font-normal leading-none tracking-tight;
  }

  .marketing h2 {
    @apply text-5xl max-sm:text-3xl font-newsreader font-normal leading-none tracking-tight;
  }

  .marketing h3 {
    @apply text-xl max-sm:text-lg font-inter font-normal leading-none tracking-tight;
  }

  .marketing h4 {
    @apply text-lg max-sm:text-base font-inter font-normal leading-none tracking-normal;
  }

  .marketing p {
    @apply text-base max-sm:text-sm font-inter font-normal leading-normal tracking-normal;
  }

  /* CMS/Sanity content styles */
  .cms.h2,
  h2.cms {
    @apply font-newsreader font-normal leading-[120%] tracking-tight;
    font-size: 36px;
    margin-bottom: 1rem;
    margin-top: 5rem;
  }

  .cms.h3,
  h3.cms {
    @apply font-inter font-normal leading-[120%] tracking-tight;
    font-size: 24px;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
  }

  .cms,
  p.cms {
    @apply font-inter font-normal tracking-normal text-foreground;
    font-size: 16px;
    line-height: 175%;
    margin-bottom: 1rem;
  }

  blockquote.cms {
    @apply font-inter font-normal italic tracking-normal;
    font-size: 20px;
    line-height: 150%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 4px solid hsl(var(--muted-foreground) / 0.3);
    color: hsl(var(--muted-foreground));
  }

  /* Mobile styles for CMS content */
  @media (max-width: 640px) {
    .cms.h2,
    h2.cms {
      font-size: 28px;
    }

    .cms.h3,
    h3.cms {
      font-size: 20px;
    }

    .cms,
    p.cms {
      font-size: 14px;
    }

    blockquote.cms {
      font-size: 18px;
    }
  }

  body {
    @apply bg-background text-foreground;
    font-feature-settings:
      "rlig" 1,
      "calt" 1;
  }
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

@layer components {
  /* Glassy card effect for dark mode */
  .dark .landing-card {
    /* Add subtle gradient overlay */
    background-image: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.02) 50%,
      transparent 100%
    );
    /* Add inset shadow for glass edge effect */
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.1),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.05);
  }

  .dark .landing-card:hover {
    /* Enhanced hover state */
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.4),
      inset 0 1px 0 0 rgba(255, 255, 255, 0.15),
      inset 0 -1px 0 0 rgba(255, 255, 255, 0.08);
  }
}

a:hover {
  color: var(--chart-1-primary);
  text-decoration: underline;
}



================================================
FILE: frontend/src/ui/utils/getThemeColor.ts
================================================
import type { ThemeColorName } from "../constants/ColorSystem";
import { ColorSystem } from "../constants/ColorSystem";

export function getThemeColor(
  resolvedTheme: "dark" | "light",
  themeColorName: ThemeColorName,
) {
  return ColorSystem.TailwindThemeColors[resolvedTheme][themeColorName];
}



================================================
FILE: frontend/src/utils/api.ts
================================================
import * as pako from "pako";

/**
 * API base URL, configurable via VITE_API_URL environment variable.
 * Defaults to "/api" for local development with proxy.
 */
export const API_URL = import.meta.env.VITE_API_URL ?? "/api";

/**
 * Constructs a full API URL by appending the path to the base API URL.
 */
export function getApiUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  // Remove /api prefix from path if present, since it's in the base URL
  const finalPath = cleanPath.startsWith("api/")
    ? cleanPath.slice(4)
    : cleanPath;
  return `${API_URL}/${finalPath}`;
}

/**
 * Fetch and decompress gzip-compressed JSON responses from the API.
 * Handles both compressed and uncompressed responses transparently.
 */
export async function fetchCompressed<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const isCompressed = response.headers.get("X-Content-Compressed");
  const contentType = response.headers.get("Content-Type") ?? "";

  // If the response is gzip-compressed or binary, try to decompress
  if (isCompressed === "gzip" || contentType.includes("octet-stream")) {
    try {
      const arrayBuffer = await response.arrayBuffer();
      // Try to decompress
      const decompressed = pako.ungzip(new Uint8Array(arrayBuffer), {
        to: "string",
      });
      return JSON.parse(decompressed) as T;
    } catch (err) {
      // If decompression fails, the response might already be decompressed
      // Try to parse as JSON directly
      console.warn("Decompression failed, trying as plain JSON", err);
      const text = await response.text();
      return JSON.parse(text) as T;
    }
  }

  // Otherwise, parse as regular JSON
  return (await response.json()) as T;
}



================================================
FILE: frontend/src/utils/layoutTransforms.ts
================================================
export type LayoutType =
  | "original"
  | "sphere"
  | "galaxy"
  | "wave"
  | "helix"
  | "torus";

export interface Point3D {
  x: number;
  y: number;
  z: number;
}

export interface TransformConfig {
  clusterId: number;
  clusterIndex: number;
  totalClusters: number;
  pointIndex: number;
  totalPoints: number;
}

/**
 * Original layout - no transformation, uses UMAP/t-SNE coordinates as-is
 */
export function originalTransform(point: Point3D): Point3D {
  return { ...point };
}

/**
 * Sphere layout - maps clusters to a spherical surface
 * Each cluster occupies a sector of the sphere
 */
export function sphereTransform(
  point: Point3D,
  config: TransformConfig,
  bounds: { minX: number; maxX: number; minY: number; maxY: number },
): Point3D {
  // Normalize coordinates to 0-1 range
  const u = (point.x - bounds.minX) / (bounds.maxX - bounds.minX || 1);
  const v = (point.y - bounds.minY) / (bounds.maxY - bounds.minY || 1);

  // Assign cluster to a sector using fibonacci sphere distribution
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)); // ~2.399
  const clusterTheta = config.clusterIndex * goldenAngle;
  const clusterPhi = Math.acos(
    1 - (2 * (config.clusterIndex + 0.5)) / config.totalClusters,
  );

  // Sector size based on number of clusters
  const sectorSize = Math.PI / Math.sqrt(config.totalClusters);

  // Convert normalized coordinates to angles within the sector
  const theta = clusterTheta + (u - 0.5) * sectorSize;
  const phi = clusterPhi + (v - 0.5) * sectorSize * 0.5;

  // Base radius with slight variation based on z coordinate
  const radius = 100 + (point.z || 0) * 0.5;

  // Convert spherical to cartesian coordinates
  return {
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.sin(phi) * Math.sin(theta),
    z: radius * Math.cos(phi),
  };
}

/**
 * Galaxy spiral layout - creates spiral arms like a galaxy
 * Clusters are distributed as spiral arms radiating from center
 */
export function galaxyTransform(
  point: Point3D,
  config: TransformConfig,
  bounds: { minX: number; maxX: number; minY: number; maxY: number },
): Point3D {
  // Normalize coordinates to 0-1 range
  const normalizedX =
    (point.x - bounds.minX) / (bounds.maxX - bounds.minX || 1);
  const normalizedY =
    (point.y - bounds.minY) / (bounds.maxY - bounds.minY || 1);

  // Number of spiral arms (max 8 for visual clarity)
  const armCount = Math.min(8, Math.max(3, config.totalClusters));
  const armIndex = config.clusterIndex % armCount;

  // Base angle for this arm (evenly distributed around circle)
  const baseAngle = (armIndex / armCount) * 2 * Math.PI;

  // Distance from center increases with point position
  // Mix in original coordinates for organic distribution
  const distanceFromCenter = 20 + normalizedX * 80 + config.pointIndex * 0.02;

  // Spiral tightness (how much the arm curves)
  const spiralTightness = 0.15;
  const spiralAngle = baseAngle + distanceFromCenter * spiralTightness;

  // Add local variation based on original y coordinate
  const offsetAngle = (normalizedY - 0.5) * 0.3;
  const offsetRadius = (normalizedY - 0.5) * 10;

  const finalAngle = spiralAngle + offsetAngle;
  const finalRadius = distanceFromCenter + offsetRadius;

  // Height variation based on z coordinate (flattened galaxy)
  const height = (point.z || 0) * 0.2 + (normalizedY - 0.5) * 5;

  return {
    x: finalRadius * Math.cos(finalAngle),
    y: finalRadius * Math.sin(finalAngle),
    z: height,
  };
}

/**
 * Wave/Terrain layout - creates undulating wave patterns
 * Produces a topographic-like terrain with peaks and valleys
 */
export function waveTransform(
  point: Point3D,
  config: TransformConfig,
): Point3D {
  const x = point.x || 0;
  const y = point.y || 0;

  // Wave parameters
  const frequency = 0.03;
  const amplitude = 25;

  // Create interference pattern with multiple waves
  const wave1 = Math.sin(x * frequency) * amplitude;
  const wave2 = Math.cos(y * frequency) * amplitude;
  const wave3 = Math.sin((x + y) * frequency * 0.7) * amplitude * 0.5;
  const wave4 = Math.cos((x - y) * frequency * 0.5) * amplitude * 0.3;

  // Cluster-based layer offset creates distinct "elevation zones"
  const clusterOffset = (config.clusterIndex / config.totalClusters) * 40 - 20;

  // Combine all waves and add cluster offset
  const finalZ = wave1 + wave2 + wave3 + wave4 + clusterOffset;

  return {
    x: x,
    y: y,
    z: finalZ,
  };
}

/**
 * Helix/DNA Spiral layout - creates a spiral helix ascending pattern
 * Clusters wrap around a helix like DNA strands
 */
export function helixTransform(
  point: Point3D,
  config: TransformConfig,
  bounds: { minX: number; maxX: number; minY: number; maxY: number },
): Point3D {
  // Normalize coordinates to 0-1 range
  const normalizedX =
    (point.x - bounds.minX) / (bounds.maxX - bounds.minX || 1);
  const normalizedY =
    (point.y - bounds.minY) / (bounds.maxY - bounds.minY || 1);

  // Each cluster gets a section of the helix
  const clusterProgress = config.clusterIndex / config.totalClusters;
  const pointProgress = config.pointIndex / config.totalPoints;
  const totalProgress = clusterProgress + pointProgress / config.totalClusters;

  // Helix parameters
  const turns = 4; // Number of complete spiral turns
  const angle = totalProgress * turns * 2 * Math.PI;
  const height = totalProgress * 300 - 150; // Vertical spread, centered

  // Base radius with variation based on original x coordinate
  const radiusBase = 40;
  const radiusVariation = normalizedX * 15;
  const radius = radiusBase + radiusVariation;

  // Add some "wobble" based on y coordinate for organic feel
  const wobble = Math.sin(angle * 3) * normalizedY * 5;

  return {
    x: (radius + wobble) * Math.cos(angle),
    y: (radius + wobble) * Math.sin(angle),
    z: height + (point.z || 0) * 0.1, // Small local variation
  };
}

/**
 * Torus (donut) layout - wraps clusters around a torus surface
 * Creates a continuous loop with interesting topology
 */
export function torusTransform(
  point: Point3D,
  config: TransformConfig,
  bounds: { minX: number; maxX: number; minY: number; maxY: number },
): Point3D {
  // Normalize coordinates to 0-1 range
  const u = (point.x - bounds.minX) / (bounds.maxX - bounds.minX || 1);
  const v = (point.y - bounds.minY) / (bounds.maxY - bounds.minY || 1);

  // Torus parameters
  const majorRadius = 60; // Distance from center to tube center
  const minorRadius = 25; // Tube radius

  // Calculate angles based on cluster and point position
  // Major angle (around the torus)
  const clusterAngleOffset =
    (config.clusterIndex / config.totalClusters) * 2 * Math.PI;
  const majorSectorSize = (2 * Math.PI) / Math.max(config.totalClusters, 1);
  const theta = clusterAngleOffset + (u - 0.5) * majorSectorSize;

  // Minor angle (around the tube)
  const phi = v * 2 * Math.PI;

  // Add slight variation based on z coordinate
  const radiusVariation = (point.z || 0) * 0.1;

  // Torus parametric equations
  const x =
    (majorRadius + (minorRadius + radiusVariation) * Math.cos(phi)) *
    Math.cos(theta);
  const y =
    (majorRadius + (minorRadius + radiusVariation) * Math.cos(phi)) *
    Math.sin(theta);
  const z = (minorRadius + radiusVariation) * Math.sin(phi);

  return { x, y, z };
}

/**
 * Apply the appropriate transform based on layout type
 */
export function applyLayoutTransform(
  points: Point3D[],
  layoutType: LayoutType,
  config: Omit<TransformConfig, "pointIndex" | "totalPoints">,
): Point3D[] {
  if (layoutType === "original") {
    return points.map(originalTransform);
  }

  // Calculate bounds for normalization
  const bounds = {
    minX: Math.min(...points.map((p) => p.x)),
    maxX: Math.max(...points.map((p) => p.x)),
    minY: Math.min(...points.map((p) => p.y)),
    maxY: Math.max(...points.map((p) => p.y)),
  };

  return points.map((point, index) => {
    const fullConfig: TransformConfig = {
      ...config,
      pointIndex: index,
      totalPoints: points.length,
    };

    switch (layoutType) {
      case "sphere":
        return sphereTransform(point, fullConfig, bounds);
      case "galaxy":
        return galaxyTransform(point, fullConfig, bounds);
      case "wave":
        return waveTransform(point, fullConfig);
      case "helix":
        return helixTransform(point, fullConfig, bounds);
      case "torus":
        return torusTransform(point, fullConfig, bounds);
      default:
        return point;
    }
  });
}

/**
 * Get optimal camera position for each layout type
 */
export function getCameraForLayout(layoutType: LayoutType): {
  eye: Point3D;
  center: Point3D;
  up: Point3D;
} {
  switch (layoutType) {
    case "sphere":
      return {
        eye: { x: 2, y: 2, z: 1.5 },
        center: { x: 0, y: 0, z: 0 },
        up: { x: 0, y: 0, z: 1 },
      };
    case "galaxy":
      return {
        eye: { x: 0.2, y: 0.2, z: 2.5 }, // Top-down view for galaxy
        center: { x: 0, y: 0, z: 0 },
        up: { x: 0, y: 1, z: 0 },
      };
    case "wave":
      return {
        eye: { x: 2, y: 1, z: 1 }, // Side angle for terrain
        center: { x: 0, y: 0, z: 0 },
        up: { x: 0, y: 0, z: 1 },
      };
    case "helix":
      return {
        eye: { x: 1.5, y: 1.5, z: 1 }, // Angled view to see spiral
        center: { x: 0, y: 0, z: 0 },
        up: { x: 0, y: 0, z: 1 },
      };
    case "torus":
      return {
        eye: { x: 1.8, y: 1.8, z: 1.2 }, // Elevated angle to see donut shape
        center: { x: 0, y: 0, z: 0 },
        up: { x: 0, y: 0, z: 1 },
      };
    case "original":
    default:
      return {
        eye: { x: 0.6, y: 0.6, z: 0.6 },
        center: { x: 0, y: 0, z: 0 },
        up: { x: 0, y: 0, z: 1 },
      };
  }
}



================================================
FILE: frontend/src/utils/routeMapping.ts
================================================
export type ViewMode =
  | "3d"
  | "heatmap"
  | "stacked"
  | "distribution"
  | "samples"
  | "force";

export const VIEW_MODE_TO_ROUTE: Record<ViewMode, string> = {
  "3d": "/embeddings",
  force: "/force-layout",
  distribution: "/distribution-chart",
  samples: "/paper-explorer",
  heatmap: "/heatmap",
  stacked: "/stacked-chart",
};

export const ROUTE_TO_VIEW_MODE: Record<string, ViewMode> = {
  "/embeddings": "3d",
  "/force-layout": "force",
  "/distribution-chart": "distribution",
  "/paper-explorer": "samples",
  "/heatmap": "heatmap",
  "/stacked-chart": "stacked",
  "/": "3d", // default route
};

export function getViewModeFromPath(path: string): ViewMode {
  // Handle paper-explorer with optional index
  if (path.startsWith("/paper-explorer")) {
    return "samples";
  }
  return ROUTE_TO_VIEW_MODE[path] ?? "3d";
}

export function getPathFromViewMode(
  viewMode: ViewMode,
  paperIndex?: number,
): string {
  const basePath = VIEW_MODE_TO_ROUTE[viewMode];
  if (viewMode === "samples" && paperIndex !== undefined) {
    // Convert 0-based internal index to 1-based URL index for human readability
    return `${basePath}/${paperIndex + 1}`;
  }
  return basePath;
}

export function getPaperIndexFromPath(path: string): number | null {
  const match = path.match(/^\/paper-explorer\/(\d+)$/);
  if (match?.[1]) {
    const urlIndex = parseInt(match[1], 10);
    if (isNaN(urlIndex) || urlIndex < 1) {
      return null;
    }
    // Convert 1-based URL index to 0-based internal index
    return urlIndex - 1;
  }
  return null;
}



================================================
FILE: .github/workflows/pr-checks.yml
================================================
name: PR Checks

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v4

    - name: Install Task
      uses: arduino/setup-task@v2
      with:
        version: 3.x

    - name: Set up Python
      uses: actions/setup-python@v5
      with:
        python-version: '3.11'

    - name: Install uv
      uses: astral-sh/setup-uv@v4
      with:
        version: "latest"

    - name: Setup Bun
      uses: oven-sh/setup-bun@v2
      with:
        bun-version: latest

    - name: Install backend dependencies
      run: task backend:setup

    - name: Install frontend dependencies
      run: task frontend:setup

    - name: Run checks (formatting, linting, TypeScript)
      run: task check


