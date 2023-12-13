import Link from "next/link";
import { LessonCard } from "../components/lessons/lesson_card_unlocked";
import { ProfileMenu } from "../components/navbar/profileMenu";

export const metadata = {
  title: "List of Courses",
};

export default function courses() {
  return (
    <main className="grid grid-cols-2 mx-40 my-8 gap-8 gap-x-32 justify-items-center">
      <LessonCard
        title="Intro to Python"
        connectorAlign="right"
        isLocked={false}
      />

      <div className="place-self-center">insert angular connector</div>
      <div className="place-self-center">insert angular connector</div>
      <LessonCard
        title="Intro to Html/CSS"
        connectorAlign="left"
        isLocked={true}
      />

      <LessonCard title="Coming Soon" connectorAlign="right" isLocked={true} />
    </main>
  );
}
