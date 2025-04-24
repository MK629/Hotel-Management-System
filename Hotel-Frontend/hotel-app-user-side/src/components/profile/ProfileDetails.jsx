'use client'

import { ProfileManagementContext } from '@/context/contexts/ProfileManagementContext'
import { getSimpleUserInfo } from '@/services/hotelUserService'
import React, { useContext, useEffect, useState } from 'react'
import UserRankDisplay from './UserRankDisplay'
import { BsEnvelopeFill, BsPersonFill} from 'react-icons/bs'
import Image from 'next/image'
import { AiFillCrown } from 'react-icons/ai'
import { FaUserEdit, FaUserLock } from 'react-icons/fa'

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
    <div className='container mx-auto mt-8'>
        <div className='flex flex-col bg-[#D7C9AE] p-4 space-y-6 rounded-xl lg:w-3/5 md:4/5 sm:w-full mx-auto'>
          <div className='flex space-x-10 text-[#2D2D2D]'>
            <Image src={'/images/profile/ProfileIcon.png'} alt='ProfileIcon.png' width={400} height={400} className='lg:w-2/6 md:w-2/6 sm:w-2/6 w-0'/>

            <div className='flex-col space-y-2 lg:space-y-6 md:space-y-6 sm:space-y-5 my-auto w-full lg:pr-0 md:pr-0 sm:pr-0 pr-8'>
              <div className='font-bold w-full flex border-[1.5px] border-gray-500 bg-[#EAE0D2] rounded-lg py-1 px-1.5'>
                <BsPersonFill size={25}/><h2 className='truncate ml-2'>{simpleUserInfo.username}</h2>
              </div>

              <div className='font-bold flex border-[1.5px] border-gray-500 bg-[#EAE0D2] rounded-lg py-1 px-1.5'>
                <BsEnvelopeFill size={25}/><h2 className='truncate ml-2'>{simpleUserInfo.email}</h2>
              </div>

              <div className='flex font-bold'>
                <AiFillCrown size={25}/><UserRankDisplay rank={simpleUserInfo.rank}/>
              </div>
            </div>
          </div>

          <div className='flex justify-center space-x-20'>
            <div className='flex bg-[#7c654b] hover:bg-[#d3af87] transition px-3 py-[5px] rounded-lg font-bold text-[#EAE0D2] hover:cursor-pointer' onClick={() => {validationStep(); changeUsername()}}>
              <FaUserEdit size={22} className='mr-1.5'/>Change Username
            </div>

            <div className='flex bg-[#7c654b] hover:bg-[#d3af87] transition px-3 py-[5px] rounded-lg font-bold text-[#EAE0D2] hover:cursor-pointer' onClick={() => {validationStep(); changePassword()}}>
              <FaUserLock size={22} className='mr-1.5'/> Change Password
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileDetails