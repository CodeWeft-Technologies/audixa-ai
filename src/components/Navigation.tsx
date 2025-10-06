import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap, PhoneCall, UserPlus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { easeOut, easeIn } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const mainNavItems = [
    { path: '/', label: 'Home' },
    { path: '/features', label: 'Features' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/pricing', label: 'Pricing' },
  ];

  const dropdownNavItems = [
    { path: '/about', label: 'About' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  const specialNavItems = [
    { path: '#call-form', label: 'Try Demo', icon: PhoneCall, highlightColor: 'from-blue-500 to-indigo-600' },
    { path: 'https://call-agent-fe-beta.vercel.app/', label: 'Login/Signup', icon: UserPlus, highlightColor: 'from-green-500 to-teal-600', isExternal: true },
  ];

  const isActive = (path: string) => location.pathname === path;

  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 200, damping: 20, delay: 0.1 } },
    hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)", y: -5 },
    tap: { scale: 0.95 },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scaleY: 0.9, originY: 0 },
    visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.3, ease: easeOut } },
    exit: { opacity: 0, y: -10, scaleY: 0.9, transition: { duration: 0.2, ease: easeIn } },
  };

  // smooth scroll helper
  const handleSmoothScroll = (hash: string) => {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // click handler for Try Demo
  const handleTryDemoClick = () => {
    if (location.pathname === "/") {
      handleSmoothScroll("#call-form");
    } else {
      navigate("/#call-form");
      setTimeout(() => handleSmoothScroll("#call-form"), 150);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 hover:scale-105">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center hover-glow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">Audixa AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item, index) => (
              <motion.div
                key={item.path}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  to={item.path}
                  className={`text-base font-medium transition-all duration-300 hover:text-primary hover:-translate-y-0.5 ${
                    isActive(item.path)
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Dropdown */}
            <div className="relative">
              <Button
                variant="ghost"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`text-base font-medium transition-all duration-300 hover:text-primary ${isDropdownOpen ? 'text-primary' : 'text-muted-foreground'}`}
              >
                More <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
              </Button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-20"
                  >
                    {dropdownNavItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm text-foreground hover:bg-muted/50 transition-colors duration-200 ${
                          isActive(item.path) ? 'text-primary bg-muted/50' : ''
                        }`}
                        onClick={() => { setIsDropdownOpen(false); setIsOpen(false); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Special Nav Items (big gradient tiles) */}
            <div className="flex items-center space-x-4 pl-12 border-l border-border ml-12">
              {specialNavItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="relative group rounded-xl p-0.5 overflow-hidden transition-all duration-300"
                  style={{ willChange: 'transform, box-shadow' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.highlightColor} opacity-70 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>

                  {item.isExternal ? (
                    <a href={item.path} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="ghost"
                        className="relative z-10 w-full h-full flex items-center justify-center space-x-2 px-6 py-2 bg-card text-foreground rounded-xl
                          hover:bg-card/80 transition-all duration-300 shadow-md border border-input group-hover:border-transparent
                          group-hover:text-white"
                      >
                        {item.icon && <item.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />}
                        <span className="font-semibold text-lg group-hover:text-white transition-colors duration-300">{item.label}</span>
                      </Button>
                    </a>
                  ) : item.path === "#call-form" ? (
                    <button onClick={handleTryDemoClick}>
                      <Button
                        variant="ghost"
                        className="relative z-10 w-full h-full flex items-center justify-center space-x-2 px-6 py-2 bg-card text-foreground rounded-xl
                          hover:bg-card/80 transition-all duration-300 shadow-md border border-input group-hover:border-transparent
                          group-hover:text-white"
                      >
                        {item.icon && <item.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />}
                        <span className="font-semibold text-lg group-hover:text-white transition-colors duration-300">{item.label}</span>
                      </Button>
                    </button>
                  ) : (
                    <Link to={item.path}>
                      <Button
                        variant="ghost"
                        className="relative z-10 w-full h-full flex items-center justify-center space-x-2 px-6 py-2 bg-card text-foreground rounded-xl
                          hover:bg-card/80 transition-all duration-300 shadow-md border border-input group-hover:border-transparent
                          group-hover:text-white"
                      >
                        {item.icon && <item.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />}
                        <span className="font-semibold text-lg group-hover:text-white transition-colors duration-300">{item.label}</span>
                      </Button>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:scale-110 transition-transform duration-200"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {dropdownNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {specialNavItems.map((item) =>
                item.isExternal ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2 inline-block" />}
                    {item.label}
                  </a>
                ) : item.path === "#call-form" ? (
                  <button
                    key={item.path}
                    onClick={handleTryDemoClick}
                    className="block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 text-muted-foreground hover:text-primary hover:bg-muted"
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2 inline-block" />}
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary hover:bg-muted'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon && <item.icon className="w-4 h-4 mr-2 inline-block" />}
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
