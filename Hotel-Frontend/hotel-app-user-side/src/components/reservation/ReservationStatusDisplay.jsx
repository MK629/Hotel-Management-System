import React from 'react'
import {BsClipboardCheck, BsClipboardX, BsDoorOpen, BsStopwatch } from 'react-icons/bs';

const ReservationStatusDisplay = ({reservationStatus}) => {

  const getStatusColour = (reservationStatus) => {
    switch(reservationStatus){
      case "Awaiting": return "text-[#c45602]";
      case "Checked_In": return "text-[#01548c]";
      case "Checked_Out": return "text-[#018c04]";
      case "Cancelled": return "text-[#b30202]";
      default: return ""
    }
  }
  
  const getStatusIcon = () => {
    switch(reservationStatus){
      case "Awaiting": return <BsStopwatch size={20} className='ml-1'/>;
      case "Checked_In": return <BsClipboardCheck size={20} className='ml-1'/>;
      case "Checked_Out": return <BsDoorOpen size={20} className='ml-1'/>;
      case "Cancelled": return <BsClipboardX size={20} className='ml-1'/>;
      default: return ""
    }
  }

  return (
    <div className={`${getStatusColour(reservationStatus)} font-extrabold flex justify-center`}>
        {reservationStatus.replace("_","-")} {getStatusIcon(reservationStatus)}
    </div>
  )
}

export default ReservationStatusDisplay