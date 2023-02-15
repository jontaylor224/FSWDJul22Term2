import { useState } from 'react'
import axios from '../utils/axiosConfig'

const initialState = {
  name: "",
  age: ""
}

const PostRequest = () => {
  const [data, setData] = useState(initialState)
  const [requestSuccessful, setRequestSuccessful] = useState()

  const sendRequest = (e) => {
    e.preventDefault()

    axios.post('/', data)
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
      <p className="desc">Click the button below and have it send a POST request with body but no params to an endpoint via axios</p>
      {
        requestSuccessful != null ?
          requestSuccessful ? <div className="status success"></div>
            : <div className="status error"></div>
          : ""
      }
      <br />
      <form onSubmit={sendRequest}>
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

export default PostRequest