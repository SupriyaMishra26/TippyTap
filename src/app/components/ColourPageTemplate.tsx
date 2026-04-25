import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import {
  ArrowRight,
  Check,
  Filter,
  Heart,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from 'lucide-react';
import { useMemo, useState } from 'react';

import {
  type ColourData,
  type ColourKey,
  type ColourProduct,
  colourList,
} from '../pages/product/colour/data/colours';
import hero from '../../assets/hero-bg.jpg';
function formatINR(amount: number) {
  return `₹${amount.toLocaleString('en-IN')}`;
}

type Props = {
  data: ColourData;
};

export default function ColourPageTemplate({ data }: Props) {
    const products = data.products;
//   const [shape, setShape] = useState<string>('All');
//   const [length, setLength] = useState<string>('All');
//   const [finish, setFinish] = useState<string>('All');

//   const shapes = useMemo(
//     () => ['All', 'Almond', 'Coffin', 'Stiletto', 'Square', 'Round', 'Ballerina'],
//     [],
//   );
//   const lengths = useMemo(() => ['All', 'Short', 'Medium', 'Long'], []);
//   const finishes = useMemo(
//     () => ['All', 'Glossy', 'Matte', 'Glitter', 'Chrome', 'French'],
//     [],
//   );

//   const filtered = data.products.filter(
//     (p) =>
//       (shape === 'All' || p.shape === shape) &&
//       (length === 'All' || p.length === length) &&
//       (finish === 'All' || p.finish === finish),
//   );

  return (
    <div className="bg-[#fffafc]">
      {/* ==== HERO ==== */}
<section className="relative overflow-hidden py-12 sm:py-14 lg:py-16">

  {/* 🖼️ BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src={hero}
      alt="Nails Background"
      className="h-full w-full object-cover object-center"
    />

    {/* 🔥 DARK OVERLAY for readability */}
    <div className="absolute inset-0 bg-black/40" />

    {/* 🎨 optional gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
  </div>

  {/* CONTENT */}
  <div className="relative mx-auto max-w-5xl px-4 text-center text-white">
    
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Tag */}
      <div className="mb-3 inline-flex items-center justify-center gap-2">
        <span
          className="inline-block h-2.5 w-2.5 rounded-full"
          style={{ background: data.hex }}
        />
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
          Colour Collection
        </span>
      </div>

      {/* Heading */}
      <h1
        className="mb-3 font-normal italic leading-tight"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
        }}
      >
        {data.name} Nails
      </h1>

      {/* Tagline */}
      <p
        className="mb-3 text-base italic text-white/90"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {data.tagline}
      </p>

      {/* Description */}
      <p className="mb-5 max-w-lg mx-auto text-sm text-white/80">
        {data.description}
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <a
          href="#products"
          className="inline-flex items-center gap-2 rounded-full bg-[#cb1f52] px-5 py-2 text-xs font-semibold text-white transition hover:bg-[#b71848]"
        >
          Shop {data.name}
        </a>

        <div className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-[10px] text-[#2b1020]">
          <Truck className="h-3 w-3 text-[#cb1f52]" />
          Free shipping ₹999+
        </div>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-white/80">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="font-semibold text-white">4.8</span>
        <span>2.3k reviews</span>
      </div>

    </motion.div>

  </div>
</section>

      {/* ==== FILTERS + PRODUCTS ==== */}
      <section id="products" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
             <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2b1020] sm:text-4xl">
       Shop {data.name} Nails
      </h2>
            
            <p className="mt-1 text-sm text-[#4b3140]">
              {products.length} {products.length === 1 ? 'style' : 'styles'} available
            </p>
          </div>
          {/* <div className="flex items-center gap-2 text-xs text-[#4b3140]">
            <Filter className="h-4 w-4" />
            Refine by
          </div> */}
        </div>

        {/* <div className="mb-8 space-y-3">
          <FilterRow label="Shape" options={shapes} value={shape} onChange={setShape} />
          <FilterRow label="Length" options={lengths} value={length} onChange={setLength} />
          <FilterRow label="Finish" options={finishes} value={finish} onChange={setFinish} />
        </div> */}

     {products.length === 0 ? (
  <div className="rounded-3xl border border-dashed border-[#f1d4dc] bg-white p-16 text-center">
    <p className="text-[#4b3140]">No products available.</p>
  </div>
) : (
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {products.map((product, idx) => (
      <ProductCard
        key={product.id}
        product={product}
        gradient={data.gradient}
        hex={data.hex}
        index={idx}
      />
    ))}
  </div>
)}
      </section>

      {/* ==== REVIEWS ==== */}
     <section className="bg-white pt-8 pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#cb1f52]">
              Real Reviews
            </span>
               <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2b1020] sm:text-4xl">
   Loved across India
      </h2>
            
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {data.reviews.map((review, i) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-3xl border border-[#f1d4dc] bg-[#fffafc] p-6"
              >
                <div className="mb-3 flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#4b3140]">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-[#f1d4dc] pt-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-semibold text-white"
                    style={{ background: data.hex }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2b1020]">{review.name}</div>
                    <div className="text-xs text-[#9b7a87]">{review.location}</div>
                  </div>
                  <Check className="ml-auto h-4 w-4 text-emerald-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==== EXPLORE OTHER COLOURS ==== */}
    <section className="mx-auto max-w-6xl px-4 pt-2 pb-10 sm:px-6 lg:px-8">
  {/* Heading */}
  <div className="mb-5 text-center">
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#2b1020] sm:text-4xl">
   Explore Other Colours
      </h2>
   
    <p className="mt-1 text-xs text-[#9b7a87]">
      Pick a color that matches your vibe
    </p>
  </div>

  {/* Buttons / Chips */}
  <div className="flex flex-wrap justify-center gap-2">
    {colourList.map((c) => {
      const isActive = c.key === data.key;

      return (
        <Link
          key={c.key}
          to={`/product/colour/${c.key}`}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition ${
            isActive
              ? 'bg-[#cb1f52] text-white shadow-md'
              : 'bg-white border border-[#f1d4dc] text-[#4b3140] hover:border-[#cb1f52] hover:text-[#cb1f52]'
          }`}
        >
          {/* Color dot */}
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: c.hex }}
          />

          {c.name}
        </Link>
      );
    })}
  </div>

</section>
    </div>
  );
}

function ColourSwatchLink({
  colourKey,
  name,
  gradient,
  isActive,
}: {
  colourKey: ColourKey;
  name: string;
  gradient: string;
  isActive: boolean;
}) {
  // Map keys to direct routes for type-safety
  const routeMap: Record<ColourKey, string> = {
    pink: '/product/colour/pink',
    red: '/product/colour/red',
    blue: '/product/colour/blue',
    nude: '/product/colour/nude',
    white: '/product/colour/white',
    black: '/product/colour/black',
    purple: '/product/colour/purple',
    green: '/product/colour/green',
  };

  return (
    <Link
      to={routeMap[colourKey]}
      className={`group flex flex-col items-center gap-2 rounded-2xl p-3 transition ${
        isActive ? 'bg-[#fff0f4] ring-2 ring-[#cb1f52]' : 'hover:bg-[#fff0f4]'
      }`}
    >
      <div
        className={`h-14 w-14 rounded-full shadow-md transition group-hover:scale-110 bg-gradient-to-br ${gradient}`}
      />
      <span className="text-xs font-medium text-[#4b3140]">{name}</span>
    </Link>
  );
}

function FilterRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-[#9b7a87]">
        {label}:
      </span>
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
            value === opt
              ? 'bg-[#cb1f52] text-white shadow-sm'
              : 'border border-[#f1d4dc] bg-white text-[#4b3140] hover:border-[#cb1f52] hover:text-[#cb1f52]'
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function ProductCard({
  product,
  gradient,
  hex,
  index,
}: {
  product: ColourProduct;
  gradient: string;
  hex: string;
  index: number;
}) {
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
      className="group overflow-hidden rounded-3xl border border-[#f1d4dc] bg-white transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(115,28,52,0.12)]"
    >
      <div className={`relative aspect-square overflow-hidden bg-gradient-to-br ${gradient}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative h-3/5 w-3/5">
            <div className="absolute inset-0 grid grid-cols-5 gap-1.5 p-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="rounded-t-full rounded-b-md backdrop-blur-sm shadow-inner"
                  style={{
                    background: `linear-gradient(180deg, rgba(255,255,255,0.5), ${hex}66)`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.isBestseller ? (
            <span className="rounded-full bg-[#cb1f52] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Bestseller
            </span>
          ) : null}
          {product.isNew ? (
            <span className="rounded-full bg-[#2b1020] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              New
            </span>
          ) : null}
          {discount > 0 ? (
            <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {discount}% OFF
            </span>
          ) : null}
        </div>

        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#cb1f52] backdrop-blur transition hover:scale-110 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </button>
      </div>

      <div className="p-4">
        <div className="mb-1 flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-[#f59e0b] text-[#f59e0b]" />
          <span className="text-xs font-semibold text-[#2b1020]">{product.rating}</span>
          <span className="text-xs text-[#9b7a87]">({product.reviews})</span>
        </div>

        <h3 className="mb-1 line-clamp-1 text-sm font-semibold text-[#2b1020]">
          {product.name}
        </h3>
        <p className="mb-3 text-xs text-[#9b7a87]">
          {product.shape} · {product.length} · {product.finish}
        </p>

        <div className="mb-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-[#cb1f52]">
            {formatINR(product.price)}
          </span>
          <span className="text-xs text-[#9b7a87] line-through">
            {formatINR(product.oldPrice)}
          </span>
        </div>

        {/* <button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2b1020] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#cb1f52]">
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to Cart
        </button> */}
      </div>
    </motion.div>
  );
}
