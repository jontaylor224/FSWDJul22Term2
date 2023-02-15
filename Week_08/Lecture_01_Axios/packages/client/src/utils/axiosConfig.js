import axios from 'axios';

// Q: How can we set axios up so that it always uses the same
// base URL when sending requests?
// A: Create an axios instance with custom configurations
const instance = axios.create({
  baseURL: "http://localhost:8080/api/"
})

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    alert("Uh oh, something went wrong!")

    return Promise.reject(err)
  }
)

export default instance