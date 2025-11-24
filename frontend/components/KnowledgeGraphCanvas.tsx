'use client';

import dynamic from 'next/dynamic';
import { memo, useEffect, useMemo, useRef, type MutableRefObject } from 'react';
import * as THREE from 'three';
import type { ForceGraphMethods, NodeObject, LinkObject } from 'react-force-graph-3d';
import type { KnowledgeGraphEdge, KnowledgeGraphNode } from '@/types/knowledgeGraph';

const ForceGraph3D = dynamic(() => import('react-force-graph-3d'), { ssr: false });

const NODE_TYPE_COLORS: Record<string, string> = {
  Person: '#3b82f6',      // Bright Blue
  Organization: '#64748b', // Slate
  Lab: '#14b8a6',         // Teal
  Skill: '#a855f7',       // Purple
  ResearchArea: '#f97316', // Orange
  Project: '#22c55e',     // Green
  Output: '#06b6d4',      // Cyan
  Publication: '#ec4899', // Pink
};

const COMMUNITY_COLORS = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', 
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
];

interface ThreeNode extends NodeObject<KnowledgeGraphNode> {
  color?: string;
  val?: number;
  highlighted?: boolean;
}

interface ThreeEdge extends LinkObject<KnowledgeGraphNode, KnowledgeGraphEdge> {
  id?: string;
  color?: string;
  width?: number;
  highlighted?: boolean;
}

interface KnowledgeGraphCanvasProps {
  nodes: KnowledgeGraphNode[];
  edges: KnowledgeGraphEdge[];
  highlightNodeIds?: string[];
  focusNodeId?: string | null;
  chargeStrength: number;
  linkDistance: number;
  onNodeClick?: (node: KnowledgeGraphNode) => void;
  onNodeHover?: (node: KnowledgeGraphNode | null) => void;
}

