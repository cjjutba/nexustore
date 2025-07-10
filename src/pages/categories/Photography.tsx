import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Heart, Star, Camera } from "lucide-react";

const Photography = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Canon EOS R5 Mirrorless Camera",
      price: 3899.99,
      originalPrice: 4299.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
      rating: 4.9,
      reviews: 234,
      category: "Photography",
      brand: "Canon",
      isNew: true,
      inStock: true,
      specs: ["45MP Full Frame", "8K Video", "In-Body Stabilization", "Dual Card Slots"]
    },
    {
      id: 2,
      name: "Sony Alpha A7 IV",
      price: 2499.99,
      originalPrice: 2799.99,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      rating: 4.8,
      reviews: 456,
      category: "Photography",
      brand: "Sony",
      isNew: false,
      inStock: true,
      specs: ["33MP Full Frame", "4K 60p Video", "693 AF Points", "5-Axis Stabilization"]
    },
    {
      id: 3,
      name: "Canon RF 24-70mm f/2.8L IS USM",
      price: 2299.99,
      originalPrice: 2499.99,
      image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=400",
      rating: 4.7,
      reviews: 189,
      category: "Photography",
      brand: "Canon",
      isNew: false,
      inStock: true,
      specs: ["24-70mm Zoom", "f/2.8 Aperture", "Image Stabilization", "Weather Sealed"]
    },
    {
      id: 4,
      name: "Nikon Z9 Professional Camera",
      price: 5499.99,
      originalPrice: 5999.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
      rating: 4.9,
      reviews: 167,
      category: "Photography",
      brand: "Nikon",
      isNew: true,
      inStock: true,
      specs: ["45.7MP Full Frame", "8K Video", "120fps Burst", "Dual CFexpress"]
    },
    {
      id: 5,
      name: "Manfrotto Carbon Fiber Tripod",
      price: 449.99,
      originalPrice: 549.99,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      rating: 4.6,
      reviews: 298,
      category: "Photography",
      brand: "Manfrotto",
      isNew: false,
      inStock: true,
      specs: ["Carbon Fiber Legs", "22lb Load Capacity", "Compact Design", "Quick Release"]
    },
    {
      id: 6,
      name: "Godox AD600Pro Flash",
      price: 899.99,
      originalPrice: 999.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
      rating: 4.5,
      reviews: 123,
      category: "Photography",
      brand: "Godox",
      isNew: false,
      inStock: true,
      specs: ["600Ws Power", "TTL Support", "High Speed Sync", "Wireless Control"]
    },
    {
      id: 7,
      name: "Sony FE 85mm f/1.4 GM",
      price: 1799.99,
      originalPrice: 1999.99,
      image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=400",
      rating: 4.8,
      reviews: 345,
      category: "Photography",
      brand: "Sony",
      isNew: false,
      inStock: true,
      specs: ["85mm Prime", "f/1.4 Aperture", "G Master Series", "Bokeh Control"]
    },
    {
      id: 8,
      name: "DJI Ronin-S Gimbal Stabilizer",
      price: 699.99,
      originalPrice: 799.99,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
      rating: 4.4,
      reviews: 267,
      category: "Photography",
      brand: "DJI",
      isNew: false,
      inStock: true,
      specs: ["3-Axis Stabilization", "7.9lb Payload", "12-hour Battery", "Mobile App Control"]
    },
    {
      id: 9,
      name: "Fujifilm X-T5 Mirrorless",
      price: 1699.99,
      originalPrice: 1899.99,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400",
      rating: 4.7,
      reviews: 178,
      category: "Photography",
      brand: "Fujifilm",
      isNew: true,
      inStock: true,
      specs: ["40.2MP APS-C", "6K Video", "Film Simulations", "Weather Resistant"]
    }
  ];

  const categories = ["All", "Cameras", "Lenses", "Tripods", "Lighting", "Accessories"];
  const brands = ["All", "Canon", "Sony", "Nikon", "Fujifilm", "Manfrotto", "Godox", "DJI"];
  const cameraTypes = ["All", "DSLR", "Mirrorless", "Point & Shoot", "Action Cameras"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Camera className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Photography</h1>
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

                {/* Camera Type Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Camera Type</h4>
                  <div className="space-y-2">
                    {cameraTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm">{type}</span>
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
                      <span className="text-sm">Under $500</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$500 - $1,500</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$1,500 - $3,000</span>
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
                      <span className="text-sm">4K Video</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Image Stabilization</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Weather Sealed</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Full Frame</span>
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
                Showing {products.length} photography products
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
                Load More Photography Equipment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
