import RenderSSR from '@/components/rendering/RenderSSR'
import dynamic from 'next/dynamic'
import React from 'react'

const AboutPage = dynamic(() => {return import('@/pageComponents/about/AboutPage')}, {suspense: true, ssr: true})

const page = () => {

  return (
    <RenderSSR ssrComponent={<AboutPage/>}/>
  )
}

export default page 