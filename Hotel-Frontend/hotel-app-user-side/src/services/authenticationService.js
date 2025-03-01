import axios from "axios";
import Cookies from "js-cookie";

const MASTER_URL = "http://localhost:8080/hotel/auth"


axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = getToken()
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


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
    if (Cookies.get("user") === undefined){
        return false;
    }
    return true
}

export const login = (loginInfo) => {
    return axios.post(MASTER_URL + "/userLogin", loginInfo)
}

export const logout = () => {
    Cookies.remove("token")
    Cookies.remove("user")
}
 
export const sendRegisterInfo = (registerInfo) => {
    return axios.post(MASTER_URL + "/register", registerInfo)
}