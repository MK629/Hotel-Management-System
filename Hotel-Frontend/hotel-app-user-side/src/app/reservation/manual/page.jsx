import { initRoomTypeChoices } from '@/services/asyncHotelUserService'
import RenderCSR from '@/utilComponents/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const ManualReservationPage = dynamic(() => import("@/components/reservation/manual/ManualReservationPage"), {suspense: true ,ssr: true})

const getData = async () => {
  return await initRoomTypeChoices().then(res => {return res.data}).catch(e => console.log(e))
}

const page = async () => {

  const roomTypeChoices = await getData()

  return (
    <>
      <RenderCSR csrComponent={<ManualReservationPage roomTypeChoices={roomTypeChoices}/>}/>
    </>
  )
}

export default page