import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, ArrowRight, Star, Shield, Truck, Clock } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gray-light py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[300px]">
          {/* Main Banner - 70% width */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-lg hero-gradient">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-4 left-4 w-8 h-8 border-4 border-accent-yellow rotate-45"></div>
              <div className="absolute top-12 left-12 w-6 h-6 border-4 border-accent-yellow rotate-45"></div>
              <div className="absolute bottom-8 left-8 w-10 h-10 border-4 border-accent-yellow rotate-45"></div>
              
              {/* Dots pattern */}
              <div className="absolute top-1/3 right-1/4 opacity-30">
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-8">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-md w-fit mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-brand font-semibold text-sm">LIVE</span>
              </div>

              {/* Main Content */}
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-2 drop-shadow-lg">
                  TINTS AS LOW
                </h1>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white drop-shadow-lg">
                  AS ₱299
                </h2>
                <p className="text-white/90 text-lg mt-2">
                  Premium quality products at unbeatable prices
                </p>
              </div>

              {/* CTA Button */}
              <Link to="/shop">
                <Button className="cta-gradient text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all">
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  WATCH NOW
                </Button>
              </Link>
            </div>

            {/* Brand Logos - Top Right */}
            <div className="absolute top-4 right-4 bg-white rounded-xl p-3 shadow-lg">
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-gray-dark">
                <div className="text-center">POND'S</div>
                <div className="text-center">axecure</div>
                <div className="text-center">Dove</div>
                <div className="text-center">ViCE</div>
              </div>
            </div>
          </div>

          {/* Side Banners - 30% width */}
          <div className="flex flex-col gap-4">
            {/* Medical Banner */}
            <div className="flex-1 bg-accent-yellow rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-dark mb-1">
                  UP TO ₱2M FOR
                </h3>
                <h4 className="text-lg font-bold text-gray-dark mb-1">
                  SERIOUS ILLNESS
                </h4>
                <p className="text-sm font-semibold text-gray-dark">
                  0% INTEREST
                </p>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/20 rounded-full"></div>
            </div>

            {/* Bank Promo Banner */}
            <div className="flex-1 bg-accent-green rounded-lg p-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="text-xs font-medium text-white/80 mb-1">SECURITY BANK</div>
                <h3 className="text-xl font-bold text-white mb-1">
                  GET ₱300 OFF
                </h3>
                <p className="text-xs text-white/90">
                  JUL 10 - SEP 25 | EVERY THURSDAY
                </p>
              </div>
              <div className="absolute -top-2 -right-2 w-14 h-14 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Service Features Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="w-6 h-6 text-brand" />
            </div>
            <p className="text-xs font-medium text-gray-dark leading-tight">
              Sigurado sa Shopee Mall
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-brand" />
            </div>
            <p className="text-xs font-medium text-gray-dark leading-tight">
              Millions of Fashion Deals
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Clock className="w-6 h-6 text-brand" />
            </div>
            <p className="text-xs font-medium text-gray-dark leading-tight">
              Flash Deals
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-brand" />
            </div>
            <p className="text-xs font-medium text-gray-dark leading-tight">
              Shopee Beauty
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="w-6 h-6 text-brand" />
            </div>
            <p className="text-xs font-medium text-gray-dark leading-tight">
              Shopee Choice Daily ₱49
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Truck className="w-6 h-6 text-brand" />
            </div>
            <p className="text-xs font-medium text-gray-dark leading-tight">
              Free Shipping & Vouchers
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-brand" />
            </div>
            <p className="text-xs font-medium text-gray-dark leading-tight">
              Coins Rewards
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Shield className="w-6 h-6 text-brand" />
            </div>
            <p className="text-xs font-medium text-gray-dark leading-tight">
              Shopee Supermarket
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};