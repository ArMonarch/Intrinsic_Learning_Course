import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardHeader,
} from "../ui/card";
import { useState } from "react";

import { Lock } from "lucide-react";
import { Button } from "../ui/button";

export function LessonCard(props) {
  const [isActive, setActive] = useState(false);

  const showLesson = () => {
    console.log(isActive);
    return isActive ? setActive(false) : setActive(true);
  };
  return (
    <Card className=" border-8 border-border w-5/12 mx-auto mt-5">
      <CardHeader>
        <CardTitle className="text-center font-bold tracking-wide flex">
          <Button
            onClick={showLesson}
            variant="outline"
            className="text-3xl font-semibold flex-grow p-10"
          >
            {props.title}
          </Button>
        </CardTitle>
      </CardHeader>

      <div>
        <Card className="lesson-card">
          <a className="block flex-grow p-5 hover:" href="">
            Lesson 1 Link //add link to lesson here
          </a>
          <div className="m-1 border-2 rounded-full p-4">
            {/* {if previous lesson unlocked, then available, else unavailable} */}
            <Lock />
          </div>
        </Card>

        <Card className="lesson-card">
          <a className="block flex-grow p-5 hover:" href="">
            Lesson 2 Link //add link to lesson here
          </a>
          <div className="m-1 border-2 rounded-full p-4">
            {/* {if previous lesson unlocked, then available, else unavailable} */}
            <Lock />
          </div>
        </Card>

        <Card className="lesson-card">
          <a className="block flex-grow p-5 hover:" href="">
            Lesson 3 Link //add link to lesson here
          </a>
          <div className="m-1 border-2 rounded-full p-4">
            {/* {if previous lesson unlocked, then available, else unavailable} */}
            <Lock />
          </div>
        </Card>
      </div>
    </Card>
  );
}
