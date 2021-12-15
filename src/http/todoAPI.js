import {$authHost, $host } from "./indexhttp"

export const createTodo = async (title, description) => {
    const {data} = await $authHost.post('/todos',  { title, description})
    console.log(data)
}

export const getTodos = async () => {
    const {data} = await $authHost.get('/todos')
    return data
}

export const getTodo = async (id) => {
    const {data} = await $authHost.get('/todos/' + id)
    return data
}

export const todoDelete = async (id) => {
    const {data} = await $authHost.delete('/todos/' + id)
    return data
}



export const todoDone = async(id, isCompleted) => {
   const {data} =  await $authHost.patch('/todos/' + id, {isCompleted})
   return data
 }

 export const todoFavourite = async(id, isFavourite) => {
    const {data} = await $authHost.patch('/todos/' + id, {isFavourite})
    return data
 }


 export const todoUpdate= async(id, title, description) => {
    const {data} = await $authHost.patch('/todos/' + id, {title, description})
    return data
 }