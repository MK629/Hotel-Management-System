'use client'

import React, { useContext, useEffect, useState } from 'react'
import {MdMenu} from 'react-icons/md'
import { isLoggedIn, logout } from '../../services/credentialsService'
import HeaderNavItem from "../../utilComponents/navigation/HeaderNavItem"
import MiniProfile from '../../utilComponents/profile/MiniProfile'
import { BsClipboard2Fill, BsClockFill, BsJournalBookmarkFill, BsPenFill} from 'react-icons/bs'
import { AiOutlineCaretDown} from 'react-icons/ai'
import { ChangeTrackerContext } from '@/contexts/contextComponents/ChangeTrackerContext'
import { FaHotel } from 'react-icons/fa'
import Link from 'next/link'

const Header = () => {

  const [loginState, setLoginState] = useState(false)
  const {changeTracker, flipChangeTracker} = useContext(ChangeTrackerContext)
  const [sidebar, setSidebar] = useState(false)
  const [resvHistoryDrawer, setResvHistoryDrawer] = useState(false)

  const flipSidebar = () => {
    setSidebar(!sidebar)
  }

  const flipResvHistoryDrawer = () => {
    setResvHistoryDrawer(!resvHistoryDrawer)
  }

  async function handleLogout() {
    await logout()
    flipChangeTracker()
  }

  async function updateLoginState() {
    setLoginState(await isLoggedIn())
  }

  useEffect(() => {
    updateLoginState()
  }, [changeTracker])

  return (
    <header className='flex justify-between sticky top-0 z-10 bg-[#2D2D2D]'>
      <div className='pt-3.5 px-2.5 flex justify-evenly'>
        <MdMenu size={35} className='font-bold text-[#EAE0D2] mt-1.5 hover:text-[#D7C9AE] transition' onClick={() => {flipSidebar()}}/>
        <Link href={"/"} className='text-[#EAE0D2] ml-4 mt-2 flex text-center'>
          <FaHotel size={34}/> 
          <h1 className='text-center font-extrabold ml-2 text-2xl'>Bayview</h1> 
        </Link>
      </div>

      <nav className='flex justify-evenly pt-3.5 px-2.5'>
        <HeaderNavItem link={"/home"} text={"Home"}/>
        <HeaderNavItem link={"/reservation/standard"} text={"Book"}/>
        <HeaderNavItem link={"/auth/login"} text={loginState ? "Logout" : "Login"} func={loginState ? () => {handleLogout()} : () => {}}/>
      </nav>

      <div className={`fixed z-20 bg-black ${sidebar ? "opacity-75 w-full h-screen" : "opacity-0 w-0 h-0"} transition duration-[400ms]`} onClick={() => {sidebar ? flipSidebar() : {}}}></div>

      <div className={`fixed top-0 ${sidebar ?  'left-0 ' : 'left-[-100%]'} w-[350px] h-screen bg-[#EAE0D2] z-30 duration-[400ms]`}>
        {
          loginState ? 
          <div className='h-screen'>
            <ul>
              <li><MiniProfile/></li>
              <li className='font-bold mt-1 text-[#2D2D2D]'>
                <div className='flex justify-between text-[16px] hover:bg-[#D7C9AE] py-2.5 px-10 rounded-xl transition' onClick={() => {flipResvHistoryDrawer()}}>
                  <BsClockFill size={25} className=''/> Reservation History <AiOutlineCaretDown size={25} className={`duration-[400ms] transform ${resvHistoryDrawer ?  'rotate-x-180' : "rotate-x-0"}`}/>
                </div>

                <ul className={`mx-auto ${resvHistoryDrawer ? '' : 'hidden'} text-[16px]`}>
                  <li className='hover:bg-[#D7C9AE] transition py-2 px-3 rounded-xl mt-1'>
                    <div className='flex'>
                      <BsJournalBookmarkFill size={22} className='mr-2 ml-14'/> All
                    </div>
                  </li>

                  <li className='hover:bg-[#D7C9AE] transition py-2 px-3 rounded-xl mt-1'>
                    <div className='flex'>
                      <BsClipboard2Fill size={22} className='mr-2 ml-14'/> Standard
                    </div>
                  </li>
                  
                  <li className='hover:bg-[#D7C9AE] transition py-2 px-3 rounded-xl mt-1'>
                    <div className='flex'>
                      <BsPenFill size={22} className='mr-2 ml-14'/> Manual
                    </div>
                  </li>
                </ul>
              </li>
              <li>About</li>
            </ul>
          </div>
          :
          <div className='flex h-screen'>
            <h1 className='text-[18px] my-auto mx-auto text-[#EAE0D2] text-center bg-[#2D2D2D] px-3 py-1 rounded-md font-extrabold'>You are not logged in</h1>
          </div>
        }
      </div>

    </header>
  )
}

export default Header