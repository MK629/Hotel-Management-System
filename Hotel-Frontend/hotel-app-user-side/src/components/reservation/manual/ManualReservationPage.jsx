"use client"

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const ManualReservationPage = ({roomTypeChoices}) => {

  const imageUrl = "/images/roomTypeImages/"
  const currentUrl = usePathname()
  const router = useRouter()

  const toRoomChoicePage = (roomType) => {
    router.push(currentUrl + "/rooms/" + roomType)
  }

  return (
    <div className='p-10'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto'>
        {
          roomTypeChoices && roomTypeChoices.map(item => {
            return(
              <div key={item.type} className='bg-[#D7C9AE] rounded-md flex hover:scale-105 transition'>
                <Image src={imageUrl + item.image} alt={item.image} width={400} height={400} className='rounded-lg border-2 w-2/3 border-[#D7C9AE]'/>
                <div className='flex flex-col text-[#EAE0D2] p-3 text-center mx-auto justify-between'>
                  <div>
                    <h2 className='text-[15px] bg-[#2D2D2D] px-1 py-0.5 rounded-md font-bold'>{item.type}</h2>
                    <h2 className='text-[13px] font-extrabold text-[#2D2D2D]'>{item.beds} Bed(s)</h2>
                  </div>
                  <div>
                    <h2 className='text-[13px] font-extrabold text-[#2D2D2D]'>${item.price} per night</h2>
                    <button onClick={() => {toRoomChoicePage(item.type)}} className='bg-[#A68763] hover:bg-[#d3af87] transition px-3 py-0.5 rounded-lg font-bold text-[#2D2D2D] text-[15px]'>See Rooms</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ManualReservationPage