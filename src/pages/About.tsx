import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award, Zap, Brain, Globe, Shield, Scale, Clock, TrendingUp, Phone, MessageSquare } from 'lucide-react';
import heroBg from "@/assets/solution-bg_4.jpg";
const About = () => {

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to create solutions that truly transform businesses.'
    },
    {
      icon: Users,
      title: 'Customer Obsessed',
      description: 'Every decision we make is driven by our commitment to delivering exceptional customer value.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We prioritize data security and privacy, ensuring our customers can trust us with their most valuable assets.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We aim to democratize AI technology and make advanced customer engagement tools accessible worldwide.'
    }
  ];

  const stats = [
    { value: '15+', label: 'Enterprise Customers', icon: Users },
    { value: '1M+', label: 'Monthly Interactions', icon: Clock },
    { value: '95%', label: 'Customer Satisfaction', icon: Scale },
    { value: '24/7', label: 'AI Support', icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
     {/* Hero Section */}
<section
  className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Optional: Overlay for better text readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Abstract background shapes (keep if you still want them) */}
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 0.3, scale: 1 }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
    className="absolute inset-0 z-0 opacity-10 blur-3xl rounded-full mix-blend-overlay"
  ></motion.div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
    >
      About Audixa AI
    </motion.h1>
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8"
    >
      We're on a mission to revolutionize customer engagement through intelligent AI technology.
      Our platform empowers businesses to build deeper connections with their customers at scale.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.8, staggerChildren: 0.1 }}
      className="flex flex-wrap justify-center gap-3"
    >
      <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2 text-sm">
        Founded 2021
      </Badge>
      <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2 text-sm">
        500+ Customers
      </Badge>
      <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2 text-sm">
        10M+ Interactions
      </Badge>
      <Badge className="bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2 text-sm">
        AI-First
      </Badge>
    </motion.div>
  </div>
</section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="p-8 rounded-3xl bg-card border-2 border-primary/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <Target className="w-14 h-14 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-bold text-foreground mb-4 relative z-10">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4 relative z-10">
                To democratize advanced AI technology and make intelligent customer engagement
                accessible to businesses of all sizes.
              </p>
              <p className="text-muted-foreground relative z-10">
                We believe that every business should have access to the same level of AI-powered
                customer intelligence that was once only available to tech giants. Our platform
                bridges this gap by providing enterprise-grade AI tools that are easy to implement
                and scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="p-8 rounded-3xl bg-card border-2 border-accent/10 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-teal-100/30 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              <Eye className="w-14 h-14 text-accent mb-6 relative z-10" />
              <h2 className="text-3xl font-bold text-foreground mb-4 relative z-10">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4 relative z-10">
                A world where every customer interaction is meaningful, personalized, and
                drives genuine business value.
              </p>
              <p className="text-muted-foreground relative z-10">
                We envision a future where AI seamlessly enhances human creativity and intuition,
                creating customer experiences that are both highly efficient and deeply personal.
                Our goal is to be the leading platform that makes this vision a reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold text-foreground mb-4"
            >
              Our Core Values
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              The principles that guide everything we do and shape how we build our products and serve our customers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
                className="p-8 rounded-2xl bg-card border border-border text-center shadow-lg relative overflow-hidden group"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-300"
                ></motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                  className="w-14 h-14 text-primary mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 relative z-10"
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="font-semibold text-xl text-foreground mb-3 relative z-10">{value.title}</h3>
                <p className="text-sm text-muted-foreground relative z-10">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 blur-3xl mix-blend-overlay">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.rect x="10" y="10" width="20" height="20" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
            <motion.circle cx="80" cy="50" r="10" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }} />
            <motion.polygon points="30,80 50,90 70,80 50,70" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 1, repeat: Infinity, repeatType: "reverse" }} />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Audixa AI By the Numbers
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-blue-200"
            >
              Our impact in transforming customer engagement across industries.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/10 p-6 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 group"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:bg-white/30 transition-colors duration-300"
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  className="text-5xl font-extrabold text-white mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ y: -30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold text-foreground mb-4"
            >
              Industry Recognition
            </motion.h2>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-muted-foreground"
            >
              Recognized for our AI Calling System, transforming how businesses engage with customers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Updated text for each card */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
              className="p-8 rounded-2xl bg-card border border-border text-center shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 text-primary mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 relative z-10"
              >
                <Award className="w-8 h-8" />
              </motion.div>
              <h3 className="font-semibold text-xl text-foreground mb-2 relative z-10">Excellence in Conversational AI</h3>
              <p className="text-sm text-muted-foreground relative z-10">Awarded for our platform's seamless inbound and outbound call automation.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
              className="p-8 rounded-2xl bg-card border border-border text-center shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="w-14 h-14 text-primary mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 relative z-10"
              >
                <Target className="w-8 h-8" />
              </motion.div>
              <h3 className="font-semibold text-xl text-foreground mb-2 relative z-10">Top AI Solution for Lead Qualification</h3>
              <p className="text-sm text-muted-foreground relative z-10">Recognized for driving significant lead qualification and query handling across key industries.</p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
              className="p-8 rounded-2xl bg-card border border-border text-center shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5 opacity-5 blur-xl group-hover:opacity-10 transition-opacity duration-300"></div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="w-14 h-14 text-primary mx-auto mb-5 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 relative z-10"
              >
                <Globe className="w-8 h-8" />
              </motion.div>
              <h3 className="font-semibold text-xl text-foreground mb-2 relative z-10">Revolutionizing AI Calling</h3>
              <p className="text-sm text-muted-foreground relative z-10">Awarded by the Digital Transformation Institute.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
