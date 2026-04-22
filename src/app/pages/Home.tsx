import {
  ArrowRight,
  Box,
  Check,
  ChevronRight,
  Filter,
  Gift,
  Package,
  Quote,
  Repeat,
  Shield,
  Sparkles,
  Star,
  Heart,
  Timer,
  ShoppingBag,
  Wallet,
} from 'lucide-react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

import BG from '../../assets/design.png';

import heroslide2 from '../../assets/2.png';


import softgel from '../../assets/soft-gel(1).jpeg';
import softgelFirst from '../../assets/soft-gel(2).jpeg';
import softgelSec from '../../assets/soft-gel(3).jpeg';
import softgelThird from '../../assets/soft-gel(4).jpeg';
import softgelForth from '../../assets/soft-gel(5).jpeg';
import softgelFivth from '../../assets/soft-gel(6).jpeg';
import productBoxSide from '../../assets/product-box-side.jpg';
import productLeopard from '../../assets/product-leopard.jpg';
import productLookbook from '../../assets/product-lookbook.jpg';
import ctaBackground from '../../imports/1.jpeg';
import packagingBoxImage from '../../imports/WhatsApp_Image_2026-04-11_at_3.25.49_PM.jpeg';

import productCherry from '../../imports/nail-pink.jpeg';
import productMint from '../../imports/orange.jpeg';
import productSunset from '../../imports/nail-red.jpeg';
import productBlue from '../../imports/nail-blue.jpeg';


const nailsPink = productCherry;
const nailsOrange = productMint;
const nailsRed = productSunset;
const nailsBlue = productBlue;
type HeroHighlight = {
  label: string;
  icon: typeof Sparkles;
};

type WhyReason = {
  icon: typeof Wallet;
  title: string;
  desc: string;
};

type FeaturedLook = {
  name: string;
  price: string;
  description: string;
  image: string;
  tag: string;
};

type CategoryTile = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

type CollectionLook = {
  name: string;
  price: string;
  description: string;
  image: string;
  badges: ProductTag[];
};

type StepCard = {
  number: string;
  title: string;
  description: string;
  image: string;
};

type Testimonial = {
  initials: string;
  name: string;
  location: string;
  quote: string;
};

const heroHighlights = [
  { label: 'Non-Toxic', icon: Shield },
  { label: 'Handpainted', icon: Sparkles },
  { label: 'Soft Gel', icon: Heart },
  { label: '24 Nails in a Box', icon: Package },
];

// const heroSlides = [
//   {
//     img: "heroslide1",
//     title: "Non-Toxic & Safe",
//     subtitle: "Gentle on your nails • No harsh chemicals"
//   },
//   {
//     img: "heroslide2",
//     title: "Handpainted Designs",
//     subtitle: "Each nail painted with care & precision"
//   },
//   {
//     img: "heroslide3",
//     title: "Soft Gel Comfort",
//     subtitle: "Lightweight, flexible & super comfortable"
//   },
//   {
//     img: "heroslide4",
//     title: "24 Nails in a Set",
//     subtitle: "Perfect sizing for every nail shape"
//   }
// ];

const whyReasons: WhyReason[] = [
  { icon: Wallet, title: 'Half the Cost', desc: 'Luxury aesthetic for 50% less than salon prices' },
  { icon: Repeat, title: '4-5x Reusable', desc: 'Crafted for longevity. Wear, remove, and repeat' },
  { icon: Timer, title: '2-3 Weeks Wear', desc: 'Premium adhesive bond for enduring beauty' },
  { icon: Box, title: '24 Nails Box', desc: 'Inclusive sizing for a perfect fit, every time' },
  { icon: Shield, title: 'Non-Damaging', desc: 'Protect your natural nails with our gentle formula' },
];
type ProductTag = 'Bestseller' | 'New' | 'Limited';
type ProductFilter = 'All' | ProductTag;

type ProductCard = {
  name: string;
  price: string;
  description: string;
  image: string;
  badges: ProductTag[];
};

const productFilters: ProductFilter[] = ['All', 'Bestseller', 'New', 'Limited'];

