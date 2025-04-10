"use client"

import React, { useEffect, useState } from 'react'
import { BsArchiveFill, BsClipboardCheckFill, BsClipboardXFill, BsDoorOpenFill, BsStopwatchFill } from 'react-icons/bs'

const ReservationHistoryPage = ({reservations}) => {

  const [shownReservations, setShownReservations] = useState([])
  const [reservationStatus, setReservationStatus] = useState('')

  const filterReservations = (reservationStatus) => {
    setReservationStatus(reservationStatus.replace("_", "-"))
    setShownReservations(reservations.filter(resv => {return resv.reservationStatus === reservationStatus}))
  }

  const showAllReservations = () => {
    setReservationStatus("All")
    setShownReservations(reservations)
  }

  useEffect(() => {
    showAllReservations()
  },[])
 
  return (

    <div>
      <div className='grid grid-cols-5 mx-auto gap-5 bg-[#EAE0D2] p-4 lg:w-3/5 md:w-3/4 sm:w-3/4 w-[95%] rounded-lg mt-6'>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg' onClick={() => {showAllReservations()}}><BsArchiveFill size={30}/></div>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg' onClick={() => {filterReservations("Awaiting")}}><BsStopwatchFill size={30}/></div>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg' onClick={() => {filterReservations("Checked_In")}}><BsClipboardCheckFill size={30}/></div>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg' onClick={() => {filterReservations("Checked_Out")}}><BsDoorOpenFill size={30}/></div>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg' onClick={() => {filterReservations("Cancelled")}}><BsClipboardXFill size={30}/></div>
      </div>

      <h2 className='mx-auto text-center mt-6 text-[#EAE0D2] text-lg font-extrabold'>{reservationStatus} reservations:</h2>

      {shownReservations && shownReservations.length > 0 ? 

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 mt-12'>
          {
            shownReservations && shownReservations.map(reservation => {
              return (
                <div key={reservation.id} className='mx-auto bg-[#D7C9AE]'>
                  {reservation.roomNumber}
                </div>
              )
            })
          }
        </div>

        :

        <div>
          No such reservations exist.
        </div>
      } 
    </div>


  )
}

export default ReservationHistoryPage