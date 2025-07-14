import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Truck, 
  Clock, 
  MapPin, 
  Package, 
  Shield, 
  CreditCard,
  Search,
  CheckCircle,
  AlertCircle,
  Zap,
  Star,
  Calculator,
  Globe,
  Phone,
  Mail,
  Calendar,
  Info
} from "lucide-react";
import { useScrollToTop } from "@/utils/scrollToTop";

const ShippingInfo = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Metro Manila");
  
  // Scroll to top when component mounts
  useScrollToTop();

  const shippingOptions = [
    {
      id: "standard",
      name: "Standard Shipping",
      icon: Truck,
      price: "₱150",
      freeThreshold: "₱1,500",
      delivery: "1-2 days (Metro Manila) | 3-5 days (Provincial)",
      description: "Reliable delivery to your doorstep with tracking included",
      features: ["Package tracking", "SMS notifications", "Secure handling", "Insurance included"],
      color: "bg-blue-500"
    },
    {
      id: "express",
      name: "Express Shipping",
      icon: Zap,
      price: "₱299",
      freeThreshold: "Never",
      delivery: "Next day (Selected areas) | 1-2 days (Others)",
      description: "Priority handling for urgent deliveries",
      features: ["Priority processing", "Real-time tracking", "Guaranteed delivery", "Premium packaging"],
      color: "bg-orange-500"
    },
    {
      id: "premium",
      name: "Premium Member Shipping",
      icon: Star,
      price: "FREE",
      freeThreshold: "Always",
      delivery: "Same as Standard + Priority support",
      description: "Exclusive shipping benefits for Premium members",
      features: ["Always free", "Priority support", "Flexible delivery", "Premium packaging"],
      color: "bg-purple-500"
    }
  ];

  const deliveryAreas = [
    {
      region: "Metro Manila",
      cities: ["Manila", "Quezon City", "Makati", "Taguig", "Pasig", "Mandaluyong", "San Juan", "Marikina", "Pasay", "Parañaque", "Las Piñas", "Muntinlupa", "Caloocan", "Malabon", "Navotas", "Valenzuela"],
      standardDelivery: "1-2 business days",
      expressDelivery: "Next day",
      shippingCost: "₱150",
      coverage: "100%"
    },
    {
      region: "Calabarzon",
      cities: ["Batangas", "Cavite", "Laguna", "Quezon", "Rizal"],
      standardDelivery: "2-3 business days",
      expressDelivery: "1-2 days",
      shippingCost: "₱150",
      coverage: "95%"
    },
    {
      region: "Central Luzon",
      cities: ["Angeles", "San Fernando", "Olongapo", "Cabanatuan", "Tarlac", "Malolos"],
      standardDelivery: "2-4 business days",
      expressDelivery: "1-3 days",
      shippingCost: "₱150",
      coverage: "90%"
    },
    {
      region: "Cebu",
      cities: ["Cebu City", "Lapu-Lapu", "Mandaue", "Talisay", "Toledo"],
      standardDelivery: "3-5 business days",
      expressDelivery: "2-3 days",
      shippingCost: "₱150",
      coverage: "85%"
    },
    {
      region: "Davao",
      cities: ["Davao City", "Tagum", "Panabo", "Samal", "Digos"],
      standardDelivery: "4-6 business days",
      expressDelivery: "2-4 days",
      shippingCost: "₱150",
      coverage: "80%"
    },
    {
      region: "Other Regions",
      cities: ["Iloilo", "Bacolod", "Cagayan de Oro", "General Santos", "Zamboanga", "Baguio", "Legazpi", "Tacloban"],
      standardDelivery: "3-7 business days",
      expressDelivery: "2-5 days",
      shippingCost: "₱150",
      coverage: "75%"
    }
  ];

  const shippingPolicies = [
    {
      title: "Free Shipping Qualification",
      content: "Enjoy free standard shipping on all orders over ₱1,500. Premium members get free shipping on all orders regardless of amount.",
      icon: CreditCard
    },
    {
      title: "Processing Time",
      content: "Orders are processed within 24 hours on business days. Cut-off time is 3:00 PM for same-day processing.",
      icon: Clock
    },
    {
      title: "Delivery Attempts",
      content: "We make up to 3 delivery attempts. If unsuccessful, packages are held at the nearest pickup point for 7 days.",
      icon: Package
    },
    {
      title: "Package Security",
      content: "All packages are insured up to ₱50,000. Signature confirmation required for orders over ₱10,000.",
      icon: Shield
    }
  ];

  const trackingSteps = [
    { status: "Order Confirmed", description: "Your order has been received and is being prepared", icon: CheckCircle },
    { status: "Processing", description: "Items are being picked and packed in our warehouse", icon: Package },
    { status: "Shipped", description: "Your package is on its way to the delivery address", icon: Truck },
    { status: "Out for Delivery", description: "Package is with the delivery courier in your area", icon: MapPin },
    { status: "Delivered", description: "Package has been successfully delivered", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Truck className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Shipping Information
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Fast, reliable delivery across the Philippines with tracking and insurance included
            </p>
            
            {/* Quick Order Tracking */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4">Track Your Order</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Enter tracking number (e.g., NX123456789PH)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="pl-10 pr-4 py-3 border-0 bg-muted/50"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium">
                  Track Package
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 py-12 sm:py-16 lg:py-20">
        
        <Tabs defaultValue="options" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="options">Shipping Options</TabsTrigger>
            <TabsTrigger value="coverage">Coverage Areas</TabsTrigger>
            <TabsTrigger value="policies">Policies</TabsTrigger>
            <TabsTrigger value="tracking">Order Tracking</TabsTrigger>
          </TabsList>

          {/* Shipping Options Tab */}
          <TabsContent value="options" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Choose Your Shipping Method
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Select the delivery option that best fits your needs and timeline
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {shippingOptions.map((option) => (
                <Card key={option.id} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className={`${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <option.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {option.name}
                    </CardTitle>
                    <div className="space-y-2">
                      <div className="text-2xl font-bold text-primary">{option.price}</div>
                      {option.freeThreshold !== "Never" && option.freeThreshold !== "Always" && (
                        <Badge variant="secondary" className="text-xs">
                          Free over {option.freeThreshold}
                        </Badge>
                      )}
                      {option.freeThreshold === "Always" && (
                        <Badge className="bg-purple-500 text-white text-xs">
                          Always Free
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-foreground">{option.delivery}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium text-foreground text-sm">Features:</h4>
                      <ul className="space-y-1">
                        {option.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Free Shipping Calculator */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Calculator className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Free Shipping Calculator
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Add items worth ₱1,500 or more to your cart to qualify for free standard shipping. 
                  Premium members enjoy free shipping on all orders!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    Calculate Shipping Cost
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Become Premium Member
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Coverage Areas Tab */}
          <TabsContent value="coverage" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Delivery Coverage Areas
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We deliver nationwide across the Philippines with varying delivery times by region
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {deliveryAreas.map((area, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-bold text-foreground flex items-center space-x-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>{area.region}</span>
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        {area.coverage} Coverage
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Truck className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium text-foreground">Standard</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{area.standardDelivery}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Zap className="w-4 h-4 text-orange-500" />
                          <span className="text-sm font-medium text-foreground">Express</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{area.expressDelivery}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-2">Major Cities:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.cities.slice(0, 6).map((city, cityIndex) => (
                          <Badge key={cityIndex} variant="outline" className="text-xs">
                            {city}
                          </Badge>
                        ))}
                        {area.cities.length > 6 && (
                          <Badge variant="outline" className="text-xs">
                            +{area.cities.length - 6} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t">
                      <span className="text-sm text-muted-foreground">Shipping Cost:</span>
                      <span className="font-medium text-foreground">{area.shippingCost}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Coverage Map Info */}
            <Card className="bg-muted/30 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Nationwide Coverage
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  NexuStore delivers to all 18 regions of the Philippines. Remote areas may have extended delivery times.
                  Contact our support team for specific location inquiries.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">18</div>
                    <p className="text-sm text-muted-foreground">Regions Covered</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">1,500+</div>
                    <p className="text-sm text-muted-foreground">Cities & Municipalities</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">Average Coverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Policies Tab */}
          <TabsContent value="policies" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Shipping Policies & Guidelines
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Important information about our shipping terms, conditions, and procedures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {shippingPolicies.map((policy, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <policy.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-foreground">{policy.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{policy.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Policies */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Info className="w-5 h-5 text-primary" />
                    <span>Important Shipping Guidelines</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Restricted Items</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Hazardous materials and chemicals</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Perishable food items</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Live animals and plants</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                          <span>Weapons and ammunition</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Special Handling</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Fragile items receive extra padding</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Electronics in anti-static packaging</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Temperature-sensitive items protected</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>High-value items require signature</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
                <CardContent className="p-8 sm:p-12">
                  <div className="text-center mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                      Need Help with Shipping?
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Our customer support team is available to assist with any shipping questions or concerns
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Phone Support</h4>
                      <p className="text-sm text-muted-foreground">Mon-Fri 8AM-8PM</p>
                      <p className="text-sm font-medium text-primary">(02) 8123-4567</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
                      <p className="text-sm text-muted-foreground">24/7 Response</p>
                      <p className="text-sm font-medium text-primary">shipping@nexustore.ph</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Live Chat</h4>
                      <p className="text-sm text-muted-foreground">Available 24/7</p>
                      <Button size="sm" className="mt-2 bg-primary hover:bg-primary/90 text-white">
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Order Tracking Tab */}
          <TabsContent value="tracking" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Track Your Order
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Monitor your package journey from our warehouse to your doorstep
              </p>
            </div>

            {/* Tracking Steps */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Order Tracking Process</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-muted"></div>

                  <div className="space-y-8">
                    {trackingSteps.map((step, index) => (
                      <div key={index} className="relative flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full relative z-10">
                          <step.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1">{step.status}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tracking Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="w-5 h-5 text-primary" />
                    <span>Real-Time Updates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Get instant notifications via SMS and email at every step of your delivery journey.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Order confirmation alerts</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Shipping notifications</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Delivery confirmations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Location Tracking</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Monitor your package location in real-time with our advanced tracking system.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>GPS-enabled tracking</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Estimated delivery times</span>
                    </li>
                    <li className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Delivery route optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Tracking Tips */}
            <Card className="bg-muted/30 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Tracking Tips & Information
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Make the most of our tracking system with these helpful tips
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-6 h-6 text-blue-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Tracking Number Format</h4>
                    <p className="text-sm text-muted-foreground">
                      NX + 9 digits + PH<br />
                      Example: NX123456789PH
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Update Frequency</h4>
                    <p className="text-sm text-muted-foreground">
                      Tracking updates every<br />
                      2-4 hours during transit
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <AlertCircle className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Delivery Issues</h4>
                    <p className="text-sm text-muted-foreground">
                      Contact support if no updates<br />
                      for more than 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

      </div>

      <Footer />
    </div>
  );
};

export default ShippingInfo;
