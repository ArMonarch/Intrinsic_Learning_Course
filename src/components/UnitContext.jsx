import { firacode } from "@/app/layout";

function UnitContex({Values, ListStatus, ListValues}) {
    return(
        <div className={`flex flex-col w-[700px]`}>
            {
            Values.map(
                (Value, index) => {
                    return(<div key={index}>{Value}</div>);
                })
            }
            {ListStatus && 
            <ul className="list-disc pl-5">
                {ListValues.map((ListValue, index) => {
                    return(<li key={index}>{ListValue}</li>)
                })}
            </ul>}
        </div>
    )
}

export default UnitContex;