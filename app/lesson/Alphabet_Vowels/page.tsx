// app/lesson/Alphabet_Vowels/page.tsx
import type { Metadata } from "next";
import EcoCardsApp from "@/components/EcoCardsApp";

export const metadata: Metadata = {
  title: "English Vowels Flashcards",
  description:
    "Master the English vowels (A, E, I, O, U) with interactive Eco Cards flashcards. Practice pronunciation and example words.",
  alternates: { canonical: "/lesson/Alphabet_Vowels" },
  openGraph: {
    title: "English Vowels Flashcards | Eco Cards",
    description:
      "Master the English vowels with interactive flashcards and pronunciation.",
    url: "/lesson/Alphabet_Vowels",
    type: "article",
  },
};

export default function AlphabetPage() {
  return <EcoCardsApp />;
}