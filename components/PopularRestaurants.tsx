"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import RestaurantCard from "./RestaurantCard";
import { sortedShops } from "@/lib/data";
import { useApp } from "./providers/AppProvider";
import { useLanguage } from "./providers/LanguageProvider";

export default function PopularRestaurants() {
  const { t } = useLanguage();
  const { likes } = useApp();
  const shops = sortedShops(likes);

  return (
    <section id="restaurants" className="bg-surface dark:bg-neutral-900">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow={t.restaurants.eyebrow}
          title={t.restaurants.title}
          description={t.restaurants.description}
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {shops.slice(0, 8).map((shop, index) => (
            <RestaurantCard key={shop.slug} shop={shop} featured={index < 3} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/shops"
            className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-7 py-3 text-sm font-semibold text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-50 dark:border-neutral-700 dark:bg-neutral-950 dark:text-primary-300 dark:hover:border-neutral-600 dark:hover:bg-neutral-800"
          >
            {t.restaurants.viewAll}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
