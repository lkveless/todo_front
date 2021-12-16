import {$authHost, $host } from "./indexhttp"

export const registration = async (email, login, password) =>{
    const response = await $host.post('auth/registration', {email, login, password})
    return response
}

export const loginn = async (email, login, password) =>{
    const {data} = await $host.post('auth/login', {email, login, password})
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('user_id', data.userID)
    return data
    
}

export const check = async() => {
    const {data} = await $authHost.get('auth/check')
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('user_id', data.userID)
    return data
}

export const updateUser = async(id, email, login, name) => {
    await $authHost.patch('/user/me', {id, email, login, name})
 }

export const logout = async() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
}