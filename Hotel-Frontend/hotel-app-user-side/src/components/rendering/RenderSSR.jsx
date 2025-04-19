import React, { Suspense } from 'react'
import Loading from '../status/Loading'

const RenderSSR = ({ssrComponent}) => {
  return (
    <Suspense fallback={<Loading/>}>
        {ssrComponent}
    </Suspense>
  )
}

export default RenderSSR