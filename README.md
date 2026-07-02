# Deliver

A modern, responsive food delivery platform landing page — a frontend prototype where users can browse restaurants, view menus and order food, and restaurant owners can join as partners.

## Tech stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) icons
- Placeholder images from Unsplash

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        # Root layout, fonts and metadata
  page.tsx          # Landing page composition
  globals.css       # Tailwind entry point
components/
  Navbar.tsx        # Sticky header with mobile menu
  Hero.tsx          # Hero with CTAs and food image
  Features.tsx      # 8 feature cards grid
  PopularRestaurants.tsx  # Restaurant cards with ratings
  HowItWorks.tsx    # 3-step ordering flow
  PartnerSection.tsx # Restaurant owner onboarding section
  Footer.tsx        # Links and social icons
  Container.tsx     # Shared layout wrapper
  SectionHeading.tsx # Shared section heading
```

## Deployment

Ready to deploy on [Vercel](https://vercel.com) — no environment variables or backend required.
