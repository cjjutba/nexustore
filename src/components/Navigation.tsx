import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Search, Bell, HelpCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const topBarLinks = ["Seller Centre", "Start Selling", "Download"];
  const categoryLinks = [
    "Piso Shoes",
    "Handy Fan Rechargeable", 
    "Piso Deals New User Free Shipping",
    "Sandals",
    "Stand Organizer Shelf Rack",
    "Piso Deals Make Up Set"
  ];

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-brand text-white text-xs py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {topBarLinks.map((link) => (
              <Link
                key={link}
                to={link === "Start Selling" ? "/seller" : "/"}
                className="hover:underline"
              >
                {link}
              </Link>
            ))}
            <span className="border-l border-white/30 pl-4">Follow us on</span>
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-white/20 rounded-full"></div>
              <div className="w-4 h-4 bg-white/20 rounded-full"></div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-1">
              <Bell className="w-4 h-4 mr-1" />
              Notifications
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-1">
              <HelpCircle className="w-4 h-4 mr-1" />
              Help
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 p-1">
              <Globe className="w-4 h-4 mr-1" />
              English
            </Button>
            <Link to="/register">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-brand text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold">
                <span className="text-white">Shopee</span>
              </div>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden md:block">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Sign up and get 100% off on your first order"
                  className="w-full px-4 py-2 rounded text-gray-dark bg-white focus:outline-none focus:ring-2 focus:ring-accent-yellow"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1 bg-brand hover:bg-brand-dark"
                >
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
                  <ShoppingCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-yellow text-gray-dark text-xs rounded-full flex items-center justify-center font-semibold">
                    0
                  </span>
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-brand text-white py-2 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center space-x-6 text-sm">
            {categoryLinks.map((link) => (
              <Link
                key={link}
                to="/shop"
                className="hover:text-accent-yellow transition-colors whitespace-nowrap"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {/* Mobile Search */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray w-4 h-4" />
            </div>
            
            {/* Mobile Categories */}
            <div className="space-y-2">
              {categoryLinks.map((link) => (
                <Link
                  key={link}
                  to="/shop"
                  className="block py-2 text-gray-dark hover:text-brand border-b border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Links */}
            <div className="flex space-x-4 pt-3">
              <Link to="/login" className="flex-1">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button className="w-full bg-brand hover:bg-brand-dark">
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