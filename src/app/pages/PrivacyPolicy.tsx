import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white pt-0">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4" style={{ color: '#D62332' }}>
              Privacy Policy
            </h1>
            <p className="text-gray-600 mb-8">Last updated: April 13, 2026</p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>1. Information We Collect</h2>
                <p>
                  We collect information that you provide directly to us, including name, email address, shipping address,
                  payment information, and any other information you choose to provide when placing an order or contacting us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send you order confirmations and shipping updates</li>
                  <li>Respond to your comments and questions</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our products and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your information
                  with service providers who assist us in operating our website and conducting our business, such as payment
                  processors and shipping companies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. However, no method of
                  transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>5. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information. You may also opt out of
                  marketing communications at any time by clicking the unsubscribe link in our emails.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:<br />
                  <strong>Email:</strong> privacy@tippytapnails.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
