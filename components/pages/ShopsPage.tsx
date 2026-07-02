"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Container from "../Container";
import RestaurantCard from "../RestaurantCard";
import { sortedShops, shopScore } from "@/lib/data";
import { useApp } from "../providers/AppProvider";
import { useLanguage } from "../providers/LanguageProvider";

export default function ShopsPage() {
  const { t, lang } = useLanguage();
  const { likes } = useApp();
  const [query, setQuery] = useState("");

  const shops = sortedShops(likes);
  const featuredSlugs = new Set(shops.slice(0, 3).map((shop) => shop.slug));

  const normalized = query.trim().toLowerCase();
  const filtered = normalized
    ? shops.filter(
        (shop) =>
          shop.name.toLowerCase().includes(normalized) ||
          shop.tag[lang].toLowerCase().includes(normalized) ||
          shop.description[lang].toLowerCase().includes(normalized),
      )
    : shops;

  return (
    <main className="bg-surface dark:bg-neutral-900">
      <Container className="min-h-screen py-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {t.shopsPage.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-base">
          {t.shopsPage.description}
        </p>

        <div className="relative mt-6 max-w-xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t.shopsPage.searchPlaceholder}
            className="w-full rounded-full border border-neutral-200 bg-white py-3 pl-12 pr-5 text-sm text-neutral-800 shadow-sm placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-400">
            {t.shopsPage.noResults}
          </p>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filtered
              .slice()
              .sort((a, b) => shopScore(b, likes) - shopScore(a, likes))
              .map((shop) => (
                <RestaurantCard
                  key={shop.slug}
                  shop={shop}
                  featured={featuredSlugs.has(shop.slug)}
                />
              ))}
          </div>
        )}
      </Container>
    </main>
  );
}
