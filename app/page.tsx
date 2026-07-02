import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PopularRestaurants from "@/components/PopularRestaurants";
import HowItWorks from "@/components/HowItWorks";
import PartnerSection from "@/components/PartnerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <PopularRestaurants />
        <HowItWorks />
        <PartnerSection />
      </main>
      <Footer />
    </>
  );
}
