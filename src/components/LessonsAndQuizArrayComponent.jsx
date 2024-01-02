"use client";

import QuizComponent from "./QuizComponent";
import LessonComponent from "./LessonComponent";
import { Button } from "./ui/button";
import { useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import userAchievements from "@/lib/userAchivementsStore";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { useRouter } from "next/router";

export function LessonAndQuizComponent({ LessonId, Lessons, LessonName }) {
  const { user } = UserAuth();
  const ComponentValues = Lessons;
  const [comp, setComp] = useState(false);
  const [quizC, setquzC] = useState(false);
  const [currentIndex, changeIndex] = useState(0);
  const [currentComponentValue, changeComponentValue] = useState(
    ComponentValues[0]
  );

  const updateAchievements = userAchievements(
    (state) => state.updateAchievement
  );
  //console.log(quizC);

  async function handelNextValue() {
    if (currentIndex < ComponentValues.length - 1) {
      changeComponentValue(ComponentValues[currentIndex + 1]);
      changeIndex(currentIndex + 1);
    } else {
      const completed = {
        userId: user.uid,
        unitId: LessonId,
      };
      const unitComplete = await fetch(
        `http://localhost:8081/users/userCompletesUnit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(completed),
        }
      );

      const getUserAchievements = await fetch(
        `http://localhost:8081/users/lessonAchivements?uid=${user.uid}`,
        { method: "GET", cache: "no-store" }
      );
      const Data = await unitComplete.json();
      const achievements = await getUserAchievements.json();
      console.log(achievements);
      updateAchievements(achievements.data);

      toast(`Achivement Unlocked: Completed Unit ${LessonName}`);

      console.log("Success of chapter complete");
    }
    if (currentIndex == ComponentValues.length - 1) {
      setComp(true);
    }
  }

  function handelPreviousValue() {
    if (!currentIndex == 0) {
      changeComponentValue(ComponentValues[currentIndex - 1]);
      changeIndex(currentIndex - 1);
    }
  }

  const {
    ComponentType,
    MainQuestion,
    Options,
    Answer,
    Title,
    Text,
    ListStatus,
    ListValues,
    Code,
    Examples,
  } = currentComponentValue;
  return (
    <div className="flex flex-col h-full">
      <Toaster />
      <div className="flex flex-col h-full items-center">
        <div className="flex items-center min-h-blockmode px-10">
          <div className="flex flex-col bg-muted p-10 border-8 border-border rounded-2xl shadow-primary">
            {/* {ComponentType == "Quiz" ? disableNext(true) : disableNext(false)} */}
            {ComponentType == "Quiz" ? (
              <div>
                <QuizComponent
                  MainQuestion={MainQuestion}
                  SubQuestion={Code}
                  Options={Options}
                  Answer={Answer}
                  nextLesson={handelNextValue}
                  // Toast={toast}
                  // quizComplete={quizC}
                  setquizC={setquzC}
                />
              </div>
            ) : (
              <div>
                <LessonComponent
                  Title={Title}
                  Texts={Text}
                  ListStatus={ListStatus}
                  ListValues={ListValues}
                  code={Code}
                  Examples={Examples}
                />
              </div>
            )}
            <Separator className="mt-8" />
            <div className=" mt-2 flex justify-between ">
              <Button
                id="submitChange"
                className=""
                onClick={handelPreviousValue}
              >
                Previous
              </Button>
              {!comp ? (
                <Button className="" onClick={handelNextValue}>
                  Continue
                </Button>
              ) : (
                <Link href="/courses">
                  <Button className="">Complete</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
