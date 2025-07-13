import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { scrollToTop } from "@/utils/scrollToTop";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getOrderById, Order } from "@/utils/orderStorage";
import { formatPrice } from "@/data/products";
import { useAuth } from "@/contexts/AuthContext";
import {
  CheckCircle,
  Package,
  Truck,
  MapPin,
  CreditCard,
  Calendar,
  ArrowRight,
  Home,
  ShoppingBag
} from "lucide-react";
import Footer from "@/components/Footer";

const CheckoutSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { state: authState } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const orderId = searchParams.get('orderId');

  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate('/login');
      return;
    }

    if (!orderId) {
      navigate('/');
      return;
    }

    // Fetch order details
    const orderData = getOrderById(orderId);
    if (!orderData || orderData.userId !== authState.user?.id) {
      navigate('/');
      return;
    }

    setOrder(orderData);
    setIsLoading(false);
  }, [orderId, authState.isAuthenticated, authState.user?.id, navigate]);

  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading order details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Package className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Order Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The order you're looking for doesn't exist or you don't have permission to view it.
            </p>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getEstimatedDelivery = () => {
    if (order.estimatedDelivery) {
      return new Date(order.estimatedDelivery).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return 'To be determined';
  };

  const getPaymentMethodDisplay = () => {
    switch (order.paymentMethod.type) {
      case 'credit_card':
        return `Credit Card ending in ${order.paymentMethod.last4}`;
      case 'debit_card':
        return `Debit Card ending in ${order.paymentMethod.last4}`;
      case 'cash_on_delivery':
        return 'Cash on Delivery';
      default:
        return 'Unknown payment method';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Order Summary Card */}
          <Card className="minimalist-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Package className="w-5 h-5 text-primary" />
                  <span>Order #{order.id}</span>
                </CardTitle>
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Order Date</p>
                    <p className="font-medium text-foreground">
                      {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-medium text-foreground">{getEstimatedDelivery()}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Payment Method</p>
                    <p className="font-medium text-foreground">{getPaymentMethodDisplay()}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card className="minimalist-card">
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.items.map((item, index) => (
                <div key={`${item.id}-${index}`} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">{item.brand}</p>
                    {(item.selectedOptions.size || item.selectedOptions.color) && (
                      <p className="text-xs text-muted-foreground">
                        {item.selectedOptions.size && `Size: ${item.selectedOptions.size}`}
                        {item.selectedOptions.size && item.selectedOptions.color && ' • '}
                        {item.selectedOptions.color && `Color: ${item.selectedOptions.color}`}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{formatPrice(item.price)}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Shipping & Payment Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shipping Address */}
            <Card className="minimalist-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Shipping Address</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1 text-muted-foreground">
                  <p className="font-medium text-foreground">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.address}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p>{order.shippingAddress.country}</p>
                </div>
              </CardContent>
            </Card>

            {/* Order Total */}
            <Card className="minimalist-card">
              <CardHeader>
                <CardTitle>Order Total</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal:</span>
                    <span className="text-foreground">{formatPrice(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax:</span>
                    <span className="text-foreground">{formatPrice(order.tax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping:</span>
                    <span className="text-foreground">
                      {order.shipping === 0 ? 'Free' : formatPrice(order.shipping)}
                    </span>
                  </div>
                  {order.discount > 0 && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Discount:</span>
                      <span className="text-green-600">-{formatPrice(order.discount)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-foreground">{formatPrice(order.total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link to="/orders">
              <Button variant="outline" className="w-full sm:w-auto">
                <Package className="w-4 h-4 mr-2" />
                View Order History
              </Button>
            </Link>
            
            <Link to="/shop">
              <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </Button>
            </Link>
          </div>

          {/* Next Steps */}
          <Card className="minimalist-card">
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">
                    You'll receive an email confirmation shortly with your order details.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">
                    We'll notify you when your order is being prepared and shipped.
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">
                    Track your order status in your order history page.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutSuccess;
