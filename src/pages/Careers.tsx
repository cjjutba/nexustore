import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Briefcase, 
  Users, 
  Heart, 
  Award, 
  MapPin, 
  Clock, 
  DollarSign,
  GraduationCap,
  Zap,
  Shield,
  Globe,
  Truck,
  Code,
  Headphones,
  BarChart3,
  Palette,
  Search,
  Send,
  CheckCircle,
  Star,
  Building,
  Coffee,
  Wifi,
  Car,
  Stethoscope,
  Plane,
  Gift,
  TrendingUp,
  Target,
  Lightbulb,
  Rocket
} from 'lucide-react';
import { useScrollToTop } from '@/utils/scrollToTop';

const Careers = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Software Engineer",
      department: "Technology",
      location: "BGC, Taguig",
      type: "Full-time",
      level: "Senior",
      salary: "₱80,000 - ₱120,000",
      description: "Build and maintain our e-commerce platform using React, Node.js, and cloud technologies.",
      requirements: ["5+ years experience", "React/Node.js expertise", "Cloud platforms (AWS/Azure)", "E-commerce experience preferred"],
      posted: "2 days ago",
      urgent: true
    },
    {
      id: 2,
      title: "Customer Success Manager",
      department: "Customer Service",
      location: "Mandaluyong",
      type: "Full-time",
      level: "Mid-level",
      salary: "₱45,000 - ₱65,000",
      description: "Lead customer support team and ensure exceptional service delivery across all channels.",
      requirements: ["3+ years customer service", "Team leadership experience", "Excellent communication", "Problem-solving skills"],
      posted: "1 week ago",
      urgent: false
    },
    {
      id: 3,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "BGC, Taguig",
      type: "Full-time",
      level: "Mid-level",
      salary: "₱40,000 - ₱60,000",
      description: "Drive online marketing campaigns, SEO, and social media strategies to grow our customer base.",
      requirements: ["2+ years digital marketing", "SEO/SEM expertise", "Social media management", "Analytics tools proficiency"],
      posted: "3 days ago",
      urgent: false
    },
    {
      id: 4,
      title: "Logistics Coordinator",
      department: "Operations",
      location: "Laguna",
      type: "Full-time",
      level: "Entry-level",
      salary: "₱25,000 - ₱35,000",
      description: "Coordinate shipping operations and manage inventory across our fulfillment centers.",
      requirements: ["Fresh graduate welcome", "Logistics background preferred", "Attention to detail", "MS Office proficiency"],
      posted: "5 days ago",
      urgent: false
    },
    {
      id: 5,
      title: "UX/UI Designer",
      department: "Design",
      location: "BGC, Taguig",
      type: "Full-time",
      level: "Mid-level",
      salary: "₱50,000 - ₱75,000",
      description: "Design intuitive user experiences for our web and mobile platforms.",
      requirements: ["3+ years UX/UI design", "Figma/Sketch expertise", "Mobile-first design", "E-commerce experience"],
      posted: "1 week ago",
      urgent: false
    },
    {
      id: 6,
      title: "Data Analyst",
      department: "Analytics",
      location: "BGC, Taguig",
      type: "Full-time",
      level: "Mid-level",
      salary: "₱55,000 - ₱80,000",
      description: "Analyze customer behavior and business metrics to drive data-driven decisions.",
      requirements: ["2+ years data analysis", "SQL/Python skills", "Business intelligence tools", "Statistical analysis"],
      posted: "4 days ago",
      urgent: false
    }
  ];

  const departments = [
    { name: "Technology", icon: Code, count: 12, description: "Build the future of e-commerce" },
    { name: "Customer Service", icon: Headphones, count: 8, description: "Deliver exceptional support" },
    { name: "Marketing", icon: BarChart3, count: 6, description: "Drive growth and engagement" },
    { name: "Operations", icon: Truck, count: 10, description: "Ensure seamless logistics" },
    { name: "Design", icon: Palette, count: 4, description: "Create beautiful experiences" },
    { name: "Analytics", icon: TrendingUp, count: 5, description: "Turn data into insights" }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses and annual reviews"
    },
    {
      icon: Stethoscope,
      title: "Health & Wellness",
      description: "Comprehensive HMO coverage for you and your family, plus wellness programs"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Training budget, conference attendance, and skill development programs"
    },
    {
      icon: Plane,
      title: "Flexible Time Off",
      description: "Generous vacation leave, sick leave, and flexible working arrangements"
    },
    {
      icon: Coffee,
      title: "Office Perks",
      description: "Free meals, snacks, coffee, and modern office spaces with recreational areas"
    },
    {
      icon: Car,
      title: "Transportation",
      description: "Transportation allowance and shuttle service from key locations"
    },
    {
      icon: Gift,
      title: "Employee Discounts",
      description: "Exclusive discounts on NexuStore products and partner brand offers"
    },
    {
      icon: Wifi,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and family-friendly policies"
    }
  ];

  const cultureValues = [
    {
      icon: Heart,
      title: "Customer First",
      description: "We put our customers at the center of everything we do, creating experiences that delight and exceed expectations.",
      color: "bg-red-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to stay ahead in the rapidly evolving e-commerce landscape.",
      color: "bg-purple-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and foster an inclusive environment where every voice is heard and valued.",
      color: "bg-blue-500"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, continuously improving our processes and raising the bar.",
      color: "bg-green-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our business dealings and relationships.",
      color: "bg-indigo-500"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "We're committed to making quality products accessible to everyone across the Philippines.",
      color: "bg-orange-500"
    }
  ];

  const officeLocations = [
    {
      name: "NexuStore Headquarters",
      address: "25th Floor, One Global Place, BGC, Taguig",
      type: "Main Office",
      employees: "200+",
      departments: ["Technology", "Marketing", "Design", "Analytics", "Executive"],
      amenities: ["Modern workspaces", "Cafeteria", "Game room", "Gym", "Rooftop garden"]
    },
    {
      name: "Customer Service Center",
      address: "Robinsons Cybergate Tower 2, Mandaluyong",
      type: "Support Hub",
      employees: "150+",
      departments: ["Customer Service", "Quality Assurance", "Training"],
      amenities: ["24/7 operations", "Rest areas", "Training rooms", "Wellness center"]
    },
    {
      name: "Fulfillment Center",
      address: "PEZA Economic Zone, Laguna Technopark, Biñan",
      type: "Logistics Hub",
      employees: "300+",
      departments: ["Operations", "Logistics", "Inventory", "Quality Control"],
      amenities: ["Warehouse facilities", "Loading docks", "Staff quarters", "Canteen"]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-foreground py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Briefcase className="w-16 h-16 sm:w-20 sm:h-20 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Join the NexuStore Team
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Be part of the Philippines' fastest-growing e-commerce platform. Build your career 
              with us and help shape the future of online shopping.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#jobs">View Open Positions</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#culture">Learn About Our Culture</Link>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">650+</div>
                <p className="text-white/80 text-sm">Team Members</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3</div>
                <p className="text-white/80 text-sm">Office Locations</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">45+</div>
                <p className="text-white/80 text-sm">Open Positions</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4.8/5</div>
                <p className="text-white/80 text-sm">Employee Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container mx-auto px-4 mobile-l:px-6 sm:px-8 tablet:px-10 py-12 sm:py-16 lg:py-20">
        
        <Tabs defaultValue="jobs" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto">
            <TabsTrigger value="jobs">Open Positions</TabsTrigger>
            <TabsTrigger value="culture">Our Culture</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
          </TabsList>

          {/* Open Positions Tab */}
          <TabsContent value="jobs" className="space-y-8" id="jobs">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Current Job Openings
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover exciting career opportunities across our growing organization
              </p>
            </div>

            {/* Job Search and Filters */}
            <Card className="border-0 shadow-lg mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                      <Input
                        placeholder="Search jobs by title or keyword..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="All">All Departments</option>
                      {departments.map((dept) => (
                        <option key={dept.name} value={dept.name}>{dept.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="All">All Locations</option>
                      <option value="BGC">BGC, Taguig</option>
                      <option value="Mandaluyong">Mandaluyong</option>
                      <option value="Laguna">Laguna</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Departments Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {departments.map((dept, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <dept.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{dept.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{dept.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {dept.count} open positions
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.length === 0 ? (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-12 text-center">
                    <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No jobs found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search criteria or check back later for new opportunities.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                filteredJobs.map((job) => (
                  <Card key={job.id} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between space-y-4 lg:space-y-0">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                                {job.urgent && (
                                  <Badge className="bg-red-500 text-white text-xs">Urgent</Badge>
                                )}
                              </div>
                              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                <span className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {job.department}
                                </span>
                                <span className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {job.location}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {job.type}
                                </span>
                                <span className="flex items-center">
                                  <DollarSign className="w-4 h-4 mr-1" />
                                  {job.salary}
                                </span>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {job.level}
                            </Badge>
                          </div>

                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {job.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="font-medium text-foreground mb-2">Key Requirements:</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.requirements.map((req, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Posted {job.posted}</span>
                            <Button className="bg-primary hover:bg-primary/90 text-white">
                              Apply Now
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Don't See Your Dream Role?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're always looking for talented individuals to join our team.
                  Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Submit General Application
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Culture Tab */}
          <TabsContent value="culture" className="space-y-8" id="culture">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Culture & Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover what makes NexuStore a great place to work and grow your career
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {cultureValues.map((value, index) => (
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

            {/* Work Environment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Innovation-Driven</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We foster a culture of innovation where new ideas are welcomed and experimentation
                    is encouraged. Our teams have the freedom to explore creative solutions and implement
                    cutting-edge technologies.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Innovation time for personal projects
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Cross-functional collaboration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Access to latest technologies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Growth-Focused</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We believe in investing in our people's growth and development. From mentorship
                    programs to skill-building workshops, we provide numerous opportunities for
                    career advancement.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Mentorship and coaching programs
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Internal promotion opportunities
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Continuous learning culture
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Employee Testimonials */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-foreground text-center mb-8">
                What Our Team Says
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      "NexuStore has been an incredible place to grow my career. The team is supportive,
                      the work is challenging, and the company truly cares about work-life balance."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">MR</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Maria Rodriguez</p>
                        <p className="text-xs text-muted-foreground">Senior Software Engineer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      "The learning opportunities here are endless. From technical training to leadership
                      development, NexuStore invests in its people's growth."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">JS</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">John Santos</p>
                        <p className="text-xs text-muted-foreground">Marketing Manager</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      "I love how diverse and inclusive our workplace is. Everyone's ideas are valued,
                      and we work together as one big family."
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">AL</span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">Anna Lim</p>
                        <p className="text-xs text-muted-foreground">UX Designer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Employee Benefits & Perks
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and amazing perks
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300 hover:scale-105 text-center">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Benefits */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Health & Wellness</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Comprehensive HMO Coverage</p>
                        <p className="text-sm text-muted-foreground">Medical, dental, and vision coverage for you and your dependents</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Mental Health Support</p>
                        <p className="text-sm text-muted-foreground">Access to counseling services and mental wellness programs</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Fitness & Wellness</p>
                        <p className="text-sm text-muted-foreground">Gym membership reimbursement and wellness activities</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6">Financial Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Performance Bonuses</p>
                        <p className="text-sm text-muted-foreground">Quarterly and annual performance-based incentives</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Retirement Savings</p>
                        <p className="text-sm text-muted-foreground">Company-matched retirement fund contributions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Stock Options</p>
                        <p className="text-sm text-muted-foreground">Equity participation for eligible employees</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Work-Life Balance */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Work-Life Balance
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We understand the importance of maintaining a healthy work-life balance
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25</div>
                    <p className="text-sm text-muted-foreground mb-1">Vacation Days</p>
                    <p className="text-xs text-muted-foreground">Plus holidays and sick leave</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">3</div>
                    <p className="text-sm text-muted-foreground mb-1">Remote Days</p>
                    <p className="text-xs text-muted-foreground">Per week flexibility</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">40</div>
                    <p className="text-sm text-muted-foreground mb-1">Hours/Week</p>
                    <p className="text-xs text-muted-foreground">Standard work week</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Locations Tab */}
          <TabsContent value="locations" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Office Locations
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Modern workspaces designed for collaboration, creativity, and comfort
              </p>
            </div>

            <div className="space-y-8">
              {officeLocations.map((location, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-primary/10 p-2 rounded-lg">
                            <Building className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">{location.name}</h3>
                            <Badge variant="outline" className="text-xs">
                              {location.type}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-4 h-4 text-primary mt-1" />
                            <div>
                              <p className="font-medium text-foreground">Address</p>
                              <p className="text-sm text-muted-foreground">{location.address}</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <Users className="w-4 h-4 text-primary mt-1" />
                            <div>
                              <p className="font-medium text-foreground">Team Size</p>
                              <p className="text-sm text-muted-foreground">{location.employees} employees</p>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <Briefcase className="w-4 h-4 text-primary mt-1" />
                            <div>
                              <p className="font-medium text-foreground">Departments</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {location.departments.map((dept, deptIndex) => (
                                  <Badge key={deptIndex} variant="secondary" className="text-xs">
                                    {dept}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-3">Office Amenities</h4>
                        <div className="space-y-2">
                          {location.amenities.map((amenity, amenityIndex) => (
                            <div key={amenityIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-sm text-muted-foreground">{amenity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Join Us CTA */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Ready to Join Our Team?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Take the next step in your career and become part of the NexuStore family.
                  We're excited to meet talented individuals who share our passion for excellence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Browse Open Positions
                  </Button>
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    Contact HR Team
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

export default Careers;
