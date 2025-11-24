export interface KnowledgeGraphNode {
  id: string;
  name: string;
  type: string;
  title?: string;
  summary?: string;
  impact?: string;
  description?: string;
  image_url?: string;
  linkedin_url?: string;
  google_scholar?: string;
  personal_website?: string;
  metrics?: {
    centrality: number;
    degree: number;
    community: number;
  };
  // Pre-computed layout coordinates (from backend NetworkX)
  fx?: number;
  fy?: number;
  fz?: number;
  x?: number;
  y?: number;
  z?: number;
  [key: string]: unknown;
}

export interface KnowledgeGraphEdge {
  source: string;
  target: string;
  relationship: string;
  properties?: Record<string, unknown>;
}

export interface KnowledgeGraphResponse {
  nodes: KnowledgeGraphNode[];
  edges: KnowledgeGraphEdge[];
  meta?: {
    node_types?: string[];
    counts?: {
      nodes: number;
      edges: number;
    };
  };
}
