import { useState } from 'react'
import axios from '../utils/axiosConfig'

const initialState = {
  name: "",
  age: ""
}

const PutRequest = () => {
  const [data, setData] = useState()
  const [param, setParam] = useState("")
  const [requestSuccessful, setRequestSuccessful] = useState()

  const sendRequest = (e) => {
    e.preventDefault()

    axios.put(`${param}`, data)
      .then(res => {
        setRequestSuccessful(true)
        console.log(res)
      })
      .catch(err => setRequestSuccessful(false))
  }

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>
      <p className="desc">Click the button below and have it send a PUT request with body and params to an endpoint via axios</p>
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

      <form onSubmit={sendRequest}>
        <h3>Request Body</h3>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" onChange={handleChange} />
        </label>
        <br />
        <button>Send Request</button>
      </form>
    </div>
  )
}

export default PutRequest