import type { Metadata } from "next";
import HelpPage from "@/components/pages/HelpPage";

export const metadata: Metadata = {
  title: "Help & support — Deliver",
  description: "Get help with your orders or add your shop to the platform.",
};

export default function Page() {
  return <HelpPage />;
}
