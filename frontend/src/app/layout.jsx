import "./globals.css";
import React from 'react';

export const metadata = {
  metadataBase: new URL('https://mommentx.space'),
  title: {
    default: "MommentX | Global Custom Software & Web Development Company",
    template: "%s | MommentX"
  },
  description: "MommentX is a top-tier software development agency delivering scalable web applications, enterprise ERP solutions, AI-driven platforms, and premium digital products for businesses worldwide.",
  keywords: [
    // Core services
    "Custom Software Development",
    "Web Application Development",
    "Enterprise ERP Solutions",
    "AI Software Solutions",
    "Global Software Agency",
    "SaaS Development",
    "Business Automation",
    "Hire Dedicated Developers",
    // Digital products (new)
    "Figma UI Kit",
    "Notion Templates",
    "SaaS Dashboard Template",
    "Next.js Starter Kit",
    "Design System",
    "Digital Products",
    "UI Kit Download",
    // International targeting
    "Software Development Company",
    "Custom Web Development Agency",
    "Offshore Software Development",
    "Remote Software Team",
    "Full Stack Development Agency",
    "React Next.js Developer",
    "Software Outsourcing",
  ],
  authors: [{ name: "MommentX", url: "https://mommentx.space" }],
  creator: "MommentX",
  publisher: "MommentX",
  alternates: {
    canonical: "https://mommentx.space",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "MommentX | Global Custom Software & Web Development",
    description: "World-class custom software, SaaS platforms, AI solutions, enterprise ERPs, and premium digital products — built for global businesses by MommentX.",
    url: "https://mommentx.space",
    siteName: "MommentX",
    images: [
      {
        url: "/mx/web-app-manifest-512x512.png",
        width: 1200,
        height: 630,
        alt: "MommentX — Global Custom Software & Digital Products Studio",
        type: "image/png",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MommentX | World-Class Software & Digital Products",
    description: "Custom software, SaaS platforms, AI solutions, and premium Figma/Notion templates — built for global teams by MommentX.",
    images: ["/mx/web-app-manifest-512x512.png"],
    creator: "@mommentx",
    site: "@mommentx",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
  category: "technology",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.cdnfonts.com/css/blanka" rel="stylesheet" />
      </head>
      <body style={{ background: '#ffffff', color: '#0a0d14', overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
