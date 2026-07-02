import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularRestaurants from "@/components/PopularRestaurants";
import HowItWorks from "@/components/HowItWorks";
import PartnerSection from "@/components/PartnerSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <PopularRestaurants />
      <HowItWorks />
      <PartnerSection />
    </main>
  );
}
