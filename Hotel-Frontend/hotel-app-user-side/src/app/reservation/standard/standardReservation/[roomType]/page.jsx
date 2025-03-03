"use client"

import { getLoggedinUser } from '@/services/authenticationService'
import { standardReservation } from '@/services/hotelUserService'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'


const StandardReservationFormPage = () => {

  const param = useParams() 
  const router = useRouter()

  const sendStandardBookingInfo = async (e) => {
      const standardReservationForm = {
        usernameOrEmail : getLoggedinUser(),
        bookedDate : e.bookedDate.value,
        nights : e.nights.value,
        contactNumber : e.contactNumber.value,
        roomType : param.roomType  
      }
      await standardReservation(standardReservationForm).then(res => {router.back(); window.alert(res.data)}).catch(e => window.alert(e.response.data))
  }

  return (
    <div className='p-1'>
      <div className='rounded-2xl bg-[#D7C9AE] mx-auto lg:w-[60em] md:w-[45em] sm:w-[35em] p-8 mt-52'>
        <form onSubmit={(e) => {e.preventDefault(); sendStandardBookingInfo(e.target)}} className='items-center mx-auto'>
          <div className='flex justify-center'>
            <div className='flex flex-col text-right'>
              <label htmlFor="bookedDate" className='p-1'>Booking date :</label>
              <label htmlFor="nights" className='mt-2 p-1'>Nights :</label>
              <label htmlFor="contactNumber" className='mt-2 p-1'>Contact No. :</label>
              <h2 className='mt-2 p-1'>Room type :</h2>
            </div>
            <div className='flex flex-col ml-1 text-[#2D2D2D] w-1/3'>
              <input id="bookedDate" name="bookedDate" type="date" className='font-medium bg-[#EAE0D2] focus:outline-none py-1 px-2 rounded-md lg:w-2/3 md:w-2/3 sm:w-36 w-36'/>
              <input id="nights" name="nights" type="number" placeholder="1" min={1} className='font-medium bg-[#EAE0D2] focus:outline-none mt-2 py-1 px-2 rounded-md lg:w-16 md:w-16 sm:w-16 w-16'/>
              <div className='flex'>
                <h2 className='text-[15px] text-center mt-2 bg-[#EAE0D2] px-2 py-1 mr-1 rounded-md font-bold'>09-</h2>
                <input id='contactNumber' name='contactNumber' type="text" className='font-medium bg-[#EAE0D2] focus:outline-none mt-2 py-1 px-2 rounded-md lg:w-2/4 md:w-2/4 sm:w-36 w-36'/>
              </div>
              <h2 className='text-[15px] text-[#EAE0D2] text-center mt-3 bg-[#2D2D2D] px-2 py-0.5 rounded-md font-bold w-32'>{param.roomType}</h2>
            </div>
          </div>
          <button className='bg-[#2D2D2D] hover:bg-[#414040] transition lg:ml-[39%] md:ml-[35%] sm:ml-[30%] ml-[27.5%] text-white rounded-lg px-3 py-1 mt-4 text-lg font-semibold' type='submit'>Make Reservation</button>
        </form>
      </div>
    </div>
  )
}

export default StandardReservationFormPage