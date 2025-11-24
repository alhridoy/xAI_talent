#!/usr/bin/env python3
"""
Advanced Researcher Clustering & Visualization
============================================
This script performs semantic clustering of researcher profiles using a hybrid approach:
1. Embeddings: OpenAI (if available) or TF-IDF (fallback)
2. Dimensionality Reduction: UMAP
3. Clustering: HDBSCAN (density-based)
4. Visualization: Plotly (interactive)

It is designed to be robust to missing fields and provides detailed cluster analysis.
"""

import json
import os
import numpy as np
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from typing import List, Dict, Any, Optional
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import HDBSCAN
from sklearn.manifold import TSNE
try:
    import umap
except ImportError:
    import umap.umap_ as umap
from tqdm import tqdm
import time

# Try to import OpenAI, but don't fail if missing
try:
    from openai import OpenAI
    OPENAI_AVAILABLE = True
except ImportError:
    OPENAI_AVAILABLE = False

# Configuration
INPUT_FILE = 'data/filtered_researchers_20251123_143426.json'
OUTPUT_HTML = 'data/researchers_cluster_viz.html'
OUTPUT_JSON = 'data/researchers_clustered_results.json'

def load_data(filepath: str) -> List[Dict[str, Any]]:
    print(f"Loading data from {filepath}...")
    with open(filepath, 'r') as f:
        data = json.load(f)
    print(f"Loaded {len(data)} researchers.")
    return data

def create_rich_text_profile(researcher: Dict[str, Any]) -> str:
    """
    Constructs a text representation using ONLY the title/role as requested.
    """
    # 1. Title/Role (High signal)
    title = researcher.get('title') or researcher.get('current_role')
    if title:
        return title
    
    # Fallback if title is missing (should be rare for this dataset)
    return "Unknown Role"

def get_embeddings_openai(texts: List[str], api_key: str) -> np.ndarray:
    """Get embeddings using OpenAI's API."""
    print("Generating embeddings using OpenAI text-embedding-3-small...")
    client = OpenAI(api_key=api_key)
    
    embeddings = []
    batch_size = 50 # Conservative batch size
    
    for i in tqdm(range(0, len(texts), batch_size)):
        batch = texts[i:i+batch_size]
        try:
            response = client.embeddings.create(
                input=batch,
                model="text-embedding-3-small"
            )
            batch_embeddings = [d.embedding for d in response.data]
            embeddings.extend(batch_embeddings)
        except Exception as e:
            print(f"Error in batch {i}: {e}")
            # Fallback for failed batch: zero vectors? Or retry?
            # For simplicity in this script, we'll skip or fill with zeros
            # ideally we should retry.
            embeddings.extend([[0.0]*1536] * len(batch))
            
    return np.array(embeddings)

def get_embeddings_tfidf(texts: List[str]) -> np.ndarray:
    """Get embeddings using TF-IDF (fallback)."""
    print("Generating embeddings using TF-IDF (local fallback)...")
    vectorizer = TfidfVectorizer(
        max_features=2000,
        stop_words='english',
        min_df=2,
        ngram_range=(1, 2)
    )
    # Return dense array for UMAP
    return vectorizer.fit_transform(texts).toarray()

def extract_cluster_labels(texts: List[str], labels: np.ndarray) -> Dict[int, str]:
    """
    Extracts keywords for each cluster using TF-IDF class-based extraction.
    """
    print("Generating cluster labels...")
    df = pd.DataFrame({'text': texts, 'label': labels})
    
    # Group text by cluster
    cluster_text = df.groupby('label')['text'].apply(' '.join)
    
    # TF-IDF on cluster texts to find distinctive words
    tfidf = TfidfVectorizer(stop_words='english', max_features=100)
    tfidf_matrix = tfidf.fit_transform(cluster_text.values)
    feature_names = np.array(tfidf.get_feature_names_out())
    
    cluster_labels_map = {}
    unique_labels = cluster_text.index.tolist()
    
    for idx, label_id in enumerate(unique_labels):
        if label_id == -1:
            cluster_labels_map[label_id] = "Noise / Outliers"
            continue
            
        # Get top 3 words
        row = tfidf_matrix[idx].toarray().flatten()
        top_indices = row.argsort()[-3:][::-1]
        top_words = feature_names[top_indices]
        cluster_labels_map[label_id] = ", ".join(top_words)
        
    return cluster_labels_map

