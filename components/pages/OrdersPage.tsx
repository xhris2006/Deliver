"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import Container from "../Container";
import { getMeal } from "@/lib/data";
import { useApp } from "../providers/AppProvider";
import { useLanguage } from "../providers/LanguageProvider";

export default function OrdersPage() {
  const { t, lang } = useLanguage();
  const { orders, isLiked, toggleLike, placeOrder, showToast } = useApp();

  const entries = orders
    .map((order) => ({ order, resolved: getMeal(order.mealId) }))
    .filter((entry) => entry.resolved !== undefined);

  return (
    <main className="bg-surface dark:bg-neutral-900">
      <Container className="min-h-screen py-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {t.ordersPage.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-base">
          {t.ordersPage.description}
        </p>

        {entries.length === 0 ? (
          <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl bg-white p-10 text-center shadow-card dark:bg-neutral-800">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
              <ShoppingBag className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {t.ordersPage.empty}
            </p>
            <Link
              href="/shops"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
            >
              {t.ordersPage.emptyCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        ) : (
          <ul className="mt-8 flex flex-col gap-3">
            {entries.map(({ order, resolved }) => {
              const { meal, shop } = resolved!;
              const liked = isLiked(meal.id);
              return (
                <li
                  key={order.id}
                  className="flex items-center gap-4 rounded-xl bg-white p-3.5 shadow-card dark:bg-neutral-800"
                >
                  <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg sm:h-18 sm:w-24">
                    <Image
                      src={meal.image}
                      alt={meal.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-neutral-900 dark:text-white">
                      {meal.name}
                    </p>
                    <Link
                      href={`/shops/${shop.slug}`}
                      className="text-xs font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                    >
                      {shop.name}
                    </Link>
                    <p className="mt-0.5 text-[11px] text-neutral-500 dark:text-neutral-400">
                      {new Date(order.date).toLocaleDateString(lang, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      <span aria-hidden="true"> &middot; </span>
                      {meal.price.toLocaleString(lang, {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleLike(meal.id)}
                      aria-label={liked ? t.common.unlike : t.common.like}
                      aria-pressed={liked}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${
                        liked
                          ? "border-red-200 text-red-500 dark:border-red-900"
                          : "border-neutral-200 text-neutral-400 hover:text-red-500 dark:border-neutral-700"
                      }`}
                    >
                      <Heart
                        className={`h-4 w-4 ${liked ? "fill-current" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        placeOrder(meal.id, shop.slug);
                        showToast(t.toast.orderPlaced);
                      }}
                      className="hidden rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700 sm:block"
                    >
                      {t.ordersPage.reorder}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </main>
  );
}
