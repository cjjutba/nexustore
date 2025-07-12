import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart, Star } from "lucide-react";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      rating: 4.8,
      reviews: 1284,
      isNew: true,
      discount: 25
    },
    {
      id: 2,
      name: "Professional Laptop",
      price: 1299.99,
      originalPrice: 1499.99,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
      rating: 4.9,
      reviews: 856,
      isNew: false,
      discount: 13
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      price: 449.99,
      originalPrice: 549.99,
      image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400",
      rating: 4.7,
      reviews: 623,
      isNew: true,
      discount: 18
    },
    {
      id: 4,
      name: "Professional Camera",
      price: 899.99,
      originalPrice: 1099.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
      rating: 4.9,
      reviews: 445,
      isNew: false,
      discount: 18
    },
    {
      id: 5,
      name: "Gaming Smartphone",
      price: 699.99,
      originalPrice: 799.99,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400",
      rating: 4.6,
      reviews: 932,
      isNew: true,
      discount: 13
    },
    {
      id: 6,
      name: "Designer Jacket",
      price: 199.99,
      originalPrice: 299.99,
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400",
      rating: 4.5,
      reviews: 378,
      isNew: false,
      discount: 33
    },
    {
      id: 7,
      name: "Professional Tools Set",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400",
      rating: 4.7,
      reviews: 267,
      isNew: false,
      discount: 25
    },
    {
      id: 8,
      name: "Baby Care Kit",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      rating: 4.8,
      reviews: 534,
      isNew: true,
      discount: 25
    }
  ];

  return (
    <section className="py-16 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">FEATURED PRODUCTS</h2>
            <p className="text-dark-gray text-lg">Handpicked premium products with great deals</p>
          </div>
          <Link to="/featured-products">
            <Button variant="outline" className="group border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
              View All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 transform">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                      New
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                    -{product.discount}%
                  </div>
                  <Button variant="ghost" size="icon" className="absolute bottom-4 right-4 bg-white/90 hover:bg-white shadow-lg">
                    <Heart className="h-4 w-4 text-charcoal" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors mb-3 text-lg line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) 
                              ? 'text-yellow-500 fill-yellow-500' 
                              : 'text-medium-gray'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-dark-gray">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-primary">₱{product.price}</span>
                    <span className="text-base text-medium-gray line-through">₱{product.originalPrice}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
