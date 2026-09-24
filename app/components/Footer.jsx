import Link from "next/link";

const LINK_GROUPS = [
  {
    heading: "Shop",
    links: [
      { label: "Latest Arrivals", href: "/latest-arrivals" },
      { label: "Best Sellers", href: "/best-sellers" },
      { label: "Takeover Collection", href: "/takeover-collection" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "FAQ", href: "/faq" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Shipping Policy", href: "/shipping-policy" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mx-auto mt-10 max-w-7xl px-4 pb-8 font-nb17-sans">
      <div className="rounded-[2rem] border border-white/25 bg-[color-mix(in_oklab,white_10%,transparent)] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_20px_44px_-24px_rgba(0,0,0,0.55)] backdrop-blur-[22px] backdrop-saturate-[1.8] sm:px-10 sm:py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <img
              src="/logo.png"
              alt=""
              className="h-9 w-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
            />
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              Premium anime streetwear, made for the ones who never dim it down.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:flex sm:gap-16">
            {LINK_GROUPS.map((group) => (
              <div key={group.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  {group.heading}
                </h3>
                <ul className="mt-3 flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs text-white/75 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-4 text-[11px] tracking-wide text-white/40">
          © {new Date().getFullYear()} ANIM3FITS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
