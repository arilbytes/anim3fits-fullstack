// Placeholder product data. Swap this for your real data source (CMS/DB/API)
// whenever it's ready. `slug` powers /product/[slug] and `category` powers
// /category/[slug] — keep both in sync with real data later.

const SIZES = ["S", "M", "L", "XL", "XXL"];
const DESC =
  "Oversized fit, heavyweight 240 GSM cotton, screen-printed graphic that won't crack or fade. Made for everyday wear, built to survive the wash.";

export const PRODUCTS = [
  { id: "la-1", slug: "gojo-infinity", image: "/shirts/gojo.png", title: "Gojo Infinity", price: 1299, category: "regular-fit-tshirt", sizes: SIZES, description: DESC, tag: "Latest Arrivals" },
  { id: "la-2", slug: "sukuna-domain", image: "/shirts/sukuna.png", title: "Sukuna Domain", price: 1499, category: "oversized-fit-tshirt", sizes: SIZES, description: DESC, tag: "Latest Arrivals" },
  { id: "la-3", slug: "samurai-ink", image: "/shirts/samurai.png", title: "Samurai Ink", price: 1399, category: "regular-fit-tshirt", sizes: SIZES, description: DESC, tag: "Latest Arrivals" },
  { id: "la-4", slug: "vaporwave", image: "/shirts/vapor.png", title: "Vaporwave", price: 1299, category: "oversized-fit-tshirt", sizes: SIZES, description: DESC, tag: "Latest Arrivals" },
  { id: "la-5", slug: "zima-blue", image: "/shirts/zima.png", title: "Zima Blue", price: 1349, category: "hoodies", sizes: SIZES, description: DESC, tag: "Latest Arrivals" },
  { id: "la-6", slug: "moon-and-mars", image: "/shirts/moon-mars.png", title: "Moon & Mars", price: 1449, category: "hoodies", sizes: SIZES, description: DESC, tag: "Latest Arrivals" },
  { id: "la-7", slug: "forge-dark", image: "/shirts/forge.png", title: "Forge Dark", price: 1299, category: "sweatshirts", sizes: SIZES, description: DESC, tag: "Latest Arrivals" },
  { id: "la-8", slug: "abyssal-glow", image: "/shirts/abyss.png", title: "Abyssal Glow", price: 1399, category: "sweatshirts", sizes: SIZES, description: DESC, tag: "Latest Arrivals" },

  { id: "bs-1", slug: "shonen-noir", image: "/shirts/shonen-noir.png", title: "Shonen Noir", price: 1499, category: "regular-fit-tshirt", sizes: SIZES, description: DESC, tag: "Best Sellers" },
  { id: "bs-2", slug: "ghibli-dusk", image: "/shirts/ghibli-dusk.png", title: "Ghibli Dusk", price: 1349, category: "oversized-fit-tshirt", sizes: SIZES, description: DESC, tag: "Best Sellers" },
  { id: "bs-3", slug: "six-eyes", image: "/shirts/six-eyes.png", title: "Six Eyes", price: 1549, category: "hoodies", sizes: SIZES, description: DESC, tag: "Best Sellers" },
  { id: "bs-4", slug: "plum-eclipse", image: "/shirts/plum-eclipse.png", title: "Plum Eclipse", price: 1299, category: "sweatpants", sizes: SIZES, description: DESC, tag: "Best Sellers" },
  { id: "bs-5", slug: "mecha-void", image: "/shirts/mecha-void.png", title: "Mecha Void", price: 1449, category: "sweatshirts", sizes: SIZES, description: DESC, tag: "Best Sellers" },
  { id: "bs-6", slug: "dark-fantasy", image: "/shirts/dark-fantasy.png", title: "Dark Fantasy", price: 1399, category: "regular-fit-tshirt", sizes: SIZES, description: DESC, tag: "Best Sellers" },
  { id: "bs-7", slug: "canyon-dusk", image: "/shirts/canyon-dusk.png", title: "Canyon Dusk", price: 1349, category: "oversized-fit-tshirt", sizes: SIZES, description: DESC, tag: "Best Sellers" },
  { id: "bs-8", slug: "rain-neon", image: "/shirts/rain-neon.png", title: "Rain Neon", price: 1299, category: "hoodies", sizes: SIZES, description: DESC, tag: "Best Sellers" },

  { id: "tc-1", slug: "gojo-clouds", image: "/shirts/gojo-clouds.png", title: "Gojo Clouds", price: 1599, category: "oversized-fit-tshirt", sizes: SIZES, description: DESC, tag: "Takeover Collection" },
  { id: "tc-2", slug: "moss-onyx", image: "/shirts/mosss-onyx.png", title: "Moss Onyx", price: 1499, category: "sweatshirts", sizes: SIZES, description: DESC, tag: "Takeover Collection" },
  { id: "tc-3", slug: "velvet-ember", image: "/shirts/velvet-ember.png", title: "Velvet Ember", price: 1549, category: "hoodies", sizes: SIZES, description: DESC, tag: "Takeover Collection" },
  { id: "tc-4", slug: "dark-botanical", image: "/shirts/botanical.png", title: "Dark Botanical", price: 1449, category: "sweatpants", sizes: SIZES, description: DESC, tag: "Takeover Collection" },
];

export const CATEGORIES = [
  { name: "Regular Fit T-Shirt", slug: "regular-fit-tshirt", image: "/categories/regular-fit.png" },
  { name: "Oversized Fit T-Shirt", slug: "oversized-fit-tshirt", image: "/categories/oversized-fit.png" },
  { name: "Hoodies", slug: "hoodies", image: "/categories/hoodies.png" },
  { name: "Sweatshirts", slug: "sweatshirts", image: "/categories/sweatshirts.png" },
  { name: "Sweatpants", slug: "sweatpants", image: "/categories/sweatpants.png" },
];

export const LATEST_ARRIVALS = PRODUCTS.filter((p) => p.tag === "Latest Arrivals");
export const BEST_SELLERS = PRODUCTS.filter((p) => p.tag === "Best Sellers");
export const TAKEOVER_COLLECTION = PRODUCTS.filter((p) => p.tag === "Takeover Collection");

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug) {
  return PRODUCTS.filter((p) => p.category === slug);
}

export function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}
