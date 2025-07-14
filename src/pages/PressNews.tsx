import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Newspaper, 
  Calendar, 
  Eye, 
  Download, 
  Share2, 
  Search,
  Award,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Building,
  Phone,
  Mail,
  Camera,
  Mic,
  Video,
  FileText,
  ExternalLink,
  Clock,
  Tag,
  Star,
  Trophy,
  Rocket,
  Target,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Briefcase
} from 'lucide-react';
import { useScrollToTop } from '@/utils/scrollToTop';

const PressNews = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const pressReleases = [
    {
      id: 1,
      title: "NexuStore Reaches 2 Million Active Users Milestone in the Philippines",
      excerpt: "Leading e-commerce platform celebrates significant growth with enhanced AI-powered shopping experience and expanded nationwide delivery coverage.",
      date: "2025-01-10",
      category: "Company News",
      readTime: "3 min read",
      views: 2450,
      featured: true,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
      content: "NexuStore, the Philippines' fastest-growing e-commerce platform, today announced it has reached 2 million active users nationwide, marking a significant milestone in the company's mission to democratize access to quality products across the archipelago."
    },
    {
      id: 2,
      title: "NexuStore Launches AI-Powered Personalized Shopping Experience",
      excerpt: "Revolutionary recommendation engine delivers tailored product suggestions, improving customer satisfaction by 40% and driving enhanced shopping experiences.",
      date: "2024-12-15",
      category: "Technology",
      readTime: "4 min read",
      views: 1890,
      featured: true,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600",
      content: "NexuStore introduces cutting-edge artificial intelligence technology to transform online shopping with personalized product recommendations and smart search capabilities."
    },
    {
      id: 3,
      title: "NexuStore Wins 'E-commerce Platform of the Year' at Philippine Digital Awards 2024",
      excerpt: "Recognition highlights NexuStore's commitment to innovation, customer service excellence, and contribution to the Philippine digital economy.",
      date: "2024-11-20",
      category: "Awards",
      readTime: "2 min read",
      views: 3200,
      featured: false,
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600",
      content: "NexuStore receives prestigious industry recognition for outstanding performance in e-commerce innovation and customer satisfaction."
    },
    {
      id: 4,
      title: "NexuStore Expands Partnership Network with 10,000+ Global and Local Brands",
      excerpt: "Strategic partnerships bring premium international brands and support local Filipino businesses, offering customers unparalleled product variety and quality.",
      date: "2024-10-05",
      category: "Partnerships",
      readTime: "3 min read",
      views: 1650,
      featured: false,
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
      content: "NexuStore strengthens its marketplace ecosystem with expanded brand partnerships, supporting both global commerce and local entrepreneurship."
    },
    {
      id: 5,
      title: "NexuStore Introduces Same-Day Delivery Service in Metro Manila",
      excerpt: "Enhanced logistics capabilities now offer customers ultra-fast delivery options, setting new standards for e-commerce convenience in the Philippines.",
      date: "2024-09-18",
      category: "Services",
      readTime: "2 min read",
      views: 2100,
      featured: false,
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600",
      content: "NexuStore revolutionizes delivery speed with same-day service launch, enhancing customer convenience and satisfaction across Metro Manila."
    },
    {
      id: 6,
      title: "NexuStore Commits to Sustainable E-commerce with Green Packaging Initiative",
      excerpt: "Environmental responsibility program introduces eco-friendly packaging solutions and carbon-neutral delivery options across all operations.",
      date: "2024-08-22",
      category: "Sustainability",
      readTime: "4 min read",
      views: 1420,
      featured: false,
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600",
      content: "NexuStore leads environmental sustainability in Philippine e-commerce with comprehensive green packaging and carbon-neutral delivery initiatives."
    }
  ];

  const mediaKit = [
    {
      type: "Company Logo",
      description: "High-resolution NexuStore logos in various formats",
      formats: ["PNG", "SVG", "EPS"],
      size: "2.4 MB"
    },
    {
      type: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      formats: ["PDF"],
      size: "8.7 MB"
    },
    {
      type: "Executive Photos",
      description: "Professional headshots of leadership team",
      formats: ["JPG", "PNG"],
      size: "15.2 MB"
    },
    {
      type: "Product Images",
      description: "High-quality product photography and lifestyle shots",
      formats: ["JPG", "PNG"],
      size: "45.8 MB"
    },
    {
      type: "Company Fact Sheet",
      description: "Key statistics, milestones, and company information",
      formats: ["PDF", "DOCX"],
      size: "1.2 MB"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "E-commerce Platform of the Year",
      organization: "Philippine Digital Awards",
      description: "Recognition for outstanding innovation and customer service in e-commerce"
    },
    {
      year: "2024",
      title: "Best Customer Experience",
      organization: "Asia E-commerce Excellence Awards",
      description: "Awarded for exceptional customer satisfaction and support services"
    },
    {
      year: "2023",
      title: "Fastest Growing Startup",
      organization: "Philippine Startup Awards",
      description: "Recognized for rapid growth and market expansion achievements"
    },
    {
      year: "2023",
      title: "Innovation in Technology",
      organization: "Tech Philippines Awards",
      description: "Honored for AI-powered recommendation system and mobile app development"
    },
    {
      year: "2022",
      title: "Rising Star in E-commerce",
      organization: "Southeast Asia Business Awards",
      description: "Acknowledged for market disruption and customer-centric approach"
    }
  ];

  const mediaContacts = [
    {
      name: "Maria Santos",
      title: "Head of Communications",
      email: "media@nexustore.ph",
      phone: "(02) 8123-MEDIA",
      specialties: ["Company News", "Executive Interviews", "Strategic Announcements"]
    },
    {
      name: "Carlos Rodriguez",
      title: "Public Relations Manager",
      email: "pr@nexustore.ph",
      phone: "(02) 8123-4567",
      specialties: ["Product Launches", "Partnership News", "Industry Analysis"]
    },
    {
      name: "Ana Dela Cruz",
      title: "Digital Communications Specialist",
      email: "digital@nexustore.ph",
      phone: "(02) 8123-DIGI",
      specialties: ["Social Media", "Digital Campaigns", "Influencer Relations"]
    }
  ];

  const companyStats = [
    { label: "Active Users", value: "2M+", icon: Users },
    { label: "Partner Brands", value: "10K+", icon: Building },
    { label: "Cities Served", value: "100+", icon: Globe },
    { label: "Products Available", value: "500K+", icon: Tag },
    { label: "Customer Satisfaction", value: "98%", icon: Heart },
    { label: "Awards Won", value: "15+", icon: Trophy }
  ];

  const categories = ["All", "Company News", "Technology", "Awards", "Partnerships", "Services", "Sustainability"];

  const filteredPressReleases = pressReleases.filter(release => {
    const matchesSearch = release.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         release.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || release.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Newspaper className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Press & News
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and milestones from NexuStore. 
              Discover our journey in revolutionizing e-commerce in the Philippines.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#latest-news">Latest News</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#media-kit">Media Kit</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 p-2 rounded-lg w-fit mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <p className="text-white/80 text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 py-12 sm:py-16 lg:py-20">
        
        <Tabs defaultValue="news" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="media-kit">Media Kit</TabsTrigger>
            <TabsTrigger value="contacts">Media Contacts</TabsTrigger>
          </TabsList>

          {/* Latest News Tab */}
          <TabsContent value="news" className="space-y-8" id="latest-news">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Latest News & Press Releases
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Get the latest updates on NexuStore's growth, innovations, and industry impact
              </p>
            </div>

            {/* Search and Filter */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search news and press releases..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured News */}
            {filteredPressReleases.filter(release => release.featured).length > 0 && (
              <div className="mb-12">
                <h3 className="text-xl font-semibold text-foreground mb-6">Featured Stories</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredPressReleases.filter(release => release.featured).map((release) => (
                    <Card key={release.id} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img
                          src={release.image}
                          alt={release.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-4 left-4 bg-primary text-white">
                          Featured
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(release.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {release.category}
                          </Badge>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {release.readTime}
                          </span>
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                          {release.title}
                        </h3>

                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {release.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {release.views.toLocaleString()} views
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm">
                              <Share2 className="w-4 h-4 mr-1" />
                              Share
                            </Button>
                            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* All News */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">All Press Releases</h3>
              <div className="space-y-6">
                {filteredPressReleases.length === 0 ? (
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-12 text-center">
                      <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-foreground mb-2">No news found</h3>
                      <p className="text-muted-foreground">
                        Try adjusting your search criteria or check back later for new updates.
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  filteredPressReleases.map((release) => (
                    <Card key={release.id} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 space-y-4 lg:space-y-0">
                          <div className="lg:w-48 lg:flex-shrink-0">
                            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                              <img
                                src={release.image}
                                alt={release.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                              <span className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(release.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </span>
                              <Badge variant="outline" className="text-xs">
                                {release.category}
                              </Badge>
                              <span className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {release.readTime}
                              </span>
                              {release.featured && (
                                <Badge className="bg-primary text-white text-xs">
                                  Featured
                                </Badge>
                              )}
                            </div>

                            <h3 className="text-xl font-semibold text-foreground mb-3">
                              {release.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {release.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <span className="flex items-center">
                                  <Eye className="w-4 h-4 mr-1" />
                                  {release.views.toLocaleString()} views
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm">
                                  <Share2 className="w-4 h-4 mr-1" />
                                  Share
                                </Button>
                                <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                                  Read Full Article
                                  <ExternalLink className="w-4 h-4 ml-1" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Stay Updated with NexuStore News
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Subscribe to our press newsletter and be the first to know about our latest
                  announcements, product launches, and company milestones.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input placeholder="Enter your email address" className="flex-1" />
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Awards Tab */}
          <TabsContent value="awards" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Awards & Recognition
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Celebrating our achievements and industry recognition for excellence in e-commerce
              </p>
            </div>

            {/* Awards Timeline */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-muted hidden md:block"></div>

                <div className="space-y-8">
                  {awards.map((award, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      {/* Timeline Dot */}
                      <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        <Trophy className="w-6 h-6" />
                      </div>

                      {/* Content */}
                      <Card className="flex-1 border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                        <CardContent className="p-6 sm:p-8">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-foreground mb-2">
                                {award.title}
                              </h3>
                              <p className="text-primary font-semibold">
                                {award.organization}
                              </p>
                            </div>
                            <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                              {award.year}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {award.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recognition Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Awards Won</h3>
                  <p className="text-muted-foreground text-sm">
                    Industry recognition for excellence and innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">4.8/5</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Customer Rating</h3>
                  <p className="text-muted-foreground text-sm">
                    Consistently high customer satisfaction scores
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6 sm:p-8">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">98%</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Growth Rate</h3>
                  <p className="text-muted-foreground text-sm">
                    Year-over-year customer base expansion
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Media Kit Tab */}
          <TabsContent value="media-kit" className="space-y-8" id="media-kit">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Media Kit & Resources
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Download high-quality assets, brand guidelines, and company information for media coverage
              </p>
            </div>

            {/* Media Kit Downloads */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {mediaKit.map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground mb-2">
                          {item.type}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>Formats: {item.formats.join(', ')}</span>
                            <span>•</span>
                            <span>{item.size}</span>
                          </div>
                          <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Usage Guidelines */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  Usage Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Permitted Uses</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Editorial and news coverage about NexuStore
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Educational and research purposes
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Industry analysis and reports
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        Partnership and collaboration materials
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Requirements</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Maintain original proportions and colors
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Provide proper attribution to NexuStore
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Use high-resolution versions for print
                      </li>
                      <li className="flex items-start">
                        <Target className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        Contact us for custom requirements
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Custom Assets */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Camera className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Need Custom Assets?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Looking for specific images, interviews, or custom materials?
                  Our media team is here to help with your coverage needs.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Contact Media Team
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Contacts Tab */}
          <TabsContent value="contacts" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Media Contacts
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Connect with our media relations team for interviews, statements, and press inquiries
              </p>
            </div>

            {/* Media Contacts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {mediaContacts.map((contact, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-lg">
                        {contact.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {contact.name}
                    </h3>
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
                      <h4 className="font-medium text-foreground mb-2 text-sm">Specialties</h4>
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

            {/* Contact Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-primary" />
                    General Media Inquiries
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a href="mailto:media@nexustore.ph" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          media@nexustore.ph
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Phone</p>
                        <a href="tel:(02) 8123-MEDIA" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          (02) 8123-MEDIA
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-sm text-muted-foreground">
                          Within 24 hours on business days
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Video className="w-6 h-6 text-primary" />
                    Interview Requests
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    We welcome interview opportunities with our leadership team and subject matter experts.
                    Please provide advance notice for scheduling.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">Executive interviews available</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">Video and phone interviews</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">Industry expert commentary</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-muted-foreground">Product demonstrations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Press Release Subscription */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Media Alert Subscription
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Subscribe to receive our press releases and media alerts directly in your inbox.
                  Stay informed about our latest announcements and industry insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input placeholder="Enter your media email" className="flex-1" />
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  For media professionals only. We respect your inbox and privacy.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

      </div>

      <Footer />
    </div>
  );
};

export default PressNews;
