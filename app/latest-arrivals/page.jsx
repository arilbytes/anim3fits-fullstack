'use client';

import AnimeBackground from '../components/anime';
import ProductCard from '../components/ProductCard';
import { LATEST_ARRIVALS } from '../data/products';

export default function LatestArrivalsPage() {
  return (
    <main>
      <AnimeBackground preset="moonMars" backgroundColor="#000000" />

      <section className="mx-auto max-w-7xl px-1 py-8 sm:px-2">
        <div className="mb-8 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Fresh In
          </span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Latest Arrivals
          </h1>
          <p className="mt-3 text-sm text-white/70 sm:text-base">
            Everything new, dropped straight into the lineup.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {LATEST_ARRIVALS.map((p) => (
            <ProductCard key={p.id} id={p.id} slug={p.slug} image={p.image} title={p.title} price={p.price} />
          ))}
        </div>
      </section>
    </main>
  );
}
