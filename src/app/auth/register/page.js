import Image from "next/legacy/image";

export const metadata = {
    title: "Sign Up | Intrinsically Motivating Courses"
}

export default function Register() {
    return(
        <>
        <Image src="/image/AuthBackground.jpg" alt="" layout="fill" objectFit="cover" quality={100} className="absolute z-10"/>
        </>
    );
}