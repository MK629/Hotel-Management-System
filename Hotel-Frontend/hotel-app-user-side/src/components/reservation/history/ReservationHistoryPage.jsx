"use client"

import React, { useEffect, useState } from 'react'

const ReservationHistoryPage = ({reservations}) => {

  const [shownReservations, setShownReservations] = useState([])

  const filterReservations = (reservationStatus) => {
    setShownReservations(reservations.filter(resv => {return resv.reservationStatus === reservationStatus}))
  }

  useEffect(() => {
    setShownReservations(reservations)
  },[])
 
  return (

    <div>
      <div className='grid grid-cols-5 mx-auto gap-5'>
        <div onClick={() => {setShownReservations(reservations)}}>All</div>
        <div onClick={() => {filterReservations("Awaiting")}}>Awaiting</div>
        <div onClick={() => {filterReservations("Checked_In")}}>Checked-In</div>
        <div onClick={() => {filterReservations("Checked_Out")}}>Checked-Out</div>
        <div onClick={() => {filterReservations("Cancelled")}}>Cancelled</div>
      </div>

      {shownReservations && shownReservations.length > 0 ? 

        <div className='grid grid-cols-3'>
          {
            shownReservations && shownReservations.map(reservation => {
              return (
                <div key={reservation.id}>
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