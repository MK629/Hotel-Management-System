"use client"

import RenderCSR from '@/utilComponents/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const HomePage = dynamic(() => import("@/components/home/HomePage"), {suspense: true ,ssr: false})

const page = () => {
  return (
    <>
      <RenderCSR csrComponent={<HomePage/>}/>
    </>
  )
}

export default page