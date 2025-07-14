import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  HelpCircle, 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  RotateCcw, 
  Shield, 
  User, 
  MessageCircle, 
  Phone, 
  Mail,
  ChevronDown,
  ChevronRight,
  Clock,
  CheckCircle,
  AlertCircle,
  Star
} from "lucide-react";
import { useScrollToTop } from "@/utils/scrollToTop";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  // Scroll to top when component mounts
  useScrollToTop();

  const helpCategories = [
    {
      icon: ShoppingBag,
      title: "Orders & Shopping",
      description: "Track orders, modify purchases, and shopping guidance",
      count: 15,
      color: "bg-blue-500"
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      description: "Payment methods, billing issues, and refunds",
      count: 12,
      color: "bg-green-500"
    },
    {
      icon: Truck,
      title: "Shipping & Delivery",
      description: "Delivery options, tracking, and shipping policies",
      count: 18,
      color: "bg-orange-500"
    },
    {
      icon: RotateCcw,
      title: "Returns & Exchanges",
      description: "Return process, exchange policies, and warranties",
      count: 10,
      color: "bg-purple-500"
    },
    {
      icon: User,
      title: "Account & Profile",
      description: "Account settings, profile management, and security",
      count: 8,
      color: "bg-indigo-500"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Data protection, privacy settings, and security tips",
      count: 6,
      color: "bg-red-500"
    }
  ];

  const popularFaqs = [
    {
      id: 1,
      question: "How do I track my order?",
      answer: "You can track your order by logging into your NexuStore account and visiting the 'My Orders' section. You'll receive a tracking number via email once your order ships. You can also use our order tracking tool on the homepage.",
      category: "Orders & Shopping",
      views: 1250
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "NexuStore accepts various payment methods including credit/debit cards (Visa, Mastercard, JCB), PayPal, GCash, PayMaya, and bank transfers. All payments are processed securely through our encrypted payment gateway.",
      category: "Payment & Billing",
      views: 980
    },
    {
      id: 3,
      question: "How long does shipping take?",
      answer: "Standard shipping within Metro Manila takes 1-2 business days, while provincial deliveries take 3-5 business days. Express shipping is available for next-day delivery in selected areas. Free shipping is available for orders over ₱1,500.",
      category: "Shipping & Delivery",
      views: 1100
    },
    {
      id: 4,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Electronics have a 15-day return window. Return shipping is free for defective items, while customer-initiated returns may incur shipping fees.",
      category: "Returns & Exchanges",
      views: 850
    },
    {
      id: 5,
      question: "How do I change my account information?",
      answer: "To update your account information, log in to your NexuStore account and go to 'Profile Settings'. You can modify your personal details, shipping addresses, and communication preferences. For security reasons, email changes require verification.",
      category: "Account & Profile",
      views: 720
    },
    {
      id: 6,
      question: "Is my personal information secure?",
      answer: "Yes, NexuStore uses industry-standard SSL encryption to protect your personal and payment information. We never store credit card details on our servers and comply with international data protection standards. Your privacy is our priority.",
      category: "Security & Privacy",
      views: 650
    }
  ];

  const contactOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "24/7 Available",
      action: "Start Chat",
      color: "bg-blue-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call our customer service",
      availability: "Mon-Fri 8AM-8PM",
      action: "Call Now",
      color: "bg-green-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24hrs",
      action: "Send Email",
      color: "bg-orange-500"
    }
  ];

  const filteredFaqs = popularFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <HelpCircle className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              How can we help you?
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Find answers to your questions, get support, and learn more about shopping with NexuStore
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg bg-white/95 backdrop-blur-sm border-0 rounded-xl shadow-lg focus:shadow-xl transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 py-12 sm:py-16 lg:py-20">
        
        {/* Help Categories */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Browse Help Topics
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose a category to find specific help articles and guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {helpCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-premium-lg transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`${category.color} p-3 rounded-lg text-white flex-shrink-0`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                        {category.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {category.count} articles
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular FAQs */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quick answers to the most common questions from our customers
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.map((faq) => (
              <Card key={faq.id} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                <CardHeader
                  className="cursor-pointer hover:bg-muted/50 transition-colors duration-200"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg font-semibold text-foreground mb-2 text-left">
                        {faq.question}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {faq.category}
                        </Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 fill-current text-yellow-500" />
                          <span>{faq.views} views</span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedFaq === faq.id ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                </CardHeader>
                {expandedFaq === faq.id && (
                  <CardContent className="pt-0 pb-6">
                    <div className="bg-muted/30 rounded-lg p-4 sm:p-6">
                      <p className="text-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {filteredFaqs.length === 0 && searchQuery && (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground">
                Try searching with different keywords or browse our help categories above
              </p>
            </div>
          )}
        </section>

        {/* Contact Support */}
        <section className="mb-16 sm:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Still Need Help?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our customer support team is here to assist you with any questions or concerns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {contactOptions.map((option, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 sm:p-8">
                  <div className={`${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <option.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {option.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <Clock className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">
                      {option.availability}
                    </span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-16 sm:mb-20">
          <div className="bg-muted/30 rounded-2xl p-8 sm:p-12">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Quick Links
              </h2>
              <p className="text-muted-foreground text-lg">
                Access important pages and resources quickly
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white transition-all duration-300">
                <Truck className="w-6 h-6" />
                <span className="text-sm font-medium">Shipping Info</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white transition-all duration-300">
                <RotateCcw className="w-6 h-6" />
                <span className="text-sm font-medium">Returns</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white transition-all duration-300">
                <Shield className="w-6 h-6" />
                <span className="text-sm font-medium">Privacy Policy</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-primary hover:text-white transition-all duration-300">
                <CheckCircle className="w-6 h-6" />
                <span className="text-sm font-medium">Order Status</span>
              </Button>
            </div>
          </div>
        </section>

        {/* Support Stats */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
              We're Here to Help
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Customer Support</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">&lt;2min</div>
                <p className="text-muted-foreground">Average Response Time</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default HelpCenter;
