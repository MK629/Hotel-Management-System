'use client'

import { ErrorMessageContext } from '@/context/contexts/ErrorMessageConext'
import React, { useContext } from 'react'
import { BsXCircle, BsXCircleFill } from 'react-icons/bs'
import ReactModal from 'react-modal'

const ErrorMessage = ({msg, display}) => {

  const {closeError} = useContext(ErrorMessageContext)

  return (
    <ReactModal isOpen={display} ariaHideApp={false} className={'relative bg-[#EAE0D2] w-fit h-fit p-18 rounded-2xl text-center'} overlayClassName={'fixed inset-0 bg-black/50 h-[100vh] w-full flex items-center justify-center'}>        
        <div className='flex text-[#b30202] justify-center mb-6 font-extrabold text-xl'>
            <BsXCircleFill size={30}/><h1 className='ml-1.5'>Error</h1>
        </div>

        <h1 className='font-semibold'>{msg}</h1>

        <div className='flex justify-center'>
            <div className='bg-[#2D2D2D] hover:bg-[#414040] transition text-[#EAE0D2] rounded-lg px-3 py-1 mt-8 text-lg font-semibold' onClick={() => {closeError()}}>Close</div>
        </div>
    </ReactModal>
  )
}

export default ErrorMessage