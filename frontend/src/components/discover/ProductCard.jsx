"use client";
import React from "react";
import Link from "next/link";

const CATEGORY_COLORS = {
  figma: { bg: "#f5f3ff", text: "#7c3aed", label: "Figma" },
  notion: { bg: "#fff7ed", text: "#c2410c", label: "Notion" },
  web: { bg: "#eff6ff", text: "#1d4ed8", label: "Web" },
};

const ProductCard = ({ product }) => {
  const cat = CATEGORY_COLORS[product.category] ?? {
    bg: "#f8fafc",
    text: "#475569",
    label: product.category,
  };

  return (
    <Link
      href={`/discover/${product.slug}`}
      className="product-card"
      aria-label={`View ${product.title}`}
    >
      {/* Thumbnail */}
      <div className="product-card-thumb">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-card-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/600x400/f1f5f9/64748b?text=${encodeURIComponent(product.title)}`;
          }}
        />
        {/* Category badge overlay */}
        <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "8px" }}>
          {product.ctaHref && product.ctaHref !== "#" && (
            <span
              className="product-badge"
              style={{ background: "#dcfce7", color: "#166534" }}
            >
              Live Now
            </span>
          )}
          <span
            className="product-badge"
            style={{ background: cat.bg, color: cat.text }}
          >
            {cat.label}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="product-card-body">
        <div className="product-card-meta">
          <h3 className="product-card-title">{product.title}</h3>
          <span className="product-price">{product.price}</span>
        </div>
        <p className="product-card-desc">{product.shortDesc}</p>

        {/* Tags */}
        <div className="product-card-tags">
          {product.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="product-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA row */}
        <div className="product-card-cta">
          <span className="product-card-cta-link">
            View Details
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path
                d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
