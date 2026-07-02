"use client";

import {
  Zap,
  BadgeCheck,
  CreditCard,
  MessageCircle,
  MapPin,
  Tag,
  ShieldCheck,
  Headphones,
} from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./providers/LanguageProvider";

const featureIcons = [
  Zap,
  BadgeCheck,
  CreditCard,
  MessageCircle,
  MapPin,
  Tag,
  ShieldCheck,
  Headphones,
];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="bg-white dark:bg-neutral-950">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          description={t.features.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <article
                key={feature.title}
                className="group rounded-2xl border border-primary-100 bg-primary-50/50 p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-card dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-200 bg-white text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-primary-400 dark:group-hover:bg-primary-600 dark:group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-neutral-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
