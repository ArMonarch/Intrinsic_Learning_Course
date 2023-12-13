'use client';

import QuizComponent from "./QuizComponent";
import LessonComponent from "./LessonComponent";
import { Button } from "./ui/button";
import { useState } from "react";

export function LessonAndQuizComponent ({Lessons}) {

    const ComponentValues = Lessons

    const [currentIndex, changeIndex] = useState(0)
    const [currentComponentValue, changeComponentValue] = useState(ComponentValues[currentIndex])

    function handelNextComponent(){
        if (currentIndex < ComponentValues.length - 1) {
            changeIndex((prevIndex) => prevIndex+1)
            changeComponentValue(ComponentValues[currentIndex+1])
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
                        <div className="flex justify-end"><Button onClick={handelNextComponent} >Continue</Button></div>
                    </div>
                </div>
            </div>
         </div>
    )
}