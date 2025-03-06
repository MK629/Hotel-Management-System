import { isLoggedIn } from "./authenticationService";
import { axiosInstance } from "./axiosConfig";

const MASTER_URL = "http://localhost:8080/hotel/api"

export const initStandardReservationPage = () => {
    return axiosInstance.get(MASTER_URL + "/initStandardReservationPage")
}

export const standardReservation = (standardReservationForm) => {
    return axiosInstance.post(MASTER_URL + "/standardReservation", standardReservationForm)
}

export const getSimpleUserInfo = (usernameOrEmail) => {
    if(isLoggedIn()){
        const usernameOrEmailForm = {
            usernameOrEmail : usernameOrEmail
        }
        return axiosInstance.post(MASTER_URL + "/getSimpleUserInfo" , usernameOrEmailForm)
    }
    else{
        return null;
    }
}