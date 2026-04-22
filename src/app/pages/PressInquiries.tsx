import { motion } from 'motion/react';
import { Mail, Download, FileText } from 'lucide-react';

export default function PressInquiries() {
  return (
    <div className="min-h-screen bg-white pt-0">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#D62332' }}>
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We're always happy to connect with journalists, bloggers, and media professionals.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#D62332' }}>Press Contact</h2>
                <div className="bg-gradient-to-br from-pink-50/50 to-white p-8 rounded-2xl border-2" style={{ borderColor: '#D5597C' }}>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 mt-1" style={{ color: '#D62332' }} />
                      <div>
                        <p className="font-bold text-lg mb-1">Media Inquiries</p>
                        <p className="text-gray-600">press@tippytapnails.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FileText className="w-6 h-6 mt-1" style={{ color: '#D62332' }} />
                      <div>
                        <p className="font-bold text-lg mb-1">Response Time</p>
                        <p className="text-gray-600">Within 24-48 hours on business days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#D62332' }}>Press Kit</h2>
                <p className="text-gray-700 mb-6">
                  Download our press kit for high-resolution images, logos, brand guidelines, and company information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 rounded-xl border-2 flex items-center gap-4"
                    style={{ borderColor: '#D5597C' }}
                  >
                    <Download className="w-8 h-8" style={{ color: '#D62332' }} />
                    <div className="text-left">
                      <p className="font-bold text-lg">Brand Assets</p>
                      <p className="text-sm text-gray-600">Logos, colors, fonts</p>
                    </div>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 rounded-xl border-2 flex items-center gap-4"
                    style={{ borderColor: '#D5597C' }}
                  >
                    <Download className="w-8 h-8" style={{ color: '#D62332' }} />
                    <div className="text-left">
                      <p className="font-bold text-lg">Product Images</p>
                      <p className="text-sm text-gray-600">High-res photos</p>
                    </div>
                  </motion.button>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#D62332' }}>About Tippy Tap Nails</h2>
                <p className="text-gray-700 leading-relaxed">
                  Tippy Tap Nails is a premium press-on nail brand specializing in handpainted, soft gel nails
                  that combine salon-quality aesthetics with at-home convenience. Founded in 2024, we've served over
                  10,000 happy customers with our non-toxic, reusable nail sets that last up to 2-3 weeks. Our
                  mission is to make luxury beauty accessible to everyone through innovative products and artisan
                  craftsmanship.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#D62332' }}>Recent Features</h2>
                <div className="space-y-4 text-gray-700">
                  <p>• Featured in Beauty Magazine - "Top 10 Press-On Nail Brands of 2026"</p>
                  <p>• Vogue Beauty - "The Future of At-Home Manicures"</p>
                  <p>• Elle - "Clean Beauty Brands You Need to Know"</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
