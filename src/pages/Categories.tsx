import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shirt, 
  Smartphone, 
  Camera, 
  Laptop, 
  Baby, 
  Wrench, 
  Headphones, 
  Watch, 
  Dumbbell, 
  ShoppingBag,
  ArrowRight,
  Grid3X3
} from "lucide-react";
import { getProductsByCategory } from "@/data/products";
import { useScrollToTop } from "@/utils/scrollToTop";

const Categories = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  // Define all categories with their metadata
  const categories = [
    {
      id: 1,
      name: "Fashion",
      icon: Shirt,
      route: "/categories/fashion",
      dataCategory: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600",
      description: "Trendy clothing and accessories for every style"
    },
    {
      id: 2,
      name: "Electronics",
      icon: Smartphone,
      route: "/categories/electronics",
      dataCategory: "Electronics",
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600",
      description: "Latest smartphones, tablets, and electronic devices"
    },
    {
      id: 3,
      name: "Photography",
      icon: Camera,
      route: "/categories/photography",
      dataCategory: "Photography",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600",
      description: "Professional cameras and photography equipment"
    },
    {
      id: 4,
      name: "Computers",
      icon: Laptop,
      route: "/categories/computers",
      dataCategory: "Computers",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600",
      description: "Laptops, desktops, and computer accessories"
    },
    {
      id: 5,
      name: "Baby & Kids",
      icon: Baby,
      route: "/categories/baby-kids",
      dataCategory: "Baby & Kids",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600",
      description: "Safe and fun products for babies and children"
    },
    {
      id: 6,
      name: "Tools",
      icon: Wrench,
      route: "/categories/tools",
      dataCategory: "Tools",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600",
      description: "Professional and DIY tools for every project"
    },
    {
      id: 7,
      name: "Audio",
      icon: Headphones,
      route: "/categories/audio",
      dataCategory: "Audio",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
      description: "Premium headphones, speakers, and audio gear"
    },
    {
      id: 8,
      name: "Wearables",
      icon: Watch,
      route: "/categories/wearables",
      dataCategory: "Wearables",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
      description: "Smart watches and wearable technology"
    },
    {
      id: 9,
      name: "Sports",
      icon: Dumbbell,
      route: "/categories/sports",
      dataCategory: "Sports",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
      description: "Fitness equipment and sports accessories"
    },
    {
      id: 10,
      name: "Accessories",
      icon: ShoppingBag,
      route: "/categories/accessories",
      dataCategory: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
      description: "Essential accessories and lifestyle products"
    }
  ];

  // Get product counts for each category
  const getCategoryCount = (dataCategory: string) => {
    const products = getProductsByCategory(dataCategory);
    return products.length;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      {/* Header Section */}
      <div className="bg-muted/30 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Grid3X3 className="w-10 h-10 text-primary mr-3" />
              <h1 className="text-4xl font-bold text-foreground">Browse Categories</h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive collection of premium products across all categories.
              From fashion to technology, find exactly what you're looking for.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const productCount = getCategoryCount(category.dataCategory);
            
            return (
              <Link key={category.id} to={category.route} className="group">
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/20 group-hover:scale-[1.02] transform bg-background">
                  <div className="relative">
                    {/* Category Image */}
                    <div className="relative h-40 overflow-hidden bg-muted/20">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Single Color Overlay */}
                      <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-all duration-300" />

                      {/* Icon */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2.5 group-hover:bg-white transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>

                      {/* Product Count Badge */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-md px-2.5 py-1 group-hover:bg-white transition-all duration-300">
                        <span className="text-xs font-semibold text-foreground">{productCount} items</span>
                      </div>
                    </div>

                    {/* Content */}
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {category.name}
                        </h3>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-300" />
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                          Explore Collection
                        </span>
                        <div className="w-6 h-0.5 bg-primary/40 group-hover:bg-primary group-hover:w-8 transition-all duration-300" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;
