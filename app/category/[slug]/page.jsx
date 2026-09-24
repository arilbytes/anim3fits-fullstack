'use client';

import { notFound } from 'next/navigation';
import AnimeBackground from '@/app/components/anime';
import ProductCard from '@/app/components/ProductCard';
import { getCategoryBySlug, getProductsByCategory } from '@/app/data/products';

export default function CategoryPage({ params }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) return notFound();

  const products = getProductsByCategory(params.slug);

  return (
    <main>
      <AnimeBackground preset="darkFantasy" backgroundColor="#000000" />

      <section className="mx-auto max-w-7xl px-1 py-8 sm:px-2">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Category
          </span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            {products.length} {products.length === 1 ? "piece" : "pieces"} in this category.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} id={p.id} slug={p.slug} image={p.image} title={p.title} price={p.price} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-white/60">No products in this category yet — check back soon.</p>
        )}
      </section>
    </main>
  );
}
