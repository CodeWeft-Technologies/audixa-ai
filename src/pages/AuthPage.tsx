import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Calendar, Activity, DollarSign, Package, LogIn, UserPlus, PhoneCall, CheckCircle2, Award } from 'lucide-react';
import { easeOut, easeIn } from "framer-motion"; // Import easeIn and easeOut explicitly

// Mock user data and authentication logic (replace with actual backend integration)
interface UserData {
  name: string;
  email: string;
  pricingPlan: {
    name: string;
    price: string;
    features: string[];
    callMinutes: string;
  };
  recentCallingActivity: string[];
  expiryDate: string;
}

const mockUserData: UserData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  pricingPlan: {
    name: "Enterprise Pro Plan",
    price: "$499/month",
    features: ["Unlimited AI Calls", "Advanced Sentiment Analysis", "Custom AI Agents", "Dedicated Support"],
    callMinutes: "Unlimited"
  },
  recentCallingActivity: [
    "500 AI calls completed (August)",
    "Configured new 'Sales Lead Nurturing' agent",
    "Reviewed Q3 call analytics report",
    "Integrated call data with Salesforce"
  ],
  expiryDate: "2025-12-31"
};

const simulateLogin = async (email: string, password: string): Promise<UserData | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === "jane.doe@example.com" && password === "password123") {
        resolve(mockUserData);
      } else {
        resolve(null);
      }
    }, 1500);
  });
};

const simulateSignup = async (name: string, email: string, password: string): Promise<UserData | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (name && email && password) {
        // In a real app, you'd create a new user and return their data
        resolve({ ...mockUserData, name, email });
      } else {
        resolve(null);
      }
    }, 1500);
  });
};

