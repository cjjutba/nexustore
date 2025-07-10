import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Heart, Star, Laptop } from "lucide-react";

const Computers = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "MacBook Pro 16\" M3 Max",
      price: 3999.99,
      originalPrice: 4299.99,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      rating: 4.9,
      reviews: 567,
      category: "Computers",
      brand: "Apple",
      isNew: true,
      inStock: true,
      specs: ["M3 Max Chip", "32GB RAM", "1TB SSD", "16.2\" Liquid Retina XDR"]
    },
    {
      id: 2,
      name: "Dell XPS 13 Plus",
      price: 1299.99,
      originalPrice: 1499.99,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      rating: 4.7,
      reviews: 234,
      category: "Computers",
      brand: "Dell",
      isNew: false,
      inStock: true,
      specs: ["Intel i7-1360P", "16GB RAM", "512GB SSD", "13.4\" OLED Display"]
    },
    {
      id: 3,
      name: "Gaming Desktop PC - RTX 4080",
      price: 2799.99,
      originalPrice: 3199.99,
      image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?w=400",
      rating: 4.8,
      reviews: 189,
      category: "Computers",
      brand: "Custom Build",
      isNew: true,
      inStock: true,
      specs: ["Intel i7-13700K", "32GB DDR5", "RTX 4080", "1TB NVMe SSD"]
    },
    {
      id: 4,
      name: "Surface Laptop Studio 2",
      price: 1999.99,
      originalPrice: 2299.99,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      rating: 4.6,
      reviews: 145,
      category: "Computers",
      brand: "Microsoft",
      isNew: false,
      inStock: true,
      specs: ["Intel i7-13700H", "16GB RAM", "512GB SSD", "14.4\" Touchscreen"]
    },
    {
      id: 5,
      name: "ASUS ROG Strix Gaming Laptop",
      price: 1899.99,
      originalPrice: 2199.99,
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
      rating: 4.7,
      reviews: 298,
      category: "Computers",
      brand: "ASUS",
      isNew: true,
      inStock: true,
      specs: ["AMD Ryzen 9", "16GB RAM", "RTX 4070", "15.6\" 144Hz Display"]
    },
    {
      id: 6,
      name: "Mac Studio M2 Ultra",
      price: 3999.99,
      originalPrice: 4399.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      rating: 4.9,
      reviews: 123,
      category: "Computers",
      brand: "Apple",
      isNew: false,
      inStock: true,
      specs: ["M2 Ultra Chip", "64GB RAM", "1TB SSD", "Thunderbolt 4 Ports"]
    },
    {
      id: 7,
      name: "Mechanical Gaming Keyboard",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      rating: 4.5,
      reviews: 456,
      category: "Computers",
      brand: "Corsair",
      isNew: false,
      inStock: true,
      specs: ["Cherry MX Switches", "RGB Backlight", "USB-C", "Aluminum Frame"]
    },
    {
      id: 8,
      name: "4K Gaming Monitor 32\"",
      price: 699.99,
      originalPrice: 799.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400",
      rating: 4.6,
      reviews: 234,
      category: "Computers",
      brand: "LG",
      isNew: true,
      inStock: true,
      specs: ["32\" 4K UHD", "144Hz Refresh", "1ms Response", "HDR10 Support"]
    },
    {
      id: 9,
      name: "Wireless Gaming Mouse",
      price: 99.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      rating: 4.4,
      reviews: 567,
      category: "Computers",
      brand: "Logitech",
      isNew: false,
      inStock: true,
      specs: ["25,600 DPI", "70-hour Battery", "Wireless Charging", "11 Buttons"]
    }
  ];

  const categories = ["All", "Laptops", "Desktops", "Monitors", "Keyboards", "Mice", "Components"];
  const brands = ["All", "Apple", "Dell", "Microsoft", "ASUS", "Corsair", "LG", "Logitech"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Laptop className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Computers</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filters
                </h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brand Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Brand</h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Under $200</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$200 - $1,000</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$1,000 - $3,000</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Over $3,000</span>
                    </label>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Features</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Gaming Ready</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">4K Display</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">SSD Storage</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Wireless</span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} computer products
              </p>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-border rounded-md px-3 py-2 bg-background"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>

                {/* View Mode */}
                <div className="flex border border-border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`} className="group">
                  <Card className={`h-full hover:shadow-premium-lg transition-all duration-300 group-hover:scale-105 overflow-hidden ${
                    viewMode === 'list' ? 'flex flex-row' : ''
                  }`}>
                    <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-64'}`}>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${
                                i < Math.floor(product.rating) 
                                  ? 'text-accent fill-accent' 
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-bold text-foreground">${product.price}</span>
                        {product.originalPrice && (
                          <>
                            <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                            <span className="text-xs bg-success-light text-success px-2 py-1 rounded">
                              Save ${(product.originalPrice - product.price).toFixed(2)}
                            </span>
                          </>
                        )}
                      </div>
                      {product.specs && (
                        <div className="text-xs text-muted-foreground">
                          <div className="flex flex-wrap gap-1">
                            {product.specs.slice(0, 2).map((spec, index) => (
                              <span key={index} className="bg-muted px-2 py-1 rounded">
                                {spec}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Computer Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Computers;
