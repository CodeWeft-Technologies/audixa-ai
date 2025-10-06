import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Calendar, Users, Briefcase, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { easeOut, easeIn } from "framer-motion"; // Import easeIn explicitly
import heroBg from "@/assets/solution-bg_4.jpg";
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    inquiry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, company and message are required.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call to backend
    try {
      console.log('Form submitted to contact@audixa.ai:', formData); // Updated console log
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        className: "bg-green-100 text-green-800"
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        inquiry: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'Most customers are up and running within 2-3 business days. We provide dedicated onboarding support.'
    },
    {
      question: 'Do you offer custom integrations?',
      answer: 'Yes, we offer custom integrations and API access for enterprise customers. Contact us to discuss your needs.'
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We offer 24/7 technical support, dedicated customer success managers, and comprehensive documentation.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 7-days free trial with full access to our platform. No credit card required to start.'
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }, // Updated transition
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20, delay: 0.1 } }, // Updated transition
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
<section
  className="relative py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Overlay for text readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
    >
      Get in Touch
    </motion.h1>
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8"
    >
      Ready to transform your customer engagement? We'd love to hear from you.
      Reach out for a demo, consultation, or any questions about Audixa AI.
    </motion.p>
  </div>
</section>

      {/* Main Contact Form - Now Full Width */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 flex justify-center" // Centered the single form
      >
        <div className="max-w-4xl mx-auto w-full"> {/* Increased max-w to make it feel wider */}
          {/* Contact Form */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="p-8 rounded-3xl bg-card border-2 border-primary/10 shadow-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            <h2 className="text-3xl font-bold text-foreground mb-8 relative z-10 text-center">Send us a Message</h2> {/* Centered heading */}

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.1 }}>
                <Label htmlFor="name">Full Name *</Label>
                <div className="relative">
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Your full name"
                    required
                    className="pl-10"
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2 }}>
                <Label htmlFor="email">Email Address *</Label>
                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="pl-10"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.35 }}>
  <Label htmlFor="phone">Phone Number</Label>
  <div className="relative">
    <Input
      id="phone"
      type="tel"
      value={formData.phone}
      onChange={(e) => handleInputChange('phone', e.target.value)}
      placeholder="Your phone number"
      className="pl-10"
    />
    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
  </div>
</motion.div>


              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.3 }}>
                <Label htmlFor="company">Company *</Label>
                <div className="relative">
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your company name"
                    required
                    className="pl-10"
                  />
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.4 }}>
                <Label htmlFor="role">Job Title</Label>
                <div className="relative">
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleInputChange('role', e.target.value)}
                    placeholder="Your job title"
                    className="pl-10"
                  />
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.5 }}>
                <Label htmlFor="inquiry">Inquiry Type</Label>
                <Select onValueChange={(value) => handleInputChange('inquiry', value)} value={formData.inquiry}>
                  <SelectTrigger className="relative pl-10">
                    <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
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
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.6 }}>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your needs, questions, or how we can help..."
                  rows={6}
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.7 }}>
                <Button type="submit" className="w-full btn-hero" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold text-foreground mb-8"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                className="p-6 rounded-xl bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-indigo-50/20 blur-md opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <h3 className="font-semibold text-xl text-foreground mb-2 relative z-10">{faq.question}</h3>
                <p className="text-sm text-muted-foreground relative z-10">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
