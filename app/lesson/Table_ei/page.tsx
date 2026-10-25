// app/lesson/Table_ei/page.tsx
import type { Metadata } from "next";
import EcoCardsApp from "@/components/EcoCardsApp";

export const metadata: Metadata = {
  title: "EI Vowel Combination Table",
  description:
    "Learn English words with the 'ei' vowel combination using an interactive table and Eco Cards flashcards with pronunciation.",
  alternates: { canonical: "/lesson/Table_ei" },
  openGraph: {
    title: "EI Vowel Combination Table | Eco Cards",
    description:
      "Learn English words with the 'ei' vowel combination using an interactive table.",
    url: "/lesson/Table_ei",
    type: "article",
  },
};

export default function TableEiPage() {
  return (
    <EcoCardsApp
      lessonFile="/lessons/Table_ei.json"
      lessonTitle="EI Vowel Table"
    />
  );
}