def main():
    # 1. Load Data
    if not os.path.exists(INPUT_FILE):
        print(f"Error: Input file {INPUT_FILE} not found.")
        return
    
    researchers = load_data(INPUT_FILE)
    
    # Limit for testing if needed, but we'll process all if possible
    # researchers = researchers[:500] 
    
    # 2. Preprocessing
    print("Creating text profiles...")
    profile_texts = [create_rich_text_profile(r) for r in researchers]
    
    # 3. Embeddings
    api_key = os.environ.get('OPENAI_API_KEY')
    if api_key and OPENAI_AVAILABLE:
        embeddings = get_embeddings_openai(profile_texts, api_key)
    else:
        if not api_key:
            print("Notice: OPENAI_API_KEY not found in environment.")
        if not OPENAI_AVAILABLE:
            print("Notice: openai package not installed.")
        embeddings = get_embeddings_tfidf(profile_texts)

    # 4. Dimensionality Reduction (UMAP)
    print("Reducing dimensions with UMAP...")
    reducer = umap.UMAP(
        n_components=2,
        n_neighbors=15,
        min_dist=0.1,
        metric='cosine', # Cosine is best for text/embeddings
        random_state=42
    )
    projections = reducer.fit_transform(embeddings)
    
    # 5. Clustering (HDBSCAN)
    print("Clustering with HDBSCAN...")
    # min_cluster_size: smallest size grouping that you wish to consider a cluster
    # min_samples: how conservative you want the clustering to be (larger = more noise)
    clusterer = HDBSCAN(
        min_cluster_size=min(10, len(researchers)//20 + 1), 
        min_samples=5,
        metric='euclidean' # UMAP output is Euclidean space
    )
    labels = clusterer.fit_predict(projections)
    
    num_clusters = len(set(labels)) - (1 if -1 in labels else 0)
    print(f"Found {num_clusters} clusters (and {list(labels).count(-1)} noise points).")
    
    # 6. Labeling
    cluster_names = extract_cluster_labels(profile_texts, labels)
    
    # 7. Prepare Visualization Data
    plot_data = []
    for i, r in enumerate(researchers):
        label_id = int(labels[i])
        cluster_name = cluster_names.get(label_id, f"Cluster {label_id}")
        
        # Enrich researcher object with results
        r['cluster_id'] = label_id
        r['cluster_name'] = cluster_name
        r['umap_x'] = float(projections[i, 0])
        r['umap_y'] = float(projections[i, 1])
        
        # Hover text
        hover_text = (
            f"<b>{r.get('name', 'Unknown')}</b><br>"
            f"{r.get('title', '')}<br>"
            f"<i>{r.get('company', '')}</i><br><br>"
            f"Cluster: {cluster_name}"
        )
        
        plot_data.append({
            'x': r['umap_x'],
            'y': r['umap_y'],
            'cluster': cluster_name,
            'name': r.get('name', 'Unknown'),
            'hover_text': hover_text,
            'size': 10 # Base size
        })
        
    # 8. Create Plotly Chart
    print("Creating interactive visualization...")
    df_plot = pd.DataFrame(plot_data)
    
    fig = px.scatter(
        df_plot,
        x='x',
        y='y',
        color='cluster',
        hover_name='name',
        custom_data=['hover_text'],
        title='AI Researcher Landscape (Semantic Clustering)',
        labels={'cluster': 'Research Focus'},
        height=800
    )
    
    fig.update_traces(
        hovertemplate="%{customdata[0]}<extra></extra>"
    )
    
    fig.update_layout(
        plot_bgcolor='white',
        hoverlabel=dict(bgcolor="white", font_size=12),
        xaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
        yaxis=dict(showgrid=False, zeroline=False, showticklabels=False)
    )
    
    fig.write_html(OUTPUT_HTML)
    print(f"Visualization saved to {OUTPUT_HTML}")
    
    # 9. Save enriched JSON
    with open(OUTPUT_JSON, 'w') as f:
        json.dump(researchers, f, indent=2)
    print(f"Enriched data saved to {OUTPUT_JSON}")

if __name__ == "__main__":
    main()
