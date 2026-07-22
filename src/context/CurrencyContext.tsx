"use client";

import { createContext, useContext, useSyncExternalStore } from "react";

type CurrencyType = "INR" | "USD";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): CurrencyType {
  return (localStorage.getItem("currency") as CurrencyType) || "INR";
}

function getServerSnapshot(): CurrencyType {
  return "INR"; // server default (prevents hydration mismatch)
}

const CurrencyContext = createContext<{
  currency: CurrencyType;
  setCurrency: (c: CurrencyType) => void;
}>({
  currency: "INR",
  setCurrency: () => {},
});

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const currency = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const setCurrency = (c: CurrencyType) => {
    localStorage.setItem("currency", c);
    window.dispatchEvent(new Event("storage")); 
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);