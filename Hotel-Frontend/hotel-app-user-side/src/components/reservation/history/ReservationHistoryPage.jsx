"use client"

import React, { useEffect, useState } from 'react'

const ReservationHistoryPage = ({reservations}) => {

  const [fetchedReservations, setFetchedReservations] = useState([]) 
  const [filteredReservations, setFilteredReservations] = useState([])

  console.log(reservations)
 
  return (
    <div>ReservationHistoryPage</div>
  )
}

export default ReservationHistoryPage