'use client';

import AnimeBackground from '../components/anime';
import { GLASS } from '../lib/glass';

const ROWS = [
  { size: "S", chest: "36", length: "27", shoulder: "17" },
  { size: "M", chest: "38", length: "28", shoulder: "18" },
  { size: "L", chest: "40", length: "29", shoulder: "19" },
  { size: "XL", chest: "42", length: "30", shoulder: "20" },
  { size: "XXL", chest: "44", length: "31", shoulder: "21" },
];

export default function SizeGuidePage() {
  return (
    <main>
      <AnimeBackground preset="velvetEmber" backgroundColor="#000000" />

      <section className="mx-auto max-w-3xl px-1 py-8 sm:px-2">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Fit Guide</span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">Size Guide</h1>
          <p className="mt-3 text-sm text-white/70">All measurements in inches, laid flat.</p>
        </div>

        <div className={`overflow-x-auto rounded-[2rem] p-6 font-nb17-sans sm:p-8 ${GLASS}`}>
          <table className="w-full min-w-[420px] text-left text-sm text-white/80">
            <thead>
              <tr className="border-b border-white/15 text-xs uppercase tracking-wide text-white/50">
                <th className="pb-3 pr-4">Size</th>
                <th className="pb-3 pr-4">Chest</th>
                <th className="pb-3 pr-4">Length</th>
                <th className="pb-3">Shoulder</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.size} className="border-b border-white/5 last:border-b-0">
                  <td className="py-3 pr-4 font-semibold text-white">{r.size}</td>
                  <td className="py-3 pr-4">{r.chest}"</td>
                  <td className="py-3 pr-4">{r.length}"</td>
                  <td className="py-3">{r.shoulder}"</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
