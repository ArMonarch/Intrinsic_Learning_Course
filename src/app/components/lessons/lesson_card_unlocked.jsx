"use client";
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "../ui/card";
import { useState, useEffect } from "react";
import { Lock } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function LessonCard(props) {

 const [lessonList, setLessonList] = useState([]); 
  useEffect(() => {
    async function getLessonList(){
      try{
        const res = await fetch(`http://localhost:8081/courses/listCourseUnits/${props.courseId}`, {cache:'no-store'})
        const Data = await res.json()
        if (!Data.error){setLessonList(Data.data)}
        else {throw new Error(Data.error)}
      }catch(error){console.log(error)}
    }
    getLessonList()
  },[props.courseId]);

  const [isActive, setActive] = useState(false);

  const showLesson = () => {
    // console.log(isActive);
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
            {props.courseTitle}
          </Button>
        </CardTitle>
      </CardHeader>
      <div
        className={`${
          isActive ? "max-h-[400px] " : "max-h-0"
        } overflow-hidden transition-all duration-500 `}
      >
        {/* {lessonList.map((lesson,index) => {return (<div key={index}>{lesson.unit}</div>)})} */}
        {lessonList.map((lesson,index) => {
          return (
            <Card className="lesson-card" key={index}>
          <Link className="block flex-grow p-5 " href={`/courses/${props.courseTitle.toLowerCase().replace(/ /g,"")}/${lesson.unit.toLowerCase().replace(/ /g,"")}?courseId=${props.courseId}&lessonName=${lesson.unit}`}>
            {lesson.unit}
          </Link>
          <div className="m-1 border-2 rounded-full p-3">
            {/* {if previous lesson unlocked, then available, else unavailable} */}
            <Lock />
          </div>
        </Card>
          )
        })}
      </div>
      {/* ) : null} */}
    </Card>
  );
}