// Central API service.
// Set VITE_API_BASE to your real endpoint when ready.
// Set VITE_USE_MOCK_API=true to force fixture data during development.

import nailImg from '../../assets/4.jpg';

export const API_BASE = import.meta.env.VITE_API_BASE?.replace(/\/+$/, '') || '';
export const USE_MOCK_API = import.meta.env.VITE_USE_MOCK_API === 'true' || !API_BASE;

export type ApiProduct = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  description: string;
  category?: string;
  rating?: number;
  variants?: string[];
};

const MOCK: ApiProduct[] = [
  { id: 'p-1', name: 'Blushing Rose', price: 499, oldPrice: 799, image: nailImg, description: 'Soft pink for everyday elegance.', category: 'pink', rating: 5, variants: ['Short', 'Medium', 'Long'] },
  { id: 'p-2', name: 'Sunset Pop', price: 549, oldPrice: 849, image: nailImg, description: 'Warm orange with uplifting energy.', category: 'new-arrivals', rating: 5, variants: ['Almond', 'Coffin'] },
  { id: 'p-3', name: 'Classic Red', price: 599, oldPrice: 899, image: nailImg, description: 'Bold red — timeless and iconic.', category: 'red', rating: 5, variants: ['Short', 'Medium'] },
  { id: 'p-4', name: 'Ocean Breeze', price: 499, image: nailImg, description: 'Cool turquoise for a fresh vibe.', category: 'blue', rating: 5 },
  { id: 'p-5', name: 'Pearl White', price: 549, image: nailImg, description: 'Pristine white for any occasion.', category: 'white', rating: 5 },
  { id: 'p-6', name: 'Midnight Shimmer', price: 699, image: nailImg, description: 'Sparkling deep navy night look.', category: 'best-sellers', rating: 5 },
  { id: 'p-7', name: 'Nude Elegance', price: 499, image: nailImg, description: 'Subtle nude for understated charm.', category: 'nude', rating: 5 },
  { id: 'p-8', name: 'Rose Gold Glam', price: 749, image: nailImg, description: 'Luxe rose gold metallic finish.', category: 'best-sellers', rating: 5 },
];

async function tryFetch<T>(path: string): Promise<T | null> {
  if (USE_MOCK_API) return null;
  try {
    const res = await fetch(`${API_BASE}${path}`);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function fetchProducts(category?: string): Promise<ApiProduct[]> {
  const remote = await tryFetch<ApiProduct[]>(`/products${category ? `?category=${category}` : ''}`);
  if (remote) return remote;
  await new Promise((r) => setTimeout(r, 250));
  return category ? MOCK.filter((p) => p.category === category) : MOCK;
}

export async function fetchProduct(id: string): Promise<ApiProduct | null> {
  const remote = await tryFetch<ApiProduct>(`/products/${id}`);
  if (remote) return remote;
  await new Promise((r) => setTimeout(r, 200));
  return MOCK.find((p) => p.id === id) ?? null;
}

export async function fetchFeatured(): Promise<ApiProduct[]> {
  return (await fetchProducts()).slice(0, 4);
}

export async function fetchRelated(id: string): Promise<ApiProduct[]> {
  const all = await fetchProducts();
  return all.filter((p) => p.id !== id).slice(0, 4);
}

export async function searchProducts(query: string): Promise<ApiProduct[]> {
  const all = await fetchProducts();
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return all.filter((p) =>
    p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q),
  );
}
