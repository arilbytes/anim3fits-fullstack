'use client';

import { GLASS } from '@/app/lib/glass';

export default function AddressesPage() {
  const addresses = [];

  return (
    <div className={`rounded-[1.75rem] p-6 font-nb17-sans text-white sm:p-8 ${GLASS}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold uppercase tracking-wide sm:text-xl">Addresses</h1>
        <button type="button" className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/85 hover:text-white">
          Add New
        </button>
      </div>

      {addresses.length === 0 ? (
        <p className="mt-6 text-sm text-white/60">No saved addresses yet.</p>
      ) : (
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {addresses.map((a) => (
            <div key={a.id} className="rounded-2xl border border-white/15 px-4 py-3 text-sm text-white/80">
              {a.line1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
