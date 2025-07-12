import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { 
  Trash2, 
  Clock, 
  ArrowLeft, 
  ShoppingCart
} from "lucide-react";
import Footer from "@/components/Footer";

const Waitlist = () => {
  const { state, removeFromWaitlist, addToCart } = useCart();
  const waitlistItems = state.waitlist;

  const handleRemoveFromWaitlist = (index: number) => {
    removeFromWaitlist(index);
  };

  const handleMoveToCart = (item: any, index: number) => {
    // This would typically check if the item is back in stock
    // For demo purposes, we'll assume it's available
    addToCart(
      {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        category: item.category,
        brand: item.brand,
        inStock: true, // Assuming it's back in stock
        rating: 4.5,
        reviews: 100,
        isNew: false,
        description: "Product description"
      },
      1,
      item.selectedOptions
    );
    removeFromWaitlist(index);
  };

  if (waitlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Clock className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Your waitlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Items you add to your waitlist will appear here when they're out of stock.
            </p>
            <Link to="/">
              <Button className="cta-gradient text-primary-foreground px-8 py-3">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Waitlist</h1>
              <p className="text-muted-foreground">
                {waitlistItems.length} {waitlistItems.length === 1 ? 'item' : 'items'} in your waitlist
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Waitlist Items */}
          <div className="lg:col-span-2 space-y-4">
            {waitlistItems.map((item, index) => (
              <Card key={`${item.id}-${item.selectedOptions.size}-${item.selectedOptions.color}`} className="minimalist-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Product Image */}
                    <div className="relative w-full md:w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          Waitlisted
                        </Badge>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/categories/${item.category.toLowerCase()}/${item.id}`}>
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span className="bg-muted px-2 py-1 rounded text-xs">{item.brand}</span>
                            {item.selectedOptions.color && <span>Color: {item.selectedOptions.color}</span>}
                            {item.selectedOptions.size && <span>• Size: {item.selectedOptions.size}</span>}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            Added on {new Date(item.dateAdded).toLocaleDateString()}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveFromWaitlist(index)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-foreground">
                            {formatPrice(item.price)}
                          </span>
                        </div>

                        {/* Action Button */}
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleMoveToCart(item, index)}
                          className="text-sm"
                        >
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Move to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Waitlist Info */}
          <div className="space-y-6">
            <Card className="minimalist-card">
              <CardHeader>
                <CardTitle className="text-foreground">About Waitlist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Items in your waitlist are currently out of stock. We'll notify you when they become available again.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Automatic notifications</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Easy move to cart</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Waitlist;
