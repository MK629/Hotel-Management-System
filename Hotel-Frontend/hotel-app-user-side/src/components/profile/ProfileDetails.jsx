'use client'

import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import { getSimpleUserInfo } from '@/services/hotelUserService'
import React, { useContext, useEffect, useState } from 'react'
import UserRankDisplay from './UserRankDisplay'
import { BsEnvelopeFill, BsPersonFill } from 'react-icons/bs'

const ProfileDetails = () => {

  const {validationStep, changeUsername, changePassword} = useContext(ProfileManagementContext)
  const [simpleUserInfo, setSimpleUserInfo] = useState({})  

  const updateUserInfo = async () => {
    await getSimpleUserInfo().then((res) => {setSimpleUserInfo(res.data)}).catch(e => console.log(e.response.data))
  }

  useEffect(() => {
    updateUserInfo()
  },[])

  return (
    <div className='container mx-auto lg:w-2/5 mt-8'>
        <div className='flex flex-col bg-[#D7C9AE] p-4 space-y-6 rounded-xl'>
          <div className='border-[1.5px] border-gray-500 bg-[#EAE0D2] rounded-lg p-1 font-bold flex'>
            <BsPersonFill size={23}/><h2 className='truncate ml-2'>{simpleUserInfo.username}</h2>
          </div>

          <div className='border-[1.5px] border-gray-500 bg-[#EAE0D2] rounded-lg p-1 font-bold flex'>
            <BsEnvelopeFill size={23}/><h2 className='truncate ml-2'>{simpleUserInfo.email}</h2>
          </div>

          <div className='flex justify-center'>
            <UserRankDisplay rank={simpleUserInfo.rank}/>
          </div>

          <div className='flex justify-center space-x-20'>
            <div onClick={() => {validationStep(); changeUsername()}}>
              Change Username
            </div>

            <div onClick={() => {validationStep(); changePassword()}}>
              Change Password
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileDetails