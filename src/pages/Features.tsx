import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bot, Brain, BarChart3, Target, MessageSquare, Shield, Zap, Users, Clock, TrendingUp, CheckCircle, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Chatbot',
      description: 'Intelligent conversational AI that engages customers naturally and provides instant support.',
      benefits: ['Natural language processing', 'Multi-language support', 'Context-aware responses', '24/7 availability'],
      category: 'Core AI'
    },
    {
      icon: Brain,
      title: 'Customer Intent Detection',
      description: 'Advanced machine learning algorithms that identify customer intent and interest levels automatically.',
      benefits: ['Real-time intent analysis', 'Behavioral pattern recognition', 'Purchase likelihood scoring', 'Engagement optimization'],
      category: 'Intelligence'
    },
    {
      icon: BarChart3,
      title: 'Retail Sales Analytics',
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
      icon: MessageSquare,
      title: 'Omnichannel Communication',
      description: 'Seamless customer engagement across multiple channels and touchpoints.',
      benefits: ['Multi-channel support', 'Unified conversations', 'Context preservation', 'Channel optimization'],
      category: 'Communication'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance features to protect customer data and privacy.',
      benefits: ['End-to-end encryption', 'GDPR compliance', 'Data protection', 'Audit trails'],
      category: 'Security'
    }
  ];

  const additionalFeatures = [
    { icon: Zap, title: 'Lightning Fast', description: 'Sub-second response times' },
    { icon: Users, title: 'Team Collaboration', description: 'Built-in team management tools' },
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock assistance' },
    { icon: TrendingUp, title: 'Scalable Growth', description: 'Grows with your business' },
    { icon: CheckCircle, title: 'Easy Integration', description: 'Simple API and webhooks' },
    { icon: Globe, title: 'Global Reach', description: 'Multi-language and region support' }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful AI Features
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover how Audixa AI transforms customer engagement with cutting-edge artificial intelligence, 
            advanced analytics, and seamless automation.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary" className="text-sm">AI-Powered</Badge>
            <Badge variant="secondary" className="text-sm">Real-time Analytics</Badge>
            <Badge variant="secondary" className="text-sm">Enterprise Ready</Badge>
            <Badge variant="secondary" className="text-sm">Easy Integration</Badge>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-feature hover-lift">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                      <Badge variant="outline" className="text-xs">{feature.category}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{feature.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with enterprise-grade features and designed for teams of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover-lift card-gradient">
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Seamless Integrations
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Connect Audixa AI with your existing tools and workflows. Our platform integrates with popular CRM, 
            e-commerce, and marketing platforms.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {['Salesforce', 'HubSpot', 'Shopify', 'Slack', 'Zendesk', 'Microsoft'].map((integration, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-xs font-medium text-muted-foreground">{integration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;