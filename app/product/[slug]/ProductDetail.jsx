'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import AnimeBackground from '@/app/components/anime';
import { useCart } from '@/app/context/CartContext';
import { useWishlist } from '@/app/context/WishlistContext';
import { GLASS, GLASS_CHIP } from '@/app/lib/glass';
import ProductCard from '@/app/components/ProductCard';

const HeartIcon = ({ filled = false }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const TABS = [
  { id: 'details', label: 'Details & Description' },
  { id: 'washcare', label: 'Washcare' },
  { id: 'shipping', label: 'Shipping' },
  { id: 'exchange', label: 'Exchange Policy' },
];

const TRUST_ITEMS = [
  '24/7 SUPPORT',
  'SECURE PAYMENTS',
  'FREE SHIPPING',
  'PREMIUM QUALITY',
];

const price = (n) => `Rs-${n.toLocaleString('en-IN')}`;

export default function ProductDetail({ product, related = [] }) {
  const router = useRouter();
  const { addItem } = useCart();
  const { isWished, toggleWish } = useWishlist();

  const [size, setSize] = useState(product.sizes?.[0] ?? null);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('details');
  const [justAdded, setJustAdded] = useState(false);

  const wished = isWished(product.id);
  const hasDiscount =
    product.originalPrice && product.originalPrice > product.price;

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

  const renderTabContent = () => {
    if (activeTab === 'details') {
      return (
        <div className="space-y-6 text-sm leading-relaxed text-white/70">
          <p>{product.description}</p>

          {product.details?.length > 0 && (
            <div>
              <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Product Details
              </h2>
              <ul className="space-y-2">
                {product.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span aria-hidden="true">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    if (activeTab === 'washcare') {
      return (
        <div className="text-sm leading-relaxed text-white/70">
          <p>Washcare content is not configured in the supplied project yet.</p>
        </div>
      );
    }

    if (activeTab === 'shipping') {
      return (
        <div className="text-sm leading-relaxed text-white/70">
          <p>
            Use the existing Shipping Policy for the store&apos;s current
            shipping information.
          </p>
          <Link
            href="/shipping-policy"
            className="mt-3 inline-block text-white underline underline-offset-4 hover:text-white/80"
          >
            View Shipping Policy
          </Link>
        </div>
      );
    }

    return (
      <div className="text-sm leading-relaxed text-white/70">
        <p>
          Exchange information is maintained through the existing Refund
          Policy.
        </p>
        <Link
          href="/refund-policy"
          className="mt-3 inline-block text-white underline underline-offset-4 hover:text-white/80"
        >
          View Refund Policy
        </Link>
      </div>
    );
  };

  return (
    <main>
      <AnimeBackground preset="forgeDark" backgroundColor="#000000" />

      <section className="mx-auto max-w-6xl px-1 py-6 sm:px-2">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div
            className={`relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] ${GLASS}`}
          >
            <div className="pointer-events-none absolute inset-0 z-20 rounded-[1.75rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

            {product.image ? (
              <Image
                src={product.image}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center p-8 text-center text-xs uppercase tracking-[0.2em] text-white/40">
                Product image unavailable
              </div>
            )}

            <button
              type="button"
              aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={wished}
              onClick={() => toggleWish(product.id)}
              className={`absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110 active:scale-95 ${GLASS_CHIP}`}
            >
              <HeartIcon filled={wished} />
            </button>
          </div>

          <div className="flex flex-col font-nb17-sans text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
              {product.category.replace(/-/g, ' ')}
            </span>

            <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide sm:text-3xl">
              {product.title}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3">
              <p className="text-lg font-semibold text-white">
                {price(product.price)}
              </p>

              {hasDiscount && (
                <>
                  <p className="text-sm text-white/40 line-through">
                    {price(product.originalPrice)}
                  </p>
                  {product.discount != null && (
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white/80">
                      {product.discount}% OFF
                    </span>
                  )}
                </>
              )}
            </div>

            {product.offers?.length > 0 && (
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Available Offers
                </span>
                <div className="mt-3 grid gap-2">
                  {product.offers.map((offer) => (
                    <div
                      key={offer.text}
                      className={`rounded-2xl px-4 py-3 ${GLASS_CHIP}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <p className="text-xs font-semibold text-white">
                          {offer.text}
                        </p>
                        {offer.prepaidOnly && (
                          <span className="text-[9px] uppercase tracking-[0.15em] text-white/50">
                            Prepaid only
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.sizes?.length > 0 && (
              <div className="mt-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                  Size
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={size === s}
                      onClick={() => setSize(s)}
                      className={`flex h-11 min-w-11 items-center justify-center rounded-full border px-3 text-xs font-semibold uppercase transition-colors ${
                        size === s
                          ? 'border-white bg-white text-black'
                          : 'border-white/25 bg-[color-mix(in_oklab,white_8%,transparent)] text-white/80 hover:border-white/50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Quantity
              </span>
              <div
                className={`mt-3 inline-flex items-center gap-4 rounded-full px-4 py-2 ${GLASS_CHIP}`}
              >
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="text-lg text-white/80 hover:text-white"
                >
                  −
                </button>
                <span className="w-4 text-center text-sm">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="text-lg text-white/80 hover:text-white"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                disabled={!size}
                className="flex-1 rounded-full border border-white/40 bg-[color-mix(in_oklab,white_18%,transparent)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_16px_34px_-18px_rgba(0,0,0,0.6)] backdrop-blur-[16px] transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                {justAdded ? 'Added ✓' : 'Add to Bag'}
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                disabled={!size}
                className="flex-1 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                Buy Now
              </button>
            </div>

            {!size && product.sizes?.length > 0 && (
              <p className="mt-2 text-[11px] text-white/50">
                Select a size to continue.
              </p>
            )}
          </div>
        </div>

        <section
          className={`mt-12 rounded-[1.75rem] p-5 font-nb17-sans text-white sm:p-7 ${GLASS}`}
        >
          <div className="flex gap-5 overflow-x-auto border-b border-white/10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-7">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 pb-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  activeTab === tab.id
                    ? 'border-b border-white text-white'
                    : 'text-white/45 hover:text-white/75'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="pt-6">{renderTabContent()}</div>
        </section>

        {product.referenceImages?.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Experimental Reference
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {product.referenceImages.map((src) => (
                <div
                  key={src}
                  className={`relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ${GLASS}`}
                >
                  <Image
                    src={src}
                    alt={`${product.title} reference`}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        <section
          className={`mt-8 grid grid-cols-2 gap-4 rounded-[1.75rem] p-5 font-nb17-sans sm:grid-cols-4 sm:p-6 ${GLASS}`}
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item}
              className="flex min-h-16 items-center justify-center border-white/10 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75 sm:border-r sm:last:border-r-0"
            >
              {item}
            </div>
          ))}
        </section>

        {related.length > 0 && (
          <section className="mt-12">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  Recommendations
                </span>
                <h2 className="mt-1 text-lg font-semibold uppercase tracking-wide text-white sm:text-xl">
                  People Also Buy
                </h2>
              </div>
              <Link
                href="/latest-arrivals"
                className="text-[11px] uppercase tracking-[0.15em] text-white/55 transition-colors hover:text-white"
              >
                See All
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  slug={p.slug}
                  image={p.image}
                  title={p.title}
                  price={p.price}
                />
              ))}
            </div>
          </section>
        )}
      </section>
    </main>
  );
}