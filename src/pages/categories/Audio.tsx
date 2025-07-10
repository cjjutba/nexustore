import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Heart, Star, Headphones } from "lucide-react";

const Audio = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Sony WH-1000XM5 Headphones",
      price: 349.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      rating: 4.9,
      reviews: 1247,
      category: "Audio",
      brand: "Sony",
      isNew: true,
      inStock: true,
      specs: ["30-hour Battery", "Active Noise Canceling", "Hi-Res Audio", "Quick Charge"]
    },
    {
      id: 2,
      name: "Bose QuietComfort 45",
      price: 279.99,
      originalPrice: 329.99,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
      rating: 4.8,
      reviews: 892,
      category: "Audio",
      brand: "Bose",
      isNew: false,
      inStock: true,
      specs: ["24-hour Battery", "Noise Cancellation", "Comfortable Fit", "Voice Assistant"]
    },
    {
      id: 3,
      name: "JBL Charge 5 Speaker",
      price: 149.99,
      originalPrice: 179.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      rating: 4.7,
      reviews: 634,
      category: "Audio",
      brand: "JBL",
      isNew: true,
      inStock: true,
      specs: ["20-hour Playtime", "Waterproof", "Power Bank", "PartyBoost"]
    },
    {
      id: 4,
      name: "Apple AirPods Pro (3rd Gen)",
      price: 229.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400",
      rating: 4.6,
      reviews: 456,
      category: "Audio",
      brand: "Apple",
      isNew: true,
      inStock: true,
      specs: ["Active Noise Cancellation", "Spatial Audio", "6-hour Battery", "MagSafe Charging"]
    },
    {
      id: 5,
      name: "Marshall Acton III Speaker",
      price: 279.99,
      originalPrice: 329.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      rating: 4.5,
      reviews: 789,
      category: "Audio",
      brand: "Marshall",
      isNew: false,
      inStock: true,
      specs: ["Bluetooth 5.2", "Multi-host", "Classic Design", "Dynamic Loudness"]
    },
    {
      id: 6,
      name: "Sennheiser HD 660S2",
      price: 499.99,
      originalPrice: 599.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      rating: 4.8,
      reviews: 234,
      category: "Audio",
      brand: "Sennheiser",
      isNew: true,
      inStock: true,
      specs: ["Open-back Design", "Hi-Fi Audio", "Detachable Cable", "Velour Earpads"]
    },
    {
      id: 7,
      name: "Beats Studio3 Wireless",
      price: 199.99,
      originalPrice: 349.99,
      image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
      rating: 4.4,
      reviews: 567,
      category: "Audio",
      brand: "Beats",
      isNew: false,
      inStock: true,
      specs: ["22-hour Battery", "Pure ANC", "Apple W1 Chip", "Fast Fuel"]
    },
    {
      id: 8,
      name: "Sonos One (Gen 2)",
      price: 199.99,
      originalPrice: 219.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      rating: 4.6,
      reviews: 345,
      category: "Audio",
      brand: "Sonos",
      isNew: false,
      inStock: true,
      specs: ["Voice Control", "Multi-room Audio", "Trueplay Tuning", "AirPlay 2"]
    },
    {
      id: 9,
      name: "Audio-Technica ATH-M50x",
      price: 149.99,
      originalPrice: 169.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      rating: 4.7,
      reviews: 1123,
      category: "Audio",
      brand: "Audio-Technica",
      isNew: false,
      inStock: true,
      specs: ["Professional Monitor", "45mm Drivers", "Detachable Cables", "Swiveling Earcups"]
    }
  ];

  const categories = ["All", "Headphones", "Speakers", "Earbuds", "Home Audio", "Professional"];
  const brands = ["All", "Sony", "Bose", "JBL", "Apple", "Marshall", "Sennheiser", "Beats"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Headphones className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Audio</h1>
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
                      <span className="text-sm">Under $100</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$100 - $200</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$200 - $400</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Over $400</span>
                    </label>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Features</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Noise Cancelling</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Wireless</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Waterproof</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Voice Assistant</span>
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
                Showing {products.length} audio products
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
                Load More Audio Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audio;
