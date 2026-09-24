'use client';

import AnimeBackground from '../components/anime';
import ProductCard from '../components/ProductCard';
import { TAKEOVER_COLLECTION } from '../data/products';

const GLASS =
  "border border-white/30 bg-[color-mix(in_oklab,white_12%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_24px_50px_-26px_rgba(0,0,0,0.6)]";

export default function TakeoverCollectionPage() {
  return (
    <main>
      <AnimeBackground preset="vaporwaveAnime" backgroundColor="#000000" />

      <section className="mx-auto max-w-7xl px-1 py-8 sm:px-2">
        <div className={`relative flex min-h-[260px] flex-col items-start justify-end overflow-hidden rounded-[2.25rem] p-6 font-nb17-sans sm:min-h-[360px] sm:p-10 ${GLASS}`}>
          <img
            src="/takeover/hero.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-60"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              New Drop
            </span>
            <h1 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white sm:text-5xl">
              Takeover Collection
            </h1>
            <p className="mt-3 text-sm text-white/75 sm:text-base">
              Limited pieces, made for the fits that go all in.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {TAKEOVER_COLLECTION.map((p) => (
            <ProductCard key={p.id} id={p.id} slug={p.slug} image={p.image} title={p.title} price={p.price} />
          ))}
        </div>
      </section>
    </main>
  );
}
