import axios from "axios"
import { getToken } from "./credentialsService";

export const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(async function (config) {
    // Do something before request is sent
    config.headers.Authorization = await getToken()

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});