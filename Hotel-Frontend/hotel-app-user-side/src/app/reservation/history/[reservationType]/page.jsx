import { getReservations } from '@/services/asyncHotelUserService'
import RenderCSR from '@/utilComponents/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const ReservationHistoryPage = dynamic(() => {return import("@/components/reservation/history/ReservationHistoryPage")}, {suspense: true, ssr: true})

const getData = async (reservationType) => {
  return await getReservations(reservationType).then(res => {return res.data}).catch(e => console.log(e))
}

const page = async ({params}) => {

  const {reservationType} = await params 

  const reservations = await getData(reservationType)
    
  return (
    <RenderCSR csrComponent={<ReservationHistoryPage reservations={reservations}/>}/>
  )
}

export default page