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
  Lock, 
  Key, 
  Eye, 
  Fingerprint,
  Server,
  Cloud,
  Database,
  CreditCard,
  UserCheck,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Building,
  Search,
  Activity,
  TrendingUp,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Wifi,
  HardDrive,
  FileText,
  Settings,
  Bell,
  Target,
  ShoppingCart,
  Package,
  Truck,
  Star,
  Heart,
  MessageSquare,
  Users,
  Scale,
  Award,
  Certificate,
  Verified,
  Info,
  HelpCircle,
  BookOpen,
  Download,
  Upload,
  RefreshCw,
  Trash2,
  Edit,
  Share2,
  Copy,
  ExternalLink,
  Bug
} from 'lucide-react';
import { useScrollToTop } from '@/utils/scrollToTop';

const Security = () => {
  // Scroll to top when component mounts
  useScrollToTop();

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const securityMeasures = [
    {
      category: "Data Encryption",
      icon: Key,
      level: "Enterprise Grade",
      description: "Advanced encryption protocols protect your sensitive information",
      features: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 encryption for data in transit",
        "End-to-end encryption for sensitive communications",
        "Encrypted database storage",
        "Secure key management system",
        "Regular encryption key rotation"
      ],
      implementation: "All sensitive data including passwords, payment information, and personal details are encrypted using industry-standard protocols",
      compliance: ["PCI DSS", "ISO 27001", "SOC 2 Type II"]
    },
    {
      category: "Authentication Security",
      icon: Fingerprint,
      level: "Multi-Layer",
      description: "Robust authentication systems protect your account access",
      features: [
        "Secure password hashing with salt",
        "Session token validation",
        "Account lockout protection",
        "Suspicious login detection",
        "Device fingerprinting",
        "Two-factor authentication ready"
      ],
      implementation: "Multiple layers of authentication ensure only authorized users can access accounts",
      compliance: ["OWASP Guidelines", "NIST Standards", "Philippine Data Privacy Act"]
    },
    {
      category: "Fraud Prevention",
      icon: Shield,
      level: "AI-Powered",
      description: "Advanced fraud detection and prevention systems",
      features: [
        "Real-time transaction monitoring",
        "Machine learning fraud detection",
        "Behavioral analysis patterns",
        "IP address and device tracking",
        "Velocity checking and limits",
        "Manual review for high-risk transactions"
      ],
      implementation: "AI-powered systems continuously monitor for suspicious activities and fraudulent behavior",
      compliance: ["Anti-Money Laundering", "Know Your Customer", "Philippine BSP Guidelines"]
    },
    {
      category: "Payment Security",
      icon: CreditCard,
      level: "PCI Compliant",
      description: "Secure payment processing with industry-leading standards",
      features: [
        "PCI DSS Level 1 compliance",
        "Tokenized payment processing",
        "Secure payment gateways",
        "CVV verification",
        "3D Secure authentication",
        "Encrypted payment data storage"
      ],
      implementation: "All payment transactions are processed through certified secure payment processors",
      compliance: ["PCI DSS", "EMV Standards", "Philippine Payment System"]
    },
    {
      category: "Infrastructure Security",
      icon: Server,
      level: "Cloud Native",
      description: "Secure cloud infrastructure with enterprise-grade protection",
      features: [
        "AWS/Azure certified infrastructure",
        "DDoS protection and mitigation",
        "Web Application Firewall (WAF)",
        "Intrusion detection systems",
        "Regular security patching",
        "24/7 security monitoring"
      ],
      implementation: "Cloud-native security architecture with multiple layers of protection",
      compliance: ["ISO 27001", "SOC 2", "Cloud Security Alliance"]
    },
    {
      category: "Data Protection",
      icon: Database,
      level: "Privacy First",
      description: "Comprehensive data protection and privacy controls",
      features: [
        "Data minimization practices",
        "Regular data backups",
        "Secure data deletion",
        "Access control and logging",
        "Data loss prevention (DLP)",
        "Privacy by design principles"
      ],
      implementation: "Strict data protection measures ensure your personal information remains secure and private",
      compliance: ["Philippine Data Privacy Act", "GDPR Ready", "ISO 27001"]
    }
  ];

  const threatProtection = [
    {
      threat: "Phishing Attacks",
      icon: Eye,
      protection: "Email verification, domain validation, and user education",
      detection: "Advanced email filtering and suspicious link detection",
      response: "Immediate account protection and user notification"
    },
    {
      threat: "Account Takeover",
      icon: UserCheck,
      protection: "Multi-factor authentication and device recognition",
      detection: "Behavioral analysis and login pattern monitoring",
      response: "Account lockdown and identity verification process"
    },
    {
      threat: "Payment Fraud",
      icon: CreditCard,
      protection: "Real-time transaction monitoring and velocity checks",
      detection: "Machine learning algorithms and risk scoring",
      response: "Transaction blocking and manual review process"
    },
    {
      threat: "Data Breaches",
      icon: Database,
      protection: "Encryption, access controls, and network segmentation",
      detection: "Intrusion detection systems and anomaly monitoring",
      response: "Incident response team and breach notification procedures"
    },
    {
      threat: "Malware & Viruses",
      icon: Bug,
      protection: "Web application firewall and content scanning",
      detection: "Real-time malware detection and file scanning",
      response: "Automatic quarantine and system cleaning"
    },
    {
      threat: "DDoS Attacks",
      icon: Zap,
      protection: "Cloud-based DDoS protection and traffic filtering",
      detection: "Traffic pattern analysis and anomaly detection",
      response: "Automatic mitigation and traffic rerouting"
    }
  ];

  const securityCertifications = [
    {
      certification: "PCI DSS Level 1",
      issuer: "PCI Security Standards Council",
      description: "Highest level of payment card industry data security compliance",
      validUntil: "December 2025",
      scope: "Payment processing and cardholder data protection"
    },
    {
      certification: "ISO 27001:2013",
      issuer: "International Organization for Standardization",
      description: "Information security management system certification",
      validUntil: "March 2026",
      scope: "Information security management and risk assessment"
    },
    {
      certification: "SOC 2 Type II",
      issuer: "American Institute of CPAs",
      description: "Service organization control for security and availability",
      validUntil: "June 2025",
      scope: "Security, availability, and confidentiality controls"
    },
    {
      certification: "Philippine Data Privacy Act",
      issuer: "National Privacy Commission",
      description: "Compliance with Philippine data protection regulations",
      validUntil: "Ongoing",
      scope: "Personal data processing and protection"
    }
  ];

  const userSecurityTips = [
    {
      category: "Password Security",
      icon: Lock,
      tips: [
        "Use strong, unique passwords for your NexuStore account",
        "Include uppercase, lowercase, numbers, and special characters",
        "Avoid using personal information in passwords",
        "Never share your password with others",
        "Change your password regularly",
        "Use a password manager for better security"
      ]
    },
    {
      category: "Account Protection",
      icon: UserCheck,
      tips: [
        "Enable two-factor authentication when available",
        "Log out from shared or public devices",
        "Monitor your account activity regularly",
        "Report suspicious activities immediately",
        "Keep your contact information updated",
        "Review and update privacy settings"
      ]
    },
    {
      category: "Safe Shopping",
      icon: ShoppingCart,
      tips: [
        "Verify website URL before entering sensitive information",
        "Look for the padlock icon in your browser",
        "Avoid shopping on public Wi-Fi networks",
        "Review order confirmations and receipts",
        "Monitor your payment statements",
        "Report unauthorized transactions immediately"
      ]
    },
    {
      category: "Email Security",
      icon: Mail,
      tips: [
        "Verify sender before clicking email links",
        "Be cautious of urgent or threatening messages",
        "Never provide passwords via email",
        "Check for spelling and grammar errors",
        "Hover over links to see actual destinations",
        "Report phishing attempts to our security team"
      ]
    }
  ];

  const incidentResponse = [
    {
      phase: "Detection",
      icon: Search,
      description: "Continuous monitoring and threat detection",
      timeframe: "Real-time",
      actions: [
        "24/7 security monitoring",
        "Automated threat detection",
        "Anomaly identification",
        "Alert generation and escalation"
      ]
    },
    {
      phase: "Analysis",
      icon: Activity,
      description: "Rapid assessment and threat classification",
      timeframe: "Within 15 minutes",
      actions: [
        "Threat severity assessment",
        "Impact analysis",
        "Root cause investigation",
        "Evidence collection and preservation"
      ]
    },
    {
      phase: "Containment",
      icon: Shield,
      description: "Immediate threat containment and isolation",
      timeframe: "Within 30 minutes",
      actions: [
        "Threat isolation and quarantine",
        "System access restriction",
        "Network segmentation",
        "Damage limitation measures"
      ]
    },
    {
      phase: "Recovery",
      icon: RefreshCw,
      description: "System restoration and service recovery",
      timeframe: "1-4 hours",
      actions: [
        "System restoration from backups",
        "Service functionality verification",
        "Security patch deployment",
        "Monitoring for recurring issues"
      ]
    },
    {
      phase: "Communication",
      icon: Bell,
      description: "Stakeholder notification and transparency",
      timeframe: "Within 72 hours",
      actions: [
        "User notification if affected",
        "Regulatory reporting if required",
        "Public disclosure if necessary",
        "Detailed incident documentation"
      ]
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
              Security Center
            </h1>
            <p className="text-white/90 text-lg sm:text-xl mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
              Your security is our top priority. Learn about the comprehensive measures we implement 
              to protect your data, transactions, and privacy on NexuStore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#security-measures">Security Measures</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="#user-protection">Protect Yourself</Link>
              </Button>
            </div>

            {/* Security Status */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-white/90">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm">All Systems Secure & Operational</span>
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
            <TabsTrigger value="measures">Security</TabsTrigger>
            <TabsTrigger value="protection">Protection</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Security Overview
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive security framework protecting your data, transactions, and privacy
              </p>
            </div>

            {/* Security Pillars */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Our Security Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Data Protection</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Advanced encryption and secure storage protect your personal and financial information
                      from unauthorized access.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Lock className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Secure Transactions</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      PCI DSS compliant payment processing ensures your financial transactions are
                      secure and protected.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-3">Threat Detection</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      24/7 monitoring and AI-powered threat detection systems identify and prevent
                      security threats in real-time.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Security Stats */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Security Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                    <p className="text-sm text-muted-foreground">Uptime Security</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <p className="text-sm text-muted-foreground">Monitoring</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">256-bit</div>
                    <p className="text-sm text-muted-foreground">Encryption</p>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">0</div>
                    <p className="text-sm text-muted-foreground">Data Breaches</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Quick Security Check */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Security Status</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Current Security Status</h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-muted-foreground">All security systems operational</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-muted-foreground">SSL certificates valid and updated</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-muted-foreground">Payment systems secure and compliant</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <span className="text-sm text-muted-foreground">No active security threats detected</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Recent Security Updates</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Security patch deployed</p>
                            <p className="text-xs text-muted-foreground">January 10, 2025</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="text-sm font-medium text-foreground">SSL certificates renewed</p>
                            <p className="text-xs text-muted-foreground">January 5, 2025</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <Clock className="w-4 h-4 text-primary mt-1" />
                          <div>
                            <p className="text-sm font-medium text-foreground">Security audit completed</p>
                            <p className="text-xs text-muted-foreground">December 28, 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Security Team */}
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-0 shadow-lg">
              <CardContent className="p-8 sm:p-12 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                  Security Concerns?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Our security team is available 24/7 to address any security concerns or
                  suspicious activities you may encounter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    Report Security Issue
                  </Button>
                  <Button variant="outline" className="hover:bg-primary hover:text-white">
                    Contact Security Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Measures Tab */}
          <TabsContent value="measures" className="space-y-8" id="security-measures">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Security Measures
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive security technologies and practices protecting your data and transactions
              </p>
            </div>

            {/* Security Measures */}
            <section className="space-y-8">
              {securityMeasures.map((measure, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <measure.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-foreground">{measure.category}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {measure.level}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{measure.description}</p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-medium text-foreground mb-3">Security Features:</h4>
                            <ul className="space-y-2">
                              {measure.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-2">
                                  <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-medium text-foreground mb-3">Implementation:</h4>
                            <p className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg mb-3">
                              {measure.implementation}
                            </p>
                            <div>
                              <h5 className="font-medium text-foreground mb-2 text-sm">Compliance:</h5>
                              <div className="flex flex-wrap gap-1">
                                {measure.compliance.map((comp, compIndex) => (
                                  <Badge key={compIndex} variant="outline" className="text-xs">
                                    {comp}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </section>

            {/* Threat Protection */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Threat Protection</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {threatProtection.map((threat, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                          <threat.icon className="w-5 h-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-3">{threat.threat}</h4>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-medium text-foreground mb-1 text-sm">Protection:</h5>
                              <p className="text-xs text-muted-foreground">{threat.protection}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-foreground mb-1 text-sm">Detection:</h5>
                              <p className="text-xs text-muted-foreground">{threat.detection}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-foreground mb-1 text-sm">Response:</h5>
                              <p className="text-xs text-muted-foreground">{threat.response}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Protection Tab */}
          <TabsContent value="protection" className="space-y-8" id="user-protection">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                User Protection
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Essential security tips and best practices to protect yourself while using NexuStore
              </p>
            </div>

            {/* User Security Tips */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Security Best Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userSecurityTips.map((category, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                          <category.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-3">{category.category}</h4>
                          <ul className="space-y-2">
                            {category.tips.map((tip, tipIndex) => (
                              <li key={tipIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{tip}</span>
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

            {/* Incident Response */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Incident Response Process</h3>
              <div className="space-y-6">
                {incidentResponse.map((phase, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                          <phase.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{phase.phase}</h4>
                            <Badge variant="outline" className="text-xs">{phase.timeframe}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{phase.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {phase.actions.map((action, actionIndex) => (
                              <div key={actionIndex} className="flex items-start space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                                <span className="text-xs text-muted-foreground">{action}</span>
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
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-8">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Industry certifications and regulatory compliance ensuring the highest security standards
              </p>
            </div>

            {/* Security Certifications */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Security Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityCertifications.map((cert, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-premium-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                          <Certificate className="w-5 h-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{cert.certification}</h4>
                            <Badge variant="secondary" className="text-xs">
                              Valid
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Issuer:</span>
                              <span className="font-medium text-foreground">{cert.issuer}</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Valid Until:</span>
                              <span className="font-medium text-foreground">{cert.validUntil}</span>
                            </div>
                            <div className="mt-3">
                              <p className="text-xs text-muted-foreground">
                                <strong>Scope:</strong> {cert.scope}
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

            {/* Regulatory Compliance */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Regulatory Compliance</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-primary" />
                      Philippine Regulations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Data Privacy Act of 2012</p>
                          <p className="text-xs text-muted-foreground">Full compliance with Philippine data protection laws</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">E-Commerce Act (RA 8792)</p>
                          <p className="text-xs text-muted-foreground">Electronic commerce and digital signature compliance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">BSP Payment System Guidelines</p>
                          <p className="text-xs text-muted-foreground">Central bank payment system regulations</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-primary" />
                      International Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">GDPR Ready</p>
                          <p className="text-xs text-muted-foreground">European data protection regulation compliance</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">OWASP Security Guidelines</p>
                          <p className="text-xs text-muted-foreground">Web application security best practices</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">NIST Cybersecurity Framework</p>
                          <p className="text-xs text-muted-foreground">National Institute of Standards and Technology guidelines</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Security Audits */}
            <section className="mb-12">
              <h3 className="text-xl font-semibold text-foreground mb-6">Security Audits & Assessments</h3>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Penetration Testing</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Quarterly penetration testing by certified security professionals
                      </p>
                      <Badge variant="outline" className="text-xs">Last: Dec 2024</Badge>
                    </div>

                    <div className="text-center">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Activity className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Vulnerability Assessment</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Monthly vulnerability scans and security assessments
                      </p>
                      <Badge variant="outline" className="text-xs">Last: Jan 2025</Badge>
                    </div>

                    <div className="text-center">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Compliance Audit</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Annual third-party compliance and security audits
                      </p>
                      <Badge variant="outline" className="text-xs">Last: Nov 2024</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Information */}
            <section>
              <h3 className="text-xl font-semibold text-foreground mb-6">Security Contact</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-primary" />
                      Security Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Mail className="w-4 h-4 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Security Email</p>
                          <a href="mailto:security@nexustore.ph" className="text-sm text-primary hover:underline">
                            security@nexustore.ph
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Phone className="w-4 h-4 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Security Hotline</p>
                          <a href="tel:(02) 8123-SEC" className="text-sm text-primary hover:underline">
                            (02) 8123-SEC (24/7)
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-primary mt-1" />
                        <div>
                          <p className="font-medium text-foreground text-sm">Security Office</p>
                          <p className="text-sm text-muted-foreground">
                            NexuStore Security Center<br />
                            25th Floor, One Global Place<br />
                            BGC, Taguig, Philippines
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <AlertTriangle className="w-6 h-6 text-primary" />
                      Report Security Issues
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      If you discover a security vulnerability or suspicious activity,
                      please report it immediately through our secure channels.
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        Report Security Vulnerability
                      </Button>
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                        Report Suspicious Activity
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We take all security reports seriously and will respond within 24 hours.
                    </p>
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

export default Security;
