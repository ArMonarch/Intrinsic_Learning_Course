import { Separator } from "@radix-ui/react-select";
import Code from "./Code";
import { Button } from "./ui/button";
import { UserAuth } from "@/app/context/AuthContext";

function QuizComponent({ MainQuestion, SubQuestion, Options, Answer, Toast }) {
  const { user } = UserAuth();
  const postData = {
    uid: user.uid,
    exp: 2,
  };
  const checkAnswer = async (option) => {
    if (option === Answer) {
      Toast(" ✅ Correct, You Earned 2 Xp!!");
      const res = await fetch(`http://localhost:8081/users/addExperience`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });
      try {
        const Data = await res.json();
        if (Data.data) {
          console.log("Sucessful");
        } else {
        }
      } catch {}
    } else {
      Toast("❌ Incorrect");
    }
  };
  return (
    <div className="flex flex-col w-[700px]">
      <div className="text-xl font-bold">{MainQuestion}</div>
      <Separator />
      <div>
        {SubQuestion &&
          SubQuestion.split("\\n").map((value, index) => {
            return (
              <div key={index}>
                <Code code={value} />
              </div>
            );
          })}
      </div>
      <Separator />
      <div>
        {Options.map((Option, index) => {
          return (
            <div key={index} className="w-5 my-1 mx-4">
              <Button
                variant="outline"
                size="lg"
                className="w-60"
                onClick={() => {
                  checkAnswer(Option);
                }}
              >
                {Option}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default QuizComponent;
