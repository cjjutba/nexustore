import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCheckout } from "@/contexts/CheckoutContext";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/data/products";
import { ArrowLeft, Check, ShoppingCart, CreditCard, FileText } from "lucide-react";

interface CheckoutLayoutProps {
  children: ReactNode;
}

export const CheckoutLayout = ({ children }: CheckoutLayoutProps) => {
  const { state: checkoutState } = useCheckout();
  const { state: cartState } = useCart();

  const steps = [
    { number: 1, title: "Shipping", icon: ShoppingCart },
    { number: 2, title: "Payment", icon: CreditCard },
    { number: 3, title: "Review", icon: FileText }
  ];

  const getStepStatus = (stepNumber: number) => {
    if (stepNumber < checkoutState.currentStep) return "completed";
    if (stepNumber === checkoutState.currentStep) return "current";
    return "upcoming";
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
            <p className="text-muted-foreground">
              Complete your order in {3 - checkoutState.currentStep + 1} step{3 - checkoutState.currentStep + 1 !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <Card className="minimalist-card mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const status = getStepStatus(step.number);
              const Icon = step.icon;
              
              return (
                <div key={step.number} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        status === "completed"
                          ? "bg-primary border-primary text-primary-foreground"
                          : status === "current"
                          ? "bg-primary/10 border-primary text-primary"
                          : "bg-muted border-muted-foreground/30 text-muted-foreground"
                      }`}
                    >
                      {status === "completed" ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Icon className="w-5 h-5" />
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <p
                        className={`text-sm font-medium ${
                          status === "current" ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </p>
                      <p className="text-xs text-muted-foreground">Step {step.number}</p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                        step.number < checkoutState.currentStep
                          ? "bg-primary"
                          : "bg-muted-foreground/30"
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {children}
        </div>

        {/* Order Summary Sidebar */}
        <div className="space-y-6">
          <Card className="minimalist-card">
            <CardHeader>
              <CardTitle className="text-foreground">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Cart Items */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {cartState.items.map((item, index) => (
                  <div key={`${item.id}-${index}`} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground text-sm truncate">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.brand}</p>
                      {(item.selectedOptions.size || item.selectedOptions.color) && (
                        <p className="text-xs text-muted-foreground">
                          {item.selectedOptions.size && `Size: ${item.selectedOptions.size}`}
                          {item.selectedOptions.size && item.selectedOptions.color && ' • '}
                          {item.selectedOptions.color && `Color: ${item.selectedOptions.color}`}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-foreground text-sm">{formatPrice(item.price)}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Order Totals */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span className="text-foreground">{formatPrice(checkoutState.orderSummary.subtotal)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (12%):</span>
                  <span className="text-foreground">{formatPrice(checkoutState.orderSummary.tax)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping:</span>
                  <span className="text-foreground">
                    {checkoutState.orderSummary.shipping === 0 ? 'Free' : formatPrice(checkoutState.orderSummary.shipping)}
                  </span>
                </div>
                {checkoutState.orderSummary.discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Discount:</span>
                    <span className="text-green-600">-{formatPrice(checkoutState.orderSummary.discount)}</span>
                  </div>
                )}
                <Separator />
                <div className="flex justify-between font-medium">
                  <span className="text-foreground">Total:</span>
                  <span className="text-foreground">{formatPrice(checkoutState.orderSummary.total)}</span>
                </div>
              </div>

              {checkoutState.orderSummary.promoCode && (
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">
                    Promo: {checkoutState.orderSummary.promoCode}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Security Notice */}
          <Card className="minimalist-card">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Secure checkout powered by SSL encryption</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
