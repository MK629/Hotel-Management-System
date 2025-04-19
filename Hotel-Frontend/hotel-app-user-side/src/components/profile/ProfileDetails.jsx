'use client'

import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import React, { useContext } from 'react'

const ProfileDetails = () => {

  const {validationStep, changeUsername, changePassword} = useContext(ProfileManagementContext)  

  return (
    <div className='flex flex-col'>
        <div className='flex'>
            <h1>Username</h1>
            <h1 onClick={() => {validationStep(); changeUsername()}}>change</h1>
        </div>

        <div className='flex'>
            <h1>Password</h1>
            <h1 onClick={() => {validationStep(); changePassword()}}>change</h1>
        </div>
    </div>
  )
}

export default ProfileDetails