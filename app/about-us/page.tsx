'use client';

import AnimeBackground from '../components/anime';

const GLASS =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

export default function AboutUsPage() {
  return (
    <main>
      <AnimeBackground preset="sciFiDusk" backgroundColor="#000000" />

      <section className="mx-auto max-w-3xl px-1 py-8 sm:px-2">
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
            Our Story
          </span>
          <h1 className="mt-2 text-2xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            About Us
          </h1>
        </div>

        <div className={`rounded-[2rem] p-6 font-nb17-sans text-sm leading-relaxed text-white/80 sm:p-10 sm:text-base ${GLASS}`}>
          <p>
            ANIM3FITS was built for people who wear their fandom without turning it into a costume —
            premium streetwear that happens to carry the world's favorite anime energy in every stitch.
          </p>
          <p className="mt-4">
            Every drop starts with the art, then gets filtered through the same design language you
            see across this site: dark, glassy, a little bit sci-fi, always intentional.
          </p>
          <p className="mt-4">
            We're a small team obsessing over fit, fabric, and print quality so you don't have to
            settle for either the anime or the streetwear — you get both, done right.
          </p>
        </div>
      </section>
    </main>
  );
}
