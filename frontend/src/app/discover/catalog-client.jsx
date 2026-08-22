"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import ProductCard from "../../components/discover/ProductCard";
import { products } from "../../data/products";

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "figma", label: "Figma Kits" },
  { id: "notion", label: "Notion Templates" },
  { id: "web", label: "Web Starters" },
];

export default function CatalogClient() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const counts = useMemo(() => {
    const map = { all: products.length };
    products.forEach((p) => {
      map[p.category] = (map[p.category] ?? 0) + 1;
    });
    return map;
  }, []);

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="discover-hero">
        <div className="discover-hero-inner">
          <div className="section-label" style={{ marginBottom: "16px" }}>
            Digital Products
          </div>
          <h1 className="discover-hero-title">
            Premium Templates &amp;{" "}
            <span className="gradient-text">Design Systems</span>
          </h1>
          <p className="discover-hero-desc">
            Handcrafted Figma UI kits, Notion workspaces, and web starter kits
            built by the MommentX team. Ship faster. Look exceptional.
          </p>

          {/* Stats strip */}
          <div className="discover-stats">
            <div className="discover-stat">
              <span className="discover-stat-num">{products.length}</span>
              <span className="discover-stat-label">Products</span>
            </div>
            <div className="discover-stat-divider" />
            <div className="discover-stat">
              <span className="discover-stat-num">3</span>
              <span className="discover-stat-label">Categories</span>
            </div>
            <div className="discover-stat-divider" />
            <div className="discover-stat">
              <span className="discover-stat-num">
                {products.filter((p) => p.ctaHref !== "#").length > 0
                  ? products.filter((p) => p.ctaHref !== "#").length
                  : "Soon"}
              </span>
              <span className="discover-stat-label">Live Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="discover-catalog">
        <div className="discover-catalog-inner">
          {/* Filter tabs */}
          <div className="filter-tabs" role="tablist" aria-label="Product categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                className={`filter-tab ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`tab-${cat.id}`}
              >
                {cat.label}
                <span className="filter-tab-count">{counts[cat.id] ?? 0}</span>
              </button>
            ))}
          </div>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="product-grid" role="tabpanel">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="discover-empty">
              <span style={{ fontSize: "40px" }}>🔍</span>
              <p>No products in this category yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="discover-cta-banner">
        <div className="discover-cta-inner">
          <h2 className="discover-cta-title">
            Have a custom project in mind?
          </h2>
          <p className="discover-cta-desc">
            We also take on bespoke design and development projects. Let&apos;s
            build something world-class together.
          </p>
          <Link href="/#contact" className="discover-cta-btn">
            Start a Project
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
