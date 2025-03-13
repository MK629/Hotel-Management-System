"use client"

import { useState } from "react";
import { ChangeTrackerContext } from './contextComponents/ChangeTrackerContext';


const GlobalContextManager = ({children}) => {

    const [changeTracker, setChangeTracker] = useState(false)

    const flipChangeTracker = () => {
        setChangeTracker(!changeTracker)
    }

    return (
        <>
            <ChangeTrackerContext.Provider value={{changeTracker, flipChangeTracker}}>
                {children}
            </ChangeTrackerContext.Provider>
        </>
    )
}

export default GlobalContextManager