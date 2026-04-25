// import { motion } from 'motion/react';
// import { Sparkles, Heart, Leaf, Package, Clock, Shield, ArrowRight } from 'lucide-react';
// import ProductGrid from '../components/ProductGrid';

// const products = [
//   {
//     id: 1,
//     name: 'Ocean Breeze',
//     price: '₹24.99',
//     image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.52_PM_(1).jpeg',
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Ruby Passion',
//     image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.52_PM.jpeg',
//     price: '₹26.99',
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Sunset Orange',
//     image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.51_PM_(1).jpeg',
//     price: '₹24.99',
//     rating: 5,
//   },
//   {
//     id: 4,
//     name: 'Soft Pink Blush',
//     image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.51_PM.jpeg',
//     price: '₹22.99',
//     rating: 5,
//   },
// ];

// export default function SoftGelNails() {
//   const features = [
//     {
//       icon: Sparkles,
//       title: 'Supreme Flexibility',
//       description: 'Our soft gel formula bends and moves with your natural nail for ultimate comfort',
//     },
//     {
//       icon: Heart,
//       title: 'Feels Natural',
//       description: 'Lightweight design that you\'ll forget you\'re wearing',
//     },
//     {
//       icon: Leaf,
//       title: 'Non-Toxic Formula',
//       description: 'Safe, vegan-friendly ingredients that protect your natural nails',
//     },
//     {
//       icon: Package,
//       title: 'Complete Kit',
//       description: 'Everything included for salon-quality application at home',
//     },
//     {
//       icon: Clock,
//       title: 'Long-Lasting',
//       description: 'Up to 2-3 weeks of flawless wear',
//     },
//     {
//       icon: Shield,
//       title: 'Damage-Free',
//       description: 'Gentle removal process that protects your natural nails',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-0">
//       {/* Hero Section */}
//    <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
//   {/* 🔥 PINK GRADIENT BACKGROUND */}
//   <div 
//     className="absolute inset-0"
//     style={{
//       background: `
//         radial-gradient(ellipse at top left, #fff0f4 0%, transparent 50%),
//         radial-gradient(ellipse at bottom right, #ec4899 0%, transparent 60%),
//         linear-gradient(135deg, #fffafc 0%, #fdf2f8 50%, #fce7f3 100%)
//       `
//     }}
//   />

//   {/* CONTENT */}
//   <div className="relative mx-auto max-w-5xl px-4 text-center">
    
//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       {/* Tag */}
 
//       {/* Heading */}
//       <h1
//         className="mb-6 font-normal italic leading-tight bg-[#cb1f52]  bg-clip-text tracking-tight text-[#cb1f52] text-transparent"
//         style={{
//           fontFamily: "'Playfair Display', serif",
//           fontSize: 'clamp(2.5rem, 6vw, 4rem)',
//         }}
//       >
//         Soft Gel Nails
//       </h1>

//       {/* Tagline */}
//       <p
//         className="mb-6 text-lg italic text-[#cb1f52] font-light"
//         style={{ fontFamily: "'Playfair Display', serif" }}
//       >
//         Flexible. Long-lasting. Salon quality at home.
//       </p>

//       {/* Description */}
//       <p className="mb-8 max-w-2xl mx-auto text-lg leading-relaxed text-[#6d4b58] font-light">
//         Experience the perfect blend of comfort and durability with our soft gel press-on nails. 
        
//       </p>

//       {/* Buttons */}
//       {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
//         <a
//           href="#products"
//           className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 text-sm font-semibold text-white shadow-2xl shadow-rose-500/25 transition-all hover:-translate-y-1 hover:shadow-rose-500/40"
//         >
//           Shop Soft Gel Collection
//           <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//         </a>

       
//       </div> */}

//       {/* Rating */}
      

//     </motion.div>

//   </div>
// </section>
//       {/* Features Grid */}
//      <section className="pt-6 pb-16 md:pb-20">
//   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//       {features.map((feature, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: index * 0.1 }}
//           whileHover={{ y: -6 }}
//           className="p-6 md:p-7 rounded-2xl border-2 bg-white shadow-sm hover:shadow-md transition-all"
//           style={{ borderColor: '#D5597C' }}
//         >
          
