import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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
    { name: "Electronics", href: "/shop?category=electronics" },
    { name: "Fashion", href: "/shop?category=fashion" },
    { name: "Home & Garden", href: "/shop?category=home" },
    { name: "Sports", href: "/shop?category=sports" },
    { name: "Beauty", href: "/shop?category=beauty" },
    { name: "Books", href: "/shop?category=books" }
  ];

  return (
    <nav className={cn(
      "w-full sticky top-0 z-50 bg-background/95 backdrop-blur-md transition-all duration-300",
      isScrolled ? "shadow-lg border-b border-border/50" : "shadow-sm border-b border-border/20"
    )}>
      {/* Main Navigation */}
      <div className="bg-background/95 backdrop-blur-md py-3">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
              aria-label="NexuStore Home"
            >
              <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                NexuStore
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative group">
                <label htmlFor="search" className="sr-only">Search products</label>
                <input
                  id="search"
                  type="search"
                  placeholder="Search for products, brands and more..."
                  className="w-full px-5 py-2.5 rounded-lg text-foreground bg-muted border border-border/30 focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring focus:bg-background transition-all duration-300 pl-5 pr-12 placeholder:text-muted-foreground"
                  aria-label="Search products"
                />
                <Button
                  size="sm"
                  type="submit"
                  className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-3 py-1.5 transition-all duration-300 shadow-sm hover:shadow-md focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              {/* Cart */}
              <Link to="/cart" className="group">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-primary hover:bg-muted hover:text-foreground rounded-lg p-2.5 transition-all duration-300 focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Shopping cart"
                >
                  <ShoppingCart className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-semibold shadow-sm animate-pulse">
                    0
                  </span>
                </Button>
              </Link>

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

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary hover:bg-muted hover:text-foreground rounded-lg p-3 transition-all duration-300 focus:ring-2 focus:ring-ring focus:ring-offset-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-muted/50 border-t border-border/20 py-2">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8 text-sm">
            {categoryLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-all duration-300 whitespace-nowrap relative group px-3 py-2 rounded-md hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/20 shadow-lg animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            <div className="relative">
              <label htmlFor="mobile-search" className="sr-only">Search products</label>
              <input
                id="mobile-search"
                type="search"
                placeholder="Search for products, brands and more..."
                className="w-full px-6 py-3 border border-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-ring bg-muted text-foreground placeholder:text-muted-foreground"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>

            {/* Mobile Categories */}
            <div className="space-y-1">
              <h3 className="text-primary font-medium mb-3 text-sm uppercase tracking-wider">Categories</h3>
              {categoryLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-all duration-300 border-b border-border/10 last:border-b-0 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    isActive(link.href) && "text-primary font-medium bg-muted/50"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Links */}
            <div className="flex space-x-3 pt-4 border-t border-border/20">
              <Link to="/login" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-border/30 text-primary hover:bg-muted hover:border-border/60 rounded-lg py-3 focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg py-3 shadow-sm hover:shadow-md transition-all duration-300 focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};