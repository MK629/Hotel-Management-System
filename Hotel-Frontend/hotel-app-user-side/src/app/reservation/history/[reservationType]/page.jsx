import { getReservations } from '@/services/asyncHotelUserService'
import RenderCSR from '@/components/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const ReservationHistoryPage = dynamic(() => {return import("@/pageComponents/reservation/history/ReservationHistoryPage")}, {suspense: true, ssr: true})

const getData = async (reservationType) => {
  return await getReservations(reservationType).then(res => {return res.data.reverse()}).catch(e => console.log(e.response.data))
}

const page = async ({params}) => {

  const {reservationType} = await params 

  const reservations = await getData(reservationType)
    
  return (
    <RenderCSR csrComponent={<ReservationHistoryPage reservations={reservations}/>}/>
  )
}

export default page