"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

export type Order = {
  id: string;
  mealId: string;
  shopSlug: string;
  date: string;
};

export type Report = {
  shopSlug: string;
  reason: string;
  comment: string;
  date: string;
};

type AppContextValue = {
  likes: string[];
  orders: Order[];
  reports: Report[];
  toggleLike: (mealId: string) => void;
  isLiked: (mealId: string) => boolean;
  placeOrder: (mealId: string, shopSlug: string) => void;
  reportShop: (shopSlug: string, reason: string, comment: string) => void;
  isReported: (shopSlug: string) => boolean;
  showToast: (message: string) => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const STORAGE_KEY = "deliver-state";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [likes, setLikes] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [reports, setReports] = useState<Report[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (Array.isArray(saved.likes)) setLikes(saved.likes);
        if (Array.isArray(saved.orders)) setOrders(saved.orders);
        if (Array.isArray(saved.reports)) setReports(saved.reports);
      }
    } catch {
      // Corrupted storage: start fresh.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ likes, orders, reports }),
    );
  }, [likes, orders, reports, hydrated]);

  const showToast = (message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2500);
  };

  const toggleLike = (mealId: string) => {
    setLikes((current) =>
      current.includes(mealId)
        ? current.filter((id) => id !== mealId)
        : [...current, mealId],
    );
  };

  const placeOrder = (mealId: string, shopSlug: string) => {
    setOrders((current) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        mealId,
        shopSlug,
        date: new Date().toISOString(),
      },
      ...current,
    ]);
  };

  const reportShop = (shopSlug: string, reason: string, comment: string) => {
    setReports((current) => [
      { shopSlug, reason, comment, date: new Date().toISOString() },
      ...current,
    ]);
  };

  return (
    <AppContext.Provider
      value={{
        likes,
        orders,
        reports,
        toggleLike,
        isLiked: (mealId) => likes.includes(mealId),
        placeOrder,
        reportShop,
        isReported: (shopSlug) =>
          reports.some((report) => report.shopSlug === shopSlug),
        showToast,
      }}
    >
      {children}
      {toast ? (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-card-hover dark:bg-white dark:text-neutral-900"
        >
          {toast}
        </div>
      ) : null}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
