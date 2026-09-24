'use client';

import AnimeBackground from '../components/anime';

const GLASS =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

const SECTIONS = [
  {
    heading: "1. Processing Time",
    body: "Orders are processed within 1–2 business days. You'll receive a confirmation email with tracking details once your order ships.",
  },
  {
    heading: "2. Delivery Timelines",
    body: "Standard delivery typically takes 4–7 business days depending on your location. Metro cities may see faster delivery.",
  },
  {
    heading: "3. Shipping Charges",
    body: "Shipping is free on orders above a set threshold; a flat shipping fee applies below that, shown at checkout.",
  },
  {
    heading: "4. Delays",
    body: "While we aim to meet stated timelines, delays can occur due to courier or weather-related disruptions outside our control.",
  },
];

export default function ShippingPolicyPage() {
  return (
    <main>
      <AnimeBackground preset="gojoInfinity" backgroundColor="#000000" />

      <section className="mx-auto max-w-3xl px-1 py-8 sm:px-2">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Legal
          </span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Shipping Policy
          </h1>
        </div>

        <div className={`rounded-[2rem] p-6 font-nb17-sans text-sm leading-relaxed text-white/80 sm:p-10 sm:text-base ${GLASS}`}>
          {SECTIONS.map((s) => (
            <div key={s.heading} className="mb-6 last:mb-0">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-white">
                {s.heading}
              </h2>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
