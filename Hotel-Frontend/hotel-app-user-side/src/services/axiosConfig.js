import axios from "axios"
import { getToken } from './authenticationService';

export const axiosInstance = axios.create()

axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers.Authorization = getToken()
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});