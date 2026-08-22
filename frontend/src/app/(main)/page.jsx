import React from 'react';
import Hero from '../../components/hero';
import Expertise from '../../components/Expertise';
import SaasEcosystem from '../../components/SaasEcosystem';
import WhyUs from '../../components/WhyUs';
import Contact from '../../components/contact';

const homeSchema = [
  // ── Organization ──────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mommentx.space/#organization",
    "name": "MommentX",
    "legalName": "MommentX",
    "url": "https://mommentx.space/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mommentx.space/mx/favicon-96x96.png",
      "width": 96,
      "height": 96
    },
    "description": "MommentX is a global custom software development studio specializing in scalable web applications, AI software solutions, enterprise ERP systems, SaaS platforms, and premium digital products for businesses worldwide.",
    "foundingDate": "2023",
    "numberOfEmployees": { "@type": "QuantitativeValue", "value": "1-10" },
    "slogan": "World-Class Digital Products & Web Solutions",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "availableLanguage": ["English"],
        "areaServed": "Worldwide",
        "url": "https://mommentx.space/#contact"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "availableLanguage": ["English"],
        "areaServed": "Worldwide",
        "url": "https://mommentx.space/#contact"
      }
    ],
    "areaServed": {
      "@type": "GeoShape",
      "name": "Worldwide"
    },
    "knowsAbout": [
      "Custom Software Development",
      "Web Application Development",
      "SaaS Platform Development",
      "Enterprise ERP Systems",
      "AI Integration",
      "UI/UX Design",
      "Figma UI Kits",
      "Notion Templates",
      "Next.js Development",
      "React Development"
    ],
    "sameAs": [
      "https://github.com/nimeshdilhara96",
      "https://www.linkedin.com/in/nimeshdilhara"
    ]
  },
  // ── ProfessionalService ───────────────────────
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://mommentx.space/#service",
    "name": "MommentX Software Development Services",
    "url": "https://mommentx.space",
    "description": "End-to-end custom software development, SaaS platforms, AI integration, ERP systems, and digital product design for global businesses.",
    "provider": { "@id": "https://mommentx.space/#organization" },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "High-Performance Web App Development", "description": "Lightning-fast, SEO-optimised websites and web applications built on Next.js and React." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SaaS Platform Development", "description": "End-to-end SaaS products and web platforms from MVPs to enterprise-grade systems." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Enterprise ERP & CRM Systems", "description": "Custom enterprise resource planning and CRM solutions tailored to unique business operations." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Integration & Automation", "description": "Practical AI solutions that automate workflows and give businesses competitive intelligence." } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Products & UI Kits", "description": "Premium Figma UI kits, Notion templates, and web starter kits for founders and product teams." } }
      ]
    }
  },
  // ── WebSite ───────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mommentx.space/#website",
    "name": "MommentX",
    "url": "https://mommentx.space/",
    "publisher": { "@id": "https://mommentx.space/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mommentx.space/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  // ── FAQPage ───────────────────────────────────
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does MommentX offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MommentX specializes in custom software development including high-performance web applications, SaaS platform development, enterprise ERP & CRM systems, AI integration & automation, e-commerce solutions, and premium digital products like Figma UI kits and Notion templates."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with international clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, MommentX serves clients worldwide. We work remotely with startups, SMEs, and enterprises across the USA, UK, Europe, Australia, and beyond. All communication is handled in English with flexible timezone availability."
        }
      },
      {
        "@type": "Question",
        "name": "Do you develop custom ERP and CRM solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design and build tailor-made enterprise software, CRM platforms, and scalable ERP systems for businesses worldwide. Our OrderFlow ERP is a live product you can explore on our site."
        }
      },
      {
        "@type": "Question",
        "name": "How much does custom software development cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing starts from $99 for web projects, $299 for AI integrations, $399 for e-commerce, and $499 for full web applications. Enterprise ERP and CRM systems are quoted on a custom basis. Contact us for a free estimate."
        }
      },
      {
        "@type": "Question",
        "name": "What tech stack does MommentX use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily build with React, Next.js, Node.js, and MongoDB for web applications. For AI, we use Python and OpenAI APIs. Our design work is done in Figma, and we deploy on AWS, Vercel, and similar cloud platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sell Figma templates or UI kits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Visit our Discover page at mommentx.space/discover to browse premium Figma UI kits, Notion workspace templates, and Next.js starter kits crafted by the MommentX team."
        }
      }
    ]
  }
];

export const metadata = {
  title: "Top Custom Software Development Agency | MommentX",
  description: "MommentX builds world-class custom software, SaaS platforms, AI solutions, and enterprise ERP systems for global businesses. Browse premium Figma UI kits & Notion templates on our Discover page.",
  alternates: {
    canonical: "https://mommentx.space",
  },
  openGraph: {
    title: "MommentX — World-Class Custom Software & Digital Products",
    description: "Custom software, SaaS platforms, AI integration, enterprise ERP, and premium digital templates — built for international clients by MommentX.",
    url: "https://mommentx.space",
    type: "website",
  },
};


const Home = () => {
  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} 
      />
      <Hero />
      <Expertise />
      <SaasEcosystem />
      <WhyUs />
      <Contact />
    </>
  );
};

export default Home;
