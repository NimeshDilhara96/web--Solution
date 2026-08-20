import React from 'react';
import Hero from '../../components/hero';
import Expertise from '../../components/Expertise';
import SaasEcosystem from '../../components/SaasEcosystem';
import WhyUs from '../../components/WhyUs';
import Contact from '../../components/contact';

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://mommentx.space/#organization",
    "name": "MommentX",
    "url": "https://mommentx.space/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://mommentx.space/mx/favicon-96x96.png"
    },
    "description": "MommentX is a global custom software development company. We specialize in scalable web application development, AI software solutions, ERP software development, and business automation solutions.",
    "sameAs": [
      "https://github.com/nimeshdilhara96",
      "https://www.linkedin.com/in/nimeshdilhara"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://mommentx.space/#website",
    "name": "MommentX",
    "url": "https://mommentx.space/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mommentx.space/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does MommentX offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "MommentX specializes in custom software solutions including Web Application Development, AI Integration, UI/UX Design, custom Enterprise Systems, and dedicated SaaS products like our cloud ERP."
        }
      },
      {
        "@type": "Question",
        "name": "Do you develop custom ERP and CRM solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design and build tailor-made enterprise software, CRM platforms, and scalable ERP systems tailored to specific business operations worldwide."
        }
      }
    ]
  }
];

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
