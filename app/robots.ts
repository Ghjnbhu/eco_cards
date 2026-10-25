import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://your-domain.com'; // Replace with your domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'], // Block API routes and Next.js internal paths
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}