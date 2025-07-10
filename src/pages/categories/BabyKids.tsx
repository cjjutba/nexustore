import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Filter, Grid, List, Heart, Star, Baby } from "lucide-react";

const BabyKids = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      id: 1,
      name: "Premium Baby Stroller",
      price: 299.99,
      originalPrice: 399.99,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      rating: 4.8,
      reviews: 234,
      category: "Baby & Kids",
      brand: "BabyTrend",
      isNew: true,
      inStock: true,
      ageRange: "0-3 years",
      specs: ["Lightweight Frame", "5-Point Harness", "Large Storage", "Easy Fold"]
    },
    {
      id: 2,
      name: "Wooden Educational Blocks",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      rating: 4.7,
      reviews: 456,
      category: "Baby & Kids",
      brand: "LearnPlay",
      isNew: false,
      inStock: true,
      ageRange: "2-6 years",
      specs: ["Natural Wood", "Non-Toxic Paint", "50 Pieces", "Educational"]
    },
    {
      id: 3,
      name: "Baby Car Seat",
      price: 199.99,
      originalPrice: 249.99,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
      rating: 4.9,
      reviews: 189,
      category: "Baby & Kids",
      brand: "SafeRide",
      isNew: true,
      inStock: true,
      ageRange: "0-4 years",
      specs: ["ISOFIX Compatible", "Side Impact Protection", "Adjustable", "Machine Washable"]
    },
    {
      id: 4,
      name: "Interactive Learning Tablet",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400",
      rating: 4.6,
      reviews: 298,
      category: "Baby & Kids",
      brand: "KidsLearn",
      isNew: false,
      inStock: true,
      ageRange: "3-8 years",
      specs: ["Educational Games", "Parental Controls", "Durable Design", "Long Battery"]
    },
    {
      id: 5,
      name: "Organic Baby Clothes Set",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=400",
      rating: 4.8,
      reviews: 167,
      category: "Baby & Kids",
      brand: "OrganicBaby",
      isNew: true,
      inStock: true,
      ageRange: "0-2 years",
      specs: ["100% Organic Cotton", "Hypoallergenic", "Soft & Comfortable", "Machine Washable"]
    },
    {
      id: 6,
      name: "Kids Balance Bike",
      price: 129.99,
      originalPrice: 159.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      rating: 4.7,
      reviews: 123,
      category: "Baby & Kids",
      brand: "RideFun",
      isNew: false,
      inStock: true,
      ageRange: "2-5 years",
      specs: ["Adjustable Seat", "Lightweight", "No Pedals", "Balance Training"]
    },
    {
      id: 7,
      name: "Baby Monitor with Camera",
      price: 149.99,
      originalPrice: 199.99,
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400",
      rating: 4.5,
      reviews: 234,
      category: "Baby & Kids",
      brand: "BabyWatch",
      isNew: true,
      inStock: true,
      ageRange: "0+ years",
      specs: ["HD Video", "Night Vision", "Two-Way Audio", "Mobile App"]
    },
    {
      id: 8,
      name: "Plush Teddy Bear",
      price: 29.99,
      originalPrice: 39.99,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400",
      rating: 4.9,
      reviews: 567,
      category: "Baby & Kids",
      brand: "CuddleFriend",
      isNew: false,
      inStock: true,
      ageRange: "0+ years",
      specs: ["Super Soft", "Machine Washable", "Safety Tested", "Hypoallergenic"]
    },
    {
      id: 9,
      name: "Kids Art Supply Kit",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400",
      rating: 4.6,
      reviews: 345,
      category: "Baby & Kids",
      brand: "CreativeKids",
      isNew: true,
      inStock: true,
      ageRange: "4-12 years",
      specs: ["100+ Pieces", "Non-Toxic", "Storage Case", "Creative Fun"]
    }
  ];

  const categories = ["All", "Toys", "Clothing", "Safety", "Furniture", "Educational"];
  const brands = ["All", "BabyTrend", "LearnPlay", "SafeRide", "KidsLearn", "OrganicBaby"];
  const ageRanges = ["All", "0-1 years", "1-3 years", "3-6 years", "6+ years"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-surface py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Baby className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl font-bold text-foreground">Baby & Kids</h1>
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

                {/* Age Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Age Range</h4>
                  <div className="space-y-2">
                    {ageRanges.map((age) => (
                      <label key={age} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-border" />
                        <span className="text-sm">{age}</span>
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
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} baby & kids products
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
                  <option value="age">Age Range</option>
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
                      <div className="text-xs text-muted-foreground mb-2">
                        Age: {product.ageRange}
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
                Load More Baby & Kids Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabyKids;
