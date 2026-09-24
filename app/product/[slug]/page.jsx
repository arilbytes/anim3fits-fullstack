'use client';

import { useState } from 'react';
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import AnimeBackground from '@/app/components/anime';
import { getProductBySlug, PRODUCTS } from '@/app/data/products';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { GLASS, GLASS_CHIP } from '@/app/lib/glass';

const HeartIcon = ({ filled = false }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default function ProductDetailPage({ params }) {
  const product = getProductBySlug(params.slug);
  const router = useRouter();
  const { addItem } = useCart();
  const { isWished, toggleWish } = useWishlist();

  const [size, setSize] = useState(product?.sizes?.[0] ?? null);
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  if (!product) return notFound();

  const wished = isWished(product.id);
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!size) return;
    addItem(product, size, qty);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  const handleBuyNow = () => {
    if (!size) return;
    addItem(product, size, qty);
    router.push('/checkout');
  };

  return (
    <main>
      <AnimeBackground preset="forgeDark" backgroundColor="#000000" />

      <section className="mx-auto max-w-6xl px-1 py-6 sm:px-2">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Image */}
          <div className={`relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] ${GLASS}`}>
            <div className="pointer-events-none absolute inset-0 z-20 rounded-[1.75rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.05)]" />
            <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />

            <button
              type="button"
              aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
              aria-pressed={wished}
              onClick={() => toggleWish(product.id)}
              className={`absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110 active:scale-95 ${GLASS_CHIP}`}
            >
              <HeartIcon filled={wished} />
            </button>
          </div>

          {/* Details */}
          <div className="flex flex-col font-nb17-sans text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              {product.category.replace(/-/g, " ")}
            </span>
            <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide sm:text-3xl">
              {product.title}
            </h1>
            <p className="mt-2 text-lg font-medium text-white/90">Rs-{product.price.toLocaleString("en-IN")}</p>

            <p className="mt-5 text-sm leading-relaxed text-white/70">{product.description}</p>

            {/* Size selector */}
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Size</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={`flex h-11 w-11 items-center justify-center rounded-full border text-xs font-semibold uppercase transition-colors ${
                      size === s
                        ? "border-white bg-white text-black"
                        : "border-white/25 bg-[color-mix(in_oklab,white_8%,transparent)] text-white/80 hover:border-white/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Quantity</span>
              <div className={`mt-3 inline-flex items-center gap-4 rounded-full px-4 py-2 ${GLASS_CHIP}`}>
                <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="text-lg text-white/80 hover:text-white">−</button>
                <span className="w-4 text-center text-sm">{qty}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => q + 1)} className="text-lg text-white/80 hover:text-white">+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 rounded-full border border-white/40 bg-[color-mix(in_oklab,white_18%,transparent)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_16px_34px_-18px_rgba(0,0,0,0.6)] backdrop-blur-[16px] transition-transform hover:scale-[1.02] active:scale-95"
              >
                {justAdded ? "Added ✓" : "Add to Cart"}
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="flex-1 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] active:scale-95"
              >
                Buy Now
              </button>
            </div>
            {!size && <p className="mt-2 text-[11px] text-white/50">Select a size to continue.</p>}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {related.map((p) => (
                <a key={p.id} href={`/product/${p.slug}`} className={`group relative flex flex-col overflow-hidden rounded-[1.5rem] p-2 ${GLASS}`}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.1rem] bg-black/30">
                    <Image src={p.image} alt={p.title} fill sizes="25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="px-1.5 pb-1 pt-3">
                    <p className="text-xs font-semibold text-white">{p.title}</p>
                    <p className="text-[10px] text-white/60">Rs-{p.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
