import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bot, BarChart3, Target, Star, Settings, Play, TrendingUp, ChevronLeft, ChevronRight, PhoneCall, ArrowRight, LogIn, Upload, MessageSquare, LineChart, Users, Clock, Brain, Globe, Repeat, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import aiCallingImg from "@/assets/ai-calling_11.jpg";
const Home = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [callStatus, setCallStatus] = useState('');

  // 👇 NEW: auto-scroll when navigated with state.scrollTo
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const handleGetACall = (e: React.FormEvent, type: 'form' | 'callUs' = 'form') => {
    e.preventDefault();
    setCallStatus('Connecting you to our AI...');
    
    setTimeout(() => {
      setCallStatus('Form submitted! An email with your details will be sent shortly.');
     
      setTimeout(() => {
        setCallStatus('');
        if (type === 'form') { 
          setName('');
          setPhone('');
          setEmail('');
          setCompany('');
        }
      }, 4000); 
    }, 2000); 
  };

  const howItWorksSteps = [
    {
      icon: Brain,
      title: "Intelligent Setup",
      description: "Seamlessly integrate and upload your data. Our AI quickly grasps your company's essence, preparing for intelligent interactions.",
      glowClass: "from-blue-500 to-blue-700"
    },
    {
      icon: Settings,
      title: "Custom AI Persona",
      description: "Define your AI agent's personality and objectives. Craft custom scripts and conversation flows to ensure a consistent brand voice.",
      glowClass: "from-purple-500 to-purple-700"
    },
    {
      icon: PhoneCall,
      title: "AI Calling Activation",
      description: "Launch your AI calling system with a single tap. Automate outbound campaigns or streamline inbound query handling instantly.",
      glowClass: "from-green-500 to-green-700"
    },
    {
      icon: MessageSquare,
      title: "Dynamic Interactions",
      description: "Our AI engages customers with natural, personalized conversations, handling queries, qualifying leads, and booking appointments efficiently.",
      glowClass: "from-yellow-500 to-yellow-700"
    },
    {
      icon: LineChart,
      title: "Real-time Insights",
      description: "Monitor performance with intuitive dashboards. Get instant analytics on call outcomes, customer sentiment, and agent efficiency.",
      glowClass: "from-red-500 to-red-700"
    },
    {
      icon: Repeat,
      title: "Continuous Optimization",
      description: "Audixa AI continuously learns from every interaction, automatically refining strategies and improving customer satisfaction over time.",
      glowClass: "from-pink-500 to-pink-700"
    },
  ];


  const featuresList = [
    { icon: Bot, title: "AI Calling", desc: "Automated, intelligent calls for sales & support." },
    { icon: Target, title: "Intent Detection", desc: "Real-time understanding of customer needs." },
    { icon: BarChart3, title: "Live Analytics", desc: "Dashboard for performance & lead insights." },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "CEO, Innovate Co.",
      review: "Audixa's AI chatbot has revolutionized our customer service. We've seen a 40% increase in customer satisfaction and a significant drop in support tickets.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Mark Johnson",
      company: "VP Sales, Global Corp.",
      review: "The automated lead qualification feature is a game-changer. Our sales team can now focus on high-value prospects, and our conversion rates have doubled.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emily White",
      company: "Founder, Retail Solutions",
      review: "The sales analytics dashboard provides incredible insights. We can now make data-driven decisions that directly impact our bottom line. Highly recommend!",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" as any } },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transition: { type: "spring" as const, stiffness: 300, damping: 20 }
    },
    tap: { scale: 0.98 }
  };


  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* 1. Hero Section - Main Heading and Intro Paragraph (Over Video) */}
      <section className="relative min-h-[40vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden text-white p-4">
      {/* Placeholder video - replace with actual video path */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/src/assets/Hero-video.mp4"
          onError={(e) => {
            const target = e.target as HTMLVideoElement;
            if (target.parentElement) {
              // Fallback to a placeholder image if video fails to load
              target.parentElement.style.backgroundImage = `url(https://placehold.co/1920x1080/000000/FFFFFF?text=Video+Not+Available)`;
              target.parentElement.style.backgroundSize = 'cover';
              target.parentElement.style.backgroundPosition = 'center';
              target.style.display = 'none'; // Hide the broken video element
            }
          }}
        >
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black opacity-15 z-25"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center max-w-5xl mx-auto px-4 md:px-6 lg:px-8"
        >
        <motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 
             drop-shadow-2xl tracking-tight text-white"
>
  Power Up Your Business Call with Voice AI
</motion.h1>

          <motion.p
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="mt-4 text-lg md:text-xl text-white-800 font-medium max-w-3xl mx-auto mb-0 drop-shadow-lg"
           >
           Discover the modern way to create, deploy, and manage AI-driven voice agents with complete control and insights.
        </motion.p>
        </motion.div>
      </section>

      {/* New Section: Call To Action Below Hero */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 text-gray-900 text-center rounded-xl shadow-inner">
  <div className="max-w-4xl mx-auto">
  <motion.p 
  className="text-4xl md:text-5xl font-extrabold mb-2 text-black"
>
  Time to hire your AI Call Center.
</motion.p>
    <motion.p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
      Revolutionize your call operation with Audixa.
    </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="relative perspective-1000 transform-gpu"
            >
              <Button asChild size="lg" className="relative text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-gradient-to-br from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-bold overflow-hidden group shadow-lg transition-all duration-300">
                <a href="https://call-agent-fe-beta.vercel.app/">
                  <span className="relative z-10">TRY FOR FREE</span>
                  <span className="absolute inset-0 bg-white opacity-20 transform -rotate-45 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="relative perspective-1000 transform-gpu"
            >
              <Button asChild size="lg" variant="outline" className="relative text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-full border-2 border-white text-Black bg-transparent hover:bg-white hover:text-primary font-bold overflow-hidden group shadow-lg transition-all duration-300">
                <Link to="/contact">
                  <span className="relative z-10">CONTACT SALES</span>
                  <span className="absolute inset-0 bg-primary opacity-20 transform rotate-45 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Try Demo Section (Audixa Inspired) */}
      <section
  id="call-form"
    className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-center">
  <div className="max-w-7xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 drop-shadow-lg"
    >
      Experience Our AI Live
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-12"
    >
      Get a taste of intelligent conversations. Call our demo AI or let us call you.
    </motion.p>

    {/* Container Card */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative bg-white p-8 md:p-10 rounded-3xl shadow-2xl h-full flex flex-col justify-center border border-gray-200 mx-auto max-w-5xl"
      whileHover={{ scale: 1.02, boxShadow: "0 25px 60px rgba(0,0,0,0.2)" }}
    >
      <div className="flex flex-col lg:flex-row gap-10 w-full items-center">
        
        {/* Form */}
        <div className="flex-1 w-full lg:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let Our AI Call You</h3>
          <p className="text-gray-600 text-base mb-6">
            Enter your details, and our AI will call you to walk through a personalized demo.
          </p>

          <form onSubmit={(e) => handleGetACall(e, 'form')} className="space-y-5">
            <Input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-md 
                         bg-gradient-to-r from-white to-gray-50 focus:ring-4 focus:ring-blue-300 
                         focus:border-blue-400 transition transform hover:scale-[1.02]"
            />
            <Input
              type="tel"
              id="phone"
              placeholder="Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-md 
                         bg-gradient-to-r from-white to-gray-50 focus:ring-4 focus:ring-green-300 
                         focus:border-green-400 transition transform hover:scale-[1.02]"
            />
            <Input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-md 
                         bg-gradient-to-r from-white to-gray-50 focus:ring-4 focus:ring-purple-300 
                         focus:border-purple-400 transition transform hover:scale-[1.02]"
            />
            <Input
              type="text"
              id="company"
              placeholder="Your Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 shadow-md 
                         bg-gradient-to-r from-white to-gray-50 focus:ring-4 focus:ring-pink-300 
                         focus:border-pink-400 transition transform hover:scale-[1.02]"
            />
            <Button
              type="submit"
              className="w-full py-3 text-lg font-semibold rounded-xl 
                         bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
                         shadow-lg hover:shadow-xl transform hover:scale-[1.02] 
                         transition-all duration-300"
            >
              Get a Call
            </Button>
          </form>
        </div>

       {/* AI Calling Use Cases */}
<div className="flex-1 w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0">
  {[
    { title: "Pre-Sales", bgColor: "from-blue-400 to-blue-600" },
    { title: "Sales", bgColor: "from-purple-400 to-purple-600" },
    { title: "Customer Support", bgColor: "from-orange-400 to-red-500" },
    { title: "Appointment Booking", bgColor: "from-green-400 to-green-600" },
  ].map((card, i) => (
    <motion.div
      key={i}
      whileHover={{
        scale: 1.05,
        y: -8,
        rotateX: 5,
        rotateY: i % 2 === 0 ? 5 : -5,
        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`rounded-2xl p-8 text-white font-bold text-xl shadow-xl bg-gradient-to-br ${card.bgColor} transform-gpu perspective-1000 select-none`}
    >
      {card.title}
    </motion.div>
  ))}
</div>
      </div>

      {/* Call Status Message */}
      <AnimatePresence>
        {callStatus && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mt-6 p-4 rounded-md bg-blue-100 text-blue-800 text-sm font-medium w-full text-center"
          >
            {callStatus}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  </div>
</section>


      {/* 3. How Audixa AI Works Section - New Dynamic Design */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-muted/20 overflow-hidden">
        {/* Background Animation Blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 0.2, scale: 1, rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          style={{ animationDelay: '0s' }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 0.2, scale: 1.2, rotate: -360 }}
          transition={{ duration: 12, delay: 1, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          style={{ animationDelay: '2s' }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{ opacity: 0.2, scale: 0.8, rotate: 360 }}
          transition={{ duration: 15, delay: 2, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
          style={{ animationDelay: '4s' }}
        ></motion.div>


        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 drop-shadow-lg"
          >
            How Audixa AI <span className="text-primary">Transforms</span> Your Business
          </motion.h2>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12"
          >
            Get started with our intelligent AI calling system in just a few simple steps.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.25)",
                  rotateX: 5,
                  rotateY: index % 2 === 0 ? 5 : -5,
                  transition: { type: "spring", stiffness: 180, damping: 10 }
                }}
                whileTap={{ scale: 0.98 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
                className="relative group rounded-3xl p-1 overflow-hidden shadow-2xl border border-transparent bg-card/80 backdrop-blur-sm transform-gpu perspective-1000"
                style={{ willChange: 'transform, box-shadow' }}
              >
                {/* Dynamic Gradient Border/Glow - Changed to a hardcoded class to fix the animation color issue */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.glowClass} opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-md rounded-3xl`}></div>

                <Card className="relative z-10 w-full h-full flex flex-col items-center text-center p-8 bg-card rounded-[calc(1.5rem-1px)] border-none">
                  {/* Icon with Floating Animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1
                    }}
                    className={`w-20 h-20 bg-gradient-to-r ${step.glowClass} rounded-full flex items-center justify-center mb-6 flex-shrink-0 shadow-lg`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-3">{step.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">{step.description}</CardDescription>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Keyframes for blob animation */}
        <style>{`
          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }

          .animate-blob {
            animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.35, 1);
          }
        `}</style>
      </section>

     {/* 4. Powerful AI Features Section (Family Tree Style) */}
<section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
      Powerful AI Features
    </h2>
    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
      Explore how our AI platform transforms customer engagement with automation and smart insights.
    </p>

    <div className="flex flex-col items-center">
      {/* Top Root Node */}
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <div className="px-8 py-6 bg-gradient-to-br from-primary to-blue-600 text-white rounded-2xl shadow-2xl transform-gpu">
          <Bot className="w-10 h-10 mx-auto mb-2" />
          <h3 className="text-xl font-bold">AI Bot</h3>
          <p className="text-sm opacity-90">The Core Engine</p>
        </div>
      </motion.div>

      {/* Connector Bracket */}
      <div className="relative w-full max-w-lg h-16 flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 w-[70%] h-0.5 bg-gray-300 -translate-x-1/2"></div>
        <div className="absolute top-0 left-[15%] w-0.5 h-8 bg-gray-300"></div>
        <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-300 -translate-x-1/2"></div>
        <div className="absolute top-0 right-[15%] w-0.5 h-8 bg-gray-300"></div>
      </div>

      {/* Child Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -6 }}
          className="px-6 py-5 bg-white border border-gray-200 rounded-xl shadow-lg transform-gpu"
        >
          <PhoneCall className="w-8 h-8 text-primary mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-900">AI Calling</h4>
          <p className="text-sm text-gray-600">Automated, intelligent calls for sales & support.</p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -6 }}
          className="px-6 py-5 bg-white border border-gray-200 rounded-xl shadow-lg transform-gpu"
        >
          <Target className="w-8 h-8 text-primary mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-900">Intent Detection</h4>
          <p className="text-sm text-gray-600">Real-time understanding of customer needs.</p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05, y: -6 }}
          className="px-6 py-5 bg-white border border-gray-200 rounded-xl shadow-lg transform-gpu"
        >
          <BarChart3 className="w-8 h-8 text-primary mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-gray-900">Live Analytics</h4>
          <p className="text-sm text-gray-600">Dashboards for performance & lead insights.</p>
        </motion.div>
      </div>
    </div>
  </div>
</section>

      {/* 5. Testimonials Section - Dynamic Layout */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            See how Audixa AI has helped businesses like yours achieve their goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.03, boxShadow: "0 15px 30px rgba(0,0,0,0.08)" }}
              >
                {/* Apply different styles for middle testimonial */}
                {i === 1 ? (
                  <Card className="p-8 text-left shadow-2xl rounded-2xl hover-lift bg-primary text-white border border-primary/50 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-10 blur-xl"></div>
                    <div className="flex items-center mb-4 relative z-10">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-white" />
                      <div>
                        <h4 className="font-semibold text-xl">{testimonial.name}</h4>
                        <p className="text-sm text-gray-200">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="italic text-lg relative z-10">"{testimonial.review}"</p>
                    <div className="flex mt-4 relative z-10">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 text-yellow-300 fill-current" />
                      ))}
                    </div>
                  </Card>
                ) : (
                  <Card className="p-8 text-left shadow-lg rounded-2xl hover-lift bg-card border border-border">
                    <div className="flex items-center mb-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-primary/50" />
                      <div>
                        <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-foreground italic text-base">"{testimonial.review}"</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. About Us Section - With Image */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute inset-0 z-0 opacity-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl scale-150 animate-pulse-slow"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Audixa AI
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Audixa AI is a leading innovator in AI-powered customer engagement solutions. We empower businesses to revolutionize their call operations, enhance customer satisfaction, and drive significant growth through intelligent automation and real-time insights. Our platform is built on a foundation of cutting-edge machine learning and natural language processing, designed for scalability and seamless integration with your existing systems.
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto lg:mx-0">
              Our mission is to make advanced AI accessible and actionable for businesses of all sizes, enabling them to deliver personalized, efficient, and impactful customer experiences 24/7.
            </p>
            <Button asChild className="btn-hero mt-8 text-base md:text-lg">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/about">Learn More About Us</Link>
              </motion.div>
            </Button>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="flex justify-center lg:justify-end"
          >
            
          <img
              src={aiCallingImg}
              alt="Audixa AI Calling"
              className="w-full max-w-md rounded-2xl shadow-2xl border border-blue-200 transform-gpu"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
