import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, getAllSlugs } from "../../../data/products";
import { FallbackImage, FallbackThumb } from "../../../components/discover/FallbackImage";

/* ── Static generation ── */
export async function generateStaticParams() {
  return getAllSlugs();
}

/* ── Per-page metadata ── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const catLabel = { figma: "Figma UI Kit", notion: "Notion Template", web: "Web Template" }[product.category] ?? "Digital Product";
  return {
    title: `${product.title} — ${catLabel} | MommentX`,
    description: product.shortDesc,
    keywords: [
      product.title,
      catLabel,
      ...product.tags,
      "MommentX",
      "Buy " + product.title,
      "Download " + product.title,
    ],
    alternates: {
      canonical: `https://mommentx.space/discover/${slug}`,
    },
    openGraph: {
      title: `${product.title} — ${catLabel} | MommentX`,
      description: product.shortDesc,
      url: `https://mommentx.space/discover/${slug}`,
      type: "website",
      images: [
        {
          url: product.thumbnail,
          alt: product.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | MommentX`,
      description: product.shortDesc,
    },
  };
}

const CATEGORY_COLORS = {
  figma: { bg: "#f5f3ff", text: "#7c3aed", label: "Figma" },
  notion: { bg: "#fff7ed", text: "#c2410c", label: "Notion" },
  web: { bg: "#eff6ff", text: "#1d4ed8", label: "Web" },
};

/* ── Product Schema (JSON-LD) ── */
function ProductSchema({ product }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.title,
    "description": product.fullDesc,
    "url": `https://mommentx.space/discover/${product.slug}`,
    "applicationCategory": product.category === "web" ? "WebApplication" : "DesignApplication",
    "operatingSystem": "Web, Figma, Notion",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/ComingSoon",
      "seller": {
        "@type": "Organization",
        "name": "MommentX",
        "url": "https://mommentx.space"
      }
    },
    "creator": {
      "@type": "Organization",
      "name": "MommentX",
      "url": "https://mommentx.space"
    },
    "keywords": product.tags.join(", "),
    "image": `https://mommentx.space${product.thumbnail}`,
    "featureList": product.features.join("; "),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Check icon SVG ── */
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    style={{ flexShrink: 0, marginTop: "2px" }}
  >
    <circle cx="8" cy="8" r="8" fill="#eff6ff" />
    <path
      d="M4.5 8l2.5 2.5 4.5-4.5"
      stroke="#2563eb"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const cat = CATEGORY_COLORS[product.category] ?? {
    bg: "#f8fafc",
    text: "#475569",
    label: product.category,
  };

  return (
    <div className="detail-page">
      <ProductSchema product={product} />
      {/* ── Breadcrumb ── */}
      <div className="detail-breadcrumb">
        <div className="detail-breadcrumb-inner">
          <Link href="/discover" className="detail-back-link">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M11.5 7h-9M6.5 3.5L3 7l3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Discover
          </Link>
          <span className="detail-breadcrumb-sep">/</span>
          <span className="detail-breadcrumb-current">{product.title}</span>
        </div>
      </div>

      <div className="detail-layout">
        {/* ── LEFT: Image Gallery ── */}
        <div className="detail-gallery-col">
          <div className="detail-main-image">
            <FallbackImage
              src={product.images[0]}
              alt={`${product.title} preview`}
              className="detail-main-img"
              fallbackText={product.title}
            />
          </div>
          {/* Thumbnail strip — only shown if multiple images */}
          {product.images.length > 1 && (
            <div className="detail-thumb-strip">
              {product.images.map((img, i) => (
                <FallbackThumb
                  key={i}
                  src={img}
                  alt={`${product.title} screenshot ${i + 1}`}
                  index={i}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── RIGHT: Product Info ── */}
        <div className="detail-info-col">
          {/* Category badge */}
          <span
            className="product-badge"
            style={{ background: cat.bg, color: cat.text, marginBottom: "16px", display: "inline-block" }}
          >
            {cat.label}
          </span>

          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-short-desc">{product.shortDesc}</p>

          {/* Tags */}
          <div className="product-card-tags" style={{ marginBottom: "28px" }}>
            {product.tags.map((tag) => (
              <span key={tag} className="product-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="detail-cta-box">
            <div className="detail-price-row">
              <span className="detail-price-label">Price</span>
              <span className="detail-price-value">{product.price}</span>
            </div>

            {product.ctaHref && product.ctaHref !== "#" ? (
              /* ── Active: real Gumroad / external link ── */
              <a
                href={product.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-active-btn"
                id={`cta-${product.slug}`}
              >
                <span>{product.ctaLabel}</span>
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ) : (
              /* ── Placeholder: coming soon ── */
              <button
                className="cta-placeholder-btn"
                disabled
                aria-disabled="true"
                title="Payment integration coming soon"
                id={`cta-${product.slug}`}
              >
                <span>{product.ctaLabel}</span>
                <span className="cta-placeholder-badge">Coming Soon</span>
              </button>
            )}

            <p className="cta-placeholder-note">
              {product.ctaHref && product.ctaHref !== "#" ? (
                <>🔒 Secure checkout via Gumroad. Instant download after payment.</>
              ) : (
                <>🔔 Payment integration in progress. Join the waitlist by{" "}
                  <Link href="/#contact" style={{ color: "#2563eb" }}>contacting us</Link>.
                </>
              )}
            </p>
          </div>

          {/* Full description */}
          <div className="detail-section">
            <h2 className="detail-section-title">About this product</h2>
            <p className="detail-full-desc">{product.fullDesc}</p>
          </div>

          {/* Features */}
          <div className="detail-section">
            <h2 className="detail-section-title">What&apos;s included</h2>
            <ul className="detail-features">
              {product.features.map((feature) => (
                <li key={feature} className="detail-feature-item">
                  <CheckIcon />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
