"use client";

import Link from "next/link";
import {
  UtensilsCrossed,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Container from "./Container";
import { useLanguage } from "./providers/LanguageProvider";

const socials = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.meals, href: "/meals" },
    { label: t.nav.shops, href: "/shops" },
    { label: t.nav.orders, href: "/orders" },
    { label: t.nav.help, href: "/help" },
  ];

  return (
    <footer className="bg-primary-950 text-primary-100">
      <Container className="py-12">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
              <UtensilsCrossed className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Deliver
            </span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-primary-200 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center gap-3">
            {socials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-primary-100 transition-colors hover:bg-primary-600 hover:text-white"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-primary-300">
            &copy; {new Date().getFullYear()} Deliver. {t.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
