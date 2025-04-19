'use client'

import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import React, { useContext } from 'react'

const PasswordVaidation = () => {

  const {editingStep} = useContext(ProfileManagementContext)
    
  return (
    <div>
        <div>Password Validation</div>
        <div onClick={() => {editingStep()}}>Next</div>
    </div>
  )
}

export default PasswordVaidation