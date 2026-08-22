/**
 * MommentX — Digital Products Catalog Data
 * ──────────────────────────────────────────
 * Add new products by appending objects to this array.
 * Supported categories: "figma" | "notion" | "web"
 *
 * Image paths: place files in /public/products/ and reference as "/products/filename.jpg"
 */

export const products = [
  {
    slug: "smartmap-pro",
    title: "SmartMap Pro - React & Node.js Fare Calculator Module",
    category: "npm-package",
    price: "$19",
    tags: ["React", "Node.js", "OpenStreetMap", "TypeScript", "Routing"],
    shortDesc:
      "A highly customizable, plug-and-play isomorphic NPM package built for modern React and Node.js applications.",
    fullDesc:
      "SmartMap Pro is a plug-and-play, highly customizable NPM package that lets you build commercial routing maps in minutes. Designed for React and Node.js applications, it seamlessly handles everything from live geocoding and frontend UI features—like Dark Mode and multi-purpose map modes (routing, shop-location)—to an ultra-secure backend calculation helper that prevents client-side fare manipulation. You'll receive the lightweight smartmap-pro.tgz package, complete developer documentation, and lifetime updates, giving you a flawless TypeScript-ready foundation to launch your next taxi or delivery platform instantly.",
    features: [
      "Bulletproof Backend Security (Server-side fare calculation)",
      "Multiple Themes & Dark Mode (Standard, Dark Mode, Satellite, Terrain)",
      "Live Search & Autocomplete via OpenStreetMap",
      "100% Customizable UI (Toggle controls, custom CSS & pins)",
      "Ultra Lightweight & Fast (~8.5KB packed)",
      "TypeScript Ready with full type definitions (.d.ts)",
      "Multi-Purpose Modes (routing, shop-location, location-only)",
      "Lifetime access to future updates",
    ],
    thumbnail: "/products/1000180138.png",
    images: ["/products/1000180138.png", "/products/1000180138.png"],
    ctaLabel: "Buy Now",
    ctaHref: "https://momentix.gumroad.com/l/smartmap-pro",
  },
];

/**
 * Helper: get a single product by slug
 */
export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null;
}

/**
 * Helper: get all slugs (for generateStaticParams)
 */
export function getAllSlugs() {
  return products.map((p) => ({ slug: p.slug }));
}
