import { formToJSON } from 'axios'
import React, { useState } from 'react'
import { getLoggedinUser, saveLoggedInUser, sendLoginInfo, storeToken } from '../../services/authenticationService'
import { NavLink, useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate()

  const handleLogin = async (e) => {
    const loginInfo = formToJSON(e)
    let response
    let error

    await sendLoginInfo(loginInfo).then((res) => {response = res.data}).catch((e) => {error = e.response.data})
    
    if(response){
      saveLoggedInUser(loginInfo.usernameOrEmail)
      storeToken('Basic ' + window.btoa(loginInfo.usernameOrEmail + ":" + loginInfo.password))
      navigate(0)
    }
    else{
      window.alert(error)
    }
  }

  return (
    <div className='p-1'>
      <div className='rounded-2xl bg-[#D7C9AE] mx-auto lg:w-[40em] md:w-[35em] sm:w-[30em] p-8 mt-52'>
        <h1 className='mb-10 text-[#252525] font-extrabold text-xl text-center mx-auto'>Welcome, Admin!</h1>
        <form onSubmit={(e) => {e.preventDefault(); handleLogin(e.target)}} className='items-center mx-auto'>
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
              <input id='usernameOrEmail' type="text" name='usernameOrEmail' className='sm:w-[10em] md:w-[12em] lg:w-[14em] max-w-[14em] min-w-[10em] rounded-md py-1 px-2 font-medium bg-[#EAE0D2] focus:outline-none'/>
              <input id='password' type="text" name='password' className='sm:w-[10em] md:w-[12em] lg:w-[14em] max-w-[14em] min-w-[10em] rounded-md py-1 px-2 font-medium shadow-[#2D2D2D] mt-4 bg-[#EAE0D2] focus:outline-none'/>
            </div>
          </div>

          <button className='bg-[#2D2D2D] hover:bg-[#414040] transition mx-[42%] text-white rounded-lg px-3 py-1 mt-4 text-lg font-semibold' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
