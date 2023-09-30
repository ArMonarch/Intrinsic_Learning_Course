import Link from "next/link";

export default function Home() {
  return (
    <div className="flex text-2xl">
      <div className="">
        Landing Page
        <br/>        
        <Link href="/courses" className="text-blue-600 hover:text-red-500">List of Courses</Link>
      </div>
    </div>
  )
}
