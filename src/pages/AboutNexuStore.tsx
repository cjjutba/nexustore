import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  Store, 
  Users, 
  Globe, 
  Award, 
  Shield, 
  Truck, 
  Heart, 
  Star,
  Target,
  Zap,
  CheckCircle,
  TrendingUp,
  Building,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Package,
  CreditCard,
  Headphones
} from "lucide-react";
import { useScrollToTop } from "@/utils/scrollToTop";

const AboutNexuStore = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const companyStats = [
    {
      icon: Users,
      value: "2M+",
      label: "Happy Customers",
      description: "Trusted by millions across the Philippines"
    },
    {
      icon: Package,
      value: "500K+",
      label: "Products Available",
      description: "Extensive catalog across all categories"
    },
    {
      icon: Store,
      value: "10K+",
      label: "Partner Brands",
      description: "Working with top global and local brands"
    },
    {
      icon: MapPin,
      value: "100+",
      label: "Cities Served",
      description: "Nationwide delivery coverage"
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Trust & Security",
      description: "We prioritize customer data protection and secure transactions with industry-leading encryption and fraud prevention systems.",
      color: "bg-blue-500"
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every product undergoes rigorous quality checks to ensure our customers receive only the finest items with authentic guarantees.",
      color: "bg-green-500"
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Our customers are at the heart of everything we do. We strive to exceed expectations with personalized service and support.",
      color: "bg-red-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge technology to provide seamless shopping experiences.",
      color: "bg-purple-500"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making quality products accessible to everyone across the Philippines with affordable pricing and flexible payment options.",
      color: "bg-orange-500"
    },
    {
      icon: Truck,
      title: "Reliability",
      description: "Dependable delivery services with real-time tracking and multiple shipping options to meet every customer's needs.",
      color: "bg-indigo-500"
    }
  ];

  const keyFeatures = [
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Multiple payment methods including cards, digital wallets, and installment plans"
    },
    {
      icon: Truck,
      title: "Fast & Free Shipping",
      description: "Free shipping on orders over ₱1,500 with express delivery options available"
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance through chat, email, and phone support"
    },
    {
      icon: Shield,
      title: "Buyer Protection",
      description: "Comprehensive warranty and return policies with secure transaction guarantees"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "NexuStore Founded",
      description: "Started as a small e-commerce platform with a vision to revolutionize online shopping in the Philippines"
    },
    {
      year: "2021",
      title: "Rapid Growth",
      description: "Reached 100,000 customers and expanded to serve major cities across Luzon"
    },
    {
      year: "2022",
      title: "Nationwide Expansion",
      description: "Extended delivery coverage to Visayas and Mindanao, serving over 100 cities nationwide"
    },
    {
      year: "2023",
      title: "Premium Services Launch",
      description: "Introduced premium membership, express delivery, and enhanced customer support services"
    },
    {
      year: "2024",
      title: "Technology Innovation",
      description: "Launched AI-powered recommendations and mobile app with advanced features"
    },
    {
      year: "2025",
      title: "Market Leadership",
      description: "Became one of the Philippines' leading e-commerce platforms with 2M+ active users"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Store className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              About NexuStore
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Your trusted online shopping destination, connecting millions of customers with premium products 
              and unbeatable deals across the Philippines since 2020.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/shop">Start Shopping</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 py-12 sm:py-16 lg:py-20">
        
        <Tabs defaultValue="story" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="story">Our Story</TabsTrigger>
            <TabsTrigger value="values">Values</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>

          {/* Our Story Tab */}
          <TabsContent value="story" className="space-y-12">
            {/* Company Stats */}
            <section>
              <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  NexuStore by the Numbers
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Our growth reflects the trust and satisfaction of our valued customers
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {companyStats.map((stat, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4">
                        <stat.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {stat.label}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {stat.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Mission & Vision */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    To democratize access to quality products by providing a seamless, secure, and 
                    affordable online shopping experience that connects Filipino consumers with the 
                    best brands and deals from around the world.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe everyone deserves access to premium products at fair prices, backed 
                    by exceptional customer service and reliable delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    To become the Philippines' most trusted and innovative e-commerce platform, 
                    setting new standards for online retail through technology, customer service, 
                    and community engagement.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where every Filipino has convenient access to global 
                    products and local treasures through our platform.
                  </p>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Values Tab */}
          <TabsContent value="values" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do at NexuStore
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {coreValues.map((value, index) => (
                <Card key={index} className="group hover:shadow-premium-lg transition-all duration-300 hover:scale-105 border-0 shadow-lg">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`${value.color} p-3 rounded-lg text-white flex-shrink-0`}>
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Why Choose NexuStore
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover the features that make us the preferred choice for online shopping
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {keyFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Product Categories Showcase */}
            <section className="mt-16">
              <div className="text-center mb-10 sm:mb-12">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Extensive Product Categories
                </h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  From fashion to electronics, we have everything you need
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                {[
                  { name: "Fashion", icon: "👕", count: "50K+" },
                  { name: "Electronics", icon: "📱", count: "75K+" },
                  { name: "Photography", icon: "📷", count: "15K+" },
                  { name: "Computers", icon: "💻", count: "25K+" },
                  { name: "Sports", icon: "⚽", count: "30K+" },
                  { name: "Audio", icon: "🎧", count: "20K+" },
                  { name: "Wearables", icon: "⌚", count: "12K+" },
                  { name: "Baby & Kids", icon: "🧸", count: "35K+" },
                  { name: "Tools", icon: "🔧", count: "18K+" },
                  { name: "Accessories", icon: "👜", count: "40K+" }
                ].map((category, index) => (
                  <Card key={index} className="text-center border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                    <CardContent className="p-4 sm:p-6">
                      <div className="text-2xl sm:text-3xl mb-2">{category.icon}</div>
                      <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                        {category.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {category.count} items
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Timeline Tab */}
          <TabsContent value="timeline" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From humble beginnings to becoming a leading e-commerce platform
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-muted hidden md:block"></div>

                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        <Calendar className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <Card className="flex-1 border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                        <CardContent className="p-6 sm:p-8">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <h3 className="text-xl font-bold text-foreground">
                              {milestone.title}
                            </h3>
                            <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                              {milestone.year}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <section className="text-center mt-16 p-8 sm:p-12 bg-muted/30 rounded-2xl">
              <Building className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Join Our Growing Community
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Be part of the NexuStore family and experience the future of online shopping in the Philippines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/register">Create Account</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/membership">Learn About Membership</Link>
                </Button>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default AboutNexuStore;