const products: ProductCard[] = [
  { name: 'Blushing Rose', price: '₹499', description: 'Soft pink for everyday elegance.', image: nailsPink, badges: ['Bestseller'] },
  { name: 'Sunset Pop', price: '₹499', description: 'Warm orange with uplifting energy.', image: nailsOrange, badges: ['New'] },
  { name: 'Classic Red', price: '₹499', description: 'Bold red — timeless and iconic.', image: nailsRed, badges: ['Bestseller', 'Limited'] },
  { name: 'Ocean Breeze', price: '₹499', description: 'Cool turquoise for a fresh vibe.', image: nailsBlue, badges: ['New'] },
];
const featuredLooks: FeaturedLook[] = [
  {
    name: 'Blush Pink',
    price: 'Rs. 24',
    description: 'Soft pink tones with a glossy salon finish.',
    image: productCherry,
    tag: 'Bestseller',
  },
  {
    name: 'Sunset Orange',
    price: 'Rs. 26',
    description: 'Warm orange shades with a bright, clean shine.',
    image: productSunset,
    tag: 'New',
  },
  {
    name: 'Mint Glow',
    price: 'Rs. 22',
    description: 'Fresh cool tones for an easy everyday set.',
    image: productMint,
    tag: 'Limited',
  },
  {
    name: 'Blue Muse',
    price: 'Rs. 25',
    description: 'Cool blue polish with a soft, luxe finish.',
    image: productBlue,
    tag: 'Bestseller',
  },
];

const collectionLooks: CollectionLook[] = [
  {
    name: 'Blushing Rose',
    price: '₹499',
    description: 'Soft pink for everyday elegance.',
    image: productCherry,
    badges: ['Bestseller'],
  },
  {
    name: 'Sunset Pop',
    price: '₹499',
    description: 'Warm orange with uplifting energy.',
    image: productMint,
    badges: ['New'],
  },
  {
    name: 'Classic Red',
    price: '₹499',
    description: 'Bold red - timeless and iconic.',
    image: productSunset,
    badges: ['Bestseller', 'Limited'],
  },
  {
    name: 'Ocean Breeze',
    price: '₹499',
    description: 'Cool turquoise for a fresh vibe.',
    image: productBlue,
    badges: ['New'],
  },
];

const categoryTiles: CategoryTile[] = [
  {
    eyebrow: 'Length',
    title: 'Nail Length',
    description: 'Short, medium, long, and extra-long edits for every look.',
    image: productLookbook,
    href: '/product/length/medium',
  },
  {
    eyebrow: 'Shape',
    title: 'Nail Shape',
    description: 'Coffin, almond, square, and stiletto silhouettes.',
    image: productBoxSide,
    href: '/product/shape/almond',
  },
  {
    eyebrow: 'Texture',
    title: 'Texture Finishes',
    description: 'Matte, glossy, glitter, metallic, and gemstone details.',
    image: productLeopard,
    href: '/product/texture/glossy',
  },
  {
    eyebrow: 'Style',
    title: 'Style Edit',
    description: 'French, prints, ombre, solids, and cat-eye moods.',
    image: packagingBoxImage,
    href: '/product/style/french-manicure',
  },
];

const steps: StepCard[] = [
  {
    number: '01',
    title: 'Prep & Clean',
    description: 'Clean each nail with alcohol pad to remove oils. Gently push back cuticles and lightly buff surface for better grip.',
    image: productCherry,
  },
  {
    number: '02',
    title: 'Match Size',
    description: 'Match each press-on to your natural nail so it fully covers edge to edge. Arrange them before applying.',
    image: productMint,
  },
  {
    number: '03',
    title: 'Apply Glue',
    description: 'Place a small dot of glue on nail or press-on. You can also use glue tabs for a quick mess-free option.',
    image: productSunset,
  },
  {
    number: '04',
    title: 'Press & Finish',
    description: 'Press firmly for 30 seconds starting from cuticle outward. File edges if needed for smooth finish.',
    image: productBlue,
  },
];

const testimonials: Testimonial[] = [
  {
    initials: 'AK',
    name: 'Aarushi K.',
    location: 'Mumbai',
    quote:
      'The box felt like opening a luxury accessory, and the fit was spot on. The rose finish looked richer in person.',
  },
  {
    initials: 'MS',
    name: 'Maya S.',
    location: 'Delhi',
    quote:
      'I loved the warm pink palette and how easy the set was to press on. It stayed polished through a full weekend.',
  },
  {
    initials: 'NT',
    name: 'Nisha T.',
    location: 'Bengaluru',
    quote:
      'This is the first press-on set I have reused without losing the gloss. Gorgeous packaging, gorgeous result.',
  },
];

