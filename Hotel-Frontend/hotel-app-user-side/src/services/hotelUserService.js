import { axiosInstance } from "./axiosConfig";
import { getLoggedInUser, isLoggedIn } from "./credentialsService";

const MASTER_URL = "http://localhost:8080/hotel/api"

export const standardReservation = (standardReservationForm) => {
    return axiosInstance.post(MASTER_URL + "/standardReservation", standardReservationForm)
}

export const manualReservation = (manualReservationForm) => {
    return axiosInstance.post(MASTER_URL + "/manualReservation", manualReservationForm)
}

//This is not in asyncHotelUserService.js because this is referenced by MiniProfile.jsx, which is a client component.
export async function getSimpleUserInfo(){
    const loginStatus = await isLoggedIn()
    if(loginStatus){
        const usernameOrEmailForm = {
            usernameOrEmail : await getLoggedInUser()
        }
        return axiosInstance.post(MASTER_URL + "/getSimpleUserInfo" , usernameOrEmailForm)
    }
    else{
        return null;
    }
}

//For Profile Management
export const changeUsername = (changeUsernameForm) => {
    return axiosInstance.post(MASTER_URL + "/changeUsername", changeUsernameForm)
}

export const changePassword = (changePasswordForm) => {
    return axiosInstance.post(MASTER_URL + "/changePassword", changePasswordForm)
}