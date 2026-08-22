"use client";
import React from "react";

/**
 * Client wrapper for images with fallback onError handling.
 * Kept in a separate file so the parent Server Component stays pure.
 */
export function FallbackImage({ src, alt, className, fallbackText, style }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://placehold.co/800x500/f1f5f9/64748b?text=${encodeURIComponent(fallbackText || alt)}`;
      }}
    />
  );
}

export function FallbackThumb({ src, alt, fallbackText, index }) {
  return (
    <img
      src={src}
      alt={alt}
      className="detail-thumb"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://placehold.co/160x100/f1f5f9/64748b?text=Preview+${index + 1}`;
      }}
    />
  );
}
