"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";

// ─── Icons ────────────────────────────────────────────────────

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BagIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

// ─── Shared recipe for the drawer ─────────────────────────────

const GLASS_DRAWER =
  "border border-white/30 bg-[color-mix(in_oklab,white_14%,transparent)] " +
  "backdrop-blur-[22px] backdrop-saturate-[1.8] " +
  "shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_20px_44px_-24px_rgba(0,0,0,0.55)]";

// Matches CATEGORIES in app/data/products.js
const CATEGORY_LINKS = [
  { label: "Regular T-Shirts",   href: "/category/regular-fit-tshirt" },
  { label: "Oversized T-Shirts", href: "/category/oversized-fit-tshirt" },
  { label: "Hoodies",            href: "/category/hoodies" },
  { label: "Sweatshirts",        href: "/category/sweatshirts" },
  { label: "Sweatpants",         href: "/category/sweatpants" },
];

// ─── Liquid glass button (with optional badge) ────────────────

const LiquidButton = ({ icon, ariaLabel, onClick, badge }) => {
  const showBadge = typeof badge === "number";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full transition-transform active:scale-95"
    >
      {/* Rising liquid bubble (clipped to the button circle) */}
      <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 translate-y-full rounded-full bg-gradient-to-t from-white/60 to-white/10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.5,1)] group-hover:translate-y-0 group-active:animate-nb17-pop" />
      </span>

      <span className="relative z-10 text-gray-800 transition-transform duration-300 group-hover:-translate-y-0.5">
        {icon}
      </span>

      {/* Cart badge — sits outside the clipped bubble, bottom-right */}
      {showBadge && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-0.5 -right-0.5 z-20 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold leading-none text-black shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
        >
          {badge}
        </span>
      )}
    </button>
  );
};

// ─── Slide-in drawer ──────────────────────────────────────────

function NavDrawer({ open, onClose, isLoggedIn, onAccount }) {
  // Lock scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Menu">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <aside className="absolute inset-y-0 left-0 w-[85%] max-w-sm p-3">
        <div className={`flex h-full flex-col rounded-[2rem] p-5 font-nb17-sans text-white ${GLASS_DRAWER}`}>
          <header className="flex items-center justify-between">
            <img
              src="/logo.png"
              alt="Animefits"
              className="h-9 w-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
            />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <CloseIcon />
            </button>
          </header>

          <nav className="mt-6 flex-1 overflow-y-auto">
            <ul className="flex flex-col gap-1">
              {/* Search + Account live here on mobile only */}
              <li className="md:hidden">
                <Link
                  href="/search"
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <SearchIcon />
                  Search
                </Link>
              </li>
              <li className="md:hidden">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onAccount();
                  }}
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <UserIcon />
                  {isLoggedIn ? "My Account" : "Login"}
                </button>
              </li>

              <li className="mt-4 px-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Shop
              </li>
              {CATEGORY_LINKS.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    onClick={onClose}
                    className="block rounded-2xl px-4 py-3 text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────

export default function Navbar() {
  const router = useRouter();
  const { count } = useCart();
  const { isLoggedIn } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAccount = () => router.push(isLoggedIn ? "/account" : "/login");
  const handleSearch = () => router.push("/search");
  const handleCart = () => router.push("/cart");

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 p-4 font-nb17-sans">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[2.5rem] border border-white/40 bg-[color-mix(in_oklab,white_14%,transparent)] px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_20px_44px_-24px_rgba(0,0,0,0.55)] backdrop-blur-[22px] backdrop-saturate-[1.8]">
          {/* Left: Hamburger — visible on all sizes */}
          <div className="flex flex-1 justify-start">
            <LiquidButton
              ariaLabel="Open menu"
              icon={<MenuIcon />}
              onClick={() => setMenuOpen(true)}
            />
          </div>

          {/* Center: Logo */}
          <div className="flex shrink-0 items-center justify-center gap-2">
            <Link
              href="/"
              aria-label="Animefits — Home"
              className="flex items-center gap-2 text-white transition-opacity hover:opacity-90"
            >
              <img
                src="/logo.png"
                alt="Animefits Logo"
                className="h-10 w-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
              />
            </Link>
          </div>

          {/* Right: Actions */}
          <div className="flex flex-1 items-center justify-end gap-1">
            {/* Search — desktop only */}
            <div className="hidden md:block">
              <LiquidButton
                ariaLabel="Search"
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
            </div>

            {/* Account — desktop only; routes based on auth state */}
            <div className="hidden md:block">
              <LiquidButton
                ariaLabel={isLoggedIn ? "My account" : "Login"}
                icon={<UserIcon />}
                onClick={handleAccount}
              />
            </div>

            {/* Cart — always visible, with live badge */}
            <LiquidButton
              ariaLabel={`Cart (${count} item${count === 1 ? "" : "s"})`}
              icon={<BagIcon />}
              onClick={handleCart}
              badge={count}
            />
          </div>
        </div>
      </nav>

      <NavDrawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        isLoggedIn={isLoggedIn}
        onAccount={handleAccount}
      />
    </>
  );
}