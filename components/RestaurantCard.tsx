"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, Clock, Sparkles } from "lucide-react";
import type { Shop } from "@/lib/data";
import { useLanguage } from "./providers/LanguageProvider";

export default function RestaurantCard({
  shop,
  featured = false,
}: {
  shop: Shop;
  featured?: boolean;
}) {
  const { t, lang } = useLanguage();

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-card transition-shadow hover:shadow-card-hover dark:bg-neutral-800">
      <Link
        href={`/shops/${shop.slug}`}
        className="relative block aspect-[16/10] overflow-hidden"
      >
        <Image
          src={shop.image}
          alt={shop.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-semibold text-primary-700">
          {shop.tag[lang]}
        </span>
        {featured ? (
          <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-primary-600 px-2.5 py-0.5 text-[11px] font-semibold text-white">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            {t.common.featured}
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/shops/${shop.slug}`}
            className="text-sm font-semibold text-neutral-900 transition-colors hover:text-primary-600 dark:text-white dark:hover:text-primary-400"
          >
            {shop.name}
          </Link>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary-50 px-2 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-900/60 dark:text-primary-200">
            <Star className="h-3 w-3 fill-current" aria-hidden="true" />
            {shop.rating.toFixed(1)}
          </span>
        </div>

        <p className="line-clamp-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
          {shop.description[lang]}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-1.5 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          {shop.deliveryTime}
          <span aria-hidden="true">&middot;</span>
          {shop.reviews.toLocaleString(lang)} {t.common.reviews}
        </span>
      </div>
    </article>
  );
}
