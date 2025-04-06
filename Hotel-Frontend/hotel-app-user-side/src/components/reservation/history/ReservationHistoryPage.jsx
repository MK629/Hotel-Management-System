"use client"

import React, { useEffect, useState } from 'react'

const ReservationHistoryPage = ({reservations}) => {

  const [fetchedReservations, setFetchedReservations] = useState([])
  const [shownReservations, setShownReservations] = useState([])

  useEffect(() => {
    setFetchedReservations(reservations)
    setShownReservations(reservations)
  },[])
 
  return (

    shownReservations && shownReservations.length > 0 ? 
    
    <div>
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
    </div>

    :

    <div>
      No such reservations exist.
    </div>
  )
}

export default ReservationHistoryPage