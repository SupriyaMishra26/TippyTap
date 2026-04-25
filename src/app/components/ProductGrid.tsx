// import { useState } from 'react';
// import { motion } from 'motion/react';
// import { Heart, Star } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   image: string;
//   rating: number;
// }

// interface ProductGridProps {
//   products: Product[];
//   title: string;
//   description?: string;
// }

// export default function ProductGrid({ products, title, description }: ProductGridProps) {
//   const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

//   return (
//     <section className="relative py-10 overflow-hidden">

//   <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center ">

//     <motion.div
//       initial={{ opacity: 0, y: 15 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="relative overflow-hidden"
//     >

    
//     <h1
//       className="mb-5 font-normal italic leading-tight bg-gradient-to-r from-[#cb1f52] via-rose-500 to-[#b71848] bg-clip-text text-transparent"
//       style={{
//         fontFamily: "'Playfair Display', serif",
//         fontSize: 'clamp(2.5rem, 6vw, 4rem)',
//       }}
//     >
//       {title}
//     </h1>

//     {/* SUBTITLE (soft emotional line) */}
//     <p
//       className="mb-6 text-lg italic text-[#cb1f52] font-light"
//       style={{ fontFamily: "'Playfair Display', serif" }}
//     >
//       Crafted for elegance, designed for expression
//     </p>

//     {/* DESCRIPTION */}
//   {description && (
//   <p className="max-w-2xl mx-auto text-lg leading-relaxed text-[#6d4b58] font-light mb-8">
//     {description}
//   </p>
// )}
  
// </motion.div>

//         {/* PRODUCTS GRID */}
//        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left mt-8">

//           {products.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               onMouseEnter={() => setHoveredProduct(product.id)}
//               onMouseLeave={() => setHoveredProduct(null)}
//               className="group cursor-pointer"
//             >

//               <motion.div
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative rounded-2xl overflow-hidden shadow-lg bg-white"
//               >

//                 <div className="relative aspect-square overflow-hidden">

//                   <motion.img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover"
//                     animate={{
//                       scale: hoveredProduct === product.id ? 1.1 : 1,
//                     }}
//                     transition={{ duration: 0.4 }}
//                   />

//                 </div>

//                 <motion.button
//                   whileHover={{ scale: 1.2, rotate: 10 }}
//                   whileTap={{ scale: 0.9 }}
//                   className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
//                 >
//                   <Heart className="w-5 h-5" style={{ color: '#cb1f52' }} />
//                 </motion.button>

//               </motion.div>

//               <div className="mt-4 space-y-2">
//                 <div className="flex items-center justify-between">
//                   <h3 className="font-bold text-lg">{product.name}</h3>
//                   <div className="flex gap-0.5">
//                     {[...Array(product.rating)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                     ))}
//                   </div>
//                 </div>

//                 <p className="font-bold text-xl" style={{ color: '#cb1f52' }}>
//                   {product.price}
//                 </p>
//               </div>

//             </motion.div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Eye } from 'lucide-react';
import { useApp } from '../contexts/AppContexts';

interface Product {
  id: number | string;
  name: string;
  price: string | number;
  image: string;
  rating: number;
  description?: string;
  badge?: string;
}

interface ProductGridProps {
  products: Product[];
  title: string;
  description?: string;
}

function priceNumber(p: string | number) {
  if (typeof p === 'number') return p;
  const n = Number(String(p).replace(/[^\d.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export default function ProductGrid({ products, title, description }: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<Product['id'] | null>(null);
  const { addToCart, toggleWishlist, inWishlist } = useApp();

  return (
    <section className="relative overflow-hidden py-10 sm:py-14">
      {/* Hero Header */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden text-center"
        >
          <span className="mb-3 inline-flex rounded-full bg-[#fff0f4] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#cb1f52]">
            Shop the Collection
          </span>
          <h1
            className="mb-4 font-normal italic leading-tight bg-gradient-to-r from-[#cb1f52] via-rose-500 to-[#b71848] bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 6vw, 3.75rem)' }}
          >
            {title}
          </h1>
          <p className="mb-3 text-base italic text-[#cb1f52] font-light sm:text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
            Crafted for elegance, designed for expression
          </p>
          {description && (
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#6d4b58] sm:text-base">{description}</p>
          )}
        </motion.div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => {
            const priceN = priceNumber(product.price);
            const wished = inWishlist(product.id);
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4) }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#f1d4dc] bg-white shadow-[0_18px_45px_rgba(115,28,52,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(115,28,52,0.16)]"
              >
                {/* Image */}
                <Link to={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-[#fff0f5]">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                    animate={{ scale: hoveredProduct === product.id ? 1.08 : 1 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#220714]/30 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute left-3 top-3 inline-flex rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#cb1f52] shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist */}
                  <motion.button
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist({ id: product.id, name: product.name, price: priceN, image: product.image });
                    }}
                    className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-[#fff0f4]"
                    aria-label="Add to wishlist"
                  >
                    <Heart className={`h-4 w-4 transition ${wished ? 'fill-[#cb1f52] text-[#cb1f52]' : 'text-[#cb1f52]'}`} />
                  </motion.button>

                  {/* Quick view */}
                  <Link
                    to={`/product/${product.id}`}
                    className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-[#cb1f52] opacity-0 shadow-md transition group-hover:opacity-100"
                  >
                    <Eye className="h-3.5 w-3.5" /> Quick View
                  </Link>
                </Link>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <Link to={`/product/${product.id}`} className="font-semibold text-[#2b1020] transition hover:text-[#cb1f52]">
                      {product.name}
                    </Link>
                    <div className="flex shrink-0 gap-0.5">
                      {[...Array(product.rating || 5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="line-clamp-2 text-xs leading-5 text-[#6d4b58] sm:text-sm">
                    {product.description ?? 'Handpainted soft-gel press-on nails crafted for premium everyday wear.'}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <span className="text-lg font-semibold text-[#cb1f52]">
                      {typeof product.price === 'number' ? `₹${product.price}` : product.price}
                    </span>
                    <button
                      onClick={() => addToCart({ id: product.id, name: product.name, price: priceN, image: product.image })}
                      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-[#cb1f52] px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#b71848]"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" /> Add
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
