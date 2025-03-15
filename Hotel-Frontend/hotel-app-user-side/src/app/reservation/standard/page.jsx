"use client"

import Loading from '@/utilComponents/statusMessages/Loading'
import dynamic from 'next/dynamic'
import React, { lazy, Suspense } from 'react'

const StandardReservationPage = dynamic(() => import("./StandardReservationPage"), { suspense: true, ssr: false})

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <StandardReservationPage/>
      </Suspense>
    </>
  )
}

export default page