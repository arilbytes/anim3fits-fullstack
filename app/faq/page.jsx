'use client';

import { useState } from 'react';
import AnimeBackground from '../components/anime';
import { GLASS } from '../lib/glass';

const FAQS = [
  { q: "What sizes do you carry?", a: "S through XXL across most products. Check the Size Guide for exact measurements before ordering." },
  { q: "How long does delivery take?", a: "4–7 business days for standard delivery, faster in most metro cities. Full details on the Shipping Policy page." },
  { q: "Can I return or exchange an item?", a: "Yes — items can be returned within 7 days of delivery if unworn with tags intact. See the Refund Policy page." },
  { q: "Do you ship internationally?", a: "Not yet — we currently ship within India only. International shipping is on the roadmap." },
  { q: "How do I track my order?", a: "Once your order ships, you'll get a tracking link by email, also visible under Account → Orders." },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      className="w-full border-b border-white/10 py-4 text-left last:border-b-0"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-semibold text-white">{q}</span>
        <span className="text-white/50">{open ? "−" : "+"}</span>
      </div>
      {open && <p className="mt-2 text-sm leading-relaxed text-white/65">{a}</p>}
    </button>
  );
}

export default function FaqPage() {
  return (
    <main>
      <AnimeBackground preset="mossOnyx" backgroundColor="#000000" />

      <section className="mx-auto max-w-2xl px-1 py-8 sm:px-2">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Help</span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">FAQ</h1>
        </div>

        <div className={`rounded-[2rem] px-6 py-2 font-nb17-sans sm:px-10 ${GLASS}`}>
          {FAQS.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </section>
    </main>
  );
}
