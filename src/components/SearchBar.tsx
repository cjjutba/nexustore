import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearch } from '@/contexts/SearchContext';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  isMobile?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className,
  placeholder = "Search for products, brands and more...",
  isMobile = false
}) => {
  const navigate = useNavigate();
  const {
    query,
    setQuery,
    suggestions,
    categorySuggestions,
    searchHistory,
    popularSearches,
    addToHistory,
    clearHistory,
    performSearch
  } = useSearch();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Combined suggestions for dropdown
  const allSuggestions = [
    ...suggestions.map(s => ({ type: 'suggestion', value: s })),
    ...categorySuggestions.map(c => ({ type: 'category', value: c.category, count: c.count })),
    ...(query.trim() === '' ? searchHistory.map(h => ({ type: 'history', value: h })) : []),
    ...(query.trim() === '' ? popularSearches.map(p => ({ type: 'popular', value: p })) : [])
  ];

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setIsOpen(true);
    setSelectedIndex(-1);
  };

  // Handle search submission
  const handleSearch = (searchQuery?: string) => {
    const finalQuery = searchQuery || query;
    if (!finalQuery.trim()) return;

    addToHistory(finalQuery);
    setIsOpen(false);
    setSelectedIndex(-1);
    
    // Navigate to search results page
    navigate(`/search?q=${encodeURIComponent(finalQuery)}`);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion: any) => {
    setQuery(suggestion.value);
    handleSearch(suggestion.value);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < allSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && allSuggestions[selectedIndex]) {
          handleSuggestionClick(allSuggestions[selectedIndex]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  // Handle clear search
  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
    setSelectedIndex(-1);
    inputRef.current?.focus();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Render suggestion item
  const renderSuggestionItem = (suggestion: any, index: number) => {
    const isSelected = index === selectedIndex;
    
    return (
      <button
        key={`${suggestion.type}-${suggestion.value}`}
        className={cn(
          "w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors duration-200 flex items-center gap-3",
          isSelected && "bg-muted/50"
        )}
        onClick={() => handleSuggestionClick(suggestion)}
      >
        {suggestion.type === 'history' && (
          <Clock className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
        {suggestion.type === 'popular' && (
          <TrendingUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
        {suggestion.type === 'suggestion' && (
          <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        )}
        {suggestion.type === 'category' && (
          <div className="w-4 h-4 bg-primary/20 rounded flex-shrink-0" />
        )}
        
        <div className="flex-1 min-w-0">
          <div className="text-sm text-foreground truncate">
            {suggestion.value}
          </div>
          {suggestion.type === 'category' && (
            <div className="text-xs text-muted-foreground">
              {suggestion.count} products
            </div>
          )}
        </div>
      </button>
    );
  };

  return (
    <div className={cn("relative", className)}>
      <form onSubmit={handleSubmit} className="relative group">
        <label htmlFor={isMobile ? "mobile-search" : "search"} className="sr-only">
          Search products
        </label>
        <Input
          ref={inputRef}
          id={isMobile ? "mobile-search" : "search"}
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className={cn(
            "w-full transition-all duration-300 pr-20",
            isMobile 
              ? "px-6 py-3 border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring bg-muted text-foreground placeholder:text-muted-foreground"
              : "px-5 py-2.5 rounded-lg text-foreground bg-muted border border-border/30 focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring focus:bg-background pl-5 placeholder:text-muted-foreground"
          )}
          aria-label="Search products"
          autoComplete="off"
        />
        
        {/* Clear button */}
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground",
              isMobile ? "right-12" : "right-14"
            )}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
        
        {/* Search button */}
        <Button
          type="submit"
          size="sm"
          className={cn(
            "absolute top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md transition-all duration-300 shadow-sm hover:shadow-md focus:ring-2 focus:ring-ring focus:ring-offset-2",
            isMobile 
              ? "right-2 px-3 py-1.5" 
              : "right-1.5 px-3 py-1.5"
          )}
          aria-label="Search"
        >
          <Search className="w-4 h-4" />
        </Button>
      </form>

      {/* Suggestions dropdown */}
      {isOpen && allSuggestions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-background/95 backdrop-blur-md border border-border/30 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
          style={{ backgroundColor: 'hsl(var(--background))' }}
        >
          {/* Search history header */}
          {query.trim() === '' && searchHistory.length > 0 && (
            <div className="px-4 py-2 border-b border-border/10 flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Recent Searches
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={clearHistory}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
            </div>
          )}
          
          {/* Popular searches header */}
          {query.trim() === '' && popularSearches.length > 0 && searchHistory.length === 0 && (
            <div className="px-4 py-2 border-b border-border/10">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Popular Searches
              </span>
            </div>
          )}
          
          {/* Suggestions list */}
          <div className="py-1">
            {allSuggestions.map((suggestion, index) => 
              renderSuggestionItem(suggestion, index)
            )}
          </div>
          
          {/* See all results */}
          {query.trim() && (
            <div className="border-t border-border/10 p-2">
              <Button
                variant="ghost"
                className="w-full justify-start text-primary hover:text-primary/80"
                onClick={() => handleSearch()}
              >
                <Search className="w-4 h-4 mr-2" />
                See all results for "{query}"
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
