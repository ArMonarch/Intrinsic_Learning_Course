function LessonComponent({Texts, ListStatus, ListValues}) {
    return(
        <div className={`flex flex-col w-[700px]`}>
            {Texts &&
            Texts.split('\n').map(
                (Text, index) => {
                    return(<div key={index}>{Text}</div>);
                })
            }
            {ListStatus && 
            <ul className="list-disc pl-5">
                {ListValues.split('\n').map((ListValue, index) => {
                    return(<li key={index}>{ListValue}</li>)
                })}
            </ul>}
        </div>
    )
}

export default LessonComponent;