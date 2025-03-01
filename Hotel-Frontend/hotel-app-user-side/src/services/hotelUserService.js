import axios from "axios";
import { isLoggedIn } from "./authenticationService";

const MASTER_URL = "http://localhost:8080/hotel/api"

export const initStandardReservationPage = () => {
    return axios.get(MASTER_URL + "/initStandardReservationPage")
}

export const standardReservation = (standardReservationForm) => {
    return axios.post(MASTER_URL + "/standardReservation", standardReservationForm)
}

export const getSimpleUserInfo = (usernameOrEmail) => {
    if(isLoggedIn()){
        const usernameOrEmailForm = {
            usernameOrEmail : usernameOrEmail
        }
        console.log(usernameOrEmailForm)
        return axios.post(MASTER_URL + "/getSimpleUserInfo" , usernameOrEmailForm)
    }
    else{
        return null;
    }
}