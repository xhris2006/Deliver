"use client";

import Image from "next/image";
import { Star, Clock, ArrowRight } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./providers/LanguageProvider";

const restaurantData = [
  {
    rating: 4.9,
    reviews: 1240,
    deliveryTime: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    rating: 4.8,
    reviews: 980,
    deliveryTime: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
  },
  {
    rating: 4.7,
    reviews: 1560,
    deliveryTime: "15-25 min",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  },
  {
    rating: 4.9,
    reviews: 870,
    deliveryTime: "30-40 min",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
  },
  {
    rating: 4.6,
    reviews: 640,
    deliveryTime: "25-35 min",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=80",
  },
  {
    rating: 4.8,
    reviews: 720,
    deliveryTime: "20-30 min",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=900&q=80",
  },
];

export default function PopularRestaurants() {
  const { t, lang } = useLanguage();

  return (
    <section id="restaurants" className="bg-surface dark:bg-neutral-900">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow={t.restaurants.eyebrow}
          title={t.restaurants.title}
          description={t.restaurants.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.restaurants.items.map((restaurant, index) => {
            const data = restaurantData[index];
            return (
              <article
                key={restaurant.name}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow hover:shadow-card-hover dark:bg-neutral-800"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={data.image}
                    alt={restaurant.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary-700">
                    {restaurant.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                      {restaurant.name}
                    </h3>
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/60 dark:text-primary-200">
                      <Star className="h-4 w-4 fill-current" aria-hidden="true" />
                      {data.rating.toFixed(1)}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {restaurant.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      {data.deliveryTime}
                      <span aria-hidden="true">&middot;</span>
                      {data.reviews.toLocaleString(lang)} {t.restaurants.reviews}
                    </span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-primary-700"
                    >
                      {t.restaurants.orderNow}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
