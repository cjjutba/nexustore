import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from "@/components/Navigation";
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  Globe,
  Headphones,
  Users,
  Building,
  Calendar,
  Star,
  Zap,
  Shield,
  Heart,
  ArrowRight,
  Share,
  MessageSquare,
  Camera,
  Play
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    priority: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        priority: 'normal'
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      subtitle: "Speak with our customer service team",
      primary: "(02) 8123-4567",
      secondary: "Toll-free: 1-800-NEXU-HELP",
      hours: "Mon-Fri 8AM-8PM, Sat-Sun 9AM-5PM",
      description: "Get immediate assistance from our trained support specialists",
      color: "bg-blue-500",
      availability: "Available Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      subtitle: "Instant messaging support",
      primary: "Available 24/7",
      secondary: "Average response: <2 minutes",
      hours: "Always available",
      description: "Chat with our support team in real-time for quick solutions",
      color: "bg-green-500",
      availability: "Online"
    },
    {
      icon: Mail,
      title: "Email Support",
      subtitle: "Detailed written assistance",
      primary: "support@nexustore.ph",
      secondary: "Priority: priority@nexustore.ph",
      hours: "Response within 24 hours",
      description: "Send detailed inquiries and receive comprehensive responses",
      color: "bg-orange-500",
      availability: "24/7"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      subtitle: "Website and app assistance",
      primary: "tech@nexustore.ph",
      secondary: "(02) 8123-TECH",
      hours: "Mon-Fri 9AM-6PM",
      description: "Get help with website issues, app problems, and technical difficulties",
      color: "bg-purple-500",
      availability: "Business Hours"
    }
  ];

  const officeLocations = [
    {
      name: "NexuStore Headquarters",
      type: "Main Office",
      address: "25th Floor, One Global Place, 5th Avenue corner 25th Street, Bonifacio Global City, Taguig 1634",
      phone: "(02) 8123-4567",
      email: "headquarters@nexustore.ph",
      hours: "Mon-Fri 8AM-6PM",
      services: ["Corporate Inquiries", "Partnership Opportunities", "Media Relations", "Executive Support"],
      isMain: true
    },
    {
      name: "Customer Service Center",
      type: "Support Hub",
      address: "Unit 1205-1210, Robinsons Cybergate Tower 2, Pioneer Street, Mandaluyong 1550",
      phone: "(02) 8123-HELP",
      email: "support@nexustore.ph",
      hours: "24/7 Operations",
      services: ["Customer Support", "Order Assistance", "Returns Processing", "Live Chat Support"],
      isMain: false
    },
    {
      name: "Fulfillment Center",
      type: "Logistics Hub",
      address: "Warehouse Complex, PEZA Economic Zone, Laguna Technopark, Biñan, Laguna 4024",
      phone: "(02) 8123-SHIP",
      email: "logistics@nexustore.ph",
      hours: "Mon-Sat 6AM-10PM",
      services: ["Order Processing", "Shipping Inquiries", "Inventory Management", "Returns Center"],
      isMain: false
    }
  ];

  const supportCategories = [
    { value: "orders", label: "Orders & Shopping", icon: "🛍️" },
    { value: "shipping", label: "Shipping & Delivery", icon: "🚚" },
    { value: "returns", label: "Returns & Refunds", icon: "↩️" },
    { value: "payment", label: "Payment & Billing", icon: "💳" },
    { value: "account", label: "Account & Profile", icon: "👤" },
    { value: "technical", label: "Technical Issues", icon: "🔧" },
    { value: "partnership", label: "Business Partnership", icon: "🤝" },
    { value: "other", label: "Other Inquiries", icon: "❓" }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM", type: "Regular Support" },
    { day: "Saturday", hours: "9:00 AM - 5:00 PM", type: "Weekend Support" },
    { day: "Sunday", hours: "9:00 AM - 5:00 PM", type: "Weekend Support" },
    { day: "Holidays", hours: "10:00 AM - 4:00 PM", type: "Holiday Support" },
    { day: "Live Chat", hours: "24/7 Available", type: "Always Online" },
    { day: "Emergency Line", hours: "24/7 Available", type: "Urgent Issues" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Get in Touch with <span className="text-primary">NexuStore</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              We're here to help you with any questions, concerns, or feedback. 
              Choose your preferred way to connect with our dedicated support team.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">24/7</div>
                <p className="text-sm text-muted-foreground">Support Available</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">&lt;2min</div>
                <p className="text-sm text-muted-foreground">Response Time</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">98%</div>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">50K+</div>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 py-12 sm:py-16 lg:py-20">
        
        <Tabs defaultValue="contact" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="contact">Contact Methods</TabsTrigger>
            <TabsTrigger value="form">Contact Form</TabsTrigger>
            <TabsTrigger value="locations">Our Offices</TabsTrigger>
            <TabsTrigger value="hours">Business Hours</TabsTrigger>
          </TabsList>

          {/* Contact Methods Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Choose Your Preferred Contact Method
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Multiple ways to reach us - pick what works best for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`${method.color} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{method.title}</h3>
                          <Badge variant="outline" className="text-xs">
                            {method.availability}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{method.subtitle}</p>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-primary">{method.primary}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-muted-foreground">{method.secondary}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{method.hours}</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                          {method.description}
                        </p>
                        
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                          {method.title === "Phone Support" ? "Call Now" : 
                           method.title === "Live Chat" ? "Start Chat" : 
                           method.title === "Email Support" ? "Send Email" : "Get Help"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Emergency Support
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  For urgent issues like payment problems, security concerns, or critical order issues, 
                  contact our emergency support line immediately.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button className="bg-red-500 hover:bg-red-600 text-white">
                    Emergency Line: (02) 8999-HELP
                  </Button>
                  <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                    Priority Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Form Tab */}
          <TabsContent value="form" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Form */}
                <div className="lg:col-span-2">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Send className="w-5 h-5 text-primary" />
                        <span>Contact Form</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {submitStatus === 'success' && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <div>
                            <p className="text-sm font-medium text-green-800">Message sent successfully!</p>
                            <p className="text-xs text-green-600">We'll respond within 24 hours.</p>
                          </div>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Full Name *
                            </label>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Phone Number
                            </label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+63 9XX XXX XXXX"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              Inquiry Category *
                            </label>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                              required
                            >
                              <option value="">Select a category</option>
                              {supportCategories.map((category) => (
                                <option key={category.value} value={category.value}>
                                  {category.icon} {category.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Subject *
                          </label>
                          <Input
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="Brief description of your inquiry"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Priority Level
                          </label>
                          <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                          >
                            <option value="low">Low - General inquiry</option>
                            <option value="normal">Normal - Standard support</option>
                            <option value="high">High - Urgent issue</option>
                            <option value="critical">Critical - Emergency</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Message *
                          </label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Please provide detailed information about your inquiry..."
                            rows={6}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary/90 text-white"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending Message...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>

                {/* Contact Information Sidebar */}
                <div className="space-y-6">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">(02) 8123-4567</p>
                            <p className="text-xs text-muted-foreground">Mon-Fri 8AM-8PM</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-4 h-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">support@nexustore.ph</p>
                            <p className="text-xs text-muted-foreground">24/7 Response</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MessageCircle className="w-4 h-4 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Live Chat</p>
                            <p className="text-xs text-muted-foreground">Available 24/7</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">Response Times</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Live Chat</span>
                          <Badge variant="outline" className="text-xs">Instant</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Phone</span>
                          <Badge variant="outline" className="text-xs">Immediate</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Email</span>
                          <Badge variant="outline" className="text-xs">24 hours</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Contact Form</span>
                          <Badge variant="outline" className="text-xs">24 hours</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-primary/5 border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <Star className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-semibold text-foreground mb-2">Premium Support</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get priority support with faster response times
                      </p>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Office Locations Tab */}
          <TabsContent value="locations" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Office Locations
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Visit us at our offices across the Philippines for in-person assistance
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {officeLocations.map((office, index) => (
                <Card key={index} className={`border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 ${office.isMain ? 'ring-2 ring-primary/20' : ''}`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8 space-y-6 lg:space-y-0">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <Building className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{office.name}</h3>
                            <Badge variant={office.isMain ? "default" : "outline"} className="text-xs">
                              {office.type}
                            </Badge>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                              <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-foreground mb-1">Address</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{office.address}</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <Phone className="w-4 h-4 text-primary" />
                              <div>
                                <p className="text-sm font-medium text-foreground mb-1">Phone</p>
                                <p className="text-sm text-primary">{office.phone}</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <Mail className="w-4 h-4 text-primary" />
                              <div>
                                <p className="text-sm font-medium text-foreground mb-1">Email</p>
                                <p className="text-sm text-primary">{office.email}</p>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <Clock className="w-4 h-4 text-primary" />
                              <div>
                                <p className="text-sm font-medium text-foreground mb-1">Hours</p>
                                <p className="text-sm text-muted-foreground">{office.hours}</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-3">Services Available</h4>
                            <div className="space-y-2">
                              {office.services.map((service, serviceIndex) => (
                                <div key={serviceIndex} className="flex items-center space-x-2">
                                  <CheckCircle className="w-3 h-3 text-green-500" />
                                  <span className="text-sm text-muted-foreground">{service}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-48 flex-shrink-0">
                        <div className="bg-muted/30 rounded-lg p-4 text-center">
                          <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                          <p className="text-sm font-medium text-foreground mb-1">Get Directions</p>
                          <Button variant="outline" size="sm" className="w-full">
                            View on Map
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Regional Coverage */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Nationwide Service Coverage
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    While our main offices are in Metro Manila, we provide comprehensive support
                    to customers across all regions of the Philippines
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">18</div>
                    <p className="text-sm text-muted-foreground mb-1">Regions</p>
                    <p className="text-xs text-muted-foreground">Complete coverage</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">81</div>
                    <p className="text-sm text-muted-foreground mb-1">Provinces</p>
                    <p className="text-xs text-muted-foreground">Delivery available</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1,500+</div>
                    <p className="text-sm text-muted-foreground mb-1">Cities</p>
                    <p className="text-xs text-muted-foreground">Service locations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Business Hours Tab */}
          <TabsContent value="hours" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Business Hours & Availability
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find out when our different support channels are available to assist you
              </p>
            </div>

            {/* Business Hours Schedule */}
            <Card className="border-0 shadow-lg max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Support Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{schedule.day}</p>
                          <p className="text-sm text-muted-foreground">{schedule.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">{schedule.hours}</p>
                        <Badge
                          variant={schedule.type.includes("Always") ? "default" : "outline"}
                          className="text-xs"
                        >
                          {schedule.type.includes("Always") ? "24/7" : "Limited"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Support Channel Availability */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
                  <p className="text-sm text-muted-foreground mb-3">Available 24/7</p>
                  <Badge className="bg-green-500 text-white">Always Online</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">Mon-Fri 8AM-8PM</p>
                  <Badge variant="outline">Business Hours</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-orange-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">24/7 Monitoring</p>
                  <Badge className="bg-orange-500 text-white">Always Available</Badge>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <AlertCircle className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Emergency Line</h3>
                  <p className="text-sm text-muted-foreground mb-3">Critical issues only</p>
                  <Badge className="bg-red-500 text-white">24/7 Emergency</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Holiday Schedule */}
            <Card className="bg-muted/30 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Holiday Schedule
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  During Philippine national holidays, our support hours may be adjusted.
                  Live chat and email support remain available 24/7.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <div className="text-center">
                    <p className="font-medium text-foreground">Regular Holidays</p>
                    <p className="text-sm text-muted-foreground">10:00 AM - 4:00 PM</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-foreground">Special Holidays</p>
                    <p className="text-sm text-muted-foreground">Limited Support</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>

        {/* Social Media & Additional Resources */}
        <section className="mt-16 sm:mt-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Connect with Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Follow us on social media for updates, tips, and community support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Facebook</h3>
                <p className="text-sm text-muted-foreground mb-4">Latest updates and community</p>
                <Button variant="outline" className="w-full">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-blue-400/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Twitter</h3>
                <p className="text-sm text-muted-foreground mb-4">Real-time support and news</p>
                <Button variant="outline" className="w-full">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-pink-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                <p className="text-sm text-muted-foreground mb-4">Product showcases and stories</p>
                <Button variant="outline" className="w-full">
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="bg-red-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">YouTube</h3>
                <p className="text-sm text-muted-foreground mb-4">Tutorials and product reviews</p>
                <Button variant="outline" className="w-full">
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Links */}
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Need Quick Help?
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Check out these helpful resources before contacting support
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/help" className="block">
                  <div className="bg-white/50 rounded-lg p-6 text-center hover:bg-white/70 transition-colors">
                    <div className="bg-blue-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-blue-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Help Center</h4>
                    <p className="text-sm text-muted-foreground">Browse FAQs and guides</p>
                  </div>
                </Link>

                <Link to="/shipping" className="block">
                  <div className="bg-white/50 rounded-lg p-6 text-center hover:bg-white/70 transition-colors">
                    <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-green-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Shipping Info</h4>
                    <p className="text-sm text-muted-foreground">Track orders and delivery</p>
                  </div>
                </Link>

                <Link to="/returns" className="block">
                  <div className="bg-white/50 rounded-lg p-6 text-center hover:bg-white/70 transition-colors">
                    <div className="bg-orange-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-orange-500" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">Returns & Refunds</h4>
                    <p className="text-sm text-muted-foreground">Return policy and process</p>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
