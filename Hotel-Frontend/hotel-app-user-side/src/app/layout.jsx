"use client"

import Header from "@/utilComponents/Header";
import './global.css'
import {ChangeTrackerContext } from "@/contexts/ChangeTrackerContext";
import { useState } from "react";
import Footer from "@/utilComponents/Footer";

export default function RootLayout({ children }) {

  const [changeTracker, setChangeTracker] = useState(false)

  const flipChangeTracker = () => {
    setChangeTracker(!changeTracker)
  }

  return (
    <html lang="en">
      <body className='bg-[#2D2D2D]'>
        <div>
          <ChangeTrackerContext.Provider value={{changeTracker, flipChangeTracker}}>
            <div className="min-h-screen">
            <Header/>
            {children}
            </div>
            <Footer/>
          </ChangeTrackerContext.Provider>
        </div>
      </body>
    </html>
  );
}
