import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative py-16 overflow-hidden">

        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(ellipse at top left, #fff0f4 0%, transparent 55%),
              radial-gradient(ellipse at bottom right, #fbcfe8 0%, transparent 60%),
              linear-gradient(135deg, #fffafc 0%, #fdf2f8 50%, #fce7f3 100%)
            `
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h1
              className="text-5xl lg:text-6xl font-normal italic mb-5"
              style={{
                color: '#cb1f52',
                fontFamily: "'Playfair Display', serif"
              }}
            >
              Get In Touch
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out anytime — we usually reply within a few hours.
            </p>

          </motion.div>

        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl border border-pink-100 rounded-3xl p-8 shadow-xl"
          >

            <h2 className="text-xl font-semibold mb-6" style={{ color: '#cb1f52' }}>
              Send Message
            </h2>

            <form className="space-y-5">

              <input className="w-full p-3 rounded-xl border focus:ring-2 outline-none"
                style={{ borderColor: '#f3c2d1', '--tw-ring-color': '#cb1f52' } as any}
                placeholder="Name"
              />

              <input className="w-full p-3 rounded-xl border focus:ring-2 outline-none"
                style={{ borderColor: '#f3c2d1', '--tw-ring-color': '#cb1f52' } as any}
                placeholder="Email"
              />

              <input className="w-full p-3 rounded-xl border focus:ring-2 outline-none"
                style={{ borderColor: '#f3c2d1', '--tw-ring-color': '#cb1f52' } as any}
                placeholder="Subject"
              />

              <textarea rows={5}
                className="w-full p-3 rounded-xl border focus:ring-2 outline-none"
                style={{ borderColor: '#f3c2d1', '--tw-ring-color': '#cb1f52' } as any}
                placeholder="Message"
              />

              <button
                className="w-full py-4 rounded-full text-white font-medium shadow-lg"
                style={{ backgroundColor: '#cb1f52' }}
              >
                Send Message
              </button>

            </form>

          </motion.div>

          {/* INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >

            {/* EMAIL */}
            <a href="mailto:tippytapnail@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 border border-pink-100 hover:shadow-lg transition">
              <Mail style={{ color: '#cb1f52' }} />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">tippytapnail@gmail.com</p>
              </div>
            </a>

            {/* PHONE */}
            <a href="tel:+918368863428"
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 border border-pink-100 hover:shadow-lg transition">
              <Phone style={{ color: '#cb1f52' }} />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-600">+91 836 886 3428</p>
              </div>
            </a>

            {/* ADDRESS */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 border border-pink-100">
              <MapPin style={{ color: '#cb1f52' }} />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jasmeen Kaur Studio, Sector 76,<br />
                  Noida, Uttar Pradesh 201301
                </p>
              </div>
            </div>

            {/* SUPPORT */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 border border-pink-100">
              <MessageCircle style={{ color: '#cb1f52' }} />
              <div>
                <p className="font-semibold">Support</p>
                <p className="text-gray-600">11:00 AM – 5:00 PM (IST)</p>
              </div>
            </div>

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden border border-pink-100 shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Sector+76+Noida&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/tippytap_pressonnails/"
              target="_blank"
              className="flex items-center justify-center gap-2 py-4 rounded-full text-white font-medium"
              style={{ backgroundColor: '#cb1f52' }}
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>

          </motion.div>

        </div>
      </section>

    </div>
  );
}