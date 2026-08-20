import "./globals.css";
import React from 'react';

export const metadata = {
  metadataBase: new URL('https://mommentx.space'),
  title: {
    default: "MommentX | Global Custom Software & Web Development Company",
    template: "%s | MommentX"
  },
  description: "MommentX is a top-tier software development agency delivering scalable web applications, enterprise ERP solutions, and AI-driven platforms for businesses worldwide.",
  keywords: ["Custom Software Development", "Web Application Development", "Enterprise ERP Solutions", "AI Software Solutions", "Global Software Agency", "SaaS Development", "Business Automation", "Hire Dedicated Developers"],
  openGraph: {
    title: "MommentX | Global Custom Software & Web Development",
    description: "Delivering scalable web apps, enterprise ERPs, and AI-driven platforms worldwide.",
    url: "https://mommentx.space",
    siteName: "MommentX",
    images: [
      {
        url: "/mx/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "MommentX Logo",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MommentX | Global Custom Software Development",
    description: "Delivering scalable web apps, enterprise ERPs, and AI-driven platforms worldwide.",
    images: ["/mx/web-app-manifest-512x512.png"],
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
