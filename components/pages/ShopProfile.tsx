"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Clock, Flag, CheckCircle2 } from "lucide-react";
import Container from "../Container";
import MealCard from "../MealCard";
import ReportShopModal from "../ReportShopModal";
import { getShop } from "@/lib/data";
import { useApp } from "../providers/AppProvider";
import { useLanguage } from "../providers/LanguageProvider";

export default function ShopProfile({ slug }: { slug: string }) {
  const { t, lang } = useLanguage();
  const { isReported } = useApp();
  const [reportOpen, setReportOpen] = useState(false);

  const shop = getShop(slug);
  if (!shop) return null;

  const reported = isReported(shop.slug);

  return (
    <main className="bg-surface dark:bg-neutral-900">
      <Container className="min-h-screen py-8 sm:py-12">
        <Link
          href="/shops"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {t.common.back}
        </Link>

        <div className="relative mt-5 h-48 overflow-hidden rounded-2xl shadow-card sm:h-64">
          <Image
            src={shop.image}
            alt={shop.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-700">
            {shop.tag[lang]}
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-3xl">
              {shop.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="inline-flex items-center gap-1 font-semibold text-primary-700 dark:text-primary-300">
                <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                {shop.rating.toFixed(1)}
              </span>
              <span>
                {shop.reviews.toLocaleString(lang)} {t.common.reviews}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                {shop.deliveryTime}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {shop.description[lang]}
            </p>
          </div>

          {reported ? (
            <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-xs font-semibold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              {t.shopPage.reported}
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setReportOpen(true)}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 transition-colors hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950"
            >
              <Flag className="h-4 w-4" aria-hidden="true" />
              {t.shopPage.report}
            </button>
          )}
        </div>

        <h2 className="mt-10 text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
          {t.shopPage.menuTitle}
        </h2>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {shop.meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} shop={shop} />
          ))}
        </div>
      </Container>

      {reportOpen ? (
        <ReportShopModal
          shopSlug={shop.slug}
          shopName={shop.name}
          onClose={() => setReportOpen(false)}
        />
      ) : null}
    </main>
  );
}
