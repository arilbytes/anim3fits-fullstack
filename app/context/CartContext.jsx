"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "anim3fits_cart";

/**
 * @typedef {{ id: string, slug: string, image: string, title: string, price: number, size: string, qty: number }} CartLine
 */

export function CartProvider({ children }) {
  const [lines, setLines] = useState(/** @type {CartLine[]} */ ([]));
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage once on mount (client only)
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persist on every change, after initial hydration
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // storage may be unavailable (private mode, quota) — fail silently
    }
  }, [lines, hydrated]);

  const addItem = (product, size, qty = 1) => {
    setLines((prev) => {
      const key = `${product.id}-${size}`;
      const existing = prev.find((l) => `${l.id}-${l.size}` === key);
      if (existing) {
        return prev.map((l) =>
          `${l.id}-${l.size}` === key ? { ...l, qty: l.qty + qty } : l
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          image: product.image,
          title: product.title,
          price: product.price,
          size,
          qty,
        },
      ];
    });
  };

  const updateQty = (id, size, qty) => {
    setLines((prev) =>
      qty <= 0
        ? prev.filter((l) => !(l.id === id && l.size === size))
        : prev.map((l) => (l.id === id && l.size === size ? { ...l, qty } : l))
    );
  };

  const removeItem = (id, size) => {
    setLines((prev) => prev.filter((l) => !(l.id === id && l.size === size)));
  };

  const clearCart = () => setLines([]);

  const count = useMemo(() => lines.reduce((sum, l) => sum + l.qty, 0), [lines]);
  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.qty * l.price, 0), [lines]);

  const value = { lines, addItem, updateQty, removeItem, clearCart, count, subtotal, hydrated };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
