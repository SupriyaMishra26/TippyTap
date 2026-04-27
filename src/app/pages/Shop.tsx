// import { useEffect, useState } from 'react';
// import ProductGrid from '../components/ProductGrid';
// import { fetchProducts, type ApiProduct } from '../lib/api';

// export default function Shop() {
//   const [products, setProducts] = useState<ApiProduct[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts().then((p) => {
//       setProducts(p);
//       setLoading(false);
//     });
//   }, []);

//   const mapped = products.map((p) => ({
//     id: p.id,
//     name: p.name,
//     price: `₹${p.price}`,
//     image: p.image,
//     rating: p.rating ?? 5,
//     description: p.description,
//     badge: p.oldPrice ? 'Sale' : undefined,
//   }));

//   return (
//     <div className="min-h-screen bg-[linear-gradient(180deg,#fff8f4_0%,#fffdfd_100%)]">
//       {loading ? (
//         <div className="flex min-h-[50vh] items-center justify-center text-[#cb1f52]">Loading…</div>
//       ) : (
//         <ProductGrid
//           products={mapped}
//           title="Shop All Nails"
//           description="Explore the entire collection — bestsellers, new drops, and everything in between."
//         />
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { fetchProducts, type ApiProduct } from '../lib/api';

export default function Shop() {
  const [products, setProducts] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Shop All Nails — Tippy Tap Nails';
    fetchProducts().then((p) => {
      setProducts(p);
      setLoading(false);
    });
    return () => { document.title = 'Tippy Tap Nails'; };
  }, []);

  const mapped = products.map((p) => ({
    id: p.id,
    name: p.name,
    price: `₹${p.price}`,
    image: p.image,
    rating: p.rating ?? 5,
    description: p.description,
    badge: p.oldPrice ? 'Sale' : undefined,
  }));

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff8f4_0%,#fffdfd_100%)]">
      {loading ? (
        <div className="flex min-h-[50vh] items-center justify-center text-[#cb1f52]">Loading…</div>
      ) : (
        <ProductGrid
          products={mapped}
          title="Shop All Nails"
          description="Explore the entire collection — bestsellers, new drops, and everything in between."
        />
      )}
    </div>
  );
}
