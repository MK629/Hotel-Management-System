"use client"

import StandardReservationFormPage from '@/components/reservation/standard/StandardReservationFormPage'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

  const params = useParams()

  return (
    <StandardReservationFormPage roomType={params.roomType}/>
  )
}

export default page