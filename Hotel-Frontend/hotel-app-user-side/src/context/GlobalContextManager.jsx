"use client"

import { useState } from "react";
import { ChangeTrackerContext } from './contexts/ChangeTrackerContext';
import { ProfileEditNoticeContext } from "./contexts/ProfileEditNoticeContext";
import { ErrorMessageContext } from "./contexts/ErrorMessageConext";
import { SuccessMessageContext } from "./contexts/SuccessMessageContext";
import ErrorMessage from "@/components/status/ErrorMessage";
import SuccessMessage from "@/components/status/SuccessMessage";


const GlobalContextManager = ({children}) => {

    //Flip Login/Logout button
    const [changeTracker, setChangeTracker] = useState(false)

    const flipChangeTracker = () => {
        setChangeTracker(!changeTracker)
    }

    //Edit Profile
    const [profileEditNotice, setProfileEditNotice] = useState(false)

    const notifyProfileChange = () => {
        setProfileEditNotice(!profileEditNotice)
    }

    //Show Error Message
    const [errorMessage, setErrorMessage] = useState('')

    const [errorShowStatus, setErrorShowStatus] = useState(false)

    const showError = (msg) => {
        setErrorMessage(msg)
        setErrorShowStatus(true)
    }

    const closeError = () => {
        setErrorMessage('')
        setErrorShowStatus(false)
    }

    //Show Success Message
    const [successMessage, setSuccessMessage] = useState('')

    const [successShowStatus, setSuccessShowStatus] = useState(false)

    const showSuccess = (msg) => {
        setSuccessMessage(msg)
        setSuccessShowStatus(true)
    }

    const closeSuccess = () => {
        setSuccessMessage('')
        setSuccessShowStatus(false)
    }

    return (
        <>
            <ProfileEditNoticeContext.Provider value={{profileEditNotice, notifyProfileChange}}>
                <ChangeTrackerContext.Provider value={{changeTracker, flipChangeTracker}}>
                    <ErrorMessageContext.Provider value={{showError, closeError}}>
                        <SuccessMessageContext.Provider value={{showSuccess, closeSuccess}}>
                            {children}
                            <ErrorMessage msg={errorMessage} display={errorShowStatus}/>
                            <SuccessMessage msg={successMessage} display={successShowStatus}/>
                        </SuccessMessageContext.Provider>
                    </ErrorMessageContext.Provider>
                </ChangeTrackerContext.Provider>
            </ProfileEditNoticeContext.Provider>
        </>
    )
}

export default GlobalContextManager