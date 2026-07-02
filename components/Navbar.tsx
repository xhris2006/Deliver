"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UtensilsCrossed,
  Menu,
  X,
  Home,
  Soup,
  Store,
  Clock,
  LifeBuoy,
} from "lucide-react";
import Container from "./Container";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "./providers/LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const pathname = usePathname();

  const navLinks = [
    { label: t.nav.home, href: "/", icon: Home },
    { label: t.nav.meals, href: "/meals", icon: Soup },
    { label: t.nav.shops, href: "/shops", icon: Store },
    { label: t.nav.orders, href: "/orders", icon: Clock },
    { label: t.nav.help, href: "/help", icon: LifeBuoy },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/90 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/90">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
              <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
              Deliver
            </span>
          </Link>

          <ul className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                    isActive(link.href)
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-neutral-600 dark:text-neutral-300"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-1 lg:flex">
            <LanguageSwitch />
            <ThemeToggle />
            <Link
              href="/shops"
              className="ml-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
            >
              {t.nav.orderNow}
            </Link>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitch />
            <ThemeToggle />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </Container>
    </header>

    {/* Mobile side drawer: kept outside the header because its backdrop-blur
       creates a containing block that would trap position:fixed children. */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-neutral-950/50 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-72 flex-col bg-white shadow-card-hover transition-transform duration-300 dark:bg-neutral-950 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b border-neutral-100 px-5 dark:border-neutral-800">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
                <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                Deliver
              </span>
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
              onClick={() => setOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-primary-50 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300"
                      : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <link.icon className="h-5 w-5" aria-hidden="true" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="border-t border-neutral-100 p-4 dark:border-neutral-800">
            <Link
              href="/shops"
              className="block rounded-full bg-primary-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              onClick={() => setOpen(false)}
            >
              {t.nav.orderNow}
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
