"use client"

import Link from "next/link"

export const metadata = {
    title: 'List of Courses'
}



export default function courses(){

    return (
        <div className="text-2xl">
            List Of Courses
            This page should only be visible as my courses when the user is logged in later on
            <ul>
                <li><Link href="/courses/Introduction_to_Computer_Science" className="text-blue-600 hover:text-red-500">Introduction to Computer Science</Link></li>
                <li><Link href="/courses/Introduction_to_IoT" className="text-blue-600 hover:text-red-500">Introduction to IoT</Link></li>
                <li><Link href="/courses/introduction_to_computer_science_and_programming_in_python" className="text-blue-600 hover:text-red-500">Introduction to Computer Science and Programming in Python</Link></li>
            </ul>
        </div>
    )
}