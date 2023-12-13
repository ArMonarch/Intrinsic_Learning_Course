'use client';

import QuizComponent from "./QuizComponent";
import LessonComponent from "./LessonComponent";
import { Button } from "./ui/button";
import { useState } from "react";

export function LessonAndQuizComponent ({Lessons}) {

    const ComponentValues = Lessons

    const [currentIndex, changeIndex] = useState(0)
    const [currentComponentValue, changeComponentValue] = useState(ComponentValues[0])

    function handelNextValue(){
        if (currentIndex < ComponentValues.length - 1) {
            changeComponentValue(ComponentValues[currentIndex+1])
            changeIndex(currentIndex+1)
        } 
    }
    function handelPreviousValue () {
        if (!currentIndex == 0){
            changeComponentValue(ComponentValues[currentIndex-1])
            changeIndex(currentIndex-1)
        }
    }

    const {ComponentType, MainQuestion, SubQuestion, Options, Text, ListStatus, ListValues, Answer } = currentComponentValue;
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col h-full items-center">
                <div className="flex items-center min-h-blockmode">
                    <div className="flex flex-col">
                        { 
                            ComponentType == "Quiz" ? (
                                <QuizComponent MainQuestion={MainQuestion} SubQuestion={SubQuestion} Options={Options} Answer = {Answer}/>
                            ) : (
                                <LessonComponent Texts={Text} ListStatus={ListStatus} ListValues={ListValues} />
                            )
                        }
                        <div className=" mt-10 flex justify-between"><Button className="" onClick={handelPreviousValue}>Previous</Button><Button className="" onClick={handelNextValue} >Continue</Button></div>
                    </div>
                </div>
            </div>
         </div>
    )
}