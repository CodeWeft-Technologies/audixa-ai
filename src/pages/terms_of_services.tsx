import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

const TermsOfService = () => {
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
            <Scale className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl font-light max-w-3xl mx-auto mb-8 text-blue-100"
          >
            This agreement governs your use of our services. Please read it carefully.
          </motion.p>
        </div>
      </section>

      {/* Policy Content Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <p className="text-sm text-gray-500 mb-8">
            <strong>Last Updated:</strong> Augest 29, 2025
          </p>
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Audixa AI platform, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our services. These Terms apply to all users of the platform, including clients, partners, and visitors.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">2. Description of Service</h2>
          <p>
            Audixa AI provides an AI-powered customer engagement platform that includes AI-driven outbound and inbound calls, real-time analytics, and other related services. Our service is designed to automate and enhance customer interactions for businesses.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">3. User Accounts and Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Account Registration:</strong> You must create an account to access certain features of the platform. You agree to provide accurate, complete, and current information during registration.
            </li>
            <li>
              <strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </li>
            <li>
              <strong>Compliance:</strong> You are responsible for ensuring your use of our service complies with all applicable laws and regulations, including those related to data privacy and telecommunications.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">4. Intellectual Property Rights</h2>
          <p>
            All content, trademarks, logos, and intellectual property on the Audixa AI platform are owned by or licensed to us. You may not use, copy, reproduce, or distribute any part of our platform without our express written consent.
          </p>
          <p>
            You retain all rights to the data you provide to the platform. By using our service, you grant us a limited, non-exclusive, royalty-free license to use your data for the purpose of providing and improving the service, subject to our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">5. Prohibited Conduct</h2>
          <p>
            You agree not to use the service for any purpose that is illegal or prohibited by these Terms. Prohibited conduct includes, but is not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using the service to send unsolicited messages or spam.</li>
            <li>Attempting to interfere with the platform's security or integrity.</li>
            <li>Engaging in any activity that violates the privacy or rights of others.</li>
            <li>Using the service to transmit any material that is defamatory, obscene, or harmful.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">6. Disclaimer of Warranties</h2>
          <p>
            The service is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">7. Limitation of Liability</h2>
          <p>
            In no event shall Audixa AI, its directors, employees, or partners be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service. Our total liability to you for all claims arising from your use of the service will not exceed the amount you have paid us for the service in the preceding twelve months.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Audixa AI and its affiliates from and against any and all claims, damages, obligations, losses, liabilities, and expenses arising from your use of and access to the service or your violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">9. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where Audixa AI is incorporated, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">10. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">11. Changes to the Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide reasonable notice of any material changes. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-2xl font-bold mb-4 mt-8">12. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:legal@audixa.ai" className="text-blue-600 hover:underline">legal@audixa.ai</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
