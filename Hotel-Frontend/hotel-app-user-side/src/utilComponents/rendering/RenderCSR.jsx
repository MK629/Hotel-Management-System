"use client"

import React, { Suspense } from 'react'
import Loading from '../status/Loading'

const RenderCSR = ({csrComponent}) => {
  return (
    <Suspense fallback={<Loading/>}>
        {csrComponent}
    </Suspense>
  )
}

export default RenderCSR