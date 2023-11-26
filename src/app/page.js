// import Link from "next/link";
import Navbar from "@/components/navbar";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-900 py-5">
        <Header />
        <AboutSection />
      </div>
    </div>
  )
};