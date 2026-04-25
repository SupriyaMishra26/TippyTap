// Central data source for all colour pages.
// Each colour has its own theme + product list. Easy to edit without touching UI.

export type ColourKey =
  | 'pink'
  | 'red'
  | 'blue'
  | 'nude'
  | 'white'
  | 'black'
  | 'purple'
  | 'green';

export type ColourProduct = {
  id: string;
  name: string;
  finish: 'Glossy' | 'Matte' | 'Glitter' | 'Chrome' | 'French';
  shape: 'Almond' | 'Coffin' | 'Stiletto' | 'Square' | 'Round' | 'Ballerina';
  length: 'Short' | 'Medium' | 'Long';
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isBestseller?: boolean;
};

export type ColourReview = {
  name: string;
  location: string;
  rating: number;
  text: string;
};

export type ColourData = {
  key: ColourKey;
  name: string;
  tagline: string;
  description: string;
  hex: string;
  soft: string;
  deep: string;
  gradient: string;
  products: ColourProduct[];
  reviews: ColourReview[];
};

const sharedReviewsTemplate = (colourName: string): ColourReview[] => [
  {
    name: 'Aanya S.',
    location: 'Mumbai',
    rating: 5,
    text: `The ${colourName.toLowerCase()} fit is unreal — feels like my real nails. Got compliments all week!`,
  },
  {
    name: 'Riya K.',
    location: 'Delhi',
    rating: 5,
    text: `Lasted 3 weeks without a single chip. The ${colourName.toLowerCase()} shade is exactly like the picture.`,
  },
  {
    name: 'Sneha M.',
    location: 'Bangalore',
    rating: 5,
    text: `Obsessed with this ${colourName.toLowerCase()}! Application was so easy with the kit. Premium feel.`,
  },
];

