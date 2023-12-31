import Code from "./Code";

function LessonComponent({Title, Texts, ListStatus, ListValues, code, Examples }) {
  return (
    <div className={`flex flex-col w-[700px]`}>
      <div className="text-xl font-bold">{Title}</div>
      {Texts &&
        Texts.split("\\n").map((Text, index) => {
          return <div key={index}>{Text}</div>;
        })}

        {code &&
            code.split("\\n").map((code, index)=>{
                return <div key ={index}><Code code ={code}/></div>
            })
        }
      {ListStatus && (
        <ul className="list-disc pl-5 mt-5">
          {ListValues.split("\\n").map((ListValue, index) => {
            return <li key={index}>{ListValue}</li>;
          })}
        </ul>
      )}
      {Examples && Examples.map((Example, index) => {
        return(
          <div key={index}>
            <div >Example:</div>
            {Example.Code && Example.Code.split("\\n").map((code,index) => {return (<div key={index}><Code code ={code}/></div>)})}
            {Example.Text && Example.Text.split("\\n").map((text,index) => {return (<div key={index}>{text}</div>)})}
          </div>
        )
      })}
    </div>
  );
}

export default LessonComponent;
