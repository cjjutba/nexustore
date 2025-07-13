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

// Removed fuzzy matching to improve search precision

// Search scoring weights (enhanced for better e-commerce search)
const FIELD_WEIGHTS = {
  name: 15,        // Increased weight for product name
  brand: 12,       // Increased weight for brand
  category: 8,     // Increased weight for category
  description: 5,  // Slightly increased for description
  specs: 4,        // Increased for specs
  features: 4,     // Increased for features
  colors: 3,       // Increased for colors
  sizes: 2         // Increased for sizes
};

// Calculate relevance score for a product with improved precision
const calculateRelevanceScore = (product: Product, query: string): { score: number; matchedFields: string[] } => {
  const normalizedQuery = query.toLowerCase().trim();
  // Filter out very short words that could cause false positives, but keep important short words
  const importantShortWords = ['pro', 'max', 'air', 'mini', 'se', 'xl', 'xs', 'xr'];
  const queryWords = normalizedQuery.split(/\s+/).filter(word =>
    word.length > 2 || importantShortWords.includes(word.toLowerCase())
  );

  // If no meaningful words after filtering, return no score
  if (queryWords.length === 0) {
    return { score: 0, matchedFields: [] };
  }

  let totalScore = 0;
  const matchedFields: string[] = [];

  // Helper function to check field matches with stricter criteria
  const checkFieldMatch = (fieldValue: string | string[] | undefined, fieldName: string, weight: number) => {
    if (!fieldValue) return;

    const values = Array.isArray(fieldValue) ? fieldValue : [fieldValue];
    let fieldScore = 0;

    values.forEach(value => {
      const normalizedValue = value.toLowerCase();

      // Exact phrase match (highest priority)
      if (normalizedValue.includes(normalizedQuery)) {
        fieldScore += weight * 10; // Very high bonus for exact phrase matches
        if (!matchedFields.includes(fieldName)) matchedFields.push(fieldName);
        return; // Skip other checks if exact phrase found
      }

      // Exact full match gets highest bonus
      if (normalizedValue === normalizedQuery) {
        fieldScore += weight * 15;
        if (!matchedFields.includes(fieldName)) matchedFields.push(fieldName);
        return;
      }

      // Check if ALL query words are present (strict AND logic)
      const allWordsPresent = queryWords.every(word => {
        // Check for exact word boundaries first
        const wordBoundaryRegex = new RegExp(`\\b${escapeRegex(word)}\\b`, 'i');
        if (wordBoundaryRegex.test(normalizedValue)) {
          return true;
        }
        // Check if word starts with the query word (for partial matches like "Pro" in "Professional")
        const startsWithRegex = new RegExp(`\\b${escapeRegex(word)}`, 'i');
        return startsWithRegex.test(normalizedValue);
      });

      if (allWordsPresent) {
        // Calculate score based on how many words match exactly vs partially
        let exactMatches = 0;
        let partialMatches = 0;

        queryWords.forEach(word => {
          const wordBoundaryRegex = new RegExp(`\\b${escapeRegex(word)}\\b`, 'i');
          if (wordBoundaryRegex.test(normalizedValue)) {
            exactMatches++;
          } else {
            const startsWithRegex = new RegExp(`\\b${escapeRegex(word)}`, 'i');
            if (startsWithRegex.test(normalizedValue)) {
              partialMatches++;
            }
          }
        });

        // Score based on match quality
        fieldScore += (exactMatches * weight * 2) + (partialMatches * weight * 0.5);
        if (!matchedFields.includes(fieldName)) matchedFields.push(fieldName);
      }
    });

    totalScore += fieldScore;
  };

  // Helper function to escape regex special characters
  const escapeRegex = (string: string): string => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  // Check all searchable fields with priority order
  checkFieldMatch(product.name, 'name', FIELD_WEIGHTS.name);
  checkFieldMatch(product.brand, 'brand', FIELD_WEIGHTS.brand);
  checkFieldMatch(product.category, 'category', FIELD_WEIGHTS.category);
  checkFieldMatch(product.description, 'description', FIELD_WEIGHTS.description);
  checkFieldMatch(product.specs, 'specs', FIELD_WEIGHTS.specs);
  checkFieldMatch(product.features, 'features', FIELD_WEIGHTS.features);
  checkFieldMatch(product.colors, 'colors', FIELD_WEIGHTS.colors);
  checkFieldMatch(product.sizes, 'sizes', FIELD_WEIGHTS.sizes);

  // Special bonus for brand + model combinations (e.g., "iPhone 15 Pro Max")
  const combinedBrandName = `${product.brand} ${product.name}`.toLowerCase();
  if (combinedBrandName.includes(normalizedQuery)) {
    totalScore += FIELD_WEIGHTS.name * 8; // Very high bonus for brand+name match
    if (!matchedFields.includes('brand+name')) matchedFields.push('brand+name');
  }

  // Additional bonus for queries where most words appear in the product name
  if (queryWords.length > 1) {
    const nameWordsFound = queryWords.filter(word =>
      product.name.toLowerCase().includes(word)
    ).length;

    const nameMatchRatio = nameWordsFound / queryWords.length;
    if (nameMatchRatio >= 0.7) { // 70% or more words found in name
      totalScore += FIELD_WEIGHTS.name * nameMatchRatio * 3;
    }
  }

  // Only apply bonuses if there's already a meaningful match
  if (totalScore > 10) {
    // Bonus scoring for product attributes (e-commerce specific)
    if (product.isNew) {
      totalScore += 2; // Bonus for new products
    }

    if (product.inStock) {
      totalScore += 3; // Bonus for in-stock products
    }

    if (product.rating >= 4.5) {
      totalScore += 2; // Bonus for highly rated products
    }

    // Bonus for flash deals and featured products
    if (product.isFlashDeal) {
      totalScore += 1;
    }

    if (product.isFeatured) {
      totalScore += 1;
    }
  }

  return { score: totalScore, matchedFields };
};

// Apply filters to products
const applyFilters = <T extends Product>(products: T[], filters: SearchFilters): T[] => {
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
    .filter(result => result.relevanceScore > 15); // Much higher threshold for precise results
  
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
