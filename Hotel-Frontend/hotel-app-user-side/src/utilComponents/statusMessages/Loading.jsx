import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen bg-[#2D2D2D]'>
        <div className='flex justify-center items-center'>
            <img src="/images/icons/loadingIcon/loadingSpinner.svg" className='w-20 h-20' alt="loadingSpinner.svg" />
        </div>
    </div>
  )
}

export default Loading