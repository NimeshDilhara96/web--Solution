import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export const metadata = {
  title: "About Us | An Agile Startup Studio | MommentX",
  description:
    "We are founders building for founders. Learn about MommentX, our mission to help startups launch fast, and our agile development process.",
  keywords: [
    "About MommentX",
    "Agile Startup Studio",
    "MVP Builders",
    "Founders building for founders",
    "Fast SaaS Development",
    "Tech Co-founder Alternative",
    "Hire Developers",
  ],
  alternates: {
    canonical: "https://mommentx.space/about",
  },
  openGraph: {
    title: "About MommentX | Agile Startup Studio",
    description:
      "Discover why ambitious founders choose MommentX for fast, scalable MVP development.",
    url: "https://mommentx.space/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MommentX",
    description:
      "An agile startup studio building fast, scalable MVPs for founders.",
  },
};

export default function AboutLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About MommentX",
    description:
      "Learn about MommentX, our mission, and why you should choose us.",
    url: "https://mommentx.space/about",
    mainEntity: {
      "@type": "Organization",
      name: "MommentX",
      url: "https://mommentx.space",
      logo: "https://mommentx.space/mommentx-logo-transparent.svg",
    },
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
