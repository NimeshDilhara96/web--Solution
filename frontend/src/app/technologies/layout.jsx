import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = {
  title: "Technologies & Expertise | Reliable, Scalable & Secure Apps | MommentX",
  description:
    "We use cutting-edge, reliable, scalable, and secure technologies to build modern applications. Our stack includes React, Next.js, Node.js, Python, AWS, and more.",
  keywords: [
    "Technology Stack",
    "Scalable App Development",
    "Secure Software Solutions",
    "Next.js Development",
    "Node.js Backend",
    "React Native Mobile Apps",
    "AWS Cloud Infrastructure",
    "Enterprise Software Stack",
  ],
  alternates: {
    canonical: "https://mommentx.space/technologies",
  },
  openGraph: {
    title: "Technologies & Expertise | MommentX",
    description: "Discover the reliable, scalable, and secure technologies we use to build world-class web and mobile applications.",
    url: "https://mommentx.space/technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technologies & Expertise | MommentX",
    description: "Reliable, Scalable & Secure App Technologies.",
  },
};

export default function TechnologiesLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "name": "MommentX Technologies & Expertise",
    "description": "Technologies we use to build reliable, scalable, and secure applications.",
    "url": "https://mommentx.space/technologies",
    "publisher": {
      "@type": "Organization",
      "name": "MommentX",
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
