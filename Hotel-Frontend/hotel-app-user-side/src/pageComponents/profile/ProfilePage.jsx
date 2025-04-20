'use client'

import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import ChangePassword from '@/components/profile/ChangePassword'
import ChangeUsername from '@/components/profile/ChangeUsername'
import PasswordVaidation from '@/components/profile/PasswordVaidation'
import ProfileDetails from '@/components/profile/ProfileDetails'
import React, { useEffect, useState } from 'react'
import { brushUp } from '@/services/credentialsService'

const ProfilePage = () => {

  const [managementStep, setManagementStep] = useState(0)
  const [managementItem, setManagementItem] = useState(0)

  const validationStep = () => {
    setManagementStep(1)
  }

  const editingStep = () => {
    setManagementStep(2)
  }

  const changeUsername = () => {
    setManagementItem(1)
  }

  const changePassword = () => {
    setManagementItem(2)
  }

  async function cleanUp(){
    setManagementStep(0)
    setManagementItem(0)
    await brushUp()
  }

  useEffect(() => {
    cleanUp()
  }, [])

  const renderContent = (managementStep, managementItem) => {
    switch(managementStep){
        case 0: return (<ProfileDetails/>);
        case 1: return (<PasswordVaidation/>);
        case 2: {
            switch(managementItem){
                case 1: return (<ChangeUsername/>);
                case 2: return (<ChangePassword/>);
                default: return (<ProfileDetails/>);
            }
        }
        default: return (<ProfileDetails/>);
    }
  }
    
  return (
    <div>
        <ProfileManagementContext.Provider value={{validationStep, editingStep, changeUsername, changePassword, cleanUp}}>
            {
                renderContent(managementStep, managementItem)
            }
        </ProfileManagementContext.Provider>
    </div>
  )
}

export default ProfilePage