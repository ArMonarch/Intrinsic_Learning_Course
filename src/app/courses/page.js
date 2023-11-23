"use client";

import Link from "next/link";
import { Navbar } from "../components/navbar/navbar";
import { LessonCard } from "../components/lessons/lesson_card_unlocked";

export const metadata = {
  title: "List of Courses",
};

export default function courses() {
  return (
    <main className="">
      <Navbar />
      <LessonCard title="Intro to Python" />
    </main>
  );
}
