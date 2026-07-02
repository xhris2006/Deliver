"use client";

import { useState } from "react";
import { MessageCircle, Mail, CircleHelp, Store, CheckCircle2 } from "lucide-react";
import Container from "../Container";
import { useLanguage } from "../providers/LanguageProvider";

const cardIcons = [MessageCircle, Mail, CircleHelp];

export default function HelpPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const inputClasses =
    "mt-1.5 w-full rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-400 focus:border-primary-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-200";

  return (
    <main className="bg-surface dark:bg-neutral-900">
      <Container className="min-h-screen py-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {t.helpPage.title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-400 sm:text-base">
          {t.helpPage.description}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {t.helpPage.cards.map((card, index) => {
            const Icon = cardIcons[index];
            return (
              <article
                key={card.title}
                className="rounded-2xl bg-white p-6 shadow-card dark:bg-neutral-800"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-3 text-sm font-semibold text-neutral-900 dark:text-white">
                  {card.title}
                </h2>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <section
          id="add-shop"
          className="mt-12 rounded-2xl bg-white p-6 shadow-card dark:bg-neutral-800 sm:p-8"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-600 text-white">
              <Store className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                {t.helpPage.addShopTitle}
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {t.helpPage.addShopDescription}
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-primary-50 p-5 dark:bg-primary-900/40">
              <CheckCircle2
                className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-300"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-primary-800 dark:text-primary-200">
                {t.helpPage.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  {t.helpPage.form.name}
                </span>
                <input
                  type="text"
                  required
                  placeholder={t.helpPage.form.namePlaceholder}
                  className={inputClasses}
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  {t.helpPage.form.cuisine}
                </span>
                <input
                  type="text"
                  required
                  placeholder={t.helpPage.form.cuisinePlaceholder}
                  className={inputClasses}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  {t.helpPage.form.email}
                </span>
                <input
                  type="email"
                  required
                  placeholder={t.helpPage.form.emailPlaceholder}
                  className={inputClasses}
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  {t.helpPage.form.message}
                </span>
                <textarea
                  rows={4}
                  placeholder={t.helpPage.form.messagePlaceholder}
                  className={inputClasses}
                />
              </label>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary-600 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
                >
                  {t.helpPage.form.submit}
                </button>
              </div>
            </form>
          )}
        </section>
      </Container>
    </main>
  );
}
