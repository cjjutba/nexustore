import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Truck, Clock, Zap, Award, Gift } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-muted/30 py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Hero Banner - 8/12 width */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-foreground shadow-xl">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Geometric shapes */}
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-primary-foreground/20 rounded-lg rotate-12"></div>
              <div className="absolute top-16 left-20 w-8 h-8 border-2 border-primary-foreground/20 rounded-lg rotate-45"></div>
              <div className="absolute bottom-12 left-12 w-12 h-12 border-2 border-primary-foreground/20 rounded-lg -rotate-12"></div>

              {/* Subtle dots pattern */}
              <div className="absolute top-1/4 right-1/4 opacity-10">
                <div className="grid grid-cols-6 gap-3">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-primary-foreground rounded-full"></div>
                  ))}
                </div>
              </div>

              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-transparent to-primary/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-8 lg:p-12 min-h-[400px]">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-foreground/95 backdrop-blur-sm px-4 py-2 rounded-full w-fit mb-6 shadow-lg">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold text-sm tracking-wide">PREMIUM DEALS</span>
              </div>

              {/* Main Content */}
              <div className="mb-8">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
                  Discover
                  <span className="block text-primary-foreground/90">Premium Quality</span>
                </h1>
                <p className="text-primary-foreground/80 text-lg lg:text-xl max-w-md leading-relaxed">
                  Experience the finest selection of products with unmatched quality and exceptional value.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button
                    size="lg"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Shop Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300"
                  >
                    Browse Categories
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Indicators - Top Right */}
            <div className="absolute top-6 right-6 bg-primary-foreground/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-primary fill-current" />
                  <span className="text-sm font-semibold text-primary">4.9</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  50K+ Reviews
                </div>
              </div>
            </div>
          </div>

          {/* Side Promotional Cards - 4/12 width */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Premium Membership Card */}
            <div className="flex-1 bg-gradient-to-br from-muted to-muted/50 rounded-2xl p-6 relative overflow-hidden border border-border/20 shadow-lg min-h-[180px]">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  <Award className="w-3 h-3" />
                  PREMIUM
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Free Shipping
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  On orders over ₱1,500
                </p>
                <Link to="/membership">
                  <Button size="sm" variant="outline" className="text-xs">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/5 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-primary/5 rounded-full"></div>
            </div>

            {/* Special Offer Card */}
            <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 relative overflow-hidden border border-primary/20 shadow-lg min-h-[180px]">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  <Zap className="w-3 h-3" />
                  LIMITED TIME
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Up to 70% Off
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Summer Sale Collection
                </p>
                <Link to="/sale">
                  <Button size="sm" className="text-xs">
                    Shop Sale
                  </Button>
                </Link>
              </div>
              <div className="absolute -top-2 -right-2 w-18 h-18 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Premium Service Features */}
        <div className="mt-12 lg:mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Why Choose NexuStore?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience premium shopping with our comprehensive range of services designed for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
            <div className="minimalist-card minimalist-hover rounded-xl p-6 text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Secure Shopping</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                100% secure transactions
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-6 text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Truck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Free shipping nationwide
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-6 text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Premium Quality</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Curated products only
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-6 text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">24/7 Support</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Always here to help
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-6 text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Best Prices</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Guaranteed lowest prices
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-xl p-6 text-center group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Gift className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Rewards</h3>
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