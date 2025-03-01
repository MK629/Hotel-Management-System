import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({link, text, func}) => {
  return (
    <NavLink to={link} className='font-semibold text-[#EAE0D2] text-lg hover:text-[#D7C9AE] group' onClick={func ? () => {func()} : () => {}}>
        <div className='px-4 py-1.5'>{text}</div>
        <div className='w-full h-[3px] bg-[#D7C9AE] scale-x-0 group-hover:scale-x-100 transition mt-0.5'></div>
    </NavLink>
  )
}

export default NavItem