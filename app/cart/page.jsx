'use client';

import Link from 'next/link';
import Image from 'next/image';
import AnimeBackground from '@/app/components/anime';
import { useCart } from '@/app/context/CartContext';
import { GLASS, GLASS_CHIP } from '@/app/lib/glass';

export default function CartPage() {
  const { lines, updateQty, removeItem, subtotal, hydrated } = useCart();

  const shipping = subtotal > 1999 || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;

  if (!hydrated) return null; // avoid a flash of "empty cart" before localStorage loads

  return (
    <main>
      <AnimeBackground preset="rainNeon" backgroundColor="#000000" />

      <section className="mx-auto max-w-5xl px-1 py-8 sm:px-2">
        <h1 className="mb-8 text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">Your Cart</h1>

        {lines.length === 0 ? (
          <div className={`flex flex-col items-center gap-4 rounded-[2rem] px-6 py-16 text-center font-nb17-sans ${GLASS}`}>
            <p className="text-sm text-white/70">Your cart is empty.</p>
            <Link href="/latest-arrivals" className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-[1fr_320px]">
            {/* Line items */}
            <div className="flex flex-col gap-4">
              {lines.map((l) => (
                <div key={`${l.id}-${l.size}`} className={`flex gap-4 rounded-[1.5rem] p-3 font-nb17-sans ${GLASS}`}>
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-[1rem] bg-black/30">
                    <Image src={l.image} alt={l.title} fill sizes="80px" className="object-cover" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-white">{l.title}</p>
                        <p className="text-[11px] uppercase tracking-wide text-white/50">Size {l.size}</p>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${l.title}`}
                        onClick={() => removeItem(l.id, l.size)}
                        className="text-xs text-white/50 transition-colors hover:text-white"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className={`inline-flex items-center gap-3 rounded-full px-3 py-1.5 ${GLASS_CHIP}`}>
                        <button type="button" aria-label="Decrease quantity" onClick={() => updateQty(l.id, l.size, l.qty - 1)} className="text-white/80 hover:text-white">−</button>
                        <span className="w-4 text-center text-xs text-white">{l.qty}</span>
                        <button type="button" aria-label="Increase quantity" onClick={() => updateQty(l.id, l.size, l.qty + 1)} className="text-white/80 hover:text-white">+</button>
                      </div>
                      <p className="text-sm font-medium text-white">Rs-{(l.price * l.qty).toLocaleString("en-IN")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className={`h-fit rounded-[1.75rem] p-6 font-nb17-sans text-white ${GLASS}`}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Order Summary</h2>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span>Rs-{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `Rs-${shipping}`}</span>
                </div>
                <div className="mt-2 flex justify-between border-t border-white/15 pt-3 text-base font-semibold">
                  <span>Total</span>
                  <span>Rs-{total.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block rounded-full bg-white px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] active:scale-95"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
