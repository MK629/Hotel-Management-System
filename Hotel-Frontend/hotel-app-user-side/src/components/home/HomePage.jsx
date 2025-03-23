"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const HomePage = () => {

  const [sliderImages, setSliderImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const sliderImageUrl = "/images/homeSliderImages/"

  const slideLeft = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1)
    }
  }

  const slideRight = () => {
    if(currentIndex < 4){
      setCurrentIndex(currentIndex + 1)
    }
  }

  const initSliderImages = () => {
    let addImages = []

    for(let i = 1; i <= 5; i++){
      addImages.push("sliderImg" + i  + ".jpg")
    }

    setSliderImages(addImages)
  }

  useEffect(() => {
    initSliderImages()
  }, [])

  return (
    <div>
      <div className='container mx-auto mt-5'>
        <div className='flex my-auto mx-auto lg:w-3/5 border-6 border-[#A68763] rounded-lg'>
          <div className='text-[#2D2D2D] bg-[#EAE0D2] hover:bg-[#D7C9AE] transition duration-300 p-2 flex' onClick={() => slideLeft()}>
            <AiOutlineCaretLeft size={25} className='my-auto'/>
          </div>
          <div className=''>
            <Image src={sliderImages || sliderImages[currentIndex] ? sliderImageUrl + sliderImages[currentIndex] : null} alt='sliderImg' height={800} width={800} className='transition-all transform duration-300 h-auto w-auto'/>
          </div>
          <div className='text-[#2D2D2D] bg-[#EAE0D2] hover:bg-[#D7C9AE] transition duration-300 p-2 flex' onClick={() => slideRight()}>
            <AiOutlineCaretRight size={25} className='my-auto'/>
          </div>
        </div>

        <h1 className='mx-auto text-center text-[#D7C9AE] lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-extrabold mt-8'>Adventure awaits!</h1>

        <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2'>

        </div>
      </div>


    </div>
  )
}

export default HomePage