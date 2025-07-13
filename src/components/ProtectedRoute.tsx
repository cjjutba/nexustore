import { ReactNode, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, LogIn } from "lucide-react";
import Footer from "@/components/Footer";

interface ProtectedRouteProps {
  children: ReactNode;
  redirectTo?: string;
  showLoginPrompt?: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  redirectTo = "/login",
  showLoginPrompt = true
}) => {
  const { state } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!state.isLoading && !state.isAuthenticated) {
      // Store the current location so we can redirect back after login
      navigate(redirectTo, {
        state: { from: location },
        replace: true
      });
    }
  }, [state.isAuthenticated, state.isLoading, navigate, redirectTo, location]);

  // Show loading state while checking authentication
  if (state.isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <div className="w-24 h-24 mx-auto mb-6 animate-spin">
              <Shield className="w-full h-full text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-4">Loading...</h1>
            <p className="text-muted-foreground">
              Checking your authentication status...
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show login prompt if not authenticated and showLoginPrompt is true
  if (!state.isAuthenticated && showLoginPrompt) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto">
            <Card className="minimalist-card">
              <CardContent className="p-8 text-center">
                <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
                <h1 className="text-2xl font-bold text-foreground mb-4">
                  Authentication Required
                </h1>
                <p className="text-muted-foreground mb-6">
                  You need to be logged in to access this page. Please sign in to continue.
                </p>
                <div className="space-y-3">
                  <Button
                    onClick={() => navigate("/login", { state: { from: location } })}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate("/register", { state: { from: location } })}
                    className="w-full"
                  >
                    Create Account
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => navigate("/")}
                    className="w-full text-muted-foreground"
                  >
                    Go to Home
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If authenticated, render the protected content
  if (state.isAuthenticated) {
    return <>{children}</>;
  }

  // Fallback - should not reach here normally
  return null;
};

export default ProtectedRoute;
