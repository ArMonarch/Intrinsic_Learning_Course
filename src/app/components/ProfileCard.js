import React from 'react'
import { UserAuth } from '../context/AuthContext'

const ProfileCard = () => {
    const {user} = UserAuth();
  return (
    <div>
        <p>Welcome {user.displayName}- Logged In </p>
        <p>Email: {user.email}</p>
    </div>
  )
}

export default ProfileCard
