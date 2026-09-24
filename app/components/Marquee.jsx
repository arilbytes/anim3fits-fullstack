const GLASS_CHIP =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[16px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_22px_-14px_rgba(0,0,0,0.6)]";

/**
 * @param {{ influencers?: Array<{ name: string, handle?: string, avatar?: string }> }} props
 */
export default function Marquee({ influencers = DEFAULT_INFLUENCERS }) {
  // Duplicate the list so the track can shift by exactly -50% and loop
  // seamlessly with no visible jump.
  const track = [...influencers, ...influencers];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-nb17-marquee gap-4 motion-reduce:animate-none">
        {track.map((person, i) => (
          <div
            key={`${person.name}-${i}`}
            className={`flex shrink-0 items-center gap-3 rounded-full px-4 py-2.5 font-nb17-sans ${GLASS_CHIP}`}
          >
            <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white/20">
              {person.avatar && (
                <img src={person.avatar} alt="" className="h-full w-full object-cover" />
              )}
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold text-white">{person.name}</span>
              {person.handle && (
                <span className="text-[10px] tracking-wide text-white/60">{person.handle}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Placeholder data — swap in the real influencer list/assets when ready.
const DEFAULT_INFLUENCERS = [
  { name: "Aarav Mehta", handle: "@aarav.wears", avatar: "/influencers/1.png" },
  { name: "Naina Kapoor", handle: "@naina.k", avatar: "/influencers/2.png" },
  { name: "Rohan Das", handle: "@rohandas", avatar: "/influencers/3.png" },
  { name: "Isha Verma", handle: "@isha.fits", avatar: "/influencers/4.png" },
  { name: "Kabir Sethi", handle: "@kabirsethi", avatar: "/influencers/5.png" },
  { name: "Meera Nair", handle: "@meeranair", avatar: "/influencers/6.png" },
];
