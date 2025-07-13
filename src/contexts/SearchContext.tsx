import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { products } from '@/data/products';
import { 
  searchProducts, 
  generateSearchSuggestions, 
  getCategorySuggestions,
  getSearchHistory,
  addToSearchHistory,
  clearSearchHistory,
  getPopularSearches,
  debounce,
  SearchResult, 
  SearchFilters, 
  SearchOptions 
} from '@/utils/searchUtils';

interface SearchContextType {
  // Search state
  query: string;
  results: SearchResult[];
  suggestions: string[];
  categorySuggestions: Array<{category: string, count: number}>;
  searchHistory: string[];
  popularSearches: string[];
  isLoading: boolean;
  totalResults: number;
  
  // Search actions
  setQuery: (query: string) => void;
  performSearch: (options?: Partial<SearchOptions>) => void;
  clearSearch: () => void;
  getSuggestions: (query: string) => void;
  addToHistory: (query: string) => void;
  clearHistory: () => void;
  
  // Filters
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
  clearFilters: () => void;
  
  // Sorting and pagination
  sortBy: string;
  setSortBy: (sortBy: string) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  // Search state
  const [query, setQueryState] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [categorySuggestions, setCategorySuggestions] = useState<Array<{category: string, count: number}>>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>(getSearchHistory());
  const [popularSearches] = useState<string[]>(getPopularSearches());
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  
  // Filters and sorting
  const [filters, setFiltersState] = useState<SearchFilters>({});
  const [sortBy, setSortByState] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchQuery: string, searchOptions: Partial<SearchOptions> = {}) => {
      if (!searchQuery.trim()) {
        setResults([]);
        setTotalResults(0);
        setIsLoading(false);
        return;
      }

      const options: SearchOptions = {
        query: searchQuery,
        filters,
        sortBy: sortBy as any,
        limit: itemsPerPage,
        offset: (currentPage - 1) * itemsPerPage,
        ...searchOptions
      };

      const searchResults = searchProducts(products, options);
      const totalCount = searchProducts(products, { ...options, limit: undefined, offset: 0 }).length;
      
      setResults(searchResults);
      setTotalResults(totalCount);
      setIsLoading(false);
    }, 300),
    [filters, sortBy, currentPage, itemsPerPage]
  );

  // Debounced suggestions function
  const debouncedGetSuggestions = useCallback(
    debounce((searchQuery: string) => {
      if (!searchQuery.trim()) {
        setSuggestions([]);
        setCategorySuggestions([]);
        return;
      }

      const newSuggestions = generateSearchSuggestions(products, searchQuery);
      const newCategorySuggestions = getCategorySuggestions(products, searchQuery);
      
      setSuggestions(newSuggestions);
      setCategorySuggestions(newCategorySuggestions);
    }, 200),
    []
  );

  // Set query and trigger suggestions
  const setQuery = useCallback((newQuery: string) => {
    setQueryState(newQuery);
    debouncedGetSuggestions(newQuery);
  }, [debouncedGetSuggestions]);

  // Perform search
  const performSearch = useCallback((options: Partial<SearchOptions> = {}) => {
    const searchQuery = options.query || query;
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    if (options.query && options.query !== query) {
      setQueryState(options.query);
    }
    if (!options.query) {
      setCurrentPage(1); // Reset to first page on new search only if not from URL
    }
    debouncedSearch(searchQuery, options);
  }, [query, debouncedSearch]);

  // Clear search
  const clearSearch = useCallback(() => {
    setQueryState('');
    setResults([]);
    setSuggestions([]);
    setCategorySuggestions([]);
    setTotalResults(0);
    setCurrentPage(1);
  }, []);

  // Get suggestions manually
  const getSuggestions = useCallback((searchQuery: string) => {
    debouncedGetSuggestions(searchQuery);
  }, [debouncedGetSuggestions]);

  // Add to search history
  const addToHistory = useCallback((searchQuery: string) => {
    addToSearchHistory(searchQuery);
    setSearchHistory(getSearchHistory());
  }, []);

  // Clear search history
  const clearHistory = useCallback(() => {
    clearSearchHistory();
    setSearchHistory([]);
  }, []);

  // Set filters and trigger search
  const setFilters = useCallback((newFilters: SearchFilters) => {
    setFiltersState(newFilters);
    setCurrentPage(1); // Reset to first page when filters change
    if (query.trim()) {
      setIsLoading(true);
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  // Clear filters
  const clearFilters = useCallback(() => {
    setFiltersState({});
    setCurrentPage(1);
    if (query.trim()) {
      setIsLoading(true);
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  // Set sort by and trigger search
  const setSortBy = useCallback((newSortBy: string) => {
    setSortByState(newSortBy);
    setCurrentPage(1); // Reset to first page when sorting changes
    if (query.trim()) {
      setIsLoading(true);
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  // Set current page and trigger search
  const setCurrentPageWithSearch = useCallback((page: number) => {
    setCurrentPage(page);
    if (query.trim()) {
      setIsLoading(true);
      debouncedSearch(query);
    }
  }, [query, debouncedSearch]);

  const contextValue: SearchContextType = {
    // Search state
    query,
    results,
    suggestions,
    categorySuggestions,
    searchHistory,
    popularSearches,
    isLoading,
    totalResults,
    
    // Search actions
    setQuery,
    performSearch,
    clearSearch,
    getSuggestions,
    addToHistory,
    clearHistory,
    
    // Filters
    filters,
    setFilters,
    clearFilters,
    
    // Sorting and pagination
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage: setCurrentPageWithSearch,
    itemsPerPage
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