//           <motion.div
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.6 }}
//             className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4"
//             style={{ backgroundColor: '#FFF5F7' }}
//           >
//             <feature.icon
//               className="w-6 h-6 md:w-7 md:h-7"
//               style={{ color: '#cb1f52' }}
//             />
//           </motion.div>

//           <h3
//             className="text-lg md:text-xl font-bold mb-2"
//             style={{ color: '#cb1f52' }}
//           >
//             {feature.title}
//           </h3>

//           <p className="text-sm md:text-base text-gray-600 leading-relaxed">
//             {feature.description}
//           </p>
//         </motion.div>
//       ))}
//     </div>
//   </div>
// </section>

//       {/* Products */}
//       <ProductGrid
//         products={products}
//         title="Soft Gel Collection"
//         description="Browse our premium soft gel press-on nails"
//       />
//     </div>
//   );
// }
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Leaf, Package, Clock, Shield, ArrowRight } from 'lucide-react';
import ProductGrid from '../components/ProductGrid';
import nailBlue from '../../imports/nail-blue.jpeg';
import nailRed from "../../imports/nail-red.jpeg";
import nailOrange from '../../imports/orange.jpeg';
import nailPink from '../../imports/nail-pink.jpeg';

const products = [
  { id: 'sg-1', name: 'Ocean Breeze', price: '₹499', image: nailBlue, rating: 5, description: 'Cool turquoise soft-gel set with a glossy finish.', badge: 'New' },
  { id: 'sg-2', name: 'Ruby Passion', price: '₹549', image: nailRed, rating: 5, description: 'Bold ruby red — timeless and iconic.', badge: 'Bestseller' },
  { id: 'sg-3', name: 'Sunset Orange', price: '₹499', image: nailOrange, rating: 5, description: 'Warm tangerine for bright, sunny days.' },
  { id: 'sg-4', name: 'Soft Pink Blush', price: '₹479', image: nailPink, rating: 5, description: 'Delicate blush pink for everyday elegance.', badge: 'Bestseller' },
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
    <div className="min-h-screen bg-white pt-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at top left, #fff0f4 0%, transparent 55%), radial-gradient(ellipse at bottom right, #fbcfe8 0%, transparent 60%), linear-gradient(135deg, #fffafc 0%, #fdf2f8 50%, #fce7f3 100%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="mb-4 inline-flex rounded-full bg-white/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#cb1f52] shadow-sm">
              Soft Gel Technology
            </span>
            <h1
              className="mb-5 font-normal italic leading-tight bg-gradient-to-r from-[#cb1f52] to-[#b71848] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}
            >
              Soft Gel Nails
            </h1>
            <p
              className="mb-5 text-base italic text-[#cb1f52] font-light sm:text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Flexible. Long-lasting. Salon quality at home.
            </p>
            <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-[#6d4b58] sm:text-base lg:mx-0">
              Experience the perfect blend of comfort and durability with our soft gel press-on nails — feather-light, flexible and built to last 2–3 weeks.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#b71848]"
              >
                Shop Soft Gel <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 rounded-full border border-[#e7c4cf] bg-white px-6 py-3 text-sm font-semibold text-[#7b1730] transition hover:-translate-y-0.5 hover:border-[#cb1f52]"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <img src={nailBlue} alt="Blue soft gel nails" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-xl" loading="lazy" />
              <img src={nailPink} alt="Pink soft gel nails" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover shadow-xl" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>
      {/* Features Grid */}
     <section className="pt-6 pb-16 md:pb-20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="p-6 md:p-7 rounded-2xl border-2 bg-white shadow-sm hover:shadow-md transition-all"
          style={{ borderColor: '#D5597C' }}
        >
          
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mb-4"
            style={{ backgroundColor: '#FFF5F7' }}
          >
            <feature.icon
              className="w-6 h-6 md:w-7 md:h-7"
              style={{ color: '#cb1f52' }}
            />
          </motion.div>

          <h3
            className="text-lg md:text-xl font-bold mb-2"
            style={{ color: '#cb1f52' }}
          >
            {feature.title}
          </h3>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Products */}
      <div id="products">
        <ProductGrid
          products={products}
          title="Soft Gel Collection"
          description="Browse our premium soft gel press-on nails"
        />
      </div>
    </div>
  );
}
