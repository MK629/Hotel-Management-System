"use client"

import ManageDelay from '@/utilComponents/status/ManageDelay'
import dynamic from 'next/dynamic'
import React from 'react'

const StandardReservationPage = dynamic(() => import("../../../components/reservation/standard/StandardReservationPage"), { suspense: true, ssr: false})

const page = () => {
  return (
    <>
      <ManageDelay component={<StandardReservationPage/>}/>
    </>
  )
}

export default page