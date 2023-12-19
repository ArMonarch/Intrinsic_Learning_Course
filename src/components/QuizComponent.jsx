import Code from "./Code";
import { Button } from "./ui/button";
import toast, { Toaster } from "react-hot-toast";
import { UserAuth } from "@/app/context/AuthContext";

function QuizComponent ({MainQuestion, SubQuestion, Options, Answer}) {
    const {user} = UserAuth()
    const postData = {
        uid: user.uid,
        exp: 5
    }
    const checkAnswer = async (option) => {
        if (option === Answer){
                toast(" ✅ Correct, You Earned 5 Xp!!");
                const res = await fetch(`http://localhost:8081/users/addExperience`, {
                    method: 'POST',
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify(postData)})
                    console.log(JSON.stringify(postData))
                    try{
                        const Data = await res.json()
                        if (Data.data){console.log("Sucessful")}else{}
                    }catch{}
            }
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