"use client"
import React from 'react'
import { UserAuth } from '../context/AuthContext'
import ProfileCard from '../components/ProfileCard';

const page = () => {
    const {user} = UserAuth();

  return (
    <div>
        {user ?(<ProfileCard/>):(<p>You must be logged in to view this.</p>)}
    </div>
  )
        }
export default page;
