import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({subsets:['latin']})

function Code ({code}) {
    return(
        <div className={`m-1 px-2 ${source_code_pro.className}`}>
            {code}
        </div>
    )
}

export default Code;