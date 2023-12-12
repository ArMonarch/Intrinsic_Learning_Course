import { firacode } from "@/app/layout";

function UnitContex({Texts, ListStatus, ListValues}) {
    return(
        <div className={`flex flex-col w-[700px]`}>
            {
            Texts.map(
                (Text, index) => {
                    return(<div key={index}>{Text}</div>);
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