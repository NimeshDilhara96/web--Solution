/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import React from "react";

export const metadata = {
  metadataBase: new URL("https://mommentx.space"),
  title: {
    default: "MommentX | Agile Startup Studio & MVP Development",
    template: "%s | MommentX",
  },
  description:
    "MommentX is an agile startup studio that builds scalable MVPs, AI solutions, and SaaS platforms. We help founders go from idea to launch in weeks.",
  keywords: [
    "Startup Studio",
    "MVP Development",
    "SaaS Platform Development",
    "AI Prototyping",
    "Next.js Development Agency",
    "React Development",
    "Founders",
    "Product Studio",
    "Agile Development",
    "Web Application Development",
    "Tech Co-founder Alternative",
    "Figma UI Kit",
    "Notion Templates",
  ],
  authors: [{ name: "MommentX", url: "https://mommentx.space" }],
  creator: "MommentX",
  publisher: "MommentX",
  verification: {
    google: "MPKtElHbSG4pCpKJqhAXIDSqeu1FfaagHWVTPWr4daM",
  },
  alternates: {
    canonical: "https://mommentx.space",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MommentX | Agile Startup Studio",
    description:
      "Fast MVP development, SaaS platforms, and AI integrations built for ambitious founders.",
    url: "https://mommentx.space",
    siteName: "MommentX",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "MommentX — Agile Startup Studio",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MommentX | Agile Startup Studio",
    description:
      "Fast MVP development, SaaS platforms, and AI integrations built for ambitious founders.",
    images: ["/web-app-manifest-512x512.png"],
    creator: "@mommentx",
    site: "@mommentx",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/blanka" rel="stylesheet" />
      </head>
      <body
        style={{ background: "#ffffff", color: "#0a0d14", overflowX: "hidden" }}
      >
        {children}
      </body>
    </html>
  );
}
