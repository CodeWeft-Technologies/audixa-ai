import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <ShieldCheck className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 text-blue-100"
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <p className="text-sm text-gray-500 mb-8">
            <strong>Last Updated:</strong> Augest 29, 2025
          </p>
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p>
            Welcome to Audixa AI. This Privacy Policy describes how we collect, use, and protect your personal information when you use our AI-powered customer engagement platform, which includes AI-driven outbound and inbound calls, real-time analytics, and related services.
          </p>
          <p>
            By using our services, you consent to the data practices described in this policy. If you do not agree with the terms of this policy, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">2. Information We Collect</h2>
          <p>We collect information to operate our business and provide you with our services. The types of information we collect include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Information you provide:</strong> This includes information you provide when you create an account, such as your name, email address, company name, and contact details.
            </li>
            <li>
              <strong>Customer data:</strong> Our clients provide us with contact details for their leads and customers for the purpose of AI-driven outbound and inbound campaigns.
            </li>
            <li>
              <strong>Call data:</strong> As part of our service, we collect and process call recordings, transcripts, and metadata (such as call duration, time, and participant IDs). This data is essential for our AI to function and for our clients to analyze performance.
            </li>
            <li>
              <strong>Usage data:</strong> We collect data about how you interact with our platform, including logs, IP addresses, browser type, and system usage. This helps us monitor performance and improve our service.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and maintain our services.</li>
            <li>To process and manage customer engagement campaigns on behalf of our clients.</li>
            <li>To train and improve our AI models and the performance of our services.</li>
            <li>To monitor and analyze usage trends to enhance the user experience.</li>
            <li>To communicate with you about your account, updates, and promotional offers.</li>
            <li>To ensure compliance with legal and regulatory obligations.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">4. Data Security</h2>
          <p>
            We are committed to protecting your information. We employ a variety of security measures, including encryption, firewalls, and secure data storage, to prevent unauthorized access, disclosure, or modification of your data. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">5. Data Retention</h2>
          <p>
            We retain your information for as long as your account is active or as needed to provide you with our services. We will also retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">6. Your Rights</h2>
          <p>
            You have certain rights regarding your personal data. Depending on your jurisdiction, these rights may include the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Access:</strong> Request a copy of the personal information we hold about you.
            </li>
            <li>
              <strong>Correction:</strong> Request that we correct any inaccurate information.
            </li>
            <li>
              <strong>Deletion:</strong> Request that we delete your personal information, subject to certain exceptions.
            </li>
            <li>
              <strong>Opt-out:</strong> You may opt out of having your calls recorded for AI training purposes.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">7. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new policy on this page or through other communication methods.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">8. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at: <a href="mailto:codeweft.ai@gmail.com" className="text-blue-600 hover:underline">privacy@audixa.ai</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
