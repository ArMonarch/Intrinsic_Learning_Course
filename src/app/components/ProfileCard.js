"use client"
import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'

const ProfileCard = () => {
    const {user} = UserAuth();
    const [exp, setExp] = useState({})
    



    useEffect(()=>{
      (async()=>{
        const data= await updateExp(user);
        setExp(data);
      })()
    })




  return (
    <div>
        <p>Welcome {user.displayName}- Logged In </p>
        <p>Email: {user.email}</p>
        <p>Level:{`${exp.data?.currentExperienceLevel}`}</p>
        <p>Experience:{`${exp.data?.currentExperiencePoints}`}</p>   
    </div>
  )
}

export default ProfileCard

const updateExp = async(user)=>{
  const res =   await fetch(`http://localhost:8081/users/getUserExperienceInfo?uid=${encodeURIComponent(user.uid)}`,{
    method:"GET"
  })
  const data=await res.json();
  return data; 
}
