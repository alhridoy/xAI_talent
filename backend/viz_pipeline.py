import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD
from sklearn.cluster import KMeans
import umap.umap_ as umap

def generate_map_data(df: pd.DataFrame, n_clusters=12):
    """
    Generates 3D coordinates and clusters for the researchers using TF-IDF + UMAP.
    Clustering based on Rich Text Profile (About + Title + Role) to capture research identity.
    """
    # 1. Prepare Text Data
    # Strategy: Use ONLY company/organization as requested
    # This groups researchers by where they work (Google DeepMind, Meta, etc.)
    
    text_data = df["company"].fillna("").tolist()

    # 2. Vectorize (TF-IDF)
    # Use unigrams and bigrams to capture terms like "Large Language Model"
    tfidf = TfidfVectorizer(
        stop_words='english', 
        max_features=5000, 
        ngram_range=(1, 2),
        min_df=2 # Ignore terms that appear in only 1 document
    )
    tfidf_matrix = tfidf.fit_transform(text_data)

    # 3. Initial Dimension Reduction (LSA/SVD)
    # UMAP works better if we reduce sparse high-dim data to dense lower-dim first
    n_components = min(50, tfidf_matrix.shape[1] - 1)
    if n_components < 2:
        n_components = 2 # fallback for tiny datasets
        
    svd = TruncatedSVD(n_components=n_components, random_state=42)
    reduced_matrix = svd.fit_transform(tfidf_matrix)

    # 4. UMAP Projection (3D)
    reducer = umap.UMAP(
        n_components=3,
        n_neighbors=15,
        min_dist=0.1,
        metric='cosine',
        random_state=42
    )
    embedding_3d = reducer.fit_transform(reduced_matrix)

    # 5. Clustering (K-Means)
    # Increase clusters slightly to separate distinct companies better
    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
    clusters = kmeans.fit_predict(reduced_matrix)

    # 6. Generate Cluster Labels (Most Frequent Company Name)
    # Instead of TF-IDF keywords (which gives "university university"), we use the
    # most common actual company name in the cluster.
    cluster_labels = {}
    df["cluster_temp"] = clusters
    
    for i in range(n_clusters):
        # Get companies in this cluster
        companies_in_cluster = df[df["cluster_temp"] == i]["company"]
        if not companies_in_cluster.empty:
            # Get the most frequent company name
            # mode() returns a Series, take the first item
            top_company = companies_in_cluster.mode().iloc[0]
            if not top_company:
                 top_company = "Unknown"
            cluster_labels[i] = top_company
        else:
            cluster_labels[i] = f"Cluster {i}"
            
    # Remove temp column
    df.drop(columns=["cluster_temp"], inplace=True)

    # 7. Combine results
    results = []
    for idx, row in df.iterrows():
        results.append({
            "id": f"researcher:{idx}",
            "x": float(embedding_3d[idx, 0]),
            "y": float(embedding_3d[idx, 1]),
            "z": float(embedding_3d[idx, 2]),
            "cluster": int(clusters[idx]),
            "cluster_label": cluster_labels[int(clusters[idx])],
            "name": row.get("name", ""),
            "company": row.get("company", ""),
            "title": row.get("title", ""),
        })

    return results
