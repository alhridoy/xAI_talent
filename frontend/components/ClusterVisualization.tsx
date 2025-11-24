import React, { useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPoint } from '@/types/researcher';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { LayoutType, applyLayoutTransform, getCameraForLayout } from '@/utils/layoutTransforms';

// Dynamically import Plotly to avoid SSR issues
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });

const CLUSTER_COLORS = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
  '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
  '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5',
  '#393b79', '#637939', '#8c6d31', '#843c39', '#7b4173',
  '#5254a3', '#8ca252', '#bd9e39', '#ad494a', '#a55194',
];

interface ClusterVisualizationProps {
  data: MapPoint[];
  selectedClusterIds: Set<number>;
  layoutType: LayoutType;
  densityPercent: number;
  showLabels: boolean;
}

export default function ClusterVisualization({ 
  data, 
  selectedClusterIds, 
  layoutType,
  densityPercent,
  showLabels 
}: ClusterVisualizationProps) {
  const [plotData, setPlotData] = useState<any[]>([]);

  useEffect(() => {
    if (data.length === 0) return;

    // Group by cluster
    const clusterMap = new Map<number, MapPoint[]>();
    data.forEach(point => {
      if (selectedClusterIds.size > 0 && !selectedClusterIds.has(point.cluster)) {
        return;
      }
      if (!clusterMap.has(point.cluster)) {
        clusterMap.set(point.cluster, []);
      }
      clusterMap.get(point.cluster)?.push(point);
    });

    // Create traces
    const traces = Array.from(clusterMap.entries()).map(([clusterId, points], index) => {
      // Sample points based on density
      const targetCount = Math.ceil((points.length * densityPercent) / 100);
      const sampledPoints = points.slice(0, targetCount);

      const color = CLUSTER_COLORS[clusterId % CLUSTER_COLORS.length];
      const originalPoints = sampledPoints.map(p => ({ x: p.x, y: p.y, z: p.z }));
      
      const transformedPoints = applyLayoutTransform(
        originalPoints,
        layoutType,
        {
          clusterId,
          clusterIndex: index,
          totalClusters: clusterMap.size
        }
      );

      const trace: any = {
        x: transformedPoints.map(p => p.x),
        y: transformedPoints.map(p => p.y),
        z: transformedPoints.map(p => p.z),
        mode: 'markers',
        type: 'scatter3d',
        name: points[0].cluster_label,
        text: sampledPoints.map(p => 
          `<b>${p.name}</b><br>${p.title}<br>${p.company}<br><i>${p.cluster_label}</i>`
        ),
        hoverinfo: 'text',
        marker: {
          color: color,
          size: 3,
          opacity: 0.8,
          line: {
            color: 'white',
            width: 0.1
          }
        }
      };

      // Add labels if enabled
      if (showLabels && sampledPoints.length > 0) {
        // Calculate centroid for label
        const sumX = transformedPoints.reduce((s, p) => s + p.x, 0);
        const sumY = transformedPoints.reduce((s, p) => s + p.y, 0);
        const sumZ = transformedPoints.reduce((s, p) => s + p.z, 0);
        const centroid = {
          x: sumX / transformedPoints.length,
          y: sumY / transformedPoints.length,
          z: sumZ / transformedPoints.length
        };
        
        // We can't easily add text labels as separate traces in a performant way for many clusters
        // Aella does it via scene annotations or extra traces. 
        // For now, we'll just rely on hover. 
        // If true labels are needed, we'd add a separate text trace or scene annotations.
      }

      return trace;
    });

    setPlotData(traces);
  }, [data, layoutType, selectedClusterIds, densityPercent, showLabels]);

  const layout = useMemo(() => {
    const camera = getCameraForLayout(layoutType);
    return {
      autosize: true,
      margin: { t: 0, r: 0, b: 0, l: 0 },
      showlegend: false,
      scene: {
        camera: camera,
        xaxis: { showgrid: true, zeroline: false, showticklabels: false, title: '' },
        yaxis: { showgrid: true, zeroline: false, showticklabels: false, title: '' },
        zaxis: { showgrid: true, zeroline: false, showticklabels: false, title: '' },
        bgcolor: '#ffffff',
      },
      hovermode: 'closest'
    };
  }, [layoutType]);

  return (
    <div className="w-full h-full bg-white">
      <Plot
        data={plotData}
        layout={layout}
        config={{ responsive: true, displayModeBar: false }}
        style={{ width: '100%', height: '100%' }}
        useResizeHandler={true}
      />
    </div>
  );
}
