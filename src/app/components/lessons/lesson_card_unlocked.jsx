"use client";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "../ui/card";
import { useState } from "react";
import { firaCode } from "@/app/layout";
import { Lock } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function LessonCard(props) {
  const [isActive, setActive] = useState(false);

  const showLesson = () => {
    console.log(isActive);
    return isActive ? setActive(false) : setActive(true);
  };
  return (
    <Card
      className={`border-8 border-border transition-all duration-500 max-h-[390px] ${props.alignment}`}
    >
      <CardHeader>
        <CardTitle className="text-center font-firacode tracking-wide flex">
          <Button
            onClick={showLesson}
            variant="outline"
            className="text-3xl font-semibold flex-grow p-10"
          >
            {props.title}
          </Button>
        </CardTitle>
      </CardHeader>

      {/* {isActive ? ( */}
      <div
        className={`${
          isActive ? "max-h-[400px] " : "max-h-0"
        } overflow-hidden transition-all duration-500 `}
      >
        <Card className="lesson-card">
          <Link className="block flex-grow p-5 " href="/courses/into-to-python/lesson1">
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
      {/* ) : null} */}
    </Card>
  );
}
