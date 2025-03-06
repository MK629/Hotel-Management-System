"use client"

import React, { useEffect } from 'react'
import { useState } from "react";
import { ChangeTrackerContext } from './contextComponents/ChangeTrackerContext';
import { initStandardReservationPage } from '@/services/hotelUserService';
import { CachedItemsContext } from './contextComponents/CachedItemsContext';


const GlobalContextManager = ({children}) => {

    const [changeTracker, setChangeTracker] = useState(false)
    const [roomTypes, setRoomTypes] = useState([])
    const [rooms, setRooms] = useState([])
    const [venues, setVenues] = useState([]) 

    const flipChangeTracker = () => {
        setChangeTracker(!changeTracker)
    }

    const initCachedData = async () => {
        await initStandardReservationPage().then(res => {setRoomTypes(res.data)}).catch(e => console.log(e.response.data))
    }

    useEffect(() => {
        initCachedData()
    },[])

    return (
        <>
            <CachedItemsContext.Provider value={{roomTypes, rooms, venues, initCachedData}}>
            <ChangeTrackerContext.Provider value={{changeTracker, flipChangeTracker}}>
                {children}
            </ChangeTrackerContext.Provider>
            </CachedItemsContext.Provider>
        </>
    )
}

export default GlobalContextManager