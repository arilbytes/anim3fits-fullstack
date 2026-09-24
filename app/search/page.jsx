'use client';

import { useMemo, useState } from 'react';
import AnimeBackground from '@/app/components/anime';
import ProductCard from '@/app/components/ProductCard';
import { PRODUCTS } from '@/app/data/products';
import { GLASS_INPUT } from '@/app/lib/glass';

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) => p.title.toLowerCase().includes(q) || p.category.replace(/-/g, " ").includes(q)
    );
  }, [query]);

  return (
    <main>
      <AnimeBackground preset="zimaBlue" backgroundColor="#000000" />

      <section className="mx-auto max-w-5xl px-1 py-8 sm:px-2">
        <h1 className="mb-6 text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">Search</h1>

        <div className="relative mb-8 max-w-md">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
            <SearchIcon />
          </span>
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for tees, hoodies, drops…"
            className={`${GLASS_INPUT} pl-11`}
          />
        </div>

        {query.trim() === "" ? (
          <p className="text-sm text-white/50">Start typing to search the catalog.</p>
        ) : results.length === 0 ? (
          <p className="text-sm text-white/50">No results for &ldquo;{query}&rdquo;.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {results.map((p) => (
              <ProductCard key={p.id} id={p.id} slug={p.slug} image={p.image} title={p.title} price={p.price} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
