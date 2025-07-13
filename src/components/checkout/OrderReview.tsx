import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useCheckout } from "@/contexts/CheckoutContext";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { createOrder } from "@/utils/orderStorage";
import { formatPrice } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import { FileText, MapPin, CreditCard, Package, Loader2 } from "lucide-react";

export const OrderReview = () => {
  const { state: checkoutState, setOrderNotes, setStep, setProcessing, resetCheckout } = useCheckout();
  const { state: cartState, clearCart } = useCart();
  const { state: authState } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handleNotesChange = (notes: string) => {
    setOrderNotes(notes);
  };

  const handleBack = () => {
    setStep(2);
  };

  const simulatePaymentProcessing = () => {
    return new Promise<boolean>((resolve) => {
      // Simulate payment processing delay
      setTimeout(() => {
        // 95% success rate for demo
        const success = Math.random() > 0.05;
        resolve(success);
      }, 2000);
    });
  };

  const handlePlaceOrder = async () => {
    if (!authState.user) {
      toast({
        title: "Authentication Error",
        description: "Please log in to place your order.",
        variant: "destructive",
      });
      return;
    }

    setIsPlacingOrder(true);
    setProcessing(true);

    try {
      // Simulate payment processing
      const paymentSuccess = await simulatePaymentProcessing();
      
      if (!paymentSuccess) {
        throw new Error("Payment processing failed. Please try again.");
      }

      // Create order
      const order = createOrder(
        authState.user.id,
        cartState.items,
        {
          subtotal: checkoutState.orderSummary.subtotal,
          tax: checkoutState.orderSummary.tax,
          shipping: checkoutState.orderSummary.shipping,
          discount: checkoutState.orderSummary.discount,
          promoCode: checkoutState.orderSummary.promoCode,
          shippingAddress: {
            name: `${checkoutState.shippingAddress.firstName} ${checkoutState.shippingAddress.lastName}`,
            address: checkoutState.shippingAddress.address,
            city: checkoutState.shippingAddress.city,
            state: checkoutState.shippingAddress.state,
            zipCode: checkoutState.shippingAddress.zipCode,
            country: checkoutState.shippingAddress.country
          },
          paymentMethod: {
            type: checkoutState.paymentMethod.type,
            last4: checkoutState.paymentMethod.last4,
            brand: checkoutState.paymentMethod.brand
          }
        }
      );

      // Clear cart after successful order
      clearCart();
      
      // Reset checkout state
      resetCheckout();

      // Show success message
      toast({
        title: "Order Placed Successfully!",
        description: `Your order #${order.id} has been confirmed.`,
      });

      // Redirect to success page
      navigate(`/checkout/success?orderId=${order.id}`);

    } catch (error) {
      console.error('Order placement error:', error);
      toast({
        title: "Order Failed",
        description: error instanceof Error ? error.message : "Failed to place order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsPlacingOrder(false);
      setProcessing(false);
    }
  };

  const getPaymentMethodDisplay = () => {
    const { paymentMethod } = checkoutState;
    
    switch (paymentMethod.type) {
      case 'credit_card':
        return `Credit Card ending in ${paymentMethod.last4}`;
      case 'debit_card':
        return `Debit Card ending in ${paymentMethod.last4}`;
      case 'cash_on_delivery':
        return 'Cash on Delivery';
      default:
        return 'Unknown payment method';
    }
  };

  return (
    <div className="space-y-6">
      {/* Order Items Review */}
      <Card className="minimalist-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Package className="w-5 h-5 text-primary" />
            <span>Order Items</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {cartState.items.map((item, index) => (
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
                <p className="text-sm font-medium text-foreground">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Shipping Information */}
      <Card className="minimalist-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Shipping Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="font-medium text-foreground">
              {checkoutState.shippingAddress.firstName} {checkoutState.shippingAddress.lastName}
            </p>
            <p className="text-muted-foreground">{checkoutState.shippingAddress.email}</p>
            <p className="text-muted-foreground">{checkoutState.shippingAddress.phone}</p>
            <div className="text-muted-foreground">
              <p>{checkoutState.shippingAddress.address}</p>
              <p>
                {checkoutState.shippingAddress.city}, {checkoutState.shippingAddress.state} {checkoutState.shippingAddress.zipCode}
              </p>
              <p>{checkoutState.shippingAddress.country}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Information */}
      <Card className="minimalist-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <CreditCard className="w-5 h-5 text-primary" />
            <span>Payment Method</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground">{getPaymentMethodDisplay()}</p>
          {checkoutState.paymentMethod.brand && (
            <Badge variant="secondary" className="mt-2">
              {checkoutState.paymentMethod.brand}
            </Badge>
          )}
        </CardContent>
      </Card>

      {/* Order Notes */}
      <Card className="minimalist-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-primary" />
            <span>Order Notes (Optional)</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="orderNotes">Special instructions for your order</Label>
            <Textarea
              id="orderNotes"
              value={checkoutState.orderNotes}
              onChange={(e) => handleNotesChange(e.target.value)}
              placeholder="Any special instructions for delivery or preparation..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Order Summary */}
      <Card className="minimalist-card">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal:</span>
              <span className="text-foreground">{formatPrice(checkoutState.orderSummary.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tax (12%):</span>
              <span className="text-foreground">{formatPrice(checkoutState.orderSummary.tax)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping:</span>
              <span className="text-foreground">
                {checkoutState.orderSummary.shipping === 0 ? 'Free' : formatPrice(checkoutState.orderSummary.shipping)}
              </span>
            </div>
            {checkoutState.orderSummary.discount > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discount:</span>
                <span className="text-green-600">-{formatPrice(checkoutState.orderSummary.discount)}</span>
              </div>
            )}
            <Separator />
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-foreground">Total:</span>
              <span className="text-foreground">{formatPrice(checkoutState.orderSummary.total)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={isPlacingOrder}
          className="px-8 py-3"
        >
          Back to Payment
        </Button>
        
        <Button
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
        >
          {isPlacingOrder ? (
            <div className="flex items-center space-x-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Placing Order...</span>
            </div>
          ) : (
            `Place Order - ${formatPrice(checkoutState.orderSummary.total)}`
          )}
        </Button>
      </div>
    </div>
  );
};
