import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-0">
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#D62332' }}>
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you! Reach out to us anytime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-pink-50/50 to-white p-8 rounded-3xl border-2" style={{ borderColor: '#D5597C' }}>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#D62332' }}>
                  Send us a message
                </h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#D62332' } as any}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#D62332' } as any}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#D62332' } as any}
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                      style={{ '--tw-ring-color': '#D62332' } as any}
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 rounded-full text-white font-medium"
                    style={{ backgroundColor: '#D62332' }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#D62332' }}>
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FFF5F7' }}>
                      <Mail className="w-6 h-6" style={{ color: '#D62332' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p className="text-gray-600">tippytapnail@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FFF5F7' }}>
                      <Phone className="w-6 h-6" style={{ color: '#D62332' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Phone</h3>
                      <p className="text-gray-600">+91 836 886 3428</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FFF5F7' }}>
                      <MapPin className="w-6 h-6" style={{ color: '#D62332' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Address</h3>
                      <p className="text-gray-600">
                        Street 76 Complex<br />
                        Sector 76<br />
                        Noida<br />
                        Uttar Pradesh<br />
                        201301
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FFF5F7' }}>
                      <MessageCircle className="w-6 h-6" style={{ color: '#D62332' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Support</h3>
                     <p className="text-gray-600">Support hours: 11:00 AM – 5:00 PM (IST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6" style={{ color: '#D62332' }}>
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  <motion.a
                    href="https://www.instagram.com/tippytap_pressonnails/ "
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#D62332' }}
                  >

                    <Instagram className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
             
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
