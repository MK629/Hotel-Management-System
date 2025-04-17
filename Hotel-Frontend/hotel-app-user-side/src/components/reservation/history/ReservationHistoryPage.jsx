"use client"

import UserRankDisplay from '@/utilComponents/profile/UserRankDisplay'
import ReservationStatusDisplay from '@/utilComponents/reservation/ReservationStatusDisplay'
import Image from 'next/image'
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

  const showDiscount = (userRank) => {
    switch(userRank){
      case "Bronze": return "0%"
      case "Silver": return "10%"
      case "Gold": return "20%"
      case "Platinum": return "40%"
      default: return "";
    }
  }

  const extractDate = (dateTime) => {
    return dateTime.slice(0, 10)
  }

  useEffect(() => {
    showAllReservations()
  },[])
 
  return (

    <div>
      <div className='grid grid-cols-5 mx-auto gap-5 bg-[#EAE0D2] p-4 lg:w-3/5 md:w-3/4 sm:w-3/4 w-[95%] rounded-2xl mt-6'>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg hover:cursor-pointer' onClick={() => {showAllReservations()}}><BsArchiveFill size={30}/></div>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg hover:cursor-pointer' onClick={() => {filterReservations("Awaiting")}}><BsStopwatchFill size={30}/></div>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg hover:cursor-pointer' onClick={() => {filterReservations("Checked_In")}}><BsClipboardCheckFill size={30}/></div>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg hover:cursor-pointer' onClick={() => {filterReservations("Checked_Out")}}><BsDoorOpenFill size={30}/></div>
        <div className='text-[#EAE0D2] bg-[#2D2D2D] hover:bg-[#414040] mx-auto text-sm font-extrabold px-4 py-2 transition duration-300 rounded-lg hover:cursor-pointer' onClick={() => {filterReservations("Cancelled")}}><BsClipboardXFill size={30}/></div>
      </div>

      <h2 className='mx-auto text-center mt-6 text-[#EAE0D2] text-lg font-extrabold'>{reservationStatus} reservations:</h2>

      {shownReservations && shownReservations.length > 0 ? 

        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5 mt-12 mb-14 p-2'>
          {
            shownReservations && shownReservations.map(reservation => {
              return (
                <div key={reservation.id} className='mx-auto bg-[#D7C9AE] rounded-xl p-1.5 hover:scale-[102%] transition duration-200'>
                  <Image src={`/images/roomTypeImages/${reservation.roomType}.jpg`} alt={`${reservation.roomType}.jpg`} width={550} height={550} className='border-[#D7C9AE] rounded-xl mb-3.5'/>
                  
                  <ReservationStatusDisplay reservationStatus={reservation.reservationStatus}/>
 
                  <div className='flex px-1 py-2 font-bold text-[13.5px] bg-[#EAE0D2] rounded-xl mt-3.5 mb-7'>
                    <div className='flex-col pl-0.5 space-y-0.5'>
                      <h4>Room number</h4>
                      <h4>Room type</h4>
                      <h4>Booked date</h4>
                      <h4>Nights</h4>
                      <h4>Estimated checkout date</h4>
                      <h4>Reservation type</h4>
                      <h4>Reservation fee</h4>
                      <h4>Estimated total</h4>
                      <h4>Check-in date</h4>
                      <h4>Check-out date</h4>
                      <h4>Cancel date</h4>
                      <h4>Actual total</h4>
                    </div>

                    <div className='flex-col ml-2 pr-0.5 space-y-0.5'>
                      <h4>: {reservation.roomNumber}</h4>
                      <h4>: {reservation.roomType}</h4>
                      <h4>: {reservation.bookedDate}</h4>
                      <h4>: {reservation.nights}</h4>
                      <h4>: {reservation.estimatedCheckoutDate}</h4>
                      <h4>: {reservation.reservationType}</h4>
                      <h4>: ${reservation.reservationFee}</h4>
                      <h4>: ${reservation.estimatedTotal}</h4>
                      <h4>: {reservation.checkInDateTime ? extractDate(reservation.checkInDateTime): "N/A"}</h4>
                      <h4>: {reservation.checkOutDateTime ? extractDate(reservation.checkOutDateTime) : "N/A"}</h4>
                      <h4>: {reservation.cancelDateTime ? extractDate(reservation.cancelDateTime) : "N/A"}</h4>
                      <h4>: {reservation.actualTotal ? "$" + reservation.actualTotal : "N/A"}</h4>
                    </div>
                  </div>

                  <div className="flex justify-center font-bold text-[14px] mb-5">
                    <UserRankDisplay rank={reservation.userRankAtReservationTime}/>{showDiscount(reservation.userRankAtReservationTime)} Off
                  </div>

                  <h6 className='lg:text-[11px] md:text-[11px] sm:text-[10px] text-[10px] px-0.5 py-0.5 font-semibold'>ID: {reservation.id}</h6>
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