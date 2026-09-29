// const GLASS_CHIP =
//   "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
//   "backdrop-blur-[16px] backdrop-saturate-[1.8] " +
//   "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_22px_-14px_rgba(0,0,0,0.6)]";

// /**
//  * @param {{ influencers?: Array<{ name: string, handle?: string, avatar?: string }> }} props
//  */
// export default function Marquee({ influencers = DEFAULT_INFLUENCERS }) {
//   // Duplicate the list so the track can shift by exactly -50% and loop
//   // seamlessly with no visible jump.
//   const track = [...influencers, ...influencers];

//   return (
//     <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
//       <div className="flex w-max animate-nb17-marquee gap-4 motion-reduce:animate-none">
//         {track.map((person, i) => (
//           <div
//             key={`${person.name}-${i}`}
//             className={`flex shrink-0 items-center gap-3 rounded-full px-4 py-2.5 font-nb17-sans ${GLASS_CHIP}`}
//           >
//             <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white/20">
//               {person.avatar && (
//                 <img src={person.avatar} alt="" className="h-full w-full object-cover" />
//               )}
//             </div>
//             <div className="flex flex-col leading-tight">
//               <span className="text-xs font-semibold text-white">{person.name}</span>
//               {person.handle && (
//                 <span className="text-[10px] tracking-wide text-white/60">{person.handle}</span>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // Placeholder data — swap in the real influencer list/assets when ready.
// const DEFAULT_INFLUENCERS = [
//   { name: "Aarav Mehta", handle: "@aarav.wears", avatar: "/influencers/1.png" },
//   { name: "Naina Kapoor", handle: "@naina.k", avatar: "/influencers/2.png" },
//   { name: "Rohan Das", handle: "@rohandas", avatar: "/influencers/3.png" },
//   { name: "Isha Verma", handle: "@isha.fits", avatar: "/influencers/4.png" },
//   { name: "Kabir Sethi", handle: "@kabirsethi", avatar: "/influencers/5.png" },
//   { name: "Meera Nair", handle: "@meeranair", avatar: "/influencers/6.png" },
// ];
// app/components/Marquee.jsx
"use client";

const GLASS_CHIP =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[16px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_22px_-14px_rgba(0,0,0,0.6)]";

// Swap these for your real reel URLs / files in /public/reels/
const DEFAULT_REELS = [
  { src: "/reels/reel-1.mp4", label: "Drop 001" },
  { src: "/reels/reel-2.mp4", label: "Drop 002" },
  { src: "/reels/reel-3.mp4", label: "Drop 003" },
  { src: "/reels/reel-4.mp4", label: "Drop 004" },
  { src: "/reels/reel-5.mp4", label: "Drop 005" },
  { src: "/reels/reel-6.mp4", label: "Drop 006" },
];

/**
 * @param {{ reels?: Array<{ src: string, label?: string }> }} props
 */
export default function Marquee({ reels = DEFAULT_REELS }) {
  // Duplicate the list so the track shifts by exactly -50% for a seamless loop.
  const track = [...reels, ...reels];

  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-nb17-marquee gap-4 motion-reduce:animate-none hover:[animation-play-state:paused]">
        {track.map((reel, i) => (
          <div
            key={`${reel.src}-${i}`}
            className={`relative aspect-[9/16] w-[160px] shrink-0 overflow-hidden rounded-[1.5rem] font-nb17-sans sm:w-[200px] ${GLASS_CHIP}`}
          >
            {/* Inner glass rim — matches ProductCard/TakeoverHero treatment */}
            <div className="pointer-events-none absolute inset-0 z-20 rounded-[1.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

            <video
              src={reel.src}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />

            {reel.label && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-3 pb-3 pt-8">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                  {reel.label}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}