import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Heart, Star, Shirt } from "lucide-react";

const Fashion = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      rating: 4.7,
      reviews: 89,
      category: "Fashion",
      brand: "StyleCo",
      isNew: true,
      inStock: true,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["White", "Black", "Navy", "Gray"]
    },
    {
      id: 2,
      name: "Classic Denim Jeans",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      rating: 4.8,
      reviews: 156,
      category: "Fashion",
      brand: "DenimPro",
      isNew: false,
      inStock: true,
      sizes: ["28", "30", "32", "34", "36"],
      colors: ["Blue", "Black", "Light Blue"]
    },
    {
      id: 3,
      name: "Elegant Summer Dress",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400",
      rating: 4.9,
      reviews: 203,
      category: "Fashion",
      brand: "ElegantWear",
      isNew: true,
      inStock: true,
      sizes: ["XS", "S", "M", "L"],
      colors: ["Floral", "Solid Blue", "Black"]
    },
    {
      id: 4,
      name: "Professional Blazer",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      rating: 4.6,
      reviews: 78,
      category: "Fashion",
      brand: "BusinessStyle",
      isNew: false,
      inStock: true,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Charcoal"]
    },
    {
      id: 5,
      name: "Casual Sneakers",
      price: 119.99,
      originalPrice: 149.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400",
      rating: 4.8,
      reviews: 234,
      category: "Fashion",
      brand: "ComfortStep",
      isNew: true,
      inStock: true,
      sizes: ["7", "8", "9", "10", "11", "12"],
      colors: ["White", "Black", "Gray", "Navy"]
    },
    {
      id: 6,
      name: "Leather Handbag",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      rating: 4.7,
      reviews: 145,
      category: "Fashion",
      brand: "LuxeLeather",
      isNew: false,
      inStock: true,
      colors: ["Brown", "Black", "Tan"]
    },
    {
      id: 7,
      name: "Wool Winter Coat",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400",
      rating: 4.9,
      reviews: 167,
      category: "Fashion",
      brand: "WarmWear",
      isNew: true,
      inStock: true,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Camel", "Navy"]
    },
    {
      id: 8,
      name: "Athletic Leggings",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=400",
      rating: 4.6,
      reviews: 298,
      category: "Fashion",
      brand: "ActiveFit",
      isNew: false,
      inStock: true,
      sizes: ["XS", "S", "M", "L", "XL"],
      colors: ["Black", "Navy", "Gray", "Purple"]
    },
    {
      id: 9,
      name: "Silk Scarf",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400",
      rating: 4.8,
      reviews: 89,
      category: "Fashion",
      brand: "SilkLux",
      isNew: true,
      inStock: true,
      colors: ["Floral", "Geometric", "Solid"]
    }
  ];

  const categories = ["All", "Clothing", "Shoes", "Accessories", "Bags"];
  const brands = ["All", "StyleCo", "DenimPro", "ElegantWear", "BusinessStyle", "ComfortStep", "LuxeLeather"];
  const sizes = ["All", "XS", "S", "M", "L", "XL"];
  const colors = ["All", "Black", "White", "Navy", "Gray", "Brown"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Shirt className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Fashion</h1>
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

                {/* Size Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Size</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {sizes.slice(1).map((size) => (
                      <button key={size} className="border border-border rounded px-2 py-1 text-xs hover:bg-muted">
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Color</h4>
                  <div className="space-y-2">
                    {colors.map((color) => (
                      <label key={color} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm">{color}</span>
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
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} fashion products
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
                      <div className="flex items-center gap-2 mb-2">
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
                      {product.sizes && (
                        <div className="text-xs text-muted-foreground">
                          Sizes: {product.sizes.join(', ')}
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
                Load More Fashion Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fashion;
