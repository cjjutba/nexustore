import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Building, 
  Globe, 
  Award,
  BarChart3,
  PieChart,
  Calendar,
  Download,
  FileText,
  Mail,
  Phone,
  Target,
  Zap,
  Shield,
  Heart,
  Package,
  MapPin,
  Clock,
  CheckCircle,
  ArrowUp,
  ArrowDown,
  Briefcase,
  LineChart,
  Activity,
  Percent,
  Star,
  Trophy,
  Rocket,
  Eye,
  BookOpen,
  Calculator,
  CreditCard,
  Truck,
  Headphones
} from 'lucide-react';
import { useScrollToTop } from '@/utils/scrollToTop';

const Investors = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const [selectedPeriod, setSelectedPeriod] = useState('Q4 2024');

  const financialHighlights = [
    {
      metric: "Revenue",
      value: "₱2.8B",
      change: "+145%",
      trend: "up",
      period: "FY 2024",
      description: "Year-over-year revenue growth"
    },
    {
      metric: "Gross Merchandise Value",
      value: "₱12.5B",
      change: "+180%",
      trend: "up",
      period: "FY 2024",
      description: "Total value of goods sold"
    },
    {
      metric: "Active Users",
      value: "2.1M",
      change: "+95%",
      trend: "up",
      period: "Q4 2024",
      description: "Monthly active users"
    },
    {
      metric: "Order Volume",
      value: "8.2M",
      change: "+120%",
      trend: "up",
      period: "FY 2024",
      description: "Total orders processed"
    },
    {
      metric: "Average Order Value",
      value: "₱1,524",
      change: "+25%",
      trend: "up",
      period: "Q4 2024",
      description: "Per transaction value"
    },
    {
      metric: "Market Share",
      value: "12.8%",
      change: "+4.2%",
      trend: "up",
      period: "2024",
      description: "Philippine e-commerce market"
    }
  ];

  const businessSegments = [
    {
      name: "Marketplace Revenue",
      value: "₱1.68B",
      percentage: 60,
      growth: "+155%",
      description: "Commission from third-party sellers"
    },
    {
      name: "Direct Sales",
      value: "₱840M",
      percentage: 30,
      growth: "+125%",
      description: "First-party product sales"
    },
    {
      name: "Premium Services",
      value: "₱196M",
      percentage: 7,
      growth: "+200%",
      description: "Membership and premium features"
    },
    {
      name: "Advertising",
      value: "₱84M",
      percentage: 3,
      growth: "+300%",
      description: "Sponsored products and ads"
    }
  ];

  const keyMetrics = [
    {
      category: "Growth Metrics",
      metrics: [
        { name: "Revenue Growth (YoY)", value: "145%", icon: TrendingUp },
        { name: "User Growth (YoY)", value: "95%", icon: Users },
        { name: "Order Growth (YoY)", value: "120%", icon: Package },
        { name: "GMV Growth (YoY)", value: "180%", icon: DollarSign }
      ]
    },
    {
      category: "Operational Metrics",
      metrics: [
        { name: "Customer Satisfaction", value: "98%", icon: Heart },
        { name: "Delivery Success Rate", value: "99.2%", icon: Truck },
        { name: "Platform Uptime", value: "99.9%", icon: Shield },
        { name: "Mobile App Rating", value: "4.8/5", icon: Star }
      ]
    },
    {
      category: "Market Position",
      metrics: [
        { name: "Market Share", value: "12.8%", icon: Target },
        { name: "Brand Recognition", value: "85%", icon: Award },
        { name: "Cities Covered", value: "100+", icon: MapPin },
        { name: "Partner Brands", value: "10K+", icon: Building }
      ]
    }
  ];

  const investmentHighlights = [
    {
      title: "Market Leadership",
      description: "Rapidly growing market share in the Philippine e-commerce sector with strong competitive positioning",
      icon: Trophy,
      metrics: ["12.8% market share", "2M+ active users", "100+ cities served"]
    },
    {
      title: "Technology Innovation",
      description: "AI-powered platform with advanced recommendation engine and mobile-first approach",
      icon: Zap,
      metrics: ["AI recommendations", "Mobile app 4.8/5 rating", "99.9% uptime"]
    },
    {
      title: "Diversified Revenue",
      description: "Multiple revenue streams including marketplace, direct sales, premium services, and advertising",
      icon: PieChart,
      metrics: ["4 revenue streams", "₱2.8B total revenue", "Strong unit economics"]
    },
    {
      title: "Scalable Operations",
      description: "Efficient logistics network and technology infrastructure supporting rapid expansion",
      icon: Rocket,
      metrics: ["99.2% delivery success", "Same-day delivery", "Automated fulfillment"]
    }
  ];

  const financialReports = [
    {
      title: "Q4 2024 Earnings Report",
      type: "Quarterly Report",
      date: "2025-01-15",
      size: "2.4 MB",
      format: "PDF"
    },
    {
      title: "Annual Report 2024",
      type: "Annual Report",
      date: "2024-12-31",
      size: "8.7 MB",
      format: "PDF"
    },
    {
      title: "Q3 2024 Financial Results",
      type: "Quarterly Report",
      date: "2024-10-15",
      size: "2.1 MB",
      format: "PDF"
    },
    {
      title: "Investor Presentation Q4 2024",
      type: "Presentation",
      date: "2025-01-15",
      size: "15.2 MB",
      format: "PDF"
    },
    {
      title: "ESG Report 2024",
      type: "Sustainability Report",
      date: "2024-12-20",
      size: "5.8 MB",
      format: "PDF"
    }
  ];

  const upcomingEvents = [
    {
      title: "Q1 2025 Earnings Call",
      date: "2025-04-15",
      time: "2:00 PM PHT",
      type: "Earnings Call",
      description: "Quarterly financial results and business update"
    },
    {
      title: "Philippine Investment Summit",
      date: "2025-03-20",
      time: "9:00 AM PHT",
      type: "Conference",
      description: "Keynote presentation on e-commerce growth in Southeast Asia"
    },
    {
      title: "Annual Shareholders Meeting",
      date: "2025-05-10",
      time: "10:00 AM PHT",
      type: "AGM",
      description: "Annual general meeting for shareholders and stakeholders"
    }
  ];

  const investorContacts = [
    {
      name: "Roberto Fernandez",
      title: "Chief Financial Officer",
      email: "cfo@nexustore.ph",
      phone: "(02) 8123-CFO1",
      specialties: ["Financial Performance", "Strategic Planning", "Investor Relations"]
    },
    {
      name: "Patricia Gonzales",
      title: "Head of Investor Relations",
      email: "ir@nexustore.ph",
      phone: "(02) 8123-IR01",
      specialties: ["Investor Communications", "Financial Reporting", "Stakeholder Relations"]
    },
    {
      name: "Michael Chen",
      title: "VP of Corporate Development",
      email: "corpdev@nexustore.ph",
      phone: "(02) 8123-CORP",
      specialties: ["Strategic Partnerships", "M&A", "Business Development"]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <BarChart3 className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Investor Relations
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover NexuStore's strong financial performance, growth trajectory, and investment 
              opportunities in the Philippines' rapidly expanding e-commerce market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#financial-highlights">Financial Highlights</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#reports">Financial Reports</Link>
              </Button>
            </div>

            {/* Key Financial Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">₱2.8B</div>
                <p className="text-white/80 text-sm">Revenue FY 2024</p>
                <div className="flex items-center justify-center mt-1">
                  <ArrowUp className="w-3 h-3 text-green-300 mr-1" />
                  <span className="text-green-300 text-xs">+145%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">₱12.5B</div>
                <p className="text-white/80 text-sm">GMV FY 2024</p>
                <div className="flex items-center justify-center mt-1">
                  <ArrowUp className="w-3 h-3 text-green-300 mr-1" />
                  <span className="text-green-300 text-xs">+180%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2.1M</div>
                <p className="text-white/80 text-sm">Active Users</p>
                <div className="flex items-center justify-center mt-1">
                  <ArrowUp className="w-3 h-3 text-green-300 mr-1" />
                  <span className="text-green-300 text-xs">+95%</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">12.8%</div>
                <p className="text-white/80 text-sm">Market Share</p>
                <div className="flex items-center justify-center mt-1">
                  <ArrowUp className="w-3 h-3 text-green-300 mr-1" />
                  <span className="text-green-300 text-xs">+4.2%</span>
                </div>
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
            <TabsTrigger value="financials">Financials</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="events">Events & IR</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Investment Overview
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                NexuStore represents a compelling investment opportunity in the Philippine e-commerce market
              </p>
            </div>

            {/* Financial Highlights */}
            <section id="financial-highlights" className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Financial Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {financialHighlights.map((highlight, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-medium text-foreground">{highlight.metric}</h4>
                        <Badge variant="outline" className="text-xs">
                          {highlight.period}
                        </Badge>
                      </div>

                      <div className="flex items-end space-x-2 mb-2">
                        <span className="text-2xl font-bold text-foreground">{highlight.value}</span>
                        <div className={`flex items-center text-sm ${
                          highlight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {highlight.trend === 'up' ? (
                            <ArrowUp className="w-4 h-4 mr-1" />
                          ) : (
                            <ArrowDown className="w-4 h-4 mr-1" />
                          )}
                          {highlight.change}
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Investment Highlights */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Investment Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {investmentHighlights.map((highlight, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <highlight.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-foreground mb-3">
                            {highlight.title}
                          </h4>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                            {highlight.description}
                          </p>
                          <div className="space-y-1">
                            {highlight.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="flex items-center text-sm">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                                <span className="text-muted-foreground">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Business Segments */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Revenue Breakdown by Segment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessSegments.map((segment, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <div className="relative w-20 h-20 mx-auto mb-4">
                          <div className="w-full h-full rounded-full border-4 border-muted relative">
                            <div
                              className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-primary"
                              style={{
                                clipPath: `polygon(50% 50%, 50% 0%, ${50 + (segment.percentage / 100) * 50}% 0%, 100% 100%, 0% 100%)`
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-sm font-bold text-foreground">{segment.percentage}%</span>
                            </div>
                          </div>
                        </div>

                        <h4 className="font-semibold text-foreground mb-2">{segment.name}</h4>
                        <div className="text-xl font-bold text-primary mb-1">{segment.value}</div>
                        <div className="flex items-center justify-center text-sm text-green-600">
                          <ArrowUp className="w-3 h-3 mr-1" />
                          {segment.growth}
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">{segment.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Key Metrics */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Key Performance Metrics</h3>
              <div className="space-y-8">
                {keyMetrics.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h4 className="font-medium text-foreground mb-4">{category.category}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {category.metrics.map((metric, metricIndex) => (
                        <Card key={metricIndex} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                          <CardContent className="p-4 text-center">
                            <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                              <metric.icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="text-lg font-bold text-foreground mb-1">{metric.value}</div>
                            <p className="text-xs text-muted-foreground">{metric.name}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Financials Tab */}
          <TabsContent value="financials" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Financial Performance
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Detailed financial metrics and performance indicators demonstrating strong growth
              </p>
            </div>

            {/* Period Selector */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Financial Period</h3>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  >
                    <option value="Q4 2024">Q4 2024</option>
                    <option value="Q3 2024">Q3 2024</option>
                    <option value="Q2 2024">Q2 2024</option>
                    <option value="Q1 2024">Q1 2024</option>
                    <option value="FY 2024">FY 2024</option>
                    <option value="FY 2023">FY 2023</option>
                  </select>
                </div>
              </CardContent>
            </Card>

            {/* Revenue Analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <LineChart className="w-6 h-6 text-primary" />
                    Revenue Growth Trend
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">FY 2024</span>
                      <span className="font-semibold text-foreground">₱2.8B</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">FY 2023</span>
                      <span className="font-semibold text-foreground">₱1.14B</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary/70 h-2 rounded-full" style={{ width: '41%' }}></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">FY 2022</span>
                      <span className="font-semibold text-foreground">₱485M</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary/50 h-2 rounded-full" style={{ width: '17%' }}></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">3-Year CAGR</span>
                      <span className="font-bold text-green-600">142%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Activity className="w-6 h-6 text-primary" />
                    Key Financial Ratios
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-foreground mb-1">23.5%</div>
                      <p className="text-sm text-muted-foreground">Gross Margin</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-foreground mb-1">8.2%</div>
                      <p className="text-sm text-muted-foreground">EBITDA Margin</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-foreground mb-1">₱1,524</div>
                      <p className="text-sm text-muted-foreground">Avg Order Value</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="text-2xl font-bold text-foreground mb-1">₱285</div>
                      <p className="text-sm text-muted-foreground">Customer LTV</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Take Rate</span>
                      <span className="font-medium text-foreground">13.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Customer Acquisition Cost</span>
                      <span className="font-medium text-foreground">₱125</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Monthly Churn Rate</span>
                      <span className="font-medium text-foreground">2.1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Unit Economics */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Calculator className="w-6 h-6 text-primary" />
                  Unit Economics & Profitability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Customer Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Customer Lifetime Value</span>
                        <span className="font-medium text-foreground">₱2,850</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Customer Acquisition Cost</span>
                        <span className="font-medium text-foreground">₱125</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">LTV/CAC Ratio</span>
                        <span className="font-bold text-green-600">22.8x</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Payback Period</span>
                        <span className="font-medium text-foreground">3.2 months</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Order Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Average Order Value</span>
                        <span className="font-medium text-foreground">₱1,524</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Orders per Customer/Year</span>
                        <span className="font-medium text-foreground">8.5</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Gross Margin per Order</span>
                        <span className="font-medium text-foreground">₱358</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Fulfillment Cost per Order</span>
                        <span className="font-medium text-foreground">₱95</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Platform Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Take Rate</span>
                        <span className="font-medium text-foreground">13.4%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Contribution Margin</span>
                        <span className="font-medium text-foreground">17.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Variable Cost Ratio</span>
                        <span className="font-medium text-foreground">76.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Fixed Cost Coverage</span>
                        <span className="font-bold text-green-600">285%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-8" id="reports">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Financial Reports & Documents
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Access our latest financial reports, earnings presentations, and regulatory filings
              </p>
            </div>

            {/* Financial Reports */}
            <div className="space-y-6">
              {financialReports.map((report, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-2">
                            {report.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                            <Badge variant="outline" className="text-xs">
                              {report.type}
                            </Badge>
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {new Date(report.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                            <span>{report.size}</span>
                            <span>{report.format}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-1" />
                          Preview
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* SEC Filings */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  SEC Filings & Regulatory Documents
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  All regulatory filings and compliance documents are available through the
                  Securities and Exchange Commission of the Philippines (SEC) and our investor portal.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Recent Filings</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Form 17-A (Annual Report)</span>
                        <span className="text-primary cursor-pointer hover:underline">View</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Form 17-Q (Quarterly Report)</span>
                        <span className="text-primary cursor-pointer hover:underline">View</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Form 20-IS (Information Statement)</span>
                        <span className="text-primary cursor-pointer hover:underline">View</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Corporate Governance</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Board Charter</span>
                        <span className="text-primary cursor-pointer hover:underline">View</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Audit Committee Charter</span>
                        <span className="text-primary cursor-pointer hover:underline">View</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Code of Ethics</span>
                        <span className="text-primary cursor-pointer hover:underline">View</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Alerts */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Stay Updated with Financial Reports
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Subscribe to receive automatic notifications when new financial reports,
                  earnings releases, and SEC filings are published.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events & IR Tab */}
          <TabsContent value="events" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Events & Investor Relations
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Connect with our investor relations team and stay informed about upcoming events
              </p>
            </div>

            {/* Upcoming Events */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Upcoming Events</h3>
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                            <Calendar className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg text-foreground mb-2">
                              {event.title}
                            </h4>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                              <Badge variant="outline" className="text-xs">
                                {event.type}
                              </Badge>
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(event.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {event.time}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-sm">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Button variant="outline" size="sm">
                            Add to Calendar
                          </Button>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                            Register
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Investor Contacts */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Investor Relations Team</h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {investorContacts.map((contact, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-primary font-bold text-lg">
                          {contact.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>

                      <h4 className="font-bold text-lg text-foreground mb-1">
                        {contact.name}
                      </h4>
                      <p className="text-primary font-medium mb-4">
                        {contact.title}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <Mail className="w-4 h-4" />
                          <a href={`mailto:${contact.email}`} className="hover:text-primary transition-colors">
                            {contact.email}
                          </a>
                        </div>
                        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <Phone className="w-4 h-4" />
                          <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                            {contact.phone}
                          </a>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-foreground mb-2 text-sm">Specialties</h5>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {contact.specialties.map((specialty, specialtyIndex) => (
                            <Badge key={specialtyIndex} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Interested in Learning More?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our investor relations team is available to answer questions about our
                  financial performance, business strategy, and investment opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Contact Investor Relations
                  </Button>
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    Schedule a Call
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

export default Investors;
