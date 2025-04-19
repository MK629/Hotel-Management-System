import RenderSSR from '@/components/rendering/RenderSSR'
import dynamic from 'next/dynamic'
import React from 'react'

const RootPage = dynamic(() => import('@/pageComponents/root/RootPage'), {suspense: true, ssr: true})

const page = () => {
  return (
    <>
      <RenderSSR ssrComponent={<RootPage/>}/>
    </>
  )
}

export default page