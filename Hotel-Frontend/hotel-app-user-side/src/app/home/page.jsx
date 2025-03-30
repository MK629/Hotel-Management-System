import RenderCSR from '@/utilComponents/rendering/RenderCSR'
import dynamic from 'next/dynamic'
import React from 'react'

//Makes a client component render as a Server Component (HTML first, then hydrate js) but still enables it to use client-side React hooks.
//Render with SSR, then use client side hooks.
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

  //Wraps HomePage.jsx in <Suspense/>
  return (
    <>
      <RenderCSR csrComponent={<HomePage sliderImages={sliderImages}/>}/>
    </>
  )
}

export default page