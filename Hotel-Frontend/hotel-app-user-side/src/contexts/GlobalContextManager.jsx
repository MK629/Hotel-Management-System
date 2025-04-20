"use client"

import { useState } from "react";
import { ChangeTrackerContext } from './contextComponents/ChangeTrackerContext';
import { ProfileEditNoticeContext } from "./contextComponents/ProfileEditNoticeContext";


const GlobalContextManager = ({children}) => {

    const [changeTracker, setChangeTracker] = useState(false)

    const flipChangeTracker = () => {
        setChangeTracker(!changeTracker)
    }

    const [profileEditNotice, setProfileEditNotice] = useState(false)

    const notifyProfileChange = () => {
        setProfileEditNotice(!profileEditNotice)
    }

    return (
        <>
            <ProfileEditNoticeContext.Provider value={{profileEditNotice, notifyProfileChange}}>
            <ChangeTrackerContext.Provider value={{changeTracker, flipChangeTracker}}>
                {children}
            </ChangeTrackerContext.Provider>
            </ProfileEditNoticeContext.Provider>
        </>
    )
}

export default GlobalContextManager