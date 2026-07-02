"use client";

import Image from "next/image";
import Link from "next/link";
import { ClipboardList, Bell, MessagesSquare, ArrowRight } from "lucide-react";
import Container from "./Container";
import { useLanguage } from "./providers/LanguageProvider";

const benefitIcons = [ClipboardList, Bell, MessagesSquare];

export default function PartnerSection() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="bg-primary-50 dark:bg-neutral-900">
      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              {t.partner.eyebrow}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              {t.partner.title}
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
              {t.partner.description}
            </p>

            <ul className="flex flex-col gap-5">
              {t.partner.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <li key={benefit.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary-600 shadow-sm dark:bg-neutral-800 dark:text-primary-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/help#add-shop"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
            >
              {t.partner.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt={t.partner.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-4 rounded-2xl bg-white px-5 py-4 shadow-card dark:bg-neutral-800 sm:right-8">
              <p className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                {t.partner.statValue}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {t.partner.statLabel}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
