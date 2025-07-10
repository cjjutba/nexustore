import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Heart, Star } from "lucide-react";

const Shop = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      rating: 4.8,
      reviews: 128,
      category: "Audio",
      brand: "TechPro",
      isNew: true,
      inStock: true
    },
    {
      id: 2,
      name: "Professional Laptop",
      price: 1299.99,
      originalPrice: 1499.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      rating: 4.9,
      reviews: 256,
      category: "Electronics",
      brand: "ProTech",
      isNew: false,
      inStock: true
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      price: 449.99,
      originalPrice: 549.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      rating: 4.7,
      reviews: 89,
      category: "Wearables",
      brand: "SmartTech",
      isNew: true,
      inStock: true
    },
    {
      id: 4,
      name: "Professional Camera",
      price: 899.99,
      originalPrice: 1099.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      rating: 4.9,
      reviews: 167,
      category: "Photography",
      brand: "PhotoPro",
      isNew: false,
      inStock: false
    },
    {
      id: 5,
      name: "Wireless Speaker",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      rating: 4.6,
      reviews: 203,
      category: "Audio",
      brand: "SoundWave",
      isNew: false,
      inStock: true
    },
    {
      id: 6,
      name: "Gaming Laptop",
      price: 1799.99,
      originalPrice: 1999.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      rating: 4.8,
      reviews: 145,
      category: "Electronics",
      brand: "GameTech",
      isNew: true,
      inStock: true
    }
  ];

  const categories = ["All", "Electronics", "Audio", "Photography", "Wearables"];
  const brands = ["All", "TechPro", "ProTech", "SmartTech", "PhotoPro", "SoundWave", "GameTech"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Premium Products</h1>
          <p className="text-lg text-muted-foreground">
            Discover our curated collection of high-quality products
          </p>
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

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Under $200</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$200 - $500</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">$500 - $1000</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-border" />
                      <span className="text-sm">Over $1000</span>
                    </label>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${
                                i < rating ? 'text-accent fill-accent' : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                          <span className="text-sm ml-1">& up</span>
                        </div>
                      </label>
                    ))}
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
                Showing {products.length} products
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
                      {!product.inStock && (
                        <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-xs font-medium">
                          Out of Stock
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
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">${product.price}</span>
                        <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                        <span className="text-xs bg-success-light text-success px-2 py-1 rounded">
                          Save ${(product.originalPrice - product.price).toFixed(2)}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;