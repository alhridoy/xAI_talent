'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { ArrowLeft, Loader2, Network, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import KnowledgeGraphCanvas from '@/components/KnowledgeGraphCanvas';
import type { KnowledgeGraphNode, KnowledgeGraphResponse } from '@/types/knowledgeGraph';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function KnowledgeGraphPage() {
  const [graph, setGraph] = useState<KnowledgeGraphResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTypes, setActiveTypes] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [chargeStrength, setChargeStrength] = useState(-200);
  const [linkDistance, setLinkDistance] = useState(160);

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        setLoading(true);
        const response = await axios.get<KnowledgeGraphResponse>(`${API_URL}/api/knowledge-graph`);
        setGraph(response.data);
        const defaultTypes = new Set(
          response.data.meta?.node_types ?? response.data.nodes.map((node) => node.type)
        );
        setActiveTypes(defaultTypes);
      } catch (err) {
        console.error(err);
        setError('Failed to load knowledge graph data');
      } finally {
        setLoading(false);
      }
    };
    fetchGraph();
  }, []);

  const availableTypes = useMemo(() => {
    if (!graph) return [];
    if (graph.meta?.node_types?.length) {
      return graph.meta.node_types;
    }
    return Array.from(new Set(graph.nodes.map((node) => node.type)));
  }, [graph]);

  const nodeIndex = useMemo(() => {
    if (!graph) return new Map<string, KnowledgeGraphNode>();
    return new Map(graph.nodes.map((node) => [node.id, node]));
  }, [graph]);

  const filteredGraph = useMemo(() => {
    if (!graph) return { nodes: [], edges: [] };
    const allowedTypes = activeTypes.size ? activeTypes : new Set(availableTypes);
    const nodes = graph.nodes.filter((node) => allowedTypes.has(node.type));
    
    const nodeIds = new Set(nodes.map((node) => node.id));
    const edges = graph.edges.filter(
      (edge) => nodeIds.has(String(edge.source)) && nodeIds.has(String(edge.target))
    );
    return { nodes, edges };
  }, [graph, activeTypes, availableTypes]);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchMatches = useMemo(() => {
    if (!graph || !normalizedQuery) return [];
    return graph.nodes
      .filter((node) => {
        const haystack = [node.name, node.title, node.summary, node.impact, node.type]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(normalizedQuery);
      })
      .slice(0, 8);
  }, [graph, normalizedQuery]);

  const highlightIds = useMemo(() => {
    const ids = new Set<string>();
    searchMatches.forEach((node) => ids.add(node.id));
    
    if (selectedNodeId) {
      ids.add(selectedNodeId);
      // Add neighbors of selected node to highlights
      if (graph) {
        graph.edges.forEach((edge) => {
           // Check source/target safely (they might be objects if mutated, but here should be strings from raw state)
           const s = typeof edge.source === 'object' ? (edge.source as any).id : edge.source;
           const t = typeof edge.target === 'object' ? (edge.target as any).id : edge.target;
           
           if (String(s) === selectedNodeId) ids.add(String(t));
           if (String(t) === selectedNodeId) ids.add(String(s));
        });
      }
    }
    
    if (hoveredNodeId) ids.add(hoveredNodeId);
    return Array.from(ids);
  }, [searchMatches, selectedNodeId, hoveredNodeId, graph]);

  const selectedNode = useMemo(() => {
    if (!graph || !selectedNodeId) return null;
    return nodeIndex.get(selectedNodeId) ?? null;
  }, [graph, selectedNodeId, nodeIndex]);

  const selectedConnections = useMemo(() => {
    if (!graph || !selectedNodeId) return [] as { label: string; target?: KnowledgeGraphNode }[];
    return graph.edges
      .filter((edge) => edge.source === selectedNodeId || edge.target === selectedNodeId)
      .slice(0, 12)
      .map((edge) => {
        const counterpartyId = edge.source === selectedNodeId ? String(edge.target) : String(edge.source);
        return {
          label: edge.relationship,
          target: nodeIndex.get(counterpartyId),
        };
      });
  }, [graph, selectedNodeId, nodeIndex]);

  const totalNodes = graph?.meta?.counts?.nodes ?? graph?.nodes?.length ?? 0;
  const totalEdges = graph?.meta?.counts?.edges ?? graph?.edges?.length ?? 0;

  const handleToggleType = (nodeType: string) => {
    setActiveTypes((prev) => {
      const next = new Set(prev);
      if (next.has(nodeType)) {
        next.delete(nodeType);
      } else {
        next.add(nodeType);
      }
      return next;
    });
  };

  const handleSelectAllTypes = () => {
    setActiveTypes(new Set(availableTypes));
  };

  const resetSelections = () => {
    setSelectedNodeId(null);
    setHoveredNodeId(null);
    setSearchQuery('');
    handleSelectAllTypes();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex flex-col h-screen">
        <header className="flex items-center justify-between px-8 py-4 border-b border-white/5 bg-gradient-to-r from-slate-950 via-slate-900/70 to-slate-950">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <p className="text-sm text-slate-400 uppercase tracking-[0.3em]">Knowledge Graph</p>
              <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
                AI Researcher Graph <Network className="w-5 h-5 text-blue-400" />
              </h1>
              <p className="text-sm text-slate-400">Interactive map of researchers, orgs, skills, and impact trails.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-2 bg-white/5">
              <div className="text-center">
                <p className="text-xs text-slate-400">Nodes</p>
                <p className="text-lg font-semibold text-white">{totalNodes.toLocaleString()}</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-xs text-slate-400">Edges</p>
                <p className="text-lg font-semibold text-white">{totalEdges.toLocaleString()}</p>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <p className="text-xs text-slate-400">Types</p>
                <p className="text-lg font-semibold text-white">{availableTypes.length}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1">
               {/* Single nice graph, no toggles needed */}
            </div>

            <Link
              href="/map"
              className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm"
            >
              Research Map
            </Link>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <aside className="w-full max-w-md border-r border-white/5 bg-slate-950/70 backdrop-blur overflow-y-auto">
            <div className="p-6 space-y-6">
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-slate-500">Search graph</label>
                <div className="mt-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search names, labs, skills, impact keywords..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-500">Node types</span>
                  <button
                    type="button"
                    onClick={handleSelectAllTypes}
                    className="text-[11px] uppercase tracking-wide text-blue-300 hover:text-blue-200"
                  >
                    Select all
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableTypes.map((type) => {
                    const active = activeTypes.has(type);
                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => handleToggleType(type)}
                        className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                          active ? 'bg-blue-500/20 border-blue-400 text-blue-200' : 'bg-white/5 border-white/10 text-slate-400'
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Layout spacing</span>
                    <span>{linkDistance}px</span>
                  </div>
                  <input
                    type="range"
                    min="60"
                    max="200"
                    value={linkDistance}
                    onChange={(e) => setLinkDistance(parseInt(e.target.value, 10))}
                    className="w-full"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Charge force</span>
                    <span>{chargeStrength}</span>
                  </div>
                  <input
                    type="range"
                    min="-200"
                    max="-20"
                    value={chargeStrength}
                    onChange={(e) => setChargeStrength(parseInt(e.target.value, 10))}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="border border-white/5 rounded-2xl p-4 bg-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <p className="text-sm font-semibold text-white">Search spotlight</p>
                </div>
                {normalizedQuery && searchMatches.length === 0 && (
                  <p className="text-sm text-slate-400">No matches yet—try a broader query.</p>
                )}
                <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                  {searchMatches.map((node) => (
                    <button
                      key={node.id}
                      type="button"
                      onClick={() => setSelectedNodeId(node.id)}
                      className={`w-full text-left rounded-xl border px-3 py-2 text-sm transition-colors ${
                        selectedNodeId === node.id
                          ? 'border-amber-300 bg-amber-300/10 text-amber-100'
                          : 'border-white/5 bg-white/5 text-slate-200 hover:border-white/20'
                      }`}
                    >
                      <p className="font-medium truncate">{node.name}</p>
                      <p className="text-xs text-slate-400 truncate">{node.type}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border border-white/5 rounded-2xl p-4 bg-white/5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-white">Insights focus</p>
                    <p className="text-xs text-slate-400">Tap any node to inspect its neighborhood.</p>
                  </div>
                  <button
                    type="button"
                    onClick={resetSelections}
                    className="text-xs uppercase tracking-wide text-slate-400 hover:text-slate-200"
                  >
                    Reset
                  </button>
                </div>

                {selectedNode ? (
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg font-semibold text-white leading-tight">{selectedNode.name}</p>
                      <p className="text-xs text-slate-400 uppercase tracking-wide">{selectedNode.type}</p>
                    </div>
                    {selectedNode.summary && (
                      <p className="text-sm text-slate-300 leading-relaxed line-clamp-5">{selectedNode.summary}</p>
                    )}
                    {selectedNode.impact && (
                      <div className="bg-emerald-500/10 border border-emerald-400/30 rounded-xl p-3 text-sm text-emerald-100">
                        {selectedNode.impact}
                      </div>
                    )}
                    <div className="space-y-2">
                      {selectedConnections.map(({ label, target }, idx) => (
                        <div
                          key={`${label}-${target?.id ?? idx}`}
                          className="flex items-center justify-between text-xs border border-white/5 rounded-lg px-3 py-2"
                        >
                          <span className="text-slate-300">{label}</span>
                          <span className="text-white font-semibold truncate max-w-[55%] text-right">
                            {target?.name ?? 'External Node'}
                          </span>
                        </div>
                      ))}
                      {selectedConnections.length === 0 && (
                        <p className="text-xs text-slate-500">No explicit connections captured in this slice.</p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedNode.linkedin_url && (
                        <a
                          href={selectedNode.linkedin_url as string}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400 text-blue-100"
                        >
                          LinkedIn
                        </a>
                      )}
                      {selectedNode.google_scholar && (
                        <a
                          href={selectedNode.google_scholar as string}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs px-3 py-1 rounded-full bg-fuchsia-500/20 border border-fuchsia-400 text-fuchsia-100"
                        >
                          Scholar
                        </a>
                      )}
                      {selectedNode.personal_website && (
                        <a
                          href={selectedNode.personal_website as string}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-100"
                        >
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-400">Select a node in the graph to reveal context.</p>
                )}
              </div>
            </div>
          </aside>

          <main className="flex-1 relative bg-slate-900/70">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-300">
                <Loader2 className="w-8 h-8 animate-spin" />
                <p className="text-sm">Building the research constellation...</p>
              </div>
            )}
            {error && !loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-300">
                <p className="text-sm text-red-300">{error}</p>
              </div>
            )}
            {!loading && !error && (
              <KnowledgeGraphCanvas
                nodes={filteredGraph.nodes}
                edges={filteredGraph.edges}
                highlightNodeIds={highlightIds}
                focusNodeId={selectedNodeId}
                chargeStrength={chargeStrength}
                linkDistance={linkDistance}
                onNodeClick={(node) => setSelectedNodeId(node.id)}
                onNodeHover={(node) => setHoveredNodeId(node?.id ?? null)}
              />
            )}
            {!selectedNode && !loading && (
              <div className="absolute left-6 bottom-6 max-w-md bg-slate-950/80 border border-white/10 rounded-2xl p-4 text-sm text-slate-300">
                <div className="flex items-center gap-2 text-white font-semibold mb-1">
                  <SlidersHorizontal className="w-4 h-4" />
                  Navigation tips
                </div>
                <p>Drag nodes to explore local neighborhoods, scroll to zoom, and use the sliders to reshape the constellation.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
