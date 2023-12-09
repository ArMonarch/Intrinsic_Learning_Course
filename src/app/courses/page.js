import { LessonCard } from "../components/lessons/lesson_card_unlocked";

export const metadata = {
  title: "List of Courses",
};

export default function courses() {
  return (
    <main className="grid grid-cols-2 mx-12 my-8 gap-8 gap-x-32">
      <LessonCard title="Intro to Python" alignment="justify-self-end" />

      <div className="place-self-center">insert angular connector</div>
      <div className="place-self-center">insert angular connector</div>
      <LessonCard title="Intro to Html/CSS" alignment="justify-self-start" />

      <LessonCard title="Coming Soon" alignment="justify-self-end" />
    </main>
  );
}
