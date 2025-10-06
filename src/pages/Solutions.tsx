import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import heroBg from '@/assets/solution-bg_4.jpg'; 

import {
  Home, // For Real Estate
  Heart, // For Healthcare
  ShoppingCart, // For E-Commerce & Retail
  Banknote, // For Banking & Finance
  GraduationCap, // For Education
  Plane, // For Travel & Hospitality
  ArrowRight,
  Check,
  Users,
  TrendingUp,
  Clock,
  Lightbulb, // For hero section badge
  Rocket, // For hero section badge
  ShieldCheck, // For hero section badge
  Star, // For success stories
} from 'lucide-react';
import { motion } from 'framer-motion';

const Solutions = () => {
  const industrySolutions = [
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Streamline property interactions, qualify leads efficiently, and manage appointments effortlessly with AI.',
      features: [
        'AI-powered lead qualification calls',
        'Automated site visit scheduling via calls',
        'Inbound call handling for property FAQs',
        'Dynamic dashboard for call logs & feedback',
      ],
      metrics: [
        { label: 'Lead Qualification', value: '2x' },
        { label: 'Booking Efficiency', value: '30%' },
        { label: 'Customer Engagement', value: '85%' }
      ],
      industry: 'Real Estate',
      color: 'bg-indigo-500',
      layout: 'default' 
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Enhance patient engagement, automate scheduling, and improve communication for better health outcomes.',
      features: [
        'Inbound calls for appointment scheduling',
        'AI for patient follow-ups & test updates',
        'Outbound calls for appointment reminders',
        'Dynamic dashboard for call logs & feedback',
      ],
      metrics: [
        { label: 'Appointment Adherence', value: 'Up 25%' },
        { label: 'Patient Satisfaction', value: '92%' },
        { label: 'Operational Cost', value: '-20%' }
      ],
      industry: 'Healthcare',
      color: 'bg-red-500',
      layout: 'default',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Improve outreach to prospective students, manage academic reminders, and facilitate parent communication.',
      features: [
        'AI-powered outbound calls for admissions',
        'Automated calls for class/exam reminders',
        'Inbound call handling for parent inquiries',
        'Dynamic dashboard for call logs & feedback',
      ],
      metrics: [
        { label: 'Inquiry Conversion', value: '20%' },
        { label: 'Attendance Rate', value: 'Up 15%' },
        { label: 'Parent Engagement', value: 'Up 30%' }
      ],
      industry: 'Education',
      color: 'bg-blue-600',
      layout: 'default',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce & Retail',
      description: 'Automate customer service inquiries, manage order tracking, and personalize shopping experiences with our AI.',
      features: [
        'Outbound calls for order status updates',
        'AI for handling inbound product inquiries',
        'Automated calls for customer feedback',
        'Dynamic dashboard for call logs & feedback',
      ],
      metrics: [
        { label: 'Support Cost', value: '-40%' },
        { label: 'Resolution Time', value: 'Instant' },
        { label: 'Customer Retention', value: 'Up 10%' }
      ],
      industry: 'E-Commerce & Retail',
      color: 'bg-teal-500',
      layout: 'default',
    },
    {
      icon: Banknote,
      title: 'Banking & Finance',
      description: 'Securely handle account inquiries, automate loan application processes, and provide personalized financial advice.',
      features: [
        'AI-driven calls for EMI reminders',
        'Automated loan application assistance',
        'Outbound calls for fraud alerts',
        'Dynamic dashboard for call logs & feedback',
      ],
      metrics: [
        { label: 'Inquiry Resolution', value: '-50%' },
        { label: 'Customer Satisfaction', value: '95%' },
        { label: 'Operational Efficiency', value: '+30%' }
      ],
      industry: 'Banking & Finance',
      color: 'bg-yellow-500',
      layout: 'default',
    },
    {
      icon: Plane,
      title: 'Travel & Hospitality',
      description: 'Streamline booking processes, provide real-time flight updates, and enhance guest experiences with AI-powered communication.',
      features: [
        'Automated calls for booking confirmations',
        'Inbound AI assistant for flight check-ins',
        'Outbound calls for customer feedback',
        'Dynamic dashboard for call logs & feedback',
      ],
      metrics: [
        { label: 'Booking Conversion', value: 'Up 18%' },
        { label: 'Guest Satisfaction', value: 'High' },
        { label: 'Support Call Volume', value: '-35%' }
      ],
      industry: 'Travel & Hospitality',
      color: 'bg-purple-500',
      layout: 'default',
    },
  ];

  const successStories = [
    {
      icon: Star,
      title: 'Real Estate Success',
      description: 'A major real estate firm increased lead conversion rates by 25% by automating initial property inquiries and follow-ups with Audixa AI.',
      industry: 'Real Estate',
      metrics: [
        { label: 'Lead Conversion', value: '+25%' },
        { label: 'Response Time', value: 'Instant' },
      ],
    },
    {
      icon: Star,
      title: 'Education Institute Growth',
      description: 'A leading university improved student enrollment by 15% through personalized communication and timely reminders for application deadlines.',
      industry: 'Education',
      metrics: [
        { label: 'Enrollment Rate', value: '+15%' },
        { label: 'Student Engagement', value: '+30%' },
      ],
    },
    {
      icon: Star,
      title: 'Healthcare Patient Care',
      description: 'A healthcare provider reduced missed appointments by 20% using automated AI-powered reminders and streamlined patient communication.',
      industry: 'Healthcare',
      metrics: [
        { label: 'Appointment Adherence', value: '+20%' },
        { label: 'Patient Satisfaction', value: 'High' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 font-inter">
      {/* Hero Section */}
     {/* Hero Section */}
<section 
  className="py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Optional overlay */}

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
    >
      AI Solutions for Every Industry
    </motion.h1>

    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light"
    >
      Audixa AI provides tailored voice AI solutions designed to meet the unique challenges and opportunities across diverse sectors.
    </motion.p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-wrap justify-center gap-3"
    >
      <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/20 text-white backdrop-blur-sm border-white/30"><Lightbulb className="w-4 h-4 mr-2" /> Industry Specific</Badge>
      <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/20 text-white backdrop-blur-sm border-white/30"><Rocket className="w-4 h-4 mr-2" /> Customizable</Badge>
      <Badge variant="secondary" className="text-sm px-4 py-2 bg-white/20 text-white backdrop-blur-sm border-white/30"><ShieldCheck className="w-4 h-4 mr-2" /> Scalable</Badge>
    </motion.div>
  </div>
</section>


      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore Our Industry-Specific AI Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find out how Audixa AI can specifically address the needs of your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ y: 70, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.15)", rotate: 1 }}
                className="perspective-1000 transform-gpu"
              >
                <Card className="p-6 bg-card rounded-2xl shadow-xl border border-border overflow-hidden h-full flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 ${solution.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{solution.title}</h3>
                      <Badge variant="outline" className="text-xs mt-1">{solution.industry}</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{solution.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Key Solutions</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <h4 className="font-semibold text-foreground mb-2 text-sm">Impact Metrics</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {solution.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-base font-bold text-primary">{metric.value}</div>
                          <div className="text-[10px] text-muted-foreground">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button asChild className="w-full mt-auto text-xs py-2">
                    <Link to="/" state={{ scrollTo: "call-form" }}>
                      Try This Solution <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how businesses in Real Estate, Education, and Healthcare have transformed their customer engagement with Audixa AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              >
                <Card className="p-6 bg-card rounded-2xl shadow-md border border-border h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <story.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg text-center">{story.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm text-center">{story.description}</p>
                  
                  <div className="flex-grow"></div>

                  <div className="grid grid-cols-2 gap-2 mt-auto">
                  {story.metrics.map((metric, idx) => (
                 <Badge
                  key={idx}
                  variant="secondary"
                 className="bg-primary/10 text-primary font-semibold text-center py-3 px-2 flex flex-col items-center rounded-lg"
              >
                 {/* Bigger value */}
                 <div className="text-lg font-bold leading-tight">{metric.value}</div>
                 {/* Slightly smaller label */}
                 <div className="text-xs text-muted-foreground">{metric.label}</div>
                </Badge>
                ))}
               </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Choose Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
      Why Businesses Choose Audixa AI
    </h2>
    <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
      Our platform is designed to adapt to your specific industry needs while
      providing the flexibility to scale as your business grows.
    </p>

    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 max-w-5xl mx-auto">
      {/* Item 1 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col items-center text-center px-6"
      >
        <Users className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Industry Expertise
        </h3>
        <p className="text-sm text-muted-foreground">
          Pre-trained models and workflows tailored for your specific industry
        </p>
      </motion.div>

      {/* Item 2 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col items-center text-center px-6"
      >
        <Clock className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Quick Implementation
        </h3>
        <p className="text-sm text-muted-foreground">
          Get up and running in days, not months, with our proven implementation process
        </p>
      </motion.div>

      {/* Item 3 */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center text-center px-6"
      >
        <TrendingUp className="w-12 h-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Measurable Results
        </h3>
        <p className="text-sm text-muted-foreground">
          Track ROI and performance with comprehensive analytics and reporting
        </p>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Solutions;
