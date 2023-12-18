'use client';

import QuizComponent from "./QuizComponent";
import LessonComponent from "./LessonComponent";
import { Button } from "./ui/button";
import { useState } from "react";
import { UserAuth } from "@/app/context/AuthContext";


export function LessonAndQuizComponent ({Lessons}) {
    const {user} = UserAuth()
    const ComponentValues = Lessons

    const [currentIndex, changeIndex] = useState(0)
    const [currentComponentValue, changeComponentValue] = useState(ComponentValues[0])

  

    const completeLesson = async() =>{
        const res = fetch(`http://localhost:8081/users/userCompletesUnit`,{
            method:"POST",
            data:JSON.stringify(completed)
        })
    }
        
    

    function handelNextValue(){
        if (currentIndex < ComponentValues.length - 1) {
            changeComponentValue(ComponentValues[currentIndex+1])
            changeIndex(currentIndex+1)
        }else{
            console.log("submit")
        }
    }
    function handelPreviousValue () {
        if (!currentIndex == 0){
            changeComponentValue(ComponentValues[currentIndex-1])
            changeIndex(currentIndex-1)
        }
    }

    const {ComponentType, MainQuestion, Options, Answer ,Title, Text, ListStatus, ListValues, Code, Examples } = currentComponentValue;
    // console.log(Examples)
    return (
        <div className="flex flex-col h-full">
            <div className="flex flex-col h-full items-center">
                <div className="flex items-center min-h-blockmode">
                    <div className="flex flex-col">
                        { 
                            ComponentType == "Quiz" ? (
                                <QuizComponent MainQuestion={MainQuestion} SubQuestion={Code} Options={Options} Answer={Answer} nextLesson={handelNextValue}/>
                            ) : (
                                <LessonComponent Title={Title} Texts={Text} ListStatus={ListStatus} ListValues={ListValues} code={Code} Examples={Examples} />
                            )
                        }
                        <div className=" mt-10 flex justify-between"><Button id='submitChange' className="" onClick={handelPreviousValue}>Previous</Button><Button className="" onClick={handelNextValue} >Continue</Button></div>
                    </div>
                </div>
            </div>
         </div>
    )
}