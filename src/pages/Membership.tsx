import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Crown, 
  Star, 
  Truck, 
  Shield, 
  Gift, 
  Clock, 
  Award, 
  Zap,
  Check,
  ArrowRight,
  Users,
  Heart,
  Sparkles,
  TrendingUp,
  Phone,
  Mail
} from "lucide-react";
import { useScrollToTop } from "@/utils/scrollToTop";

const Membership = () => {
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'premium' | 'elite'>('premium');

  // Scroll to top when component mounts
  useScrollToTop();

  const membershipPlans = [
    {
      id: 'basic',
      name: 'Basic Member',
      price: 'Free',
      originalPrice: null,
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        'Free shipping on orders over ₱2,500',
        'Access to member-only deals',
        'Basic customer support',
        'Standard return policy (30 days)',
        'Email notifications for sales',
        'Basic product recommendations'
      ],
      limitations: [
        'Limited flash deal access',
        'Standard shipping only',
        'No priority support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Member',
      price: '₱299',
      originalPrice: '₱499',
      period: '/month',
      icon: Crown,
      color: 'text-primary',
      bgColor: 'bg-primary/5',
      borderColor: 'border-primary/30',
      popular: true,
      features: [
        'Free shipping on ALL orders',
        'Early access to flash deals',
        'Priority customer support',
        'Extended return policy (60 days)',
        'Exclusive member discounts (up to 15%)',
        'Premium product recommendations',
        'Birthday month special offers',
        'Access to premium-only products',
        'Monthly surprise gifts'
      ]
    },
    {
      id: 'elite',
      name: 'Elite Member',
      price: '₱799',
      originalPrice: '₱1,299',
      period: '/month',
      icon: Sparkles,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Everything in Premium',
        'Same-day delivery in Metro Manila',
        'Dedicated account manager',
        'VIP customer support (24/7)',
        'Lifetime return policy',
        'Exclusive elite discounts (up to 25%)',
        'Personal shopping assistant',
        'Access to limited edition products',
        'Quarterly premium gift boxes',
        'Invitation to exclusive events',
        'Price protection guarantee'
      ]
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders with Premium membership, no minimum purchase required.'
    },
    {
      icon: Zap,
      title: 'Early Access',
      description: 'Get first dibs on flash deals and new product launches before they go public.'
    },
    {
      icon: Gift,
      title: 'Exclusive Rewards',
      description: 'Earn points faster and get access to member-only rewards and special offers.'
    },
    {
      icon: Shield,
      title: 'Priority Support',
      description: '24/7 priority customer support with dedicated representatives for members.'
    },
    {
      icon: Award,
      title: 'Special Discounts',
      description: 'Access to exclusive member discounts and seasonal promotional offers.'
    },
    {
      icon: Heart,
      title: 'Personalized Experience',
      description: 'Curated product recommendations and personalized shopping experience.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Members', icon: Users },
    { number: '₱2.5M+', label: 'Total Savings', icon: TrendingUp },
    { number: '4.9/5', label: 'Member Rating', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Crown className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-5xl font-bold text-foreground">NexuStore Membership</h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Unlock exclusive benefits, premium services, and unbeatable savings with our membership program. 
              Join thousands of satisfied members who enjoy the ultimate shopping experience.
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>30-day money back</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Membership Plans */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Plan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the membership plan that best fits your shopping needs and lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan) => {
              const IconComponent = plan.icon;
              const isSelected = selectedPlan === plan.id;
              
              return (
                <Card 
                  key={plan.id} 
                  className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    plan.popular ? 'ring-2 ring-primary scale-105' : ''
                  } ${isSelected ? 'ring-2 ring-primary/50' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                    <div className={`w-16 h-16 ${plan.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${plan.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4">
                      {plan.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through mr-2">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground">{plan.period}</span>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="px-6 pb-8">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                      {plan.limitations && plan.limitations.map((limitation, index) => (
                        <li key={`limit-${index}`} className="flex items-start gap-3 opacity-60">
                          <div className="w-5 h-5 mt-0.5 flex-shrink-0 flex items-center justify-center">
                            <div className="w-3 h-3 border border-muted-foreground rounded-full"></div>
                          </div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full" 
                      variant={plan.id === 'basic' ? 'outline' : 'default'}
                      onClick={() => setSelectedPlan(plan.id as 'basic' | 'premium' | 'elite')}
                    >
                      {plan.id === 'basic' ? 'Current Plan' : 'Choose Plan'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Member Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover all the exclusive advantages that come with your NexuStore membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with your NexuStore membership is simple and straightforward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Choose Your Plan</h3>
              <p className="text-muted-foreground">
                Select the membership plan that best suits your shopping needs and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Sign Up & Pay</h3>
              <p className="text-muted-foreground">
                Complete your registration and secure payment to activate your membership instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Start Saving</h3>
              <p className="text-muted-foreground">
                Begin enjoying all your exclusive member benefits and start saving on every purchase.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about NexuStore membership.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Can I cancel my membership anytime?</h3>
                <p className="text-muted-foreground">
                  Yes, you can cancel your membership at any time. There are no cancellation fees, and you'll continue to enjoy member benefits until the end of your current billing period.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Is there a free trial available?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day money-back guarantee for all new members. If you're not completely satisfied within the first 30 days, we'll refund your membership fee.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">How do I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground">
                  You can change your membership plan anytime from your account settings. Upgrades take effect immediately, while downgrades will apply at your next billing cycle.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards, debit cards, PayPal, GCash, PayMaya, and bank transfers. All payments are processed securely through our encrypted payment system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Support Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Help?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our dedicated support team is here to assist you with any questions about membership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Speak directly with our support team</p>
                <p className="text-primary font-semibold">+63 2 8123 4567</p>
                <p className="text-sm text-muted-foreground mt-2">Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-6PM</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Get detailed help via email</p>
                <p className="text-primary font-semibold">membership@nexustore.com</p>
                <p className="text-sm text-muted-foreground mt-2">Response within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied members and unlock exclusive benefits today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-4">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Membership;
