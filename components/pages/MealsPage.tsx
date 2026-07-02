"use client";

import Container from "../Container";
import MealCard from "../MealCard";
import { allMeals, shopScore } from "@/lib/data";
import { useApp } from "../providers/AppProvider";
import { useLanguage } from "../providers/LanguageProvider";

export default function MealsPage() {
  const { t } = useLanguage();
  const { likes } = useApp();

  // Liked meals first, then meals from the best-scored shops.
  const meals = allMeals().sort((a, b) => {
    const likedA = likes.includes(a.meal.id) ? 1 : 0;
    const likedB = likes.includes(b.meal.id) ? 1 : 0;
    if (likedA !== likedB) return likedB - likedA;
    return shopScore(b.shop, likes) - shopScore(a.shop, likes);
  });

  return (
    <main className="bg-surface dark:bg-neutral-900">
      <Container className="min-h-screen py-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {t.mealsPage.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-base">
          {t.mealsPage.description}
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {meals.map(({ meal, shop }) => (
            <MealCard key={meal.id} meal={meal} shop={shop} showShop />
          ))}
        </div>
      </Container>
    </main>
  );
}
