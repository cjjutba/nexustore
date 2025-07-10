import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Headphones, Camera, Watch, Laptop, Shirt, Baby, Wrench, Star, Heart, Package, Truck, Shield, CreditCard } from "lucide-react";

const Index = () => {
  const categories = [
    { id: 1, name: "Fashion", icon: Shirt, image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400", count: "500+ items" },
    { id: 2, name: "Electronics", icon: Smartphone, image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400", count: "300+ items" },
    { id: 3, name: "Photography", icon: Camera, image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400", count: "150+ items" },
    { id: 4, name: "Computers", icon: Laptop, image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400", count: "200+ items" },
    { id: 5, name: "Baby & Kids", icon: Baby, image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400", count: "400+ items" },
    { id: 6, name: "Tools", icon: Wrench, image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400", count: "250+ items" },
    { id: 7, name: "Audio", icon: Headphones, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", count: "180+ items" },
    { id: 8, name: "Wearables", icon: Watch, image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400", count: "120+ items" },
    { id: 9, name: "Sports", icon: Package, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400", count: "350+ items" },
    { id: 10, name: "Accessories", icon: Star, image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400", count: "600+ items" }
  ];

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

  const flashDeals = [
    {
      id: 1,
      name: "Flash Deal - Wireless Earbuds",
      price: 29.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      timeLeft: "2h 45m",
      sold: 189,
      stock: 50,
      discount: 63
    },
    {
      id: 2,
      name: "Flash Deal - Smartphone Case",
      price: 9.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400",
      timeLeft: "1h 23m",
      sold: 267,
      stock: 33,
      discount: 60
    },
    {
      id: 3,
      name: "Flash Deal - USB Cable",
      price: 4.99,
      originalPrice: 19.99,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
      timeLeft: "4h 12m",
      sold: 423,
      stock: 77,
      discount: 75
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Categories Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-dark mb-2">CATEGORIES</h2>
            <p className="text-gray">Explore our wide range of product categories</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Link key={category.id} to="/shop" className="group">
                  <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all duration-300 border border-gray-light">
                    <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-brand/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-brand" />
                    </div>
                    <p className="text-xs font-medium text-gray-dark leading-tight">{category.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Flash Deals Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-gray-dark">FLASH SALE</h2>
              <div className="bg-brand text-white px-3 py-1 rounded text-sm font-semibold">
                Ends in 23:59:42
              </div>
            </div>
            <Link to="/shop">
              <Button variant="outline" className="group">
                See All
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {flashDeals.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="group">
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 bg-brand text-white px-2 py-1 rounded text-xs font-bold">
                      -{product.discount}%
                    </div>
                    <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-dark group-hover:text-brand transition-colors mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl font-bold text-brand">₱{product.price}</span>
                      <span className="text-sm text-gray line-through">₱{product.originalPrice}</span>
                    </div>
                    <div className="text-xs text-gray mb-2">
                      {product.sold} sold • {product.timeLeft} left
                    </div>
                    <div className="w-full bg-gray-light rounded-full h-2">
                      <div 
                        className="bg-accent-yellow h-2 rounded-full" 
                        style={{width: `${(product.sold / (product.sold + product.stock)) * 100}%`}}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-dark mb-2">FEATURED PRODUCTS</h2>
              <p className="text-gray">Handpicked premium products with great deals</p>
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
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <div className="absolute top-2 left-2 bg-accent-green text-white px-2 py-1 rounded text-xs font-bold">
                        New
                      </div>
                    )}
                    <div className="absolute top-2 right-2 bg-brand text-white px-2 py-1 rounded text-xs font-bold">
                      -{product.discount}%
                    </div>
                    <Button variant="ghost" size="icon" className="absolute bottom-2 right-2 bg-white/80 hover:bg-white">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-dark group-hover:text-brand transition-colors mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${
                              i < Math.floor(product.rating) 
                                ? 'text-accent-yellow fill-accent-yellow' 
                                : 'text-gray'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-brand">₱{product.price}</span>
                      <span className="text-sm text-gray line-through">₱{product.originalPrice}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-12 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-dark mb-2">WHY CHOOSE US</h2>
            <p className="text-gray">Your satisfaction and security are our top priorities</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">Secure Shopping</h3>
              <p className="text-sm text-gray">Your data and payments are protected with bank-level security</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray">Free shipping on orders over ₱500 with same-day delivery options</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">Quality Guaranteed</h3>
              <p className="text-sm text-gray">100% authentic products with quality assurance and warranty</p>
            </div>

            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-brand" />
              </div>
              <h3 className="font-semibold text-gray-dark mb-2">Easy Returns</h3>
              <p className="text-sm text-gray">7-day return policy with full refund guarantee for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 background-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Latest Deals
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about flash sales, new arrivals, and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-accent-yellow"
            />
            <Button className="bg-accent-yellow text-gray-dark hover:bg-accent-yellow-light font-semibold px-6 py-3">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Shopee</h3>
              <p className="text-gray text-sm mb-4">
                Your trusted online shopping destination with millions of products and unbeatable deals.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-gray">
                <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-white">Returns & Refunds</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray">
                <li><Link to="/about" className="hover:text-white">About Shopee</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link to="/press" className="hover:text-white">Press & News</Link></li>
                <li><Link to="/investors" className="hover:text-white">Investors</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray">
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/cookies" className="hover:text-white">Cookie Policy</Link></li>
                <li><Link to="/security" className="hover:text-white">Security</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray/30 mt-8 pt-8 text-center">
            <p className="text-gray text-sm">
              © 2024 Shopee. All rights reserved. | Made with ❤️ for great shopping experiences
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;