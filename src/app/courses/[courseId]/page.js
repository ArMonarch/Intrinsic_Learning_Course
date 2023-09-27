import Link from "next/link"

export default function course({params}){
    return (
        <div className="text-2xl">
            The Course page {params.courseId} Includes Topics
            <ul>
            </ul>
        </div>
    )
}