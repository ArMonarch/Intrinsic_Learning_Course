import Link from "next/link"

export default function Units({params}) {
    return (
        <div className="text-2xl">
            Topics To Be Covered By Unit {params.UnitId}
            {console.log(params)}
            <ul>
                <li><Link href={`/courses/${params.courseId}/${params.UnitId}/Unit-1`} className="text-blue-600 hover:text-red-500">{params.UnitId} 101</Link></li>
                <li><Link href={`/courses/${params.courseId}/${params.UnitId}/Unit-2`}  className="text-blue-600 hover:text-red-500">{params.UnitId} 102</Link></li>
            </ul>
        </div>
    )
}