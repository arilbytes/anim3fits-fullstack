"use client";

import { useRef } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6l6 6-6 6" />
  </svg>
);

/**
 * @param {object} props
 * @param {string} props.title
 * @param {Array<{id: string, slug: string, image: string, title: string, price: string|number}>} props.products
 * @param {string} props.seeAllHref
 */
export default function ProductRow({ title, products, seeAllHref }) {
  const scrollerRef = useRef(null);

  const scrollByAmount = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-1 py-8 sm:px-2">
      <SectionHeading seeAllHref={seeAllHref}>{title}</SectionHeading>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-5 [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p) => (
            <div key={p.id} className="w-[46%] shrink-0 sm:w-[38%] md:w-[23.5%]">
              <ProductCard id={p.id} slug={p.slug} image={p.image} title={p.title} price={p.price} />
            </div>
          ))}
        </div>

        {/* Desktop-only glass arrow, right-middle of the row */}
        <button
          type="button"
          aria-label={`Scroll ${title} right`}
          onClick={() => scrollByAmount(1)}
          className="absolute right-[-16px] top-[38%] hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-[color-mix(in_oklab,white_16%,transparent)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_16px_34px_-18px_rgba(0,0,0,0.6)] backdrop-blur-[22px] backdrop-saturate-[1.8] transition-transform hover:scale-105 active:scale-95 md:flex"
        >
          <ArrowIcon />
        </button>
      </div>

      <Link
        href={seeAllHref}
        className="mt-4 hidden text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white md:inline-block"
      >
        See All →
      </Link>
    </section>
  );
}
