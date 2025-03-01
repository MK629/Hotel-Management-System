'use client'

import { ShieldContext } from '@/contexts/ShieldContext'
import { initStandardReservationPage } from '@/services/hotelUserService'
import { usePathname, useRouter } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const bookingPage = () => {

  const {protect} = useContext(ShieldContext)
  const imageUrl = "/images/RoomTypeImages/"
  const [roomTypeChoices, setRoomTypeChoices] = useState([])
  const router = useRouter()
  const currentUrl = usePathname()

  const toStandardReservationForm = (roomType) => {
    router.push(currentUrl + "/standardReservation/" + roomType)
  }

  useEffect(() => {
    protect()
    initStandardReservationPage().then(res => {setRoomTypeChoices(res.data)}).catch(e => console.log(e))
  }, [])

  return (
    <div className='p-10'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto'>
        {
          roomTypeChoices && roomTypeChoices.map(choice => {
            return(
              <div key={choice.type} className='bg-[#D7C9AE] rounded-md flex hover:scale-105 transition'>
                <img src={imageUrl + choice.image} alt="image" className='rounded-lg border-2 w-2/3 border-[#D7C9AE]'/>
                <div className='flex flex-col text-[#EAE0D2] p-3 text-center mx-auto justify-between'>
                  <div>
                    <h2 className='text-[15px] bg-[#2D2D2D] px-1 py-0.5 rounded-md font-bold'>{choice.type}</h2>
                    <h2 className='text-[13px] font-extrabold text-[#2D2D2D]'>{choice.beds} Bed(s)</h2>
                  </div>
                  <div>
                    <h2 className='text-[13px] font-extrabold text-[#2D2D2D]'>${choice.price} per night</h2>
                    <button onClick={() => {toStandardReservationForm(choice.type)}} className='bg-[#A68763] hover:bg-[#d3af87] transition px-3 py-0.5 rounded-lg font-bold text-[#2D2D2D]'>Book</button>
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

export default bookingPage