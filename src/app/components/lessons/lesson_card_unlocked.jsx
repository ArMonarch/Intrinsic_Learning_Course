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
        className="text-3xl group font-semibold flex-grow p-10 m-0 hover:scale-105 transition-transform duration-300"
      >
        <div className="group-hover:heading-gradient transition- duration-300">
          {props.courseTitle}{" "}
        </div>
      </Button>
    );
  };

  return (
    <Card
      className={
        "border-8 border-border transition-all duration-500 max-h-[390px]"
      }
    >
      {/* <Button onClick={() => updateProgress(1, "unit2", 5)}>test</Button> */}
      <CardHeader className="pt-4 group">
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
                href={`/courses/${props.courseTitle
                  .toLowerCase()
                  .replace(/ /g, "")}/${lesson.unit
                  .toLowerCase()
                  .replace(/ /g, "")}?lessonId=${lesson.id}`}
              >
                {lesson.unit}
              </Link>
            </Card>
          );
        })}
      </div>
    </Card>
  );
}
