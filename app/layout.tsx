// app/layout.tsx
import type { Metadata } from "next";
import "regenerator-runtime/runtime";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eco Cards",
  description: "English vocabulary study app",
  icons: { icon: "/favicon.svg" },
  other: {
    "google-site-verification": "GcL92mLSs_lIP4H7rl6oh7lmfdEmcu_MamTJCS6CCNA",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}