import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { useApp } from '../contexts/AppContexts';

export default function Checkout() {
  const { cart, cartTotal, clearCart, user, setAuthOpen } = useApp();
  const navigate = useNavigate();
  const shipping = cartTotal >= 1199 || cartTotal === 0 ? 0 : 99;
  const [placed, setPlaced] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast('Please sign in to place your order');
      setAuthOpen(true);
      return;
    }
    setBusy(true);
    await new Promise((r) => setTimeout(r, 800));
    setBusy(false);
    setPlaced(true);
    clearCart();
    setTimeout(() => navigate('/'), 2500);
  };

  if (placed) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#fffafc] p-6">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-[#cb1f52]" />
          <h2 className="mt-4 text-3xl italic text-[#cb1f52]" style={{ fontFamily: "'Playfair Display', serif" }}>Order placed!</h2>
          <p className="mt-2 text-[#6d4b58]">Thank you. We'll email you the details shortly.</p>
        </motion.div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#fffafc]">
        <p className="text-[#4b3140]">Your cart is empty. <Link to="/" className="text-[#cb1f52] underline">Shop now</Link></p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffafc] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-4xl font-normal italic text-[#cb1f52]" style={{ fontFamily: "'Playfair Display', serif" }}>Checkout</h1>

        <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1.2fr_360px]">
          <section className="space-y-6 rounded-3xl border border-[#f1d4dc] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-[#2b1020]">Shipping Address</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: 'Full Name', name: 'name' },
                { label: 'Phone', name: 'phone', type: 'tel' },
                { label: 'Email', name: 'email', type: 'email', span: true },
                { label: 'Address Line', name: 'addr', span: true },
                { label: 'City', name: 'city' },
                { label: 'State', name: 'state' },
                { label: 'PIN Code', name: 'pin' },
                { label: 'Country', name: 'country' },
              ].map((f) => (
                <label key={f.name} className={f.span ? 'sm:col-span-2 block' : 'block'}>
                  <span className="text-xs font-medium text-[#4b3140]">{f.label}</span>
                  <input
                    required
                    type={f.type ?? 'text'}
                    name={f.name}
                    className="mt-1 w-full rounded-2xl border border-[#f1d4dc] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#cb1f52]"
                  />
                </label>
              ))}
            </div>
          </section>

          <aside className="h-fit rounded-3xl border border-[#f1d4dc] bg-white p-6 shadow-[0_24px_60px_rgba(115,28,52,0.08)]">
            <h3 className="text-lg font-semibold text-[#2b1020]">Order Summary</h3>
            <ul className="mt-4 space-y-3">
              {cart.map((i) => (
                <li key={`${i.id}-${i.variant ?? ''}`} className="flex justify-between text-sm">
                  <span className="text-[#4b3140]">{i.name} × {i.quantity}</span>
                  <span className="font-medium text-[#2b1020]">₹{i.price * i.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-2 border-t border-[#f1d4dc] pt-4 text-sm">
              <div className="flex justify-between"><span className="text-[#6d4b58]">Shipping</span><span>{shipping ? `₹${shipping}` : 'Free'}</span></div>
              <div className="flex justify-between text-base"><span className="font-semibold text-[#2b1020]">Total</span><span className="font-semibold text-[#cb1f52]">₹{cartTotal + shipping}</span></div>
            </div>
            <button
              type="submit"
              disabled={busy}
              className="mt-5 w-full rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(203,31,82,0.24)] transition hover:-translate-y-0.5 hover:bg-[#b71848] disabled:opacity-60"
            >
              {busy ? 'Placing order…' : 'Place Order'}
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
}
