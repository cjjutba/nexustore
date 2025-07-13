import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, X, ChevronDown, ChevronUp, Search, Star } from "lucide-react";
import { Product, getAllCategories, getAllBrands, getPriceRanges } from "@/data/products";

interface FilterState {
  categories: string[];
  brands: string[];
  sizes: string[];
  colors: string[];
  priceRanges: string[];
  searchKeyword: string;
  showNewOnly: boolean;
  showInStockOnly: boolean;
  minRating: number;
}

interface ShopFilterProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
  onPageReset?: () => void;
}

const ShopFilter = ({ products, onFilterChange, onPageReset }: ShopFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    sizes: [],
    colors: [],
    priceRanges: [],
    searchKeyword: "",
    showNewOnly: false,
    showInStockOnly: false,
    minRating: 0
  });

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    size: true,
    color: true,
    price: true,
    rating: true,
    additional: true
  });

  // Get filter options from all products
  const getFilterOptions = () => {
    const categories = getAllCategories().filter(cat => cat !== 'All');
    const brands = getAllBrands().filter(brand => brand !== 'All');
    const sizes = new Set<string>();
    const colors = new Set<string>();

    products.forEach(product => {
      if (product.sizes) product.sizes.forEach(size => sizes.add(size));
      if (product.colors) product.colors.forEach(color => colors.add(color));
    });

    return {
      categories,
      brands,
      sizes: Array.from(sizes).sort(),
      colors: Array.from(colors).sort()
    };
  };

  const filterOptions = useMemo(() => getFilterOptions(), [products]);
  const priceRanges = getPriceRanges();

  // Apply filters to products
  const applyFilters = useCallback(() => {
    let filteredProducts = [...products];

    // Filter by search keyword
    if (filters.searchKeyword && filters.searchKeyword.trim() !== '') {
      const keyword = filters.searchKeyword.toLowerCase().trim();
      filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword) ||
        product.description?.toLowerCase().includes(keyword) ||
        (product.specs && product.specs.some(spec => spec.toLowerCase().includes(keyword))) ||
        (product.colors && product.colors.some(color => color.toLowerCase().includes(keyword)))
      );
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        filters.categories.includes(product.category)
      );
    }

    // Filter by brands
    if (filters.brands.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        filters.brands.includes(product.brand)
      );
    }

    // Filter by sizes
    if (filters.sizes.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        product.sizes && product.sizes.some(size => filters.sizes.includes(size))
      );
    }

    // Filter by colors
    if (filters.colors.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        product.colors && product.colors.some(color => filters.colors.includes(color))
      );
    }

    // Filter by price ranges
    if (filters.priceRanges.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return filters.priceRanges.some(rangeLabel => {
          const range = priceRanges.find(r => r.label === rangeLabel);
          if (!range) return false;
          return product.price >= range.min && product.price < range.max;
        });
      });
    }

    // Filter by new products only
    if (filters.showNewOnly) {
      filteredProducts = filteredProducts.filter(product => product.isNew);
    }

    // Filter by in stock only
    if (filters.showInStockOnly) {
      filteredProducts = filteredProducts.filter(product => product.inStock);
    }

    // Filter by minimum rating
    if (filters.minRating > 0) {
      filteredProducts = filteredProducts.filter(product => product.rating >= filters.minRating);
    }

    return filteredProducts;
  }, [filters, products, priceRanges]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredProducts = applyFilters();
      onFilterChange(filteredProducts);
    }, 100); // Small delay to debounce filter changes

    return () => clearTimeout(timeoutId);
  }, [applyFilters]); // Removed onFilterChange from dependencies to prevent infinite loop

  const handleFilterChange = (filterType: keyof FilterState, value: string | boolean | number) => {
    // Reset page when filters change
    if (onPageReset) {
      onPageReset();
    }

    if (filterType === 'searchKeyword') {
      setFilters(prev => ({
        ...prev,
        searchKeyword: value as string
      }));
    } else if (filterType === 'showNewOnly' || filterType === 'showInStockOnly') {
      setFilters(prev => ({
        ...prev,
        [filterType]: value as boolean
      }));
    } else if (filterType === 'minRating') {
      setFilters(prev => ({
        ...prev,
        minRating: value as number
      }));
    } else {
      setFilters(prev => {
        const currentArray = prev[filterType] as string[];
        return {
          ...prev,
          [filterType]: currentArray.includes(value as string)
            ? currentArray.filter((item: string) => item !== value)
            : [...currentArray, value as string]
        };
      });
    }
  };

  const clearAllFilters = () => {
    // Reset page when clearing filters
    if (onPageReset) {
      onPageReset();
    }

    setFilters({
      categories: [],
      brands: [],
      sizes: [],
      colors: [],
      priceRanges: [],
      searchKeyword: "",
      showNewOnly: false,
      showInStockOnly: false,
      minRating: 0
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'searchKeyword') {
        if (value && (value as string).trim() !== '') count += 1;
      } else if (key === 'showNewOnly' || key === 'showInStockOnly') {
        if (value) count += 1;
      } else if (key === 'minRating') {
        if (value > 0) count += 1;
      } else {
        count += (value as string[]).length;
      }
    });
    return count;
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const removeFilter = (filterType: keyof FilterState, value?: string) => {
    if (filterType === 'searchKeyword') {
      setFilters(prev => ({
        ...prev,
        searchKeyword: ""
      }));
    } else if (filterType === 'showNewOnly' || filterType === 'showInStockOnly') {
      setFilters(prev => ({
        ...prev,
        [filterType]: false
      }));
    } else if (filterType === 'minRating') {
      setFilters(prev => ({
        ...prev,
        minRating: 0
      }));
    } else if (value) {
      setFilters(prev => ({
        ...prev,
        [filterType]: (prev[filterType] as string[]).filter((item: string) => item !== value)
      }));
    }
  };

  const activeFiltersCount = getActiveFiltersCount();

  return (
    <Card className="h-fit">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
            {activeFiltersCount > 0 && (
              <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
          </h3>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-destructive hover:text-destructive"
            >
              Clear All
            </Button>
          )}
        </div>

        {/* Search Input */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">Search Products</h4>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by name, brand, or description..."
              value={filters.searchKeyword}
              onChange={(e) => handleFilterChange('searchKeyword', e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <div className="mb-6">
            <h4 className="text-sm font-medium mb-3">Active Filters:</h4>
            <div className="flex flex-wrap gap-2">
              {/* Search keyword filter */}
              {filters.searchKeyword && filters.searchKeyword.trim() !== '' && (
                <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-sm">
                  <span>Search: "{filters.searchKeyword}"</span>
                  <button
                    onClick={() => removeFilter('searchKeyword')}
                    className="hover:bg-accent/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Boolean filters */}
              {filters.showNewOnly && (
                <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-sm">
                  <span>New Only</span>
                  <button
                    onClick={() => removeFilter('showNewOnly')}
                    className="hover:bg-accent/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {filters.showInStockOnly && (
                <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-sm">
                  <span>In Stock Only</span>
                  <button
                    onClick={() => removeFilter('showInStockOnly')}
                    className="hover:bg-accent/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Rating filter */}
              {filters.minRating > 0 && (
                <div className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-sm">
                  <span>{filters.minRating}+ Stars</span>
                  <button
                    onClick={() => removeFilter('minRating')}
                    className="hover:bg-accent/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Array filters */}
              {Object.entries(filters).map(([filterType, values]) => {
                if (!Array.isArray(values)) return null;
                return (values as string[]).map((value: string) => (
                  <div
                    key={`${filterType}-${value}`}
                    className="flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded-md text-sm"
                  >
                    <span>{value}</span>
                    <button
                      onClick={() => removeFilter(filterType as keyof FilterState, value)}
                      className="hover:bg-accent/20 rounded-full p-0.5"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ));
              })}
            </div>
          </div>
        )}

        {/* Category Filter */}
        {filterOptions.categories.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => toggleSection('category')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h4 className="font-medium">Category</h4>
              {expandedSections.category ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {expandedSections.category && (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {filterOptions.categories.map((category) => (
                  <label key={category} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-border"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleFilterChange('categories', category)}
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Brand Filter */}
        {filterOptions.brands.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => toggleSection('brand')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h4 className="font-medium">Brand</h4>
              {expandedSections.brand ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {expandedSections.brand && (
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {filterOptions.brands.map((brand) => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-border"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleFilterChange('brands', brand)}
                    />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Size Filter */}
        {filterOptions.sizes.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => toggleSection('size')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h4 className="font-medium">Size</h4>
              {expandedSections.size ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {expandedSections.size && (
              <div className="grid grid-cols-3 gap-2">
                {filterOptions.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleFilterChange('sizes', size)}
                    className={`border rounded px-2 py-1 text-xs transition-colors ${
                      filters.sizes.includes(size)
                        ? 'border-accent bg-accent text-accent-foreground'
                        : 'border-border hover:bg-muted'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Color Filter */}
        {filterOptions.colors.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => toggleSection('color')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h4 className="font-medium">Color</h4>
              {expandedSections.color ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {expandedSections.color && (
              <div className="space-y-2">
                {filterOptions.colors.map((color) => (
                  <label key={color} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-border"
                      checked={filters.colors.includes(color)}
                      onChange={() => handleFilterChange('colors', color)}
                    />
                    <span className="text-sm">{color}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Price Range Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('price')}
            className="flex items-center justify-between w-full mb-3"
          >
            <h4 className="font-medium">Price Range</h4>
            {expandedSections.price ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSections.price && (
            <div className="space-y-2">
              {priceRanges.map((range) => (
                <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-border"
                    checked={filters.priceRanges.includes(range.label)}
                    onChange={() => handleFilterChange('priceRanges', range.label)}
                  />
                  <span className="text-sm">{range.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('rating')}
            className="flex items-center justify-between w-full mb-3"
          >
            <h4 className="font-medium">Minimum Rating</h4>
            {expandedSections.rating ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSections.rating && (
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  checked={filters.minRating === 0}
                  onChange={() => handleFilterChange('minRating', 0)}
                  className="rounded border-border"
                />
                <span className="text-sm">All Ratings</span>
              </label>
              {[4, 3, 2, 1].map((rating) => (
                <label key={rating} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    checked={filters.minRating === rating}
                    onChange={() => handleFilterChange('minRating', rating)}
                    className="rounded border-border"
                  />
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm ml-1">& up</span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Additional Filters */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection('additional')}
            className="flex items-center justify-between w-full mb-3"
          >
            <h4 className="font-medium">Additional Filters</h4>
            {expandedSections.additional ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {expandedSections.additional && (
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.showNewOnly}
                  onChange={(e) => handleFilterChange('showNewOnly', e.target.checked)}
                  className="rounded border-border"
                />
                <span className="text-sm">New Products Only</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.showInStockOnly}
                  onChange={(e) => handleFilterChange('showInStockOnly', e.target.checked)}
                  className="rounded border-border"
                />
                <span className="text-sm">In Stock Only</span>
              </label>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ShopFilter;
