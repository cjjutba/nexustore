import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowLeft, 
  Heart,
  Shield,
  Truck,
  RotateCcw
} from "lucide-react";
import Footer from "@/components/Footer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
  color?: string;
  size?: string;
  inStock: boolean;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      quantity: 1,
      color: "Black",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      quantity: 2,
      color: "Silver",
      size: "42mm",
      inStock: true
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      quantity: 1,
      color: "Blue",
      inStock: false
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "save10") {
      setAppliedPromo("SAVE10");
      setPromoCode("");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = appliedPromo === "SAVE10" ? subtotal * 0.1 : 0;
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = (subtotal - discount) * 0.08;
  const total = subtotal - discount + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/shop">
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
            <Link to="/shop">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
              <p className="text-muted-foreground">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="minimalist-card">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    {/* Product Image */}
                    <div className="relative w-full md:w-32 h-32 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                          <Badge variant="destructive" className="text-xs">Out of Stock</Badge>
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/products/${item.id}`}>
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            {item.color && <span>Color: {item.color}</span>}
                            {item.size && <span>• Size: {item.size}</span>}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-foreground">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1 || !item.inStock}
                            className="w-8 h-8 p-0"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={!item.inStock}
                            className="w-8 h-8 p-0"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>

                      {!item.inStock && (
                        <div className="text-sm text-destructive">
                          This item is currently out of stock
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card className="minimalist-card">
              <CardHeader>
                <CardTitle className="text-foreground">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount ({appliedPromo})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">${tax.toFixed(2)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${total.toFixed(2)}</span>
                </div>

                {/* Promo Code */}
                <div className="space-y-2">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button
                      variant="outline"
                      onClick={applyPromoCode}
                      disabled={!promoCode}
                    >
                      Apply
                    </Button>
                  </div>
                  {appliedPromo && (
                    <p className="text-sm text-green-600">
                      Promo code {appliedPromo} applied!
                    </p>
                  )}
                </div>

                <Button className="w-full cta-gradient text-primary-foreground py-3 font-medium">
                  Proceed to Checkout
                </Button>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="minimalist-card">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Secure checkout</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Free shipping over $100</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <RotateCcw className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">30-day return policy</span>
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

export default Cart;
