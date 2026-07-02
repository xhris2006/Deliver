import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { shops, getShop } from "@/lib/data";
import ShopProfile from "@/components/pages/ShopProfile";

export function generateStaticParams() {
  return shops.map((shop) => ({ slug: shop.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const shop = getShop(slug);
  return {
    title: shop ? `${shop.name} — Deliver` : "Shop — Deliver",
    description: shop?.description.en,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!getShop(slug)) notFound();
  return <ShopProfile slug={slug} />;
}
