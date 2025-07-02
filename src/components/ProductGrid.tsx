import Image from 'next/image';
import { Product } from '@/types';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Products
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our most popular developer merchandise, carefully selected for quality and style
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  ${product.price}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
          View All Products
        </button>
      </div>
    </section>
  );
}
