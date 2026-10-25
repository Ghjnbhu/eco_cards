import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com'; // Replace with your domain

  // List your important pages here. 
  // You likely need to add the lesson routes from your tree.json
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/lesson/Alphabet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // ... add other lesson paths
  ];
}