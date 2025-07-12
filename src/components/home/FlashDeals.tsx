import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart } from "lucide-react";

const FlashDeals = () => {
  // Timer state - set to end in 24 hours from now
  const [timeLeft, setTimeLeft] = useState(() => {
    const endTime = new Date();
    endTime.setHours(endTime.getHours() + 24);
    return Math.floor((endTime.getTime() - new Date().getTime()) / 1000);
  });

  // Update timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          // Reset timer to 24 hours when it reaches 0
          const endTime = new Date();
          endTime.setHours(endTime.getHours() + 24);
          return Math.floor((endTime.getTime() - new Date().getTime()) / 1000);
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time display
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const flashDeals = [
    {
      id: 1001, // Using unique IDs for flash deals
      name: "Flash Deal - Wireless Earbuds Pro",
      price: 1499.99,
      originalPrice: 3999.99,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
      sold: 189,
      stock: 50,
      discount: 63,
      category: "Electronics",
      brand: "Apple",
      isFlashDeal: true
    },
    {
      id: 1002,
      name: "Flash Deal - Gaming Mouse RGB",
      price: 999.99,
      originalPrice: 2499.99,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400",
      sold: 267,
      stock: 33,
      discount: 60,
      category: "Electronics",
      brand: "Logitech",
      isFlashDeal: true
    },
    {
      id: 1003,
      name: "Flash Deal - Bluetooth Speaker",
      price: 1249.99,
      originalPrice: 4999.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      sold: 423,
      stock: 77,
      discount: 75,
      category: "Audio",
      brand: "JBL",
      isFlashDeal: true
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-bold text-charcoal">FLASH SALE</h2>
            <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
              Ends in {formatTime(timeLeft)}
            </div>
          </div>
          <Link to="/flash-deals">
            <Button variant="outline" className="group border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
              See All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flashDeals.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 transform">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-lg text-sm font-bold shadow-lg">
                    -{product.discount}%
                  </div>
                  <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg">
                    <Heart className="h-4 w-4 text-charcoal" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-charcoal group-hover:text-primary transition-colors mb-3 text-lg line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary">₱{product.price}</span>
                    <span className="text-base text-medium-gray line-through">₱{product.originalPrice}</span>
                  </div>
                  <div className="text-sm text-dark-gray mb-4">
                    {product.sold} sold • {formatTime(timeLeft)} left
                  </div>
                  <div className="w-full bg-medium-gray/30 rounded-full h-3">
                    <div 
                      className="bg-primary h-3 rounded-full transition-all duration-300" 
                      style={{width: `${(product.sold / (product.sold + product.stock)) * 100}%`}}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
