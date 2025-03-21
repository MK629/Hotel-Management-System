"use client"

import RenderCSR from '@/utilComponents/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const StandardReservationPage = dynamic(() => import("@/components/reservation/standard/StandardReservationPage"), { suspense: true, ssr: false})

const page = () => {
  return (
    <>
      <RenderCSR csrComponent={<StandardReservationPage/>}/>
    </>
  )
}

export default page