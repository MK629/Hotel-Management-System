import Image from 'next/image'
import React from 'react'
import { BsPlus } from 'react-icons/bs'

const AboutPage = () => {

  const imgUrl = '/images/techStack/'  
  return (
    <div className='flex-col'>
        <div className='flex justify-center mt-8'>
            <div className='bg-[#EAE0D2] grid lg:grid-cols-6 md:grid-cols-6 sm:grid-cols-3 grid-cols-3 p-10 rounded-3xl gap-18'>
                <a href="https://docs.oracle.com/en/java/"><Image src={imgUrl + "Java.svg"} width={100} height={100} alt='Java.svg' className='hover:animate-pulse'/></a>
                <a href="https://spring.io/"><Image src={imgUrl + "Spring.svg"} width={100} height={100} alt='Spring.svg' className='hover:animate-pulse'/></a>
                <a href="https://dev.mysql.com/doc/"><Image src={imgUrl + "MySQL.svg"} width={100} height={100} alt='MySQL.svg' className='hover:animate-pulse'/></a>
                <a href="https://react.dev/learn"><Image src={imgUrl + "React.svg"} width={100} height={100} alt='React.svg' className='hover:animate-pulse'/></a>
                <a href="https://nextjs.org/docs"><Image src={imgUrl + "NextJs.svg"} width={100} height={100} alt='NextJs.svg' className='hover:animate-pulse'/></a>
                <a href="https://tailwindcss.com/"><Image src={imgUrl + "Tailwind.svg"} width={100} height={100} alt='Tailwind.svg' className='hover:animate-pulse'/></a>
            </div>
        </div>
    </div>
  )
}

export default AboutPage