// app/lesson/MyEnglishFlashcards/page.tsx
import type { Metadata } from "next";
import EcoCardsApp from "@/components/EcoCardsApp";

export const metadata: Metadata = {
  title: "My English Flashcards",
  description:
    "A personalized collection of English vocabulary flashcards. Review words, practice pronunciation, and track your progress with Eco Cards.",
  alternates: { canonical: "/lesson/MyEnglishFlashcards" },
  openGraph: {
    title: "My English Flashcards | Eco Cards",
    description:
      "A personalized collection of English vocabulary flashcards for review.",
    url: "/lesson/MyEnglishFlashcards",
    type: "article",
  },
};

export default function AlphabetPage() {
  return <EcoCardsApp />;
}