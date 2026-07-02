import type { Metadata } from "next";
import OrdersPage from "@/components/pages/OrdersPage";

export const metadata: Metadata = {
  title: "Recent orders — Deliver",
  description: "Meals you recently ordered.",
};

export default function Page() {
  return <OrdersPage />;
}
