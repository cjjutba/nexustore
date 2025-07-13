import { Product } from "@/data/products";

export interface SearchResult extends Product {
  relevanceScore: number;
  matchedFields: string[];
}

export interface SearchFilters {
  category?: string;
  brand?: string;
  priceRange?: { min: number; max: number };
  rating?: number;
  inStock?: boolean;
  isNew?: boolean;
}

export interface SearchOptions {
  query: string;
  filters?: SearchFilters;
  sortBy?: 'relevance' | 'price-low' | 'price-high' | 'rating' | 'newest';
  limit?: number;
  offset?: number;
}

// Fuzzy matching utility
const calculateSimilarity = (str1: string, str2: string): number => {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  
  if (longer.length === 0) return 1.0;
  
  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
};

const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = [];
  
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  
  return matrix[str2.length][str1.length];
};

// Search scoring weights
const FIELD_WEIGHTS = {
  name: 10,
  brand: 8,
  category: 6,
  description: 4,
  specs: 3,
  features: 3,
  colors: 2,
  sizes: 1
};

// Calculate relevance score for a product
const calculateRelevanceScore = (product: Product, query: string): { score: number; matchedFields: string[] } => {
  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);
  let totalScore = 0;
  const matchedFields: string[] = [];

  // Helper function to check field matches
  const checkFieldMatch = (fieldValue: string | string[] | undefined, fieldName: string, weight: number) => {
    if (!fieldValue) return;
    
    const values = Array.isArray(fieldValue) ? fieldValue : [fieldValue];
    let fieldScore = 0;
    
    values.forEach(value => {
      const normalizedValue = value.toLowerCase();
      
      // Exact match bonus
      if (normalizedValue.includes(normalizedQuery)) {
        fieldScore += weight * 2;
        if (!matchedFields.includes(fieldName)) matchedFields.push(fieldName);
      }
      
      // Word-by-word matching
      queryWords.forEach(word => {
        if (normalizedValue.includes(word)) {
          fieldScore += weight;
          if (!matchedFields.includes(fieldName)) matchedFields.push(fieldName);
        }
        
        // Fuzzy matching for typos
        const similarity = calculateSimilarity(word, normalizedValue);
        if (similarity > 0.7) {
          fieldScore += weight * similarity * 0.5;
          if (!matchedFields.includes(fieldName)) matchedFields.push(fieldName);
        }
      });
    });
    
    totalScore += fieldScore;
  };

  // Check all searchable fields
  checkFieldMatch(product.name, 'name', FIELD_WEIGHTS.name);
  checkFieldMatch(product.brand, 'brand', FIELD_WEIGHTS.brand);
  checkFieldMatch(product.category, 'category', FIELD_WEIGHTS.category);
  checkFieldMatch(product.description, 'description', FIELD_WEIGHTS.description);
  checkFieldMatch(product.specs, 'specs', FIELD_WEIGHTS.specs);
  checkFieldMatch(product.features, 'features', FIELD_WEIGHTS.features);
  checkFieldMatch(product.colors, 'colors', FIELD_WEIGHTS.colors);
  checkFieldMatch(product.sizes, 'sizes', FIELD_WEIGHTS.sizes);

  return { score: totalScore, matchedFields };
};

// Apply filters to products
const applyFilters = (products: Product[], filters: SearchFilters): Product[] => {
  return products.filter(product => {
    if (filters.category && filters.category !== 'All' && product.category !== filters.category) {
      return false;
    }
    
    if (filters.brand && filters.brand !== 'All' && product.brand !== filters.brand) {
      return false;
    }
    
    if (filters.priceRange) {
      const { min, max } = filters.priceRange;
      if (product.price < min || product.price > max) {
        return false;
      }
    }
    
    if (filters.rating && product.rating < filters.rating) {
      return false;
    }
    
    if (filters.inStock !== undefined && product.inStock !== filters.inStock) {
      return false;
    }
    
    if (filters.isNew !== undefined && product.isNew !== filters.isNew) {
      return false;
    }
    
    return true;
  });
};

// Main search function
export const searchProducts = (products: Product[], options: SearchOptions): SearchResult[] => {
  const { query, filters = {}, sortBy = 'relevance', limit, offset = 0 } = options;
  
  if (!query.trim()) {
    // If no query, return filtered products with default scoring
    const filtered = applyFilters(products, filters);
    const results = filtered.map(product => ({
      ...product,
      relevanceScore: 0,
      matchedFields: []
    }));
    
    return applySorting(results, sortBy).slice(offset, limit ? offset + limit : undefined);
  }
  
  // Calculate relevance scores
  const scoredProducts: SearchResult[] = products
    .map(product => {
      const { score, matchedFields } = calculateRelevanceScore(product, query);
      return {
        ...product,
        relevanceScore: score,
        matchedFields
      };
    })
    .filter(result => result.relevanceScore > 0); // Only include products with matches
  
  // Apply filters
  const filtered = applyFilters(scoredProducts, filters);
  
  // Apply sorting
  const sorted = applySorting(filtered, sortBy);
  
  // Apply pagination
  return sorted.slice(offset, limit ? offset + limit : undefined);
};

// Apply sorting to search results
const applySorting = (results: SearchResult[], sortBy: string): SearchResult[] => {
  const sorted = [...results];

  switch (sortBy) {
    case 'price-low':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-high':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    case 'relevance':
    default:
      return sorted.sort((a, b) => b.relevanceScore - a.relevanceScore);
  }
};

// Generate search suggestions
export const generateSearchSuggestions = (products: Product[], query: string, limit = 5): string[] => {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase();
  const suggestions = new Set<string>();

  products.forEach(product => {
    // Product name suggestions
    if (product.name.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(product.name);
    }

    // Brand suggestions
    if (product.brand.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(product.brand);
    }

    // Category suggestions
    if (product.category.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(product.category);
    }
  });

  return Array.from(suggestions).slice(0, limit);
};

// Get popular search terms (mock data - in real app would come from analytics)
export const getPopularSearches = (): string[] => {
  return [
    "laptop",
    "smartphone",
    "headphones",
    "camera",
    "watch",
    "shoes",
    "bag",
    "gaming"
  ];
};

// Search history management
const SEARCH_HISTORY_KEY = 'nexustore_search_history';
const MAX_HISTORY_ITEMS = 10;

export const getSearchHistory = (): string[] => {
  try {
    const history = localStorage.getItem(SEARCH_HISTORY_KEY);
    return history ? JSON.parse(history) : [];
  } catch {
    return [];
  }
};

export const addToSearchHistory = (query: string): void => {
  if (!query.trim()) return;

  try {
    const history = getSearchHistory();
    const updatedHistory = [query, ...history.filter(item => item !== query)];
    const trimmedHistory = updatedHistory.slice(0, MAX_HISTORY_ITEMS);

    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(trimmedHistory));
  } catch {
    // Silently fail if localStorage is not available
  }
};

export const clearSearchHistory = (): void => {
  try {
    localStorage.removeItem(SEARCH_HISTORY_KEY);
  } catch {
    // Silently fail if localStorage is not available
  }
};

// Get category suggestions based on query
export const getCategorySuggestions = (products: Product[], query: string): Array<{category: string, count: number}> => {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase();
  const categoryMatches = new Map<string, number>();

  products.forEach(product => {
    const matchesQuery =
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.brand.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery) ||
      product.description?.toLowerCase().includes(normalizedQuery);

    if (matchesQuery) {
      const count = categoryMatches.get(product.category) || 0;
      categoryMatches.set(product.category, count + 1);
    }
  });

  return Array.from(categoryMatches.entries())
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
};

// Debounce utility for search input
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
