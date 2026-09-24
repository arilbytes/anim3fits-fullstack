'use client';

import AnimeBackground from '../components/anime';

const GLASS =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

const SECTIONS = [
  {
    heading: "1. Acceptance of Terms",
    body: "By accessing or placing an order on ANIM3FITS, you agree to be bound by these Terms & Conditions. Please read them carefully before using the site.",
  },
  {
    heading: "2. Products & Pricing",
    body: "All prices are listed in INR and are subject to change without notice. We reserve the right to limit quantities and refuse any order at our discretion.",
  },
  {
    heading: "3. Orders & Payment",
    body: "Orders are confirmed once payment is successfully processed. You are responsible for providing accurate shipping and contact information at checkout.",
  },
  {
    heading: "4. Intellectual Property",
    body: "All designs, artwork, and branding on this site are the property of ANIM3FITS and may not be reproduced without written permission.",
  },
  {
    heading: "5. Limitation of Liability",
    body: "ANIM3FITS is not liable for any indirect or consequential loss arising from the use of this site or our products.",
  },
];

export default function TermsPage() {
  return (
    <main>
      <AnimeBackground preset="samuraiInk" backgroundColor="#000000" />

      <section className="mx-auto max-w-3xl px-1 py-8 sm:px-2">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Legal
          </span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Terms &amp; Conditions
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
