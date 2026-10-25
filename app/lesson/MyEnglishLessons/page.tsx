// app/lesson/MyEnglishLessons/page.tsx
import type { Metadata } from "next";
import EcoCardsApp from "@/components/EcoCardsApp";

export const metadata: Metadata = {
  title: "My English Lessons",
  description:
    "A curated set of English lessons with flashcards, examples, and pronunciation practice. Build your vocabulary step by step with Eco Cards.",
  alternates: { canonical: "/lesson/MyEnglishLessons" },
  openGraph: {
    title: "My English Lessons | Eco Cards",
    description:
      "A curated set of English lessons with flashcards and pronunciation practice.",
    url: "/lesson/MyEnglishLessons",
    type: "article",
  },
};

export default function MyEnglishLessonsPage() {
  return (
    <EcoCardsApp
      lessonFile="/lessons/MyEnglishLessons.json"
      lessonTitle="My English Lessons"
    />
  );
}