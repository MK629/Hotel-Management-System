import React, { Suspense } from 'react'
import Loading from '../status/Loading'

const ManageDelay = ({component}) => {
  return (
    <Suspense fallback={<Loading/>}>
        {component}
    </Suspense>
  )
}

export default ManageDelay