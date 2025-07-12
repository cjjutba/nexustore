import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getProductById, formatPrice, products, type Product } from "@/data/products";
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
  Share2,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Clock
} from "lucide-react";

const CategoryProductDetail = () => {
  const { category, id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isAddingToWaitlist, setIsAddingToWaitlist] = useState(false);

  const { addToCart, addToWaitlist, isInCart, isInWaitlist } = useCart();
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get product data from centralized data
  const product = getProductById(Number(id));

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

  // Add to waitlist handler
  const handleAddToWaitlist = async () => {
    if (!product || !validateOptions()) return;

    setIsAddingToWaitlist(true);

    try {
      const selectedOptions = {
        size: selectedSize || undefined,
        color: selectedColor || undefined,
      };

      addToWaitlist(product, selectedOptions);

      toast({
        title: "Added to Waitlist!",
        description: `${product.name} has been added to your waitlist.`,
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAddingToWaitlist(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to={`/categories/${category}`}>
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {category?.charAt(0).toUpperCase() + category?.slice(1)}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Use product images or fallback to single image
  const productImages = product.images || [product.image];

  // Default specifications if not provided
  const defaultSpecs = {
    "Brand": product.brand,
    "Category": product.category,
    "In Stock": product.inStock ? "Yes" : "No",
    "Rating": `${product.rating}/5 (${product.reviews} reviews)`
  };

  const specifications = product.specs
    ? product.specs.reduce((acc, spec, index) => ({ ...acc, [`Feature ${index + 1}`]: spec }), {})
    : defaultSpecs;

  // Get related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const reviews = [
    {
      id: 1,
      user: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      comment: "Excellent product! Exactly as described and great quality. Highly recommend!"
    },
    {
      id: 2,
      user: "Mike Chen",
      rating: 4,
      date: "2024-01-10",
      comment: "Good value for money. Fast shipping and well packaged."
    },
    {
      id: 3,
      user: "Emma Davis",
      rating: 5,
      date: "2024-01-05",
      comment: "Love this product! Will definitely buy again."
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
          <Link to={`/categories/${category}`} className="hover:text-foreground capitalize">
            {category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[4/3] max-w-md mx-auto overflow-hidden rounded-lg bg-muted">
              <img
                src={productImages[selectedImage]}
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
            <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
              {productImages.map((image, index) => (
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
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                  {product.brand}
                </span>
                <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded capitalize">
                  {category}
                </span>
                {product.isNew && (
                  <span className="text-sm bg-accent text-accent-foreground px-2 py-1 rounded font-medium">
                    New
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              
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
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-destructive text-destructive-foreground px-2 py-1 rounded text-sm font-medium">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                <span className={product.inStock ? 'text-success' : 'text-destructive'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              <p className="text-muted-foreground mb-6">{product.description}</p>
            </div>

            {/* Options */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
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
                  {product.colors.map((color) => (
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
            <div className="space-y-4">
              <div className="flex gap-4">
                {product.inStock ? (
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {isAddingToCart ? "Adding..." : "Add to Cart"}
                  </Button>
                ) : (
                  <Button
                    size="lg"
                    className="flex-1"
                    variant="outline"
                    onClick={handleAddToWaitlist}
                    disabled={isAddingToWaitlist}
                  >
                    <Clock className="mr-2 h-5 w-5" />
                    {isAddingToWaitlist ? "Adding..." : "Add to Waitlist"}
                  </Button>
                )}
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Cart/Waitlist Status */}
              {product.inStock && isInCart(product.id, { size: selectedSize, color: selectedColor }) && (
                <p className="text-sm text-green-600 text-center">
                  ✓ This item is already in your cart
                </p>
              )}

              {!product.inStock && isInWaitlist(product.id, { size: selectedSize, color: selectedColor }) && (
                <p className="text-sm text-blue-600 text-center">
                  ✓ This item is in your waitlist
                </p>
              )}
            </div>

            {/* Back to Category */}
            <div className="pt-4">
              <Link to={`/categories/${category}`}>
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {category?.charAt(0).toUpperCase() + category?.slice(1)}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium transition-colors ${
                  activeTab === 'description'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-4 px-1 border-b-2 font-medium transition-colors ${
                  activeTab === 'specifications'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Specifications
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-accent text-accent'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="max-w-4xl">
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg leading-relaxed mb-6">{product.description}</p>

                  {product.features && product.features.length > 0 && (
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {product.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="max-w-4xl">
                <h3 className="text-xl font-semibold mb-6">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {Object.entries(specifications).slice(0, Math.ceil(Object.entries(specifications).length / 2)).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground font-medium">{key}</span>
                        <span className="font-semibold text-right">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {Object.entries(specifications).slice(Math.ceil(Object.entries(specifications).length / 2)).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-3 border-b border-border">
                        <span className="text-muted-foreground font-medium">{key}</span>
                        <span className="font-semibold text-right">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="max-w-4xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
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
                    </div>
                    <span className="text-lg font-semibold">{product.rating}</span>
                    <span className="text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-semibold text-accent">
                              {review.user.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold">{review.user}</p>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-muted/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Write a Review</h4>
                  <p className="text-sm text-muted-foreground">
                    Share your experience with this product to help other customers make informed decisions.
                  </p>
                  <Button className="mt-4">Write Review</Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/categories/${category}/${relatedProduct.id}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <div className="relative aspect-square overflow-hidden rounded-t-lg">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${
                              star <= Math.floor(relatedProduct.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                        <span className="text-xs text-muted-foreground">({relatedProduct.reviews})</span>
                      </div>
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <span className="text-lg font-bold text-foreground">{formatPrice(relatedProduct.price)}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CategoryProductDetail;