const primaryButton =
  'inline-flex items-center justify-center gap-2 rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(203,31,82,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b71848]';
const secondaryButton =
  'inline-flex items-center justify-center gap-2 rounded-full border border-[#e7c4cf] bg-white/90 px-6 py-3 text-sm font-semibold text-[#7b1730] shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#cb1f52]';
const chipBase =
  'inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/90 px-4 py-2 text-xs font-medium text-[#4b3140] shadow-sm backdrop-blur sm:px-5 sm:py-2.5 sm:text-sm';
const cardSurface =
  'rounded-[2rem] border border-[#f1d4dc] bg-white/95 shadow-[0_24px_60px_rgba(115,28,52,0.12)]';

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
}) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`${alignment} max-w-2xl`}>
      <p className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-[#cb1f52]">
  {eyebrow}
</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2b1020] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-[#6d4b58] sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}

function LookCard({ item }: { item: FeaturedLook }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`${cardSurface} group overflow-hidden`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#fff0f5]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#220714]/55 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#cb1f52] shadow-sm">
          {item.tag}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium text-[#2b1020]">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-[#6d4b58]">{item.description}</p>
          </div>
          <span className="text-xl font-semibold text-[#cb1f52]">{item.price}</span>
        </div>
      </div>
    </motion.article>
  );
}

function CollectionCard({ item }: { item: CollectionLook }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[2rem] border border-[#edd5dd] bg-white shadow-[0_24px_60px_rgba(115,28,52,0.12)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#fff0f5]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,7,15,0.02)_0%,rgba(20,7,15,0.1)_56%,rgba(20,7,15,0.28)_100%)]" />
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          {item.badges.map((badge) => {
            const isNew = badge === 'New';

            return (
              <span
                key={badge}
                className={`inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] shadow-sm ${
                  isNew ? 'bg-white text-[#cb1f52]' : 'bg-[#cb1f52] text-white'
                }`}
              >
                {badge}
              </span>
            );
          })}
        </div>
        <Sparkles className="absolute bottom-4 right-4 h-4 w-4 text-white/55 drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]" />
      </div>

      <div className="border-t border-[#f3e1e8] bg-white p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-[#2b1020] sm:text-xl">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-[#6d4b58]">{item.description}</p>
          </div>
          <span className="shrink-0 text-lg font-semibold text-[#cb1f52] sm:text-2xl">
            {item.price}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

function CategoryTileCard({ item }: { item: CategoryTile }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[1.75rem] border border-[#edd5dd] bg-white shadow-[0_18px_45px_rgba(115,28,52,0.09)]"
    >
      <Link to={item.href} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,8,18,0.05)_0%,rgba(24,8,18,0.28)_100%)]" />
          <span className="absolute left-4 top-4 inline-flex rounded-full bg-white/92 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#cb1f52] shadow-sm">
            {item.eyebrow}
          </span>
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="font-display text-2xl leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.24)]">
              {item.title}
            </h3>
          </div>
        </div>

        <div className="p-4">
          <p className="text-sm leading-6 text-[#6d4b58]">{item.description}</p>
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#cb1f52] transition group-hover:translate-x-0.5">
            Explore
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

function StepCardView({ step }: { step: StepCard }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-[1.5rem] border border-[#f1d4dc] bg-white shadow-[0_18px_45px_rgba(115,28,52,0.1)]"
    >
      <div className="aspect-square overflow-hidden bg-[#fff0f5]">
        <img
          src={step.image}
          alt={step.title}
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#cb1f52]">
          Step {step.number}
        </p>
        <h3 className="mt-2 text-lg font-medium text-[#2b1020]">{step.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#6d4b58]">{step.description}</p>
      </div>
    </motion.article>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`${cardSurface} p-5`}
    >
      <div className="flex items-center gap-1 text-[#e0a144]">
        {Array.from({ length: 5 }).map((_, starIndex) => (
          <Star key={starIndex} className="h-4 w-4 fill-current" />
        ))}
      </div>

      <Quote className="mt-5 h-10 w-10 text-[#cb1f52]/20" />

      <p className="mt-4 text-base leading-8 text-[#4f3846]">{testimonial.quote}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#cb1f52] text-sm font-semibold text-white">
          {testimonial.initials}
        </div>
        <div>
          <p className="text-lg font-medium text-[#2b1020]">{testimonial.name}</p>
          <p className="text-sm text-[#7f5b69]">{testimonial.location}</p>
        </div>
      </div>
    </motion.article>
  );
}
// const heroSlidesImage = [heroslide1, heroslide2, heroslide3, heroslide4];
export default function Home() {
  const [activeProductFilter, setActiveProductFilter] = useState<ProductFilter>('All');
  const visibleLooks =
    activeProductFilter === 'All'
      ? collectionLooks
      : collectionLooks.filter((item) => item.badges.includes(activeProductFilter));






  return (
   <div className="min-h-screen overflow-hidden bg-background text-foreground">
  {/* ===== HERO ===== */}
 <section className="bg-[linear-gradient(180deg,#fff8f4_0%,#fffdfd_100%)] pt-0 pb-6">
  <div className="relative w-full">
      <img
        src={heroslide2}
        alt="Tippy Tap Nails"
        className="block h-auto w-full"
        loading="eager"
        decoding="async"
      />
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10">
        <Link
          to="/#products"
          className="inline-flex items-center gap-2 rounded-full bg-[#cb1f52] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(203,31,82,0.38)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b71848] sm:px-7 sm:py-3 sm:text-base"
        >
          Shop Now
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
  </div>
</section>

  {/* ===== Why Tippy Tap ===== */}
      <section
        id="why-tippy-tap"
       className="scroll-mt-[120px] bg-[linear-gradient(180deg,#fff8f4_0%,#fffdfd_100%)] pt-6 pb-12 sm:pt-8 sm:pb-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WHY TIPPY TAP?"
            title="The luxury of a salon experience, redefined for your lifestyle"
            description="A quick scan of the benefits so the page stays easy to read and never feels crowded."
          />

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {whyReasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex h-full flex-col items-center rounded-[1.5rem] border border-[#f1d4dc] bg-white p-5 text-center shadow-[0_16px_40px_rgba(115,28,52,0.08)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0f4] text-[#cb1f52]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-[#2b1020]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-[#6d4b58] sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


  {/* ===== Soft Gel Features ===== */}
      {/* ===== Soft Gel Features ===== */}
  <section className="relative py-16 sm:py-20 overflow-hidden">

  {/* ✅ Background Image */}
<img
  src={BG}
  alt=""
  className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-auto max-w-none object-contain opacity-60"
/>

  {/* ✅ Overlay (important for readability) */}
  

  <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-[#cb1f52]">
        SOFT GEL
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2b1020] sm:text-4xl">
        Premium Press on Nails
      </h2>

      <p className="mt-4 text-sm leading-7 text-[#6d4b58] sm:text-base">
        Designed for comfort, safety, and a flawless salon-like finish — every set is crafted to feel light, gentle, and effortlessly stylish.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-8">
      {[
        { image: softgelFirst, text: "Non-Toxic & Safe" },
        { image: softgelSec, text: "Gentle on Nails" },
        { image: softgelThird, text: "Light Weight" },
        { image: softgelForth, text: "Comfortable Wear" },
        { image: softgelFivth, text: "24 Nails in a Set" },
        { image: softgelFirst, text: "Non-Harsh Chemicals" },
      ].map((item, i) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="flex flex-col items-center"
        >
          <div className="mx-auto aspect-square w-36 overflow-hidden rounded-full border-2 border-[#f1d4dc] bg-[#fff8fb] shadow-[0_12px_30px_rgba(115,28,52,0.08)] sm:w-44 md:w-52">
            <img
              src={item.image}
              alt={item.text}
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-3 text-center text-sm font-semibold text-[#2b1020] sm:text-base">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
  {/* ===== Collection ===== */}
      <section
        id="products"
        className="relative scroll-mt-[120px] overflow-hidden bg-[linear-gradient(180deg,#fff8f4_0%,#fffdfd_100%)] py-16 sm:py-20"
      >
        <div className="absolute inset-x-0 top-0 h-44 bg-[radial-gradient(circle_at_50%_0%,rgba(255,215,229,0.62),transparent_68%)]" />
        <div className="absolute inset-y-0 right-0 w-72 bg-[radial-gradient(circle_at_100%_30%,rgba(203,31,82,0.08),transparent_58%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-[0.2em] text-[#cb1f52]">
              SHOP THE SET
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-[#2b1020] sm:text-4xl md:text-5xl">
              Our Collection
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#6d4b58] sm:text-base">
              Browse bestselling shades, fresh launches, and more category edits in a layout that
              feels calm, modern, and easy to shop.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {productFilters.map((filter) => {
              const active = activeProductFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveProductFilter(filter)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                    active
                      ? 'bg-[#cb1f52] text-white shadow-[0_18px_36px_rgba(203,31,82,0.22)]'
                      : 'border border-[#e7cfd7] bg-white/90 text-[#2b1020] shadow-sm hover:-translate-y-0.5 hover:border-[#cb1f52] hover:text-[#cb1f52]'
                  }`}
                >
                  {filter === 'All' ? <Filter className="h-4 w-4" /> : null}
                  {filter}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleLooks.map((item) => (
              <CollectionCard key={item.name} item={item} />
            ))}
          </div>

        </div>
      </section>



       {/* ===== CATEGORY CARDS ===== */}
      {/* <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary font-body">Explore</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Find your perfect set</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Design', title: 'Design Collection', cta: 'Browse Design', href: '#products', image: categoryImage1 },
              { label: 'Shape', title: 'Find Your Shape', cta: 'View Shape', href: '#products', image: categoryImage2 },
              { label: 'Length', title: 'Choose Your Length', cta: 'View Length', href: '#products', image: categoryImage3 },
              { label: 'Kit', title: 'Everything in One Box', cta: "See What's Inside", href: '#box-packaging', image: categoryImage4 },
            ].map((card, i) => (
              <motion.a
                key={card.title}
                href={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-brand-rose-light/60 via-accent to-accent/80 p-5 shadow-card transition-shadow hover:shadow-brand"
              >
                <span className="mx-auto inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground font-body shadow-sm">
                  {card.label}
                </span>
                <h3 className="mt-4 text-center font-body text-base font-semibold text-foreground">
                  {card.title}
                </h3>
                <div className="relative mt-4 flex-1 min-h-0 overflow-hidden rounded-2xl bg-card/40">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="mt-5 inline-flex items-center justify-center gap-2 self-center rounded-full bg-card px-5 py-2.5 text-xs font-semibold text-foreground shadow-sm transition group-hover:bg-primary group-hover:text-primary-foreground font-body">
                  {card.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section> */}

    <section
  id="how-it-works"
  className="scroll-mt-[100px] bg-[linear-gradient(180deg,#fff8f4_0%,#ffeef4_100%)] pt-10 pb-14 sm:pt-12 sm:pb-16"
>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    <div className="mb-6">
      <SectionHeading
        eyebrow="HOW IT WORKS"
        title="Nail it in just 4 easy steps"
        description="Four small moves and you're ready to go. The images stay front and center, with quick copy underneath."
      />
    </div>

    <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {steps.map((step) => (
        <StepCardView key={step.number} step={step} />
      ))}
    </div>

  </div>
</section>

     <section
  id="testimonials"
  className="scroll-mt-[100px] bg-white pt-10 pb-14 sm:pt-12 sm:pb-16"
>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="TESTIMONIALS"
            title="Three customer reviews that feel like a love note"
            description="A few quick reactions from people who wanted the fit, the finish, and the packaging to feel special."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8f4] py-12 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative overflow-hidden rounded-[2.5rem] min-h-[320px] shadow-[0_24px_70px_rgba(115,28,52,0.18)]"
          >
            <img
              src={ctaBackground}
              alt="Nail model background"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(35,8,18,0.82)_0%,rgba(35,8,18,0.58)_35%,rgba(35,8,18,0.2)_68%,rgba(35,8,18,0.15)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(203,31,82,0.26),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.14),transparent_26%)]" />

            <div className="relative flex min-h-[320px] items-end p-8 sm:p-10 lg:p-12">
              <div className="max-w-2xl text-white">
                <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-white/80 sm:text-xs">
                  Limited Drop
                </p>
                <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Make every gesture feel polished.
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
                  Choose your favorite set, tap into deep rose glamour, and let the box do the rest.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/#products"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#cb1f52] shadow-lg transition duration-300 hover:-translate-y-0.5"
                  >
                    Shop Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80 backdrop-blur sm:text-xs">
                  <Gift className="h-4 w-4" />
                  Deep rose, pink, and warm white
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
