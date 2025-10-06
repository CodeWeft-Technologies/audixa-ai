import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label'; // <--- Added Label import

import {
  PhoneCall,
  PhoneOff,
  Pause,
  Play,
  Settings,
  Bot, // Changed User to Bot for AI agent
  User, // Kept User for customer
  BarChart2,
  Target,
  MessageSquareText,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Sparkles // Added Sparkles for AI flavor
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { easeInOut } from "framer-motion"; // Explicitly import easeInOut

interface TranscriptEntry {
  id: string;
  speaker: 'agent' | 'customer';
  text: string;
  timestamp: Date;
}

const Demo = () => {
  const [callStatus, setCallStatus] = useState<'idle' | 'calling' | 'paused' | 'ended'>('idle');
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [currentSentiment, setCurrentSentiment] = useState<'neutral' | 'positive' | 'negative'>('neutral');
  const [talkTime, setTalkTime] = useState(0);
  const [intentsDetected, setIntentsDetected] = useState<string[]>([]);
  const [agentPersona, setAgentPersona] = useState('Empathetic Support Agent'); // Renamed inputValue
  const [callObjective, setCallObjective] = useState('Resolve query & improve CSAT');
  const transcriptEndRef = useRef<HTMLDivElement>(null);
  const talkTimeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const predefinedAgentResponses = [
    "Hello, thank you for calling Audixa. How may I assist you today?",
    "I understand you're looking for product information. Could you tell me which product category you're interested in?",
    "Certainly, I can help with that. Are you calling about an existing order or looking to place a new one?",
    "I'm detecting an intent related to technical support. Would you like me to connect you with a specialist, or can I help troubleshoot?",
    "That's a great question! I'm happy to provide more details. What specifically would you like to know about our services?",
    "Thank you for that information. I'm processing your request now. Please bear with me for a moment.",
    "Your satisfaction is important to us. Is there anything else I can assist you with today?",
    "Thank you for using Audixa's AI calling system. Have a wonderful day!"
  ];

  const predefinedCustomerResponses = [
    "Hi, I'm calling about a recent purchase.",
    "I need to know more about your new AI integration features.",
    "My product isn't working as expected, can you help?",
    "What are your current pricing plans?",
    "I want to speak to a human representative.",
    "This is great, thank you so much for your help!",
    "Goodbye, that was helpful."
  ];

  const simulatedAgentThinkTime = () => 1000 + Math.random() * 2000; // 1-3 seconds
  const simulatedCustomerThinkTime = () => 500 + Math.random() * 1500; // 0.5-2 seconds

  const startCall = () => {
    setCallStatus('calling');
    setTranscript([]);
    setTalkTime(0);
    setIntentsDetected([]);
    setCurrentSentiment('neutral');

    const initialAgentMessage: TranscriptEntry = {
      id: Date.now().toString(),
      speaker: 'agent',
      text: "Hello, thank you for calling Audixa. How may I assist you today?",
      timestamp: new Date(),
    };
    setTranscript([initialAgentMessage]);

    talkTimeIntervalRef.current = setInterval(() => {
      setTalkTime(prev => prev + 1);
    }, 1000);

    // Start automated conversation
    setTimeout(() => simulateConversation(), simulatedAgentThinkTime());
  };

  const simulateConversation = () => {
    if (callStatus !== 'calling') return;

    // Simulate Agent response
    const nextAgentResponse = predefinedAgentResponses[Math.floor(Math.random() * predefinedAgentResponses.length)];
    const newAgentMessage: TranscriptEntry = {
      id: Date.now().toString() + 'agent',
      speaker: 'agent',
      text: nextAgentResponse,
      timestamp: new Date(),
    };

    setTranscript(prev => [...prev, newAgentMessage]);
    updateSentimentAndIntents(nextAgentResponse);

    // Simulate Customer response after agent
    setTimeout(() => {
      if (callStatus === 'calling') {
        const nextCustomerResponse = predefinedCustomerResponses[Math.floor(Math.random() * predefinedCustomerResponses.length)];
        const newCustomerMessage: TranscriptEntry = {
          id: Date.now().toString() + 'customer',
          speaker: 'customer',
          text: nextCustomerResponse,
          timestamp: new Date(),
        };
        setTranscript(prev => [...prev, newCustomerMessage]);
        updateSentimentAndIntents(nextCustomerResponse);

        // Continue conversation or end
        if (transcript.length < 10 && !nextCustomerResponse.toLowerCase().includes('goodbye')) { // Limit conversation length
          setTimeout(() => simulateConversation(), simulatedCustomerThinkTime());
        } else {
          endCall();
        }
      }
    }, simulatedAgentThinkTime());
  };


  const pauseCall = () => {
    setCallStatus('paused');
    if (talkTimeIntervalRef.current) {
      clearInterval(talkTimeIntervalRef.current);
    }
  };

  const resumeCall = () => {
    setCallStatus('calling');
    talkTimeIntervalRef.current = setInterval(() => {
      setTalkTime(prev => prev + 1);
    }, 1000);
    // Restart conversation simulation if paused in the middle
    setTimeout(() => simulateConversation(), simulatedAgentThinkTime());
  };

  const endCall = () => {
    setCallStatus('ended');
    if (talkTimeIntervalRef.current) {
      clearInterval(talkTimeIntervalRef.current);
    }
    const finalMessage: TranscriptEntry = {
      id: Date.now().toString() + 'end',
      speaker: 'agent',
      text: "Thank you for using Audixa's AI calling system. Have a wonderful day!",
      timestamp: new Date(),
    };
    setTranscript(prev => [...prev, finalMessage]);
  };

  const updateSentimentAndIntents = (messageText: string) => {
    // Simplified sentiment analysis
    if (messageText.toLowerCase().includes('thank you') || messageText.toLowerCase().includes('great') || messageText.toLowerCase().includes('helpful')) {
      setCurrentSentiment('positive');
    } else if (messageText.toLowerCase().includes('not working') || messageText.toLowerCase().includes('problem') || messageText.toLowerCase().includes('unhappy')) {
      setCurrentSentiment('negative');
    } else {
      setCurrentSentiment('neutral');
    }

    // Simplified intent detection
    if (messageText.toLowerCase().includes('product')) {
      setIntentsDetected(prev => Array.from(new Set([...prev, 'Product Inquiry'])));
    }
    if (messageText.toLowerCase().includes('order') || messageText.toLowerCase().includes('purchase')) {
      setIntentsDetected(prev => Array.from(new Set([...prev, 'Order Status'])));
    }
    if (messageText.toLowerCase().includes('support') || messageText.toLowerCase().includes('help')) {
      setIntentsDetected(prev => Array.from(new Set([...prev, 'Customer Support'])));
    }
    if (messageText.toLowerCase().includes('pricing') || messageText.toLowerCase().includes('cost')) {
      setIntentsDetected(prev => Array.from(new Set([...prev, 'Pricing Inquiry'])));
    }
  };

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  useEffect(() => {
    // Cleanup interval on component unmount
    return () => {
      if (talkTimeIntervalRef.current) {
        clearInterval(talkTimeIntervalRef.current);
      }
    };
  }, []);

  const getSentimentBadge = () => {
    switch (currentSentiment) {
      case 'positive':
        return <Badge className="bg-green-500 text-white"><ThumbsUp className="w-4 h-4 mr-1" /> Positive</Badge>;
      case 'negative':
        return <Badge className="bg-red-500 text-white"><ThumbsDown className="w-4 h-4 mr-1" /> Negative</Badge>;
      default:
        return <Badge variant="secondary">Neutral</Badge>;
    }
  };

  const formatTalkTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } }, // Updated ease
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: easeInOut } }, // Updated ease
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <motion.section
        variants={heroVariants}
        initial="hidden"
        whileInView="visible" // Changed animate to whileInView for robustness
        viewport={{ once: true, amount: 0.2 }} // Added viewport
        className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Changed animate to whileInView
            viewport={{ once: true, amount: 0.5 }} // Added viewport
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Audixa AI Calling Demo
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} // Changed animate to whileInView
            viewport={{ once: true, amount: 0.5 }} // Added viewport
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-8"
          >
            Experience dynamic, AI-powered customer calls with real-time sentiment analysis, intent detection, and automated responses.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2 text-sm">Real-time AI</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2 text-sm">Sentiment Analysis</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2 text-sm">Intent Detection</Badge>
            <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-white/30 px-4 py-2 text-sm">24/7 Automation</Badge>
          </div>
        </div>
      </motion.section>

      {/* Demo Interface */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Call Simulation Card */}
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="lg:col-span-2">
            <Card className="h-[600px] flex flex-col rounded-3xl shadow-xl border-2 border-primary/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Call Header */}
              <div className="flex items-center justify-between p-4 border-b border-border bg-card relative z-10 rounded-t-3xl">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center 
                      ${callStatus === 'calling' ? 'bg-green-500' : 'bg-gray-400'} text-white animate-pulse-slow`}>
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Audixa AI Call in Progress</h3>
                    <p className="text-sm text-muted-foreground">Status: <Badge variant="secondary" className={`${callStatus === 'calling' ? 'bg-green-100 text-green-800' : callStatus === 'paused' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>{callStatus.toUpperCase()}</Badge></p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{formatTalkTime(talkTime)}</span>
                </div>
              </div>

              {/* Transcript Area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50 relative z-10">
                <AnimatePresence>
                  {transcript.map((entry) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${entry.speaker === 'customer' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        entry.speaker === 'customer' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          entry.speaker === 'customer'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white'
                        }`}>
                          {entry.speaker === 'customer' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        <div className="rounded-lg p-3 bg-card shadow-sm border border-border">
                          <p className="text-sm text-foreground">{entry.text}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {entry.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div ref={transcriptEndRef} />
              </div>

              {/* Call Controls */}
              <div className="p-4 border-t border-border bg-card relative z-10 rounded-b-3xl">
                <div className="flex justify-center items-center space-x-4">
                  {callStatus === 'idle' && (
                    <Button onClick={startCall} size="lg" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg">
                      <PhoneCall className="w-5 h-5 mr-2" /> Start Call
                    </Button>
                  )}
                  {callStatus === 'calling' && (
                    <>
                      <Button onClick={pauseCall} variant="outline" size="lg" className="px-6 py-3 rounded-full shadow-md">
                        <Pause className="w-5 h-5 mr-2" /> Pause
                      </Button>
                      <Button onClick={endCall} size="lg" className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-lg">
                        <PhoneOff className="w-5 h-5 mr-2" /> End Call
                      </Button>
                    </>
                  )}
                  {callStatus === 'paused' && (
                    <>
                      <Button onClick={resumeCall} size="lg" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
                        <Play className="w-5 h-5 mr-2" /> Resume Call
                      </Button>
                      <Button onClick={endCall} variant="outline" size="lg" className="px-6 py-3 rounded-full shadow-md">
                        <PhoneOff className="w-5 h-5 mr-2" /> End Call
                      </Button>
                    </>
                  )}
                   {callStatus === 'ended' && (
                    <Button onClick={startCall} size="lg" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg">
                      <PhoneCall className="w-5 h-5 mr-2" /> Restart Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Sidebar - Analytics and Configuration */}
          <div className="space-y-6">
            {/* Real-time Analytics */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex-1">
              <Card className="p-6 rounded-3xl shadow-xl border-2 border-accent/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-teal-100/30 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center relative z-10">
                  <BarChart2 className="w-6 h-6 mr-3 text-accent" />
                  Real-time Analytics
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Sentiment:</span>
                    {getSentimentBadge()}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Talk Time:</span>
                    <Badge variant="secondary">{formatTalkTime(talkTime)}</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Intents Detected:</span>
                    <div className="flex flex-wrap gap-1">
                      {intentsDetected.length > 0 ? (
                        intentsDetected.map((intent, idx) => (
                          <Badge key={idx} variant="outline" className="text-sm bg-blue-100 text-blue-800">{intent}</Badge>
                        ))
                      ) : (
                        <Badge variant="outline" className="text-sm text-gray-500">None</Badge>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Agent Efficiency:</span>
                    <Badge variant="secondary">High</Badge>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* AI Agent Configuration */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex-1">
              <Card className="p-6 rounded-3xl shadow-xl border-2 border-indigo-100/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 to-indigo-100/30 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center relative z-10">
                  <Settings className="w-6 h-6 mr-3 text-indigo-500" />
                  Agent Configuration
                </h3>
                <div className="space-y-4 relative z-10">
                  <div>
                    <Label htmlFor="agent-persona" className="text-muted-foreground">Agent Persona</Label>
                    <Input id="agent-persona" placeholder="e.g., Empathetic Support Agent" value={agentPersona} onChange={(e) => setAgentPersona(e.target.value)} />
                  </div>
                  <div>
                    <Label htmlFor="agent-objective" className="text-muted-foreground">Call Objective</Label>
                    <Input id="agent-objective" placeholder="e.g., Resolve query & improve CSAT" value={callObjective} onChange={(e) => setCallObjective(e.target.value)} />
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Apply Settings</Button>
                </div>
              </Card>
            </motion.div>

            {/* Next Steps */}
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="flex-1">
              <Card className="p-6 rounded-3xl shadow-xl border-2 border-primary/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">Ready for a Deep Dive?</h3>
                <p className="text-muted-foreground mb-6 relative z-10">
                  This demo offers a glimpse. Experience Audixa AI with your own data, custom agents, and advanced features tailored to your business needs.
                </p>
                <div className="space-y-3 relative z-10">
                  <Button className="w-full btn-hero" asChild>
                    <a href="/contact">
                      <PhoneCall className="w-4 h-4 mr-2" /> Schedule Full Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/features">
                      <Target className="w-4 h-4 mr-2" /> Explore Features
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
