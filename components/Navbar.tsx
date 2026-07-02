"use client";

import { useState } from "react";
import Link from "next/link";
import { UtensilsCrossed, Menu, X } from "lucide-react";
import Container from "./Container";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/90 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="#home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
              <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold tracking-tight text-neutral-900">
              Deliver
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-600 transition-colors hover:text-primary-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link
              href="#restaurants"
              className="rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
            >
              Order now
            </Link>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-neutral-700 transition-colors hover:bg-neutral-100 md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {open ? (
        <div className="border-t border-neutral-100 bg-white md:hidden">
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="#restaurants"
                  className="block rounded-full bg-primary-600 px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-700"
                  onClick={() => setOpen(false)}
                >
                  Order now
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
