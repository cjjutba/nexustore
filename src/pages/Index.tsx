import { Navigation } from "@/components/Navigation";
import { Hero, Categories, FlashDeals, FeaturedProducts, Newsletter } from "@/components/home";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Categories />
      <FlashDeals />
      <FeaturedProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;