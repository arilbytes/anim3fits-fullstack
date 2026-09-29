"use client";

import React from "react";
import { useRouter } from "next/navigation";

// ─── Icons ────────────────────────────────────────────────────

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const BagIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

// ─── Reusable Liquid Glass Button ─────────────────────────────

const LiquidButton = ({ icon, ariaLabel, onClick }) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full transition-transform active:scale-95"
    >
      {/* Rising liquid bubble */}
      <span className="absolute inset-0 translate-y-full rounded-full bg-gradient-to-t from-white/60 to-white/10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.5,1)] group-hover:translate-y-0 group-active:animate-nb17-pop" />

      {/* Icon */}
      <span className="relative z-10 text-gray-800 transition-transform duration-300 group-hover:-translate-y-0.5">
        {icon}
      </span>
    </button>
  );
};

// ─── Main Navbar ──────────────────────────────────────────────

export default function Navbar() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleCart = () => {
    router.push("/cart");
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 p-4 font-nb17-sans">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[2.5rem] border border-white/40 bg-[color-mix(in_oklab,white_14%,transparent)] px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_20px_44px_-24px_rgba(0,0,0,0.55)] backdrop-blur-[22px] backdrop-saturate-[1.8]">

        {/* Left: Hamburger */}
        <div className="flex flex-1 justify-start">
          <LiquidButton
            ariaLabel="Open menu"
            icon={<MenuIcon />}
          />
        </div>

        {/* Center: Logo */}
        <div className="flex shrink-0 items-center justify-center gap-2">
          <div className="flex items-center gap-2 text-white">
            <img
              src="/logo.png"
              alt="Animefits Logo"
              className="h-10 w-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-1 items-center justify-end gap-1">

          {/* Search */}
          <LiquidButton
            ariaLabel="Search"
            icon={<SearchIcon />}
          />

          {/* Account */}
          <LiquidButton
            ariaLabel="Login"
            icon={<UserIcon />}
            onClick={handleLogin}
          />

          {/* Cart */}
          <LiquidButton
            ariaLabel="Cart"
            icon={<BagIcon />}
            onClick={handleCart}
          />

        </div>
      </div>
    </nav>
  );
}

