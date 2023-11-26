import { useState } from "react";
import "../styles/Textfield.module.css"

export default function Textfield ({Name, Value, onChange}) {
    const className = ["sc-fmSAUk lktHly sc-dlUsjx iledJH auth-textfield px-3 py-2","sc-fmSAUk hZyTAS sc-dlUsjx iledJH auth-textfield px-3 py-2","sc-fmSAUk jRMYDv sc-dlUsjx iledJH auth-textfield px-3 py-2"];
    const [ClassNameIndex, toggleClassNameIndex] = useState(0);
    const focusToggle = () => {
          toggleClassNameIndex(1);
        //   console.log(Value);
    };
    const blurToggle = () => {
        if(!Value){toggleClassNameIndex(0);}
        else{toggleClassNameIndex(2);}
        // console.log(Value);
    };

    return(
        <div>
            <div className={className[ClassNameIndex]}>
                <div className="sc-ktEKTO ivhuoK field">
                    <input name={Name} type="text" onFocus={focusToggle} onBlur={blurToggle} value={Value} onChange={onChange} />
                    <label>{Name}</label>
                    <span>{Name}</span>
                </div>
            </div>
        </div>
    );
};