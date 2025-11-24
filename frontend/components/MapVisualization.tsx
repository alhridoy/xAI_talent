import React, { useEffect, useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { MapPoint } from '@/types/researcher';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const CLUSTER_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
  '#D4A5A5', '#9B59B6', '#3498DB', '#E67E22', '#2ECC71',
  '#F1C40F', '#1ABC9C', '#E74C3C', '#8E44AD', '#2C3E50'
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
        <p className="font-bold text-sm">{data.name}</p>
        <p className="text-xs text-gray-500">{data.title}</p>
        <p className="text-xs text-blue-500">{data.company}</p>
        <p className="text-xs mt-1 text-gray-400 italic">{data.cluster_label}</p>
      </div>
    );
  }
  return null;
};

export default function MapVisualization() {
  const [data, setData] = useState<MapPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/map');
        setData(response.data);
      } catch (err) {
        setError('Failed to load map data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMapData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-96 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="w-full h-[600px] bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4 relative">
      <div className="absolute top-4 left-4 z-10 bg-white/80 dark:bg-black/80 p-2 rounded backdrop-blur-sm">
        <h3 className="font-bold text-sm">Research Landscape</h3>
        <p className="text-xs text-gray-500">Clustered by skills & background</p>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <XAxis type="number" dataKey="x" hide />
          <YAxis type="number" dataKey="y" hide />
          <Tooltip content={<CustomTooltip />} />
          <Scatter name="Researchers" data={data} fill="#8884d8">
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={CLUSTER_COLORS[entry.cluster % CLUSTER_COLORS.length]} 
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
