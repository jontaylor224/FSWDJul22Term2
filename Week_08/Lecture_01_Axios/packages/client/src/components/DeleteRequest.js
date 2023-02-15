import { useState } from 'react'
// If we import axios from the custom config file, we can negate
// the need for the base URL in every call
import axios from '../utils/axiosConfig'



const DeleteRequest = () => {
  const [param, setParam] = useState("")
  const [data, setData] = useState({
    userId: ""
  })
  const [requestSuccessful, setRequestSuccessful] = useState()

  const sendRequest = (e) => {
    e.preventDefault()

    axios.delete(`${param}`, { data: data })
      .then(res => {
        setRequestSuccessful(true)
        console.log(res)
      })
      .catch(err => setRequestSuccessful(false))
  }




  return (
    <div>
      <p className="desc">Click the button below and have it send a DELETE request with no body, but with route params to an endpoint via axios</p>
      {
        requestSuccessful != null ?
          requestSuccessful ? <div className="status success"></div>
            : <div className="status error"></div>
          : ""
      }
      <div>
        <h3>Route Parameter</h3>
        <input type="text" onChange={(e) => setParam(e.target.value)} />
      </div>
      <br />
      <div>
        <h3>Request Body</h3>
        <input type="text" name="userId" onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} />
      </div>
      <br />

      <button onClick={sendRequest}>Click to Send</button>
    </div>
  )
}

export default DeleteRequest