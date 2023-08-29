import Link from "next/link"

export default function courses(){
    return (
        <div className="text-2xl">
            List Of Courses
            <ul>
                <li><Link href="/courses/Introduction_to_Computer_Science" className="text-blue-600 hover:text-red-500">Introduction to Computer Science</Link></li>
                <li><Link href="/courses/Introduction_to_IoT" className="text-blue-600 hover:text-red-500">Introduction to IoT</Link></li>
            </ul>
        </div>
    )
}