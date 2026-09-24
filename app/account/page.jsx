'use client';

import { GLASS } from '@/app/lib/glass';

export default function AccountOverviewPage() {
  return (
    <div className={`rounded-[1.75rem] p-6 font-nb17-sans text-white sm:p-8 ${GLASS}`}>
      <h1 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">My Account</h1>
      <p className="mt-2 text-sm text-white/60">
        Welcome back. This is a placeholder dashboard — once auth is wired up, greet the user by
        name here and surface their most recent order.
      </p>
    </div>
  );
}
