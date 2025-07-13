import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { getUserOrders, Order, cleanupInvalidOrders } from "@/utils/orderStorage";
import { formatPrice } from "@/data/products";
import {
  ShoppingBag,
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Clock,
  ArrowLeft,
  Eye,
  RotateCcw,
  Shield
} from "lucide-react";
import Footer from "@/components/Footer";

const Orders = () => {
  const { state } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    if (state.user) {
      // Clean up any invalid orders first (removes mock data and corrupted orders)
      cleanupInvalidOrders();

      // Load user orders - now only valid orders will be returned
      const userOrders = getUserOrders(state.user.id);

      // Sort orders by date (newest first)
      setOrders(userOrders.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()));
    }
    setIsLoading(false);
  }, [state.user]);

  // Filter orders based on active tab
  const filteredOrders = orders.filter(order => {
    switch (activeTab) {
      case "pending":
        return order.status === "pending";
      case "processing":
        return order.status === "processing";
      case "shipped":
        return order.status === "shipped";
      case "delivered":
        return order.status === "delivered";
      case "cancelled":
        return order.status === "cancelled";
      default:
        return true; // "all" tab
    }
  });

  // Get order counts for each status
  const orderCounts = {
    all: orders.length,
    pending: orders.filter(o => o.status === "pending").length,
    processing: orders.filter(o => o.status === "processing").length,
    shipped: orders.filter(o => o.status === "shipped").length,
    delivered: orders.filter(o => o.status === "delivered").length,
    cancelled: orders.filter(o => o.status === "cancelled").length,
  };

  // Redirect if not authenticated
  if (!state.isAuthenticated || !state.user) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <Shield className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-8">
              Please log in to view your order history.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'processing':
        return <Package className="w-4 h-4" />;
      case 'shipped':
        return <Truck className="w-4 h-4" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'processing':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'shipped':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'delivered':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading your orders...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">No orders yet</h1>
            <p className="text-muted-foreground mb-8">
              You haven't placed any orders yet. Start shopping to see your order history here.
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
              <h1 className="text-3xl font-bold text-foreground">Order History</h1>
              <p className="text-muted-foreground">
                {filteredOrders.length} {filteredOrders.length === 1 ? 'order' : 'orders'} found
              </p>
            </div>
          </div>
        </div>

        {/* Order Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="all" className="flex items-center space-x-2">
              <span>All</span>
              {orderCounts.all > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {orderCounts.all}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="pending" className="flex items-center space-x-2">
              <span>Pending</span>
              {orderCounts.pending > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {orderCounts.pending}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="processing" className="flex items-center space-x-2">
              <span>Processing</span>
              {orderCounts.processing > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {orderCounts.processing}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="shipped" className="flex items-center space-x-2">
              <span>Shipped</span>
              {orderCounts.shipped > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {orderCounts.shipped}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="delivered" className="flex items-center space-x-2">
              <span>Delivered</span>
              {orderCounts.delivered > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {orderCounts.delivered}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="cancelled" className="flex items-center space-x-2">
              <span>Cancelled</span>
              {orderCounts.cancelled > 0 && (
                <Badge variant="secondary" className="ml-1 text-xs">
                  {orderCounts.cancelled}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {/* Orders List */}
            <div className="space-y-6">
              {filteredOrders.length === 0 ? (
                <Card className="minimalist-card">
                  <CardContent className="p-12 text-center">
                    <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No {activeTab === "all" ? "" : activeTab} orders found
                    </h3>
                    <p className="text-muted-foreground">
                      {activeTab === "all"
                        ? "You haven't placed any orders yet."
                        : `You don't have any ${activeTab} orders.`}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredOrders.map((order) => (
            <Card key={order.id} className="minimalist-card">
              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <CardTitle className="text-lg font-semibold text-foreground">
                        Order #{order.id}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Placed on {new Date(order.orderDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Badge className={`${getStatusColor(order.status)} flex items-center space-x-1`}>
                      {getStatusIcon(order.status)}
                      <span className="capitalize">{order.status}</span>
                    </Badge>
                    <span className="text-lg font-semibold text-foreground">
                      {formatPrice(order.total)}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex items-center space-x-4 p-3 bg-muted/30 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground truncate">{item.name}</h4>
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
                </div>

                <Separator />

                {/* Order Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Shipping Address</h4>
                    <div className="text-sm text-muted-foreground">
                      <p>{order.shippingAddress.name}</p>
                      <p>{order.shippingAddress.address}</p>
                      <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}</p>
                      <p>{order.shippingAddress.country}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Order Details</h4>
                    <div className="text-sm space-y-1">
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
                      <div className="flex justify-between font-medium">
                        <span className="text-foreground">Total:</span>
                        <span className="text-foreground">{formatPrice(order.total)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  
                  {order.status === 'delivered' && (
                    <Button variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reorder
                    </Button>
                  )}
                  
                  {(order.status === 'shipped' || order.status === 'processing') && order.trackingNumber && (
                    <Button variant="outline" size="sm">
                      <Truck className="w-4 h-4 mr-2" />
                      Track Package
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
                ))
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Orders;
