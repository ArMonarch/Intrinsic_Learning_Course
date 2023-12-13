
import { Button } from "./ui/button";

function QuizComponent ({MainQuestion, SubQuestion, Options, Answer, CodeContent}) {
    const checkAns = (option) => {
        if (option == Answer) {
          console.log("correct");
        } else {
          console.log("incorrect");
        }
      };
    return(
        <div className="flex flex-col w-[700px]">
            <div>
                {MainQuestion}
            </div>
            <div>
                {   SubQuestion &&
                    SubQuestion.split("\\n").map((value ,index) => {
                    return(
                    <div key={index}>{value}</div>
                    )
                    })
                }
            </div>
            <div>
                {CodeContent &&
                CodeContent.split("\\n").map((Code, index)=>{
                    return <div key ={index}>{Code}</div>
                })}
            </div>
            <div>
                {
                Options.map(
                    (Option, index) => {
                        return(<div key={index}><Button onClick = {()=>{checkAns(Option)}}>{Option}</Button></div>)
                    }
                )
                }                
            </div>

        </div>
    )
}

export default QuizComponent;