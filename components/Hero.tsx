import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock } from "lucide-react";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="home" className="bg-surface">
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
              <Star className="h-4 w-4" aria-hidden="true" />
              Trusted by 10,000+ food lovers
            </span>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Order from the best restaurants{" "}
              <span className="text-primary-600">near you</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              Browse local restaurants, explore curated menus and get your
              favorite meals delivered to your door in minutes. Fresh, fast and
              reliable — every single time.
            </p>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="#restaurants"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-700"
              >
                Browse Restaurants
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#partners"
                className="inline-flex items-center justify-center rounded-full border border-primary-200 bg-white px-7 py-3.5 text-sm font-semibold text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-50"
              >
                Become a Partner
              </Link>
            </div>

            <div className="mt-2 flex items-center gap-6 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary-600" aria-hidden="true" />
                Average delivery under 30 min
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card lg:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
                alt="Fresh salad bowl with vegetables"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-card sm:left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <Star className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-neutral-900">4.9 / 5 rating</p>
                <p className="text-xs text-neutral-500">From 8,200+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
