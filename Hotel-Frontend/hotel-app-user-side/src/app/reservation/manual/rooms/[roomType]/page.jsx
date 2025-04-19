import { getRoomsByType } from '@/services/asyncHotelUserService'
import RenderCSR from '@/components/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const RoomChoicePage = dynamic(() => import('@/pageComponents/reservation/manual/RoomChoicePage'), {suspense: true, ssr: true})

const getData = async (roomType) => {
  return await getRoomsByType(roomType).then(res => {return res.data}).catch(e => console.log(e.response))
}

const page = async ({params}) => {

  const {roomType} = await params

  const rooms = await getData(roomType)

  return (
    <RenderCSR csrComponent={<RoomChoicePage rooms={rooms}/>}/>
  )
}

export default page