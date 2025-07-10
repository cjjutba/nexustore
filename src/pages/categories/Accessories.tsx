import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Heart, Star, Gem } from "lucide-react";

const Accessories = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Leather Crossbody Bag",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      rating: 4.8,
      reviews: 456,
      category: "Accessories",
      brand: "Coach",
      isNew: true,
      inStock: true,
      specs: ["Genuine Leather", "Adjustable Strap", "Multiple Compartments", "Gold Hardware"]
    },
    {
      id: 2,
      name: "Wireless Phone Charger",
      price: 39.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400",
      rating: 4.6,
      reviews: 789,
      category: "Accessories",
      brand: "Anker",
      isNew: false,
      inStock: true,
      specs: ["15W Fast Charging", "Qi Compatible", "LED Indicator", "Non-Slip Base"]
    },
    {
      id: 3,
      name: "Sunglasses Aviator",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
      rating: 4.7,
      reviews: 634,
      category: "Accessories",
      brand: "Ray-Ban",
      isNew: true,
      inStock: true,
      specs: ["UV Protection", "Polarized Lenses", "Metal Frame", "Classic Design"]
    },
    {
      id: 4,
      name: "Phone Case Clear",
      price: 24.99,
      originalPrice: 34.99,
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400",
      rating: 4.5,
      reviews: 1234,
      category: "Accessories",
      brand: "OtterBox",
      isNew: false,
      inStock: true,
      specs: ["Drop Protection", "Crystal Clear", "Wireless Charging", "Easy Installation"]
    },
    {
      id: 5,
      name: "Silk Scarf Designer",
      price: 89.99,
      originalPrice: 129.99,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400",
      rating: 4.8,
      reviews: 234,
      category: "Accessories",
      brand: "Hermès",
      isNew: true,
      inStock: true,
      specs: ["100% Silk", "Hand-Rolled Edges", "Artistic Print", "Versatile Styling"]
    },
    {
      id: 6,
      name: "Wallet Minimalist",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      rating: 4.6,
      reviews: 567,
      category: "Accessories",
      brand: "Ridge",
      isNew: false,
      inStock: true,
      specs: ["RFID Blocking", "Carbon Fiber", "Slim Design", "Money Clip"]
    },
    {
      id: 7,
      name: "Jewelry Set Gold",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400",
      rating: 4.9,
      reviews: 189,
      category: "Accessories",
      brand: "Pandora",
      isNew: true,
      inStock: true,
      specs: ["14K Gold Plated", "Hypoallergenic", "Gift Box Included", "Matching Set"]
    },
    {
      id: 8,
      name: "Belt Leather Classic",
      price: 69.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      rating: 4.7,
      reviews: 345,
      category: "Accessories",
      brand: "Calvin Klein",
      isNew: false,
      inStock: true,
      specs: ["Genuine Leather", "Reversible", "Metal Buckle", "Adjustable"]
    },
    {
      id: 9,
      name: "Keychain Multi-Tool",
      price: 19.99,
      originalPrice: 29.99,
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400",
      rating: 4.4,
      reviews: 892,
      category: "Accessories",
      brand: "Leatherman",
      isNew: true,
      inStock: true,
      specs: ["Stainless Steel", "7 Tools in 1", "Compact Size", "Lifetime Warranty"]
    }
  ];

  const categories = ["All", "Bags", "Jewelry", "Phone Accessories", "Fashion", "Tech", "Lifestyle"];
  const brands = ["All", "Coach", "Anker", "Ray-Ban", "OtterBox", "Hermès", "Ridge", "Pandora"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Gem className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Accessories</h1>
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
                      <span className="text-sm">Under $50</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$50 - $100</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$100 - $200</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Over $200</span>
                    </label>
                  </div>
                </div>

                {/* Material */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Material</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Leather</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Metal</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Silk</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Plastic</span>
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
                Showing {products.length} accessory products
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
                Load More Accessories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
