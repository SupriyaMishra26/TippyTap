import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4" style={{ color: '#D62332' }}>
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">Last updated: April 13, 2026</p>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700">
              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Tippy Tap Nails website and services, you accept and agree to be bound by the
                  terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>2. Products and Services</h2>
                <p>
                  All products and services are subject to availability. We reserve the right to discontinue any product
                  at any time. Prices are subject to change without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>3. Orders and Payment</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We reserve the right to refuse or cancel any order</li>
                  <li>All payments are processed securely</li>
                  <li>You are responsible for providing accurate billing information</li>
                  <li>Prices are in USD unless otherwise stated</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>4. Shipping and Delivery</h2>
                <p>
                  Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping
                  carriers or customs. Risk of loss transfers to you upon delivery to the carrier.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>5. Returns and Refunds</h2>
                <p>
                  Products may be returned within 30 days of delivery for a full refund if unopened and in original
                  condition. Custom or opened products cannot be returned for hygiene reasons.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>6. Intellectual Property</h2>
                <p>
                  All content on this site, including designs, text, graphics, and logos, are the property of Tippy Tap
                  Nails and protected by copyright and trademark laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>7. Limitation of Liability</h2>
                <p>
                  Tippy Tap Nails shall not be liable for any indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of our products or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>8. Contact</h2>
                <p>
                  For questions about these Terms, contact us at legal@tippytapnails.com
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
