import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { formatPrice } from "@/data/products";
import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowLeft,
  Shield,
  Package,
  Star
} from "lucide-react";
import Footer from "@/components/Footer";

const Wishlist = () => {
  const { state, removeFromWaitlist, addToCart, toggleWaitlist } = useCart();
  const { state: authState } = useAuth();
  const { toast } = useToast();
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const wishlistItems = state.waitlist; // Using waitlist as wishlist

  // Redirect if not authenticated
  if (!authState.isAuthenticated || !authState.user) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Shield className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-8">
              Please log in to view your wishlist.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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
      setSelectedItems(new Set(wishlistItems.map((_, index) => index)));
    } else {
      setSelectedItems(new Set());
    }
  };

  const handleRemoveSelected = () => {
    const sortedIndices = Array.from(selectedItems).sort((a, b) => b - a);
    sortedIndices.forEach(index => {
      removeFromWaitlist(index);
    });
    setSelectedItems(new Set());
    toast({
      title: "Items Removed",
      description: `${sortedIndices.length} item(s) removed from your wishlist.`,
    });
  };

  const handleAddToCart = (item: typeof wishlistItems[0], index: number) => {
    // Convert wishlist item to product format for addToCart
    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
      brand: item.brand,
      inStock: true, // Assume in stock for wishlist items
      sizes: item.selectedOptions.size ? [item.selectedOptions.size] : undefined,
      colors: item.selectedOptions.color ? [item.selectedOptions.color] : undefined,
    };

    addToCart(product, 1, item.selectedOptions);
    
    toast({
      title: "Added to Cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const handleRemoveFromWishlist = (item: typeof wishlistItems[0], index: number) => {
    removeFromWaitlist(index);
    toast({
      title: "Removed from Wishlist",
      description: `${item.name} has been removed from your wishlist.`,
    });
  };

  if (wishlistItems.length === 0) {
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
                Start Shopping
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
            <Link to="/profile">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Profile
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">My Wishlist</h1>
              <p className="text-muted-foreground">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
              </p>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        <Card className="minimalist-card mb-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Checkbox
                  id="select-all"
                  checked={selectedItems.size === wishlistItems.length && wishlistItems.length > 0}
                  onCheckedChange={handleSelectAll}
                />
                <label htmlFor="select-all" className="text-sm font-medium text-foreground cursor-pointer">
                  Select All ({selectedItems.size} selected)
                </label>
              </div>
              
              {selectedItems.size > 0 && (
                <div className="flex items-center space-x-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={handleRemoveSelected}
                    className="flex items-center space-x-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Remove Selected</span>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wishlist Items */}
          <div className="lg:col-span-2 space-y-4">
            {wishlistItems.map((item, index) => (
              <Card key={`${item.id}-${item.selectedOptions.size}-${item.selectedOptions.color}`} className="minimalist-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Selection Checkbox */}
                    <div className="flex items-start pt-2">
                      <Checkbox
                        id={`wishlist-item-${index}`}
                        checked={selectedItems.has(index)}
                        onCheckedChange={(checked) => handleSelectItem(index, checked as boolean)}
                      />
                    </div>

                    {/* Product Image */}
                    <div className="w-full md:w-32 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">{item.name}</h3>
                        <p className="text-muted-foreground text-sm">{item.brand}</p>
                        <p className="text-muted-foreground text-xs">{item.category}</p>
                      </div>

                      {/* Selected Options */}
                      {(item.selectedOptions.size || item.selectedOptions.color) && (
                        <div className="flex flex-wrap gap-2">
                          {item.selectedOptions.size && (
                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                              Size: {item.selectedOptions.size}
                            </span>
                          )}
                          {item.selectedOptions.color && (
                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                              Color: {item.selectedOptions.color}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Date Added */}
                      <p className="text-xs text-muted-foreground">
                        Added on {new Date(item.dateAdded).toLocaleDateString()}
                      </p>

                      {/* Price */}
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(item.price)}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button
                          onClick={() => handleAddToCart(item, index)}
                          className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center space-x-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </Button>
                        
                        <Button
                          variant="outline"
                          onClick={() => handleRemoveFromWishlist(item, index)}
                          className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground flex items-center space-x-2"
                        >
                          <Heart className="w-4 h-4" />
                          <span>Remove</span>
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
                <CardTitle className="text-foreground">Wishlist Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Items:</span>
                  <span className="font-semibold text-foreground">{wishlistItems.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total Value:</span>
                  <span className="font-semibold text-foreground">
                    {formatPrice(wishlistItems.reduce((total, item) => total + item.price, 0))}
                  </span>
                </div>
              </CardContent>
            </Card>

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
                  <div className="flex items-center space-x-2 text-sm">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Track favorites</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="minimalist-card">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/shop">
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="w-4 h-4 mr-2" />
                    Continue Shopping
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
