export default function chapter({params}){
    return (
        <div className="text-2xl">
            The Contents of the {params.ChapterId}
            {console.log(params)}
        </div>
        )
}