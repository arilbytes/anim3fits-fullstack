'use client';

import AnimeBackground from '../components/anime';

const GLASS =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

const SECTIONS = [
  {
    heading: "1. Information We Collect",
    body: "We collect information you provide directly — name, email, shipping address, and payment details — along with basic usage data to improve the site.",
  },
  {
    heading: "2. How We Use Your Data",
    body: "Your information is used to process orders, provide customer support, and — where you've opted in — send updates about new drops and offers.",
  },
  {
    heading: "3. Data Sharing",
    body: "We never sell your data. It's shared only with trusted service providers (payment processors, shipping partners) strictly to fulfill your order.",
  },
  {
    heading: "4. Cookies",
    body: "We use cookies to keep your cart working and to understand how the site is used, so we can keep improving it.",
  },
  {
    heading: "5. Your Rights",
    body: "You can request access to, correction of, or deletion of your personal data at any time by contacting us.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main>
      <AnimeBackground preset="abyssalGlow" backgroundColor="#000000" />

      <section className="mx-auto max-w-3xl px-1 py-8 sm:px-2">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Legal
          </span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Privacy Policy
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
