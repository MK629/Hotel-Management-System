"use client"

import React from 'react'
import { formToJSON } from 'axios'
import { useRouter } from 'next/navigation'
import { sendRegisterInfo } from '@/services/authenticationService'

const RegisterPage = () => {

    const router = useRouter()

    const handleRegister = async (e) => {
        const registerInfo = formToJSON(e)
        let response
        let error
    
        await sendRegisterInfo(registerInfo).then((res) => {response = res.data}).catch((e) => {error = e.response.data})
        
        if(response && response === 'success'){
          router.push("/auth/login")
        }
        else{
          window.alert(error)
        }
    }

    return (
        <div className='p-5'>
          <div className='rounded-2xl bg-[#D7C9AE] mx-auto lg:w-[40em] md:w-[35em] sm:w-[30em] p-10 mt-52'>
            <form onSubmit={(e) => {e.preventDefault(); handleRegister(e.target)}} className='items-center mx-auto'>
              <div className='text-center flex mx-auto justify-center'>
                <div className='flex-col text-[#252525] font-semibold'>
                  <div className='p-1 text-right'>
                    <label htmlFor="username">Username:</label>
                  </div>
    
                  <div className='p-1 text-right mt-4'>
                    <label htmlFor="email">E-Mail:</label>
                  </div>
    
                  <div className='p-1 text-right mt-4'>
                    <label htmlFor="password">Password:</label>
                  </div>
                </div>
    
                <div className='flex-col w-2/5 text-[#2D2D2D]'>
                  <input id='username' placeholder='Enter username.' type="text" name='username' className='sm:w-[10em] md:w-[12em] lg:w-[14em] max-w-[14em] min-w-[10em] rounded-md py-1 px-2 font-medium bg-[#EAE0D2] focus:outline-none'/>
                  <input id='email' placeholder='Enter email.' type="text" name='email' className='sm:w-[10em] md:w-[12em] lg:w-[14em] max-w-[14em] min-w-[10em] rounded-md py-1 px-2 font-medium shadow-[#2D2D2D] mt-4 bg-[#EAE0D2] focus:outline-none'/>
                  <input id='password' placeholder='Enter password.' type="text" name='password' className='sm:w-[10em] md:w-[12em] lg:w-[14em] max-w-[14em] min-w-[10em] rounded-md py-1 px-2 font-medium shadow-[#2D2D2D] mt-4 bg-[#EAE0D2] focus:outline-none'/>
                </div>
              </div>
    
              <button className='bg-[#2D2D2D] hover:bg-[#414040] transition lg:mx-[41%] md:mx-[41%] sm:mx-[38%] mx-[38%] text-white rounded-lg px-3 py-1 mt-4 text-lg font-semibold' type='submit'>Register</button>
            </form>
          </div>
        </div>
      )
}

export default RegisterPage