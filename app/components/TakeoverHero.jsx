import Link from "next/link";

const GLASS =
  "border border-white/30 bg-[color-mix(in_oklab,white_12%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_24px_50px_-26px_rgba(0,0,0,0.6)]";

export default function TakeoverHero() {
  return (
    <section className="mx-auto max-w-7xl px-1 py-10 sm:px-2">
      <div className={`relative flex min-h-[320px] flex-col items-start justify-end overflow-hidden rounded-[2.25rem] p-6 font-nb17-sans sm:min-h-[420px] sm:p-10 ${GLASS}`}>
        <img
          src="/takeover/hero.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="relative z-10 max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
            New Drop
          </span>
          <h2 className="mt-3 text-3xl font-bold uppercase tracking-wide text-white sm:text-5xl">
            Takeover Collection
          </h2>
          <p className="mt-3 text-sm text-white/75 sm:text-base">
            The latest anime takeover — limited pieces, made for the fits that go all in.
          </p>

          <Link
            href="/takeover-collection"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-[color-mix(in_oklab,white_18%,transparent)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_16px_34px_-18px_rgba(0,0,0,0.6)] backdrop-blur-[16px] backdrop-saturate-[1.8] transition-transform hover:scale-[1.03] active:scale-95"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
