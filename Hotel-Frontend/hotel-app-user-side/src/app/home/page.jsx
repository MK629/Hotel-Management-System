"use client"

import ManageDelay from '@/utilComponents/rendering/ManageDelay'
import dynamic from 'next/dynamic'
import React from 'react'

const HomePage = dynamic(() => import("@/components/home/HomePage"), {suspense: true ,ssr: false})

const page = () => {
  return (
    <ManageDelay component={<HomePage/>}/>
  )
}

export default page