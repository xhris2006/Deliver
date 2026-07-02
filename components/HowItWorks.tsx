import { Store, UtensilsCrossed, Bike, type LucideIcon } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Store,
    title: "Choose a restaurant",
    description:
      "Browse verified restaurants near you and filter by cuisine, rating or delivery time.",
  },
  {
    icon: UtensilsCrossed,
    title: "Select your meals",
    description:
      "Explore the menu, customize your dishes and add everything you crave to your cart.",
  },
  {
    icon: Bike,
    title: "Get your delivery",
    description:
      "Track your courier in real time and enjoy your food, delivered hot to your door.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Your meal in three simple steps"
          description="Ordering your next meal takes less than two minutes. Here is how it works."
        />

        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-center text-center">
              <div className="relative">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-card">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </span>
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-primary-100 text-xs font-bold text-primary-700">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-neutral-900">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
