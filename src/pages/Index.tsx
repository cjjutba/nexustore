import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Heart, Headphones, Camera, Watch, Laptop } from "lucide-react";

const Index = () => {
  const categories = [
    {
      id: 1,
      name: "Electronics",
      description: "Latest tech gadgets",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      count: "250+ products"
    },
    {
      id: 2,
      name: "Audio",
      description: "Premium sound experience",
      icon: Headphones,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      count: "120+ products"
    },
    {
      id: 3,
      name: "Photography",
      description: "Professional equipment",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      count: "80+ products"
    },
    {
      id: 4,
      name: "Wearables",
      description: "Smart accessories",
      icon: Watch,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      count: "90+ products"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      rating: 4.8,
      reviews: 128,
      isNew: true
    },
    {
      id: 2,
      name: "Professional Laptop",
      price: 1299.99,
      originalPrice: 1499.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      rating: 4.9,
      reviews: 256,
      isNew: false
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      price: 449.99,
      originalPrice: 549.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      rating: 4.7,
      reviews: 89,
      isNew: true
    },
    {
      id: 4,
      name: "Professional Camera",
      price: 899.99,
      originalPrice: 1099.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      rating: 4.9,
      reviews: 167,
      isNew: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Categories Section */}
      <section className="py-20 bg-gradient-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collections of premium products across different categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.id} to="/shop" className="group">
                  <Card className="h-full hover:shadow-premium-lg transition-all duration-300 group-hover:scale-105 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent className="w-5 h-5" />
                          <span className="text-sm font-medium">{category.count}</span>
                        </div>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="group-hover:text-accent transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured Products
              </h2>
              <p className="text-lg text-muted-foreground">
                Handpicked premium products with exclusive deals
              </p>
            </div>
            <Link to="/shop">
              <Button variant="outline" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="group">
                <Card className="h-full hover:shadow-premium-lg transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                        New
                      </div>
                    )}
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span 
                            key={i} 
                            className={`text-xs ${i < Math.floor(product.rating) ? 'text-accent' : 'text-muted-foreground'}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-foreground">${product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Get notified about new products, exclusive deals, and special offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button variant="accent" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;