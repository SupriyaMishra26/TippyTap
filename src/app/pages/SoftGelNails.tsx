import { motion } from 'motion/react';
import { Sparkles, Heart, Leaf, Package, Clock, Shield } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';

const products = [
  {
    id: 1,
    name: 'Ocean Breeze',
    price: '$24.99',
    image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.52_PM_(1).jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ruby Passion',
    image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.52_PM.jpeg',
    price: '$26.99',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sunset Orange',
    image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.51_PM_(1).jpeg',
    price: '$24.99',
    rating: 5,
  },
  {
    id: 4,
    name: 'Soft Pink Blush',
    image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.51_PM.jpeg',
    price: '$22.99',
    rating: 5,
  },
];

export default function SoftGelNails() {
  const features = [
    {
      icon: Sparkles,
      title: 'Supreme Flexibility',
      description: 'Our soft gel formula bends and moves with your natural nail for ultimate comfort',
    },
    {
      icon: Heart,
      title: 'Feels Natural',
      description: 'Lightweight design that you\'ll forget you\'re wearing',
    },
    {
      icon: Leaf,
      title: 'Non-Toxic Formula',
      description: 'Safe, vegan-friendly ingredients that protect your natural nails',
    },
    {
      icon: Package,
      title: 'Complete Kit',
      description: 'Everything included for salon-quality application at home',
    },
    {
      icon: Clock,
      title: 'Long-Lasting',
      description: 'Up to 2-3 weeks of flawless wear',
    },
    {
      icon: Shield,
      title: 'Damage-Free',
      description: 'Gentle removal process that protects your natural nails',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#D62332' }}>
              Soft Gel Nails
            </h1>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of <strong>flexibility</strong>, <strong>comfort</strong>, and <strong>durability</strong>.
              Our soft gel press-on nails are designed to feel as natural as your own nails.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl border-2"
                style={{ borderColor: '#D5597C' }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#FFF5F7' }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: '#D62332' }} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#D62332' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductGrid
        products={products}
        title="Soft Gel Collection"
        description="Browse our premium soft gel press-on nails"
      />
    </div>
  );
}
