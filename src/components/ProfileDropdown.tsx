import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  User,
  Settings,
  LogOut,
  ChevronDown,
  ShoppingBag,
  Heart
} from "lucide-react";

export const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { state, logout } = useAuth();
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    console.log('ProfileDropdown clicked, current state:', isOpen);
    setIsOpen(!isOpen);
  };

  if (!state.user) {
    return null;
  }

  // Get user initials for avatar
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const userInitials = getInitials(state.user.firstName, state.user.lastName);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Button */}
      <Button
        variant="ghost"
        onClick={handleToggleDropdown}
        className="flex items-center space-x-2 text-primary hover:bg-muted hover:text-foreground rounded-lg px-3 py-1.5 transition-all duration-300 border border-border/30 hover:border-border/60 focus:ring-2 focus:ring-ring focus:ring-offset-2"
        aria-label="Profile menu"
        aria-expanded={isOpen}
      >
        {/* User Avatar */}
        <div className="w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-semibold">
          {userInitials}
        </div>
        
        {/* User Name (hidden on mobile) */}
        <span className="hidden md:block text-sm font-medium">
          {state.user.firstName}
        </span>
        
        {/* Dropdown Arrow */}
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </Button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-[9999] animate-in slide-in-from-top-2 duration-200">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                {userInitials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {state.user.firstName} {state.user.lastName}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {state.user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <Link
              to="/profile"
              onClick={handleMenuClick}
              className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors duration-200"
            >
              <User className="w-4 h-4 mr-3 text-muted-foreground" />
              View Profile
            </Link>

            <Link
              to="/settings"
              onClick={handleMenuClick}
              className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors duration-200"
            >
              <Settings className="w-4 h-4 mr-3 text-muted-foreground" />
              Account Settings
            </Link>

            <Link
              to="/orders"
              onClick={handleMenuClick}
              className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors duration-200"
            >
              <ShoppingBag className="w-4 h-4 mr-3 text-muted-foreground" />
              Order History
            </Link>

            <Link
              to="/wishlist"
              onClick={handleMenuClick}
              className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors duration-200"
            >
              <Heart className="w-4 h-4 mr-3 text-muted-foreground" />
              My Wishlist
            </Link>

            {/* Divider */}
            <div className="border-t border-border my-2"></div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-destructive hover:bg-muted transition-colors duration-200"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
