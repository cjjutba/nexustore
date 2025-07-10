import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Heart } from "lucide-react";

const FlashDeals = () => {
  const flashDeals = [
    {
      id: 1,
      name: "Flash Deal - Wireless Earbuds",
      price: 29.99,
      originalPrice: 79.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      timeLeft: "2h 45m",
      sold: 189,
      stock: 50,
      discount: 63
    },
    {
      id: 2,
      name: "Flash Deal - Smartphone Case",
      price: 9.99,
      originalPrice: 24.99,
      image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400",
      timeLeft: "1h 23m",
      sold: 267,
      stock: 33,
      discount: 60
    },
    {
      id: 3,
      name: "Flash Deal - USB Cable",
      price: 4.99,
      originalPrice: 19.99,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400",
      timeLeft: "4h 12m",
      sold: 423,
      stock: 77,
      discount: 75
    }
  ];

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl font-bold text-charcoal">FLASH SALE</h2>
            <div className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
              Ends in 23:59:42
            </div>
          </div>
          <Link to="/shop">
            <Button variant="outline" className="group border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
              See All
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {flashDeals.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="group">
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
                    {product.sold} sold • {product.timeLeft} left
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
