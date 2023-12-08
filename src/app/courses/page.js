"use client";

import Link from "next/link";

import { LessonCard } from "../components/lessons/lesson_card_unlocked";

export const metadata = {
  title: "List of Courses",
};

export default function courses() {
  return (
    <main className="grid grid-cols-2 mx-40 my-8 gap-8 gap-x-32 justify-items-center">
      <LessonCard title="Intro to Python" connectorAlign="right" />

      <div className="place-self-center">insert angular connector</div>
      <div className="place-self-center">insert angular connector</div>
      <LessonCard title="Intro to Html/CSS" connectorAlign="left" />

      <LessonCard title="Coming Soon" connectorAlign="right" />
    </main>
  );
}
