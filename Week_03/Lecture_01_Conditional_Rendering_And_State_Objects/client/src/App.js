import './App.css';
import { useState } from 'react';

const data = [
  {
    firstName: "Mary",
    lastName: "Sue",
    age: 27,
    isRegistered: true,
    didVote: true
  },
  {
    firstName: "Bill",
    lastName: "Jones",
    age: 33,
    isRegistered: true,
    didVote: false
  },
  {
    firstName: "Cody",
    lastName: "Thaller",
    age: 31,
    isRegistered: true,
    didVote: true
  }
]



function App() {

  const [newVoter, setNewVoter] = useState({
    firstName: "",
    lastName: "",
    age: "",
    isRegistered: false
  })

  const [voterData, setVoterData] = useState(data)

  console.log(voterData)

  // const renderVoterData = (voters) => {
  //   let voterDOM = []
  //   for (let i = 0; i < voters.length; i++) {
  //     let DOM = <li>
  //       <p>Name: {voters[i].firstName} {voters[i].lastName}</p>
  //       <p>Age: {voters[i].age}</p>
  //       <p>Did they vote: {voters[i].didVote ? "Yes" : "No"}</p>
  //     </li>

  //     voterDOM.push(DOM)
  //   }

  //   return voterDOM
  // }


  const handleChange = (e) => {
    setNewVoter({
      ...newVoter,
      [e.target.name]: e.target.type === "checkbox" ?
        e.target.checked
        : e.target.value
    })
  }

  // Alternatively, define a second change handler specifically for things like
  // checkboxes
  /*
    const handleCheck = (e) => {
      setNewVoter({
        ...newVoter,
        [e.target.name]: e.target.checked
      })
    }
  */

  const handleSubmit = (e) => {
    e.preventDefault()

    setVoterData([...voterData, { ...newVoter, didVote: false }])
  }

  const handleDelete = (index) => {
    // let filteredVoters = []

    // for (let i = 0; i < voterData.length; i++) {
    //   if (i !== index) {
    //     filteredVoters.push(voterData[i])
    //   }
    // }

    // setVoterData(filteredVoters)

    setVoterData(voterData.filter((_, i) => index !== i))
  }



  return (
    <div className="App">
      {/* 
        1. string
        2. number
        3. JSX element
        4. array of any of the above 3 items (generally, an array of JSX elements)
      */}

      {JSON.stringify(newVoter)}

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
      {
        voterData.length > 0 ?
          <>
            <h2>This is a list of voters</h2>
            <ul>
              {
                voterData.map((voter, i) =>
                  <li className={voter.didVote ? "" : "danger"} key={`voter_${i}`}>
                    <p>Name: {voter.firstName} {voter.lastName}</p>
                    <p>Age: {voter.age}</p>
                    <p>Have they voted yet: {voter.didVote ? "Yes" : "No"}</p>
                    <button onClick={() => handleDelete(i)}>Remove From List</button>
                  </li>
                )
              }
            </ul>
          </>
          :
          <p>No Voter Data to be found.</p>
      }
    </div>
  );
}

export default App;
