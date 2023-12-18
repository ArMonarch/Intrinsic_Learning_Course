import Code from "./Code";
import { Button } from "./ui/button";
import toast, { Toaster } from "react-hot-toast";

function QuizComponent ({MainQuestion, SubQuestion, Options, Answer, nextLesson}) {
    const checkAnswer = (option) => {
        if (option === Answer){toast(" ✅ Correct"); setTimeout(function () {nextLesson()},5000); }
        else {toast("❌ Incorrect")}
      };
    return(
        <div className="flex flex-col w-[700px]">
            <Toaster />
            <div className="text-xl font-bold">
                {MainQuestion}
            </div>
            <div>
                {   SubQuestion &&
                    SubQuestion.split("\\n").map((value ,index) => {
                    return(
                    <div key={index}><Code code ={value}/></div>
                    )
                    })
                }
            </div>
            <div>
                {
                Options.map(
                    (Option, index) => {
                        return(<div key={index} className="w-5 my-1 mx-4"><Button variant="outline" size="lg" className="w-60" onClick={() => {checkAnswer(Option)}}>{Option}</Button></div>)
                    }
                )
                }                
            </div>

        </div>
    )
}

export default QuizComponent;