import dynamic from 'next/dynamic'
import React from 'react'

const StandardReservationFormPage = dynamic(() => import('@/components/reservation/standard/StandardReservationFormPage'), {suspense: true, ssr: true})

const page = async ({params}) => {

  const {roomType} = await params

  return (
    <StandardReservationFormPage roomType={roomType}/>
  )
}

export default page