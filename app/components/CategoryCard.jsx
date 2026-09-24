import Link from "next/link";
import { CATEGORIES } from "@/app/data/products";

const GLASS =
  "border border-white/15 bg-[color-mix(in_oklab,white_9%,transparent)] " +
  "backdrop-blur-[20px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_16px_34px_-20px_rgba(0,0,0,0.55)]";

/**
 * @param {{ name: string, href: string, image?: string }} props
 */
function CategoryCard({ name, slug, image }) {
  return (
    <Link
      href={`/category/${slug}`}
      className={`group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-[1.5rem] p-4 font-nb17-sans transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.5,1)] hover:-translate-y-1 sm:aspect-square ${GLASS}`}
    >
      {image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-sm">
        {name}
      </span>
    </Link>
  );
}

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5">
      {CATEGORIES.map((cat, i) => (
        <div key={cat.slug} className={i === CATEGORIES.length - 1 ? "col-span-2 sm:col-span-1" : ""}>
          <CategoryCard {...cat} />
        </div>
      ))}
    </div>
  );
}
