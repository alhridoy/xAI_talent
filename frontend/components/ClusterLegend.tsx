import React, { useState, useMemo } from 'react';
import { Search, Check, X } from 'lucide-react';

interface ClusterInfo {
  cluster_id: number;
  cluster_label: string;
  count: number;
  color: string;
}

interface ClusterLegendProps {
  clusters: ClusterInfo[];
  selectedClusterIds: Set<number>;
  onToggleCluster: (clusterId: number) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

export default function ClusterLegend({
  clusters,
  selectedClusterIds,
  onToggleCluster,
  onSelectAll,
  onClearAll,
}: ClusterLegendProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredClusters = useMemo(() => {
    return clusters.filter(c => 
      c.cluster_label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [clusters, searchQuery]);

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 w-80 flex-shrink-0">
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-bold text-lg mb-4">Dataset Clusters</h3>
        
        <div className="relative mb-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search clusters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex gap-2">
          <button
            onClick={onSelectAll}
            className="flex-1 px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
          >
            Select All
          </button>
          <button
            onClick={onClearAll}
            className="flex-1 px-3 py-1.5 text-xs font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors"
          >
            Clear All
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {filteredClusters.map((cluster) => {
          const isSelected = selectedClusterIds.has(cluster.cluster_id);
          
          return (
            <button
              key={cluster.cluster_id}
              onClick={() => onToggleCluster(cluster.cluster_id)}
              className={`
                w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-all
                ${isSelected ? 'bg-gray-50' : 'opacity-60 hover:bg-gray-50 hover:opacity-80'}
              `}
            >
              <div
                className="w-4 h-4 rounded-sm flex-shrink-0"
                style={{ backgroundColor: cluster.color }}
              />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {cluster.cluster_label}
                </div>
                <div className="text-xs text-gray-500">
                  {cluster.count} researchers
                </div>
              </div>
              {isSelected && (
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
              )}
            </button>
          );
        })}
        
        {filteredClusters.length === 0 && (
          <div className="p-4 text-center text-sm text-gray-500">
            No clusters found
          </div>
        )}
      </div>
    </div>
  );
}
