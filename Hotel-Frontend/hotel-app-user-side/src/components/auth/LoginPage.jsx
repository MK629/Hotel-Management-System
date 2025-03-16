'use client'

import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import {saveLoggedInUser, saveToken} from '@/services/credentialsService'
import { login } from '@/services/authenticationService'
import { formToJSON } from 'axios'
import { ChangeTrackerContext } from '@/contexts/contextComponents/ChangeTrackerContext'

const LoginPage = () => {

  const router = useRouter()
  const {flipChangeTracker} = useContext(ChangeTrackerContext)

  async function sendLoginInfo(e) {
    
    const loginInfo = formToJSON(e)
    let response
    let error

    await login(loginInfo).then((res) => {response = res.data}).catch((e) => {error = e.response.data})
    
    if(response && response === "success"){
      await saveLoggedInUser(loginInfo.usernameOrEmail)
      await saveToken('Basic ' + window.btoa(loginInfo.usernameOrEmail + ":" + loginInfo.password))
      router.push("/home")
      flipChangeTracker()
    }
    else{
      window.alert(error)
    }
  }

  return (
    <div className='p-1'>
      <div className='rounded-2xl bg-[#D7C9AE] mx-auto lg:w-[40em] md:w-[35em] sm:w-[30em] p-8 mt-52'>
        <form onSubmit={(e) => {e.preventDefault(); sendLoginInfo(e.target)}} className='items-center mx-auto'>
          <div className='text-center flex mx-auto justify-center'>
            <div className='flex-col text-[#252525] font-semibold'>
              <div className='p-1 text-right'>
                <label htmlFor="usernameOrEmail">Username/E-Mail:</label>
              </div>
 
              <div className='p-1 text-right mt-4'>
                <label htmlFor="password">Password:</label>
              </div>
            </div>

            <div className='flex-col w-2/5 text-[#2D2D2D]'>
              <input id='usernameOrEmail' type="text" name='usernameOrEmail' placeholder='Enter username/e-mail.' className='sm:w-[10em] md:w-[12em] lg:w-[14em] max-w-[14em] min-w-[10em] rounded-md py-1 px-2 font-medium bg-[#EAE0D2] focus:outline-none'/>
              <input id='password' type="text" name='password' placeholder='Enter password.' className='sm:w-[10em] md:w-[12em] lg:w-[14em] max-w-[14em] min-w-[10em] rounded-md py-1 px-2 font-medium shadow-[#2D2D2D] mt-4 bg-[#EAE0D2] focus:outline-none'/>
            </div>
          </div>

          <button className='bg-[#2D2D2D] hover:bg-[#414040] transition lg:mx-[43%] md:mx-[43%] sm:mx-[41%] mx-[41%] text-white rounded-lg px-3 py-1 mt-4 text-lg font-semibold' type='submit'>Login</button>
        </form>
      </div>

      <h1 className='text-center p-6 font-semibold text-[#EAE0D2]'>Don't have an account? <button onClick={() => {router.push("/auth/register")}} className='bg-[#A68763] hover:bg-[#d3af87] transition px-3 py-1 rounded-xl text-[#2D2D2D]'>Register</button> now!</h1>
    </div>
  )
}

export default LoginPage
