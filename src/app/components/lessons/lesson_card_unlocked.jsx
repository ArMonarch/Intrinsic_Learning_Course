import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { firaCode } from "@/app/layout";
import { Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export function LessonCard(props) {
  const [isActive, setActive] = useState(false);

  // const [lessonProgress, setProgress] = useState([
  //   { unit1: 0, unit2: 0, unit3: 0 },
  //   { unit1: 0, unit2: 0, unit3: 0 },
  //   { unit1: 0, unit2: 0, unit3: 0 },
  // ]);

  // function updateProgress(index, key, score) {
  //   setProgress((lessonProgress) => {
  //     // Create a new array to avoid mutating the state directly
  //     const newLessonProgress = [...lessonProgress];

  //     // Update the score for the specified unit of the specified lesson
  //     newLessonProgress[index][key] = score;
  //     console.log(lessonProgress);
  //     return newLessonProgress;
  //   });
  // }

  const showLesson = () => {
    console.log(isActive);
    return isActive ? setActive(false) : setActive(true);
  };

  return (
    <Card
      className={
        "border-8 border-border transition-all duration-500 max-h-[390px]"
      }
    >
      {/* <Button onClick={() => updateProgress(1, "unit2", 5)}>test</Button> */}
      <CardHeader className="pt-4 group">
        {props.connectorAlign == "right" ? (
          <div className="relative ml-auto translate-x-6 translate-y-3 ">
            <Button
              asChild
              variant="outline hover:bg-border"
              className="absolute z-50 rounded-r-full h-[70px] w-[70px] bg-border animate-wiggle"
            >
              <Unlock />
            </Button>
          </div>
        ) : props.connectorAlign == "left" ? (
          <div className="relative mr-auto -translate-x-24 translate-y-3 ">
            <Button
              asChild
              variant="outline hover:bg-border"
              className="absolute rounded-l-full h-[70px] w-[70px] bg-border"
            >
              <Lock className="group-hover:animate-shake" />
            </Button>
          </div>
        ) : null}

        <CardTitle className="group text-center font-firacode tracking-wide flex">
          <Button
            onClick={showLesson}
            variant="outline"
            className="text-3xl font-semibold flex-grow p-10"
          >
            {props.title}
          </Button>
        </CardTitle>
      </CardHeader>

      <div
        className={`${
          isActive ? "max-h-[400px] " : "max-h-0"
        } transition-all overflow-hidden duration-500 `}
      >
        <Card className="lesson-card">
          <Link className="block flex-grow p-5 " href="">
            Lesson 1
          </Link>
          <div className="m-1 border-2 rounded-full p-3">
            {/* {if previous lesson unlocked, then available, else unavailable} */}
            <Lock />
          </div>
        </Card>

        <Card className="lesson-card">
          <Link className="block flex-grow p-5 " href="">
            Lesson 2
          </Link>
          <div className="m-1 border-2 rounded-full p-3">
            {/* {if previous lesson unlocked, then available, else unavailable} */}
            <Lock />
          </div>
        </Card>

        <Card className="lesson-card mb-10">
          <Link className="block flex-grow p-5 " href="">
            Lesson 3
          </Link>
          <div className="m-1 border-2 rounded-full p-3">
            {/* {if previous lesson unlocked, then available, else unavailable} */}
            <Lock />
          </div>
        </Card>
      </div>
    </Card>
  );
}
