import React from 'react'
import NavItem from './utilComponents/NavItem'
import { MdMenu } from 'react-icons/md'
import { logout } from '../services/authenticationService'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const handleLogout = () => {
    logout(); 
    window.reload()
  }

  return (
    <header className='flex justify-between'>
      <div className='p-3'>
        <MdMenu size={35} className='font-bold text-[#EAE0D2] hover:text-[#D7C9AE] transition'/>
      </div>

      <nav className='flex justify-evenly p-3'>
        <NavItem link={"/"} text={"Home"}/>
        <NavItem link={"/bookingPage"} text={"Book"}/>
        <NavItem link={"/"} text={"Logout"} func={() => {handleLogout()}}/>
      </nav>
    </header>
  )
}

export default Header