"use server"

import { cookies } from "next/headers"

export async function saveToken(token) {
    const cookieJar = await cookies()
    cookieJar.set("token", token, {secure: true, path: '/'})
}

export async function getToken(){
    const cookieJar = await cookies()
    return cookieJar.get("token")?.value
}

export async function saveLoggedInUser(loggedInUser){
    const cookieJar = await cookies()
    cookieJar.set("user", loggedInUser, {secure: true, path: '/'})
}

export async function getLoggedInUser() {
    const cookieJar = await cookies()
    return cookieJar.get("user")?.value
}

export async function isLoggedIn() {
    const cookieJar = await cookies()
    if(!cookieJar.get("user")?.value){
        return false
    }
    else{
        return true
    }    
}

export async function logout() {
    const cookieJar = await cookies()
    cookieJar.delete("token")
    cookieJar.delete("user")
    await brushUp()
}

//For Profile Editing

export async function tempSavePassword(password){
    const cookieJar = await cookies()
    cookieJar.set("password", password, {secure: true, path: '/profile'})
}

export async function tempGetPassword(){
    const cookieJar = await cookies()
    return cookieJar.get("password")?.value
}

export async function brushUp(){
    const cookieJar = await cookies()
    cookieJar.delete("password")
}