import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import React, { useContext } from 'react'

const ChangeUsername = () => {

  const {cleanUp} = useContext(ProfileManagementContext)  
  return (
    <div>
        <div>
            Change Username
        </div>

        <div onClick={() => {cleanUp()}}>
            finish
        </div>
    </div>
  )
}

export default ChangeUsername