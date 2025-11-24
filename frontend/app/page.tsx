'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Researcher, SearchResponse } from '@/types/researcher';
import ResearcherList from '@/components/ResearcherList';
import { Search, Map as MapIcon } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

const normalizeText = (input: string): string => {
  let query = input.replaceAll('-', ' ');
  query = query.replaceAll(/[–—…«»‘’]/g, ' ');
  query = query.replaceAll(/[“”]/g, '"');

  const suffixMatch = /\w+$/.exec(query);
  if (suffixMatch && suffixMatch[0].length >= 2) {
    const partial = suffixMatch[0];
    query = `${query.substring(0, suffixMatch.index)}(${partial}|${partial}*)`;
  } else if (query.length >= 1 && /\w$/.test(query)) {
    query = query.slice(0, -1);
  }

  return query.trim();
};

export default function Home() {
  const [researchers, setResearchers] = useState<Researcher[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [showAllCompanies, setShowAllCompanies] = useState(false);
  const [searchTime, setSearchTime] = useState<number>(0);

  const fetchResearchers = async () => {
    setLoading(true);
    const startTime = performance.now();
    try {
      const response = await axios.get<SearchResponse>(`${API_URL}/api/researchers`, {
        params: { limit: 100 }
      });
      setResearchers(response.data.researchers);
      setTotalResults(response.data.total);
      const endTime = performance.now();
      setSearchTime(endTime - startTime);
    } catch (error) {
      console.error('Error fetching researchers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    let query = searchQuery;
    let company = companyFilter;

    // Parse @company: filter from query
    const companyMatch = query.match(/@company:("([^"]+)"|([^"\s]+))/i);
    if (companyMatch) {
      company = companyMatch[2] || companyMatch[3];
      query = query.replace(companyMatch[0], '').trim();
    }

    // Parse @org: filter as alias for company
    const orgMatch = query.match(/@org:("([^"]+)"|([^"\s]+))/i);
    if (orgMatch) {
      company = orgMatch[2] || orgMatch[3];
      query = query.replace(orgMatch[0], '').trim();
    }

    query = query.trim();
    company = (company || '').trim();
    const normalizedQuery = query ? normalizeText(query) : '';

    if (!normalizedQuery && !company) {
      fetchResearchers();
      return;
    }

    setLoading(true);
    const startTime = performance.now();
    try {
      const response = await axios.post<SearchResponse>(`${API_URL}/api/search`, {
        query: normalizedQuery,
        limit: 100,
        company_filter: company || null
      });
      setResearchers(response.data.researchers);
      setTotalResults(response.data.total);
      const endTime = performance.now();
      setSearchTime(endTime - startTime);
    } catch (error) {
      console.error('Error searching researchers:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResearchers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchQuery || companyFilter) {
        handleSearch();
      }
    }, 300);

    return () => clearTimeout(delaySearch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, companyFilter]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-4 tracking-tight text-black">
            classes.wtf <span className="text-gray-400 font-normal">but for researchers</span>
          </h1>
          
          <div className="text-gray-500 text-base leading-relaxed space-y-2 mb-8">
            <p>
              Try names, phrases, titles, subjects, and organizations. You can also look for exact textual phrases (like <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 font-mono text-sm">&quot;machine learning&quot;</span>) and prefix matches (such as <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-700 font-mono text-sm">computer vision*</span>).
            </p>
            <p>
              Filter by specific attributes like <span className="text-blue-600 cursor-pointer hover:underline">@org:xAI</span>, <span className="text-blue-600 cursor-pointer hover:underline">@skill:&quot;deep learning&quot;</span>, and <span className="text-blue-600 cursor-pointer hover:underline">@publications:&gt;50</span>.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6 group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="text"
              placeholder="Search researchers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg placeholder:text-gray-400"
            />
          </div>

          {/* Checkbox Filter */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm">
              <label className="flex items-center gap-2 cursor-pointer group select-none">
                <input
                  type="checkbox"
                  checked={showAllCompanies}
                  onChange={(e) => setShowAllCompanies(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 transition-colors"
                />
                <span className="text-gray-600 group-hover:text-gray-900 transition-colors">Only show researchers with publications</span>
              </label>
            </div>

            {/* Map Link */}
            <Link 
              href="/map"
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
            >
              <MapIcon className="w-4 h-4" />
              View Map
            </Link>
          </div>
        </div>

        {/* Content */}
        <>
          {/* Results Count */}
          {!loading && researchers.length > 0 && (
            <div className="bg-green-50/50 border border-green-100 rounded-lg px-4 py-3 mb-8">
              <span className="text-green-700 text-sm font-medium">
                Found {totalResults > 0 ? totalResults : researchers.length} results ({searchTime.toFixed(2)} ms)
              </span>
            </div>
          )}

          {/* Results List */}
          {loading ? (
            <div className="text-center py-20">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-blue-600"></div>
            </div>
          ) : researchers.length > 0 ? (
            <ResearcherList researchers={researchers} />
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-400">No results found.</p>
            </div>
          )}
        </>
      </div>
    </div>
  );
}
