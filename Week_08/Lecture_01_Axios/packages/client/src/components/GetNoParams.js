import axios from '../utils/axiosConfig'
import { useState } from 'react'

const GetNoParams = () => {
  const [requestSuccessful, setRequestSuccessful] = useState()
  const sendRequest = () => {
    axios.get('/')
      .then(res => {
        setRequestSuccessful(true)
        console.log(res)
      })
      .catch(err => {
        setRequestSuccessful(false)
      })
  }

  return (
    <div>
      <p className="desc">Click the button below and have it send a GET request via axios</p>
      {
        requestSuccessful != null ?
          requestSuccessful ? <div className="status success"></div>
            : <div className="status error"></div>
          : ""
      }
      <button onClick={sendRequest}>Send Request</button>
    </div>
  )
}

export default GetNoParams