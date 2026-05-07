// import { motion } from 'motion/react';
// import { Heart, Users, Sparkles, Target } from 'lucide-react';

// export default function OurStory() {
//   const values = [
//     {
//       icon: Heart,
//       title: 'Passion for Beauty',
//       description: 'Every nail set is crafted with love and attention to detail by our talented artists',
//     },
//     {
//       icon: Users,
//       title: 'Community First',
//       description: 'We build products based on feedback from our incredible community of nail enthusiasts',
//     },
//     {
//       icon: Sparkles,
//       title: 'Quality Excellence',
//       description: 'Only the highest grade materials make it into our products',
//     },
//     {
//       icon: Target,
//       title: 'Accessible Luxury',
//       description: 'Salon-quality nails should be available to everyone, without compromise',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white pt-0">
//       {/* Hero */}
//   <section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">
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
//         className="mb-6 font-normal italic leading-tight bg-gradient-to-r from-[#cb1f52] to-[#b71848] bg-clip-text text-transparent tracking-tight"
//         style={{
//           fontFamily: "'Playfair Display', serif",
//           fontSize: 'clamp(2.5rem, 6vw, 4rem)',
//         }}
//       >
//         Artistry in Every Detail
//       </h1>

//       {/* Tagline */}
//       <p
//         className="mb-6 text-lg italic text-[#cb1f52] font-light"
//         style={{ fontFamily: "'Playfair Display', serif" }}
//       >
//         Our journey to redefine press-on nails
//       </p>

//       {/* Description */}
//       <p className="mb-8 max-w-2xl mx-auto text-lg leading-relaxed text-[#6d4b58] font-light">
//         Experience the perfect blend of comfort and durability with our handcrafted press-on nails. 
       
//       </p>

//     </motion.div>

//   </div>
// </section>

