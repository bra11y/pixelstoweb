import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FinalCta from '../components/home/FinalCta';
import SEO from '../components/SEO';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Search as SearchIcon, Clock, Mail, Loader2 } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Link } from 'react-router-dom';
import { searchHelpers } from '../utils/supabase-helpers';
import { indexStaticContent, enhanceSearchResults } from '../utils/search-indexer';

const Search = () => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random()}`);
  const { toast } = useToast();

  useEffect(() => {
    loadSearchHistory();
    // Auto-index content on first load (you can remove this in production)
    if (window.location.search.includes('index=true')) {
      indexStaticContent();
    }
    
    // Handle URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get('q');
    if (q) {
      setQuery(q);
      handleSearch(q);
    }
  }, []);

  const loadSearchHistory = async () => {
    try {
      const { data, error } = await searchHelpers.getSearchHistory(sessionId);

      if (error) throw error;
      
      if (data) {
        const uniqueQueries = [...new Set(data.map((item: any) => item.query))] as string[];
        setSearchHistory(uniqueQueries);
      }
    } catch (error) {
      console.error('Error loading search history:', error);
    }
  };

  const handleSearch = async (searchQuery?: string) => {
    const searchTerm = searchQuery || query;
    
    if (!searchTerm.trim()) {
      toast({
        title: "Search query required",
        description: "Please enter a search term",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    setResults([]);

    try {
      // Search in the search_index table
      const { data, error } = await searchHelpers.searchContent(searchTerm);

      if (error) throw error;

      // Enhance search results with relevance scoring and highlighting
      const enhancedResults = enhanceSearchResults(data || [], searchTerm);
      setResults(enhancedResults);

      // Save search to history
      await searchHelpers.addToSearchHistory({
        query: searchTerm,
        results_count: data?.length || 0,
        session_id: sessionId,
      });

      loadSearchHistory();

      if (!data || data.length === 0) {
        toast({
          title: "No results found",
          description: "Try a different search term or contact us for help",
        });
      }

    } catch (error: any) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: error.message || "Unable to perform search",
        variant: "destructive",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-blue-500/20 text-blue-300 border-blue-400/30';
      case 'event': return 'bg-purple-500/20 text-purple-300 border-purple-400/30';
      case 'blog': return 'bg-green-500/20 text-green-300 border-green-400/30';
      case 'resource': return 'bg-orange-500/20 text-orange-300 border-orange-400/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-400/30';
    }
  };

  return (
    <>
      <SEO 
        title="Search PixelsToWeb | Find Web Design & Development Services"
        description="Search our comprehensive resources for web design, website development, WordPress, Shopify, and digital marketing services in Canada. Find exactly what you need."
        keywords="search web design Canada, find website development services, WordPress resources Canada, Shopify help Canada, digital marketing search"
        canonical="https://pixelstoweb.com/search"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <Header />
      
      <main id="main-content" className="pt-24 pb-16 relative z-10">
        <div className="container-tight mx-auto px-6 py-20">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 mb-6 shadow-2xl">
              <SearchIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Search
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
              Search our content, resources, and services
            </p>
          </div>

          {/* Search Bar - Left aligned */}
          <Card className="p-6 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl mb-12 relative overflow-hidden group hover:shadow-blue-500/25 transition-all duration-500">
            {/* Glass morphism effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Search for anything..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="h-16 text-lg px-6 bg-white/10 border-2 border-white/20 focus:border-blue-400 rounded-2xl text-white placeholder-white/70 backdrop-blur-sm transition-all duration-300"
                    disabled={isSearching}
                  />
                </div>
                <Button
                  onClick={() => handleSearch()}
                  disabled={isSearching}
                  className="h-16 px-10 text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 rounded-2xl shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 border-0"
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <SearchIcon className="mr-3 h-6 w-6" />
                      Search
                    </>
                  )}
                </Button>
              </div>

              {/* Search History */}
              {searchHistory.length > 0 && !isSearching && results.length === 0 && (
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white/10 rounded-xl">
                      <Clock className="w-5 h-5 text-white/80" />
                    </div>
                    <span className="text-lg font-semibold text-white">Recent Searches</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {searchHistory.map((historyQuery, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setQuery(historyQuery);
                          handleSearch(historyQuery);
                        }}
                        className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-sm font-medium backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                      >
                        {historyQuery}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Results */}
          {results.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                  <SearchIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  {results.length} {results.length === 1 ? 'Result' : 'Results'} Found
                </h2>
              </div>
              
              {results.map((result) => (
                <Card key={result.id} className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:shadow-blue-500/25 group rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className={`px-4 py-2 rounded-2xl text-sm font-semibold border ${getTypeColor(result.type)} backdrop-blur-sm`}>
                            {result.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors group-hover:text-blue-300">
                          <Link to={result.url}>{result.title}</Link>
                        </h3>
                        <p className="text-slate-300 mb-6 line-clamp-3 text-lg leading-relaxed">
                          {result.content}
                        </p>
                        <Link 
                          to={result.url}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25 group/link"
                        >
                          View Details
                          <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* No Results - Contact CTA */}
          {!isSearching && results.length === 0 && query && (
            <Card className="p-12 bg-white/5 backdrop-blur-xl border border-white/10 text-center rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10"></div>
              <div className="relative z-10 max-w-md mx-auto">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-400 to-orange-500 flex items-center justify-center shadow-2xl">
                    <SearchIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">No Results Found</h3>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  We couldn't find what you're looking for. Would you like to contact us for help?
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-400 hover:to-orange-500 text-white px-10 py-4 text-lg rounded-2xl shadow-lg hover:shadow-red-500/25 transform hover:scale-105 transition-all duration-300 border-0">
                    <Mail className="mr-3 h-6 w-6" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </Card>
          )}

          {/* Empty State */}
          {!isSearching && results.length === 0 && !query && (
            <div className="text-center py-20">
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-2xl">
                  <SearchIcon className="w-16 h-16 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                What are you looking for?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Looking for something specific? Search through our pages, events, blog posts, and resources
              </p>
              
              {/* Search suggestions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">📄</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Pages</h3>
                  <p className="text-slate-300 text-sm">About us, services, and portfolio</p>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">📅</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Events</h3>
                  <p className="text-slate-300 text-sm">Workshops and training sessions</p>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">📚</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Resources</h3>
                  <p className="text-slate-300 text-sm">Guides and tools for accessibility</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

        <FinalCta />
      </div>
    </>
  );
};

export default Search;
