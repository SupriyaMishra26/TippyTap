// import { Link } from 'react-router';
// import { motion } from 'motion/react';
// import { Facebook, Instagram, Mail, Sparkles } from 'lucide-react';
// import Logo from "../../assets/Logo.png"
// const shopLinks = [
//   { name: 'New Arrivals', path: '/collections/new-arrivals' },
//   { name: 'Best Sellers', path: '/collections/best-sellers' },
//   { name: 'Restocked', path: '/collections/restocked' },
//   { name: 'Sale', path: '/collections/sale' },
// ];

// const quickLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'Our Story', path: '/our-story' },
//   { name: 'Soft Gel Nails', path: '/soft-gel-nails' },
//   { name: 'Contact', path: '/contact' },
// ];

// const supportLinks = [
//   { name: 'Privacy Policy', path: '/privacy-policy' },
//   { name: 'Terms of Service', path: '/terms-of-service' },
//   // { name: 'Press Inquiries', path: '/press-inquiries' },
//   // { name: 'Sustainability', path: '/sustainability' },
// ];

// const socialLinks = [
//   { icon: Instagram, href: 'https://www.instagram.com/tippytap_pressonnails/', label: 'Instagram' },  // space remove
  
//   { icon: Mail, href: 'mailto:tippytapnail@gmail.com', label: 'Email' },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-[linear-gradient(180deg,#7c1731_0%,#5a1024_100%)] text-white">
//       <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
//         <div className="grid gap-10 lg:grid-cols-[1.25fr_0.85fr_0.85fr_0.85fr]">
//           <div>
//             <Link to="/" className="flex items-center gap-3">
//               <img
//                 src={Logo}
//                 alt="Tippy Tap Nails Logo"
//                 className="h-12 w-12 rounded-full border border-white/15 bg-white/95 object-contain shadow-sm"
//                 loading="eager"
//                 decoding="async"
//                 fetchPriority="high"
//               />

//             <div className="flex flex-col items-center leading-none">
//               <span
//                 className="text-3xl font-normal italic  tracking-tight text-[#cb1f52]"
//                 style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
//               >
//                 Tippy Tap Nails
//               </span>
//               <span
//                 className="mt-1 text-center text-[9px] font-light tracking-[0.12em] text-white"
//                 style={{ fontFamily: "'Jost', sans-serif" }}
//               >
//                 Tippy Tippy Tap, which colour do you want??
//               </span>
//             </div>
//           </Link>

//             <p className="mt-6 max-w-md text-sm leading-7 text-white/75">
//               Premium press-on nails in deep rose, blush, and warm white, wrapped in
//               gift-worthy packaging that feels like a small luxury at home.
//             </p>

//             <div className="mt-6 flex gap-3">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;

//                 return (
//                   <motion.a
//                     key={social.label}
//                     href={social.href}
//                     whileHover={{ scale: 1.08, y: -2 }}
//                     whileTap={{ scale: 0.96 }}
//                     className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
//                     aria-label={social.label}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </motion.a>
//                 );
//               })}
//             </div>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold text-white">Quick Nav</h4>
//             <ul className="mt-5 space-y-3">
//               {quickLinks.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     className="text-sm text-white/75 transition hover:text-white"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold text-white">Shop</h4>
//             <ul className="mt-5 space-y-3">
//               {shopLinks.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     className="text-sm text-white/75 transition hover:text-white"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-xl font-semibold text-white">Support</h4>
//             <ul className="mt-5 space-y-3">
//               {supportLinks.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     to={item.path}
//                     className="text-sm text-white/75 transition hover:text-white"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="mt-10 border-t border-white/10 pt-5 text-sm text-white/70">
//           <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//             <p>&copy; 2026 Tippy Tap Nails. All rights reserved.</p>
//             <div className="flex flex-wrap gap-4">
//               <Link to="/privacy-policy" className="transition hover:text-white">
//                 Privacy Policy
//               </Link>
//               <Link to="/terms-of-service" className="transition hover:text-white">
//                 Terms of Service
//               </Link>
//               {/* <Link to="/press-inquiries" className="transition hover:text-white">
//                 Press Inquiries
//               </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Logo from "../../assets/Logo.png";

const shopLinks = [
  { name: 'New Arrivals', path: '/collections/new-arrivals' },
  { name: 'Best Sellers', path: '/collections/best-sellers' },
  { name: 'Restocked', path: '/collections/restocked' },
  { name: 'Sale', path: '/collections/sale' },
  { name: 'Toe Nails', path: '/collections/toe-nails' },
  { name: 'Nail Kit', path: '/collections/nail-kit' },
];

const shopByLinks = [
  { name: 'Shape - Almond', path: '/product/shape/almond' },
  { name: 'Shape - Coffin', path: '/product/shape/coffin' },
  { name: 'Length - Medium', path: '/product/length/medium' },
  { name: 'Style - French', path: '/product/style/french-manicure' },
  { name: 'Texture - Glossy', path: '/product/texture/glossy' },
  { name: 'Colour - Pink', path: '/product/colour/pink' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/our-story' },
  { name: 'Soft Gel Nails', path: '/soft-gel-nails' },
  { name: 'Contact', path: '/contact' },
  { name: 'Wishlist', path: '/wishlist' },
  { name: 'Cart', path: '/cart' },
];

const supportLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/tippytap_pressonnails/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:tippytapnail@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#7c1731_0%,#5a1024_100%)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
               <div className="relative">
    <img
      src={Logo}
      alt="Tippy Tap Nails Logo"
      className="h-12 w-12 shrink-0 rounded-full border border-white/15 bg-white/95 object-contain shadow-sm"
      loading="eager"
      decoding="async"
    />

    {/* TM Badge */}
    <span className="absolute -top-1 -right-1 text-[9px] font-semibold text-white   px-1 leading-none shadow-sm">
      TM
    </span>
  </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-2xl font-normal italic tracking-tight text-[#cb1f52] sm:text-3xl"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  Tippy Tap Nails
                </span>
                <span
                  className="mt-1 text-[9px] font-light tracking-[0.12em] text-white/85"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Tippy Tippy Tap, which colour do you want??
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/75">
              Premium handpainted press-on nails — luxury aesthetics, salon-quality finish, gift-worthy packaging.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="mailto:tippytapnail@gmail.com" className="hover:text-white">tippytapnail@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:+918368863428" className="hover:text-white">+91 836 886 3428</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
               <p className="text-sm leading-relaxed">
                  Jasmeen Kaur Studio, Sector 76,<br />
                  Noida, Uttar Pradesh 201301
                </p>
              </li>
            </ul>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Shop */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-semibold text-white sm:text-lg">Shop</h4>
            <ul className="mt-4 space-y-2.5">
              {shopLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-white/75 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop By */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-semibold text-white sm:text-lg">Shop By</h4>
            <ul className="mt-4 space-y-2.5">
              {shopByLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-white/75 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Nav + Support */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-semibold text-white sm:text-lg">Quick Nav</h4>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-white/75 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-base font-semibold text-white sm:text-lg">Support</h4>
            <ul className="mt-3 space-y-2.5">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-sm text-white/75 transition hover:text-white">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-sm text-white/70">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Tippy Tap Nails. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy-policy" className="transition hover:text-white">Privacy Policy</Link>
              <Link to="/terms-of-service" className="transition hover:text-white">Terms of Service</Link>
              <Link to="/contact" className="transition hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
