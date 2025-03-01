"use client"

import Header from "@/utilComponents/Header";
import './global.css'
import { isLoggedIn } from "@/services/authenticationService";
import { ShieldContext } from "@/contexts/ShieldContext";
import { useRouter } from "next/navigation";
import {ChangeTrackerContext } from "@/contexts/ChangeTrackerContext";
import { useState } from "react";
import Footer from "@/utilComponents/Footer";

export default function RootLayout({ children }) {

  const router = useRouter()
  const [changeTracker, setChangeTracker] = useState(false)

  const flipChangeTracker = () => {
    setChangeTracker(!changeTracker)
  }

  const protect = () => {
    if(!isLoggedIn()){
        router.push("/auth/login")
    }
  }

  return (
    <html lang="en">
      <body className='bg-[#2D2D2D]'>
        <div>
          <ChangeTrackerContext.Provider value={{changeTracker, flipChangeTracker}}>
          <ShieldContext.Provider value={{protect}}>
            <div className="min-h-screen">
            <Header/>
            {children}
            </div>
            <Footer/>
          </ShieldContext.Provider>
          </ChangeTrackerContext.Provider>
        </div>
      </body>
    </html>
  );
}
