"use client"

import { getSimpleUserInfo } from '@/services/hotelUserService'
import React, { useEffect, useState } from 'react'
import { BsDot } from 'react-icons/bs'
import UserRankDisplay from './UserRankDisplay'
import { useRouter } from 'next/navigation'

const MiniProfile = () => {

  const [simpleUserInfo, setSimpleUserInfo] = useState({})
  const router = useRouter()

  const updateUserInfo = async () => {
    await getSimpleUserInfo().then((res) => {setSimpleUserInfo(res.data)}).catch(e => console.log(e.response.data))
  }

  useEffect(() => {
    updateUserInfo()
  },[])
    
  return (
    <div>
       <div className='flex-col bg-[#2D2D2D]'>
          <img src="/images/icons/userProfile/Profile.svg" alt="Profile.svg" className='w-40 h-40 mx-auto'/>

          <div className='p-3.5'>
            <div className='mx-auto font-extrabold rounded-lg bg-[#D7C9AE] justify-center text-[#2D2D2D] py-4 mt-3 flex'>
                <div className='flex-col w-1/3'>
                    <h4 className='flex'><BsDot size={22}/>Username</h4>
                    <h4 className='flex mt-1'><BsDot size={22}/>E-Mail</h4>
                    <h4 className='flex mt-1'><BsDot size={22}/>Rank</h4>
                </div>

                <div className='flex-col w-2/4'>
                    <h4 className='truncate'> : {simpleUserInfo.username}</h4>
                    <h4 className='truncate mt-1'> : {simpleUserInfo.email}</h4>
                    <h4 className='flex mt-1'> : <UserRankDisplay rank={simpleUserInfo.rank}/></h4>
                </div>
            </div>
          </div>
                    
          <div className='flex'>
            <button onClick={() => {router.push("/profile")}} className='bg-[#7c654b] hover:bg-[#d3af87] transition px-3 py-0.5 rounded-lg font-extrabold text-[#EAE0D2] mx-auto mt-1 mb-5'>Detailed view</button>
          </div>
       </div>
    </div>
  )
}

export default MiniProfile