"use client"

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const RoomChoicePage = ({rooms}) => {

  const router = useRouter()
  const currentUrl = usePathname()

  const toManualReservationForm = (roomNumber, reserved) => {
    reserved ? window.alert("This rooom is not available.")  : router.push(`${currentUrl}/manualReservation/${roomNumber}`)
  }

  return (
    <div>
      <Image src={`/images/roomTypeImages/${rooms[0].type}.jpg`} alt={`roomType.jpg`} height={800} width={800} className='mx-auto border-4 border-[#EAE0D2] rounded-2xl mt-5'/>
      <div className={`grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 items-center text-center gap-4 mt-8 mb-56`}>
        {rooms && rooms.map(room => {
              return (
                <div key={room.id} className='bg-[#D7C9AE] w-[10rem] mx-auto h-[12rem] rounded-2xl flex-col p-2'>
                  <h4 className='bg-[#2D2D2D] w-2/4 mx-auto rounded-md text-[#EAE0D2] font-extrabold p-1'>{room.number}</h4>
                  <Image src={`/images/icons/others/${room.reserved ? "Lock" : "Key"}.svg`} alt='icon.svg' width={40} height={40} className='mx-auto text-center mt-2'/>
                  <div className={`${room.reserved ? 'bg-red-800' : 'bg-green-800'} w-[1.25rem] h-[1.25rem] mx-auto mt-2 rounded-md`}></div>
                  <button onClick={() => {toManualReservationForm(room.number, room.reserved)}} className='bg-[#7c654b] hover:bg-[#d3af87] transition px-3 py-0.5 rounded-lg font-bold text-[#EAE0D2] mt-6'>Book</button>
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default RoomChoicePage