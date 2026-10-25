// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecocards-brown.vercel.app";

const lessons: { slug: string; lastModified?: Date }[] = [
  { slug: "Alphabet" },
  { slug: "Alphabet_Vowels" },
  { slug: "Digits_0-10" },
  { slug: "KitchenCards_20" },
  { slug: "MyEnglishFlashcards" },
  { slug: "MyEnglishLessons" },
  { slug: "Table_ei" },
  { slug: "Table_æ" }, // ← will be encoded below
];

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  return [
    {
      url: BASE_URL,
      lastModified: buildDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...lessons.map(({ slug, lastModified }) => ({
      // encodeURIComponent → "Table_æ" becomes "Table_%C3%A6"
      url: `${BASE_URL}/lesson/${encodeURIComponent(slug)}`,
      lastModified: lastModified ?? buildDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}