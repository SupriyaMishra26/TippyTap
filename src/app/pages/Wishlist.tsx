import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContexts';

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart } = useApp();
  return (
    <div className="min-h-screen bg-[#fffafc] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-normal italic text-[#cb1f52]" style={{ fontFamily: "'Playfair Display', serif" }}>Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="rounded-3xl border border-[#f1d4dc] bg-white p-16 text-center shadow-sm">
            <Heart className="mx-auto h-16 w-16 text-[#cb1f52]" />
            <p className="mt-4 text-lg text-[#4b3140]">No saved items yet</p>
            <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b71848]">Browse products</Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {wishlist.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-2xl border border-[#f1d4dc] bg-white shadow-sm"
              >
                <button onClick={() => toggleWishlist(item)} className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-[#cb1f52] transition hover:bg-white"><X className="h-4 w-4" /></button>
                <div className="aspect-square overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-[#2b1020]">{item.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#cb1f52]">₹{item.price}</p>
                  <button
                    onClick={() => addToCart({ id: item.id, name: item.name, price: item.price, image: item.image })}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#cb1f52] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#b71848]"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> Add to Cart
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
