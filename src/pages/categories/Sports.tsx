import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Heart, Star, Dumbbell } from "lucide-react";

const Sports = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Adjustable Dumbbell Set",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      rating: 4.8,
      reviews: 456,
      category: "Sports",
      brand: "PowerBlock",
      isNew: true,
      inStock: true,
      specs: ["5-50 lbs per hand", "Quick Weight Change", "Compact Design", "Expandable"]
    },
    {
      id: 2,
      name: "Yoga Mat Premium",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
      rating: 4.7,
      reviews: 789,
      category: "Sports",
      brand: "Manduka",
      isNew: false,
      inStock: true,
      specs: ["6mm Thick", "Non-Slip Surface", "Eco-Friendly", "Lifetime Guarantee"]
    },
    {
      id: 3,
      name: "Resistance Bands Set",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      rating: 4.6,
      reviews: 634,
      category: "Sports",
      brand: "Bodylastics",
      isNew: true,
      inStock: true,
      specs: ["5 Resistance Levels", "Door Anchor", "Handles & Ankle Straps", "Workout Guide"]
    },
    {
      id: 4,
      name: "Treadmill Folding",
      price: 899.99,
      originalPrice: 1199.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      rating: 4.5,
      reviews: 234,
      category: "Sports",
      brand: "NordicTrack",
      isNew: false,
      inStock: true,
      specs: ["2.6 CHP Motor", "10% Incline", "Foldable Design", "iFit Compatible"]
    },
    {
      id: 5,
      name: "Basketball Official Size",
      price: 39.99,
      originalPrice: 49.99,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
      rating: 4.8,
      reviews: 345,
      category: "Sports",
      brand: "Spalding",
      isNew: true,
      inStock: true,
      specs: ["Official Size 7", "Composite Leather", "Deep Channel Design", "Indoor/Outdoor"]
    },
    {
      id: 6,
      name: "Tennis Racket Pro",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400",
      rating: 4.7,
      reviews: 189,
      category: "Sports",
      brand: "Wilson",
      isNew: false,
      inStock: true,
      specs: ["100 sq in Head", "11.2 oz Weight", "16x19 String Pattern", "Graphite Frame"]
    },
    {
      id: 7,
      name: "Cycling Helmet",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      rating: 4.6,
      reviews: 298,
      category: "Sports",
      brand: "Giro",
      isNew: true,
      inStock: true,
      specs: ["MIPS Technology", "18 Vents", "Adjustable Fit", "Lightweight"]
    },
    {
      id: 8,
      name: "Soccer Ball FIFA Approved",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400",
      rating: 4.5,
      reviews: 567,
      category: "Sports",
      brand: "Adidas",
      isNew: false,
      inStock: true,
      specs: ["FIFA Quality Pro", "Size 5", "Machine Stitched", "Butyl Bladder"]
    },
    {
      id: 9,
      name: "Protein Shaker Bottle",
      price: 19.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      rating: 4.4,
      reviews: 1123,
      category: "Sports",
      brand: "BlenderBottle",
      isNew: true,
      inStock: true,
      specs: ["28 oz Capacity", "BlenderBall Wire Whisk", "Leak Proof", "BPA Free"]
    }
  ];

  const categories = ["All", "Fitness Equipment", "Team Sports", "Individual Sports", "Outdoor", "Accessories"];
  const brands = ["All", "PowerBlock", "Manduka", "NordicTrack", "Spalding", "Wilson", "Giro", "Adidas"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Dumbbell className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Sports</h1>
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
                      <span className="text-sm">$50 - $200</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$200 - $500</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Over $500</span>
                    </label>
                  </div>
                </div>

                {/* Sport Type */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Sport Type</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Fitness</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Basketball</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Tennis</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Soccer</span>
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
                Showing {products.length} sports products
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
                Load More Sports Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
