export default function robots() {
  return {
    rules: [
      {
        // General Search Engines and Crawlers
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/', '/erp/'],
      },
      {
        // AI Search and Discovery Bots
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Google-Extended',
          'ClaudeBot',
          'Applebot-Extended',
          'PerplexityBot',
          'cohere-ai',
          'OAI-SearchBot'
        ],
        allow: '/',
        disallow: ['/api/', '/private/', '/erp/'],
      }
    ],
    sitemap: 'https://mommentx.space/sitemap.xml',
    host: 'https://mommentx.space',
  };
}

