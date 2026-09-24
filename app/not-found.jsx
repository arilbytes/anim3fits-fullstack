'use client';

import Link from 'next/link';
import AnimeBackground from './components/anime';
import { GLASS } from './lib/glass';

export default function NotFound() {
  return (
    <main>
      <AnimeBackground preset="darkFantasy" backgroundColor="#000000" />

      <section className="mx-auto flex max-w-lg flex-col items-center px-1 py-20 text-center sm:px-2">
        <div className={`w-full rounded-[2rem] p-10 font-nb17-sans text-white ${GLASS}`}>
          <p className="text-6xl font-bold text-white/20">404</p>
          <h1 className="mt-4 text-xl font-bold uppercase tracking-wide">Page Not Found</h1>
          <p className="mt-2 text-sm text-white/60">The page you're looking for doesn't exist or has moved.</p>
          <Link href="/" className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
