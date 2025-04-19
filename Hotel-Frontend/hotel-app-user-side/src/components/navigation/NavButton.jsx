"use client"

import Link from 'next/link'
import React from 'react'


const NavButton = ({link, text}) => {
  return (
    <div className='mt-12'>
        <Link className='bg-[#EAE0D2] hover:bg-[#D7C9AE] transition text-[#2D2D2D] text-2xl font-extrabold px-3 py-2 rounded-xl' href={link}>{text}</Link>
    </div>
  )
}

export default NavButton