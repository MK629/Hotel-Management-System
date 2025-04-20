'use client'

import { ProfileManagementContext } from '@/contexts/contextComponents/ProfileManagementContext'
import { login } from '@/services/authenticationService'
import { getLoggedInUser, tempSavePassword } from '@/services/credentialsService'
import React, { useContext } from 'react'

const PasswordVaidation = () => {

  const {editingStep, cleanUp} = useContext(ProfileManagementContext)

  async function validatePassword(e){

    const loginInfo = {
      usernameOrEmail: await getLoggedInUser(),
      password: window.btoa(e.password.value)
    }

    let response

    await login(loginInfo).then(res => {response = res.data}).catch(e => {window.alert(e.response.data)})

    if(response && response === 'success'){
      await tempSavePassword(e.password.value)
      editingStep()
    }
  }
    
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col bg-[#D7C9AE] p-4 space-y-6 rounded-xl'>
        <form onSubmit={(e) => {e.preventDefault(); validatePassword(e.target)}} className='flex-col'>
          <div>
            <input id='password' name='password' type="text" className='bg-[#EAE0D2]'/>
          </div>

          <div className='flex'>
            <button type='submit'>Next</button>
            <div onClick={() => {cleanUp()}}>Cancel</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordVaidation