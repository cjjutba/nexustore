import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Filter, X, ChevronDown, ChevronUp, Search } from "lucide-react";
import { Product } from "@/data/products";

interface FilterState {
  categories: string[];
  brands: string[];
  sizes: string[];
  colors: string[];
  priceRanges: string[];
  ageRanges: string[];
  searchKeyword: string;
}

interface CategoryFilterProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
  categoryName: string;
}

const CategoryFilter = ({ products, onFilterChange, categoryName }: CategoryFilterProps) => {
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    brands: [],
    sizes: [],
    colors: [],
    priceRanges: [],
    ageRanges: [],
    searchKeyword: ""
  });

  const [expandedSections, setExpandedSections] = useState({
    subcategory: true,
    brand: true,
    size: true,
    color: true,
    price: true,
    age: false
  });

  // Extract unique filter options from products
  const getFilterOptions = () => {
    const brands = new Set<string>();
    const sizes = new Set<string>();
    const colors = new Set<string>();
    const ageRanges = new Set<string>();

    products.forEach(product => {
      if (product.brand) brands.add(product.brand);
      if (product.sizes) product.sizes.forEach(size => sizes.add(size));
      if (product.colors) product.colors.forEach(color => colors.add(color));
      if (product.ageRange) ageRanges.add(product.ageRange);
    });

    // Define subcategories based on category
    const subcategoryMap: { [key: string]: string[] } = {
      'Fashion': ['Clothing', 'Shoes', 'Accessories', 'Bags', 'Jackets'],
      'Electronics': ['Smartphones', 'Laptops', 'Tablets', 'Gaming', 'Accessories'],
      'Photography': ['Cameras', 'Lenses', 'Tripods', 'Lighting', 'Accessories'],
      'Computers': ['Laptops', 'Desktops', 'Keyboards', 'Monitors', 'Storage'],
      'Baby & Kids': ['Toys', 'Clothing', 'Safety', 'Feeding', 'Strollers'],
      'Tools': ['Power Tools', 'Hand Tools', 'Measuring', 'Storage', 'Safety'],
      'Audio': ['Headphones', 'Speakers', 'Microphones', 'Amplifiers', 'Accessories'],
      'Wearables': ['Smartwatches', 'Fitness Trackers', 'VR Headsets', 'Smart Glasses'],
      'Sports': ['Fitness', 'Outdoor', 'Team Sports', 'Water Sports', 'Equipment'],
      'Accessories': ['Bags', 'Jewelry', 'Sunglasses', 'Wallets', 'Phone Cases']
    };

    return {
      subcategories: subcategoryMap[categoryName] || [],
      brands: Array.from(brands).sort(),
      sizes: Array.from(sizes).sort(),
      colors: Array.from(colors).sort(),
      ageRanges: Array.from(ageRanges).sort()
    };
  };

  const filterOptions = useMemo(() => getFilterOptions(), [products, categoryName]);

  const priceRanges = [
    { label: "Under ₱5,000", min: 0, max: 5000 },
    { label: "₱5,000 - ₱15,000", min: 5000, max: 15000 },
    { label: "₱15,000 - ₱50,000", min: 15000, max: 50000 },
    { label: "Over ₱50,000", min: 50000, max: Infinity }
  ];

  // Helper function to determine product subcategory
  const getProductSubcategory = (product: Product): string => {
    const name = product.name.toLowerCase();

    // Fashion subcategory mapping
    if (categoryName === 'Fashion') {
      if (name.includes('t-shirt') || name.includes('shirt') || name.includes('polo') || name.includes('dress') || name.includes('suit')) return 'Clothing';
      if (name.includes('shoe') || name.includes('sneaker') || name.includes('boot')) return 'Shoes';
      if (name.includes('jacket') || name.includes('coat')) return 'Jackets';
      if (name.includes('bag') || name.includes('backpack')) return 'Bags';
      if (name.includes('jean') || name.includes('pant')) return 'Clothing';
      return 'Accessories';
    }

    // Electronics subcategory mapping
    if (categoryName === 'Electronics') {
      if (name.includes('iphone') || name.includes('galaxy') || name.includes('smartphone') || name.includes('phone')) return 'Smartphones';
      if (name.includes('laptop') || name.includes('macbook') || name.includes('notebook')) return 'Laptops';
      if (name.includes('tablet') || name.includes('ipad')) return 'Tablets';
      if (name.includes('gaming') || name.includes('mouse') || name.includes('keyboard') || name.includes('controller')) return 'Gaming';
      if (name.includes('speaker') || name.includes('headphone') || name.includes('earbuds') || name.includes('airpods')) return 'Accessories';
      if (name.includes('tv') || name.includes('monitor') || name.includes('display')) return 'Accessories';
      return 'Accessories';
    }

    // Photography subcategory mapping
    if (categoryName === 'Photography') {
      if (name.includes('camera') || name.includes('dslr') || name.includes('mirrorless')) return 'Cameras';
      if (name.includes('lens') || name.includes('50mm') || name.includes('85mm') || name.includes('24-70')) return 'Lenses';
      if (name.includes('tripod') || name.includes('stand')) return 'Tripods';
      if (name.includes('light') || name.includes('flash') || name.includes('led')) return 'Lighting';
      return 'Accessories';
    }

    // Computers subcategory mapping
    if (categoryName === 'Computers') {
      if (name.includes('laptop') || name.includes('macbook') || name.includes('notebook')) return 'Laptops';
      if (name.includes('desktop') || name.includes('pc') || name.includes('tower')) return 'Desktops';
      if (name.includes('keyboard') || name.includes('mechanical')) return 'Keyboards';
      if (name.includes('monitor') || name.includes('display') || name.includes('screen')) return 'Monitors';
      if (name.includes('ssd') || name.includes('hdd') || name.includes('drive') || name.includes('storage')) return 'Storage';
      return 'Accessories';
    }

    // Baby & Kids subcategory mapping
    if (categoryName === 'Baby & Kids') {
      if (name.includes('toy') || name.includes('doll') || name.includes('puzzle') || name.includes('game')) return 'Toys';
      if (name.includes('shirt') || name.includes('dress') || name.includes('pant') || name.includes('clothing')) return 'Clothing';
      if (name.includes('safety') || name.includes('gate') || name.includes('lock')) return 'Safety';
      if (name.includes('bottle') || name.includes('feeding') || name.includes('high chair')) return 'Feeding';
      if (name.includes('stroller') || name.includes('car seat') || name.includes('carrier')) return 'Strollers';
      return 'Toys';
    }

    // Tools subcategory mapping
    if (categoryName === 'Tools') {
      if (name.includes('drill') || name.includes('saw') || name.includes('grinder') || name.includes('power')) return 'Power Tools';
      if (name.includes('wrench') || name.includes('screwdriver') || name.includes('hammer') || name.includes('hand')) return 'Hand Tools';
      if (name.includes('tape') || name.includes('ruler') || name.includes('level') || name.includes('measuring')) return 'Measuring';
      if (name.includes('box') || name.includes('chest') || name.includes('cabinet') || name.includes('storage')) return 'Storage';
      if (name.includes('safety') || name.includes('helmet') || name.includes('glove') || name.includes('goggle')) return 'Safety';
      return 'Hand Tools';
    }

    // Audio subcategory mapping
    if (categoryName === 'Audio') {
      if (name.includes('headphone') || name.includes('earphone') || name.includes('earbuds') || name.includes('airpods')) return 'Headphones';
      if (name.includes('speaker') || name.includes('bluetooth') || name.includes('wireless')) return 'Speakers';
      if (name.includes('microphone') || name.includes('mic') || name.includes('recording')) return 'Microphones';
      if (name.includes('amplifier') || name.includes('amp') || name.includes('receiver')) return 'Amplifiers';
      return 'Accessories';
    }

    // Wearables subcategory mapping
    if (categoryName === 'Wearables') {
      if (name.includes('watch') || name.includes('apple watch') || name.includes('smartwatch')) return 'Smartwatches';
      if (name.includes('fitness') || name.includes('tracker') || name.includes('band')) return 'Fitness Trackers';
      if (name.includes('vr') || name.includes('virtual') || name.includes('headset')) return 'VR Headsets';
      if (name.includes('glasses') || name.includes('smart glasses') || name.includes('ar')) return 'Smart Glasses';
      return 'Smartwatches';
    }

    // Sports subcategory mapping
    if (categoryName === 'Sports') {
      if (name.includes('fitness') || name.includes('gym') || name.includes('weight') || name.includes('dumbbell')) return 'Fitness';
      if (name.includes('outdoor') || name.includes('camping') || name.includes('hiking') || name.includes('tent')) return 'Outdoor';
      if (name.includes('basketball') || name.includes('football') || name.includes('soccer') || name.includes('team')) return 'Team Sports';
      if (name.includes('swimming') || name.includes('water') || name.includes('surf') || name.includes('diving')) return 'Water Sports';
      return 'Equipment';
    }

    // Accessories subcategory mapping
    if (categoryName === 'Accessories') {
      if (name.includes('bag') || name.includes('backpack') || name.includes('purse') || name.includes('wallet')) return 'Bags';
      if (name.includes('jewelry') || name.includes('necklace') || name.includes('ring') || name.includes('earring')) return 'Jewelry';
      if (name.includes('sunglasses') || name.includes('glasses') || name.includes('eyewear')) return 'Sunglasses';
      if (name.includes('wallet') || name.includes('purse') || name.includes('money')) return 'Wallets';
      if (name.includes('case') || name.includes('cover') || name.includes('phone case')) return 'Phone Cases';
      return 'Bags';
    }

    // Add other category mappings as needed
    return 'Other';
  };

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

    // Filter by subcategories
    if (filters.categories.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        const subcategory = getProductSubcategory(product);
        return filters.categories.includes(subcategory);
      });
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

    // Filter by age ranges (for Baby & Kids)
    if (filters.ageRanges.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        product.ageRange && filters.ageRanges.includes(product.ageRange)
      );
    }

    return filteredProducts;
  }, [filters, products, categoryName]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredProducts = applyFilters();
      onFilterChange(filteredProducts);
    }, 100); // Small delay to debounce filter changes

    return () => clearTimeout(timeoutId);
  }, [applyFilters, onFilterChange]);

  const handleFilterChange = (filterType: keyof FilterState, value: string) => {
    if (filterType === 'searchKeyword') {
      setFilters(prev => ({
        ...prev,
        searchKeyword: value
      }));
    } else {
      setFilters(prev => {
        const currentArray = prev[filterType] as string[];
        return {
          ...prev,
          [filterType]: currentArray.includes(value)
            ? currentArray.filter((item: string) => item !== value)
            : [...currentArray, value]
        };
      });
    }
  };

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      brands: [],
      sizes: [],
      colors: [],
      priceRanges: [],
      ageRanges: [],
      searchKeyword: ""
    });
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    Object.entries(filters).forEach(([key, value]) => {
      if (key === 'searchKeyword') {
        if (value && value.trim() !== '') count += 1;
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

  const removeFilter = (filterType: keyof FilterState, value: string) => {
    if (filterType === 'searchKeyword') {
      setFilters(prev => ({
        ...prev,
        searchKeyword: ""
      }));
    } else {
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
                    onClick={() => removeFilter('searchKeyword', '')}
                    className="hover:bg-accent/20 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}

              {/* Other filters */}
              {Object.entries(filters).map(([filterType, values]) => {
                if (filterType === 'searchKeyword') return null;
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

        {/* Subcategory Filter */}
        {filterOptions.subcategories.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => toggleSection('subcategory')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h4 className="font-medium">Subcategory</h4>
              {expandedSections.subcategory ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {expandedSections.subcategory && (
              <div className="space-y-2">
                {filterOptions.subcategories.map((subcategory) => (
                  <label key={subcategory} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-border"
                      checked={filters.categories.includes(subcategory)}
                      onChange={() => handleFilterChange('categories', subcategory)}
                    />
                    <span className="text-sm">{subcategory}</span>
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

        {/* Age Range Filter (for Baby & Kids) */}
        {filterOptions.ageRanges.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => toggleSection('age')}
              className="flex items-center justify-between w-full mb-3"
            >
              <h4 className="font-medium">Age Range</h4>
              {expandedSections.age ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
            {expandedSections.age && (
              <div className="space-y-2">
                {filterOptions.ageRanges.map((ageRange) => (
                  <label key={ageRange} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="rounded border-border"
                      checked={filters.ageRanges.includes(ageRange)}
                      onChange={() => handleFilterChange('ageRanges', ageRange)}
                    />
                    <span className="text-sm">{ageRange}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CategoryFilter;
