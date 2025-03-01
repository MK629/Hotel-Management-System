'use client'

import React, { useContext, useEffect } from 'react'
import { ShieldContext } from '@/contexts/ShieldContext'

const Home = () => {

  const {protect} = useContext(ShieldContext)

  useEffect(() => {
    protect()
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default Home