"use client"

import RenderCSR from '@/utilComponents/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const ManualReservationPage = dynamic(() => import("@/components/reservation/manual/ManualReservationPage"), {suspense: true ,ssr: false})

const page = () => {
  return (
    <>
      <RenderCSR csrComponent={<ManualReservationPage/>}/>
    </>
  )
}

export default page