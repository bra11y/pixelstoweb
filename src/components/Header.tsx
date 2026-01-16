
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { Input } from './ui/input';
import { searchHelpers } from '../utils/supabase-helpers';
import { staticContent, getSearchSuggestions } from '../utils/search-indexer';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();
  
  // Entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Design', path: '/design' },
    { name: 'Resources', path: '/resources' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleSearch = async (query: string) => {
    if (query.length < 1) {
      setSearchResults([]);
      setSuggestions([]);
      setShowResults(false);
      return;
    }

    // Get instant suggestions for first letter matches
    const instantSuggestions = getSearchSuggestions(query);
    setSuggestions(instantSuggestions);

    // Search static content for immediate results
    const localResults = staticContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase()) ||
      (item.metadata?.tags && item.metadata.tags.some((tag: string) => 
        tag.toLowerCase().includes(query.toLowerCase())
      ))
    ).slice(0, 3);

    try {
      // Also search database content if query is longer
      if (query.length >= 2) {
        const { data } = await searchHelpers.searchContent(query, 3);
        const combinedResults = [...localResults, ...(data || [])];
        // Remove duplicates based on URL
        const uniqueResults = combinedResults.filter((item, index, self) => 
          index === self.findIndex(t => t.url === item.url)
        ).slice(0, 5);
        setSearchResults(uniqueResults);
      } else {
        setSearchResults(localResults);
      }
      setShowResults(true);
    } catch (error) {
      console.error('Search error:', error);
      // Fall back to local results if database search fails
      setSearchResults(localResults);
      setShowResults(localResults.length > 0);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup effect for body overflow
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-black/20 backdrop-blur-md border-b border-white/10'
      } ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        
        <nav className="container-tight mx-auto py-4 px-6" aria-label="Main Navigation">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center"
              aria-label="PixelsToWeb - Home"
              onClick={closeMenu}
            >
              <img
                src="/images/PTW-re.png"
                alt="PixelsToWeb"
                className="h-8 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center justify-between flex-1">
              {/* Navigation Items - Center */}
              <div className="flex items-center space-x-6 flex-1 justify-center">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`font-semibold text-sm transition-colors duration-300 ${
                      isActive(item.path) 
                        ? 'text-yellow-400' 
                        : 'text-white hover:text-yellow-300'
                    }`}
                    aria-current={isActive(item.path) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right Side - Search & CTA */}
              <div className="flex items-center space-x-4">
                {/* Search Bar - Right */}
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowResults(searchResults.length > 0)}
                    onBlur={() => setTimeout(() => setShowResults(false), 300)}
                    className="h-10 pl-10 pr-4 bg-white/20 backdrop-blur-sm border-white/30 focus:border-white/50 rounded-lg text-sm w-48 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
                  />
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70" />
                  
                  {/* Search Results Dropdown */}
                  {showResults && (searchResults.length > 0 || suggestions.length > 0) && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-lg border border-white/20 rounded-lg shadow-2xl z-50 max-h-96 overflow-y-auto">
                      {/* Search Suggestions */}
                      {suggestions.length > 0 && (
                        <div className="border-b border-neutral-200">
                          <div className="px-4 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wide bg-neutral-50">Suggestions</div>
                          {suggestions.map((suggestion, index) => (
                            <button
                              key={index}
                              onClick={() => {
                                setSearchQuery(suggestion);
                                handleSearch(suggestion);
                              }}
                              className="block w-full text-left px-4 py-2 hover:bg-neutral-50 text-sm text-neutral-700 border-b border-neutral-100 last:border-b-0"
                            >
                              <span className="font-medium">{suggestion}</span>
                            </button>
                          ))}
                        </div>
                      )}
                      
                      {/* Search Results */}
                      {searchResults.length > 0 && (
                        <div>
                          {suggestions.length > 0 && <div className="px-4 py-2 text-xs font-medium text-neutral-500 uppercase tracking-wide bg-neutral-50">Results</div>}
                          {searchResults.map((result, index) => (
                            <Link
                              key={result.id || index}
                              to={result.url}
                              className="block px-4 py-3 hover:bg-neutral-50 border-b border-neutral-100 last:border-b-0"
                              onClick={() => {
                                setShowResults(false);
                                setSearchQuery('');
                              }}
                            >
                              <div className="font-medium text-sm text-black">{result.title}</div>
                              <div className="text-xs text-neutral-600 truncate">{result.content}</div>
                              <div className="text-xs text-primary mt-1 capitalize">{result.type}</div>
                            </Link>
                          ))}
                        </div>
                      )}
                      
                      {/* View All Results Link */}
                      <Link
                        to={`/search?q=${encodeURIComponent(searchQuery)}`}
                        className="block px-4 py-3 text-center text-sm text-primary hover:bg-neutral-50 border-t border-neutral-200 font-medium"
                        onClick={() => {
                          setShowResults(false);
                          setSearchQuery('');
                        }}
                      >
                        View all results for "{searchQuery}"
                      </Link>
                    </div>
                  )}
                </div>
                
                <Link to="/contact" className="button-primary text-sm px-4 py-2">
                  Book a Session
                </Link>
              </div>
            </div>

            <button
              type="button"
              className="md:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors duration-200 z-50 relative mobile-menu-toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-cream z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col h-full pt-20 px-8 py-12">
          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-6 mb-12" role="navigation" aria-label="Mobile Navigation">
            <Link
              to="/search"
              className={`text-xl font-bold py-4 px-4 rounded-xl transition-colors duration-300 flex items-center gap-3 ${
                isActive('/search') 
                  ? 'text-primary bg-primary/15 border-l-4 border-primary shadow-sm' 
                  : 'text-black hover:text-primary hover:bg-neutral-100 hover:shadow-sm'
              }`}
              onClick={closeMenu}
              aria-current={isActive('/search') ? 'page' : undefined}
            >
              <Search size={20} />
              Search
            </Link>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-xl font-bold py-4 px-4 rounded-xl transition-colors duration-300 ${
                  isActive(item.path) 
                    ? 'text-primary bg-primary/15 border-l-4 border-primary shadow-sm' 
                    : 'text-black hover:text-primary hover:bg-neutral-100 hover:shadow-sm'
                }`}
                onClick={closeMenu}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile CTA */}
          <div className="mt-auto mb-12">
            <Link 
              to="/contact" 
              className="button-primary w-full flex justify-center text-lg py-4 font-bold rounded-xl shadow-lg"
              onClick={closeMenu}
            >
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
