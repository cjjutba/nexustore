import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Filter, Grid, List } from "lucide-react";
import { formatPrice } from "@/data/products";

const FlashDeals = () => {
  // Timer state - set to end in 24 hours from now
  const [timeLeft, setTimeLeft] = useState(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);
    return Math.floor((endTime.getTime() - new Date().getTime()) / 1000);
  });

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('discount');

  // Update timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          // Reset timer to 24 hours when it reaches 0
          const endTime = new Date();
          endTime.setHours(endTime.getHours() + 24);
          return Math.floor((endTime.getTime() - new Date().getTime()) / 1000);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time display
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Extended flash deals data
  const flashDeals = [
    {
      id: 1001,
      name: "Flash Deal - Wireless Earbuds Pro",
      price: 1499.99,
      originalPrice: 3999.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
      sold: 189,
      stock: 50,
      discount: 63,
      category: "Electronics",
      brand: "Apple",
      rating: 4.8,
      reviews: 234,
      isFlashDeal: true,
      description: "Premium wireless earbuds with active noise cancellation and spatial audio technology."
    },
    {
      id: 1002,
      name: "Flash Deal - Gaming Mouse RGB",
      price: 999.99,
      originalPrice: 2499.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      sold: 267,
      stock: 33,
      discount: 60,
      category: "Electronics",
      brand: "Logitech",
      rating: 4.7,
      reviews: 456,
      isFlashDeal: true,
      description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons."
    },
    {
      id: 1003,
      name: "Flash Deal - Bluetooth Speaker",
      price: 1249.99,
      originalPrice: 4999.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      sold: 423,
      stock: 77,
      discount: 75,
      category: "Audio",
      brand: "JBL",
      rating: 4.6,
      reviews: 189,
      isFlashDeal: true,
      description: "Portable Bluetooth speaker with powerful sound and waterproof design for outdoor adventures."
    },
    {
      id: 1004,
      name: "Flash Deal - Smartwatch Fitness",
      price: 2999.99,
      originalPrice: 7999.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
      sold: 156,
      stock: 44,
      discount: 63,
      category: "Wearables",
      brand: "Samsung",
      rating: 4.5,
      reviews: 123,
      isFlashDeal: true,
      description: "Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health insights."
    },
    {
      id: 1005,
      name: "Flash Deal - Mechanical Keyboard",
      price: 3999.99,
      originalPrice: 7999.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      sold: 89,
      stock: 21,
      discount: 50,
      category: "Computers",
      brand: "Corsair",
      rating: 4.9,
      reviews: 345,
      isFlashDeal: true,
      description: "Premium mechanical keyboard with RGB backlighting and customizable switches for gaming and typing."
    },
    {
      id: 1006,
      name: "Flash Deal - Wireless Charger",
      price: 799.99,
      originalPrice: 1999.99,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
      sold: 234,
      stock: 66,
      discount: 60,
      category: "Electronics",
      brand: "Anker",
      rating: 4.4,
      reviews: 167,
      isFlashDeal: true,
      description: "Fast wireless charging pad compatible with all Qi-enabled devices for convenient charging."
    },
    {
      id: 1007,
      name: "Flash Deal - Fitness Resistance Bands",
      price: 599.99,
      originalPrice: 1499.99,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      sold: 345,
      stock: 55,
      discount: 60,
      category: "Sports",
      brand: "TRX",
      rating: 4.6,
      reviews: 234,
      isFlashDeal: true,
      description: "Complete resistance bands set with multiple resistance levels for full-body workouts anywhere."
    },
    {
      id: 1008,
      name: "Flash Deal - Phone Case Premium",
      price: 499.99,
      originalPrice: 1299.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      sold: 567,
      stock: 133,
      discount: 62,
      category: "Accessories",
      brand: "OtterBox",
      rating: 4.7,
      reviews: 789,
      isFlashDeal: true,
      description: "Heavy-duty protective phone case with drop protection and wireless charging compatibility."
    },
    {
      id: 1009,
      name: "Flash Deal - LED Desk Lamp",
      price: 1199.99,
      originalPrice: 2999.99,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
      sold: 123,
      stock: 27,
      discount: 60,
      category: "Electronics",
      brand: "Philips",
      rating: 4.5,
      reviews: 156,
      isFlashDeal: true,
      description: "Adjustable LED desk lamp with multiple brightness levels and color temperature settings."
    }
  ];

  // Sort products
  const sortedDeals = [...flashDeals].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return b.discount - a.discount;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'sold':
        return b.sold - a.sold;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ⚡ FLASH DEALS
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Limited time offers with incredible discounts
            </p>
            <div className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg text-lg font-bold shadow-lg">
              <span>Sale ends in:</span>
              <span className="text-2xl font-mono">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
            >
              <option value="discount">Highest Discount</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="sold">Most Sold</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {sortedDeals.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border hover:border-accent/50">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'grid' ? 'h-48' : 'h-32'
                    }`}
                  />
                  <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-sm font-bold">
                    -{product.discount}%
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-bold text-foreground">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground mb-3">
                    {product.sold} sold • {formatTime(timeLeft)} left
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-300" 
                      style={{width: `${(product.sold / (product.sold + product.stock)) * 100}%`}}
                    />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
