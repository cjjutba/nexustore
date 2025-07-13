import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart, WaitlistItem } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import {
  Trash2,
  Heart,
  ArrowLeft,
  ShoppingCart
} from "lucide-react";
import Footer from "@/components/Footer";

const Waitlist = () => {
  const { state, removeFromWaitlist, addToCart } = useCart();
  const waitlistItems = state.waitlist;
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const handleRemoveFromWaitlist = (index: number) => {
    removeFromWaitlist(index);
    // Remove from selected items if it was selected
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      newSet.delete(index);
      return newSet;
    });
  };

  const handleSelectItem = (index: number, checked: boolean) => {
    setSelectedItems(prev => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(index);
      } else {
        newSet.delete(index);
      }
      return newSet;
    });
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(new Set(waitlistItems.map((_, index) => index)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleBulkDelete = () => {
    // Sort indices in descending order to remove from end first
    const sortedIndices = Array.from(selectedItems).sort((a, b) => b - a);
    sortedIndices.forEach(index => {
      removeFromWaitlist(index);
    });
    setSelectedItems(new Set());
  };

  const handleMoveToCart = (item: WaitlistItem, index: number) => {
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
            <Heart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Items you love will appear here. Start browsing and add items to your wishlist.
            </p>
            <Link to="/shop">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 transition-all duration-300 shadow-sm hover:shadow-md">
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
            <Link to="/shop">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
              <p className="text-muted-foreground">
                {waitlistItems.length} {waitlistItems.length === 1 ? 'item' : 'items'} in your wishlist
              </p>
            </div>
          </div>

          {/* Bulk Actions */}
          {waitlistItems.length > 0 && (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="select-all"
                  checked={selectedItems.size === waitlistItems.length && waitlistItems.length > 0}
                  onCheckedChange={handleSelectAll}
                />
                <label htmlFor="select-all" className="text-sm text-muted-foreground cursor-pointer">
                  Select All
                </label>
              </div>
              {selectedItems.size > 0 && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleBulkDelete}
                  className="text-sm"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Selected ({selectedItems.size})
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Waitlist Items */}
          <div className="lg:col-span-2 space-y-4">
            {waitlistItems.map((item, index) => (
              <Card key={`${item.id}-${item.selectedOptions.size}-${item.selectedOptions.color}`} className="minimalist-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Selection Checkbox */}
                    <div className="flex items-start pt-2">
                      <Checkbox
                        id={`waitlist-item-${index}`}
                        checked={selectedItems.has(index)}
                        onCheckedChange={(checked) => handleSelectItem(index, checked as boolean)}
                      />
                    </div>

                    {/* Product Image */}
                    <div className="relative w-full md:w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                        <Badge variant="secondary" className="text-xs">
                          <Heart className="w-3 h-3 mr-1" />
                          Wishlisted
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

          {/* Wishlist Info */}
          <div className="space-y-6">
            <Card className="minimalist-card">
              <CardHeader>
                <CardTitle className="text-foreground">About Wishlist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Save items you love for later. Your wishlist is private and only visible to you.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Save for later</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <ShoppingCart className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Easy add to cart</span>
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
