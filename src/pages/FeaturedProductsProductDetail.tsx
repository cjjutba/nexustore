import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { formatPrice, getFeaturedProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import {
  Heart,
  Star,
  Minus,
  Plus,
  ShoppingCart,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Award,
  Clock
} from "lucide-react";

const FeaturedProductsProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddingToWaitlist, setIsAddingToWaitlist] = useState(false);

  const { addToCart, toggleWaitlist, isInWaitlist } = useCart();
  const { toast } = useToast();

  // Scroll to top when component mounts or when product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Get featured products from centralized data
  const featuredProducts = getFeaturedProducts();

  // Get product data
  const product = featuredProducts.find(p => p.id === Number(id));

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
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The featured product you're looking for doesn't exist.</p>
          <Link to="/featured-products">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Featured Products
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = async () => {
    if (!product.inStock) {
      toast({
        title: "Out of Stock",
        description: "This product is currently out of stock.",
        variant: "destructive",
      });
      return;
    }

    // Validate required selections
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Size Required",
        description: "Please select a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    if (product.colors && product.colors.length > 0 && !selectedColor) {
      toast({
        title: "Color Required",
        description: "Please select a color before adding to cart.",
        variant: "destructive",
      });
      return;
    }

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
        variant: "default",
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

  const handleToggleWaitlist = async () => {
    // Validate required selections
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      toast({
        title: "Size Required",
        description: "Please select a size before adding to wishlist.",
        variant: "destructive",
      });
      return;
    }

    if (product.colors && product.colors.length > 0 && !selectedColor) {
      toast({
        title: "Color Required",
        description: "Please select a color before adding to wishlist.",
        variant: "destructive",
      });
      return;
    }

    setIsAddingToWaitlist(true);

    try {
      const selectedOptions = {
        size: selectedSize || undefined,
        color: selectedColor || undefined,
      };

      const wasAdded = toggleWaitlist(product, selectedOptions);

      if (wasAdded) {
        toast({
          title: "Added to Wishlist!",
          description: `${product.name} has been added to your wishlist.`,
          variant: "default",
        });
      } else {
        toast({
          title: "Removed from Wishlist",
          description: `${product.name} has been removed from your wishlist.`,
          variant: "default",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update wishlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAddingToWaitlist(false);
    }
  };



  const currentImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/featured-products" className="hover:text-foreground">Featured Products</Link>
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
                src={currentImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
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
              {currentImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : currentImages.length - 1)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                    onClick={() => setSelectedImage(selectedImage < currentImages.length - 1 ? selectedImage + 1 : 0)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto">
              {currentImages.map((image, index) => (
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
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                  {product.brand}
                </span>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="text-sm bg-accent text-accent-foreground px-2 py-1 rounded font-medium">
                    New
                  </span>
                )}
              </div>

              <h1 className="text-2xl font-bold text-foreground mb-3">{product.name}</h1>

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
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-medium">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-4">
                <span className={product.inStock ? 'text-success' : 'text-destructive'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <p className="text-muted-foreground mb-4">{product.description}</p>
            </div>

            {/* Options */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md transition-colors ${
                        selectedSize === size
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md transition-colors ${
                        selectedColor === color
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {product.inStock ? (
                  <Button
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {isAddingToCart ? "Adding..." : "Add to Cart"}
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleToggleWaitlist}
                    disabled={isAddingToWaitlist}
                  >
                    <Clock className="mr-2 h-4 w-4" />
                    {isAddingToWaitlist
                      ? "Updating..."
                      : isInWaitlist(product.id, {
                          size: selectedSize || product.sizes?.[0],
                          color: selectedColor || product.colors?.[0]
                        })
                        ? "Remove from Waitlist"
                        : "Add to Waitlist"
                    }
                  </Button>
                )}

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
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b border-border">
            <nav className="flex space-x-8">
              {(['description', 'specifications', 'reviews'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>
                {product.features && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-foreground">{product.rating}</span>
                    <div>
                      <div className="flex items-center">
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
                      </div>
                      <p className="text-sm text-muted-foreground">{product.reviews} reviews</p>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Customer reviews are not available in this demo. In a real application,
                  this section would display customer feedback and ratings.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Other Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/featured-products/${relatedProduct.id}`} className="group">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border hover:border-accent/50">
                    <div className="relative">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                        <Award className="h-3 w-3" />
                        Featured
                      </div>

                      {relatedProduct.isNew && (
                        <div className="absolute top-3 left-20 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-bold">
                          New
                        </div>
                      )}

                      {relatedProduct.originalPrice && (
                        <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-md text-sm font-bold">
                          -{Math.round(((relatedProduct.originalPrice - relatedProduct.price) / relatedProduct.originalPrice) * 100)}%
                        </div>
                      )}
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>

                      <div className="flex items-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= Math.floor(relatedProduct.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-1">
                          ({relatedProduct.reviews})
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-foreground">
                          {formatPrice(relatedProduct.price)}
                        </span>
                        {relatedProduct.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(relatedProduct.originalPrice)}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FeaturedProductsProductDetail;
