"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
const STORAGE_KEY = "anim3fits_user";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(/** @type {null | { email: string, name?: string }} */ (null));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      // ignore corrupt storage
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (user) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // storage may be unavailable — fail silently
    }
  }, [user, hydrated]);

  const login = (userData) => setUser(userData ?? { email: "guest@anim3fits.com" });
  const logout = () => setUser(null);

  const value = { user, isLoggedIn: !!user, hydrated, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}