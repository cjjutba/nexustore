import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scrollToTop } from "@/utils/scrollToTop";
import { Navigation } from "@/components/Navigation";
import { CheckoutProvider, useCheckout } from "@/contexts/CheckoutContext";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { CheckoutLayout } from "@/components/checkout/CheckoutLayout";
import { ShippingForm } from "@/components/checkout/ShippingForm";
import { PaymentForm } from "@/components/checkout/PaymentForm";
import { OrderReview } from "@/components/checkout/OrderReview";
import Footer from "@/components/Footer";

const CheckoutContent = () => {
  const { state: checkoutState } = useCheckout();
  const { state: cartState } = useCart();
  const { state: authState } = useAuth();
  const navigate = useNavigate();

  // Redirect if cart is empty
  useEffect(() => {
    if (cartState.items.length === 0) {
      navigate('/cart');
    }
  }, [cartState.items.length, navigate]);

  // Redirect if not authenticated (shouldn't happen due to ProtectedRoute, but safety check)
  useEffect(() => {
    if (!authState.isAuthenticated) {
      navigate('/login?returnTo=/checkout');
    }
  }, [authState.isAuthenticated, navigate]);

  // Scroll to top when component mounts
  useEffect(() => {
    scrollToTop();
  }, []);

  const renderCurrentStep = () => {
    switch (checkoutState.currentStep) {
      case 1:
        return <ShippingForm />;
      case 2:
        return <PaymentForm />;
      case 3:
        return <OrderReview />;
      default:
        return <ShippingForm />;
    }
  };

  if (cartState.items.length === 0) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <CheckoutLayout>
          {renderCurrentStep()}
        </CheckoutLayout>
      </div>

      <Footer />
    </div>
  );
};

const Checkout = () => {
  return (
    <CheckoutProvider>
      <CheckoutContent />
    </CheckoutProvider>
  );
};

export default Checkout;
