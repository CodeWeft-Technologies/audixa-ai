import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    inquiry: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      role: '',
      inquiry: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email anytime',
      contact: 'hello@audixa.ai',
      action: 'mailto:hello@audixa.ai'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 6pm PST',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our team',
      contact: 'Available 24/7',
      action: '#'
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a demo or consultation',
      contact: 'Book meeting',
      action: '#'
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, Suite 400',
      postal: 'San Francisco, CA 94105',
      isHQ: true
    },
    {
      city: 'New York',
      address: '456 Broadway, Floor 12',
      postal: 'New York, NY 10013',
      isHQ: false
    },
    {
      city: 'London',
      address: '789 Oxford Street',
      postal: 'London W1C 1JN, UK',
      isHQ: false
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your customer engagement? We'd love to hear from you. 
            Reach out for a demo, consultation, or any questions about Audixa AI.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover-lift card-gradient">
                <method.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <a 
                  href={method.action}
                  className="text-primary font-medium text-sm hover:underline"
                >
                  {method.contact}
                </a>
              </Card>
            ))}
          </div>

          {/* Main Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-feature">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="you@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Job Title</Label>
                      <Input
                        id="role"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        placeholder="Your job title"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="inquiry">Inquiry Type</Label>
                    <Select onValueChange={(value) => handleInputChange('inquiry', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="demo">Request Demo</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your needs, questions, or how we can help..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full btn-hero">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Office Locations */}
              <Card className="card-feature">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Our Offices
                </h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-foreground">{office.city}</h4>
                        {office.isHQ && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">HQ</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                      <p className="text-sm text-muted-foreground">{office.postal}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Business Hours */}
              <Card className="card-feature">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">8:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">9:00 AM - 2:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center text-primary">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">AI Chat: Available 24/7</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card className="card-feature">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/demo">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Try Interactive Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Request Callback
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="p-6 card-gradient">
              <h3 className="font-semibold text-foreground mb-2">How quickly can I get started?</h3>
              <p className="text-sm text-muted-foreground">
                Most customers are up and running within 2-3 business days. We provide dedicated onboarding support.
              </p>
            </Card>
            
            <Card className="p-6 card-gradient">
              <h3 className="font-semibold text-foreground mb-2">Do you offer custom integrations?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer custom integrations and API access for enterprise customers. Contact us to discuss your needs.
              </p>
            </Card>
            
            <Card className="p-6 card-gradient">
              <h3 className="font-semibold text-foreground mb-2">What kind of support do you provide?</h3>
              <p className="text-sm text-muted-foreground">
                We offer 24/7 technical support, dedicated customer success managers, and comprehensive documentation.
              </p>
            </Card>
            
            <Card className="p-6 card-gradient">
              <h3 className="font-semibold text-foreground mb-2">Is there a free trial available?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, we offer a 14-day free trial with full access to our platform. No credit card required to start.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;