import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { signOut } from 'firebase/auth';


const Navbar = () => {
    const {user, googleSignIn, logOut} = UserAuth();


    const handleSignIn = async()=>{
        try{
            await googleSignIn();
            

        }catch(error){
            console.log(error);
        }
    

    }
    const handleSignOut = async()=>{
        try{
            await logOut();
        }catch(error){
            console.log(error)
        }
    }

    const sendEmail = async()=>{
        //fetch("http://localhost:8081/eService")
        const data = {
            "subject":"hello world",
            "text":"nodemailer",
            "emailIdArray":[
                "prayashshakya20@gmail.com",
                "bigyadhungana@gmail.com"
            ]
        
        }
        const res = await fetch("http://localhost:8081/eService", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
           
          body: JSON.stringify(data), 
          // body data type must match "Content-Type" header
        })
        console.log(res)

    }



  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2 bg-gray-800 space-x-4  text-white'>
        <ul className='flex'>
            <li className='p-2 cursor-pointer'>
                <Link href="/">Home</Link>
            </li>
            {!user ?(null):(
            <li className='p-2 cursor-pointer '>
                <Link href="/courses">Courses</Link>
            </li>
            
            )}
            {user ?(<li className='p-2 cursor-pointer '>
                <Link href="/profile">Profile</Link>
            </li>):(null)}
            <li className='p2 cursor-pointer' onClick={sendEmail}>
                Send
            </li>
            
        </ul>
        <ul className='flex '>
            {!user?(
            <li onClick={handleSignIn} className='p-2 cursor-pointer '>
                Login
            </li>
            ):(
            
            <div className='flex justify-between'>
                <p>Welcome, {user.displayName}</p>
                <p onClick={handleSignOut} className='p-2 cursor-pointer '>
                    Sign Out
                </p>
            </div>
            )}
            
            
        </ul>
    </div>
  )
}

export default Navbar