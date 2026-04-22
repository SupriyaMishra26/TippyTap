import { motion } from 'motion/react';
import { Heart, Users, Sparkles, Target } from 'lucide-react';

export default function OurStory() {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'Every nail set is crafted with love and attention to detail by our talented artists',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We build products based on feedback from our incredible community of nail enthusiasts',
    },
    {
      icon: Sparkles,
      title: 'Quality Excellence',
      description: 'Only the highest grade materials make it into our products',
    },
    {
      icon: Target,
      title: 'Accessible Luxury',
      description: 'Salon-quality nails should be available to everyone, without compromise',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-0">
      {/* Hero */}
    <section className="pt-12 pb-10 bg-gradient-to-b from-pink-50/30 to-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-2" style={{ color: '#D62332' }}>
              Artistry in Every Detail
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our journey to redefine press-on nails
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At <strong>Tippy Tap Nails</strong>, we're not just a press-on nail brand. We are a collective of artists
                and dreamers dedicated to redefining what it means to have a salon-quality manicure.
              </p>
              <p>
                Founded on the belief that beauty should be accessible without compromise, our mission is to provide you
                with luxury nails that reflect your unique style—whether you're conquering the boardroom or enjoying a
                night out. Each set is designed with precision, using the highest grade materials to ensure they feel as
                good as they look.
              </p>
              <p>
                What started as a small passion project has blossomed into a thriving community of nail enthusiasts who
                refuse to settle for anything less than perfection. Our handpainted designs are created by skilled artists
                who pour their creativity into every single nail, ensuring that no two sets are exactly alike.
              </p>
              <p>
                We believe in clean beauty—that's why all our products are non-toxic, vegan-friendly, and safe for your
                natural nails. Our innovative soft gel formula provides the flexibility and comfort of natural nails while
                delivering the durability and style you expect from a premium product.
              </p>
              <p className="text-2xl font-bold" style={{ color: '#D62332' }}>
                Welcome to the Tippy Tap family. Your nails, your story, our art.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#D62332' }}>
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              What drives us every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#D62332' }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#D62332' }}>
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
