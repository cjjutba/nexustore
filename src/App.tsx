import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
// Category Pages
import Fashion from "./pages/categories/Fashion";
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
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
