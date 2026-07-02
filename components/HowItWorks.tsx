"use client";

import { Store, UtensilsCrossed, Bike } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "./providers/LanguageProvider";

const stepIcons = [Store, UtensilsCrossed, Bike];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-white dark:bg-neutral-950">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow={t.howItWorks.eyebrow}
          title={t.howItWorks.title}
          description={t.howItWorks.description}
        />

        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {t.howItWorks.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <li
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-card">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-primary-100 text-xs font-bold text-primary-700 dark:border-neutral-950 dark:bg-primary-900 dark:text-primary-200">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
