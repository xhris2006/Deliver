import type { Metadata } from "next";
import ShopsPage from "@/components/pages/ShopsPage";

export const metadata: Metadata = {
  title: "Shops — Deliver",
  description: "Search and browse verified shops near you.",
};

export default function Page() {
  return <ShopsPage />;
}
