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

  return (
    <div className='h-20 w-full border-b-2 flex items-center justify-between p-2'>
        <ul className='flex'>
            <li className='p-2 cursor-pointer'>
                <Link href="/">Home</Link>
            </li>
            {!user ?(null):(
            <li className='p-2 cursor-pointer'>
                <Link href="/courses">Courses</Link>
            </li>
            
            )}
            {user ?(<li className='p-2 cursor-pointer'>
                <Link href="/profile">Profile</Link>
            </li>):(null)}
            
        </ul>
        <ul className='flex'>
            {!user?(
            <li onClick={handleSignIn} className='p-2 cursor-pointer'>
                Login
            </li>
            ):(
            
            <div className='flex justify-between'>
                <p>Welcome, {user.displayName}</p>
                <p onClick={handleSignOut} className='p-2 cursor-pointer'>
                    Sign Out
                </p>
            </div>
            )}
            
            
        </ul>
    </div>
  )
}

export default Navbar