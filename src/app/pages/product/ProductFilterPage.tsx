import ProductGrid from '../../components/ProductGrid';

interface ProductFilterPageProps {
  category: string;
  filter: string;
  description: string;
}

const sampleProducts = [
  {
    id: 1,
    name: 'Ocean Breeze',
    price: '₹24.99',
    image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.52_PM_(1).jpeg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ruby Passion',
    image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.52_PM.jpeg',
    price: '₹26.99',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sunset Orange',
    image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.51_PM_(1).jpeg',
    price: '₹24.99',
    rating: 5,
  },
  {
    id: 4,
    name: 'Soft Pink Blush',
    image: '/src/imports/WhatsApp_Image_2026-04-11_at_3.25.51_PM.jpeg',
    price: '₹22.99',
    rating: 5,
  },
  {
    id: 5,
    name: 'Elegant Rose Gold',
    price: '₹24.99',
    image: 'https://images.unsplash.com/photo-1696341980130-4bdff3322802?w=600&q=80',
    rating: 5,
  },
  {
    id: 6,
    name: 'Classic French Tips',
    image: 'https://images.unsplash.com/photo-1696342003838-4a8f9f36588c?w=600&q=80',
    price: '₹19.99',
    rating: 5,
  },
  {
    id: 7,
    name: 'Midnight Shimmer',
    image: 'https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?w=600&q=80',
    price: '₹26.99',
    rating: 5,
  },
  {
    id: 8,
    name: 'Pearl White',
    image: 'https://images.unsplash.com/photo-1633955726992-2b7c0d2d2a69?w=600&q=80',
    price: '₹21.99',
    rating: 5,
  },
];

export default function ProductFilterPage({ category, filter, description }: ProductFilterPageProps) {
  return (
    <div className="min-h-screen bg-white pt-0">
      <ProductGrid
        products={sampleProducts}
        title={`${filter} ${category}`}
        description={description}
      />
    </div>
  );
}
