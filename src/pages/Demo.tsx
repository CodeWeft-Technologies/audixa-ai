import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Zap, MessageSquare, Star, ShoppingCart, Info } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  typing?: boolean;
}

const Demo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Audixa AI, your intelligent customer engagement assistant. I can help with product recommendations, answer questions, and guide you through your shopping experience. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulated AI responses
  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
      return "I'm here to help! I can assist with product recommendations, order tracking, account questions, and general support. What specific area would you like help with?";
    }
    
    if (lowerMessage.includes('product') || lowerMessage.includes('recommend')) {
      return "I'd be happy to recommend products! Based on our conversation and your interests, I can suggest items that match your needs. What type of product are you looking for? For example: electronics, clothing, home goods, etc.";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "I can help you find products within your budget! Our current promotions include 20% off electronics and free shipping on orders over $50. What's your price range for the items you're interested in?";
    }
    
    if (lowerMessage.includes('order') || lowerMessage.includes('track')) {
      return "I can help you track your order! Please provide your order number, and I'll give you real-time updates on your shipment status and estimated delivery time.";
    }
    
    if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
      return "Our return policy allows for returns within 30 days of purchase. I can help you start a return, check your return status, or answer questions about our refund process. What would you like to do?";
    }
    
    if (lowerMessage.includes('account') || lowerMessage.includes('profile')) {
      return "I can help with account-related questions including updating your profile, managing preferences, viewing order history, and setting up notifications. What would you like to update?";
    }
    
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're very welcome! I'm here whenever you need assistance. Is there anything else I can help you with today?";
    }
    
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
      return "Thank you for trying Audixa AI! Have a great day, and feel free to come back anytime. We're here 24/7 to assist you!";
    }
    
    // Default responses for general queries
    const defaultResponses = [
      "That's an interesting question! Based on your inquiry, I can provide personalized assistance. Could you tell me a bit more about what you're looking for?",
      "I understand you're asking about that. Let me help you find the best solution. What specific outcome are you hoping to achieve?",
      "Great question! I have access to comprehensive product and service information. Could you provide a bit more context so I can give you the most relevant assistance?",
      "I'm here to help with that! To provide you with the most accurate and helpful response, could you share a few more details about your specific needs?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(userMessage.text),
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    { text: "Recommend products for me", icon: ShoppingCart },
    { text: "Help with my order", icon: MessageSquare },
    { text: "Tell me about your features", icon: Info },
    { text: "Customer support options", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Try Audixa AI Demo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Experience the power of AI-driven customer engagement. Chat with our intelligent assistant 
            and see how it can transform your customer interactions.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Real-time AI</Badge>
            <Badge variant="secondary">Natural Conversation</Badge>
            <Badge variant="secondary">Smart Recommendations</Badge>
            <Badge variant="secondary">24/7 Available</Badge>
          </div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="card-feature h-96 flex flex-col">
                {/* Chat Header */}
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Audixa AI Assistant</h3>
                      <p className="text-sm text-muted-foreground">Online • Responds instantly</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Live Demo
                  </Badge>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-gradient-primary'
                        }`}>
                          {message.sender === 'user' ? (
                            <User className="w-4 h-4 text-white" />
                          ) : (
                            <Bot className="w-4 h-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          <p className="text-sm">{message.text}</p>
                          <p className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-border">
                  <div className="flex space-x-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message here..."
                      className="flex-1"
                      disabled={isTyping}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="px-4"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue(action.text)}
                      className="justify-start text-sm"
                    >
                      <action.icon className="w-4 h-4 mr-2" />
                      {action.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Demo Info Sidebar */}
            <div className="space-y-6">
              {/* Demo Features */}
              <Card className="card-feature">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Demo Features
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Natural language processing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Product recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Customer support simulation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Intent detection</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">Real-time responses</span>
                  </div>
                </div>
              </Card>

              {/* Demo Stats */}
              <Card className="card-feature">
                <h3 className="text-lg font-semibold text-foreground mb-4">Demo Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Response Time</span>
                    <span className="text-sm font-medium text-foreground">&lt; 2s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Accuracy</span>
                    <span className="text-sm font-medium text-foreground">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Languages</span>
                    <span className="text-sm font-medium text-foreground">20+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <span className="text-sm font-medium text-foreground">24/7</span>
                  </div>
                </div>
              </Card>

              {/* Next Steps */}
              <Card className="card-feature">
                <h3 className="text-lg font-semibold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This is just a glimpse of what Audixa AI can do. Get the full experience with your own data and customizations.
                </p>
                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="/contact">
                      Schedule Full Demo
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/features">
                      View All Features
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Contact Info */}
              <Card className="card-feature">
                <h3 className="text-lg font-semibold text-foreground mb-4">Questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Need help or have questions about this demo? We're here to help!
                </p>
                <div className="space-y-2 text-sm">
                  <div className="text-muted-foreground">
                    Email: demo@audixa.ai
                  </div>
                  <div className="text-muted-foreground">
                    Phone: +1 (555) 123-4567
                  </div>
                  <div className="text-muted-foreground">
                    Live chat available 24/7
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;