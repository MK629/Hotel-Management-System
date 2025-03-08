import { axiosInstance } from "./axiosConfig";

const MASTER_URL = "http://localhost:8080/hotel/auth"

export const login = (loginInfo) => {
    return axiosInstance.post(MASTER_URL + "/userLogin", loginInfo)
}
 
export const sendRegisterInfo = (registerInfo) => {
    return axiosInstance.post(MASTER_URL + "/register", registerInfo)
}