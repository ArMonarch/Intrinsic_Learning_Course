import { Button } from "@/app/components/ui/button";
import UnitContext from "@/components/UnitContext"

const Contextvalues = [
    "Python",
    "Python is an easy to learn, powerful programming language.",
    "Python's elegant syntax and dynamic typing, together with its interpreted nature, make it an ideal language for scripting and rapid application development in many areas on most platforms.",
]

const ListValues = [
    "Used for web devvelopment (server-side),",
    "Mathematics,",
    "Software development,",
    "System scripting,",
]

function SubLessons() {
    return(
         <div className="flex flex-col h-full">
            <div className="flex flex-col h-full items-center">
                <div className="flex items-center min-h-blockmode">
                    <div className="flex flex-col">
                        <UnitContext Values={Contextvalues} ListStatus={true} ListValues={ListValues} />
                        <div className="flex justify-end"><Button>Continue</Button></div>
                        
                    </div>                    
                </div>
            </div>
         </div>
    );
};

export default SubLessons;