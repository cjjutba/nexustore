import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  Cookie, 
  Shield, 
  Eye, 
  Settings, 
  BarChart3,
  Target,
  Globe,
  Smartphone,
  Monitor,
  Clock,
  Calendar,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  Trash2,
  Download,
  RefreshCw,
  Lock,
  Key,
  Database,
  Share2,
  Heart,
  ShoppingCart,
  User,
  Search,
  Bell,
  MapPin,
  CreditCard,
  Package,
  Star,
  MessageSquare,
  Zap,
  TrendingUp,
  Activity,
  Fingerprint,
  Server,
  Cloud,
  Building,
  HelpCircle,
  BookOpen,
  FileText,
  Sliders,
  ToggleLeft,
  ToggleRight
} from 'lucide-react';
import { useScrollToTop } from '@/utils/scrollToTop';

const CookiePolicy = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    performance: true,
    functional: true,
    marketing: false
  });

  const [showBanner, setShowBanner] = useState(false);

  // Check if user has set cookie preferences
  useEffect(() => {
    const savedPreferences = localStorage.getItem('nexustore-cookie-preferences');
    if (!savedPreferences) {
      setShowBanner(true);
    } else {
      const preferences = JSON.parse(savedPreferences);
      setCookiePreferences(preferences);
    }
  }, []);

  const handlePreferenceChange = (type: keyof typeof cookiePreferences, value: boolean) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    const newPreferences = {
      ...cookiePreferences,
      [type]: value
    };
    setCookiePreferences(newPreferences);
    localStorage.setItem('nexustore-cookie-preferences', JSON.stringify(newPreferences));
  };

  const acceptAllCookies = () => {
    const allAccepted = {
      essential: true,
      performance: true,
      functional: true,
      marketing: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('nexustore-cookie-preferences', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptEssentialOnly = () => {
    const essentialOnly = {
      essential: true,
      performance: false,
      functional: false,
      marketing: false
    };
    setCookiePreferences(essentialOnly);
    localStorage.setItem('nexustore-cookie-preferences', JSON.stringify(essentialOnly));
    setShowBanner(false);
  };

  const cookieCategories = [
    {
      id: 'essential',
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off',
      purpose: 'Enable core functionality like authentication, shopping cart, and security features',
      duration: 'Session to 1 year',
      canOptOut: false,
      examples: [
        'User authentication tokens',
        'Shopping cart contents',
        'Security and fraud prevention',
        'Session management',
        'CSRF protection tokens',
        'Load balancing cookies'
      ],
      cookies: [
        { name: 'nexustore-auth-token', purpose: 'User authentication', duration: '30 days', type: 'HTTP' },
        { name: 'nexustore-cart', purpose: 'Shopping cart persistence', duration: '7 days', type: 'Local Storage' },
        { name: 'nexustore-session', purpose: 'Session management', duration: 'Session', type: 'HTTP' },
        { name: 'XSRF-TOKEN', purpose: 'CSRF protection', duration: 'Session', type: 'HTTP' }
      ]
    },
    {
      id: 'performance',
      name: 'Performance Cookies',
      icon: BarChart3,
      description: 'These cookies help us understand how visitors interact with our website',
      purpose: 'Collect anonymous information about website usage to improve performance',
      duration: '1 month to 2 years',
      canOptOut: true,
      examples: [
        'Page load times and errors',
        'Popular pages and features',
        'User journey analytics',
        'Performance monitoring',
        'Error tracking and debugging',
        'A/B testing data'
      ],
      cookies: [
        { name: '_ga', purpose: 'Google Analytics tracking', duration: '2 years', type: 'HTTP' },
        { name: '_gid', purpose: 'Google Analytics session', duration: '24 hours', type: 'HTTP' },
        { name: 'nexustore-analytics', purpose: 'Internal analytics', duration: '1 year', type: 'Local Storage' },
        { name: 'performance-metrics', purpose: 'Performance monitoring', duration: '30 days', type: 'Local Storage' }
      ]
    },
    {
      id: 'functional',
      name: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization',
      purpose: 'Remember your preferences and provide personalized features',
      duration: '1 month to 1 year',
      canOptOut: true,
      examples: [
        'Language and region preferences',
        'Display settings and themes',
        'Recently viewed products',
        'Wishlist and favorites',
        'Search history and filters',
        'Notification preferences'
      ],
      cookies: [
        { name: 'nexustore-preferences', purpose: 'User preferences', duration: '1 year', type: 'Local Storage' },
        { name: 'nexustore-wishlist', purpose: 'Wishlist items', duration: '6 months', type: 'Local Storage' },
        { name: 'search-history', purpose: 'Search history', duration: '3 months', type: 'Local Storage' },
        { name: 'theme-preference', purpose: 'UI theme settings', duration: '1 year', type: 'Local Storage' }
      ]
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      icon: Target,
      description: 'These cookies are used to deliver relevant advertisements and track campaign effectiveness',
      purpose: 'Show personalized ads and measure marketing campaign performance',
      duration: '1 month to 13 months',
      canOptOut: true,
      examples: [
        'Personalized advertisements',
        'Social media integration',
        'Campaign tracking and attribution',
        'Retargeting and remarketing',
        'Conversion tracking',
        'Cross-device tracking'
      ],
      cookies: [
        { name: '_fbp', purpose: 'Facebook Pixel tracking', duration: '3 months', type: 'HTTP' },
        { name: 'nexustore-marketing', purpose: 'Marketing campaigns', duration: '6 months', type: 'Local Storage' },
        { name: 'ad-preferences', purpose: 'Ad personalization', duration: '13 months', type: 'HTTP' },
        { name: 'conversion-tracking', purpose: 'Conversion attribution', duration: '30 days', type: 'HTTP' }
      ]
    }
  ];

  const trackingTechnologies = [
    {
      technology: 'HTTP Cookies',
      icon: Cookie,
      description: 'Small text files stored by your browser',
      purpose: 'Session management, user preferences, and tracking',
      dataCollected: 'User ID, session data, preferences, tracking identifiers',
      retention: 'Session to 2 years depending on cookie type',
      control: 'Browser settings, cookie preferences'
    },
    {
      technology: 'Local Storage',
      icon: Database,
      description: 'Browser storage for larger amounts of data',
      purpose: 'Offline functionality, user preferences, application data',
      dataCollected: 'Shopping cart, user settings, cached data, form data',
      retention: 'Until manually cleared or storage limit reached',
      control: 'Browser developer tools, clear site data'
    },
    {
      technology: 'Session Storage',
      icon: Clock,
      description: 'Temporary storage that expires when tab is closed',
      purpose: 'Temporary data storage for single session',
      dataCollected: 'Form data, temporary preferences, session state',
      retention: 'Until browser tab is closed',
      control: 'Automatically cleared on tab close'
    },
    {
      technology: 'Web Beacons',
      icon: Eye,
      description: 'Invisible tracking pixels in emails and web pages',
      purpose: 'Email open tracking, page view analytics',
      dataCollected: 'Email opens, page views, user behavior',
      retention: 'Real-time tracking, no persistent storage',
      control: 'Email client settings, ad blockers'
    },
    {
      technology: 'Fingerprinting',
      icon: Fingerprint,
      description: 'Device and browser characteristic collection',
      purpose: 'Fraud prevention, analytics, user identification',
      dataCollected: 'Browser type, screen resolution, installed plugins',
      retention: 'Session-based, used for immediate analysis',
      control: 'Browser privacy settings, extensions'
    },
    {
      technology: 'Analytics Scripts',
      icon: TrendingUp,
      description: 'Third-party analytics and tracking scripts',
      purpose: 'Website analytics, user behavior tracking',
      dataCollected: 'Page views, user interactions, conversion data',
      retention: 'Varies by provider (typically 14 months to 2 years)',
      control: 'Cookie preferences, script blockers'
    }
  ];

  const thirdPartyServices = [
    {
      service: 'Google Analytics',
      provider: 'Google LLC',
      purpose: 'Website analytics and user behavior tracking',
      dataShared: 'Page views, user interactions, demographic data',
      cookies: ['_ga', '_gid', '_gat'],
      optOut: 'Google Analytics Opt-out Browser Add-on',
      privacyPolicy: 'https://policies.google.com/privacy'
    },
    {
      service: 'Facebook Pixel',
      provider: 'Meta Platforms Inc.',
      purpose: 'Advertising and conversion tracking',
      dataShared: 'Page views, purchases, user actions',
      cookies: ['_fbp', '_fbc', 'fr'],
      optOut: 'Facebook Ad Preferences',
      privacyPolicy: 'https://www.facebook.com/privacy/policy'
    },
    {
      service: 'Payment Processors',
      provider: 'PayPal, Stripe, Local Gateways',
      purpose: 'Secure payment processing and fraud prevention',
      dataShared: 'Transaction data, payment information',
      cookies: ['PayPal session cookies', 'Stripe analytics'],
      optOut: 'Required for payment processing',
      privacyPolicy: 'Respective provider privacy policies'
    },
    {
      service: 'Customer Support',
      provider: 'Live Chat Services',
      purpose: 'Customer service and support functionality',
      dataShared: 'Chat history, support interactions',
      cookies: ['Support session cookies', 'Chat preferences'],
      optOut: 'Disable live chat features',
      privacyPolicy: 'Provider-specific privacy policies'
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-50 p-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start space-x-3">
                  <Cookie className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">We use cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      We use cookies to enhance your browsing experience, provide personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="outline" size="sm" onClick={acceptEssentialOnly}>
                  Essential Only
                </Button>
                <Button size="sm" onClick={acceptAllCookies}>
                  Accept All
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="#cookie-settings">Customize</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Cookie className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Cookie Policy
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Learn about how NexuStore uses cookies and similar technologies to enhance your 
              shopping experience and provide personalized services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#cookie-types">Cookie Types</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#cookie-settings">Manage Preferences</Link>
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
            <TabsTrigger value="types">Cookie Types</TabsTrigger>
            <TabsTrigger value="technologies">Technologies</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Cookie Policy Overview
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding how NexuStore uses cookies and similar technologies to improve your experience
              </p>
            </div>

            {/* What are Cookies */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">What are Cookies?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Cookie className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Small Text Files</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Cookies are small text files stored on your device when you visit our website,
                      containing information about your preferences and activities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Enhance Functionality</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      They help us remember your preferences, keep you logged in, maintain your
                      shopping cart, and provide personalized experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Your Control</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      You have full control over cookies through your browser settings and our
                      cookie preference center to manage your privacy.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Why We Use Cookies */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Why We Use Cookies</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <ShoppingCart className="w-6 h-6 text-primary" />
                      Essential Functions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Keep items in your shopping cart</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Remember your login status</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Provide secure authentication</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Prevent fraud and security threats</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Heart className="w-6 h-6 text-primary" />
                      Personalization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Remember your preferences and settings</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Show relevant product recommendations</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Customize your shopping experience</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <span className="text-sm text-muted-foreground">Display content in your preferred language</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Cookie Categories Summary */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Cookie Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Essential</h4>
                    <p className="text-xs text-muted-foreground mb-2">Required for basic functionality</p>
                    <Badge variant="destructive" className="text-xs">Always Active</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Performance</h4>
                    <p className="text-xs text-muted-foreground mb-2">Analytics and optimization</p>
                    <Badge variant="secondary" className="text-xs">Optional</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Settings className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Functional</h4>
                    <p className="text-xs text-muted-foreground mb-2">Enhanced features and preferences</p>
                    <Badge variant="secondary" className="text-xs">Optional</Badge>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <Target className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Marketing</h4>
                    <p className="text-xs text-muted-foreground mb-2">Advertising and tracking</p>
                    <Badge variant="secondary" className="text-xs">Optional</Badge>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Your Cookie Rights</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">What You Can Do</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm text-muted-foreground">Accept or reject optional cookies</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm text-muted-foreground">Change your preferences at any time</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm text-muted-foreground">Delete cookies through browser settings</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                          <span className="text-sm text-muted-foreground">Opt out of third-party tracking</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Important Notes</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                          <span className="text-sm text-muted-foreground">Essential cookies cannot be disabled</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                          <span className="text-sm text-muted-foreground">Disabling cookies may affect functionality</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Info className="w-4 h-4 text-blue-500 mt-1" />
                          <span className="text-sm text-muted-foreground">Your preferences are saved locally</span>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Info className="w-4 h-4 text-blue-500 mt-1" />
                          <span className="text-sm text-muted-foreground">Changes take effect immediately</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Cookie Types Tab */}
          <TabsContent value="types" className="space-y-8" id="cookie-types">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Cookie Types & Details
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Detailed information about each type of cookie we use and their specific purposes
              </p>
            </div>

            {/* Cookie Categories */}
            <section className="space-y-8">
              {cookieCategories.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">{category.name}</h3>
                          <Badge variant={category.canOptOut ? "secondary" : "destructive"} className="text-xs">
                            {category.canOptOut ? "Optional" : "Required"}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{category.description}</p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-medium text-foreground mb-3">Purpose:</h4>
                            <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                              {category.purpose}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground mb-3">Duration:</h4>
                            <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
                              {category.duration}
                            </p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-medium text-foreground mb-3">Examples:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {category.examples.map((example, exampleIndex) => (
                              <div key={exampleIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{example}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-3">Specific Cookies:</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-2 font-medium text-foreground">Cookie Name</th>
                                  <th className="text-left py-2 font-medium text-foreground">Purpose</th>
                                  <th className="text-left py-2 font-medium text-foreground">Duration</th>
                                  <th className="text-left py-2 font-medium text-foreground">Type</th>
                                </tr>
                              </thead>
                              <tbody>
                                {category.cookies.map((cookie, cookieIndex) => (
                                  <tr key={cookieIndex} className="border-b">
                                    <td className="py-2 text-muted-foreground font-mono text-xs">{cookie.name}</td>
                                    <td className="py-2 text-muted-foreground">{cookie.purpose}</td>
                                    <td className="py-2 text-muted-foreground">{cookie.duration}</td>
                                    <td className="py-2">
                                      <Badge variant="outline" className="text-xs">{cookie.type}</Badge>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* Third Party Services */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Third-Party Services</h3>
              <div className="space-y-4">
                {thirdPartyServices.map((service, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{service.service}</h4>
                          <p className="text-sm text-muted-foreground">{service.provider}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground mb-2 text-sm">Purpose:</h5>
                          <p className="text-sm text-muted-foreground">{service.purpose}</p>
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground mb-2 text-sm">Cookies:</h5>
                          <div className="flex flex-wrap gap-1">
                            {service.cookies.map((cookie, cookieIndex) => (
                              <Badge key={cookieIndex} variant="outline" className="text-xs font-mono">
                                {cookie}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-medium text-foreground mb-2 text-sm">Opt-Out:</h5>
                          <p className="text-xs text-muted-foreground">{service.optOut}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Technologies Tab */}
          <TabsContent value="technologies" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Tracking Technologies
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Understanding the various technologies we use to collect and store information
              </p>
            </div>

            {/* Tracking Technologies */}
            <section className="space-y-6">
              {trackingTechnologies.map((tech, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <tech.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{tech.technology}</h3>
                        <p className="text-muted-foreground mb-4">{tech.description}</p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-foreground mb-2">Purpose:</h4>
                              <p className="text-sm text-muted-foreground">{tech.purpose}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground mb-2">Data Collected:</h4>
                              <p className="text-sm text-muted-foreground">{tech.dataCollected}</p>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-foreground mb-2">Retention:</h4>
                              <p className="text-sm text-muted-foreground">{tech.retention}</p>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground mb-2">Your Control:</h4>
                              <p className="text-sm text-muted-foreground">{tech.control}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* Browser Controls */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Browser Controls</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-primary" />
                      Chrome
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Settings → Privacy and security → Cookies and other site data
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Chrome Settings
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-primary" />
                      Firefox
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Options → Privacy & Security → Cookies and Site Data
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Firefox Settings
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-primary" />
                      Safari
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Preferences → Privacy → Manage Website Data
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      Safari Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-8" id="cookie-settings">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Cookie Preferences
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Customize your cookie preferences to control how we collect and use your data
              </p>
            </div>

            {/* Cookie Preferences */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Manage Your Preferences</h3>
              <div className="space-y-6">
                {cookieCategories.map((category, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                            <category.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="font-semibold text-foreground">{category.name}</h4>
                              {!category.canOptOut && (
                                <Badge variant="destructive" className="text-xs">Required</Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                            <p className="text-xs text-muted-foreground">{category.purpose}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <Switch
                            checked={cookiePreferences[category.id as keyof typeof cookiePreferences]}
                            onCheckedChange={(checked) => handlePreferenceChange(category.id as keyof typeof cookiePreferences, checked)}
                            disabled={!category.canOptOut}
                          />
                          <Label className="text-sm">
                            {cookiePreferences[category.id as keyof typeof cookiePreferences] ? 'Enabled' : 'Disabled'}
                          </Label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Accept All</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Enable all cookie categories for the best experience
                    </p>
                    <Button onClick={acceptAllCookies} className="w-full">
                      Accept All Cookies
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Essential Only</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Only enable cookies required for basic functionality
                    </p>
                    <Button variant="outline" onClick={acceptEssentialOnly} className="w-full">
                      Essential Only
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <Trash2 className="w-8 h-8 text-red-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Clear Data</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Clear all stored cookies and reset preferences
                    </p>
                    <Button variant="destructive" className="w-full">
                      Clear All Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Current Status */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Current Status</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        cookiePreferences.essential ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <Shield className={`w-6 h-6 ${cookiePreferences.essential ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <h4 className="font-medium text-foreground">Essential</h4>
                      <p className="text-sm text-muted-foreground">Always Active</p>
                    </div>

                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        cookiePreferences.performance ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <BarChart3 className={`w-6 h-6 ${cookiePreferences.performance ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <h4 className="font-medium text-foreground">Performance</h4>
                      <p className="text-sm text-muted-foreground">
                        {cookiePreferences.performance ? 'Active' : 'Inactive'}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        cookiePreferences.functional ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <Settings className={`w-6 h-6 ${cookiePreferences.functional ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <h4 className="font-medium text-foreground">Functional</h4>
                      <p className="text-sm text-muted-foreground">
                        {cookiePreferences.functional ? 'Active' : 'Inactive'}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                        cookiePreferences.marketing ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        <Target className={`w-6 h-6 ${cookiePreferences.marketing ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>
                      <h4 className="font-medium text-foreground">Marketing</h4>
                      <p className="text-sm text-muted-foreground">
                        {cookiePreferences.marketing ? 'Active' : 'Inactive'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Additional Information */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Additional Information</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Info className="w-6 h-6 text-primary" />
                      Important Notes
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Changes to cookie preferences take effect immediately
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Disabling cookies may affect website functionality
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Info className="w-4 h-4 text-blue-500 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Your preferences are stored locally on your device
                      </span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Info className="w-4 h-4 text-blue-500 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        Essential cookies cannot be disabled for security reasons
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <HelpCircle className="w-6 h-6 text-primary" />
                      Need Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      If you have questions about our cookie policy or need assistance
                      with your preferences, our support team is here to help.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        Contact Support
                      </Button>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link to="/privacy">View Privacy Policy</Link>
                      </Button>
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

export default CookiePolicy;
