import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Users, Award, Zap, Brain, Globe, Shield } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      background: 'Former VP of AI at Microsoft, 15+ years in enterprise software',
      expertise: 'AI Strategy, Product Vision'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO & Co-Founder',
      background: 'Ex-Google AI researcher, PhD in Machine Learning from Stanford',
      expertise: 'Machine Learning, Natural Language Processing'
    },
    {
      name: 'Emily Thompson',
      role: 'VP of Engineering',
      background: 'Former Tesla Autopilot engineer, expert in scalable AI systems',
      expertise: 'AI Infrastructure, System Architecture'
    },
    {
      name: 'David Kim',
      role: 'Head of Customer Success',
      background: '10+ years at Salesforce, specializing in enterprise AI adoption',
      expertise: 'Customer Experience, Implementation'
    }
  ];

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

  const milestones = [
    { year: '2021', event: 'Company founded by AI veterans from Google, Microsoft, and Tesla' },
    { year: '2022', event: 'Launched MVP with 50+ beta customers across retail and e-commerce' },
    { year: '2023', event: 'Raised $15M Series A, expanded to 500+ enterprise customers' },
    { year: '2024', event: 'Launched advanced intent detection, serving 10M+ customer interactions monthly' }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Audixa AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We're on a mission to revolutionize customer engagement through intelligent AI technology. 
            Our platform empowers businesses to build deeper connections with their customers at scale.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="secondary">Founded 2021</Badge>
            <Badge variant="secondary">500+ Customers</Badge>
            <Badge variant="secondary">10M+ Interactions</Badge>
            <Badge variant="secondary">AI-First</Badge>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="card-feature">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                To democratize advanced AI technology and make intelligent customer engagement 
                accessible to businesses of all sizes.
              </p>
              <p className="text-muted-foreground">
                We believe that every business should have access to the same level of AI-powered 
                customer intelligence that was once only available to tech giants. Our platform 
                bridges this gap by providing enterprise-grade AI tools that are easy to implement 
                and scale.
              </p>
            </Card>

            <Card className="card-feature">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-4">
                A world where every customer interaction is meaningful, personalized, and 
                drives genuine business value.
              </p>
              <p className="text-muted-foreground">
                We envision a future where AI seamlessly enhances human creativity and intuition, 
                creating customer experiences that are both highly efficient and deeply personal. 
                Our goal is to be the leading platform that makes this vision a reality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we build our products and serve our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover-lift card-gradient">
                <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              From startup to industry leader, here's how we've grown and evolved.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-20 text-right mr-8">
                  <Badge variant="outline" className="font-semibold">
                    {milestone.year}
                  </Badge>
                </div>
                <div className="flex-1">
                  <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our team combines decades of experience in AI, enterprise software, and customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 text-center hover-lift card-gradient">
                <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-xs text-muted-foreground mb-3">{member.background}</p>
                <Badge variant="secondary" className="text-xs">
                  {member.expertise}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">By the Numbers</h2>
            <p className="text-lg text-muted-foreground">
              Our impact in transforming customer engagement across industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Enterprise Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Monthly Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-8">Recognition & Awards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover-lift card-gradient">
              <Award className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Best AI Startup 2023</h3>
              <p className="text-sm text-muted-foreground">TechCrunch Disrupt</p>
            </Card>
            
            <Card className="p-6 hover-lift card-gradient">
              <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Innovation Award</h3>
              <p className="text-sm text-muted-foreground">Retail Tech Summit</p>
            </Card>
            
            <Card className="p-6 hover-lift card-gradient">
              <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Top 10 AI Companies</h3>
              <p className="text-sm text-muted-foreground">Forbes 2024</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;