// app/robots.ts
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecocards-brown.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        // Do NOT disallow /_next/ — Googlebot needs it to render your pages.
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}