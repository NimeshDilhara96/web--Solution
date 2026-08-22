import { products } from "../../data/products";
import CatalogClient from "./catalog-client";

/* ── Page-level metadata (overrides layout) ── */
export const metadata = {
  title: "Discover Digital Products — Figma UI Kits & Notion Templates | MommentX",
  description:
    "Browse premium Figma UI kits, Notion workspace templates, and Next.js web starter kits crafted by MommentX. Built for founders, designers, and product teams worldwide.",
  keywords: [
    "Figma UI Kit", "Notion Templates", "SaaS Dashboard Template",
    "Next.js Starter Kit", "Design System Download", "UI Kit for Designers",
    "Figma Dashboard Template", "Notion Business Template", "Web Templates",
    "Digital Products for Designers", "SmartMap Pro", "Site Architecture Template",
  ],
  alternates: {
    canonical: "https://mommentx.space/discover",
  },
  openGraph: {
    title: "Discover Digital Products — Figma UI Kits & Notion Templates | MommentX",
    description: `Browse ${products.length}+ premium Figma UI kits, Notion templates, and Next.js starter kits. Built by MommentX for founders and product teams.`,
    url: "https://mommentx.space/discover",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover Premium Digital Products | MommentX",
    description: "Figma UI kits, Notion templates, and web starter kits for founders and designers.",
  },
};

export default function DiscoverPage() {
  return <CatalogClient />;
}
