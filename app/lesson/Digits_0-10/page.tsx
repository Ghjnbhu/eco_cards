// app/lesson/Digits_0-10/page.tsx
import type { Metadata } from "next";
import EcoCardsApp from "@/components/EcoCardsApp";

export const metadata: Metadata = {
  title: "English Numbers 0–10 Flashcards",
  description:
    "Learn English numbers from 0 to 10 with interactive Eco Cards flashcards. Practice counting, spelling, and pronunciation.",
  alternates: { canonical: "/lesson/Digits_0-10" },
  openGraph: {
    title: "English Numbers 0–10 Flashcards | Eco Cards",
    description:
      "Learn English numbers 0–10 with interactive flashcards and pronunciation.",
    url: "/lesson/Digits_0-10",
    type: "article",
  },
};

export default function DigitsPage() {
  return (
    <EcoCardsApp
      lessonFile="/lessons/Digits_0-10.json"
      lessonTitle="Numbers 0–10"
    />
  );
}