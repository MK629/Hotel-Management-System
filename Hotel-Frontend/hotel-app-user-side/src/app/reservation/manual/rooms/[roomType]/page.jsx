import { getAllRooms } from '@/services/asyncHotelUserService'
import RenderCSR from '@/utilComponents/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const RoomChoicePage = dynamic(() => import('@/components/reservation/manual/RoomChoicePage'), {suspense: true, ssr: true})

const getData = async () => {
  return await getAllRooms().then(res => {return res.data}).catch(e => console.log(e))
}

const filterRooms = (allRooms, roomType) => {
  return allRooms.filter(room => {return room.type === roomType});
}

const page = async ({params}) => {

  const {roomType} = await params

  const allRooms = await getData()

  const chosenRooms = filterRooms(allRooms, roomType)

  return (
    <RenderCSR csrComponent={<RoomChoicePage rooms={chosenRooms}/>}/>
  )
}

export default page