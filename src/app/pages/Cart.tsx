import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContexts';

export default function Cart() {
  const { cart, updateQty, removeFromCart, cartTotal } = useApp();
  const shipping = cartTotal >= 1199 || cartTotal === 0 ? 0 : 99;

  return (
    <div className="min-h-screen bg-[#fffafc] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1
          className="mb-8 text-4xl font-normal italic text-[#cb1f52]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-[#f1d4dc] bg-white p-16 text-center shadow-sm"
          >
            <ShoppingBag className="mx-auto h-16 w-16 text-[#cb1f52]" />
            <p className="mt-4 text-lg text-[#4b3140]">Your cart is empty</p>
            <Link
              to="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b71848]"
            >
              Continue Shopping <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {cart.map((item) => (
                <motion.div
                  key={`${item.id}-${item.variant ?? ''}`}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 rounded-2xl border border-[#f1d4dc] bg-white p-4 shadow-sm"
                >
                  <img src={item.image} alt={item.name} className="h-28 w-28 rounded-xl object-cover" />
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-[#2b1020]">{item.name}</h3>
                      {item.variant && <p className="text-xs text-[#6d4b58]">{item.variant}</p>}
                      <p className="mt-1 text-[#cb1f52] font-semibold">₹{item.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-[#f1d4dc]">
                        <button onClick={() => updateQty(item.id, item.quantity - 1)} className="p-2 text-[#cb1f52]"><Minus className="h-4 w-4" /></button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, item.quantity + 1)} className="p-2 text-[#cb1f52]"><Plus className="h-4 w-4" /></button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-[#cb1f52] transition hover:text-[#b71848]" aria-label="Remove">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-[#f1d4dc] bg-white p-6 shadow-[0_24px_60px_rgba(115,28,52,0.08)]">
              <h3 className="text-lg font-semibold text-[#2b1020]">Order Summary</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between"><dt className="text-[#6d4b58]">Subtotal</dt><dd className="font-medium text-[#2b1020]">₹{cartTotal}</dd></div>
                <div className="flex justify-between"><dt className="text-[#6d4b58]">Shipping</dt><dd className="font-medium text-[#2b1020]">{shipping ? `₹${shipping}` : 'Free'}</dd></div>
                <div className="border-t border-[#f1d4dc] pt-3 flex justify-between text-base"><dt className="font-semibold text-[#2b1020]">Total</dt><dd className="font-semibold text-[#cb1f52]">₹{cartTotal + shipping}</dd></div>
              </dl>
              <Link
                to="/checkout"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(203,31,82,0.24)] transition hover:-translate-y-0.5 hover:bg-[#b71848]"
              >
                Checkout <ArrowRight className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
