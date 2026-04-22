import { motion } from 'motion/react';
import { Link } from 'react-router';

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-0">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-8" style={{ color: '#D62332' }}>
              About Tippy Tap Nails
            </h1>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
              <p>
                Tippy Tap Nails is a premium press-on nail brand dedicated to providing salon-quality manicures
                that you can apply at home. Founded by a collective of nail artists and beauty enthusiasts, we
                believe that everyone deserves access to beautiful, professional nails without the salon price tag.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#D62332' }}>What Makes Us Different</h2>

              <ul className="space-y-4">
                <li><strong>Handpainted by Artists:</strong> Each nail set is meticulously handpainted by skilled artists, ensuring unique designs</li>
                <li><strong>Soft Gel Formula:</strong> Our innovative soft gel technology provides flexibility and comfort like natural nails</li>
                <li><strong>Non-Toxic & Vegan:</strong> We use only safe, clean ingredients that protect your natural nails</li>
                <li><strong>Perfect Fit:</strong> Every box includes 24 nails in various sizes for a custom fit</li>
                <li><strong>Reusable:</strong> Our nails can be worn 4-5 times with proper care</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#D62332' }}>Our Commitment</h2>

              <p>
                We are committed to sustainability, ethical manufacturing practices, and creating a positive impact
                in the beauty industry. Every product is crafted with care, and we continuously seek ways to reduce
                our environmental footprint.
              </p>

              <div className="mt-12 p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)', border: '2px solid #D5597C' }}>
                <p className="text-xl font-bold mb-4" style={{ color: '#D62332' }}>
                  Want to learn more about our journey?
                </p>
                <Link to="/our-story">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 rounded-full text-white font-medium"
                    style={{ backgroundColor: '#D62332' }}
                  >
                    Read Our Story
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