export const colourData: Record<ColourKey, ColourData> = {
  pink: {
    key: 'pink',
    name: 'Pink',
    tagline: 'Soft, sweet, undeniably you',
    description:
      'From baby blush to hot fuchsia — our pink press-on nails capture every mood. Hand-painted finishes, salon-grade gel, and a fit that hugs your natural nail.',
    hex: '#ec4899',
    soft: '#fff0f4',
    deep: '#9d174d',
    gradient: 'from-[#ffd6e2] via-[#ffadc6] to-[#ec4899]',
    products: [
      { id: 'pink-1', name: 'Blush Almond Glossy', finish: 'Glossy', shape: 'Almond', length: 'Medium', price: 599, oldPrice: 899, rating: 4.9, reviews: 412, isBestseller: true },
      { id: 'pink-2', name: 'Hot Fuchsia Coffin', finish: 'Glossy', shape: 'Coffin', length: 'Long', price: 699, oldPrice: 999, rating: 4.8, reviews: 287 },
      { id: 'pink-3', name: 'Baby Pink French', finish: 'French', shape: 'Square', length: 'Short', price: 549, oldPrice: 799, rating: 4.9, reviews: 521, isNew: true },
      { id: 'pink-4', name: 'Rose Glitter Stiletto', finish: 'Glitter', shape: 'Stiletto', length: 'Long', price: 749, oldPrice: 1099, rating: 4.7, reviews: 198 },
      { id: 'pink-5', name: 'Chrome Pink Ballerina', finish: 'Chrome', shape: 'Ballerina', length: 'Medium', price: 799, oldPrice: 1199, rating: 4.8, reviews: 156, isNew: true },
      { id: 'pink-6', name: 'Bubblegum Round', finish: 'Glossy', shape: 'Round', length: 'Short', price: 499, oldPrice: 749, rating: 4.7, reviews: 309 },
      { id: 'pink-7', name: 'Matte Mauve Almond', finish: 'Matte', shape: 'Almond', length: 'Short', price: 549, oldPrice: 799, rating: 4.9, reviews: 374, isBestseller: true },
      { id: 'pink-8', name: 'Pink Sugar Square', finish: 'Matte', shape: 'Square', length: 'Medium', price: 599, oldPrice: 899, rating: 4.6, reviews: 221 },
    ],
    reviews: sharedReviewsTemplate('Pink'),
  },
  red: {
    key: 'red',
    name: 'Red',
    tagline: 'Bold, classic, head-turning',
    description:
      'Cherry, wine, scarlet, brick — the entire red spectrum, perfected. Glossy finishes that look wet for weeks.',
    hex: '#dc2626',
    soft: '#fef2f2',
    deep: '#7f1d1d',
    gradient: 'from-[#fecaca] via-[#f87171] to-[#dc2626]',
    products: [
      { id: 'red-1', name: 'Cherry Almond Glossy', finish: 'Glossy', shape: 'Almond', length: 'Medium', price: 599, oldPrice: 899, rating: 4.9, reviews: 489, isBestseller: true },
      { id: 'red-2', name: 'Wine Coffin Matte', finish: 'Matte', shape: 'Coffin', length: 'Long', price: 699, oldPrice: 999, rating: 4.8, reviews: 312 },
      { id: 'red-3', name: 'Scarlet French Tip', finish: 'French', shape: 'Square', length: 'Short', price: 549, oldPrice: 799, rating: 4.8, reviews: 267, isNew: true },
      { id: 'red-4', name: 'Ruby Glitter Stiletto', finish: 'Glitter', shape: 'Stiletto', length: 'Long', price: 749, oldPrice: 1099, rating: 4.7, reviews: 198 },
      { id: 'red-5', name: 'Chrome Red Ballerina', finish: 'Chrome', shape: 'Ballerina', length: 'Medium', price: 799, oldPrice: 1199, rating: 4.8, reviews: 142 },
      { id: 'red-6', name: 'Brick Round Classic', finish: 'Glossy', shape: 'Round', length: 'Short', price: 499, oldPrice: 749, rating: 4.6, reviews: 234 },
      { id: 'red-7', name: 'Crimson Almond', finish: 'Glossy', shape: 'Almond', length: 'Long', price: 649, oldPrice: 949, rating: 4.9, reviews: 356, isBestseller: true },
      { id: 'red-8', name: 'Rose Red Square', finish: 'Matte', shape: 'Square', length: 'Medium', price: 599, oldPrice: 899, rating: 4.7, reviews: 187 },
    ],
    reviews: sharedReviewsTemplate('Red'),
  },
  blue: {
    key: 'blue',
    name: 'Blue',
    tagline: 'Cool, calm, completely captivating',
    description:
      'Ocean blues, midnight navy, powder pastels and chrome metallics — your blue moment starts here.',
    hex: '#2563eb',
    soft: '#eff6ff',
    deep: '#1e3a8a',
    gradient: 'from-[#bfdbfe] via-[#60a5fa] to-[#2563eb]',
    products: [
      { id: 'blue-1', name: 'Ocean Almond Glossy', finish: 'Glossy', shape: 'Almond', length: 'Medium', price: 599, oldPrice: 899, rating: 4.8, reviews: 287, isBestseller: true },
      { id: 'blue-2', name: 'Midnight Navy Coffin', finish: 'Matte', shape: 'Coffin', length: 'Long', price: 699, oldPrice: 999, rating: 4.9, reviews: 234, isNew: true },
      { id: 'blue-3', name: 'Powder Blue French', finish: 'French', shape: 'Square', length: 'Short', price: 549, oldPrice: 799, rating: 4.7, reviews: 198 },
      { id: 'blue-4', name: 'Sapphire Glitter Stiletto', finish: 'Glitter', shape: 'Stiletto', length: 'Long', price: 749, oldPrice: 1099, rating: 4.8, reviews: 156 },
      { id: 'blue-5', name: 'Chrome Blue Ballerina', finish: 'Chrome', shape: 'Ballerina', length: 'Medium', price: 799, oldPrice: 1199, rating: 4.9, reviews: 178, isNew: true },
      { id: 'blue-6', name: 'Sky Round Pastel', finish: 'Glossy', shape: 'Round', length: 'Short', price: 499, oldPrice: 749, rating: 4.6, reviews: 245 },
      { id: 'blue-7', name: 'Cobalt Almond', finish: 'Glossy', shape: 'Almond', length: 'Short', price: 549, oldPrice: 799, rating: 4.8, reviews: 312 },
      { id: 'blue-8', name: 'Denim Square Matte', finish: 'Matte', shape: 'Square', length: 'Medium', price: 599, oldPrice: 899, rating: 4.7, reviews: 167 },
    ],
    reviews: sharedReviewsTemplate('Blue'),
  },
  nude: {
    key: 'nude',
    name: 'Nude',
    tagline: 'Effortless, elegant, every day',
    description:
      'The everyday luxury. Warm beiges, cool taupes, and milky almonds that flatter every skin tone.',
    hex: '#c9a884',
    soft: '#faf6f0',
    deep: '#7c5e3f',
    gradient: 'from-[#f5e6d3] via-[#e0c4a0] to-[#c9a884]',
    products: [
      { id: 'nude-1', name: 'Milky Almond Glossy', finish: 'Glossy', shape: 'Almond', length: 'Medium', price: 599, oldPrice: 899, rating: 4.9, reviews: 567, isBestseller: true },
      { id: 'nude-2', name: 'Taupe Coffin Matte', finish: 'Matte', shape: 'Coffin', length: 'Long', price: 699, oldPrice: 999, rating: 4.8, reviews: 389 },
      { id: 'nude-3', name: 'Beige French Classic', finish: 'French', shape: 'Square', length: 'Short', price: 549, oldPrice: 799, rating: 4.9, reviews: 612, isBestseller: true },
      { id: 'nude-4', name: 'Caramel Stiletto', finish: 'Glossy', shape: 'Stiletto', length: 'Long', price: 749, oldPrice: 1099, rating: 4.7, reviews: 198 },
      { id: 'nude-5', name: 'Champagne Ballerina', finish: 'Chrome', shape: 'Ballerina', length: 'Medium', price: 799, oldPrice: 1199, rating: 4.8, reviews: 234, isNew: true },
      { id: 'nude-6', name: 'Sand Round Soft', finish: 'Glossy', shape: 'Round', length: 'Short', price: 499, oldPrice: 749, rating: 4.7, reviews: 287 },
      { id: 'nude-7', name: 'Mocha Almond', finish: 'Matte', shape: 'Almond', length: 'Short', price: 549, oldPrice: 799, rating: 4.9, reviews: 421 },
      { id: 'nude-8', name: 'Latte Square', finish: 'Glossy', shape: 'Square', length: 'Medium', price: 599, oldPrice: 899, rating: 4.6, reviews: 198 },
    ],
    reviews: sharedReviewsTemplate('Nude'),
  },
  white: {
    key: 'white',
    name: 'White',
    tagline: 'Crisp, clean, quietly powerful',
    description:
      'From milky French tips to icy chrome whites — minimal, modern, magnetic.',
    hex: '#e2e8f0',
    soft: '#ffffff',
    deep: '#475569',
    gradient: 'from-white via-[#f1f5f9] to-[#cbd5e1]',
    products: [
      { id: 'white-1', name: 'Milk White Almond', finish: 'Glossy', shape: 'Almond', length: 'Medium', price: 599, oldPrice: 899, rating: 4.8, reviews: 312, isBestseller: true },
      { id: 'white-2', name: 'Pearl Coffin', finish: 'Glossy', shape: 'Coffin', length: 'Long', price: 699, oldPrice: 999, rating: 4.7, reviews: 234 },
      { id: 'white-3', name: 'Classic French', finish: 'French', shape: 'Square', length: 'Short', price: 549, oldPrice: 799, rating: 4.9, reviews: 689, isBestseller: true },
      { id: 'white-4', name: 'Ice Chrome Stiletto', finish: 'Chrome', shape: 'Stiletto', length: 'Long', price: 799, oldPrice: 1199, rating: 4.8, reviews: 178, isNew: true },
      { id: 'white-5', name: 'Snow Ballerina Matte', finish: 'Matte', shape: 'Ballerina', length: 'Medium', price: 749, oldPrice: 1099, rating: 4.7, reviews: 156 },
      { id: 'white-6', name: 'Cotton Round', finish: 'Glossy', shape: 'Round', length: 'Short', price: 499, oldPrice: 749, rating: 4.6, reviews: 245 },
      { id: 'white-7', name: 'Frost Almond', finish: 'Glossy', shape: 'Almond', length: 'Short', price: 549, oldPrice: 799, rating: 4.8, reviews: 287 },
      { id: 'white-8', name: 'Diamond Glitter Square', finish: 'Glitter', shape: 'Square', length: 'Medium', price: 699, oldPrice: 999, rating: 4.7, reviews: 198 },
    ],
    reviews: sharedReviewsTemplate('White'),
  },
  black: {
    key: 'black',
    name: 'Black',
    tagline: 'Edgy, mysterious, magnetic',
    description:
      'Glossy onyx, matte midnight, and glittered noir — the ultimate statement nails.',
    hex: '#0f172a',
    soft: '#f1f5f9',
    deep: '#020617',
    gradient: 'from-[#475569] via-[#1e293b] to-[#020617]',
    products: [
      { id: 'black-1', name: 'Onyx Almond Glossy', finish: 'Glossy', shape: 'Almond', length: 'Medium', price: 599, oldPrice: 899, rating: 4.9, reviews: 423, isBestseller: true },
      { id: 'black-2', name: 'Matte Midnight Coffin', finish: 'Matte', shape: 'Coffin', length: 'Long', price: 699, oldPrice: 999, rating: 4.8, reviews: 312 },
      { id: 'black-3', name: 'Noir French Tip', finish: 'French', shape: 'Square', length: 'Short', price: 549, oldPrice: 799, rating: 4.7, reviews: 187, isNew: true },
      { id: 'black-4', name: 'Glitter Noir Stiletto', finish: 'Glitter', shape: 'Stiletto', length: 'Long', price: 749, oldPrice: 1099, rating: 4.8, reviews: 234 },
      { id: 'black-5', name: 'Chrome Black Ballerina', finish: 'Chrome', shape: 'Ballerina', length: 'Medium', price: 799, oldPrice: 1199, rating: 4.9, reviews: 198, isNew: true },
      { id: 'black-6', name: 'Jet Round Classic', finish: 'Glossy', shape: 'Round', length: 'Short', price: 499, oldPrice: 749, rating: 4.6, reviews: 256 },
      { id: 'black-7', name: 'Raven Almond Matte', finish: 'Matte', shape: 'Almond', length: 'Short', price: 549, oldPrice: 799, rating: 4.8, reviews: 312, isBestseller: true },
      { id: 'black-8', name: 'Espresso Square', finish: 'Glossy', shape: 'Square', length: 'Medium', price: 599, oldPrice: 899, rating: 4.7, reviews: 178 },
    ],
    reviews: sharedReviewsTemplate('Black'),
  },
  purple: {
    key: 'purple',
    name: 'Purple',
    tagline: 'Royal, romantic, totally regal',
    description:
      'Lavender dreams, deep amethyst, and shimmering violet — purple in every personality.',
    hex: '#9333ea',
    soft: '#faf5ff',
    deep: '#581c87',
    gradient: 'from-[#e9d5ff] via-[#c084fc] to-[#9333ea]',
    products: [
      { id: 'purple-1', name: 'Lavender Almond', finish: 'Glossy', shape: 'Almond', length: 'Medium', price: 599, oldPrice: 899, rating: 4.8, reviews: 298, isBestseller: true },
      { id: 'purple-2', name: 'Amethyst Coffin', finish: 'Glossy', shape: 'Coffin', length: 'Long', price: 699, oldPrice: 999, rating: 4.7, reviews: 234 },
      { id: 'purple-3', name: 'Violet French', finish: 'French', shape: 'Square', length: 'Short', price: 549, oldPrice: 799, rating: 4.8, reviews: 187, isNew: true },
      { id: 'purple-4', name: 'Plum Glitter Stiletto', finish: 'Glitter', shape: 'Stiletto', length: 'Long', price: 749, oldPrice: 1099, rating: 4.9, reviews: 198 },
      { id: 'purple-5', name: 'Chrome Purple Ballerina', finish: 'Chrome', shape: 'Ballerina', length: 'Medium', price: 799, oldPrice: 1199, rating: 4.8, reviews: 156, isNew: true },
      { id: 'purple-6', name: 'Lilac Round Soft', finish: 'Glossy', shape: 'Round', length: 'Short', price: 499, oldPrice: 749, rating: 4.7, reviews: 267 },
      { id: 'purple-7', name: 'Mauve Almond Matte', finish: 'Matte', shape: 'Almond', length: 'Short', price: 549, oldPrice: 799, rating: 4.8, reviews: 312 },
      { id: 'purple-8', name: 'Grape Square', finish: 'Matte', shape: 'Square', length: 'Medium', price: 599, oldPrice: 899, rating: 4.6, reviews: 178 },
    ],
    reviews: sharedReviewsTemplate('Purple'),
  },
  green: {
    key: 'green',
    name: 'Green',
    tagline: 'Fresh, fierce, full of life',
    description:
      'Emerald, sage, mint, and deep forest — natural beauty with a bold edge.',
    hex: '#059669',
    soft: '#f0fdf4',
    deep: '#064e3b',
    gradient: 'from-[#bbf7d0] via-[#4ade80] to-[#059669]',
    products: [
      { id: 'green-1', name: 'Emerald Almond Glossy', finish: 'Glossy', shape: 'Almond', length: 'Medium', price: 599, oldPrice: 899, rating: 4.8, reviews: 287, isBestseller: true },
      { id: 'green-2', name: 'Sage Coffin Matte', finish: 'Matte', shape: 'Coffin', length: 'Long', price: 699, oldPrice: 999, rating: 4.7, reviews: 234 },
      { id: 'green-3', name: 'Mint French Tip', finish: 'French', shape: 'Square', length: 'Short', price: 549, oldPrice: 799, rating: 4.9, reviews: 312, isNew: true },
      { id: 'green-4', name: 'Forest Glitter Stiletto', finish: 'Glitter', shape: 'Stiletto', length: 'Long', price: 749, oldPrice: 1099, rating: 4.7, reviews: 178 },
      { id: 'green-5', name: 'Chrome Green Ballerina', finish: 'Chrome', shape: 'Ballerina', length: 'Medium', price: 799, oldPrice: 1199, rating: 4.8, reviews: 145, isNew: true },
      { id: 'green-6', name: 'Pistachio Round', finish: 'Glossy', shape: 'Round', length: 'Short', price: 499, oldPrice: 749, rating: 4.6, reviews: 234 },
      { id: 'green-7', name: 'Olive Almond Matte', finish: 'Matte', shape: 'Almond', length: 'Short', price: 549, oldPrice: 799, rating: 4.8, reviews: 298, isBestseller: true },
      { id: 'green-8', name: 'Jade Square Glossy', finish: 'Glossy', shape: 'Square', length: 'Medium', price: 599, oldPrice: 899, rating: 4.7, reviews: 187 },
    ],
    reviews: sharedReviewsTemplate('Green'),
  },
};

export const colourList = Object.values(colourData);
