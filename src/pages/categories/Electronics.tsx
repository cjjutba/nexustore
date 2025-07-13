import { useState, useEffect, useCallback, useMemo } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import CategoryFilter from "@/components/CategoryFilter";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Grid, List, Heart, Star, Smartphone } from "lucide-react";
import { getProductsByCategory, formatPrice, type Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useScrollToTop } from "@/utils/scrollToTop";

const Electronics = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const { toggleWaitlist, isInWaitlist } = useCart();
  const { toast } = useToast();

  // Scroll to top when component mounts (when navigating to this page)
  useScrollToTop();

  const allProducts = useMemo(() => getProductsByCategory('Electronics'), []);

  // Initialize filtered products when component mounts
  useEffect(() => {
    setFilteredProducts(allProducts);
  }, [allProducts]);

  // Handle filter changes
  const handleFilterChange = useCallback((filtered: Product[]) => {
    setFilteredProducts(filtered);
  }, []);

  const handlePageReset = useCallback(() => {
    setCurrentPage(1);
  }, []);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = sortedProducts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the main content area, not the very top
    const mainContent = document.querySelector('.container');
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleWaitlist = (e: React.MouseEvent, product: Product) => {
    e.preventDefault(); // Prevent navigation to product detail
    e.stopPropagation(); // Stop event bubbling

    try {
      // Toggle waitlist with default options (first available size/color if any)
      const selectedOptions = {
        size: product.sizes && product.sizes.length > 0 ? product.sizes[0] : undefined,
        color: product.colors && product.colors.length > 0 ? product.colors[0] : undefined,
      };

      const wasAdded = toggleWaitlist(product, selectedOptions);

      if (wasAdded) {
        toast({
          title: "Added to Wishlist!",
          description: `${product.name} has been added to your wishlist.`,
          variant: "default",
        });
      } else {
        toast({
          title: "Removed from Wishlist",
          description: `${product.name} has been removed from your wishlist.`,
          variant: "default",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update wishlist. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Smartphone className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Electronics</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <CategoryFilter
              products={allProducts}
              onFilterChange={handleFilterChange}
              onPageReset={handlePageReset}
              categoryName="Electronics"
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {currentProducts.length} of {sortedProducts.length} electronic products
              </p>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-border rounded-md px-3 py-2 bg-background"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>

                {/* View Mode */}
                <div className="flex border border-border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {currentProducts.map((product) => (
                <Link key={product.id} to={`/categories/electronics/${product.id}`} className="group">
                  <Card className={`h-full hover:shadow-premium-lg transition-all duration-300 group-hover:scale-105 overflow-hidden ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}>
                    <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-64'}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                          New
                        </div>
                      )}
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`absolute top-3 right-3 transition-all duration-300 hover:scale-110 ${
                          isInWaitlist(product.id, {
                            size: product.sizes?.[0],
                            color: product.colors?.[0]
                          })
                            ? 'bg-red-500 text-white hover:bg-red-600'
                            : 'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'
                        }`}
                        onClick={(e) => handleToggleWaitlist(e, product)}
                      >
                        <Heart className={`h-4 w-4 ${
                          isInWaitlist(product.id, {
                            size: product.sizes?.[0],
                            color: product.colors?.[0]
                          }) ? 'fill-current' : ''
                        }`} />
                      </Button>
                    </div>
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating) 
                                  ? 'text-accent fill-accent' 
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-foreground">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <>
                            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                            <span className="text-xs bg-success-light text-success px-2 py-1 rounded">
                              Save {formatPrice(product.originalPrice - product.price)}
                            </span>
                          </>
                        )}
                      </div>
                      {product.specs && (
                        <div className="text-xs text-muted-foreground">
                          <div className="flex flex-wrap gap-1">
                            {product.specs.slice(0, 2).map((spec, index) => (
                              <span key={index} className="bg-muted px-2 py-1 rounded">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              totalItems={sortedProducts.length}
            />
          </div>
        </div>
      </div>

      {/* Spacing before footer */}
      <div className="py-8"></div>

      <Footer />
    </div>
  );
};

export default Electronics;
