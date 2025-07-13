import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { formatPrice, getFlashDeals } from "@/data/products";
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

  // Get flash deals from centralized data
  const flashDeals = getFlashDeals();



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
                -{product.flashDealData?.discount || 0}% OFF
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
                {product.flashDealData?.sold || 0} sold • {product.flashDealData?.stock || 0} remaining
              </p>

              {/* Progress bar */}
              <div className="w-full bg-muted rounded-full h-2 mb-4">
                <div
                  className="bg-destructive h-2 rounded-full transition-all duration-300"
                  style={{width: `${((product.flashDealData?.sold || 0) / ((product.flashDealData?.sold || 0) + (product.flashDealData?.stock || 1))) * 100}%`}}
                />
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                In Stock
              </p>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
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
            {product.colors && product.colors.length > 0 && (
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
                  onClick={() => setQuantity(Math.min(product.flashDealData?.stock || 99, quantity + 1))}
                  disabled={quantity >= (product.flashDealData?.stock || 99)}
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
                  disabled={isAddingToCart || !product.inStock || (product.flashDealData?.stock || 0) === 0}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  {isAddingToCart ? "Adding..." : (!product.inStock || (product.flashDealData?.stock || 0) === 0) ? "Out of Stock" : "Add to Cart"}
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
              {product.inStock && (product.flashDealData?.stock || 0) > 0 && isInCart(product.id, { size: selectedSize, color: selectedColor }) && (
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
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Technical Specifications</h3>
                {product.specs && product.specs.length > 0 ? (
                  <div className="space-y-3">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="flex items-center py-2 border-b border-border">
                        <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                        <span className="text-foreground">{spec}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No specifications available for this product.</p>
                )}
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
