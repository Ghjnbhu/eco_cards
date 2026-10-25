// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ecocards-brown.vercel.app/"), // ← замените на ваш домен
  title: {
    default: "Eco Cards — English Vocabulary Study App",
    template: "%s | Eco Cards",
  },
  description:
    "Learn English vocabulary with Eco Cards — interactive flashcards, lessons, and tables for alphabet, vowels, digits, and everyday kitchen words.",
  // icons НЕ указываем — Next.js возьмет app/favicon.ico автоматически
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ecocards-brown.vercel.app/",
    siteName: "Eco Cards",
    title: "Eco Cards — English Vocabulary Study App",
    description:
      "Interactive flashcards and lessons to learn English vocabulary.",
    images: [
      {
        url: "/og-image.png", // создайте этот файл в public/
        width: 1200,
        height: 630,
        alt: "Eco Cards — English Vocabulary Study App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Cards — English Vocabulary Study App",
    description:
      "Interactive flashcards and lessons to learn English vocabulary.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GcL92mLSs_lIP4H7rl6oh7lmfdEmcu_MamTJCS6CCNA", // ✅ вместо other
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#d5cdcd", // добавьте реальный цвет темы
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}