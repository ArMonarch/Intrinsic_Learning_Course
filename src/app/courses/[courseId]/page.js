import Link from "next/link"

export default function course({params}){
    return (
        <div className="text-2xl">
            The Course page {params.courseId} Includes Topics
            {console.log(params)}
            <ul>
                <li><Link href={`/courses/${params.courseId}/computer_science`} className="text-blue-600 hover:text-red-500">Computer Science</Link></li>
                <li><Link href={`/courses/${params.courseId}/IoT`}  className="text-blue-600 hover:text-red-500">IoT</Link></li>
            </ul>
        </div>
    )
}