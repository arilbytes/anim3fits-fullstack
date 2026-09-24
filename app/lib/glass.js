// Shared glass-surface class recipes, pulled out so every component reuses
// the exact same aesthetic instead of re-declaring these strings.
// (Existing components like ProductCard/Navbar still keep their own local
// copies — safe to migrate them to import from here later.)

export const GLASS =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

export const GLASS_STRONG =
  "border border-white/40 bg-[color-mix(in_oklab,white_16%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

export const GLASS_CHIP =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[16px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_22px_-14px_rgba(0,0,0,0.6)]";

export const GLASS_INPUT =
  "w-full rounded-2xl border border-white/20 bg-[color-mix(in_oklab,white_8%,transparent)] " +
  "px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none " +
  "backdrop-blur-[16px] transition-colors focus:border-white/50";
