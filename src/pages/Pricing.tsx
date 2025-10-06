import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, DollarSign, Euro, IndianRupee, Repeat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates] = useState({
    USD: 1.0,
    EUR: 0.92, // Example rate
    INR: 83.5, // Example rate
  });

  const getConvertedPrice = (basePrice: number) => {
    if (currency === 'USD') return `$${basePrice.toFixed(2)}`;
    if (currency === 'EUR') return `€${(basePrice * exchangeRates.EUR).toFixed(2)}`;
    if (currency === 'INR') return `₹${(basePrice * exchangeRates.INR).toFixed(2)}`;
    return `$${basePrice.toFixed(2)}`;
  };

  const plans = [
    {
      name: 'Starter',
      basePricePerMinute: 0.06, // Base price in USD
      priceUnit: 'per minute',
      description: 'Ideal for individuals and small teams starting out with AI calling.',
      features: [
        'Up to 5,000 minutes/month',
        'Basic call analytics',
        'Multi-language support (pre-set)',
        'Web-based dashboard access',
        'Standard AI voice models',
        'Email support'
      ],
      link: 'https://call-agent-fe-beta.vercel.app/',
    },
    {
      name: 'Pro', // Changed from Intermediate to Pro for more professional naming
      basePricePerMinute: 0.08,
      priceUnit: 'per minute',
      description: 'Perfect for growing businesses needing more features and higher volume.',
      features: [
        'Up to 50,000 minutes/month',
        'Real-time analytics & dashboards',
        'CRM/ERP integrations (Tier 1)',
        'Unlimited concurrent calls*',
        'Customizable scripts & personas',
        'Advanced AI voice models',
        'Priority email & chat support',
        'Dedicated API access'
      ],
      link: 'https://call-agent-fe-beta.vercel.app/',
    },
    {
      name: 'Enterprise', // Changed from Enterprise Solution to Enterprise
      basePricePerMinute: null, // No per-minute price, custom quote
      price: 'Contact Sales',
      priceUnit: '',
      description: 'Tailored solutions for large enterprises with high-volume and custom needs.',
      features: [
        'Custom minute packages',
        'Advanced custom integrations (Salesforce, HubSpot, custom APIs)',
        'Dedicated account manager & onboarding',
        '24/7 Premium support',
        'Advanced security & compliance (ISO, SOC2)',
        'On-premise deployment options',
        'Custom AI model fine-tuning',
        'Volume-based discounts'
      ],
      link: '/contact',
    },
  ];

  const planVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" },
  };

  const iconVariants = {
    initial: { scale: 0 },
    animate: { scale: 1 },
  };

  return (
    <section className="min-h-screen bg-background pt-20 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 opacity-10 blur-3xl mix-blend-overlay">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-glow rounded-full"
        ></motion.div>
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/50 rounded-full"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 py-12 lg:py-16">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 gradient-text"
        >
          Flexible Pricing for Every Scale
        </motion.h2>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          Choose the perfect plan to boost your customer engagement with our AI-powered calling system.
        </motion.p>

        {/* Currency Changer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center items-center gap-4 mb-12"
        >
          <span className="text-muted-foreground font-medium">Display prices in:</span>
          <div className="relative">
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="appearance-none bg-card border border-border rounded-lg pl-3 pr-10 py-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
              <Repeat className="w-4 h-4" />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={planVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <Card className={`flex flex-col justify-between h-full p-6 rounded-3xl shadow-xl border-2 transition-all duration-300 relative overflow-hidden
                ${plan.name === 'Pro' ? 'bg-gradient-to-br from-purple-600 to-indigo-800 border-purple-700/50 text-white' : 'bg-gray-100/50 border-gray-200 text-gray-800'}`}>
                {/* Abstract background pattern for cards */}
                <div className={`absolute inset-0 z-0 opacity-10 ${plan.name === 'Pro' ? 'bg-white/20' : 'bg-purple-500/5'} blur-xl`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M11 0h1v60h-1V0zm6 0h1v60h-1V0zm6 0h1v60h-1V0zm6 0h1v60h-1V0zm6 0h1v60h-1V0zm6 0h1v60h-1V0zm6 0h1v60h-1V0zm6 0h1v60h-1V0zm6 0h1v60h-1V0zM0 11h60v1H0v-1zm0 6h60v1H0v-1zm0 6h60v1H0v-1zm0 6h60v1H0v-1zm0 6h60v1H0v-1zm0 6h60v1H0v-1zm0 6h60v1H0v-1zm0 6h60v1H0v-1zm0 6h60v1H0v-1z' fill='${plan.name === 'Pro' ? '#FFFFFF' : '#8B5CF6'}' /%3E%3C/g%3E%3C/svg%3E")`}}
                ></div>

                <CardHeader className="text-center relative z-10">
                  <CardTitle className={`text-3xl font-extrabold ${plan.name === 'Pro' ? 'text-white' : 'text-gray-800'}`}>
                    {plan.name}
                  </CardTitle>
                  <CardDescription className={`mt-2 ${plan.name === 'Pro' ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center relative z-10 flex-grow">
                  <div className={`text-6xl font-extrabold ${plan.name === 'Pro' ? 'text-white' : 'text-gray-800'} mb-2`}>
                    {plan.basePricePerMinute !== null
                      ? getConvertedPrice(plan.basePricePerMinute)
                      : plan.price}
                  </div>
                  <div className={`text-xl ${plan.name === 'Pro' ? 'text-blue-100' : 'text-gray-600'} mb-8`}>
                    {plan.priceUnit}
                  </div>
                  <ul className={`space-y-4 text-left w-full max-w-xs ${plan.name === 'Pro' ? 'text-white' : 'text-gray-800'}`}>
                    {plan.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2 + idx * 0.05, duration: 0.4 }}
                      >
                        <motion.div
                          variants={iconVariants}
                          initial="initial"
                          whileInView="animate"
                          viewport={{ once: true, amount: 0.7 }}
                          transition={{ delay: 0.2 + idx * 0.05 + 0.1, duration: 0.3 }}
                        >
                          <CheckCircle className={`w-5 h-5 ${plan.name === 'Pro' ? 'text-green-300' : 'text-purple-600'}`} />
                        </motion.div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-center mt-8 relative z-10">
                  <Button asChild size="lg" className={`w-full py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300
                    ${plan.name === 'Pro'
                      ? 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
                      : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
                    }`}>
                    <Link to={plan.link}>
                      {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: plans.length * 0.1 + 0.5, duration: 0.6 }}
          className="text-sm text-muted-foreground mt-12"
        >
          *Scalability depends on your specific use case. Contact sales for details.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
