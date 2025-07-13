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
    <section className="py-16 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">FEATURED PRODUCTS</h2>
            <p className="text-dark-gray text-lg">Handpicked premium products with great deals</p>
          </div>
          <Link to="/featured-products">
            <Button variant="outline" className="group border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/featured-products/${product.id}`} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 transform">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                      New
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                    -{product.discount}%
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-4 right-4 transition-all duration-300 hover:scale-110 ${
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
                      })
                        ? 'fill-current'
                        : ''
                    }`} />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors mb-3 text-lg line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-500 fill-yellow-500' 
                              : 'text-medium-gray'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-dark-gray">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-base text-medium-gray line-through">{formatPrice(product.originalPrice)}</span>
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
