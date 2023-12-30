"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { firaCode } from "@/app/layout";
import { Lock, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export function LessonCard(props) {
  const [isActive, setActive] = useState(false);
  const [lessonList, setLessonList] = useState([]);
  useEffect(() => {
    async function getLessonList() {
      try {
        const res = await fetch(
          `http://localhost:8081/courses/listCourseUnits/${props.courseId}`,
          { cache: "no-store" }
        );
        const Data = await res.json();
        if (!Data.error) {
          setLessonList(Data.data);
        } else {
          throw new Error(Data.error);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getLessonList();
  }, [props.courseId]);

  const showLesson = () => {
    console.log(isActive);
    return isActive ? setActive(false) : setActive(true);
  };

  const LessonButton = ({ isLocked }) => {
    return (
      <Button
        disabled={isLocked}
        onClick={showLesson}
        variant="outline"
        className="text-3xl font-semibold flex-grow p-10 hover:scale-105 transition-transform duration-300"
      >
        {props.courseTitle}
      </Button>
    );
  };

  const LockIcon = ({ connectorAlign, isLocked }) => {
    return connectorAlign == "right" ? (
      <div className="relative ml-auto translate-x-6 translate-y-3 ">
        <Button
          asChild
          variant="outline hover:bg-border"
          className="absolute z-0 rounded-r-full h-[70px] w-[70px] bg-border"
        >
          {isLocked ? <Lock /> : <Unlock />}
        </Button>
      </div>
    ) : connectorAlign == "left" ? (
      <div className="relative mr-auto -translate-x-24 translate-y-3 ">
        <Button
          asChild
          variant="outline hover:bg-border"
          className="absolute z-0 rounded-l-full h-[70px] w-[70px] bg-border group-hover:animate-shake"
        >
          {isLocked ? <Lock /> : <Unlock />}
        </Button>
      </div>
    ) : null;
  };

  return (
    <Card
      className={
        "border-8 border-border transition-all duration-500 max-h-[390px]"
      }
    >
      {/* <Button onClick={() => updateProgress(1, "unit2", 5)}>test</Button> */}
      <CardHeader className="pt-4 group">
        <LockIcon
          connectorAlign={props.connectorAlign}
          isLocked={props.isLocked}
        />
        <CardTitle className="group z-0 text-center font-firacode tracking-wide flex">
          <LessonButton title={props.title} isLocked={props.isLocked} />
        </CardTitle>
      </CardHeader>

      <div
        className={`${
          isActive ? "max-h-[400px] " : "max-h-0"
        } overflow-hidden transition-all duration-500 `}
      >
        {/* {lessonList.map((lesson,index) => {return (<div key={index}>{lesson.unit}</div>)})} */}
        {lessonList.map((lesson, index) => {
          return (
            <Card className="lesson-card" key={index}>
              <Link
                className="block flex-grow p-5 "
                href={`/courses/${props.courseTitle.toLowerCase().replace(/ /g, "")}/${lesson.unit.toLowerCase().replace(/ /g, "")}?lessonId=${lesson.id}`}
              >
                {lesson.unit}
              </Link>
              <div className="m-1 border-2 rounded-full p-3">
                {/* {if previous lesson unlocked, then available, else unavailable} */}
                <Lock />
              </div>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}
