'use client'

import { SuccessMessageContext } from '@/context/contexts/SuccessMessageContext'
import React, { useContext } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import ReactModal from 'react-modal'

const SuccessMessage = ({msg, display}) => {

  const {closeSuccess} = useContext(SuccessMessageContext)  

  return (
    <ReactModal isOpen={display} ariaHideApp={false} className={'relative bg-[#EAE0D2] w-fit h-fit p-18 rounded-2xl text-center'} overlayClassName={'fixed inset-0 bg-black/50 h-[100vh] w-full flex items-center justify-center'}>
        <div className='flex text-[#018c04] justify-center mb-6 font-extrabold text-xl'>
            <BsCheckCircleFill size={30}/><h1 className='ml-1.5'>Success</h1>
        </div>

        <h1 className='font-semibold'>{msg}</h1>

        <div className='flex justify-center'>
            <div className='bg-[#2D2D2D] hover:bg-[#414040] transition text-[#EAE0D2] rounded-lg px-3 py-1 mt-8 text-lg font-semibold' onClick={() => {closeSuccess()}}>Close</div>
        </div>
    </ReactModal>
  )
}

export default SuccessMessage