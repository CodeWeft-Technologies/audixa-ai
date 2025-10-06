import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Phone, TrendingUp, MessageSquare, Building, Heart, GraduationCap, ShoppingCart, Banknote, Plane, Hotel, Star, ShieldCheck, Database, Rocket, Lightbulb, PlusCircle, PlusCircleIcon, HospitalIcon } from 'lucide-react';
import heroBg from "@/assets/solution-bg_4.jpg";
const FAQ = () => {
  const faqs = [
    {
      icon: Phone,
      question: "What is the Audixa AI calling system?",
      answer: "Our AI calling system is an intelligent platform designed for automated inbound and outbound calls. It uses advanced conversational AI to handle customer queries, qualify leads, and manage communication workflows across various industries."
    },
    {
      icon: TrendingUp,
      question: "How does the system help with lead Qualification?",
      answer: "The AI system proactively makes outbound calls to qualify leads based on predefined criteria. It can engage prospects in natural conversations, gather essential information, and automatically route high-quality leads to your sales team, significantly improving your sales pipeline."
    },
    {
      icon: MessageSquare,
      question: "Can it handle complex query handling?",
      answer: "Yes, our system is built with state-of-the-art Natural Language Processing (NLP) to understand and respond to a wide range of customer queries. It can provide instant answers to FAQs, resolve common issues, and escalate more complex inquiries to human agents with all conversation context."
    },
    {
      icon: Building,
      question: "How is the system used in Real Estate?",
      answer: "In real estate, it can handle property inquiries 24/7, schedule site visits, qualify potential buyers and renters, and provide property details, ensuring no lead is missed outside of business hours."
    },
    {
      icon: HospitalIcon,
      question: "What are its applications in Healthcare?",
      answer: "For healthcare, the AI can automate appointment scheduling and reminders, answer questions about clinic hours and services, handle patient follow-ups, and pre-screen patients before connecting them to medical staff."
    },
    {
      icon: GraduationCap,
      question: "How does it benefit the Education sector?",
      answer: "In education, the system can assist with student enrollment inquiries, provide information on courses and fees, handle administrative queries, and send reminders for deadlines or events to students and parents."
    },
    {
      icon: ShoppingCart,
      question: "Can it be used for E-commerce?",
      answer: "Absolutely. The AI can handle order status checks, process returns and exchanges, answer product-related questions, and provide personalized recommendations, enhancing the overall shopping experience for customers."
    },
    {
      icon: Banknote,
      question: "How is it helpful for Banking and Finance?",
      answer: "For banking and finance, our AI can manage account inquiries, provide EMI reminders, handle card activation and blocking requests, and guide customers through loan applications, all while ensuring high security standards."
    },
    {
      icon: Hotel,
      question: "What about Hospitality and Travel?",
      answer: "In this sector, the system can automate hotel bookings, provide travel itinerary details, answer questions about amenities, and handle changes or cancellations, offering seamless support to travelers at any time."
    },
    {
      icon: ShieldCheck,
      question: "Is my data secure with the Audixa AI system?",
      answer: "Yes, we prioritize enterprise-level security and data privacy. We employ end-to-end encryption, multi-factor authentication, and adhere to global compliance standards like GDPR and HIPAA to ensure your data is always protected."
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
     {/* Hero Section */}
<section
  className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Overlay to improve readability */}
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="max-w-7xl mx-auto text-center relative z-10">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
    >
      Frequently Asked Questions
    </motion.h1>
    <motion.p
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
    >
      Find answers to the most common questions about our AI calling system.
    </motion.p>
  </div>
</section>

      {/* FAQ Accordion Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4 rounded-xl shadow-lg border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300"
              >
                <AccordionItem value={`item-${index}`} className="border-b-0">
                  <AccordionTrigger className="flex items-center gap-4 px-6 py-4 text-left font-semibold text-lg hover:no-underline hover:text-primary">
                    <faq.icon className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="flex-1">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-700 to-purple-800 text-white text-center">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold mb-4 drop-shadow-lg"
        >
          Still have questions?
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
        >
          If you can't find the answer you're looking for, our team is ready to help.
          Reach out to us for personalized assistance.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild size="lg" className="btn-hero text-lg font-bold bg-white text-blue-700 hover:bg-white/90 rounded-full px-8 py-3 transition-transform duration-300 transform">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default FAQ;
