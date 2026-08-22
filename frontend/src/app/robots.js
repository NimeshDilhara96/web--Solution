export default function robots() {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
    ],
    sitemap: 'https://mommentx.space/sitemap.xml',
    host: 'https://mommentx.space',
  };
}

