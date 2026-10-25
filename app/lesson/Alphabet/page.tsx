// app/lesson/Alphabet/page.tsx
import type { Metadata } from "next";
import EcoCardsApp from "@/components/EcoCardsApp";

export const metadata: Metadata = {
  title: "English Alphabet Flashcards",
  description:
    "Learn the English alphabet with interactive Eco Cards flashcards. Practice all 26 letters with pronunciation and example words.",
  alternates: { canonical: "/lesson/Alphabet" },
  openGraph: {
    title: "English Alphabet Flashcards | Eco Cards",
    description:
      "Learn the English alphabet with interactive flashcards and pronunciation.",
    url: "/lesson/Alphabet",
    type: "article",
  },
};

export default function AlphabetPage() {
  return (
    <EcoCardsApp
      lessonFile="/lessons/Alphabet.json"
      lessonTitle="English Alphabet"
    />
  );
}