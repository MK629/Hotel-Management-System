import React from 'react'

const Loading = () => {
  return (
    <div className='flex h-full w-full z-40 bg-black fixed opacity-25'>
        <div className='my-auto mx-auto'>
            <img src="/images/icons/loadingIcon/loadingSpinner.svg" className='w-20 h-20' alt="loadingSpinner.svg" />
        </div>
    </div>
  )
}

export default Loading