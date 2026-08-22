import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { products } from "../../data/products";

/**
 * DiscoverLayout — wraps all /discover/* routes with Navbar, Footer,
 * and the ItemList JSON-LD schema for Google rich results.
 *
 * Page-level metadata (title, description, OG, Twitter) is set
 * in each individual page/layout file:
 *   • /discover            → discover/page.jsx (metadata export)
 *   • /discover/[slug]     → discover/[slug]/page.jsx (generateMetadata)
 */

// ItemList structured data — helps Google show a product list in search results
function DiscoverSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MommentX Digital Products",
    "description": "Premium Figma UI kits, Notion templates, and web starter kits by MommentX",
    "url": "https://mommentx.space/discover",
    "numberOfItems": products.length,
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": p.title,
      "description": p.shortDesc,
      "url": `https://mommentx.space/discover/${p.slug}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function DiscoverLayout({ children }) {
  return (
    <>
      <DiscoverSchema />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
