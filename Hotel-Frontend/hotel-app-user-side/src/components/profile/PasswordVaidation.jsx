'use client'

import { ErrorMessageContext } from '@/context/contexts/ErrorMessageConext'
import { ProfileManagementContext } from '@/context/contexts/ProfileManagementContext'
import { login } from '@/services/authenticationService'
import { getLoggedInUser, tempSavePassword } from '@/services/credentialsService'
import React, { useContext, useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const PasswordVaidation = () => {

  const [showPassword, setShowPassword] = useState(false)

  const {editingStep, cleanUp} = useContext(ProfileManagementContext)

  const {showError} = useContext(ErrorMessageContext)

  async function validatePassword(e){

    const loginInfo = {
      usernameOrEmail: await getLoggedInUser(),
      password: window.btoa(e.password.value)
    }

    let response

    await login(loginInfo).then(res => {response = res.data}).catch(e => {showError(e.response.data)})

    if(response && response === 'success'){
      await tempSavePassword(e.password.value)
      editingStep()
    }
  }
    
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col bg-[#D7C9AE] p-4 space-y-6 rounded-xl lg:w-2/5 md:3/5 sm:2/4 mx-auto'>
        <form onSubmit={(e) => {e.preventDefault(); validatePassword(e.target)}} className='flex-col space-y-3'>
          <h1 className='p-0.5 text-[#2D2D2D] font-bold'>Enter your current password:</h1>

          <div className='flex'> 
            <input id='password' name='password' type={showPassword ? 'text' : 'password'} className='bg-[#EAE0D2] mx-auto w-full rounded-lg py-1 px-2 focus:outline-none text-[#2D2D2D] font-bold'/>
            <div className='mt-1 ml-2 hover:cursor-pointer' onClick={() => {setShowPassword(!showPassword)}}>
              {
                showPassword ? <BsEyeFill size={25}/> : <BsEyeSlashFill size={25}/> 
              }
            </div>
          </div>

          <div className='flex justify-center space-x-20 p-2'>
            <button className='bg-[#7c654b] hover:bg-[#d3af87] transition px-3 py-[5px] rounded-lg font-bold text-[#EAE0D2] hover:cursor-pointer' type='submit'>
              Next
            </button>

            <div className='bg-[#7c654b] hover:bg-[#d3af87] transition px-3 py-[5px] rounded-lg font-bold text-[#EAE0D2] hover:cursor-pointer' onClick={() => {cleanUp()}}>
              Cancel
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordVaidation