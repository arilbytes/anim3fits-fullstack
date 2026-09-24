'use client';

import Link from 'next/link';
import { GLASS } from '@/app/lib/glass';

export default function OrdersPage() {
  // No backend yet — replace this with real order history once the API exists.
  const orders = [];

  return (
    <div className={`rounded-[1.75rem] p-6 font-nb17-sans text-white sm:p-8 ${GLASS}`}>
      <h1 className="text-lg font-bold uppercase tracking-wide sm:text-xl">Orders</h1>

      {orders.length === 0 ? (
        <div className="mt-6 flex flex-col items-start gap-3">
          <p className="text-sm text-white/60">You haven't placed any orders yet.</p>
          <Link href="/latest-arrivals" className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-3">
          {orders.map((o) => (
            <div key={o.id} className="rounded-2xl border border-white/15 px-4 py-3 text-sm text-white/80">
              {o.id}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
