import React from 'react'
import Image from 'next/image'
import NavButton from '@/utilComponents/navigation/NavButton';

const RootPage = () => {

    const imageUrl = "/images/rootImages/RootPic"

    return (
      <div className="p-4">
        <div className="flex-col justify-items-center justify-center text-center">
          <h1 className="text-[#D7C9AE] lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-extrabold">Welcome to Sunview Hotel!</h1>
  
          <div className='mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-3/4 gap-12 justify-items-center mt-8'>
            <Image alt='img.jpg' src={imageUrl + "1.jpg"} width={600} height={600} className='border-8 border-[#EAE0D2]'/>
            <Image alt='img.jpg' src={imageUrl + "2.jpg"} width={600} height={600} className='border-8 border-[#EAE0D2]'/>
            <Image alt='img.jpg' src={imageUrl + "3.jpg"} width={600} height={600} className='border-8 border-[#EAE0D2]'/>
            <Image alt='img.jpg' src={imageUrl + "4.jpg"} width={600} height={600} className='border-8 border-[#EAE0D2]'/>
          </div>
  
          <NavButton link={"/home"} text={"Plan your vacation!!"}/>
  
          <div className='mt-12 mb-12'>
          <Image alt='img.jpg' src={imageUrl + "5.jpg"} width={1325} height={1325} className='border-8 border-[#EAE0D2]'/>
          </div>
        </div>
      </div>
    );
}

export default RootPage