import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Shield, Truck } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-black/20" />
        <img 
          src={heroImage}
          alt="Premium Products" 
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 mb-6">
              <Star className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Premium Collection 2024</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Discover
              <span className="text-yellow-400"> Premium </span>
              Quality Products
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-200 mb-8 max-w-2xl">
              Experience luxury and innovation with our carefully curated collection of premium products. 
              Each item is selected for its exceptional quality and design.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/shop">
                <Button variant="hero" size="xl" className="group">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl animate-slide-up">
          <div className="flex items-center gap-3 text-white/90">
            <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="font-medium">Quality Guarantee</p>
              <p className="text-sm text-white/70">Premium products only</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-white/90">
            <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="font-medium">Free Shipping</p>
              <p className="text-sm text-white/70">On orders over $99</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-white/90">
            <div className="w-10 h-10 bg-yellow-400/20 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <p className="font-medium">5-Star Reviews</p>
              <p className="text-sm text-white/70">Trusted by thousands</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
    </section>
  );
};