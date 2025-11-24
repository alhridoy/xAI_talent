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
  layoutMode?: 'force' | 'grid' | 'cluster';
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
  layoutMode = 'grid',
  onNodeClick,
  onNodeHover,
}: KnowledgeGraphCanvasProps) {
  const graphRef = useRef<ForceGraphMethods>();

  // --- Data Preparation ---
  const graphData = useMemo(() => {
    const highlightSet = new Set(highlightNodeIds);
    
    // Clone nodes to avoid mutating props directly if re-used
    let sortedNodes = [...nodes];
    
    // If Grid Mode: Sort nodes to create orderly layout
    if (layoutMode === 'grid') {
        sortedNodes.sort((a, b) => {
            const getPriority = (n: KnowledgeGraphNode) => {
                if (n.type === 'Person') return 1;
                if (n.type === 'Company') return 2;
                if (n.type === 'Skill') return 3;
                return 4;
            };
            const pA = getPriority(a);
            const pB = getPriority(b);
            if (pA !== pB) return pA - pB;
            const cA = (a.metrics?.community ?? 0);
            const cB = (b.metrics?.community ?? 0);
            return cA - cB;
        });
    }

    // Grid Layout Logic in 3D (Cubic arrangement)
    const SPACING = 80;
    const count = sortedNodes.length;
    // Cube root to form a 3D grid cube
    const side = Math.ceil(Math.cbrt(count));
    
    const typedNodes: ThreeNode[] = sortedNodes.map((node, idx) => {
      // Color logic
      let color = NODE_TYPE_COLORS[node.type] || '#94a3b8';
      let val = 8; 

      if (layoutMode === 'cluster') {
          const commId = node.metrics?.community ?? 0;
          color = COMMUNITY_COLORS[commId % COMMUNITY_COLORS.length];
          val = node.type === 'Person' ? 12 : 6;
      } else if (layoutMode === 'grid') {
          if (node.type !== 'Person' && node.type !== 'Company') {
              color = '#334155'; // Dim structural nodes
              val = 4;
          }
      }

      // 3D Grid Position Locking
      let fx, fy, fz;
      if (layoutMode === 'grid') {
          const x = idx % side;
          const y = Math.floor((idx / side)) % side;
          const z = Math.floor(idx / (side * side));
          fx = (x - side / 2) * SPACING;
          fy = (y - side / 2) * SPACING;
          fz = (z - side / 2) * SPACING;
      }

      return {
        ...node,
        color,
        val,
        fx, fy, fz, // Fixed positions for 3D force engine
        highlighted: highlightSet.has(node.id),
      };
    });

    const typedEdges: ThreeEdge[] = edges.map((edge) => {
      const id = `${edge.source}::${edge.relationship}::${edge.target}`;
      let color = '#1e293b';
      let width = 0.5;

      // Cluster mode styling
      if (layoutMode === 'cluster') {
          color = '#334155'; // Faint
          width = 0.2;
      }

      const highlighted = highlightSet.has(String(edge.source)) || highlightSet.has(String(edge.target));
      
      if (highlighted) {
          color = '#60a5fa'; // Blue highlight
          width = 1.5;
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
  }, [nodes, edges, highlightNodeIds, layoutMode]);

  // --- Physics Engine Tuning ---
  useEffect(() => {
    if (!graphRef.current) return;
    
    const d3Force = graphRef.current.d3Force;
    
    if (layoutMode === 'grid') {
        // In Grid mode, we rely on fx/fy/fz. Disable forces.
        d3Force('charge').strength(0);
        d3Force('link').strength(0);
        d3Force('center').strength(0);
    } else if (layoutMode === 'cluster') {
        // Strong clustering physics
        // Use 'manyBody' (charge) to separate nodes
        d3Force('charge').strength(-120).distanceMax(300);
        
        // Use links to hold clusters together
        d3Force('link').strength(0.8).distance(40);
        
        // Center gravity
        d3Force('center').strength(0.5);
    } else {
        // Standard Force Layout
        d3Force('charge').strength(chargeStrength);
        d3Force('link').strength(1).distance(linkDistance);
        d3Force('center').strength(0.5);
    }

    // Re-heat simulation to apply new forces
    graphRef.current.d3ReheatSimulation();
  }, [chargeStrength, linkDistance, layoutMode]);

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
