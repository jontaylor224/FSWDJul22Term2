import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/'
})

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err)
    if (err.code && err.code === "ERR_NETWORK") {
      toast.error("Connection refused. Please try again later.")
    }
    else if (err.response && err.response.status === 404) {
      toast.error("Resource not found.")
    }


    return Promise.reject(err)
  }
)

export default instance