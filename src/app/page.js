import Link from "next/link";

export default function Home() {
  return (
    <main className="flex text-2xl">
      <div>
        Landing Page
        {console.log()}
        <br></br>
        <Link href="/courses" className="text-blue-600 hover:text-red-500">List of Courses</Link>
      </div>
    </main>
  )
}
