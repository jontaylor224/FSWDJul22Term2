import { useState } from 'react'
import axios from '../utils/axiosConfig'

const GetWithParams = () => {
  const [param, setParam] = useState("")
  const [requestSuccessful, setRequestSuccessful] = useState()

  const sendRequest = () => {
    axios.get(`${param}`)
      .then(res => {
        setRequestSuccessful(true)
        console.log(res)
      })
      .catch(err => setRequestSuccessful(false))
  }

  return (
    <div>
      <p className="desc">Click the button below and have it send a GET request to an endpoint with route parameters via axios</p>
      {
        requestSuccessful != null ?
          requestSuccessful ? <div className="status success"></div>
            : <div className="status error"></div>
          : ""
      }
      <br />
      <input type="text" name="param" onChange={(e) => setParam(e.target.value)} />
      <br />
      <button onClick={sendRequest}>Send Request</button>
    </div>
  )
}

export default GetWithParams