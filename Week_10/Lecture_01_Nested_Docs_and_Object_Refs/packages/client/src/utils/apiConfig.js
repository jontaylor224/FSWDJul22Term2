import axios from 'axios'

export const api = axios.create({
  baseURL: "/api"
})

api.interceptors.response.use((res) => res.data)