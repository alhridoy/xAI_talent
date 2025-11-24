export interface Researcher {
  name: string;
  title: string;
  company: string;
  location: string;
  linkedin_url?: string;
  twitter?: string;
  google_scholar?: string;
  github?: string;
  personal_website?: string;
  about?: string;
  current_role?: string;
  total_publications: number;
  total_patents: number;
  source_query: string;
}

export interface MapPoint {
  id: string;
  x: number;
  y: number;
  z: number;
  cluster: number;
  cluster_label: string;
  name: string;
  company: string;
  title: string;
}

export interface SearchResponse {
  researchers: Researcher[];
  total: number;
}
