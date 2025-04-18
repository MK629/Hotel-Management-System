"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { BsClipboard2Fill, BsFillBalloonHeartFill, BsFillPenFill, BsInfoCircleFill, BsPersonBadgeFill } from 'react-icons/bs'

const HomePage = ({sliderImages}) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()
  const sliderImageUrl = "/images/homeSliderImages/"

  const slideLeft = () => {
    if(currentIndex <= 0){
      setCurrentIndex(4)
    }
    else{
      setCurrentIndex(currentIndex - 1)
    }
  }

  const slideRight = () => {
    if(currentIndex >= 4){
      setCurrentIndex(0)
    }
    else{
      setCurrentIndex(currentIndex + 1)
    }
  }

  const navigate = (path) => {
    router.push(path)
  }

  return (
    <div>
      <div className='container mx-auto mt-5'>
        <div className='flex my-auto mx-auto lg:w-3/5 border-6 border-[#A68763] rounded-lg'>
          <div className='text-[#2D2D2D] bg-[#EAE0D2] hover:bg-[#D7C9AE] hover:cursor-pointer transition duration-300 p-2 flex' onClick={() => slideLeft()}>
            <AiOutlineCaretLeft size={25} className='my-auto'/>
          </div>
          <div className=''>
            <Image src={sliderImages || sliderImages[currentIndex] ? sliderImageUrl + sliderImages[currentIndex] : sliderImageUrl + "sliderImg1.jpg"} alt='sliderImg' height={800} width={800} className='transition-all transform duration-300 h-auto w-auto'/>
          </div>
          <div className='text-[#2D2D2D] bg-[#EAE0D2] hover:bg-[#D7C9AE] hover:cursor-pointer transition duration-300 p-2 flex' onClick={() => slideRight()}>
            <AiOutlineCaretRight size={25} className='my-auto'/>
          </div>
        </div>

        <h1 className='mx-auto text-center text-[#D7C9AE] lg:text-4xl md:text-4xl sm:text-3xl text-2xl font-extrabold mt-8 w-2/4 items-center'>Adventure awaits!</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 p-4 gap-12 mt-12 text-[#2D2D2D] text-center items-center font-extrabold mx-auto'>
          <div className='flex-col text-center bg-[#EAE0D2] hover:bg-[#D7C9AE] hover:scale-[102%] transition p-3.5 rounded-lg' onClick={() => {navigate("/reservation/standard")}}>
            <BsClipboard2Fill size={45} className='mx-auto'/>
            <h2 className='mt-4 lg:text-[15px] md:text-[14x] sm:text-[14px] text-[14px]'>Standard Reservation</h2>
          </div>

          <div className='flex-col text-center bg-[#EAE0D2] hover:bg-[#D7C9AE] hover:scale-[102%] transition p-3.5 rounded-lg' onClick={() => {navigate("/reservation/manual")}}>
            <BsFillPenFill size={45} className='mx-auto'/>
            <h2 className='mt-4 lg:text-[15px] md:text-[14x] sm:text-[14px] text-[14px] px-2'>Manual Reservation</h2>
          </div>

          <div className='flex-col text-center bg-[#EAE0D2] hover:bg-[#D7C9AE] hover:scale-[102%] transition p-3.5 rounded-lg' onClick={() => {navigate("/profile")}}>
            <BsPersonBadgeFill size={45} className='mx-auto'/>
            <h2 className='mt-4 lg:text-[15px] md:text-[14x] sm:text-[14px] text-[14px]'>Profile</h2>
          </div>

          <div className='flex-col text-center bg-[#EAE0D2] hover:bg-[#D7C9AE] hover:scale-[102%] transition p-3.5 rounded-lg' onClick={() => {navigate("/about")}}>
            <BsInfoCircleFill size={45} className='mx-auto'/>
            <h2 className='mt-4 lg:text-[15px] md:text-[14x] sm:text-[14px] text-[14px]'>About</h2>
          </div>
        </div>
      </div>


    </div>
  )
}

export default HomePage