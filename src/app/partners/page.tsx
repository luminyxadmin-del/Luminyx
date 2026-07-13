import type { Metadata } from "next";
import { PartnersPageClient } from "@/components/PartnersPageClient";

export const metadata: Metadata = {
  title: "Partners — Luminyx Ventures",
  description: "Partner with Luminyx to deliver compounding impact across East Africa, India and the GCC.",
};

export default function PartnersPage() {
  return <PartnersPageClient />;
}
