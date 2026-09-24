'use client';

import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard';
import { useWishlist } from '@/app/context/WishlistContext';
import { PRODUCTS } from '@/app/data/products';
import { GLASS } from '@/app/lib/glass';

export default function WishlistPage() {
  const { ids } = useWishlist();
  const items = PRODUCTS.filter((p) => ids.includes(p.id));

  return (
    <div className={`rounded-[1.75rem] p-6 font-nb17-sans text-white sm:p-8 ${GLASS}`}>
      <h1 className="text-lg font-bold uppercase tracking-wide sm:text-xl">Wishlist</h1>

      {items.length === 0 ? (
        <div className="mt-6 flex flex-col items-start gap-3">
          <p className="text-sm text-white/60">Nothing saved yet — tap the heart on any product.</p>
          <Link href="/latest-arrivals" className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]">
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} id={p.id} slug={p.slug} image={p.image} title={p.title} price={p.price} />
          ))}
        </div>
      )}
    </div>
  );
}
