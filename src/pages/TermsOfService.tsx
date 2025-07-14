import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Scale, 
  ShoppingCart, 
  CreditCard, 
  Truck, 
  Shield,
  Users,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Building,
  Gavel,
  Eye,
  Lock,
  Globe,
  Smartphone,
  Monitor,
  Package,
  RefreshCw,
  DollarSign,
  Percent,
  Star,
  Heart,
  MessageSquare,
  Flag,
  Ban,
  UserX,
  Copyright,
  Award,
  Zap,
  Target,
  Info,
  HelpCircle,
  BookOpen,
  Settings,
  Key,
  Database
} from 'lucide-react';
import { useScrollToTop } from '@/utils/scrollToTop';

const TermsOfService = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const serviceTerms = [
    {
      category: "Account Registration",
      icon: Users,
      description: "Requirements and responsibilities for creating and maintaining your NexuStore account",
      terms: [
        "You must be at least 18 years old or have parental consent to create an account",
        "Provide accurate, current, and complete information during registration",
        "Maintain the security of your password and account credentials",
        "You are responsible for all activities that occur under your account",
        "One account per person; multiple accounts are not permitted",
        "Notify us immediately of any unauthorized use of your account"
      ],
      obligations: "Keep account information updated and secure"
    },
    {
      category: "Product Purchases",
      icon: ShoppingCart,
      description: "Terms governing product purchases, pricing, and order processing",
      terms: [
        "All prices are listed in Philippine Peso (₱) and include applicable taxes",
        "Product availability is subject to stock and may change without notice",
        "We reserve the right to limit quantities and refuse orders",
        "Product descriptions and images are for reference only",
        "Prices may change without prior notice until order confirmation",
        "Order confirmation constitutes acceptance of your purchase"
      ],
      obligations: "Review product details and pricing before purchase"
    },
    {
      category: "Payment Terms",
      icon: CreditCard,
      description: "Payment methods, processing, and billing policies",
      terms: [
        "Accepted payment methods: Credit/Debit cards, PayPal, Cash on Delivery",
        "Payment is due at the time of order placement",
        "All transactions are processed securely through encrypted channels",
        "Failed payments may result in order cancellation",
        "Refunds will be processed to the original payment method",
        "Additional fees may apply for certain payment methods"
      ],
      obligations: "Ensure valid payment information and sufficient funds"
    },
    {
      category: "Shipping & Delivery",
      icon: Truck,
      description: "Delivery terms, shipping policies, and customer responsibilities",
      terms: [
        "Delivery times are estimates and may vary due to location and circumstances",
        "Free shipping available on orders over ₱1,500 within Metro Manila",
        "Customer must provide accurate and complete delivery address",
        "Risk of loss transfers to customer upon delivery",
        "Delivery attempts will be made during business hours",
        "Additional charges may apply for remote or special delivery locations"
      ],
      obligations: "Provide accurate delivery information and be available for delivery"
    }
  ];

  const userObligations = [
    {
      title: "Lawful Use",
      icon: Scale,
      description: "Use our services only for lawful purposes and in accordance with these terms",
      requirements: [
        "Comply with all applicable local, national, and international laws",
        "Do not use the service for any illegal or unauthorized purpose",
        "Respect intellectual property rights of others",
        "Do not engage in fraudulent or deceptive practices"
      ]
    },
    {
      title: "Account Security",
      icon: Lock,
      description: "Maintain the security and confidentiality of your account",
      requirements: [
        "Keep your password secure and confidential",
        "Do not share your account with others",
        "Notify us immediately of any security breaches",
        "Use strong passwords and enable two-factor authentication when available"
      ]
    },
    {
      title: "Accurate Information",
      icon: CheckCircle,
      description: "Provide truthful and accurate information in all interactions",
      requirements: [
        "Provide accurate personal and contact information",
        "Update information when it changes",
        "Do not impersonate others or provide false identity",
        "Ensure shipping and billing addresses are correct"
      ]
    },
    {
      title: "Respectful Conduct",
      icon: Heart,
      description: "Interact respectfully with other users and our staff",
      requirements: [
        "Be respectful in all communications and reviews",
        "Do not use offensive, abusive, or inappropriate language",
        "Do not harass, threaten, or intimidate others",
        "Report inappropriate behavior to our support team"
      ]
    }
  ];

  const prohibitedActivities = [
    {
      activity: "Fraudulent Transactions",
      icon: Ban,
      description: "Using stolen payment methods, chargebacks fraud, or false claims",
      consequences: "Account suspension, legal action, payment recovery"
    },
    {
      activity: "Account Abuse",
      icon: UserX,
      description: "Creating multiple accounts, sharing accounts, or circumventing restrictions",
      consequences: "Account termination, loss of benefits, order cancellation"
    },
    {
      activity: "System Interference",
      icon: Shield,
      description: "Attempting to hack, disrupt, or compromise our platform security",
      consequences: "Immediate account termination, legal prosecution"
    },
    {
      activity: "Intellectual Property Violation",
      icon: Copyright,
      description: "Unauthorized use of our trademarks, content, or proprietary information",
      consequences: "Content removal, account suspension, legal action"
    },
    {
      activity: "Spam or Abuse",
      icon: Flag,
      description: "Sending unsolicited communications or abusing our communication channels",
      consequences: "Communication restrictions, account suspension"
    },
    {
      activity: "False Reviews",
      icon: Star,
      description: "Posting fake reviews, manipulating ratings, or incentivizing reviews",
      consequences: "Review removal, account restrictions, seller penalties"
    }
  ];

  const liabilityLimitations = [
    {
      area: "Service Availability",
      limitation: "We do not guarantee uninterrupted or error-free service",
      details: "Our platform may experience downtime for maintenance, updates, or technical issues. We are not liable for any losses resulting from service interruptions."
    },
    {
      area: "Product Quality",
      limitation: "We are not liable for defects in third-party products",
      details: "While we work with trusted sellers, we cannot guarantee the quality of all products. Product warranties are provided by manufacturers or sellers."
    },
    {
      area: "Delivery Issues",
      limitation: "We are not responsible for shipping delays beyond our control",
      details: "Delays due to weather, natural disasters, customs, or courier issues are beyond our control. We will assist in tracking and resolution."
    },
    {
      area: "Data Security",
      limitation: "We implement security measures but cannot guarantee absolute security",
      details: "While we use industry-standard security practices, no system is completely secure. Users are responsible for protecting their account credentials."
    }
  ];

  const disputeResolution = [
    {
      step: 1,
      title: "Direct Resolution",
      description: "Contact our customer service team to resolve the issue",
      timeframe: "Response within 24-48 hours",
      methods: ["Live chat", "Email support", "Phone support"]
    },
    {
      step: 2,
      title: "Formal Complaint",
      description: "Submit a formal written complaint if initial resolution fails",
      timeframe: "Resolution within 7-14 business days",
      methods: ["Email complaint form", "Written letter", "Online dispute form"]
    },
    {
      step: 3,
      title: "Mediation",
      description: "Engage in mediation through a neutral third party",
      timeframe: "30-60 days for mediation process",
      methods: ["Professional mediation services", "Industry arbitration"]
    },
    {
      step: 4,
      title: "Legal Action",
      description: "Pursue legal remedies through Philippine courts",
      timeframe: "As determined by legal proceedings",
      methods: ["Small claims court", "Civil litigation", "Consumer protection agencies"]
    }
  ];

  const membershipTerms = [
    {
      tier: "Basic Member",
      benefits: ["Free shipping on orders over ₱2,500", "Access to member-only deals", "Basic customer support"],
      obligations: ["Maintain active account", "Follow community guidelines"],
      termination: "Account closure terminates membership"
    },
    {
      tier: "Premium Member",
      benefits: ["Free shipping on all orders", "Priority customer support", "Exclusive early access"],
      obligations: ["Monthly/annual fee payment", "Comply with premium terms"],
      termination: "30-day notice for cancellation, prorated refunds"
    },
    {
      tier: "VIP Member",
      benefits: ["Free express shipping", "Personal shopping assistant", "VIP customer service"],
      obligations: ["Annual fee payment", "Minimum purchase requirements"],
      termination: "60-day notice for cancellation, no refunds for partial periods"
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Terms of Service
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using NexuStore's services. 
              By using our platform, you agree to be bound by these terms and conditions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#service-terms">Service Terms</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#user-obligations">Your Obligations</Link>
              </Button>
            </div>

            {/* Last Updated */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">Effective Date: January 15, 2025</span>
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
            <TabsTrigger value="terms">Service Terms</TabsTrigger>
            <TabsTrigger value="obligations">Obligations</TabsTrigger>
            <TabsTrigger value="legal">Legal</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Terms of Service Overview
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding your rights and responsibilities when using NexuStore's e-commerce platform
              </p>
            </div>

            {/* Agreement Summary */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Agreement Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Scale className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Legal Agreement</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These terms constitute a legally binding agreement between you and NexuStore Philippines.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Acceptance</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      By using our services, you acknowledge that you have read and agree to these terms.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <RefreshCw className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Updates</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      We may update these terms periodically. Continued use constitutes acceptance of changes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Key Points */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Points</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      Your Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Access to our e-commerce platform and services</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Customer support and assistance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Return and refund protection</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Privacy and data protection</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Target className="w-6 h-6 text-primary" />
                      Your Responsibilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Provide accurate account information</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Use services lawfully and respectfully</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Maintain account security</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Pay for purchases and comply with payment terms</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Membership Terms Summary */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Membership Tiers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {membershipTerms.map((tier, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-lg text-foreground mb-3">{tier.tier}</h4>

                      <div className="mb-4">
                        <h5 className="font-medium text-foreground mb-2 text-sm">Benefits:</h5>
                        <ul className="space-y-1">
                          {tier.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h5 className="font-medium text-foreground mb-2 text-sm">Obligations:</h5>
                        <ul className="space-y-1">
                          {tier.obligations.map((obligation, obligationIndex) => (
                            <li key={obligationIndex} className="flex items-start space-x-2">
                              <AlertTriangle className="w-3 h-3 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{obligation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-muted/30 p-3 rounded-lg">
                        <h5 className="font-medium text-foreground mb-1 text-sm">Termination:</h5>
                        <p className="text-xs text-muted-foreground">{tier.termination}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Questions About These Terms?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our legal team is available to help clarify any questions about these terms
                  and your rights and obligations as a NexuStore user.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Contact Legal Team
                  </Button>
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    View FAQ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Service Terms Tab */}
          <TabsContent value="terms" className="space-y-8" id="service-terms">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Service Terms & Conditions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Detailed terms governing your use of NexuStore's e-commerce platform and services
              </p>
            </div>

            {/* Service Terms */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Platform Terms</h3>
              <div className="space-y-6">
                {serviceTerms.map((term, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <term.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-foreground mb-2">
                            {term.category}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {term.description}
                          </p>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-medium text-foreground mb-3">Terms & Conditions:</h5>
                              <ul className="space-y-2">
                                {term.terms.map((termItem, termIndex) => (
                                  <li key={termIndex} className="flex items-start space-x-2">
                                    <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-muted-foreground">{termItem}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-medium text-foreground mb-3">Your Obligations:</h5>
                              <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                                {term.obligations}
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

            {/* Pricing and Fees */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Pricing & Fees</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <DollarSign className="w-6 h-6 text-primary" />
                      Product Pricing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">All prices in Philippine Peso (₱)</p>
                          <p className="text-xs text-muted-foreground">Includes 12% VAT where applicable</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Free shipping on orders over ₱1,500</p>
                          <p className="text-xs text-muted-foreground">Within Metro Manila, conditions apply</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Standard shipping fee: ₱150</p>
                          <p className="text-xs text-muted-foreground">Express shipping available for ₱299</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Percent className="w-6 h-6 text-primary" />
                      Membership Fees
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Basic Membership: Free</p>
                          <p className="text-xs text-muted-foreground">Access to basic features and deals</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Premium Membership: ₱299/month</p>
                          <p className="text-xs text-muted-foreground">Enhanced benefits and priority support</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">VIP Membership: ₱2,999/year</p>
                          <p className="text-xs text-muted-foreground">Exclusive access and personal assistance</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Return and Refund Policy */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Return & Refund Policy</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Return Windows</h4>
                      <div className="space-y-3">
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm font-medium text-foreground">Fashion Items</p>
                          <p className="text-xs text-muted-foreground">30 days from delivery</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm font-medium text-foreground">Electronics</p>
                          <p className="text-xs text-muted-foreground">15 days from delivery</p>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm font-medium text-foreground">Other Items</p>
                          <p className="text-xs text-muted-foreground">7-30 days (varies by category)</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Refund Processing</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">5-7 business days for most items</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Refund to original payment method</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Package className="w-4 h-4 text-primary" />
                          <span className="text-sm text-muted-foreground">Items must be in original condition</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Exclusions</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-muted-foreground">Intimate apparel</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-muted-foreground">Custom-made items</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-muted-foreground">Digital downloads</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <XCircle className="w-4 h-4 text-red-500" />
                          <span className="text-sm text-muted-foreground">Perishable goods</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Obligations Tab */}
          <TabsContent value="obligations" className="space-y-8" id="user-obligations">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                User Obligations & Responsibilities
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your responsibilities and obligations when using NexuStore's platform and services
              </p>
            </div>

            {/* User Obligations */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Your Responsibilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userObligations.map((obligation, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                          <obligation.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{obligation.title}</h4>
                          <p className="text-muted-foreground text-sm mb-3">{obligation.description}</p>
                          <ul className="space-y-1">
                            {obligation.requirements.map((requirement, reqIndex) => (
                              <li key={reqIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-xs text-muted-foreground">{requirement}</span>
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

            {/* Prohibited Activities */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Prohibited Activities</h3>
              <div className="space-y-4">
                {prohibitedActivities.map((activity, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="flex items-start space-x-3">
                          <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                            <activity.icon className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{activity.activity}</h4>
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                          </div>
                        </div>
                        <div className="lg:col-span-2">
                          <h5 className="font-medium text-foreground mb-2 text-sm">Consequences:</h5>
                          <div className="bg-red-50 p-3 rounded-lg">
                            <p className="text-sm text-red-700">{activity.consequences}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Account Termination */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Account Termination</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <UserX className="w-6 h-6 text-primary" />
                      Voluntary Termination
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      You may terminate your account at any time through your account settings or by contacting customer service.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Complete any pending orders before termination</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Download any important data or order history</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Cancel any active subscriptions or memberships</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Ban className="w-6 h-6 text-primary" />
                      Involuntary Termination
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      We may suspend or terminate your account for violations of these terms or illegal activities.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Immediate suspension for serious violations</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Warning system for minor infractions</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                        <span className="text-sm text-muted-foreground">Appeal process available for disputed actions</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Legal Tab */}
          <TabsContent value="legal" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Legal Information
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Legal framework, liability limitations, and dispute resolution procedures
              </p>
            </div>

            {/* Liability Limitations */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Liability Limitations</h3>
              <div className="space-y-6">
                {liabilityLimitations.map((limitation, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-yellow-100 p-2 rounded-lg flex-shrink-0">
                          <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{limitation.area}</h4>
                          <p className="text-sm font-medium text-muted-foreground mb-2">{limitation.limitation}</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{limitation.details}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Dispute Resolution */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Dispute Resolution Process</h3>
              <div className="space-y-6">
                {disputeResolution.map((step, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-bold">{step.step}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-2">{step.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium text-foreground mb-2 text-sm">Timeframe:</h5>
                              <p className="text-xs text-muted-foreground">{step.timeframe}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-foreground mb-2 text-sm">Available Methods:</h5>
                              <div className="flex flex-wrap gap-1">
                                {step.methods.map((method, methodIndex) => (
                                  <Badge key={methodIndex} variant="secondary" className="text-xs">
                                    {method}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Governing Law & Jurisdiction</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Philippine Law</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Building className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Governing Jurisdiction</p>
                            <p className="text-xs text-muted-foreground">Republic of the Philippines</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Scale className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Applicable Laws</p>
                            <p className="text-xs text-muted-foreground">Philippine Civil Code, E-Commerce Act, Data Privacy Act</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Gavel className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Court Jurisdiction</p>
                            <p className="text-xs text-muted-foreground">Courts of Metro Manila, Philippines</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Mail className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Legal Department</p>
                            <a href="mailto:legal@nexustore.ph" className="text-xs text-primary hover:underline">
                              legal@nexustore.ph
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Phone className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Legal Hotline</p>
                            <a href="tel:(02) 8123-LEGAL" className="text-xs text-primary hover:underline">
                              (02) 8123-LEGAL
                            </a>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="font-medium text-foreground text-sm">Legal Address</p>
                            <p className="text-xs text-muted-foreground">
                              NexuStore Legal Department<br />
                              25th Floor, One Global Place<br />
                              BGC, Taguig, Philippines
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

        </Tabs>

      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;
