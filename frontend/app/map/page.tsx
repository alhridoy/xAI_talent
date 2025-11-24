'use client';

import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import ClusterVisualization from '@/components/ClusterVisualization';
import ClusterLegend from '@/components/ClusterLegend';
import { ArrowLeft, Loader2, Settings2 } from 'lucide-react';
import { MapPoint } from '@/types/researcher';
import { LayoutType } from '@/utils/layoutTransforms';

const CLUSTER_COLORS = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
  '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
  '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5',
  '#393b79', '#637939', '#8c6d31', '#843c39', '#7b4173',
  '#5254a3', '#8ca252', '#bd9e39', '#ad494a', '#a55194',
];

export default function MapPage() {
  const [data, setData] = useState<MapPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedClusterIds, setSelectedClusterIds] = useState<Set<number>>(new Set());
  
  // Controls
  const [layoutType, setLayoutType] = useState<LayoutType>('original');
  const [densityPercent, setDensityPercent] = useState(100);
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/map');
        setData(response.data);
        // Select all clusters by default
        const allIds = new Set(response.data.map((p: MapPoint) => p.cluster));
        setSelectedClusterIds(allIds);
      } catch (err) {
        setError('Failed to load map data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchMapData();
  }, []);

  const clusters = useMemo(() => {
    const clusterCounts = new Map<number, number>();
    const clusterLabels = new Map<number, string>();
    
    data.forEach(point => {
      clusterCounts.set(point.cluster, (clusterCounts.get(point.cluster) || 0) + 1);
      if (!clusterLabels.has(point.cluster)) {
        clusterLabels.set(point.cluster, point.cluster_label);
      }
    });

    return Array.from(clusterCounts.entries()).map(([id, count]) => ({
      cluster_id: id,
      cluster_label: clusterLabels.get(id) || `Cluster ${id}`,
      count,
      color: CLUSTER_COLORS[id % CLUSTER_COLORS.length]
    })).sort((a, b) => a.cluster_label.localeCompare(b.cluster_label));
  }, [data]);

  const handleToggleCluster = (id: number) => {
    const newSet = new Set(selectedClusterIds);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedClusterIds(newSet);
  };

  const handleSelectAll = () => {
    const allIds = new Set(clusters.map(c => c.cluster_id));
    setSelectedClusterIds(allIds);
  };

  const handleClearAll = () => {
    setSelectedClusterIds(new Set());
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 flex flex-col h-screen overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b bg-white z-20 flex-shrink-0">
        <div className="flex items-center gap-4">
          <Link 
            href="/" 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-black">
              Research Landscape
            </h1>
            <p className="text-xs text-gray-500">
              {data.length.toLocaleString()} researchers in {clusters.length} clusters
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Layout Control */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-gray-500 uppercase">Layout</span>
            <select 
              value={layoutType} 
              onChange={(e) => setLayoutType(e.target.value as LayoutType)}
              className="bg-gray-50 border rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="original">Embeddings (Original)</option>
              <option value="sphere">Sphere</option>
              <option value="galaxy">Galaxy</option>
              <option value="wave">Wave</option>
              <option value="helix">Helix</option>
              <option value="torus">Torus</option>
            </select>
          </div>

          {/* Density Control */}
          <div className="flex items-center gap-2 w-48">
            <span className="text-xs font-medium text-gray-500 uppercase">Density</span>
            <input 
              type="range" 
              min="1" 
              max="100" 
              value={densityPercent}
              onChange={(e) => setDensityPercent(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="text-xs font-mono w-8">{densityPercent}%</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <ClusterLegend 
          clusters={clusters}
          selectedClusterIds={selectedClusterIds}
          onToggleCluster={handleToggleCluster}
          onSelectAll={handleSelectAll}
          onClearAll={handleClearAll}
        />

        {/* Visualization */}
        <div className="flex-1 relative bg-gray-50">
          <ClusterVisualization 
            data={data}
            selectedClusterIds={selectedClusterIds}
            layoutType={layoutType}
            densityPercent={densityPercent}
            showLabels={showLabels}
          />
        </div>
      </div>
    </div>
  );
}

