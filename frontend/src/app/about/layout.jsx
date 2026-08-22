import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = {
  title: "About Us | Why Choose MommentX for Your Software Needs",
  description:
    "Learn about MommentX, our mission, our global team, and why you should choose us as your trusted software development partner.",
  keywords: [
    "About MommentX",
    "Why Choose Us",
    "Software Development Agency",
    "Custom Software Team",
    "Global IT Company",
    "Hire Developers",
    "Enterprise Software Partner"
  ],
  alternates: {
    canonical: "https://mommentx.space/about",
  },
  openGraph: {
    title: "About MommentX | Your Global Software Partner",
    description: "Discover why startups and enterprises choose MommentX for reliable, scalable, and innovative software solutions.",
    url: "https://mommentx.space/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MommentX",
    description: "Your trusted partner for custom software development.",
  },
};

export default function AboutLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About MommentX",
    "description": "Learn about MommentX, our mission, and why you should choose us.",
    "url": "https://mommentx.space/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "MommentX",
      "url": "https://mommentx.space",
      "logo": "https://mommentx.space/mx/web-app-manifest-512x512.png"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
