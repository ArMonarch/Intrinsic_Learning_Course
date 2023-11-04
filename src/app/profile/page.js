"use client"
import React from 'react'
import { UserAuth } from '../context/AuthContext'

const page = () => {
    const {user} = UserAuth();

  return (
    <div>
        {user ?(
            <p>Welcome {user.displayName}- Logged In </p>
        ):(
            <p>You must be logged in to view this.</p>
        )}
    </div>
  )
        }
export default page