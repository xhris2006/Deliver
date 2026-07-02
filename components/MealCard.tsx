"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import type { Meal, Shop } from "@/lib/data";
import { useApp } from "./providers/AppProvider";
import { useLanguage } from "./providers/LanguageProvider";

export default function MealCard({
  meal,
  shop,
  showShop = false,
}: {
  meal: Meal;
  shop: Shop;
  showShop?: boolean;
}) {
  const { t, lang } = useLanguage();
  const { isLiked, toggleLike, placeOrder, showToast } = useApp();
  const liked = isLiked(meal.id);

  const handleOrder = () => {
    placeOrder(meal.id, shop.slug);
    showToast(t.toast.orderPlaced);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-card transition-shadow hover:shadow-card-hover dark:bg-neutral-800">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={meal.image}
          alt={meal.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button
          type="button"
          onClick={() => toggleLike(meal.id)}
          aria-label={liked ? t.common.unlike : t.common.like}
          aria-pressed={liked}
          className={`absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 shadow-sm transition-colors ${
            liked
              ? "text-red-500"
              : "text-neutral-400 hover:text-red-500"
          }`}
        >
          <Heart
            className={`h-4 w-4 ${liked ? "fill-current" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
            {meal.name}
          </h3>
          <span className="shrink-0 text-sm font-bold text-primary-700 dark:text-primary-300">
            {meal.price.toLocaleString(lang, {
              style: "currency",
              currency: "EUR",
            })}
          </span>
        </div>

        {showShop ? (
          <Link
            href={`/shops/${shop.slug}`}
            className="text-[11px] font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {t.mealsPage.from} {shop.name}
          </Link>
        ) : null}

        <p className="line-clamp-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
          {meal.description[lang]}
        </p>

        <button
          type="button"
          onClick={handleOrder}
          className="mt-auto w-full rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700"
        >
          {t.shopPage.order}
        </button>
      </div>
    </article>
  );
}
