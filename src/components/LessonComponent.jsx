function LessonComponent({Title, Texts, ListStatus, ListValues, Code, Examples }) {
  return (
    <div className={`flex flex-col w-[700px]`}>
      <div>{Title}</div>
      {Texts &&
        Texts.split("\\n").map((Text, index) => {
          return <div key={index}>{Text}</div>;
        })}

        {Code &&
            Code.split("\\n").map((Code, index)=>{
                return <div key ={index}>{Code}</div>
            })
        }
      {ListStatus && (
        <ul className="list-disc pl-5 mt-5">
          {ListValues.split("\\n").map((ListValue, index) => {
            return <li key={index}>{ListValue}</li>;
          })}
        </ul>
      )}
      {/* {Examples[0].Code} */}
      {Examples && Examples.map((Example, index) => {
        return(
          <div key={index}>
            <div >Example:</div>
            {Example.Code && Example.Code.split("\\n").map((code,index) => {return (<div key={index}>{code}</div>)})}
            {Example.Text && Example.Text.split("\\n").map((text,index) => {return (<div key={index}>{text}</div>)})}
          </div>
        )
      })}
    </div>
  );
}

export default LessonComponent;
