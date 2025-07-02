import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { featuredProducts } from '@/data/products';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid products={featuredProducts} />
      <Footer />
    </div>
  );
}
