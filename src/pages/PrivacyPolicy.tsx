import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Database, 
  Cookie,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  FileText,
  Settings,
  Trash2,
  Download,
  Share2,
  Globe,
  Smartphone,
  Monitor,
  Search,
  ShoppingCart,
  Heart,
  Bell,
  UserCheck,
  Key,
  Fingerprint,
  Server,
  Cloud,
  Building,
  Scale,
  BookOpen,
  HelpCircle
} from 'lucide-react';
import { useScrollToTop } from '@/utils/scrollToTop';

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const dataTypes = [
    {
      category: "Account Information",
      icon: UserCheck,
      description: "Information you provide when creating and managing your account",
      items: [
        "Full name (first and last name)",
        "Email address",
        "Phone number",
        "Password (encrypted)",
        "Date of account creation",
        "Profile preferences"
      ],
      purpose: "Account management, authentication, and personalized services"
    },
    {
      category: "Order & Payment Data",
      icon: CreditCard,
      description: "Information collected during purchases and transactions",
      items: [
        "Billing and shipping addresses",
        "Payment method details (last 4 digits only)",
        "Order history and preferences",
        "Transaction records",
        "Delivery tracking information",
        "Return and refund requests"
      ],
      purpose: "Order processing, payment verification, and customer service"
    },
    {
      category: "Device & Usage Information",
      icon: Monitor,
      description: "Technical data about how you interact with our platform",
      items: [
        "IP address and location data",
        "Device type and browser information",
        "Pages visited and time spent",
        "Search queries and filters used",
        "Shopping cart and wishlist activity",
        "App usage patterns"
      ],
      purpose: "Platform optimization, security, and personalized recommendations"
    },
    {
      category: "Communication Data",
      icon: Mail,
      description: "Information from your interactions with our services",
      items: [
        "Newsletter subscription preferences",
        "Customer service communications",
        "Product reviews and ratings",
        "Survey responses and feedback",
        "Marketing communication preferences",
        "Social media interactions"
      ],
      purpose: "Customer support, service improvement, and marketing communications"
    }
  ];

  const dataUsage = [
    {
      title: "Service Provision",
      icon: ShoppingCart,
      description: "Essential functions for operating our e-commerce platform",
      uses: [
        "Processing and fulfilling your orders",
        "Managing your account and preferences",
        "Providing customer support services",
        "Facilitating secure payments",
        "Tracking deliveries and shipments"
      ]
    },
    {
      title: "Personalization",
      icon: Heart,
      description: "Enhancing your shopping experience with tailored content",
      uses: [
        "Recommending products based on your interests",
        "Customizing search results and filters",
        "Personalizing promotional offers",
        "Showing relevant advertisements",
        "Improving user interface based on preferences"
      ]
    },
    {
      title: "Security & Fraud Prevention",
      icon: Shield,
      description: "Protecting your account and preventing unauthorized access",
      uses: [
        "Detecting and preventing fraudulent activities",
        "Monitoring for suspicious account behavior",
        "Implementing security measures and authentication",
        "Protecting against cyber threats",
        "Ensuring platform integrity and safety"
      ]
    },
    {
      title: "Analytics & Improvement",
      icon: Database,
      description: "Understanding usage patterns to enhance our services",
      uses: [
        "Analyzing website and app performance",
        "Understanding customer behavior patterns",
        "Improving product recommendations",
        "Optimizing platform functionality",
        "Conducting market research and analysis"
      ]
    }
  ];

  const userRights = [
    {
      right: "Access Your Data",
      icon: Eye,
      description: "Request a copy of all personal data we hold about you",
      action: "Download your data through your account settings or contact us"
    },
    {
      right: "Correct Information",
      icon: Settings,
      description: "Update or correct any inaccurate personal information",
      action: "Edit your profile and account information in your dashboard"
    },
    {
      right: "Delete Your Data",
      icon: Trash2,
      description: "Request deletion of your personal data (subject to legal requirements)",
      action: "Contact our privacy team or use account deletion option"
    },
    {
      right: "Data Portability",
      icon: Download,
      description: "Receive your data in a structured, machine-readable format",
      action: "Request data export through your account or customer service"
    },
    {
      right: "Opt-Out of Marketing",
      icon: Bell,
      description: "Unsubscribe from marketing communications at any time",
      action: "Use unsubscribe links in emails or update preferences in your account"
    },
    {
      right: "Restrict Processing",
      icon: Lock,
      description: "Limit how we process your personal data in certain circumstances",
      action: "Contact our privacy team with specific restrictions you'd like to apply"
    }
  ];

  const securityMeasures = [
    {
      measure: "Data Encryption",
      icon: Key,
      description: "All sensitive data is encrypted both in transit and at rest using industry-standard encryption protocols"
    },
    {
      measure: "Secure Authentication",
      icon: Fingerprint,
      description: "Multi-factor authentication and secure password requirements protect your account access"
    },
    {
      measure: "Regular Security Audits",
      icon: Search,
      description: "Continuous monitoring and regular security assessments to identify and address vulnerabilities"
    },
    {
      measure: "Access Controls",
      icon: UserCheck,
      description: "Strict access controls ensure only authorized personnel can access personal data on a need-to-know basis"
    },
    {
      measure: "Secure Infrastructure",
      icon: Server,
      description: "Our systems are hosted on secure, certified cloud infrastructure with robust physical and digital security"
    },
    {
      measure: "Data Backup & Recovery",
      icon: Cloud,
      description: "Regular data backups and disaster recovery procedures ensure data availability and integrity"
    }
  ];

  const thirdParties = [
    {
      category: "Payment Processors",
      purpose: "Secure payment processing and fraud prevention",
      examples: ["PayPal", "Stripe", "Local Philippine payment gateways"],
      dataShared: "Payment information, transaction details"
    },
    {
      category: "Shipping Partners",
      purpose: "Order fulfillment and delivery services",
      examples: ["LBC", "J&T Express", "Ninja Van", "2GO"],
      dataShared: "Shipping addresses, contact information, order details"
    },
    {
      category: "Analytics Services",
      purpose: "Website performance analysis and user behavior insights",
      examples: ["Google Analytics", "Facebook Pixel", "Internal analytics"],
      dataShared: "Usage data, device information, anonymized behavior data"
    },
    {
      category: "Customer Support",
      purpose: "Providing customer service and technical support",
      examples: ["Customer service platforms", "Live chat services"],
      dataShared: "Contact information, order history, support communications"
    },
    {
      category: "Marketing Partners",
      purpose: "Advertising and promotional campaigns",
      examples: ["Social media platforms", "Email marketing services"],
      dataShared: "Contact preferences, demographic information, purchase history"
    }
  ];

  const cookieTypes = [
    {
      type: "Essential Cookies",
      purpose: "Required for basic website functionality",
      duration: "Session/Persistent",
      canOptOut: false,
      examples: ["Authentication", "Shopping cart", "Security features"]
    },
    {
      type: "Performance Cookies",
      purpose: "Help us understand how visitors use our website",
      duration: "Up to 2 years",
      canOptOut: true,
      examples: ["Page analytics", "Error tracking", "Performance monitoring"]
    },
    {
      type: "Functional Cookies",
      purpose: "Remember your preferences and personalize your experience",
      duration: "Up to 1 year",
      canOptOut: true,
      examples: ["Language settings", "Display preferences", "Location data"]
    },
    {
      type: "Marketing Cookies",
      purpose: "Show you relevant advertisements and measure campaign effectiveness",
      duration: "Up to 13 months",
      canOptOut: true,
      examples: ["Ad targeting", "Social media integration", "Campaign tracking"]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Privacy Policy
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your 
              personal information when you use NexuStore's services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#data-collection">What We Collect</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#your-rights">Your Rights</Link>
              </Button>
            </div>

            {/* Last Updated */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Last Updated: January 15, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 py-12 sm:py-16 lg:py-20">
        
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="data">Data & Usage</TabsTrigger>
            <TabsTrigger value="rights">Your Rights</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Privacy Policy Overview
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding how NexuStore protects your privacy and handles your personal information
              </p>
            </div>

            {/* Key Principles */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Our Privacy Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Data Protection</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We implement robust security measures to protect your personal information from unauthorized access, disclosure, or misuse.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Transparency</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We clearly explain what data we collect, how we use it, and who we share it with in plain, understandable language.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">User Control</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      You have control over your personal data with options to access, update, delete, or restrict how we process your information.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quick Summary */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">What This Policy Covers</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Info className="w-6 h-6 text-primary" />
                      Information We Collect
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Account and profile information</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Order and payment details</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Device and usage data</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Communication preferences</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Settings className="w-6 h-6 text-primary" />
                      How We Use It
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Providing and improving our services</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Personalizing your shopping experience</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Security and fraud prevention</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Analytics and service improvement</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Legal Basis */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Legal Basis for Processing</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Contract Performance</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Processing necessary to fulfill our contract with you, including order processing,
                        payment handling, and service delivery.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Legitimate Interest</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Processing for our legitimate business interests, such as fraud prevention,
                        security, and service improvement, balanced against your privacy rights.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Consent</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Processing based on your explicit consent, such as marketing communications,
                        newsletter subscriptions, and optional features.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-3">Legal Compliance</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Processing required to comply with legal obligations, including tax records,
                        regulatory reporting, and law enforcement requests.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Questions About Your Privacy?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our privacy team is here to help you understand how we protect your data
                  and assist with any privacy-related requests or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Contact Privacy Team
                  </Button>
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    View Data Request Form
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Data & Usage Tab */}
          <TabsContent value="data" className="space-y-8" id="data-collection">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Data Collection & Usage
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Detailed information about what data we collect and how we use it to provide our services
              </p>
            </div>

            {/* Data Types */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Types of Data We Collect</h3>
              <div className="space-y-6">
                {dataTypes.map((dataType, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <dataType.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-foreground mb-2">
                            {dataType.category}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {dataType.description}
                          </p>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-medium text-foreground mb-3">Data Items:</h5>
                              <ul className="space-y-2">
                                {dataType.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start space-x-2">
                                    <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-foreground mb-3">Purpose:</h5>
                              <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                                {dataType.purpose}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* How We Use Data */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">How We Use Your Data</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {dataUsage.map((usage, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                          <usage.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{usage.title}</h4>
                          <p className="text-muted-foreground text-sm mb-3">{usage.description}</p>
                          <ul className="space-y-1">
                            {usage.uses.map((use, useIndex) => (
                              <li key={useIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-xs text-muted-foreground">{use}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Third Party Sharing */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Third Party Data Sharing</h3>
              <div className="space-y-4">
                {thirdParties.map((party, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{party.category}</h4>
                          <p className="text-sm text-muted-foreground">{party.purpose}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground mb-2 text-sm">Examples:</h5>
                          <div className="flex flex-wrap gap-1">
                            {party.examples.map((example, exampleIndex) => (
                              <Badge key={exampleIndex} variant="secondary" className="text-xs">
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="lg:col-span-2">
                          <h5 className="font-medium text-foreground mb-2 text-sm">Data Shared:</h5>
                          <p className="text-sm text-muted-foreground">{party.dataShared}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Cookie Usage</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cookieTypes.map((cookie, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-foreground">{cookie.type}</h4>
                        <Badge variant={cookie.canOptOut ? "secondary" : "destructive"} className="text-xs">
                          {cookie.canOptOut ? "Optional" : "Required"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{cookie.purpose}</p>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{cookie.duration}</span>
                        </div>
                        <div>
                          <span className="font-medium">Examples:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {cookie.examples.map((example, exampleIndex) => (
                              <Badge key={exampleIndex} variant="outline" className="text-xs">
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Your Rights Tab */}
          <TabsContent value="rights" className="space-y-8" id="your-rights">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Your Privacy Rights
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                You have control over your personal data. Learn about your rights and how to exercise them
              </p>
            </div>

            {/* User Rights */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Your Data Rights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userRights.map((right, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                          <right.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg text-foreground mb-3">
                          {right.right}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {right.description}
                        </p>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-xs text-muted-foreground font-medium">How to exercise:</p>
                          <p className="text-xs text-muted-foreground mt-1">{right.action}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Data Retention */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Data Retention</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Retention Periods</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Account Data</p>
                            <p className="text-xs text-muted-foreground">Retained while your account is active, plus 3 years after closure</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Order History</p>
                            <p className="text-xs text-muted-foreground">Retained for 7 years for tax and legal compliance</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Marketing Data</p>
                            <p className="text-xs text-muted-foreground">Retained until you unsubscribe or withdraw consent</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Analytics Data</p>
                            <p className="text-xs text-muted-foreground">Anonymized and retained for up to 2 years</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Deletion Process</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">Secure data deletion using industry standards</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">Verification of complete data removal</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">Backup systems updated within 30 days</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-muted-foreground">Some data may be retained for legal compliance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact for Rights */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Exercise Your Rights</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Mail className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Email</p>
                            <a href="mailto:privacy@nexustore.ph" className="text-sm text-primary hover:underline">
                              privacy@nexustore.ph
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Phone</p>
                            <a href="tel:(02) 8123-PRIV" className="text-sm text-primary hover:underline">
                              (02) 8123-PRIV
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Address</p>
                            <p className="text-sm text-muted-foreground">
                              NexuStore Privacy Office<br />
                              25th Floor, One Global Place<br />
                              BGC, Taguig, Philippines
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Response Timeline</h4>
                      <div className="space-y-3">
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm font-medium text-foreground">Standard Requests</p>
                          <p className="text-xs text-muted-foreground">We respond within 30 days of receiving your request</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm font-medium text-foreground">Complex Requests</p>
                          <p className="text-xs text-muted-foreground">May take up to 60 days with notification of extension</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm font-medium text-foreground">Urgent Security Issues</p>
                          <p className="text-xs text-muted-foreground">Addressed within 24-48 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Security & Protection
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Learn about the comprehensive security measures we implement to protect your personal information
              </p>
            </div>

            {/* Security Measures */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Our Security Measures</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityMeasures.map((measure, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                          <measure.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-lg text-foreground mb-3">
                          {measure.measure}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {measure.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Compliance */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Compliance & Certifications</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Scale className="w-6 h-6 text-primary" />
                      Legal Compliance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Data Privacy Act of 2012 (Philippines)</p>
                          <p className="text-xs text-muted-foreground">Full compliance with Philippine data protection laws</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">PCI DSS Compliance</p>
                          <p className="text-xs text-muted-foreground">Payment card industry data security standards</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">ISO 27001 Standards</p>
                          <p className="text-xs text-muted-foreground">Information security management system certification</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-primary" />
                      Infrastructure Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">AWS/Azure Cloud Security</p>
                          <p className="text-xs text-muted-foreground">Enterprise-grade cloud infrastructure protection</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">24/7 Security Monitoring</p>
                          <p className="text-xs text-muted-foreground">Continuous threat detection and response</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Regular Penetration Testing</p>
                          <p className="text-xs text-muted-foreground">Third-party security assessments and vulnerability testing</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Incident Response */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Data Breach Response</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-6 h-6 text-red-600" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Detection</h4>
                      <p className="text-sm text-muted-foreground">
                        Immediate identification and assessment of security incidents through automated monitoring
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Response</h4>
                      <p className="text-sm text-muted-foreground">
                        Swift containment and mitigation measures to minimize impact and prevent further exposure
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bell className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Notification</h4>
                      <p className="text-sm text-muted-foreground">
                        Timely notification to affected users and regulatory authorities as required by law
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      <strong>Commitment:</strong> We will notify affected users within 72 hours of discovering any data breach
                      that may pose a risk to your personal information, in compliance with Philippine data protection laws.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Security Tips */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Protecting Yourself</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Key className="w-6 h-6 text-primary" />
                      Account Security Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Use a strong, unique password for your account</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Enable two-factor authentication when available</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Log out from shared or public devices</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Regularly review your account activity</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                      Phishing Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Verify sender before clicking email links</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Never share passwords or personal info via email</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Report suspicious communications to our security team</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Always access NexuStore through official channels</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

        </Tabs>

      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
