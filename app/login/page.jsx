'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AnimeBackground from '@/app/components/anime';
import { GLASS_STRONG, GLASS_INPUT } from '@/app/lib/glass';

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    // Frontend-only stub — wire this up to real auth (NextAuth, your API, etc.)
    router.push('/account');
  };

  return (
    <main>
      <AnimeBackground preset="plumEclipse" backgroundColor="#000000" />

      <section className="mx-auto flex max-w-md flex-col px-1 py-10 sm:px-2">
        <div className={`rounded-[2rem] p-8 font-nb17-sans text-white sm:p-10 ${GLASS_STRONG}`}>
          <h1 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">Welcome Back</h1>
          <p className="mt-2 text-sm text-white/60">Log in to track orders and manage your account.</p>

          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
            <input className={GLASS_INPUT} type="email" name="email" placeholder="Email" required value={form.email} onChange={onChange} />
            <input className={GLASS_INPUT} type="password" name="password" placeholder="Password" required value={form.password} onChange={onChange} />

            <div className="flex justify-end">
              <Link href="/forgot-password" className="text-xs text-white/50 hover:text-white">Forgot password?</Link>
            </div>

            <button type="submit" className="mt-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] active:scale-95">
              Log In
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-white/60">
            New here?{" "}
            <Link href="/signup" className="font-semibold text-white hover:underline">Create an account</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
