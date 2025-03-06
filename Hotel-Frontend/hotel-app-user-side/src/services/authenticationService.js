import Cookies from "js-cookie";
import { axiosInstance } from "./axiosConfig";

const MASTER_URL = "http://localhost:8080/hotel/auth"

export const storeToken = (token) => {
    Cookies.set("token", token)
}

export const getToken = () => {
    return Cookies.get("token")
}

export const saveLoggedInUser = (loggedInUser) => {
    Cookies.set("user", loggedInUser)
}

export const getLoggedinUser = () => {
    return Cookies.get("user")
}

export const isLoggedIn = () => {
    if (!Cookies.get("user")){
        return false;
    }
    return true
}

export const login = (loginInfo) => {
    return axiosInstance.post(MASTER_URL + "/userLogin", loginInfo)
}

export const logout = () => {
    Cookies.remove("token")
    Cookies.remove("user")
}
 
export const sendRegisterInfo = (registerInfo) => {
    return axiosInstance.post(MASTER_URL + "/register", registerInfo)
}