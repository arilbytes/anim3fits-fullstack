'use client';

import { useState } from 'react';
import AnimeBackground from '../components/anime';
import { GLASS, GLASS_INPUT } from '../lib/glass';

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only stub — wire this up to an email/API endpoint later
    setSent(true);
  };

  return (
    <main>
      <AnimeBackground preset="darkBotanical" backgroundColor="#000000" />

      <section className="mx-auto max-w-2xl px-1 py-8 sm:px-2">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Get In Touch</span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">Contact Us</h1>
        </div>

        <div className={`rounded-[2rem] p-6 font-nb17-sans text-white sm:p-10 ${GLASS}`}>
          {sent ? (
            <p className="text-sm text-white/80">Thanks — we've got your message and will reply soon.</p>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <input className={GLASS_INPUT} type="text" name="name" placeholder="Your name" required value={form.name} onChange={onChange} />
              <input className={GLASS_INPUT} type="email" name="email" placeholder="Your email" required value={form.email} onChange={onChange} />
              <textarea className={`${GLASS_INPUT} min-h-32 resize-none`} name="message" placeholder="How can we help?" required value={form.message} onChange={onChange} />
              <button type="submit" className="mt-2 self-start rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] active:scale-95">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
