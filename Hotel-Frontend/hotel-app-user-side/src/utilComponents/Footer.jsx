import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#EAE0D2]'>
        <h3 className='font-medium text mx-auto text-center text-[#2D2D2D] pt-4'>Subscribe to our socials!</h3>
        <div className='flex justify-evenly mt-4 pb-14 pt-2 w-2/4 mx-auto text-[#2D2D2D]'>
          <a href="">
            <FaYoutube size={30}/>
          </a>
          <a href="">
            <FaFacebook size={30}/>
          </a>
          <a href="">
            <FaInstagram size={30}/>
          </a>
          <a href="">
            <FaTwitter size={30}/>
          </a>
          <a href="">
            <FaDiscord size={30}/>
          </a>
          <a href="">
            <FaLinkedinIn size={30}/>
          </a>
        </div>
    </div>
  )
}

export default Footer