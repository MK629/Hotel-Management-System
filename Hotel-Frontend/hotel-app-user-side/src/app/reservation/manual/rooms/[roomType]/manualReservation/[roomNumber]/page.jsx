import RenderCSR from '@/components/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const ManualReservationFormPage = dynamic(() => {return import("@/pageComponents/reservation/manual/ManualReservationFormPage")}, {suspend: true, ssr: true})

const page = async ({params}) => {

  const {roomNumber, roomType} = await params
    
  return (
    <RenderCSR csrComponent={<ManualReservationFormPage roomType={roomType} roomNumber={roomNumber}/>}/>
  )
}

export default page