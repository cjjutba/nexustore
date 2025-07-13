import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, LogIn, UserPlus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { SearchBar } from "@/components/SearchBar";
import ProfileDropdown from "@/components/ProfileDropdown";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { getCartItemsCount, state } = useCart();
  const { state: authState } = useAuth();

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect for enhanced navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const categoryLinks = [
    { name: "Electronics", href: "/categories/electronics" },
    { name: "Fashion", href: "/categories/fashion" },
    { name: "Photography", href: "/categories/photography" },
    { name: "Sports", href: "/categories/sports" },
    { name: "Audio", href: "/categories/audio" },
    { name: "Computers", href: "/categories/computers" }
  ];

  return (
    <>
    <nav className={cn(
      "w-full sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300",
      isScrolled ? "shadow-lg border-b border-border/50" : "shadow-sm border-b border-border/20"
    )}>
      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur-md py-2 sm:py-3 relative z-10">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none"
              aria-label="NexuStore Home"
            >
              <div className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                NexuStore
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <SearchBar />
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
              {/* Wishlist */}
              <Link to="/waitlist" className="group">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-primary hover:bg-muted hover:text-foreground rounded-lg p-1.5 sm:p-2.5 transition-all duration-300 focus:ring-2 focus:ring-ring focus:ring-offset-2 h-8 w-8 sm:h-10 sm:w-10"
                  aria-label="Wishlist"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-105 transition-transform duration-300" />
                  {state.waitlist.length > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold shadow-sm animate-pulse">
                      {state.waitlist.length}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Cart */}
              <Link to="/cart" className="group">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-primary hover:bg-muted hover:text-foreground rounded-lg p-1.5 sm:p-2.5 transition-all duration-300 focus:ring-2 focus:ring-ring focus:ring-offset-2 h-8 w-8 sm:h-10 sm:w-10"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-105 transition-transform duration-300" />
                  {getCartItemsCount() > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold shadow-sm animate-pulse">
                      {getCartItemsCount()}
                    </span>
                  )}
                </Button>
              </Link>

              {/* Profile Dropdown - Always visible when authenticated */}
              {authState.isAuthenticated && (
                <ProfileDropdown />
              )}

              {/* Authentication Buttons - Only on desktop when not authenticated */}
              {!authState.isAuthenticated && (
                <>
                  {/* Login Button */}
                  <Link to="/login" className="hidden md:block">
                    <Button
                      variant="ghost"
                      className="text-primary hover:bg-muted hover:text-foreground rounded-lg px-3 py-1.5 transition-all duration-300 border border-border/30 hover:border-border/60 focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </Link>

                  {/* Sign Up Button */}
                  <Link to="/register" className="hidden md:block">
                    <Button
                      className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-1.5 transition-all duration-300 font-medium shadow-sm hover:shadow-md focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary hover:bg-muted hover:text-foreground rounded-lg p-1.5 sm:p-3 transition-all duration-300 focus:ring-2 focus:ring-ring focus:ring-offset-2 h-8 w-8 sm:h-10 sm:w-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-muted/50 border-t border-border/20 py-1.5 sm:py-2 relative z-5">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6 xl:space-x-8 text-sm">
            {categoryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-all duration-300 whitespace-nowrap relative group px-2 lg:px-3 py-1.5 lg:py-2 rounded-md hover:bg-background/80 text-xs lg:text-sm",
                  isActive(link.href) && "text-primary font-medium"
                )}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </nav>

    {/* Mobile Menu Overlay - Outside nav for proper z-index */}
    {isMenuOpen && (
      <>
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden animate-in fade-in-0 duration-300"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background shadow-2xl z-[70] md:hidden animate-in slide-in-from-right-2 duration-300 border-l border-border/20 overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-border/20 bg-background shrink-0">
              <h2 className="text-lg font-semibold text-foreground">Menu</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
                className="h-8 w-8 hover:bg-muted rounded-lg"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-background">
              {/* Mobile Search */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Search</h3>
                <SearchBar isMobile={true} />
              </div>

              {/* Mobile Categories */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Categories</h3>
                <div className="space-y-1">
                  {categoryLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                        isActive(link.href) && "text-primary font-medium bg-muted/50"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Auth Section - Only show login/signup for unauthenticated users */}
              {!authState.isAuthenticated && (
                <div className="flex space-x-3 pt-4 border-t border-border/20">
                  <Link to="/login" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-border/30 text-primary hover:bg-muted hover:border-border/60 rounded-lg py-3 focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" className="flex-1">
                    <Button
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )}
    </>
  );
};