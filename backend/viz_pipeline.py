import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.decomposition import TruncatedSVD
from sklearn.cluster import KMeans
import umap.umap_ as umap

def generate_map_data(df: pd.DataFrame, n_clusters=15):
    """
    Generates 2D coordinates and clusters for the researchers using TF-IDF + UMAP.
    """
    # 1. Prepare Text Data
    # Combine relevant fields to create a rich semantic representation
    # User requested to cluster by organization and about section, avoiding position/title.
    text_data = (
        df["company"].fillna("") + " " +
        df["about"].fillna("") + " " +
        df["source_query"].fillna("")  # source_query often contains the search term/topic
    ).tolist()

    # 2. Vectorize (TF-IDF)
    # Use unigrams and bigrams, limit features
    tfidf = TfidfVectorizer(stop_words='english', max_features=5000, ngram_range=(1, 2))
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
    kmeans = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
    clusters = kmeans.fit_predict(reduced_matrix)

    # 6. Generate Cluster Labels (Top terms per cluster)
    # We find the nearest term in TF-IDF space or just aggregation
    cluster_labels = {}
    feature_names = np.array(tfidf.get_feature_names_out())
    
    for i in range(n_clusters):
        # Get average vector for this cluster
        center = tfidf_matrix[clusters == i].mean(axis=0)
        # Get top indices
        top_indices = np.argsort(np.asarray(center).flatten())[::-1][:3]
        top_terms = feature_names[top_indices]
        # Join terms to make a label like "vision computer deep"
        cluster_labels[i] = " ".join(top_terms)

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
