import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Book,
  Code,
  Shield,
  Zap,
  Check,
  Rocket,
  Settings,
  Lightbulb,
  Server,
  Database,
  Users,
  MessageCircle,
} from 'lucide-react';

const Documentation = () => {
  const gettingStartedSteps = [
    {
      title: 'Setup Your Account',
      description: 'Begin by configuring your business profile and team access permissions within the Audixa AI dashboard.',
      icon: Settings,
    },
    {
      title: 'Integrate with Your CRM',
      description: 'Seamlessly connect your existing CRM or lead database to enable automated data syncing and personalized outreach.',
      icon: Database,
    },
    {
      title: 'Define Conversation Flows',
      description: 'Use our intuitive visual builder to create custom call scripts, FAQs, and AI-driven conversation paths tailored to your goals.',
      icon: MessageCircle,
    },
    {
      title: 'Launch Campaigns',
      description: 'Initiate outbound campaigns or activate inbound call handling and start monitoring real-time performance metrics.',
      icon: Rocket,
    },
  ];

  const technicalSpecs = [
    {
      title: 'API Integration',
      description: 'Our RESTful API allows for seamless integration with third-party applications and services.',
      icon: Code,
    },
    {
      title: 'Security',
      description: 'We use industry-standard encryption protocols and secure data handling to protect your information.',
      icon: Shield,
    },
    {
      title: 'Scalability',
      description: 'The platform is built on a scalable architecture, capable of handling millions of calls and data points simultaneously.',
      icon: Server,
    },
    {
      title: 'Analytics',
      description: 'Gain valuable insights with real-time analytics and customizable reporting dashboards.',
      icon: Lightbulb,
    },
  ];

  const faqs = [
    {
      question: 'How do I get started with Audixa AI?',
      answer: 'Getting started is easy. Simply sign up for a demo, and our team will guide you through the initial setup and campaign creation process, ensuring a smooth and rapid deployment.',
    },
    {
      question: 'What kind of integrations do you support?',
      answer: 'We support a wide range of integrations with popular CRM systems, marketing automation platforms, and communication tools. Our API allows for custom integrations to fit your specific needs.',
    },
    {
      question: 'Is the platform suitable for small businesses?',
      answer: 'Yes, our platform is designed to be scalable and flexible, catering to businesses of all sizes. We offer various pricing tiers to match your budget and operational scale.',
    },
    {
      question: 'How does the AI handle complex conversations?',
      answer: 'Our AI uses advanced natural language processing (NLP) to understand context, intent, and sentiment. It can handle multi-turn conversations and is trained to seamlessly transfer calls to a human agent when needed.',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Book className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Developer Documentation
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 text-blue-100"
          >
            Comprehensive guides and resources to help you integrate Audixa AI and transform your customer engagement.
          </motion.p>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Getting Started in 4 Simple Steps
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {gettingStartedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30 border border-border shadow-md"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4"
                >
                  <step.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <spec.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">{spec.title}</h3>
                </div>
                <p className="text-muted-foreground">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-center mb-8"
          >
            Frequently Asked Questions
          </motion.h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline text-lg md:text-xl">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed py-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500 to-blue-500 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-4 drop-shadow-lg"
          >
            Ready to Build Something Great?
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg mb-8 max-w-2xl mx-auto"
          >
            Our API and developer resources are waiting. Let's create the future of customer engagement together.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-blue-600 text-lg font-bold rounded-full px-8 py-3 transition-transform duration-300 transform"
              >
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;