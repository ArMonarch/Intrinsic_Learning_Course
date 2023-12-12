import { Button } from "./ui/button";

function QuizComponent ({MainQuestion, SubQuestion, Options}) {
    return(
        <div className="flex flex-col w-[700px]">
            <div>
                {MainQuestion}
            </div>
            <div>
                {
                    SubQuestion.split("\n").map((value ,index) => {
                    return(
                    <div key={index}>{value}</div>
                    )
                    })
                }
            </div>
            <div>
                {
                Options.map(
                    (Option, index) => {
                        return(<div key={index}><Button>{Option}</Button></div>)
                    }
                )
                }                
            </div>

        </div>
    )
}

export default QuizComponent;