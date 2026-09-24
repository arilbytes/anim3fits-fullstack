'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GLASS } from '@/app/lib/glass';

const LINKS = [
  { href: "/account", label: "Overview" },
  { href: "/account/orders", label: "Orders" },
  { href: "/account/wishlist", label: "Wishlist" },
  { href: "/account/addresses", label: "Addresses" },
];

export default function AccountNav() {
  const pathname = usePathname();

  return (
    <nav className={`h-fit rounded-[1.75rem] p-3 font-nb17-sans ${GLASS}`}>
      <ul className="flex flex-col gap-1">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block rounded-2xl px-4 py-3 text-xs font-semibold uppercase tracking-wide transition-colors ${
                  active ? "bg-white text-black" : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
