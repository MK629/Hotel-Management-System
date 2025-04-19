import RenderCSR from '@/components/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const StandardReservationFormPage = dynamic(() => import('@/pageComponents/reservation/standard/StandardReservationFormPage'), {suspense: true, ssr: true})

const page = async ({params}) => {

  const {roomType} = await params

  return (
    <RenderCSR csrComponent={<StandardReservationFormPage roomType={roomType}/>}/>
  )
}

export default page