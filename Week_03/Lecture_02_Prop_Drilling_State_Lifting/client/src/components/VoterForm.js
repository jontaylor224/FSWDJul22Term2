import { useState } from 'react'

const VoterForm = ({ addVoterToList }) => {
  const [newVoter, setNewVoter] = useState({
    firstName: "",
    lastName: "",
    age: "",
    isRegistered: false
  })

  const handleChange = (e) => {
    setNewVoter({
      ...newVoter,
      [e.target.name]: e.target.type === "checkbox" ?
        e.target.checked
        : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    addVoterToList(newVoter)
    setNewVoter({
      firstName: "",
      lastName: "",
      age: "",
      isRegistered: false
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" onChange={handleChange} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" name="age" onChange={handleChange} />
      </label>
      <br />
      <label>
        Registered to Vote:
        <input type="checkbox" name="isRegistered" onChange={handleChange} />
      </label>
      <br />
      <input type="submit" value="Add new Voter" />
    </form>
  )
}

export default VoterForm