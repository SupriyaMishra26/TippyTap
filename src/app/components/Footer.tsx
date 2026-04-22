import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Facebook, Instagram, Mail, Sparkles } from 'lucide-react';
import Logo from "../../assets/Logo.png"
const shopLinks = [
  { name: 'New Arrivals', path: '/collections/new-arrivals' },
  { name: 'Best Sellers', path: '/collections/best-sellers' },
  { name: 'Restocked', path: '/collections/restocked' },
  { name: 'Sale', path: '/collections/sale' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/our-story' },
  { name: 'Soft Gel Nails', path: '/soft-gel-nails' },
  { name: 'Contact', path: '/contact' },
];

const supportLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
  // { name: 'Press Inquiries', path: '/press-inquiries' },
  // { name: 'Sustainability', path: '/sustainability' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/tippytap_pressonnails/ ', label: 'Instagram' },
  
  { icon: Mail, href: 'mailto:support@tippytapnails.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#7c1731_0%,#5a1024_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
               {/* <Link to="/" className="flex items-center gap-3">
                       <div className="flex h-20 w-20 items-center justify-center">
                <img 
                  src={Logo} 
                  alt="Tippy Tap Nails Logo" 
                  className="h-18 w-18 object-contain"
                />
              </div>
                  </Link>      */}
                   <Link to="/" className="flex items-center gap-3">
 
  <div className="flex flex-col leading-none">
    <span
      className="text-2xl font-bold italic tracking-tight  text-[#cb1f52]"
      style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
    >
      Tippy Tap Nails
    </span>
    <span
      className="mt-0.5 text-[8px] font-light uppercase tracking-[0.4em] text-white/60"
      style={{ fontFamily: "'Jost', 'Georgia', serif" }}
    >
     Which colour do you want ?
    </span>
  </div>
</Link>
              <div>
               
               
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
              Premium press-on nails in deep rose, blush, and warm white, wrapped in
              gift-worthy packaging that feels like a small luxury at home.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">Quick Nav</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">Shop</h4>
            <ul className="mt-5 space-y-3">
              {shopLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white">Support</h4>
            <ul className="mt-5 space-y-3">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-white/75 transition hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-white/70">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; 2026 Tippy Tap Nails. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="transition hover:text-white">
                Terms of Service
              </Link>
              {/* <Link to="/press-inquiries" className="transition hover:text-white">
                Press Inquiries
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
