"use client";
import { Button } from "@/app/components/ui/button";
import QuizComponent from "@/components/QuizComponent";
import LessonComponent from "@/components/LessonComponent"
import { useState } from "react";

// export const metadata = {
//     title: "Lesson"
// }
const ComponentValues = [
    {ComponentType: "Text",
    Text: [
        "Python",
        "Python is an easy to learn, powerful programming language.",
        "Python's elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.",
    ],
    ListStatus: true,
    ListValues: [
        "Used for web devvelopment (server-side),",
        "Mathematics,",
        "Software development,",
        "System scripting,",
    ]},
    {ComponentType: "Quiz",
    MainQuestion: "Change the value of variable named X from “volvo” to 10.",
    SubQuestion:`
    carname = Volvo \n
    carname = _____`,
    Options: ["1","2","3"]},
    {ComponentType: "Text",
    Text: [
        "Python Two",
        "Python is an easy to learn, powerful programming language.",
    ],
    ListStatus: false,
    }
]

function SubLessons() {
    
    const [currentIndex, changeIndex] = useState(0)
    const [currentComponentValue, changeComponentValue] = useState(ComponentValues[currentIndex])
    
    function handelNextComponent(){
        if (currentIndex < ComponentValues.length - 1) {
            changeIndex((prevIndex) => prevIndex+1)
            changeComponentValue(ComponentValues[currentIndex+1])
        }
        
    }

    const {ComponentType, MainQuestion, SubQuestion, Options, Text, ListStatus, ListValues } = currentComponentValue;
    return(
         <div className="flex flex-col h-full">
            <div className="flex flex-col h-full items-center">
                <div className="flex items-center min-h-blockmode">
                    <div className="flex flex-col">
                        { 
                            ComponentType == "Quiz" ? (
                                <QuizComponent MainQuestion={MainQuestion} SubQuestion={SubQuestion} Options={Options}/>
                            ) : (
                                <LessonComponent Texts={Text} ListStatus={ListStatus} ListValues={ListValues} />
                            )
                        }
                        <div className="flex justify-end"><Button onClick={handelNextComponent} >Continue</Button></div>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default SubLessons;