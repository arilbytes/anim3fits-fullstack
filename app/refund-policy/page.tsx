'use client';

import AnimeBackground from '../components/anime';

const GLASS =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

const SECTIONS = [
  {
    heading: "1. Eligibility",
    body: "Items can be returned within 7 days of delivery, provided they are unworn, unwashed, and in original packaging with tags intact.",
  },
  {
    heading: "2. Non-Returnable Items",
    body: "Items marked final sale, or products damaged due to misuse, are not eligible for return or refund.",
  },
  {
    heading: "3. Refund Process",
    body: "Once your return is received and inspected, refunds are processed to your original payment method within 5–7 business days.",
  },
  {
    heading: "4. Exchanges",
    body: "Need a different size? Reach out to our support team and we'll help you sort an exchange wherever stock allows.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main>
      <AnimeBackground preset="mechaVoid" backgroundColor="#000000" />

      <section className="mx-auto max-w-3xl px-1 py-8 sm:px-2">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Legal
          </span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Refund Policy
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
