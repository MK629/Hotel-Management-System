import ManageDelay from '@/utilComponents/rendering/ManageDelay'
import dynamic from 'next/dynamic'
import React from 'react'

const RootPage = dynamic(() => import('@/components/root/RootPage'), {suspense: true, ssr: true})

const page = () => {
  return (
    <>
      <ManageDelay component={<RootPage/>}/>
    </>
  )
}

export default page