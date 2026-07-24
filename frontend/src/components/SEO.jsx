import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, url, schema }) => {
  const siteName = "MommentX";
  const defaultTitle = "MommentX – Custom Software & SaaS Development Company";
  const defaultDescription = "MommentX is a global custom software development company. We specialize in scalable web application development, AI software solutions, ERP software development, and business automation solutions.";
  const defaultKeywords = "Custom software development company, SaaS development company, Web application development, ERP software development, Business automation solutions, AI software solutions";
  const baseUrl = "https://mommentx.space";

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{title ? `${title} | ${siteName}` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={url ? `${baseUrl}${url}` : baseUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:url" content={url ? `${baseUrl}${url}` : baseUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />

      {/* JSON-LD Structured Data for Google Rich Results */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
