// app/lesson/KitchenCards_20/page.tsx
import type { Metadata } from "next";
import EcoCardsApp from "@/components/EcoCardsApp";

export const metadata: Metadata = {
  title: "Kitchen Vocabulary Flashcards",
  description:
    "Learn 20 essential kitchen vocabulary words in English with interactive Eco Cards flashcards, pronunciation, and example sentences.",
  alternates: { canonical: "/lesson/KitchenCards_20" },
  openGraph: {
    title: "Kitchen Vocabulary Flashcards | Eco Cards",
    description:
      "Learn 20 essential kitchen words in English with interactive flashcards.",
    url: "/lesson/KitchenCards_20",
    type: "article",
  },
};

export default function AlphabetPage() {
  return <EcoCardsApp />;
}