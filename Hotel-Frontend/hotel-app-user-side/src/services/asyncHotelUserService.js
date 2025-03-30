"use server"

import { axiosInstance } from "./axiosConfig";

const MASTER_URL = "http://localhost:8080/hotel/api"

export const initRoomTypeChoices = async () => {
    return await axiosInstance.get(MASTER_URL + "/initRoomTypeChoices")
}

export const getAllRooms = async () => {
    return await axiosInstance.get(MASTER_URL + "/getAllRooms")
}