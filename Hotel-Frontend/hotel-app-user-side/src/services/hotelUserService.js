import { axiosInstance } from "./axiosConfig";
import { getLoggedInUser, isLoggedIn } from "./credentialsService";

const MASTER_URL = "http://localhost:8080/hotel/api"

export const standardReservation = (standardReservationForm) => {
    return axiosInstance.post(MASTER_URL + "/standardReservation", standardReservationForm)
}

export const manualReservation = (manualReservationForm) => {
    return axiosInstance.post(MASTER_URL + "/manualReservation", manualReservationForm)
}

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