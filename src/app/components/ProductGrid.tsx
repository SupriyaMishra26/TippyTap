import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
}

interface ProductGridProps {
  products: Product[];
  title: string;
  description?: string;
}

export default function ProductGrid({ products, title, description }: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#D62332' }}>
            {title}
          </h1>
          {description && <p className="text-xl text-gray-600">{description}</p>}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    animate={{
                      scale: hoveredProduct === product.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0
                    }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-6"
                  >
                    <motion.button
                      initial={{ y: 20 }}
                      animate={{
                        y: hoveredProduct === product.id ? 0 : 20
                      }}
                      className="px-6 py-3 rounded-full text-white font-medium"
                      style={{ backgroundColor: '#D62332' }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick View
                    </motion.button>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
                >
                  <Heart
                    className="w-5 h-5"
                    style={{ color: '#D62332' }}
                  />
                </motion.button>
              </motion.div>

              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <div className="flex gap-0.5">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="font-bold text-xl" style={{ color: '#D62332' }}>
                  {product.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
