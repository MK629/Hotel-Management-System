import RenderCSR from '@/components/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const ProfilePage = dynamic(() => {return import("@/pageComponents/profile/ProfilePage")}, { suspense: true, ssr: true})

const page = () => {
  return (
    <>
      <RenderCSR csrComponent={<ProfilePage/>}/>
    </>
  )
}

export default page