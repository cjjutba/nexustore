import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { formatPrice, getFeaturedProducts } from "@/data/products";

const FeaturedProducts = () => {
  const { toggleWaitlist, isInWaitlist } = useCart();
  const { toast } = useToast();

  // Handle toggle waitlist
  const handleToggleWaitlist = (e: React.MouseEvent, product: any) => {
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

  // Get featured products from centralized data
  const featuredProducts = getFeaturedProducts().slice(0, 8); // Show first 8 featured products

  return (
    <section className="py-5 mobile-xs:py-6 mobile-l:py-8 sm:py-12 tablet:py-16 lg:py-16 bg-pure-white">
      <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10">
        <div className="flex flex-col mobile-l:flex-row items-start mobile-l:items-center justify-between mb-4 mobile-l:mb-6 sm:mb-10 tablet:mb-12 lg:mb-12 gap-3 mobile-l:gap-4 sm:gap-5 tablet:gap-6">
          <div>
            <h2 className="text-lg mobile-l:text-xl sm:text-2xl tablet:text-3xl lg:text-3xl font-bold text-charcoal mb-1.5 mobile-l:mb-2 sm:mb-3 tablet:mb-4">FEATURED PRODUCTS</h2>
            <p className="text-dark-gray text-sm mobile-l:text-base sm:text-lg tablet:text-xl lg:text-lg">Handpicked premium products with great deals</p>
          </div>
          <Link to="/featured-products">
            <Button variant="outline" className="group border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-3 mobile-l:px-4 sm:px-6 tablet:px-6 py-2 mobile-l:py-2 sm:py-3 tablet:py-3 rounded-lg mobile-l:rounded-lg sm:rounded-xl transition-all duration-300 text-xs mobile-l:text-sm sm:text-base tablet:text-base min-h-[44px]">
              View All
              <ArrowRight className="ml-1.5 mobile-l:ml-2 sm:ml-2 tablet:ml-2 h-3 w-3 mobile-l:h-3 mobile-l:w-3 sm:h-4 sm:w-4 tablet:h-4 tablet:w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid mobile-xs:grid-cols-1 grid-cols-1 mobile-l:grid-cols-2 sm:grid-cols-2 tablet:grid-cols-3 lg:grid-cols-4 gap-3 mobile-l:gap-4 sm:gap-5 tablet:gap-6 lg:gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/featured-products/${product.id}`} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 transform flex flex-col mobile-xs:h-[360px] h-[380px] mobile-l:h-[400px] sm:h-[420px] tablet:h-[440px]">
                <div className="relative flex-shrink-0">
                  <div className="relative w-full mobile-xs:h-44 h-48 mobile-l:h-52 sm:h-56 tablet:h-60 bg-white rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center p-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  {product.isNew && (
                    <div className="absolute top-2 left-2 mobile-l:top-2 mobile-l:left-2 sm:top-4 sm:left-4 bg-accent text-white px-1.5 py-0.5 mobile-l:px-2 mobile-l:py-1 sm:px-3 sm:py-1 rounded-md mobile-l:rounded-md sm:rounded-lg text-xs mobile-l:text-xs sm:text-sm font-bold shadow-lg">
                      New
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-2 right-2 mobile-l:top-2 mobile-l:right-2 sm:top-4 sm:right-4 transition-all duration-300 hover:scale-110 h-6 w-6 mobile-l:h-6 mobile-l:w-6 sm:h-8 sm:w-8 ${
                      isInWaitlist(product.id, {
                        size: product.sizes?.[0],
                        color: product.colors?.[0]
                      })
                        ? 'bg-red-500 text-white hover:bg-red-600'
                        : 'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'
                    }`}
                    onClick={(e) => handleToggleWaitlist(e, product)}
                  >
                    <Heart className={`h-3 w-3 mobile-l:h-3 mobile-l:w-3 sm:h-4 sm:w-4 ${
                      isInWaitlist(product.id, {
                        size: product.sizes?.[0],
                        color: product.colors?.[0]
                      })
                        ? 'fill-current'
                        : ''
                    }`} />
                  </Button>
                </div>
                <CardContent className="p-2.5 mobile-xs:p-3 mobile-l:p-3 sm:p-4 tablet:p-5 lg:p-6 flex flex-col flex-1">
                  <div className="mobile-xs:h-11 h-12 mobile-l:h-14 sm:h-16 tablet:h-18 mb-1.5 mobile-xs:mb-2 mobile-l:mb-3 sm:mb-4 flex-shrink-0">
                    <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors mobile-xs:text-sm text-sm mobile-l:text-base sm:text-base tablet:text-lg lg:text-lg line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 mobile-l:gap-2 sm:gap-3 tablet:gap-3 mb-2 mobile-l:mb-3 sm:mb-4 h-6 mobile-l:h-7 sm:h-8 tablet:h-10 flex-shrink-0">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 mobile-l:w-3 mobile-l:h-3 sm:w-4 sm:h-4 tablet:w-5 tablet:h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-medium-gray'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs mobile-l:text-xs sm:text-sm tablet:text-base text-dark-gray">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1.5 mobile-l:gap-2 sm:gap-3 tablet:gap-3 mt-auto">
                    <span className="text-base mobile-l:text-lg sm:text-xl tablet:text-2xl lg:text-2xl font-bold text-primary">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-xs mobile-l:text-sm sm:text-base tablet:text-lg text-medium-gray line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
