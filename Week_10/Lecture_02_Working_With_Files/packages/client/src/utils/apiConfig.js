import axios from 'axios'
import { API_URL } from '../configs/constants'

export const api = axios.create({
  baseURL: API_URL
})

// api.defaults.headers.post['Content-Type'] = 'application/json'

api.interceptors.response.use((res) => res.data)

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common['Authorization']
  }
}