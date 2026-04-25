import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Minus, Plus, Star } from 'lucide-react';
import { ApiProduct, fetchProduct, fetchRelated } from '../lib/api';
import { useApp } from '../contexts/AppContexts';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ApiProduct | null>(null);
  const [related, setRelated] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState<string | undefined>();
  const { addToCart, toggleWishlist, inWishlist } = useApp();

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Promise.all([fetchProduct(id), fetchRelated(id)]).then(([p, r]) => {
      setProduct(p);
      setRelated(r);
      setVariant(p?.variants?.[0]);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl animate-pulse px-4 py-16 grid gap-8 lg:grid-cols-2">
        <div className="aspect-square rounded-3xl bg-[#f7e8ec]" />
        <div className="space-y-4">
          <div className="h-8 w-2/3 rounded bg-[#f7e8ec]" />
          <div className="h-5 w-1/3 rounded bg-[#f7e8ec]" />
          <div className="h-24 rounded bg-[#f7e8ec]" />
        </div>
      </div>
    );
  }
  if (!product) return <div className="p-16 text-center text-[#4b3140]">Product not found.</div>;

  return (
    <div className="bg-[#fffafc] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="overflow-hidden rounded-3xl border border-[#f1d4dc] bg-white shadow-[0_24px_60px_rgba(115,28,52,0.1)]">
            <img src={product.image} alt={product.name} className="aspect-square w-full object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col">
            <h1 className="text-4xl font-normal italic text-[#cb1f52]" style={{ fontFamily: "'Playfair Display', serif" }}>{product.name}</h1>
            <div className="mt-2 flex items-center gap-2 text-sm text-[#6d4b58]">
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}</div>
              <span>({product.rating ?? 5}.0)</span>
            </div>
            <p className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-semibold text-[#cb1f52]">₹{product.price}</span>
              {product.oldPrice && <span className="text-lg text-[#6d4b58] line-through">₹{product.oldPrice}</span>}
            </p>
            <p className="mt-4 text-[#4b3140] leading-7">{product.description}</p>

            {product.variants && product.variants.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#cb1f52]">Variant</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setVariant(v)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${variant === v ? 'border-[#cb1f52] bg-[#fff0f4] text-[#cb1f52]' : 'border-[#f1d4dc] text-[#4b3140] hover:border-[#cb1f52]'}`}
                    >{v}</button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6 flex items-center gap-4">
              <div className="inline-flex items-center rounded-full border border-[#f1d4dc] bg-white">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-3 text-[#cb1f52]"><Minus className="h-4 w-4" /></button>
                <span className="w-10 text-center font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="p-3 text-[#cb1f52]"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image, variant }, qty)}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#cb1f52] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(203,31,82,0.24)] transition hover:-translate-y-0.5 hover:bg-[#b71848]"
              ><ShoppingBag className="h-4 w-4" /> Add to Cart</button>
              <button
                onClick={() => toggleWishlist({ id: product.id, name: product.name, price: product.price, image: product.image })}
                className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition ${inWishlist(product.id) ? 'border-[#cb1f52] bg-[#fff0f4] text-[#cb1f52]' : 'border-[#e7c4cf] bg-white text-[#7b1730] hover:border-[#cb1f52]'}`}
              ><Heart className={`h-4 w-4 ${inWishlist(product.id) ? 'fill-[#cb1f52]' : ''}`} /> Wishlist</button>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#2b1020]">You May Also Like</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group overflow-hidden rounded-2xl border border-[#f1d4dc] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="aspect-square overflow-hidden"><img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                  <div className="p-4">
                    <h3 className="font-medium text-[#2b1020]">{p.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#cb1f52]">₹{p.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
