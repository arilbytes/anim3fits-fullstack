import Link from "next/link";

/**
 * Small, sleek section heading used across all homepage sections.
 * Keeps the same uppercase / wide-tracking type treatment already
 * used for ProductCard titles, just scaled up slightly.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {"left"|"center"} [props.align]
 * @param {string} [props.seeAllHref] - optional "See All" link, right-aligned
 */
export default function SectionHeading({ children, align = "left", seeAllHref }) {
  return (
    <div
      className={`mb-4 flex items-center font-nb17-sans ${
        align === "center" ? "justify-center text-center" : "justify-between"
      }`}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-base">
        {children}
      </h2>
      {seeAllHref && (
        <Link
          href={seeAllHref}
          className="text-xs uppercase tracking-widest text-white/60 transition-colors hover:text-white md:hidden"
        >
          See All →
        </Link>
      )}
    </div>
  );
}
