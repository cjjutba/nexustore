import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Filter, Grid, List, Clock } from "lucide-react";
import { formatPrice, getFlashDeals } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useScrollToTop } from "@/utils/scrollToTop";
import { useFlashDealTimer } from "@/utils/flashDealTimer";

const FlashDeals = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('discount');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const { toggleWaitlist, isInWaitlist } = useCart();
  const { toast } = useToast();
  const { formattedTime } = useFlashDealTimer();

  // Scroll to top when component mounts (when navigating to this page)
  useScrollToTop();



  // Get flash deals from centralized data
  const flashDeals = getFlashDeals();

  // Sort products
  const sortedDeals = [...flashDeals].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return (b.flashDealData?.discount || 0) - (a.flashDealData?.discount || 0);
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'sold':
        return (b.flashDealData?.sold || 0) - (a.flashDealData?.sold || 0);
      default:
        return 0;
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedDeals.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDeals = sortedDeals.slice(startIndex, endIndex);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ⚡ FLASH DEALS
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Limited time offers with incredible discounts
            </p>
            <div className="inline-flex items-center gap-4 bg-destructive/10 border border-destructive/20 px-6 py-3 rounded-lg text-lg font-bold shadow-lg">
              <Clock className="w-5 h-5 text-destructive" />
              <span className="text-destructive">Sale ends in:</span>
              <span className="text-2xl font-mono text-destructive">{formattedTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - flex-1 makes it expand to fill available space */}
      <div className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <p className="text-muted-foreground">
            Showing {currentDeals.length} of {sortedDeals.length} flash deals
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="discount">Highest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="sold">Most Sold</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {currentDeals.map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/flash-deals/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border hover:border-accent/50">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                        viewMode === 'grid' ? 'h-48' : 'h-32'
                      }`}
                    />
                    <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-sm font-bold">
                      -{product.flashDealData?.discount || 0}%
                    </div>
                  </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-foreground">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    {product.flashDealData?.sold || 0} sold • {formattedTime} left
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all duration-300"
                      style={{width: `${((product.flashDealData?.sold || 0) / ((product.flashDealData?.sold || 0) + (product.flashDealData?.stock || 1))) * 100}%`}}
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Wishlist Heart Button - Outside Link to prevent navigation */}
            <Button
              variant="ghost"
              size="icon"
              className={`absolute top-3 right-3 transition-all duration-300 hover:scale-110 z-10 ${
                isInWaitlist(product.id, {
                  size: product.sizes?.[0],
                  color: product.colors?.[0]
                })
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'
              }`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const selectedOptions = {
                  size: product.sizes?.[0],
                  color: product.colors?.[0]
                };
                const wasAdded = toggleWaitlist(product, selectedOptions);
                toast({
                  title: wasAdded ? "Added to Wishlist!" : "Removed from Wishlist",
                  description: wasAdded
                    ? `${product.name} has been added to your wishlist.`
                    : `${product.name} has been removed from your wishlist.`,
                });
              }}
            >
              <Heart
                className={`h-4 w-4 transition-colors ${
                  isInWaitlist(product.id, {
                    size: product.sizes?.[0],
                    color: product.colors?.[0]
                  })
                    ? 'fill-current'
                    : ''
                }`}
              />
            </Button>
          </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            itemsPerPage={itemsPerPage}
            totalItems={sortedDeals.length}
          />
        </div>
      </div>

      {/* Footer - will stick to bottom */}
      <Footer />
    </div>
  );
};

export default FlashDeals;
