import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Bot, BarChart3, Target, Zap, Check, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const heroAnimation = useScrollAnimation();
  const featuresAnimation = useScrollAnimation();
  const benefitsAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-down">
              AI-Powered Customer 
              <span className="text-primary gradient-text"> Engagement</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Transform your customer interactions with intelligent automation and smart retail insights. 
              Increase engagement, boost sales, and qualify leads automatically.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-delay-300">
            <Button asChild className="btn-hero text-lg px-8 py-4 hover-glow">
              <Link to="/demo">
                Try Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="btn-secondary text-lg px-8 py-4">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="mb-12 relative animate-fade-in-delay-400">
            <div className="relative max-w-4xl mx-auto">
              <img 
                src={heroImage} 
                alt="Audixa AI Platform Dashboard - AI-powered customer engagement interface"
                className="w-full h-auto rounded-2xl shadow-large hover-lift float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent rounded-2xl"></div>
              {/* Floating elements around the hero image */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full float-delay-1 opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/5 rounded-full float-delay-2 opacity-40"></div>
            </div>
          </div>

          {/* Hero Stats */}
          <div 
            ref={statsAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto stagger-animation ${
              statsAnimation.isVisible ? 'in-view' : ''
            }`}
          >
            <div className="text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2 gradient-text">95%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2 gradient-text">3x</div>
              <div className="text-muted-foreground">Lead Qualification Rate</div>
            </div>
            <div className="text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-2 gradient-text">24/7</div>
              <div className="text-muted-foreground">AI-Powered Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={featuresAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 animate-on-scroll ${featuresAnimation.isVisible ? 'in-view' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover how Audixa AI transforms customer engagement with intelligent automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <Card className="card-feature text-center hover-lift group">
              <Bot className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">AI Chatbot</h3>
              <p className="text-muted-foreground">
                Intelligent conversational AI that engages customers naturally and resolves queries instantly.
              </p>
            </Card>

            <Card className="card-feature text-center hover-lift group">
              <Target className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Intent Detection</h3>
              <p className="text-muted-foreground">
                Advanced algorithms identify customer intent and interest levels automatically.
              </p>
            </Card>

            <Card className="card-feature text-center hover-lift group">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-3">Sales Analytics</h3>
              <p className="text-muted-foreground">
                Comprehensive insights and analytics to optimize your sales and marketing strategies.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={benefitsAnimation.ref as React.RefObject<HTMLDivElement>}
              className={`animate-on-scroll ${benefitsAnimation.isVisible ? 'in-view' : ''}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Audixa AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our platform combines cutting-edge AI technology with intuitive design to deliver 
                unprecedented customer engagement results.
              </p>
              
              <div className="space-y-4 stagger-animation">
            {[
              'Instant customer query resolution',
              'Automated lead qualification and scoring',
              'Real-time analytics and insights',
              'Seamless integration with existing systems',
              '24/7 intelligent customer support',
              'Scalable AI that grows with your business'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center group">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{benefit}</span>
              </div>
            ))}
          </div>
            </div>

            <div className="relative animate-fade-in-right">
              <Card className="card-gradient p-8 hover-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4 glow">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Audixa AI Dashboard</h3>
                    <p className="text-muted-foreground">Real-time insights at your fingertips</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-300 hover-lift">
                    <span className="text-sm font-medium">Active Conversations</span>
                    <span className="text-primary font-semibold pulse-slow">147</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-300 hover-lift">
                    <span className="text-sm font-medium">Qualified Leads Today</span>
                    <span className="text-primary font-semibold pulse-slow">23</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors duration-300 hover-lift">
                    <span className="text-sm font-medium">Customer Satisfaction</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-primary font-semibold">4.9</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full float opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full float-delay-1 opacity-40"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/10 rounded-full float-delay-2 opacity-20"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Customer Engagement?
          </h2>
          <p className="text-xl text-white/90 mb-8 animate-fade-in-up">
            Join thousands of businesses already using Audixa AI to boost their sales and customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-300">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4 hover-lift">
              <Link to="/demo">Start Free Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover-lift">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;