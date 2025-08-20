import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Store, ShoppingCart, Headphones, Building, ArrowRight, Check, Users, TrendingUp, Clock } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Store,
      title: 'Retail & Brick-and-Mortar',
      description: 'Transform in-store customer experiences with AI-powered engagement and personalized recommendations.',
      features: [
        'In-store customer guidance',
        'Product recommendation engine',
        'Queue management optimization',
        'Sales associate assistance',
        'Inventory inquiries automation',
        'Customer feedback collection'
      ],
      metrics: [
        { label: 'Sales Increase', value: '35%' },
        { label: 'Customer Satisfaction', value: '94%' },
        { label: 'Support Efficiency', value: '60%' }
      ],
      industry: 'Retail',
      color: 'bg-blue-500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce & Online Retail',
      description: 'Boost online sales with intelligent chatbots, automated customer support, and conversion optimization.',
      features: [
        'Shopping cart abandonment recovery',
        'Product discovery assistance',
        'Order tracking automation',
        'Returns and refunds handling',
        'Personalized product suggestions',
        'Multi-channel support integration'
      ],
      metrics: [
        { label: 'Conversion Rate', value: '28%' },
        { label: 'Cart Recovery', value: '42%' },
        { label: 'Support Cost', value: '-50%' }
      ],
      industry: 'E-commerce',
      color: 'bg-green-500'
    },
    {
      icon: Headphones,
      title: 'Customer Support & Service',
      description: 'Revolutionize customer service with 24/7 AI support, intelligent ticket routing, and automated resolutions.',
      features: [
        '24/7 automated support',
        'Intelligent ticket classification',
        'Multi-language customer service',
        'Escalation management',
        'Knowledge base integration',
        'Customer sentiment analysis'
      ],
      metrics: [
        { label: 'Response Time', value: '90%' },
        { label: 'Resolution Rate', value: '85%' },
        { label: 'Customer CSAT', value: '4.8/5' }
      ],
      industry: 'Support',
      color: 'bg-purple-500'
    },
    {
      icon: Building,
      title: 'Enterprise & B2B',
      description: 'Scale enterprise sales and lead qualification with advanced AI that understands complex business needs.',
      features: [
        'Advanced lead qualification',
        'Multi-stakeholder engagement',
        'Enterprise sales workflows',
        'Contract and pricing assistance',
        'Technical specification support',
        'Integration with enterprise systems'
      ],
      metrics: [
        { label: 'Lead Quality', value: '3x' },
        { label: 'Sales Cycle', value: '-40%' },
        { label: 'Deal Size', value: '22%' }
      ],
      industry: 'Enterprise',
      color: 'bg-orange-500'
    }
  ];

  const useCases = [
    {
      title: 'Fashion Retailer Success',
      description: 'Major fashion brand increased online conversions by 45% using AI-powered style recommendations.',
      result: '45% conversion increase'
    },
    {
      title: 'Tech Company Growth',
      description: 'SaaS company reduced support tickets by 60% while improving customer satisfaction scores.',
      result: '60% ticket reduction'
    },
    {
      title: 'Electronics Chain Win',
      description: 'Electronics retailer automated 80% of customer inquiries, freeing up staff for high-value interactions.',
      result: '80% automation rate'
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tailored AI solutions for every industry. Discover how Audixa AI transforms 
            customer engagement across retail, e-commerce, support, and enterprise environments.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Retail</Badge>
            <Badge variant="secondary">E-commerce</Badge>
            <Badge variant="secondary">Customer Support</Badge>
            <Badge variant="secondary">Enterprise</Badge>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="card-feature hover-lift overflow-hidden">
                <div className="flex items-start mb-6">
                  <div className={`w-12 h-12 ${solution.color} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{solution.title}</h3>
                      <Badge variant="outline" className="text-xs">{solution.industry}</Badge>
                    </div>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-muted/50 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-foreground mb-3">Results</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {solution.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link to="/demo">
                    Try This Solution <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how businesses across industries have transformed their customer engagement with Audixa AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 text-center hover-lift card-gradient">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{useCase.description}</p>
                <Badge variant="secondary" className="bg-primary/10 text-primary font-semibold">
                  {useCase.result}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Businesses Choose Audixa AI
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform is designed to adapt to your specific industry needs while providing 
                the flexibility to scale as your business grows.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Industry Expertise</h3>
                    <p className="text-muted-foreground text-sm">
                      Pre-trained models and workflows tailored for your specific industry
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quick Implementation</h3>
                    <p className="text-muted-foreground text-sm">
                      Get up and running in days, not months, with our proven implementation process
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Measurable Results</h3>
                    <p className="text-muted-foreground text-sm">
                      Track ROI and performance with comprehensive analytics and reporting
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="card-gradient p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a personalized demo to see how Audixa AI can transform your specific use case.
                </p>
                <div className="space-y-4">
                  <Button asChild className="w-full">
                    <Link to="/demo">Try Interactive Demo</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;