//       {/* Story Content */}
//       <section className="py-16">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="prose prose-lg max-w-none"
//           >
//             <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
//               <p>
//                 At <strong>Tippy Tap Nails</strong>, we're not just a press-on nail brand. We are a collective of artists
//                 and dreamers dedicated to redefining what it means to have a salon-quality manicure.
//               </p>
//               <p>
//                 Founded on the belief that beauty should be accessible without compromise, our mission is to provide you
//                 with luxury nails that reflect your unique style—whether you're conquering the boardroom or enjoying a
//                 night out. Each set is designed with precision, using the highest grade materials to ensure they feel as
//                 good as they look.
//               </p>
//               <p>
//                 What started as a small passion project has blossomed into a thriving community of nail enthusiasts who
//                 refuse to settle for anything less than perfection. Our handpainted designs are created by skilled artists
//                 who pour their creativity into every single nail, ensuring that no two sets are exactly alike.
//               </p>
//               <p>
//                 We believe in clean beauty—that's why all our products are non-toxic, vegan-friendly, and safe for your
//                 natural nails. Our innovative soft gel formula provides the flexibility and comfort of natural nails while
//                 delivering the durability and style you expect from a premium product.
//               </p>
//               <p className="text-2xl font-bold" style={{ color: '#cb1f52' }}>
//                 Welcome to the Tippy Tap family. Your nails, your story, our art.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4" style={{ color: '#cb1f52' }}>
//               Our Values
//             </h2>
//             <p className="text-xl text-gray-600">
//               What drives us every day
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//                 className="text-center p-6"
//               >
//                 <motion.div
//                   whileHover={{ rotate: 360, scale: 1.1 }}
//                   transition={{ duration: 0.6 }}
//                   className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
//                   style={{ backgroundColor: '#cb1f52' }}
//                 >
//                   <value.icon className="w-8 h-8 text-white" />
//                 </motion.div>
//                 <h3 className="text-xl font-bold mb-2" style={{ color: '#cb1f52' }}>
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600">
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Users, Sparkles, Target, ArrowRight } from 'lucide-react';
import nailPink from '../../imports/nail-pink.jpeg';
import nailRed from '../../imports/nail-red.jpeg';

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
              Our Story
            </span>
            <h1
              className="mb-5 font-normal italic leading-tight bg-gradient-to-r from-[#cb1f52] to-[#b71848] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2.25rem, 6vw, 3.75rem)' }}
            >
              Artistry in Every Detail
            </h1>
            <p
              className="mb-5 text-base italic text-[#cb1f52] font-light sm:text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our journey to redefine press-on nails
            </p>
            <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-[#6d4b58] sm:text-base lg:mx-0">
              Handcrafted soft gel press-ons designed for comfort, durability and effortless luxury — born from a passion for clean, modern beauty.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <Link
                to="/collections/new-arrivals"
                className="inline-flex items-center gap-2 rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#b71848]"
              >
                Shop Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#e7c4cf] bg-white px-6 py-3 text-sm font-semibold text-[#7b1730] transition hover:-translate-y-0.5 hover:border-[#cb1f52]"
              >
                Get in Touch
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
              <img src={nailPink} alt="Pink nails" className="aspect-[3/4] w-full rounded-3xl object-cover shadow-xl" loading="lazy" />
              <img src={nailRed} alt="Red nails" className="mt-10 aspect-[3/4] w-full rounded-3xl object-cover shadow-xl" loading="lazy" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Content - redesigned as alternating cards */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-flex rounded-full bg-[#fff0f4] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#cb1f52]">
              Our Journey
            </span>
            <h2
              className="font-normal italic leading-tight bg-gradient-to-r from-[#cb1f52] to-[#b71848] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Crafted with Heart, Worn with Pride
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: 'A Passion Born from Art',
                body: 'Tippy Tap Nails started as a small studio with one big idea — premium press-on nails that feel as good as they look. Today, we are a community of artists redefining at-home glamour.',
                img: nailPink,
              },
              {
                title: 'Clean, Safe & Considered',
                body: 'Every set is non-toxic, vegan-friendly, and gentle on natural nails. Our soft gel formula bends with your nail for all-day comfort and 2–3 weeks of flawless wear.',
                img: nailRed,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-[2rem] border border-[#f1d4dc] bg-white shadow-[0_18px_45px_rgba(115,28,52,0.1)]"
              >
                <div className="grid sm:grid-cols-2">
                  <div>
  <div className="aspect-square overflow-hidden bg-[#fff0f5]">
    <img
      src={card.img}
      alt={card.title}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      loading="lazy"
    />
  </div>

  {/* Text below image */}
  <p className="mt-2 text-center text-[16px] font-medium tracking-wide text-[#cb1f52]">
    Each nail designed with care in India 🇮🇳
  </p>
</div>
                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <h3 className="text-xl font-semibold text-[#2b1020] sm:text-2xl">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#6d4b58] sm:text-base">{card.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p
            className="mx-auto mt-10 max-w-3xl text-center text-xl font-normal italic sm:text-2xl"
            style={{ color: '#cb1f52', fontFamily: "'Playfair Display', serif" }}
          >
            "Welcome to the Tippy Tap family. Your nails, your story, our art."
          </p>
        </div>
      </section>

      {/* Values - redesigned as compact icon cards */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-pink-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-3 inline-flex rounded-full bg-[#fff0f4] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#cb1f52]">
              Our Values
            </span>
            <h2
              className="font-normal italic leading-tight bg-gradient-to-r from-[#cb1f52] to-[#b71848] bg-clip-text text-transparent"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              What Drives Us Every Day
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-[1.5rem] border border-[#f1d4dc] bg-white p-6 text-center shadow-[0_14px_38px_rgba(115,28,52,0.08)] transition hover:shadow-[0_22px_50px_rgba(115,28,52,0.16)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#cb1f52] to-[#b71848] shadow-md transition group-hover:scale-110">
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-[#2b1020] sm:text-lg">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#6d4b58]">{value.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[#cb1f52] px-7 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#b71848]"
            >
              Shop Our Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
