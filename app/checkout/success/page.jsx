'use client';

import Link from 'next/link';
import AnimeBackground from '@/app/components/anime';
import { GLASS } from '@/app/lib/glass';

export default function CheckoutSuccessPage() {
  const orderId = `AN3-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <main>
      <AnimeBackground preset="gojoInfinity" backgroundColor="#000000" />

      <section className="mx-auto flex max-w-xl flex-col items-center px-1 py-16 text-center sm:px-2">
        <div className={`w-full rounded-[2rem] p-8 font-nb17-sans text-white sm:p-12 ${GLASS}`}>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-black">
            ✓
          </div>
          <h1 className="mt-6 text-xl font-bold uppercase tracking-wide sm:text-2xl">Order Placed</h1>
          <p className="mt-3 text-sm text-white/70">
            Thanks for shopping with us — a confirmation has been sent to your email.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/50">
            Order ID: <span className="text-white">{orderId}</span>
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/account/orders" className="rounded-full border border-white/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/85 hover:text-white">
              View Orders
            </Link>
            <Link href="/" className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
