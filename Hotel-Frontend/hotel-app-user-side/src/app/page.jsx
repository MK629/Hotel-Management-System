import RenderSSR from '@/utilComponents/rendering/RenderSSR'
import dynamic from 'next/dynamic'
import React from 'react'

const RootPage = dynamic(() => import('@/components/root/RootPage'), {suspense: true, ssr: true})

const page = () => {
  return (
    <>
      <RenderSSR ssrComponent={<RootPage/>}/>
    </>
  )
}

export default page