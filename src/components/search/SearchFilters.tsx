import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, X } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import { getAllCategories, getAllBrands, formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";

const SearchFilters = () => {
  const { filters, setFilters, clearFilters } = useSearch();
  const [priceRange, setPriceRange] = useState([0, 100000]);
  
  const categories = getAllCategories().filter(cat => cat !== 'All');
  const brands = getAllBrands().filter(brand => brand !== 'All');

  const handleCategoryChange = (category: string) => {
    setFilters({
      ...filters,
      category: filters.category === category ? undefined : category
    });
  };

  const handleBrandChange = (brand: string) => {
    setFilters({
      ...filters,
      brand: filters.brand === brand ? undefined : brand
    });
  };

  const handlePriceRangeChange = (values: number[]) => {
    setPriceRange(values);
    setFilters({
      ...filters,
      priceRange: { min: values[0], max: values[1] }
    });
  };

  const handleRatingChange = (rating: number) => {
    setFilters({
      ...filters,
      rating: filters.rating === rating ? undefined : rating
    });
  };

  const handleInStockChange = (checked: boolean) => {
    setFilters({
      ...filters,
      inStock: checked ? true : undefined
    });
  };

  const handleNewOnlyChange = (checked: boolean) => {
    setFilters({
      ...filters,
      isNew: checked ? true : undefined
    });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== undefined);

  return (
    <Card className="sticky top-4">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filters</CardTitle>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            Categories
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category}`}
                  checked={filters.category === category}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="text-sm cursor-pointer flex-1"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            Brands
          </h4>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {brands.slice(0, 10).map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={filters.brand === brand}
                  onCheckedChange={() => handleBrandChange(brand)}
                />
                <Label
                  htmlFor={`brand-${brand}`}
                  className="text-sm cursor-pointer flex-1"
                >
                  {brand}
                </Label>
              </div>
            ))}
            {brands.length > 10 && (
              <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                Show more brands
              </Button>
            )}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            Price Range
          </h4>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={handlePriceRangeChange}
              max={100000}
              min={0}
              step={1000}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>
        </div>

        {/* Customer Rating */}
        <div>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            Customer Rating
          </h4>
          <div className="space-y-2">
            {[4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox
                  id={`rating-${rating}`}
                  checked={filters.rating === rating}
                  onCheckedChange={() => handleRatingChange(rating)}
                />
                <Label
                  htmlFor={`rating-${rating}`}
                  className="text-sm cursor-pointer flex items-center gap-1"
                >
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-3 h-3",
                          i < rating
                            ? "text-yellow-400 fill-current"
                            : "text-muted-foreground"
                        )}
                      />
                    ))}
                  </div>
                  <span className="ml-1">& Up</span>
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            Availability
          </h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="in-stock"
                checked={filters.inStock === true}
                onCheckedChange={handleInStockChange}
              />
              <Label htmlFor="in-stock" className="text-sm cursor-pointer">
                In Stock Only
              </Label>
            </div>
          </div>
        </div>

        {/* Product Type */}
        <div>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            Product Type
          </h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="new-only"
                checked={filters.isNew === true}
                onCheckedChange={handleNewOnlyChange}
              />
              <Label htmlFor="new-only" className="text-sm cursor-pointer">
                New Arrivals Only
              </Label>
            </div>
          </div>
        </div>

        {/* Quick Price Filters */}
        <div>
          <h4 className="font-medium mb-3 text-sm uppercase tracking-wider text-muted-foreground">
            Quick Price Filters
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {[
              { label: "Under ₱5,000", min: 0, max: 5000 },
              { label: "₱5,000 - ₱15,000", min: 5000, max: 15000 },
              { label: "₱15,000 - ₱50,000", min: 15000, max: 50000 },
              { label: "Over ₱50,000", min: 50000, max: 100000 }
            ].map((range) => (
              <Button
                key={range.label}
                variant={
                  filters.priceRange?.min === range.min && filters.priceRange?.max === range.max
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() => {
                  setPriceRange([range.min, range.max]);
                  setFilters({
                    ...filters,
                    priceRange: { min: range.min, max: range.max }
                  });
                }}
                className="justify-start text-xs"
              >
                {range.label}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchFilters;
