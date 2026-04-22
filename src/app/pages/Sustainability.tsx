import { motion } from 'motion/react';
import { Leaf, Recycle, Heart, Package } from 'lucide-react';

export default function Sustainability() {
  const commitments = [
    {
      icon: Leaf,
      title: 'Clean Ingredients',
      description: 'All our products are non-toxic, vegan, and cruelty-free',
    },
    {
      icon: Recycle,
      title: 'Sustainable Packaging',
      description: 'Recyclable and biodegradable packaging materials',
    },
    {
      icon: Heart,
      title: 'Ethical Manufacturing',
      description: 'Fair wages and safe working conditions for all our artisans',
    },
    {
      icon: Package,
      title: 'Reusable Products',
      description: 'Each nail set can be worn 4-5 times, reducing waste',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      <section className="py-20 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#D62332' }}>
              Our Commitment to Sustainability
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We believe beauty should never come at the cost of our planet. That's why sustainability
              is at the heart of everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border-2"
                style={{ borderColor: '#D5597C' }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#D62332' }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#D62332' }}>
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#D62332' }}>
              Our Goals
            </h2>
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                <strong>By 2027:</strong> Transition to 100% recyclable packaging across all products
              </p>
              <p>
                <strong>By 2028:</strong> Achieve carbon-neutral shipping operations
              </p>
              <p>
                <strong>Ongoing:</strong> Partner with environmental organizations to plant one tree for every order
              </p>
            </div>

            <div className="mt-12 p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg, #FFF5F7 0%, #FFFFFF 100%)', border: '2px solid #D5597C' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#D62332' }}>
                Join Us in Making a Difference
              </h3>
              <p className="text-gray-700 mb-6">
                Every purchase supports our sustainability initiatives. Together, we can create a more
                beautiful world—inside and out.
              </p>
              <p className="text-sm text-gray-600">
                Have questions or suggestions about our sustainability efforts? We'd love to hear from you at
                <strong> sustainability@tippytapnails.com</strong>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
