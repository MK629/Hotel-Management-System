"use server"

import { axiosInstance } from "./axiosConfig";

const MASTER_URL = "http://localhost:8080/hotel/api"

export const initRoomTypeChoices = async () => {
    return await axiosInstance.get(MASTER_URL + "/initRoomTypeChoices")
}

export const getRoomsByType = async (roomType) => {
    const roomTypeForm = {
        roomType: roomType
    }
    return await axiosInstance.post(MASTER_URL + "/getRoomsByType", roomTypeForm)
}

export const getReservations = async () => {
    
}