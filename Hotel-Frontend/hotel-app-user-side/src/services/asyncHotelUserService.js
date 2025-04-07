"use server"

import { axiosInstance } from "./axiosConfig";
import { getLoggedInUser} from "./credentialsService";

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

export async function getReservations(reservationType){

    const usernameOrEmail = await getLoggedInUser()

    switch(reservationType){
        case "All": {
            const usernameOrEmailForm = {
                usernameOrEmail: usernameOrEmail
            }

            return await axiosInstance.post(MASTER_URL + "/getAllReservationsByUsernameOrEmail", usernameOrEmailForm)
        }

        case "Standard":
        case "Manual": {
            const usernameOrEmailAndReservationTypeForm = {
                usernameOrEmail: usernameOrEmail,
                reservationType: reservationType
            }
            return await axiosInstance.post(MASTER_URL + "/getAllReservationsByUsernameOrEmailAndType", usernameOrEmailAndReservationTypeForm)
        }

        default: console.log("Unknown reservation type.")
    }
}