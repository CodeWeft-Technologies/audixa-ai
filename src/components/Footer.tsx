import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 stagger-animation">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Audixa AI</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI-Powered Customer Engagement and Smart Retail Insights. Transform your customer interactions with intelligent automation and data-driven insights.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-3 text-blue-500" />
                contact@audixa.ai
              </div>
              <div className="flex items-center text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-500" />
                Mumbai, MH, India
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              <li>
             <Link to="/documentation" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
              Documentation
            </Link>
            </li>
             <li>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
             Help Center
             </Link>
             </li>
             <li>
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 hover:translate-x-1">
             Privacy Policy
            </Link>
             </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2025 Audixa AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="/terms_of_services" className="text-sm text-gray-500 hover:text-blue-400 transition-all duration-300">
                Terms of Service
              </a>
              <a href="/privacy-policy" className="text-sm text-gray-500 hover:text-blue-400 transition-all duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;