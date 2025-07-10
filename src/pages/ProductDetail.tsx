import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Star, 
  Heart, 
  ShoppingCart, 
  Truck, 
  Shield, 
  RotateCcw, 
  Plus, 
  Minus,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    originalPrice: 399.99,
    images: [
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"
    ],
    rating: 4.8,
    reviews: 128,
    category: "Audio",
    brand: "TechPro",
    inStock: true,
    stockCount: 24,
    description: "Experience unparalleled audio quality with our Premium Wireless Headphones. Featuring advanced noise cancellation, premium materials, and exceptional comfort for extended listening sessions.",
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Premium materials",
      "Wireless charging case",
      "Hi-Res Audio certified",
      "Comfortable over-ear design"
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 40kHz",
      "Battery Life": "40 hours",
      "Charging Time": "2 hours",
      "Weight": "280g",
      "Connectivity": "Bluetooth 5.0, USB-C"
    },
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Silver", "Gold"]
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Professional Laptop",
      price: 1299.99,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
      rating: 4.9,
      reviews: 256
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      price: 449.99,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
      rating: 4.7,
      reviews: 89
    },
    {
      id: 4,
      name: "Professional Camera",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
      rating: 4.9,
      reviews: 167
    }
  ];

  const reviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      comment: "Absolutely amazing sound quality! The noise cancellation is incredible and the battery life exceeds expectations.",
      verified: true
    },
    {
      id: 2,
      user: "Mike Chen",
      rating: 4,
      date: "2024-01-10",
      comment: "Great headphones overall. Very comfortable for long listening sessions. Only minor complaint is the case could be smaller.",
      verified: true
    },
    {
      id: 3,
      user: "Emily Davis",
      rating: 5,
      date: "2024-01-08",
      comment: "Best purchase I've made this year! The build quality is exceptional and they look as premium as they sound.",
      verified: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-accent">Shop</Link>
            <span>/</span>
            <Link to={`/shop?category=${product.category}`} className="hover:text-accent">{product.category}</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 bg-white/80 hover:bg-white"
              >
                <Heart className="h-5 w-5" />
              </Button>
              
              {/* Image Navigation */}
              {product.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>{product.brand}</span>
                <span>•</span>
                <span>{product.category}</span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-accent fill-accent' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-foreground">${product.price}</span>
                <span className="text-xl text-muted-foreground line-through">${product.originalPrice}</span>
                <span className="bg-success-light text-success px-3 py-1 rounded-full text-sm font-medium">
                  Save ${(product.originalPrice - product.price).toFixed(2)}
                </span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                <div className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-success' : 'bg-destructive'}`} />
                <span className={product.inStock ? 'text-success' : 'text-destructive'}>
                  {product.inStock ? `In Stock (${product.stockCount} available)` : 'Out of Stock'}
                </span>
              </div>

              <p className="text-muted-foreground mb-6">{product.description}</p>
            </div>

            {/* Options */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                  disabled={quantity >= product.stockCount}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button className="w-full" size="lg" disabled={!product.inStock}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Heart className="w-5 h-5 mr-2" />
                Add to Wishlist
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders $99+</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">2 Year Warranty</p>
                <p className="text-xs text-muted-foreground">Full coverage</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="text-sm font-medium">30-Day Returns</p>
                <p className="text-xs text-muted-foreground">No questions asked</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex space-x-8">
              <button className="py-4 px-1 border-b-2 border-accent text-accent font-medium">
                Description
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground">
                Specifications
              </button>
              <button className="py-4 px-1 border-b-2 border-transparent text-muted-foreground hover:text-foreground">
                Reviews ({product.reviews})
              </button>
            </div>
          </div>
          
          <div className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="space-y-2">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border">
                      <span className="text-muted-foreground">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product.id} to={`/products/${product.id}`} className="group">
                <Card className="h-full hover:shadow-premium-lg transition-all duration-300 group-hover:scale-105 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <CardContent className="p-4">
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
                    <span className="text-lg font-bold text-foreground">${product.price}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;