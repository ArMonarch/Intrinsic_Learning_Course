import Image from "next/image"
import Link from "next/link"
import LoginForm from "@/components/LoginForm"
import { Fira_Code } from "next/font/google"
import LoginButton from "@/components/LogInButton"

export const metadata = {
    title: 'Login | Intrinsically Motivating Courses'
}

const firaCode = Fira_Code({ subsets: ["latin"] });

export default function Login() {
    return (
        <>
            <Image src="/image/AuthBackground.jpg" alt="" layout="fill" objectFit="cover" quality={100} className="absolute z-0"/>
            <div className="flex flex-row">
                <div className="w-1/4 bg-transparent backdrop-blur-xl z-10 min-w-min h-screen flex flex-col justify-center">
                    <div className="text-center font-bold text-5xl mb-10 uppercase text-slate-400"> <p className={firaCode.className}>Sign In</p></div>
                    <div className="Form">
                        <LoginForm/>
                    </div>
                    <div className="flex justify-center">
                        <Link href={"/profile"}>
                            <LoginButton />
                        </Link>
                    </div>
                    <div className="flex justify-center uppercase text-sm mt-4 p-1 text-gray-400 font-bold hover:text-gray-200"><Link href={"#"}>Can't Sign In?</Link></div>
                    <div className="flex justify-center uppercase text-sm text-gray-400 font-bold hover:text-gray-200"><Link href={"/auth/register"}>Create Account</Link></div>
                </div>
                <div className="flex-grow"></div>
            </div>
        </>
    )
}