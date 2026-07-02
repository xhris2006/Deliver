import {
  Zap,
  BadgeCheck,
  CreditCard,
  MessageCircle,
  MapPin,
  Tag,
  ShieldCheck,
  Headphones,
  type LucideIcon,
} from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Zap,
    title: "Fast delivery",
    description:
      "Get your meals delivered in under 30 minutes with our optimized courier network.",
  },
  {
    icon: BadgeCheck,
    title: "Verified restaurants",
    description:
      "Every partner restaurant is reviewed and verified for quality and hygiene standards.",
  },
  {
    icon: CreditCard,
    title: "Easy payments",
    description:
      "Pay securely with card, mobile money or cash on delivery — whatever suits you best.",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    description:
      "Chat directly with restaurants and couriers to customize or follow up your order.",
  },
  {
    icon: MapPin,
    title: "Order tracking",
    description:
      "Follow your order in real time from the kitchen to your doorstep on a live map.",
  },
  {
    icon: Tag,
    title: "Promotions",
    description:
      "Enjoy exclusive deals, loyalty rewards and daily discounts on your favorite dishes.",
  },
  {
    icon: ShieldCheck,
    title: "Secure orders",
    description:
      "Your data and payments are protected with bank-level encryption at every step.",
  },
  {
    icon: Headphones,
    title: "24/7 support",
    description:
      "Our support team is available around the clock to help with any question or issue.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="Why choose us"
          title="Everything you need in one platform"
          description="From browsing menus to tracking your courier, we designed every step of the experience to be simple, fast and enjoyable."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-primary-100 bg-primary-50/50 p-6 transition-all hover:-translate-y-1 hover:border-primary-200 hover:shadow-card"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-200 bg-white text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-neutral-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
