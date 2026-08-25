import React from 'react';
import Contact from '../../components/contact';

export const metadata = {
  title: "Contact Us | Start Your Project | MommentX",
  description: "Get in touch with MommentX to build your startup's MVP. Book a discovery call with our founders to discuss custom web, AI, or SaaS solutions.",
  alternates: {
    canonical: "https://mommentx.space/contact",
  },
  openGraph: {
    title: "Contact MommentX | Start Your Project",
    description: "Ready to launch your MVP? Book a discovery call with our founders today.",
    url: "https://mommentx.space/contact",
  }
};

const ContactPage = () => {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <Contact />
      </div>
      
    </>
  );
};

export default ContactPage;