function KnowledgeGraphCanvas({
  nodes,
  edges,
  highlightNodeIds = [],
  focusNodeId,
  chargeStrength,
  linkDistance,
  onNodeClick,
  onNodeHover,
}: KnowledgeGraphCanvasProps) {
  const graphRef = useRef<ForceGraphMethods>();

  // --- Data Preparation ---
  const graphData = useMemo(() => {
    const highlightSet = new Set(highlightNodeIds);
    
    // Clone nodes to avoid mutating props directly if re-used
    let sortedNodes = [...nodes];
    
    // Sort by centrality so important nodes render last/top if needed, or for consistency
    sortedNodes.sort((a, b) => (b.metrics?.centrality || 0) - (a.metrics?.centrality || 0));

    const typedNodes: ThreeNode[] = sortedNodes.map((node) => {
      // Use backend pre-computed positions if available (Static Layout)
      // If x/y/z are provided by backend (scaled), we use them as initial positions.
      // To make it TRULY static (no bubble), we assign them to fx, fy, fz (fixed).
      let fx, fy, fz;
      
      // Check if backend sent layout coordinates
      if (typeof node.x === 'number' && typeof node.y === 'number') {
          fx = node.x;
          fy = node.y;
          fz = node.z || 0;
      }

      // Color logic: Use Community Colors
      const commId = node.metrics?.community ?? 0;
      let color = COMMUNITY_COLORS[commId % COMMUNITY_COLORS.length];
      
      // Size logic: Centrality
      // Base size 4, max 16 based on centrality
      let val = 4 + ((node.metrics?.centrality || 0) * 100);
      if (val > 16) val = 16;
      
      // Override for structural nodes if needed, but user wants "one nice graph"
      // Let's stick to the community color scheme which looks professional.

      return {
        ...node,
        color,
        val,
        fx, fy, fz, // Lock positions
        highlighted: highlightSet.has(node.id),
      };
    });

    const typedEdges: ThreeEdge[] = edges.map((edge) => {
      const id = `${edge.source}::${edge.relationship}::${edge.target}`;
      let color = '#334155'; // Default dark/slate
      let width = 0.3; // Thin default

      const highlighted = highlightSet.has(String(edge.source)) || highlightSet.has(String(edge.target));
      
      if (highlighted) {
          color = '#60a5fa'; // Blue highlight
          width = 1.5; // Thicker
      }

      return {
        ...edge,
        id,
        color,
        width,
        highlighted,
      };
    });

    return { nodes: typedNodes, links: typedEdges };
  }, [nodes, edges, highlightNodeIds]);

  // --- Physics Engine Tuning ---
  useEffect(() => {
    if (!graphRef.current) return;
    
    const d3Force = graphRef.current.d3Force;
    
    // Disable all movement forces because we are using fixed positions (fx, fy, fz)
    // This guarantees NO BUBBLING.
    d3Force('charge').strength(0);
    d3Force('link').strength(0);
    d3Force('center').strength(0);
    
    // Stop simulation immediately to save CPU
    graphRef.current.d3StopSimulation();

  }, [chargeStrength, linkDistance]); // Dependencies irrelevant now but kept for API compat


  // --- Focus Camera Logic ---
  useEffect(() => {
    if (!graphRef.current || !focusNodeId) return;
    const targetNode = (graphData.nodes as ThreeNode[]).find((n) => n.id === focusNodeId);
    
    if (targetNode && typeof targetNode.x === 'number') {
        // Fly the camera to the node
        const dist = 150;
        const newPos = {
            x: targetNode.x, 
            y: targetNode.y, 
            z: targetNode.z! + dist 
        };
        
        graphRef.current.cameraPosition(
            newPos, // new position
            { x: targetNode.x, y: targetNode.y, z: targetNode.z }, // lookAt
            2000 // transition ms
        );
    }
  }, [focusNodeId, graphData.nodes]);

  // --- 3D Object Rendering ---
  const nodeThreeObject = (node: any) => {
      const n = node as ThreeNode;
      const radius = n.val || 5;
      
      // Basic Sphere
      const geometry = new THREE.SphereGeometry(radius, 16, 16);
      const material = new THREE.MeshLambertMaterial({
          color: n.color || '#94a3b8',
          transparent: true,
          opacity: n.highlighted ? 1.0 : 0.75
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      
      // If highlighted, add a glow/ring (optional, simple wireframe overlay)
      if (n.highlighted) {
          const glowGeo = new THREE.SphereGeometry(radius * 1.4, 16, 16);
          const glowMat = new THREE.MeshBasicMaterial({
              color: 0xffff00,
              transparent: true,
              opacity: 0.3,
              wireframe: true
          });
          const glowMesh = new THREE.Mesh(glowGeo, glowMat);
          mesh.add(glowMesh);
      }

      return mesh;
  };

  return (
    <div className="w-full h-full bg-[#020617]">
      <ForceGraph3D
        ref={graphRef as unknown as MutableRefObject<ForceGraphMethods | undefined>}
        graphData={graphData as { nodes: NodeObject[]; links: LinkObject[] }}
        
        // Visuals
        backgroundColor="#020617"
        showNavInfo={false} // Hide default navigation text
        
        // Nodes
        nodeThreeObject={nodeThreeObject}
        nodeLabel="name"
        
        // Edges
        linkWidth={(link: any) => (link as ThreeEdge).width || 0.5}
        linkColor={(link: any) => (link as ThreeEdge).color || '#1e293b'}
        linkOpacity={0.4}
        
        // Interaction
        onNodeClick={(node: any) => onNodeClick?.(node as KnowledgeGraphNode)}
        onNodeHover={(node: any) => onNodeHover?.(node as KnowledgeGraphNode || null)}
        
        // Physics Stability
        cooldownTicks={100} // Let it settle a bit before stopping, prevents bubbling
        warmupTicks={50}    // Pre-calculate 50 ticks before first render
        enableNodeDrag={true}
      />
    </div>
  );
}

export default memo(KnowledgeGraphCanvas);
