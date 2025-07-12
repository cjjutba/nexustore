import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useFlashDealTimer } from "@/utils/flashDealTimer";
import {
  Heart,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Share2,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clock,
  Zap
} from "lucide-react";

const FlashDealsProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddingToWaitlist, setIsAddingToWaitlist] = useState(false);

  const { addToCart, toggleWaitlist, isInCart, isInWaitlist } = useCart();
  const { toast } = useToast();
  const { timeLeft, formattedTime } = useFlashDealTimer();

  // Scroll to top when component mounts or when product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Flash deals data - matches the data from FlashDeals.tsx
  const flashDeals = [
    {
      id: 1001,
      name: "Flash Deal - Wireless Earbuds Pro",
      price: 1499.99,
      originalPrice: 3999.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
      images: [
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500"
      ],
      sold: 189,
      stock: 50,
      discount: 63,
      category: "Electronics",
      brand: "Apple",
      rating: 4.8,
      reviews: 234,
      isNew: true,
      inStock: true,
      isFlashDeal: true,
      description: "Premium wireless earbuds with active noise cancellation and spatial audio technology.",
      specifications: {
        "Battery Life": "6 hours + 24 hours with case",
        "Connectivity": "Bluetooth 5.3",
        "Noise Cancellation": "Active ANC",
        "Water Resistance": "IPX4",
        "Driver Size": "11mm",
        "Weight": "5.4g per earbud"
      },
      sizes: [],
      colors: ["White", "Black", "Space Gray"]
    },
    {
      id: 1002,
      name: "Flash Deal - Gaming Mouse RGB",
      price: 999.99,
      originalPrice: 2499.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      images: [
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
        "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
        "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=500"
      ],
      sold: 267,
      stock: 33,
      discount: 60,
      category: "Electronics",
      brand: "Logitech",
      rating: 4.7,
      reviews: 456,
      isNew: true,
      inStock: true,
      isFlashDeal: true,
      description: "High-precision wireless gaming mouse with customizable RGB lighting and programmable buttons.",
      specifications: {
        "DPI": "25,600 DPI",
        "Connectivity": "Wireless 2.4GHz, Bluetooth",
        "Battery Life": "250 hours",
        "Buttons": "11 programmable buttons",
        "Weight": "99g",
        "Sensor": "HERO 25K"
      },
      sizes: [],
      colors: ["Black", "White"]
    },
    {
      id: 1003,
      name: "Flash Deal - Bluetooth Speaker",
      price: 1249.99,
      originalPrice: 4999.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      images: [
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
        "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500"
      ],
      sold: 423,
      stock: 77,
      discount: 75,
      category: "Audio",
      brand: "JBL",
      rating: 4.6,
      reviews: 189,
      isNew: true,
      inStock: true,
      isFlashDeal: true,
      description: "Portable Bluetooth speaker with powerful sound and waterproof design for outdoor adventures.",
      specifications: {
        "Battery Life": "20 hours",
        "Connectivity": "Bluetooth 5.0, AUX",
        "Water Resistance": "IPX7",
        "Power Output": "40W",
        "Frequency Response": "65Hz - 20kHz",
        "Weight": "1.2kg"
      },
      sizes: [],
      colors: ["Black", "Blue", "Red"]
    },
    {
      id: 1004,
      name: "Flash Deal - Smartwatch Fitness",
      price: 2999.99,
      originalPrice: 7999.99,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
      images: [
        "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500",
        "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500"
      ],
      sold: 156,
      stock: 44,
      discount: 63,
      category: "Wearables",
      brand: "Samsung",
      rating: 4.5,
      reviews: 123,
      isNew: true,
      inStock: true,
      isFlashDeal: true,
      description: "Advanced fitness tracker with heart rate monitoring, GPS, and comprehensive health insights.",
      specifications: {
        "Display": "1.4-inch AMOLED",
        "Battery Life": "4 days",
        "Water Resistance": "5ATM + IP68",
        "GPS": "Built-in GPS",
        "Health Sensors": "Heart rate, SpO2, Sleep",
        "Compatibility": "Android, iOS"
      },
      sizes: ["38mm", "42mm", "46mm"],
      colors: ["Black", "Silver", "Gold"]
    },
    {
      id: 1005,
      name: "Flash Deal - Mechanical Keyboard",
      price: 3999.99,
      originalPrice: 7999.99,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      images: [
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500",
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
        "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500"
      ],
      sold: 89,
      stock: 21,
      discount: 50,
      category: "Computers",
      brand: "Corsair",
      rating: 4.9,
      reviews: 345,
      isNew: true,
      inStock: true,
      isFlashDeal: true,
      description: "Premium mechanical keyboard with RGB backlighting and customizable switches for gaming and typing.",
      specifications: {
        "Switch Type": "Cherry MX Red",
        "Backlighting": "RGB per-key",
        "Layout": "Full-size (104 keys)",
        "Connectivity": "USB-C, Wireless",
        "Battery Life": "200 hours",
        "Polling Rate": "1000Hz"
      },
      sizes: [],
      colors: ["Black", "White"]
    }
  ];

  const product = flashDeals.find(p => p.id === parseInt(id || ''));

  // Initialize selected options when product loads
  useEffect(() => {
    if (product) {
      // Set default size if available
      if (product.sizes && product.sizes.length > 0 && !selectedSize) {
        setSelectedSize(product.sizes[0]);
      }
      // Set default color if available
      if (product.colors && product.colors.length > 0 && !selectedColor) {
        setSelectedColor(product.colors[0]);
      }
    }
  }, [product, selectedSize, selectedColor]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Flash Deal Not Found</h1>
            <p className="text-muted-foreground mb-6">The flash deal you're looking for doesn't exist or has expired.</p>
            <Link to="/flash-deals">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Flash Deals
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }



  // Validation function for required options
  const validateOptions = () => {
    if (!product) return false;

    // Check if size is required and selected
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Size Required",
        description: "Please select a size before adding to cart.",
        variant: "destructive",
      });
      return false;
    }

    // Check if color is required and selected
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      toast({
        title: "Color Required",
        description: "Please select a color before adding to cart.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  // Add to cart handler
  const handleAddToCart = async () => {
    if (!product || !validateOptions()) return;

    setIsAddingToCart(true);

    try {
      const selectedOptions = {
        size: selectedSize || undefined,
        color: selectedColor || undefined,
      };

      addToCart(product, quantity, selectedOptions);

      toast({
        title: "Added to Cart!",
        description: `${product.name} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAddingToCart(false);
    }
  };

  // Toggle waitlist handler
  const handleToggleWaitlist = async () => {
    if (!product) return;

    setIsAddingToWaitlist(true);

    try {
      const selectedOptions = {
        size: selectedSize || product.sizes?.[0],
        color: selectedColor || product.colors?.[0]
      };

      const wasAdded = toggleWaitlist(product, selectedOptions);

      toast({
        title: wasAdded ? "Added to Wishlist!" : "Removed from Wishlist",
        description: wasAdded
          ? `${product.name} has been added to your wishlist.`
          : `${product.name} has been removed from your wishlist.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAddingToWaitlist(false);
    }
  };

  const productImages = product.images || [product.image];

  const reviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      comment: "Amazing flash deal! Got this at an incredible price and the quality is outstanding!"
    },
    {
      id: 2,
      user: "Mike Chen",
      rating: 4,
      date: "2024-01-10",
      comment: "Great value for money during the flash sale. Fast shipping and well packaged."
    },
    {
      id: 3,
      user: "Emma Davis",
      rating: 5,
      date: "2024-01-05",
      comment: "Love this flash deal! Saved so much money and the product is excellent."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/flash-deals" className="hover:text-foreground">Flash Deals</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-3">
            {/* Main Image */}
            <div className="relative aspect-square max-w-sm mx-auto overflow-hidden rounded-lg bg-muted">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {/* Flash Deal Badge */}
              <div className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-md text-sm font-bold flex items-center gap-1">
                <Zap className="w-3 h-3" />
                -{product.discount}% OFF
              </div>

              <Button
                variant="ghost"
                size="icon"
                className={`absolute top-4 right-4 transition-all duration-300 hover:scale-110 ${
                  isInWaitlist(product.id, {
                    size: selectedSize || product.sizes?.[0],
                    color: selectedColor || product.colors?.[0]
                  })
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-white/90 hover:bg-white text-gray-600 hover:text-red-500'
                }`}
                onClick={handleToggleWaitlist}
              >
                <Heart className={`h-5 w-5 ${
                  isInWaitlist(product.id, {
                    size: selectedSize || product.sizes?.[0],
                    color: selectedColor || product.colors?.[0]
                  }) ? 'fill-current' : ''
                }`} />
              </Button>

              {/* Image Navigation */}
              {productImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : productImages.length - 1)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(selectedImage < productImages.length - 1 ? selectedImage + 1 : 0)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-accent' : 'border-border hover:border-accent/50'
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
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                  {product.brand}
                </span>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded capitalize">
                  {product.category}
                </span>
                <span className="text-sm bg-destructive text-destructive-foreground px-2 py-1 rounded font-medium flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  Flash Deal
                </span>
              </div>

              <h1 className="text-2xl font-bold text-foreground mb-3">{product.name}</h1>

              {/* Flash Deal Timer */}
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-destructive" />
                  <span className="text-sm font-medium text-destructive">Flash Deal Ends In:</span>
                </div>
                <div className="text-2xl font-bold text-destructive">
                  {formattedTime}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${
                        star <= Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
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
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
                <span className="text-lg text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-medium">
                  Save {formatPrice(product.originalPrice - product.price)}
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                {product.sold} sold • {product.stock} remaining
              </p>

              {/* Progress bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div
                  className="bg-destructive h-2 rounded-full transition-all duration-300"
                  style={{width: `${(product.sold / (product.sold + product.stock)) * 100}%`}}
                />
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                In Stock
              </p>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                        selectedSize === size
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Color</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-2 text-sm border rounded-md transition-colors ${
                        selectedColor === color
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  disabled={quantity >= product.stock}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || product.stock === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {isAddingToCart ? "Adding..." : product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={handleToggleWaitlist}
                  disabled={isAddingToWaitlist}
                >
                  <Heart className={`mr-2 h-4 w-4 ${
                    isInWaitlist(product.id, {
                      size: selectedSize || product.sizes?.[0],
                      color: selectedColor || product.colors?.[0]
                    }) ? 'fill-current' : ''
                  }`} />
                  {isAddingToWaitlist
                    ? "Updating..."
                    : isInWaitlist(product.id, {
                        size: selectedSize || product.sizes?.[0],
                        color: selectedColor || product.colors?.[0]
                      })
                      ? "Remove from Wishlist"
                      : "Add to Wishlist"
                  }
                </Button>
              </div>

              {/* Cart/Waitlist Status */}
              {product.stock > 0 && isInCart(product.id, { size: selectedSize, color: selectedColor }) && (
                <p className="text-sm text-green-600 text-center">
                  ✓ This item is already in your cart
                </p>
              )}

              {isInWaitlist(product.id, {
                size: selectedSize || product.sizes?.[0],
                color: selectedColor || product.colors?.[0]
              }) && (
                <p className="text-sm text-blue-600 text-center">
                  ♡ This item is in your wishlist
                </p>
              )}
            </div>

            {/* Back to Flash Deals */}
            <div className="pt-4 border-t border-border">
              <Link
                to="/flash-deals"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Flash Deals
              </Link>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 space-y-6">
          <div className="border-b border-border">
            <div className="flex gap-8">
              {(['description', 'specifications', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 px-1 border-b-2 transition-colors capitalize ${
                    activeTab === tab
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-[200px]">
            {activeTab === 'description' && (
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-border">
                    <span className="font-medium text-foreground">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-foreground">{product.rating}</div>
                  <div>
                    <div className="flex items-center mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-muted-foreground'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{product.reviews} reviews</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">{review.user}</span>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FlashDealsProductDetail;
