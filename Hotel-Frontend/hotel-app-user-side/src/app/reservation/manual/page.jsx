"use client"

import ManageDelay from '@/utilComponents/rendering/ManageDelay'
import dynamic from 'next/dynamic'
import React from 'react'

const ManualReservationPage = dynamic(() => import("@/components/reservation/manual/ManualReservationPage"), {suspense: true ,ssr: false})

const page = () => {
  return (
    <>
      <ManageDelay component={<ManualReservationPage/>}/>
    </>
  )
}

export default page