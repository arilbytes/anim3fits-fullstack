'use client';

import { useState } from 'react';
import Link from 'next/link';
import AnimeBackground from '@/app/components/anime';
import { GLASS_STRONG, GLASS_INPUT } from '@/app/lib/glass';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only stub — wire this up to a real password-reset email flow
    setSent(true);
  };

  return (
    <main>
      <AnimeBackground preset="plumEclipse" backgroundColor="#000000" />

      <section className="mx-auto flex max-w-md flex-col px-1 py-10 sm:px-2">
        <div className={`rounded-[2rem] p-8 font-nb17-sans text-white sm:p-10 ${GLASS_STRONG}`}>
          <h1 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">Reset Password</h1>

          {sent ? (
            <p className="mt-4 text-sm text-white/70">
              If an account exists for <span className="text-white">{email}</span>, a reset link is on its way.
            </p>
          ) : (
            <>
              <p className="mt-2 text-sm text-white/60">Enter your email and we'll send a reset link.</p>
              <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
                <input className={GLASS_INPUT} type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" className="mt-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] active:scale-95">
                  Send Reset Link
                </button>
              </form>
            </>
          )}

          <p className="mt-6 text-center text-xs text-white/60">
            <Link href="/login" className="font-semibold text-white hover:underline">Back to login</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
