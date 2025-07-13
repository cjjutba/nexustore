import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Clock } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useFlashDealTimer } from "@/utils/flashDealTimer";
import { formatPrice, getFlashDeals } from "@/data/products";

const FlashDeals = () => {
  const { toggleWaitlist, isInWaitlist } = useCart();
  const { toast } = useToast();
  const { timeLeft, formattedTime } = useFlashDealTimer();

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

  // Get flash deals from centralized data (show first 3 for home page)
  const flashDeals = getFlashDeals().slice(0, 3);

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-bold text-charcoal">FLASH SALE</h2>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">Ends in {formattedTime}</span>
              </div>
            </div>
          </div>
          <Link to="/flash-deals">
            <Button variant="outline" className="group border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
              See All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flashDeals.map((product) => (
            <Link key={product.id} to={`/flash-deals/${product.id}`} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 transform">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
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
                    <span className="text-2xl font-bold text-primary">{formatPrice(product.price)}</span>
                    {product.originalPrice && (
                      <span className="text-base text-medium-gray line-through">{formatPrice(product.originalPrice)}</span>
                    )}
                  </div>
                  <div className="text-sm text-dark-gray mb-4">
                    {product.flashDealData?.sold || 0} sold • {formattedTime} left
                  </div>
                  <div className="w-full bg-medium-gray/30 rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{width: `${((product.flashDealData?.sold || 0) / ((product.flashDealData?.sold || 0) + (product.flashDealData?.stock || 1))) * 100}%`}}
                    ></div>
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

export default FlashDeals;
