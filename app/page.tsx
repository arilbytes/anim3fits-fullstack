'use client';

import AnimeBackground from './components/anime';
import ProductRow from './components/ProductRow';
import SectionHeading from './components/SectionHeading';
import CategoryGrid from './components/CategoryCard';
import Marquee from './components/Marquee';
import TakeoverHero from './components/TakeoverHero';
import { LATEST_ARRIVALS, BEST_SELLERS } from './data/products';

export default function Page() {
  return (
    <main>
      <AnimeBackground preset="moonMars" backgroundColor="#000000" />

      <ProductRow
        title="Latest Arrivals"
        products={LATEST_ARRIVALS.slice(0, 4)}
        seeAllHref="/latest-arrivals"
      />

      <ProductRow
        title="Best Sellers"
        products={BEST_SELLERS.slice(0, 4)}
        seeAllHref="/best-sellers"
      />

      <section className="mx-auto max-w-7xl px-1 py-8 sm:px-2">
        <SectionHeading>Shop By Category</SectionHeading>
        <CategoryGrid />
      </section>

      <section className="mx-auto max-w-7xl px-1 py-8 sm:px-2">
        <SectionHeading align="center">As Seen On</SectionHeading>
        <Marquee />
      </section>

      <TakeoverHero />
    </main>
  );
}
