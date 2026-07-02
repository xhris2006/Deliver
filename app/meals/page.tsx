import type { Metadata } from "next";
import MealsPage from "@/components/pages/MealsPage";

export const metadata: Metadata = {
  title: "Meals — Deliver",
  description: "Browse every meal available on the platform.",
};

export default function Page() {
  return <MealsPage />;
}
