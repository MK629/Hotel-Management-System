import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import React, { useContext } from 'react'

const ChangePassword = () => {

  const {cleanUp} = useContext(ProfileManagementContext) 

  return (
    <div>
        <div>
            Change Password
        </div>

        <div onClick={() => {cleanUp()}}>
            finish
        </div>
    </div>
  )
}

export default ChangePassword