// app/lesson/Table_æ/page.tsx
import type { Metadata } from "next";
import EcoCardsApp from "@/components/EcoCardsApp";

export const metadata: Metadata = {
  title: "Æ Vowel Table",
  description:
    "Learn English words containing the 'æ' vowel sound using an interactive table and Eco Cards flashcards with pronunciation.",
  alternates: { canonical: "/lesson/Table_æ" },
  openGraph: {
    title: "Æ Vowel Table | Eco Cards",
    description:
      "Learn English words containing the 'æ' vowel sound using an interactive table.",
    url: "/lesson/Table_æ",
    type: "article",
  },
};

export default function AlphabetPage() {
  return <EcoCardsApp />;
}