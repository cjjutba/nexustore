import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Truck, Clock, Zap, Award, Gift } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-muted/30 py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Hero Banner - 8/12 width */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-foreground shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Geometric shapes with subtle animation */}
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary-foreground/20 rounded-lg rotate-12 hover:rotate-45 transition-transform duration-700"></div>
              <div className="absolute top-16 left-20 w-8 h-8 border-2 border-primary-foreground/20 rounded-lg rotate-45 hover:rotate-90 transition-transform duration-700 delay-100"></div>
              <div className="absolute bottom-12 left-12 w-12 h-12 border-2 border-primary-foreground/20 rounded-lg -rotate-12 hover:rotate-12 transition-transform duration-700 delay-200"></div>

              {/* Subtle dots pattern with enhanced opacity */}
              <div className="absolute top-1/4 right-1/4 opacity-15">
                <div className="grid grid-cols-6 gap-3">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-primary-foreground rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                  ))}
                </div>
              </div>

              {/* Enhanced gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/40 to-primary/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12 min-h-[420px]">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-foreground/95 backdrop-blur-sm px-5 py-2.5 rounded-full w-fit mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold text-sm tracking-wider">PREMIUM DEALS</span>
              </div>

              {/* Main Content */}
              <div className="mb-10">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight tracking-tight">
                  Discover
                  <span className="block text-primary-foreground/95 mt-2">Premium Quality</span>
                </h1>
                <p className="text-primary-foreground/85 text-lg lg:text-xl max-w-lg leading-relaxed font-medium">
                  Experience the finest selection of products with unmatched quality and exceptional value.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/shop">
                  <Button
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/95 font-bold px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 transform"
                  >
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    Browse Categories
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Indicators - Top Right */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-900">4.9</span>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  50K+ Reviews
                </div>
              </div>
            </div>
          </div>

          {/* Side Promotional Cards - 4/12 width */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Premium Membership Card */}
            <div className="flex-1 bg-gradient-to-br from-muted to-muted/60 rounded-2xl p-7 relative overflow-hidden border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[190px] group">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-sm">
                  <Award className="w-3.5 h-3.5" />
                  PREMIUM
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  Free Shipping
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  On orders over ₱1,500
                </p>
                <Link to="/membership">
                  <Button size="sm" variant="outline" className="text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/8 rounded-full group-hover:bg-primary/12 transition-colors duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/8 rounded-full group-hover:bg-primary/12 transition-colors duration-300"></div>
            </div>

            {/* Special Offer Card */}
            <div className="flex-1 bg-gradient-to-br from-primary/15 to-primary/8 rounded-2xl p-7 relative overflow-hidden border border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[190px] group">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-md animate-pulse">
                  <Zap className="w-3.5 h-3.5" />
                  LIMITED TIME
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  Up to 70% Off
                </h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Summer Sale Collection
                </p>
                <Link to="/sale">
                  <Button size="sm" className="text-xs font-semibold hover:scale-105 transform transition-all duration-300 shadow-md">
                    Shop Sale
                  </Button>
                </Link>
              </div>
              <div className="absolute -top-2 -right-2 w-18 h-18 bg-primary/15 rounded-full group-hover:bg-primary/20 transition-colors duration-300"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/15 rounded-full group-hover:bg-primary/20 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        {/* Premium Service Features */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Why Choose NexuStore?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Experience premium shopping with our comprehensive range of services designed for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 lg:gap-8">
            <div className="minimalist-card minimalist-hover rounded-xl p-7 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Secure Shopping</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                100% secure transactions
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-7 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Free shipping nationwide
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-7 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Premium Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Curated products only
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-7 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">24/7 Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Always here to help
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-7 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Best Prices</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Guaranteed lowest prices
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-7 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Gift className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">Rewards</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Earn points on every purchase
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;