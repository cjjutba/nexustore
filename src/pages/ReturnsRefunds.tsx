import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  RotateCcw, 
  Clock, 
  CheckCircle, 
  Package, 
  Shield, 
  CreditCard,
  Search,
  AlertCircle,
  RefreshCw,
  ArrowLeft,
  FileText,
  Truck,
  DollarSign,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  Info,
  Star,
  Zap,
  Heart,
  Camera,
  Laptop,
  Shirt,
  Baby,
  Wrench,
  Headphones,
  Watch,
  Dumbbell
} from "lucide-react";
import { useScrollToTop } from "@/utils/scrollToTop";

const ReturnsRefunds = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Scroll to top when component mounts
  useScrollToTop();

  const returnPolicies = [
    {
      category: "Fashion",
      icon: Shirt,
      returnWindow: "30 days",
      conditions: ["Original tags attached", "Unworn condition", "Original packaging"],
      restrictions: ["Intimate apparel", "Swimwear", "Custom-made items"],
      refundMethod: "Original payment method",
      processingTime: "5-7 business days",
      color: "bg-pink-500"
    },
    {
      category: "Electronics",
      icon: Laptop,
      returnWindow: "15 days",
      conditions: ["Original packaging", "All accessories included", "No physical damage"],
      restrictions: ["Software downloads", "Opened consumables", "Custom configurations"],
      refundMethod: "Original payment method",
      processingTime: "7-10 business days",
      color: "bg-blue-500"
    },
    {
      category: "Photography",
      icon: Camera,
      returnWindow: "15 days",
      conditions: ["Professional inspection", "Original packaging", "Warranty card included"],
      restrictions: ["Used memory cards", "Damaged lens filters", "Custom modifications"],
      refundMethod: "Original payment method",
      processingTime: "7-14 business days",
      color: "bg-purple-500"
    },
    {
      category: "Baby & Kids",
      icon: Baby,
      returnWindow: "30 days",
      conditions: ["Unopened packaging", "Hygiene seal intact", "Safety tags attached"],
      restrictions: ["Opened formula/food", "Used safety items", "Personalized products"],
      refundMethod: "Original payment method",
      processingTime: "5-7 business days",
      color: "bg-green-500"
    },
    {
      category: "Tools",
      icon: Wrench,
      returnWindow: "30 days",
      conditions: ["Unused condition", "Original packaging", "Safety manual included"],
      restrictions: ["Used consumables", "Modified tools", "Missing safety guards"],
      refundMethod: "Original payment method",
      processingTime: "7-10 business days",
      color: "bg-orange-500"
    },
    {
      category: "Audio",
      icon: Headphones,
      returnWindow: "15 days",
      conditions: ["Original packaging", "All accessories", "No ear tip contamination"],
      restrictions: ["Opened ear tips", "Custom ear molds", "Water damage"],
      refundMethod: "Original payment method",
      processingTime: "5-7 business days",
      color: "bg-indigo-500"
    }
  ];

  const returnProcess = [
    {
      step: 1,
      title: "Initiate Return Request",
      description: "Log into your account and select the item you want to return from your order history",
      icon: FileText,
      timeframe: "Within return window",
      action: "Online or Customer Service"
    },
    {
      step: 2,
      title: "Return Authorization",
      description: "Receive return authorization number and prepaid shipping label via email",
      icon: CheckCircle,
      timeframe: "1-2 business days",
      action: "Automatic approval for most items"
    },
    {
      step: 3,
      title: "Package & Ship",
      description: "Securely package the item with all accessories and attach the return label",
      icon: Package,
      timeframe: "Within 7 days of authorization",
      action: "Drop off at courier or schedule pickup"
    },
    {
      step: 4,
      title: "Quality Inspection",
      description: "Our team inspects the returned item to ensure it meets return conditions",
      icon: Search,
      timeframe: "2-3 business days after receipt",
      action: "Professional quality assessment"
    },
    {
      step: 5,
      title: "Refund Processing",
      description: "Approved refunds are processed back to your original payment method",
      icon: CreditCard,
      timeframe: "3-10 business days",
      action: "Automatic refund processing"
    }
  ];

  const refundMethods = [
    {
      method: "Credit/Debit Card",
      icon: CreditCard,
      timeframe: "3-5 business days",
      description: "Refund processed back to original card",
      fees: "No fees",
      availability: "All card payments"
    },
    {
      method: "GCash/PayMaya",
      icon: DollarSign,
      timeframe: "1-2 business days",
      description: "Instant refund to digital wallet",
      fees: "No fees",
      availability: "Digital wallet payments"
    },
    {
      method: "Bank Transfer",
      icon: Truck,
      timeframe: "3-7 business days",
      description: "Direct deposit to bank account",
      fees: "No fees",
      availability: "Bank transfer payments"
    },
    {
      method: "Store Credit",
      icon: Star,
      timeframe: "Instant",
      description: "110% value as NexuStore credit",
      fees: "No fees + 10% bonus",
      availability: "Optional for all returns"
    }
  ];

  const returnReasons = [
    { reason: "Defective/Damaged", coverage: "Full refund + return shipping", priority: "High" },
    { reason: "Wrong item sent", coverage: "Full refund + return shipping", priority: "High" },
    { reason: "Size/fit issues", coverage: "Full refund, customer pays return shipping", priority: "Medium" },
    { reason: "Changed mind", coverage: "Full refund, customer pays return shipping", priority: "Medium" },
    { reason: "Better price found", coverage: "Price match or full refund", priority: "Low" },
    { reason: "Late delivery", coverage: "Full refund + compensation", priority: "High" }
  ];

  const filteredPolicies = selectedCategory === "All" 
    ? returnPolicies 
    : returnPolicies.filter(policy => policy.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <RotateCcw className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Returns & Refunds
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Easy returns, fast refunds, and hassle-free exchanges for your peace of mind
            </p>
            
            {/* Quick Return Lookup */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-4">Start Your Return</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Enter order number (e.g., ORD-1234567890)"
                    value={orderNumber}
                    onChange={(e) => setOrderNumber(e.target.value)}
                    className="pl-10 pr-4 py-3 border-0 bg-muted/50"
                  />
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 font-medium">
                  Find Order
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Don't have your order number? <Button variant="link" className="p-0 h-auto text-primary">Contact Support</Button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 py-12 sm:py-16 lg:py-20">
        
        <Tabs defaultValue="policies" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="policies">Return Policies</TabsTrigger>
            <TabsTrigger value="process">Return Process</TabsTrigger>
            <TabsTrigger value="refunds">Refund Methods</TabsTrigger>
            <TabsTrigger value="support">Get Help</TabsTrigger>
          </TabsList>

          {/* Return Policies Tab */}
          <TabsContent value="policies" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Return Policies by Category
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Different product categories have specific return windows and conditions
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Button
                variant={selectedCategory === "All" ? "default" : "outline"}
                onClick={() => setSelectedCategory("All")}
                className="text-sm"
              >
                All Categories
              </Button>
              {returnPolicies.map((policy) => (
                <Button
                  key={policy.category}
                  variant={selectedCategory === policy.category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(policy.category)}
                  className="text-sm"
                >
                  {policy.category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredPolicies.map((policy, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center pb-4">
                    <div className={`${policy.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <policy.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {policy.category}
                    </CardTitle>
                    <div className="space-y-2">
                      <Badge className="bg-primary text-white text-sm">
                        {policy.returnWindow} return window
                      </Badge>
                      <div className="text-sm text-muted-foreground">
                        Processing: {policy.processingTime}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-2">Return Conditions:</h4>
                      <ul className="space-y-1">
                        {policy.conditions.map((condition, condIndex) => (
                          <li key={condIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-2">Not Returnable:</h4>
                      <ul className="space-y-1">
                        {policy.restrictions.map((restriction, restIndex) => (
                          <li key={restIndex} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
                            <span>{restriction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Refund Method:</span>
                        <span className="font-medium text-foreground">{policy.refundMethod}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Return Window Summary */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Return Window Summary
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Quick reference for return timeframes across all product categories
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30</div>
                    <p className="text-sm text-muted-foreground mb-1">Days</p>
                    <p className="text-xs text-muted-foreground">Fashion, Tools, Sports, Accessories</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15</div>
                    <p className="text-sm text-muted-foreground mb-1">Days</p>
                    <p className="text-xs text-muted-foreground">Electronics, Photography, Audio</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">7</div>
                    <p className="text-sm text-muted-foreground mb-1">Days</p>
                    <p className="text-xs text-muted-foreground">To ship after authorization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Return Process Tab */}
          <TabsContent value="process" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                How to Return Your Items
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Follow these simple steps to return your NexuStore purchase
              </p>
            </div>

            {/* Process Steps */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Progress Line */}
                <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-muted hidden md:block"></div>

                <div className="space-y-12">
                  {returnProcess.map((step, index) => (
                    <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      <div className="bg-primary/10 p-4 rounded-full relative z-10 flex-shrink-0">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            Step {step.step}: {step.title}
                          </h3>
                          <Badge variant="outline" className="text-xs w-fit">
                            {step.timeframe}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-2 leading-relaxed">{step.description}</p>
                        <div className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">{step.action}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Return Reasons */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Common Return Reasons & Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {returnReasons.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-foreground text-sm">{item.reason}</span>
                          <Badge
                            variant={item.priority === "High" ? "default" : item.priority === "Medium" ? "secondary" : "outline"}
                            className="text-xs"
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{item.coverage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Start Return</h3>
                  <p className="text-sm text-muted-foreground mb-4">Begin your return process online</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Return Item
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <RefreshCw className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Exchange Item</h3>
                  <p className="text-sm text-muted-foreground mb-4">Swap for different size or color</p>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                    Exchange Item
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <Search className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Track Return</h3>
                  <p className="text-sm text-muted-foreground mb-4">Check your return status</p>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                    Track Return
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Refund Methods Tab */}
          <TabsContent value="refunds" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Refund Methods & Processing Times
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Choose how you'd like to receive your refund with flexible options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {refundMethods.map((method, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-lg font-semibold text-foreground">{method.method}</span>
                        <div className="text-sm text-muted-foreground">{method.timeframe}</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{method.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1">Processing Fees</h4>
                        <p className="text-sm text-muted-foreground">{method.fees}</p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1">Availability</h4>
                        <p className="text-sm text-muted-foreground">{method.availability}</p>
                      </div>
                    </div>

                    {method.method === "Store Credit" && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-medium text-green-800">Bonus Offer</span>
                        </div>
                        <p className="text-xs text-green-700 mt-1">
                          Get 10% extra value when choosing store credit option
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Refund Timeline */}
            <Card className="bg-muted/30 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Refund Processing Timeline
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Understanding when you'll receive your refund based on the payment method
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Store Credit</h4>
                    <p className="text-sm text-muted-foreground">Instant + 10% bonus</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-6 h-6 text-blue-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Digital Wallets</h4>
                    <p className="text-sm text-muted-foreground">1-2 business days</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6 text-purple-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Credit Cards</h4>
                    <p className="text-sm text-muted-foreground">3-5 business days</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Truck className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Bank Transfer</h4>
                    <p className="text-sm text-muted-foreground">3-7 business days</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Get Help Tab */}
          <TabsContent value="support" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Need Help with Returns?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our customer support team is here to assist you with any return questions
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Speak directly with our returns specialists
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-primary">(02) 8123-4567</p>
                    <p className="text-xs text-muted-foreground">Mon-Fri 8AM-8PM</p>
                    <p className="text-xs text-muted-foreground">Sat-Sun 9AM-5PM</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get instant help with your return questions
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-primary">Available 24/7</p>
                    <p className="text-xs text-muted-foreground">Average response: 2 minutes</p>
                    <p className="text-xs text-muted-foreground">Returns specialists online</p>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Send detailed return inquiries via email
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-primary">returns@nexustore.ph</p>
                    <p className="text-xs text-muted-foreground">Response within 24 hours</p>
                    <p className="text-xs text-muted-foreground">Include order number</p>
                  </div>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* FAQ Section */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Can I return sale items?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, sale items can be returned within the standard return window for each category.
                      Final sale items are clearly marked and cannot be returned.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What if I lost my receipt?</h4>
                    <p className="text-sm text-muted-foreground">
                      No problem! We can look up your purchase using your order number, email address,
                      or the card used for payment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Can I exchange for a different product?</h4>
                    <p className="text-sm text-muted-foreground">
                      Exchanges are available for the same product in different size/color. For different
                      products, please return the original item and place a new order.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How do I track my return?</h4>
                    <p className="text-sm text-muted-foreground">
                      Use the tracking number provided with your return authorization to monitor your
                      return package and refund status.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Urgent Return Issues?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  For time-sensitive return matters, defective products, or urgent refund requests,
                  contact our priority support line immediately.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    Priority Support: (02) 8999-HELP
                  </Button>
                  <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                    Emergency Chat
                  </Button>
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

export default ReturnsRefunds;
