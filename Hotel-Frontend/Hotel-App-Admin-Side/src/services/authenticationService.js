import axios from 'axios'

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
    sessionStorage.setItem("token", token)
}

export const getToken = () => {
    return sessionStorage.getItem("token")
}

export const saveLoggedInUser = (loggedInUser) => {
    sessionStorage.setItem("user", loggedInUser)
}

export const getLoggedinUser = () => {
    return sessionStorage.getItem("user")
}

export const isLoggedIn = () => {
    if (sessionStorage.getItem("user") === null){
        return false;
    }
    return true
}

export const sendLoginInfo = (loginInfo) => {
    return axios.post(MASTER_URL + "/adminLogin", loginInfo)
}

export const logout = () => {
    sessionStorage.clear()
}