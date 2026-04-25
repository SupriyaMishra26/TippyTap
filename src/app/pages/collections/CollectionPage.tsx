// import ProductGrid from '../../components/ProductGrid';

// interface CollectionPageProps {
//   title: string;
//   description: string;
// }

// const sampleProducts = [

//   {
//     id: 5,
//     name: 'Elegant Rose Gold',
//     price: '₹24.99',
//     image: 'https://images.unsplash.com/photo-1696341980130-4bdff3322802?w=600&q=80',
//     rating: 5,
//   },
//   {
//     id: 6,
//     name: 'Classic French Tips',
//     image: 'https://images.unsplash.com/photo-1696342003838-4a8f9f36588c?w=600&q=80',
//     price: '₹19.99',
//     rating: 5,
//   },
//   {
//     id: 7,
//     name: 'Midnight Shimmer',
//     image: 'https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?w=600&q=80',
//     price: '₹26.99',
//     rating: 5,
//   },
//   {
//     id: 8,
//     name: 'Pearl White',
//     image: 'https://images.unsplash.com/photo-1633955726992-2b7c0d2d2a69?w=600&q=80',
//     price: '₹21.99',
//     rating: 5,
//   },
//   {
//     id: 9,
//     name: 'Blossom Dreams',
//     image: 'https://images.unsplash.com/photo-1736434518489-0eb84070017f?w=600&q=80',
//     price: '₹22.99',
//     rating: 5,
//   },
//   {
//     id: 10,
//     name: 'Romantic Hearts',
//     image: 'https://images.unsplash.com/photo-1754799670410-b282791342c3?w=600&q=80',
//     price: '₹23.99',
//     rating: 5,
//   },
//   {
//     id: 11,
//     name: 'Nude Elegance',
//     image: 'https://images.unsplash.com/photo-1615948995459-7ae7f04c5cba?w=600&q=80',
//     price: '₹20.99',
//     rating: 5,
//   },
//   {
//     id: 12,
//     name: 'Silver Glam',
//     image: 'https://images.unsplash.com/photo-1773808605530-17926a0463e9?w=600&q=80',
//     price: '₹25.99',
//     rating: 5,
//   },
// ];

// export default function CollectionPage({ title, description }: CollectionPageProps) {
//   return (
//     <div className="min-h-screen bg-white pt-0">
//       <ProductGrid products={sampleProducts} title={title} description={description} />
//     </div>
//   );
// }
import ProductGrid from '../../components/ProductGrid';

import nailPink from '../../../imports/nail-pink.jpeg';
import nailRed from '../../../imports/nail-red.jpeg';
import nailBlue from '../../../imports/nail-blue.jpeg';
import nailOrange from '../../../imports/orange.jpeg';

interface CollectionPageProps {
  title: string;
  description: string;
}

const sampleProducts = [
  { id: 'col-1', name: 'Blushing Rose', price: '₹499', image: nailPink, rating: 5, description: 'Soft pink for everyday elegance.', badge: 'Bestseller' },
  { id: 'col-2', name: 'Classic Red', price: '₹549', image: nailRed, rating: 5, description: 'Bold red — timeless and iconic.', badge: 'Limited' },
  { id: 'col-3', name: 'Ocean Breeze', price: '₹499', image: nailBlue, rating: 5, description: 'Cool turquoise for a fresh vibe.', badge: 'New' },
  { id: 'col-4', name: 'Sunset Pop', price: '₹499', image: nailOrange, rating: 5, description: 'Warm orange with uplifting energy.', badge: 'New' },
  { id: 'col-5', name: 'Pink Petal', price: '₹479', image: nailPink, rating: 5, description: 'A delicate blush for soft, romantic days.' },
  { id: 'col-6', name: 'Ruby Glow', price: '₹529', image: nailRed, rating: 5, description: 'Glossy ruby red with a luminous finish.' },
  { id: 'col-7', name: 'Azure Muse', price: '₹499', image: nailBlue, rating: 5, description: 'Statement blue with a high-shine top coat.' },
  { id: 'col-8', name: 'Tangerine Dream', price: '₹489', image: nailOrange, rating: 5, description: 'Juicy tangerine — bright, warm, summer-ready.' },
];

export default function CollectionPage({ title, description }: CollectionPageProps) {
  return (
    <div className="min-h-screen bg-white pt-0">
      <ProductGrid products={sampleProducts} title={title} description={description} />
    </div>
  );
}
