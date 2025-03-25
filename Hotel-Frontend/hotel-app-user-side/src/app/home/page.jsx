import RenderCSR from '@/utilComponents/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

const HomePage = dynamic(() => import("@/components/home/HomePage"), {suspense: true ,ssr: true})

const initSliderImages = async () => {
  let addImages = []

  for(let i = 1; i <= 5; i++){
    addImages.push("sliderImg" + i  + ".jpg")
  }

  return addImages;
}

const page = async () => {

  const sliderImages = await initSliderImages()

  return (
    <>
      <RenderCSR csrComponent={<HomePage sliderImages={sliderImages}/>}/>
    </>
  )
}

export default page