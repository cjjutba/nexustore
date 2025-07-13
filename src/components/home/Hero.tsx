import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Truck, Clock, Zap, Award, Gift } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-muted/30 py-3 mobile-xs:py-4 mobile-l:py-6 sm:py-8 tablet:py-12 lg:py-12">
      <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mobile-l:gap-4 sm:gap-5 tablet:gap-6 lg:gap-8">
          {/* Main Hero Banner - 8/12 width */}
          <div className="lg:col-span-8 relative overflow-hidden rounded-lg mobile-l:rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-foreground shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Geometric shapes with subtle animation */}
              <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-16 sm:h-16 border-2 border-primary-foreground/20 rounded-lg rotate-12 hover:rotate-45 transition-transform duration-700"></div>
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
            <div className="relative z-10 h-full flex flex-col justify-center p-3 mobile-xs:p-4 mobile-l:p-5 sm:p-6 tablet:p-8 lg:p-12 min-h-[220px] mobile-xs:min-h-[240px] mobile-l:min-h-[260px] sm:min-h-[300px] tablet:min-h-[350px] lg:min-h-[420px]">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-1.5 mobile-l:gap-2 sm:gap-2 tablet:gap-2 bg-primary-foreground/95 backdrop-blur-sm px-2.5 py-1 mobile-l:px-3 mobile-l:py-1.5 sm:px-4 sm:py-2 tablet:px-4 tablet:py-2 rounded-full w-fit mb-3 mobile-l:mb-4 sm:mb-5 tablet:mb-6 lg:mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-1.5 h-1.5 mobile-l:w-1.5 mobile-l:h-1.5 sm:w-2 sm:h-2 tablet:w-2 tablet:h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-primary font-semibold text-xs mobile-l:text-xs sm:text-sm tablet:text-sm tracking-wider">PREMIUM DEALS</span>
              </div>

              {/* Main Content */}
              <div className="mb-4 mobile-l:mb-6 sm:mb-7 tablet:mb-8 lg:mb-10">
                <h1 className="text-xl mobile-l:text-2xl sm:text-3xl tablet:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-2 mobile-l:mb-3 sm:mb-4 tablet:mb-5 lg:mb-6 leading-tight tracking-tight">
                  Discover
                  <span className="block text-primary-foreground/95 mt-1 mobile-l:mt-1 sm:mt-2 tablet:mt-2">Premium Quality</span>
                </h1>
                <p className="text-primary-foreground/85 text-sm mobile-l:text-base sm:text-lg tablet:text-xl lg:text-lg xl:text-xl max-w-lg leading-relaxed font-medium">
                  Experience the finest selection of products with unmatched quality and exceptional value.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col mobile-l:flex-row gap-2 mobile-l:gap-3 sm:gap-4 tablet:gap-4 lg:gap-5">
                <Link to="/shop" className="flex-1 mobile-l:flex-1 sm:flex-none">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary-foreground text-primary hover:bg-primary-foreground/95 font-bold px-4 mobile-l:px-4 sm:px-6 tablet:px-6 lg:px-10 py-2.5 mobile-l:py-2.5 sm:py-3.5 tablet:py-4 lg:py-4 rounded-lg mobile-l:rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 transform text-sm mobile-l:text-sm sm:text-base tablet:text-base min-h-[44px]"
                  >
                    Shop Now
                    <ArrowRight className="w-4 h-4 mobile-l:w-4 mobile-l:h-4 sm:w-5 sm:h-5 tablet:w-5 tablet:h-5 ml-1.5 mobile-l:ml-2 sm:ml-3 tablet:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link to="/categories" className="flex-1 mobile-l:flex-1 sm:flex-none">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-4 mobile-l:px-4 sm:px-6 tablet:px-6 lg:px-10 py-2.5 mobile-l:py-2.5 sm:py-3.5 tablet:py-4 lg:py-4 rounded-lg mobile-l:rounded-lg sm:rounded-xl backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform text-sm mobile-l:text-sm sm:text-base tablet:text-base min-h-[44px]"
                  >
                    Browse Categories
                  </Button>
                </Link>
              </div>
            </div>

            {/* Trust Indicators - Top Right */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 bg-white/95 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-gray-900">4.9</span>
                </div>
                <div className="text-xs text-gray-600 font-medium">
                  50K+ Reviews
                </div>
              </div>
            </div>
          </div>

          {/* Side Promotional Cards - 4/12 width */}
          <div className="lg:col-span-4 flex flex-col mobile-l:flex-row sm:flex-row lg:flex-col gap-2 mobile-xs:gap-3 mobile-l:gap-4 sm:gap-5 tablet:gap-6">
            {/* Premium Membership Card */}
            <div className="flex-1 bg-gradient-to-br from-muted to-muted/60 rounded-lg mobile-l:rounded-xl sm:rounded-2xl p-2.5 mobile-xs:p-3 mobile-l:p-4 sm:p-5 tablet:p-6 lg:p-7 relative overflow-hidden border border-border/30 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[110px] mobile-xs:min-h-[120px] mobile-l:min-h-[140px] sm:min-h-[150px] tablet:min-h-[160px] lg:min-h-[190px] group">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 mobile-l:gap-2 sm:gap-2 tablet:gap-2 bg-primary/15 text-primary px-2.5 mobile-l:px-3 sm:px-3.5 tablet:px-4 py-1 mobile-l:py-1.5 sm:py-1.5 tablet:py-2 rounded-full text-xs font-bold mb-2 mobile-l:mb-3 sm:mb-3.5 tablet:mb-4 shadow-sm">
                  <Award className="w-3 h-3 mobile-l:w-3 mobile-l:h-3 sm:w-3.5 sm:h-3.5 tablet:w-4 tablet:h-4" />
                  PREMIUM
                </div>
                <h3 className="text-base mobile-l:text-lg sm:text-xl tablet:text-xl font-bold text-foreground mb-1.5 mobile-l:mb-2 sm:mb-2.5 tablet:mb-3 group-hover:text-primary transition-colors duration-300">
                  Free Shipping
                </h3>
                <p className="text-xs mobile-l:text-xs sm:text-sm tablet:text-sm text-muted-foreground mb-2.5 mobile-l:mb-3 sm:mb-4 tablet:mb-4 leading-relaxed">
                  On orders over ₱1,500
                </p>
                <Link to="/membership">
                  <Button size="sm" variant="outline" className="text-xs sm:text-sm tablet:text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-h-[32px] sm:min-h-[36px] tablet:min-h-[38px]">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-primary/8 rounded-full group-hover:bg-primary/12 transition-colors duration-300"></div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-10 h-10 sm:w-16 sm:h-16 bg-primary/8 rounded-full group-hover:bg-primary/12 transition-colors duration-300"></div>
            </div>

            {/* Special Offer Card */}
            <div className="flex-1 bg-gradient-to-br from-primary/15 to-primary/8 rounded-lg mobile-l:rounded-xl sm:rounded-2xl p-3 mobile-l:p-4 sm:p-5 tablet:p-6 lg:p-7 relative overflow-hidden border border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[120px] mobile-l:min-h-[140px] sm:min-h-[150px] tablet:min-h-[160px] lg:min-h-[190px] group">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 mobile-l:gap-2 sm:gap-2 tablet:gap-2 bg-primary text-primary-foreground px-2.5 mobile-l:px-3 sm:px-3.5 tablet:px-4 py-1 mobile-l:py-1.5 sm:py-1.5 tablet:py-2 rounded-full text-xs font-bold mb-2 mobile-l:mb-3 sm:mb-3.5 tablet:mb-4 shadow-md animate-pulse">
                  <Zap className="w-3 h-3 mobile-l:w-3 mobile-l:h-3 sm:w-3.5 sm:h-3.5 tablet:w-4 tablet:h-4" />
                  LIMITED TIME
                </div>
                <h3 className="text-base mobile-l:text-lg sm:text-xl tablet:text-xl font-bold text-foreground mb-1.5 mobile-l:mb-2 sm:mb-2.5 tablet:mb-3 group-hover:text-primary transition-colors duration-300">
                  Up to 70% Off
                </h3>
                <p className="text-xs mobile-l:text-xs sm:text-sm tablet:text-sm text-muted-foreground mb-2.5 mobile-l:mb-3 sm:mb-4 tablet:mb-4 leading-relaxed">
                  Summer Sale Collection
                </p>
                <Link to="/sale">
                  <Button size="sm" className="text-xs sm:text-sm tablet:text-sm font-semibold hover:scale-105 transform transition-all duration-300 shadow-md min-h-[32px] sm:min-h-[36px] tablet:min-h-[38px]">
                    Shop Sale
                  </Button>
                </Link>
              </div>
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-12 h-12 sm:w-18 sm:h-18 bg-primary/15 rounded-full group-hover:bg-primary/20 transition-colors duration-300"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 bg-primary/15 rounded-full group-hover:bg-primary/20 transition-colors duration-300"></div>
            </div>
          </div>
        </div>

        {/* Premium Service Features */}
        <div className="mt-12 mobile-l:mt-16 sm:mt-18 tablet:mt-20 lg:mt-20">
          <div className="text-center mb-8 mobile-l:mb-12 sm:mb-14 tablet:mb-16">
            <h2 className="text-xl mobile-l:text-2xl sm:text-3xl tablet:text-4xl lg:text-4xl font-bold text-foreground mb-3 mobile-l:mb-4 sm:mb-5 tablet:mb-6 tracking-tight">
              Why Choose NexuStore?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm mobile-l:text-base sm:text-lg tablet:text-xl leading-relaxed">
              Experience premium shopping with our comprehensive range of services designed for your convenience.
            </p>
          </div>

          <div className="grid grid-cols-2 tablet:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mobile-l:gap-4 sm:gap-5 tablet:gap-6 lg:gap-8">
            <div className="minimalist-card minimalist-hover rounded-lg mobile-l:rounded-xl sm:rounded-xl p-3 mobile-l:p-4 sm:p-5 tablet:p-6 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-10 h-10 mobile-l:w-12 mobile-l:h-12 sm:w-14 sm:h-14 tablet:w-16 tablet:h-16 bg-primary/10 rounded-lg mobile-l:rounded-xl sm:rounded-xl flex items-center justify-center mx-auto mb-3 mobile-l:mb-4 sm:mb-4 tablet:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Shield className="w-5 h-5 mobile-l:w-6 mobile-l:h-6 sm:w-7 sm:h-7 tablet:w-8 tablet:h-8 text-primary" />
              </div>
              <h3 className="text-sm mobile-l:text-base sm:text-base tablet:text-lg font-bold text-foreground mb-1 mobile-l:mb-2 sm:mb-2 tablet:mb-3 group-hover:text-primary transition-colors duration-300">Secure Shopping</h3>
              <p className="text-xs mobile-l:text-sm sm:text-sm tablet:text-base text-muted-foreground leading-relaxed">
                100% secure transactions
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-lg mobile-l:rounded-xl sm:rounded-xl p-3 mobile-l:p-4 sm:p-5 tablet:p-6 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-10 h-10 mobile-l:w-12 mobile-l:h-12 sm:w-14 sm:h-14 tablet:w-16 tablet:h-16 bg-primary/10 rounded-lg mobile-l:rounded-xl sm:rounded-xl flex items-center justify-center mx-auto mb-3 mobile-l:mb-4 sm:mb-4 tablet:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Truck className="w-5 h-5 mobile-l:w-6 mobile-l:h-6 sm:w-7 sm:h-7 tablet:w-8 tablet:h-8 text-primary" />
              </div>
              <h3 className="text-sm mobile-l:text-base sm:text-base tablet:text-lg font-bold text-foreground mb-1 mobile-l:mb-2 sm:mb-2 tablet:mb-3 group-hover:text-primary transition-colors duration-300">Fast Delivery</h3>
              <p className="text-xs mobile-l:text-sm sm:text-sm tablet:text-base text-muted-foreground leading-relaxed">
                Free shipping nationwide
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-lg mobile-l:rounded-xl sm:rounded-xl p-3 mobile-l:p-4 sm:p-5 tablet:p-6 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-10 h-10 mobile-l:w-12 mobile-l:h-12 sm:w-14 sm:h-14 tablet:w-16 tablet:h-16 bg-primary/10 rounded-lg mobile-l:rounded-xl sm:rounded-xl flex items-center justify-center mx-auto mb-3 mobile-l:mb-4 sm:mb-4 tablet:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Star className="w-5 h-5 mobile-l:w-6 mobile-l:h-6 sm:w-7 sm:h-7 tablet:w-8 tablet:h-8 text-primary" />
              </div>
              <h3 className="text-sm mobile-l:text-base sm:text-base tablet:text-lg font-bold text-foreground mb-1 mobile-l:mb-2 sm:mb-2 tablet:mb-3 group-hover:text-primary transition-colors duration-300">Premium Quality</h3>
              <p className="text-xs mobile-l:text-sm sm:text-sm tablet:text-base text-muted-foreground leading-relaxed">
                Curated products only
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-lg mobile-l:rounded-xl sm:rounded-xl p-3 mobile-l:p-4 sm:p-5 tablet:p-6 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-10 h-10 mobile-l:w-12 mobile-l:h-12 sm:w-14 sm:h-14 tablet:w-16 tablet:h-16 bg-primary/10 rounded-lg mobile-l:rounded-xl sm:rounded-xl flex items-center justify-center mx-auto mb-3 mobile-l:mb-4 sm:mb-4 tablet:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Clock className="w-5 h-5 mobile-l:w-6 mobile-l:h-6 sm:w-7 sm:h-7 tablet:w-8 tablet:h-8 text-primary" />
              </div>
              <h3 className="text-sm mobile-l:text-base sm:text-base tablet:text-lg font-bold text-foreground mb-1 mobile-l:mb-2 sm:mb-2 tablet:mb-3 group-hover:text-primary transition-colors duration-300">24/7 Support</h3>
              <p className="text-xs mobile-l:text-sm sm:text-sm tablet:text-base text-muted-foreground leading-relaxed">
                Always here to help
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-lg mobile-l:rounded-xl sm:rounded-xl p-3 mobile-l:p-4 sm:p-5 tablet:p-6 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-10 h-10 mobile-l:w-12 mobile-l:h-12 sm:w-14 sm:h-14 tablet:w-16 tablet:h-16 bg-primary/10 rounded-lg mobile-l:rounded-xl sm:rounded-xl flex items-center justify-center mx-auto mb-3 mobile-l:mb-4 sm:mb-4 tablet:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Award className="w-5 h-5 mobile-l:w-6 mobile-l:h-6 sm:w-7 sm:h-7 tablet:w-8 tablet:h-8 text-primary" />
              </div>
              <h3 className="text-sm mobile-l:text-base sm:text-base tablet:text-lg font-bold text-foreground mb-1 mobile-l:mb-2 sm:mb-2 tablet:mb-3 group-hover:text-primary transition-colors duration-300">Best Prices</h3>
              <p className="text-xs mobile-l:text-sm sm:text-sm tablet:text-base text-muted-foreground leading-relaxed">
                Guaranteed lowest prices
              </p>
            </div>

            <div className="minimalist-card minimalist-hover rounded-lg mobile-l:rounded-xl sm:rounded-xl p-3 mobile-l:p-4 sm:p-5 tablet:p-6 text-center group hover:scale-105 transform transition-all duration-300">
              <div className="w-10 h-10 mobile-l:w-12 mobile-l:h-12 sm:w-14 sm:h-14 tablet:w-16 tablet:h-16 bg-primary/10 rounded-lg mobile-l:rounded-xl sm:rounded-xl flex items-center justify-center mx-auto mb-3 mobile-l:mb-4 sm:mb-4 tablet:mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <Gift className="w-5 h-5 mobile-l:w-6 mobile-l:h-6 sm:w-7 sm:h-7 tablet:w-8 tablet:h-8 text-primary" />
              </div>
              <h3 className="text-sm mobile-l:text-base sm:text-base tablet:text-lg font-bold text-foreground mb-1 mobile-l:mb-2 sm:mb-2 tablet:mb-3 group-hover:text-primary transition-colors duration-300">Rewards</h3>
              <p className="text-xs mobile-l:text-sm sm:text-sm tablet:text-base text-muted-foreground leading-relaxed">
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