import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import heroVideo from "@/assets/Hero_video.mp4";

import {
  Bot,
  Brain,
  BarChart3,
  Target,
  MessageSquare,
  Shield,
  Zap,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  Globe,
  PhoneCall, // For Call Transfer
  CalendarCheck, // For Book Appointments
  BookOpen, // For Knowledge Base
  Send, // For Batch Call
  ShieldCheck, // Corrected from CheckShield for Verified Phone Numbers
  Tag, // For Branded Call ID
  Monitor, // For Post Call Analysis
  LineChart, // For Custom Analysis
  Lightbulb, // For AI-powered insights in the hero section
  Rocket, // For Scalable Growth in the hero section
  MessageSquareHeartIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    
    {
      icon: Brain,
      title: 'Customer Intent Detection',
      description: 'Advanced machine learning algorithms that identify customer intent and interest levels automatically.',
      benefits: ['Real-time intent analysis', 'Behavioral pattern recognition', 'Purchase likelihood scoring', 'Engagement optimization'],
      category: 'Intelligence'
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Comprehensive analytics dashboard providing deep insights into customer behavior and sales performance.',
      benefits: ['Real-time dashboard', 'Conversion tracking', 'Customer journey mapping', 'Performance metrics'],
      category: 'Analytics'
    },
    {
      icon: Target,
      title: 'Automated Lead Qualification',
      description: 'Intelligent lead scoring and qualification system that identifies high-value prospects automatically.',
      benefits: ['Lead scoring algorithms', 'Qualification criteria', 'Priority ranking', 'CRM integration'],
      category: 'Sales'
    },
    {
      icon: PhoneCall,
      title: 'Call Transfer',
      description: 'Seamlessly transfer calls with a warm handoff message to a live agent when human intervention is needed.',
      benefits: ['Warm transfer', 'Handoff messaging', 'Contextual transfer', 'Improved customer experience'],
      category: 'Call Handling'
    },
    {
      icon: CalendarCheck, 
      title: 'Appointment Scheduling', 
      description: 'Intelligence AI that allows customers to schedule appointments naturally, manages calendars, and provides instant confirmation.',
      benefits: ['Real-time calendar sync', 'Appointment reminders', 'Effortless scheduling', 'Seamless booking'],
      category: 'Core AI'
    },
    {icon: MessageSquare,
      title: 'Automated Information Delivery',
      description: 'Automatically send relevant information to customers after a conversation.',
      benefits: ['Context-aware content delivery', 'Personalized follow-up', 'Instant access to information', 'Enhanced customer engagement'],
      category: 'Automation'
    },
    {
      icon: BookOpen,
      title: 'Knowledge Base',
      description: 'Auto-sync your websites or documents to build a comprehensive knowledge base for AI responses.',
      benefits: ['Automated content sync', 'Centralized information', 'Consistent answers', 'Reduced AI training time'],
      category: 'Intelligence'
    }
  ];

  const additionalFeatures = [
    { icon: Send, title: 'Batch Call', description: 'Seamlessly send hundreds of calls to your target audience simultaneously.' },
    { icon: ShieldCheck, title: 'Verified Phone Numbers', description: 'Utilize verified phone numbers to prevent your calls from being marked as spam.' },
    { icon: Tag, title: 'Branded Call ID', description: 'Display your brand name on outgoing calls to increase pick-up rates and trust.' },
    { icon: Monitor, title: 'Post Call Analysis', description: 'Automated monitoring of calls for key insights and performance metrics.' },
    { icon: LineChart, title: 'Custom Analysis', description: 'Generate custom reports and in-depth analysis of call data to optimize strategies.' },
    { icon: Zap, title: 'Lightning Fast', description: 'Sub-second response times for immediate customer interaction.' },
    { icon: Users, title: 'Team Collaboration', description: 'Built-in team management tools to streamline workflows and communication.' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance ensures your operations run smoothly at all times.' },
    { icon: TrendingUp, title: 'Scalable Growth', description: 'Our platform scales effortlessly to grow with your business demands.' },
    { icon: CheckCircle, title: 'Easy Integration', description: 'Simple API and webhooks for quick and hassle-free system connections.' },
    { icon: Globe, title: 'Global Reach', description: 'Multi-language and region support to cater to a diverse customer base.' }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src={heroVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Content */}
  <div className="max-w-7xl mx-auto text-center relative z-10">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
    >
      Unleash the Power of AI with Audixa
    </motion.h1>
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-semibold"
    >
      Our cutting-edge features empower your business with intelligent automation, real-time insights, and seamless customer engagement.
    </motion.p>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-wrap justify-center gap-3"
    >
      {/* your badges here */}
    </motion.div>
  </div>
</section>


    {/* Main Features */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0, rotateX: -15 }}
          whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.15)", rotateY: 5 }}
          className="perspective-1000 transform-gpu"
        >
          <Card className="card-feature bg-card hover:bg-card/95 transition-all duration-300 rounded-xl shadow-lg border border-border overflow-hidden h-full">
            <div className="p-6 flex flex-col items-center text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mb-4 flex-shrink-0 shadow-md">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 min-h-[48px]">
                {feature.description}
              </p>
              <div className="grid grid-cols-1 gap-2 text-left w-full mt-auto">
                {feature.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Additional Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with enterprise-grade features and designed for teams of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              >
                <Card className="p-6 text-center bg-card rounded-xl shadow-md border border-border hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Seamless Integrations
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect Audixa AI with your existing tools and workflows. Our platform integrates with popular CRM,
            e-commerce, and marketing platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['Salesforce', 'HubSpot', 'Shopify', 'Slack', 'Zendesk', 'Microsoft'].map((integration, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, opacity: 0.9 }}
                className="text-center"
              >
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
