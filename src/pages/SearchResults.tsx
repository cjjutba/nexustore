import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Grid, List, Heart, Star, Filter, X, Search } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useScrollToTop } from "@/utils/scrollToTop";
import { formatPrice } from "@/data/products";
import { cn } from "@/lib/utils";
import SearchFilters from "@/components/search/SearchFilters";
import Pagination from "@/components/Pagination";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const {
    query,
    setQuery,
    results,
    isLoading,
    totalResults,
    performSearch,
    filters,
    setFilters,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    addToHistory
  } = useSearch();

  useScrollToTop();

  // Initialize search from URL parameters
  useEffect(() => {
    const urlQuery = searchParams.get('q') || '';
    const urlCategory = searchParams.get('category');
    const urlBrand = searchParams.get('brand');
    const urlSort = searchParams.get('sort') || 'relevance';
    const urlPage = parseInt(searchParams.get('page') || '1');

    if (urlQuery !== query) {
      setQuery(urlQuery);
    }

    // Set filters from URL
    const newFilters: any = {};
    if (urlCategory) newFilters.category = urlCategory;
    if (urlBrand) newFilters.brand = urlBrand;
    setFilters(newFilters);

    if (urlSort !== sortBy) {
      setSortBy(urlSort);
    }

    if (urlPage !== currentPage) {
      setCurrentPage(urlPage);
    }

    // Perform search if query exists
    if (urlQuery.trim()) {
      addToHistory(urlQuery);
      performSearch();
    }
  }, [searchParams]);

  // Update URL when search parameters change
  useEffect(() => {
    if (!query.trim()) return;

    const params = new URLSearchParams();
    params.set('q', query);
    
    if (filters.category && filters.category !== 'All') {
      params.set('category', filters.category);
    }
    if (filters.brand && filters.brand !== 'All') {
      params.set('brand', filters.brand);
    }
    if (sortBy !== 'relevance') {
      params.set('sort', sortBy);
    }
    if (currentPage > 1) {
      params.set('page', currentPage.toString());
    }

    setSearchParams(params);
  }, [query, filters, sortBy, currentPage, setSearchParams]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      selectedSize: product.sizes?.[0],
      selectedColor: product.colors?.[0]
    });

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalPages = Math.ceil(totalResults / itemsPerPage);

  if (!query.trim()) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Search NexuStore</h1>
          <p className="text-muted-foreground mb-8">Enter a search term to find products</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Results Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Search Results
              </h1>
              <p className="text-muted-foreground">
                {isLoading ? (
                  "Searching..."
                ) : totalResults > 0 ? (
                  <>Showing {results.length} of {totalResults} results for "<span className="font-medium">{query}</span>"</>
                ) : (
                  <>No results found for "<span className="font-medium">{query}</span>"</>
                )}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex items-center border border-border/30 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="px-3"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>

              {/* Sort Dropdown */}
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Customer Rating</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                </SelectContent>
              </Select>

              {/* Mobile Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          {/* Active Filters */}
          {(filters.category || filters.brand) && (
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-sm text-muted-foreground">Filters:</span>
              {filters.category && filters.category !== 'All' && (
                <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Category: {filters.category}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setFilters({ ...filters, category: undefined })}
                    className="h-auto p-0 ml-1 hover:bg-transparent"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              )}
              {filters.brand && filters.brand !== 'All' && (
                <div className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  Brand: {filters.brand}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setFilters({ ...filters, brand: undefined })}
                    className="h-auto p-0 ml-1 hover:bg-transparent"
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={cn(
            "w-80 flex-shrink-0",
            showFilters ? "block" : "hidden md:block"
          )}>
            <SearchFilters />
          </div>

          {/* Results Content */}
          <div className="flex-1 min-w-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-muted-foreground">Searching products...</p>
                </div>
              </div>
            ) : results.length > 0 ? (
              <>
                {/* Products Grid */}
                <div className={cn(
                  "grid gap-6 mb-8",
                  viewMode === 'grid' 
                    ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                    : "grid-cols-1"
                )}>
                  {results.map((product) => (
                    <Card key={product.id} className={cn(
                      "group hover:shadow-lg transition-all duration-300 overflow-hidden",
                      viewMode === 'list' && "flex flex-row"
                    )}>
                      <div className={cn(
                        "relative",
                        viewMode === 'list' ? "w-48 h-32 flex-shrink-0" : "h-64"
                      )}>
                        <Link to={`/product/${product.id}`}>
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                        
                        {/* Wishlist Heart */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute top-2 right-2 bg-background/80 hover:bg-background text-muted-foreground hover:text-red-500 rounded-full p-2"
                        >
                          <Heart className="w-4 h-4" />
                        </Button>

                        {/* Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {product.isNew && (
                            <div className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                              NEW
                            </div>
                          )}
                          {product.originalPrice && (
                            <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                              {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                            </div>
                          )}
                        </div>
                      </div>

                      <CardContent className={cn(
                        "p-4",
                        viewMode === 'list' && "flex-1 flex flex-col justify-between"
                      )}>
                        <div className="space-y-2 mb-4">
                          <Link to={`/product/${product.id}`}>
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {product.name}
                            </h3>
                          </Link>
                          
                          <p className="text-sm text-muted-foreground">
                            {product.brand} • {product.category}
                          </p>
                          
                          <div className="flex items-center gap-1">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={cn(
                                    "w-4 h-4",
                                    i < Math.floor(product.rating)
                                      ? "text-yellow-400 fill-current"
                                      : "text-muted-foreground"
                                  )}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">
                              ({product.reviews})
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-foreground">
                              {formatPrice(product.price)}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                {formatPrice(product.originalPrice)}
                              </span>
                            )}
                          </div>

                          <Button
                            onClick={() => handleAddToCart(product)}
                            className="w-full"
                            disabled={!product.inStock}
                          >
                            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any products matching your search for "{query}".
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Try:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Checking your spelling</li>
                    <li>• Using different keywords</li>
                    <li>• Searching for more general terms</li>
                    <li>• Browsing our categories</li>
                  </ul>
                  
                  <div className="pt-4">
                    <Link to="/shop">
                      <Button variant="outline">Browse All Products</Button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
