// "use client";

// import { useState } from "react";
// import Image from "next/image";

// // ─── Heart Icon ────────────────────────────────────────────────────────────
// const HeartIcon = ({ filled = false }) => (
//   <svg
//     width="16"
//     height="16"
//     viewBox="0 0 24 24"
//     fill={filled ? "currentColor" : "none"}
//     stroke="currentColor"
//     strokeWidth="2"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//   >
//     <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
//   </svg>
// );

// // Shared glass surface recipe (matches Navbar)
// const GLASS =
//   "border border-white/40 bg-[color-mix(in_oklab,white_14%,transparent)] " +
//   "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
//   "shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

// const GLASS_CHIP =
//   "border border-white/40 bg-[color-mix(in_oklab,white_14%,transparent)] " +
//   "backdrop-blur-[16px] backdrop-saturate-[1.8] " +
//   "shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_10px_22px_-14px_rgba(0,0,0,0.6)]";

// // ─── Product Card ──────────────────────────────────────────────────────────
// export default function ProductCard({
//   image,
//   title,
//   price,
//   wished = false,
//   onWishlist,
//   onOpen,
// }) {
//   const [isWished, setIsWished] = useState(wished);

//   const toggleWishlist = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     const next = !isWished;
//     setIsWished(next);
//     onWishlist?.(next);
//   };

//   return (
//     <article
//       onClick={onOpen}
//       className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-[2rem] p-3 font-nb17-sans ${GLASS} transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.5,1)] hover:-translate-y-1`}
//     >
//       {/* Image frame */}
//       <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] bg-black/30">
//         {/* Inner rim so the frame reads as glass too */}
//         <div className="pointer-events-none absolute inset-0 z-20 rounded-[1.5rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_0_0_1px_rgba(255,255,255,0.06)]" />

//         {image && (
//           <Image
//             src={image}
//             alt={title || "T-shirt"}
//             fill
//             sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
//             className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
//           />
//         )}

//         {/* Wishlist — glass chip, top right */}
//         <button
//           type="button"
//           aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
//           aria-pressed={isWished}
//           onClick={toggleWishlist}
//           className={`absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.5,1)] hover:scale-110 active:scale-95 ${GLASS_CHIP}`}
//         >
//           <HeartIcon filled={isWished} />
//         </button>

//         {/* Price — glass pill, bottom left */}
//         <div
//           className={`absolute bottom-3 left-3 z-30 rounded-full px-3 py-1 ${GLASS_CHIP}`}
//         >
//           <span className="text-xs font-medium tracking-wide text-white">
//             Rs-{price}
//           </span>
//         </div>
//       </div>

//       {/* Optional title under the frame */}
//       {title && (
//         <div className="px-2 pb-1 pt-3">
//           <p className="text-[11px] uppercase tracking-[0.16em] text-white/70">
//             {title}
//           </p>
//         </div>
//       )}
//     </article>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Heart Icon ────────────────────────────────────────────────────────────
const HeartIcon = ({ filled = false }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

// Shared glass surface recipe — updated to have a VERY thin border
const GLASS =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

const GLASS_CHIP =
  "border border-white/20 bg-[color-mix(in_oklab,white_10%,transparent)] " +
  "backdrop-blur-[16px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_10px_22px_-14px_rgba(0,0,0,0.6)]";

/**
 * @param {object} props
 * @param {string} props.image
 * @param {string} [props.title]
 * @param {string|number} props.price
 * @param {boolean} [props.wished]
 * @param {(next: boolean) => void} [props.onWishlist]
 * @param {() => void} [props.onOpen]
 */
export default function ProductCard({
  image,
  title,
  price,
  wished = false,
  onWishlist,
  onOpen,
}) {
  const [isWished, setIsWished] = useState(wished);

  /** @param {React.MouseEvent<HTMLButtonElement>} e */
  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const next = !isWished;
    setIsWished(next);
    onWishlist?.(next);
  };

  return (
    <article
      onClick={onOpen}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-[1.75rem] p-2.5 font-nb17-sans ${GLASS} transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.5,1)] hover:-translate-y-1`}
    >
      {/* Image frame */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-black/30">
        {/* Inner rim — made thinner */}
        <div className="pointer-events-none absolute inset-0 z-20 rounded-[1.25rem] shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_0_0_1px_rgba(255,255,255,0.05)]" />

        {image && (
          <Image
            src={image}
            alt={title || "T-shirt"}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        )}

        {/* Wishlist — glass chip, top right */}
        <button
          type="button"
          aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={isWished}
          onClick={toggleWishlist}
          className={`absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full text-white transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.5,1)] hover:scale-110 active:scale-95 ${GLASS_CHIP}`}
        >
          <HeartIcon filled={isWished} />
        </button>
      </div>

      {/* Title & Price (Now stacked below the image) */}
      <div className="flex flex-col gap-1 px-2 pb-2 pt-4">
        {title && (
          <h3 className="text-sm font-bold tracking-wide text-white">
            {title}
          </h3>
        )}
        <p className="text-[11px] font-light tracking-[0.16em] text-white/70">
          Rs-{price}
        </p>
      </div>
    </article>
  );
}