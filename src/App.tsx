import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Waitlist from "./pages/Waitlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import FlashDeals from "./pages/FlashDeals";
import FlashDealsProductDetail from "./pages/FlashDealsProductDetail";
import FeaturedProducts from "./pages/FeaturedProducts";
import FeaturedProductsProductDetail from "./pages/FeaturedProductsProductDetail";
import Sale from "./pages/Sale";
import SaleProductDetail from "./pages/SaleProductDetail";
import Categories from "./pages/Categories";
import Membership from "./pages/Membership";
import HelpCenter from "./pages/HelpCenter";
import ShippingInfo from "./pages/ShippingInfo";
// Category Pages
import Fashion from "./pages/categories/Fashion";
import CategoryProductDetail from "./pages/categories/CategoryProductDetail";
import Electronics from "./pages/categories/Electronics";
import Photography from "./pages/categories/Photography";
import Computers from "./pages/categories/Computers";
import BabyKids from "./pages/categories/BabyKids";
import Tools from "./pages/categories/Tools";
import Audio from "./pages/categories/Audio";
import Wearables from "./pages/categories/Wearables";
import Sports from "./pages/categories/Sports";
import Accessories from "./pages/categories/Accessories";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <SearchProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/flash-deals" element={<FlashDeals />} />
          <Route path="/flash-deals/:id" element={<FlashDealsProductDetail />} />
          <Route path="/featured-products" element={<FeaturedProducts />} />
          <Route path="/featured-products/:id" element={<FeaturedProductsProductDetail />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/sale/:id" element={<SaleProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="/wishlist" element={<ProtectedRoute><Wishlist /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/checkout/success" element={<ProtectedRoute><CheckoutSuccess /></ProtectedRoute>} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/categories" element={<Categories />} />
          {/* Category Routes */}
          <Route path="/categories/fashion" element={<Fashion />} />
          <Route path="/categories/electronics" element={<Electronics />} />
          <Route path="/categories/photography" element={<Photography />} />
          <Route path="/categories/computers" element={<Computers />} />
          <Route path="/categories/baby-kids" element={<BabyKids />} />
          <Route path="/categories/tools" element={<Tools />} />
          <Route path="/categories/audio" element={<Audio />} />
          <Route path="/categories/wearables" element={<Wearables />} />
          <Route path="/categories/sports" element={<Sports />} />
          <Route path="/categories/accessories" element={<Accessories />} />
          {/* Category Product Detail Routes */}
          <Route path="/categories/:category/:id" element={<CategoryProductDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          </Routes>
          </BrowserRouter>
          </SearchProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