const AuthPage = () => {
  const { toast } = useToast();
  const [isLoginView, setIsLoginView] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange = (field: string, value: string) => {
    setFormFields(prev => ({ ...prev, [field]: value }));
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (isLoginView) {
      // Login logic
      const user = await simulateLogin(formFields.email, formFields.password);
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
        toast({ title: "Login successful!", description: `Welcome back, ${user.name}.` });
      } else {
        toast({ title: "Login failed", description: "Invalid email or password.", variant: "destructive" });
      }
    } else {
      // Signup logic
      if (formFields.password !== formFields.confirmPassword) {
        toast({ title: "Signup failed", description: "Passwords do not match.", variant: "destructive" });
        setIsLoading(false);
        return;
      }
      const user = await simulateSignup(formFields.name, formFields.email, formFields.password);
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
        toast({ title: "Signup successful!", description: `Welcome, ${user.name}.` });
      } else {
        toast({ title: "Signup failed", description: "Please ensure all fields are valid.", variant: "destructive" });
      }
    }
    setIsLoading(false);
    setFormFields({ name: '', email: '', password: '', confirmPassword: '' }); // Clear form
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    toast({ title: "Logged out", description: "You have been successfully logged out." });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }, // Updated transition
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 200, damping: 20, delay: 0.1 } }, // Updated transition
  };

  return (
    <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
      {/* Abstract background shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute inset-0 z-0 bg-primary-glow opacity-10 blur-3xl rounded-full mix-blend-overlay"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, x: '-50%' }}
        animate={{ opacity: 0.2, scale: 1.2, x: '50%' }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-96 h-96 z-0 bg-accent/50 opacity-10 blur-3xl rounded-full mix-blend-overlay"
      ></motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md w-full mx-auto relative z-10 p-4"
      >
        {!isAuthenticated ? (
          <Card className="rounded-2xl shadow-xl border-2 border-primary/10">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-foreground">
                {isLoginView ? 'Welcome Back!' : 'Join Audixa AI'}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                {isLoginView ? 'Log in to your account to continue.' : 'Create an account to get started.'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleAuthSubmit} className="space-y-5">
                {!isLoginView && (
                  <motion.div variants={itemVariants} initial="hidden" animate="visible">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formFields.name}
                        onChange={(e) => handleFormChange('name', e.target.value)}
                        required
                        className="pl-10"
                      />
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </motion.div>
                )}
                <motion.div variants={itemVariants} initial="hidden" animate="visible">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formFields.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      required
                      className="pl-10"
                    />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </motion.div>
                <motion.div variants={itemVariants} initial="hidden" animate="visible">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formFields.password}
                      onChange={(e) => handleFormChange('password', e.target.value)}
                      required
                      className="pl-10"
                    />
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                </motion.div>
                {!isLoginView && (
                  <motion.div variants={itemVariants} initial="hidden" animate="visible">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        value={formFields.confirmPassword}
                        onChange={(e) => handleFormChange('confirmPassword', e.target.value)}
                        required
                        className="pl-10"
                      />
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>
                  </motion.div>
                )}
                <Button type="submit" className="w-full btn-hero" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {isLoginView ? 'Logging In...' : 'Signing Up...'}
                    </span>
                  ) : (
                    <>
                      {isLoginView ? (
                        <><LogIn className="w-4 h-4 mr-2" /> Log In</>
                      ) : (
                        <><UserPlus className="w-4 h-4 mr-2" /> Sign Up</>
                      )}
                    </>
                  )}
                </Button>
              </form>
              <div className="mt-6 text-center text-sm text-muted-foreground">
                {isLoginView ? (
                  <>
                    Don't have an account?{' '}
                    <Button variant="link" onClick={() => setIsLoginView(false)} className="p-0 h-auto text-primary hover:text-primary-glow">
                      Sign Up
                    </Button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <Button variant="link" onClick={() => setIsLoginView(true)} className="p-0 h-auto text-primary hover:text-primary-glow">
                      Log In
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ) : (
          // User Dashboard View
          <Card className="rounded-2xl shadow-xl border-2 border-accent/10">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl font-bold text-foreground flex items-center justify-center">
                <User className="w-7 h-7 mr-3 text-primary-glow" />
                Welcome, {currentUser?.name}!
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Here's your Audixa AI Calling System dashboard overview.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <Mail className="w-6 h-6 text-primary" />
                <div>
                  <h4 className="font-semibold text-foreground">Email:</h4>
                  <p className="text-muted-foreground">{currentUser?.email}</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible" className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground flex items-center mb-2">
                    <Award className="w-6 h-6 text-green-500 mr-2" />
                    Your Pricing Plan: <span className="ml-2 text-primary">{currentUser?.pricingPlan.name}</span>
                </h4>
                <div className="space-y-1 text-sm text-muted-foreground pl-8">
                    <p className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" /> Price: <span className="font-medium text-foreground ml-1">{currentUser?.pricingPlan.price}</span>
                    </p>
                    <p className="flex items-center">
                        <PhoneCall className="w-4 h-4 mr-2" /> AI Call Minutes: <span className="font-medium text-foreground ml-1">{currentUser?.pricingPlan.callMinutes}</span>
                    </p>
                    <p className="font-medium text-foreground mt-2">Key Features:</p>
                    <ul className="list-disc list-inside space-y-1">
                        {currentUser?.pricingPlan.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" /> {feature}
                            </li>
                        ))}
                    </ul>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible" className="p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold text-foreground flex items-center mb-2">
                    <Activity className="w-6 h-6 text-blue-500 mr-2" />
                    Recent AI Calling Activity:
                </h4>
                <ul className="list-disc list-inside text-muted-foreground pl-8 space-y-1">
                    {currentUser?.recentCallingActivity.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex items-center space-x-4 p-4 bg-muted/50 rounded-lg">
                <Calendar className="w-6 h-6 text-orange-500" />
                <div>
                  <h4 className="font-semibold text-foreground">Plan Expiry Date:</h4>
                  <p className="text-muted-foreground">{currentUser?.expiryDate}</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <Button onClick={handleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white">
                  Log Out
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
};

export default AuthPage;
