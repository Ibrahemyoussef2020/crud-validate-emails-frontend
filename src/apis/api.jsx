import axios from "axios"

const api = axios.create({
    baseURL : 'https://crud-backend-it4n.onrender.com/'
})

export const getUsers = async ()=> await api.get('users')
.then(res => res.data)

export const getUser = async (id)=> await api.get(`users/${id}`)
.then(res => res.data)

export const addUser = async ({...added})=> await api.post(`users/`,added)
.then(res => res.data)

export const modifyUser = async ({id,...modified})=> await api.put(`users/${id}`,modified)
.then(res => res.data)

export const removeUser = async (id)=> await api.delete(`users/${id}`)
.then(res => true) 