import './App.css';
import { useState } from 'react';
import VoterList from './components/VoterList';
import VoterForm from './components/VoterForm';

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
  const [voterData, setVoterData] = useState(data)

  const addVoterToList = (newVoter) => {
    setVoterData([...voterData, { ...newVoter, didVote: false }])
  }


  return (
    <div className="App">
      {/* 
        1. string
        2. number
        3. JSX element
        4. array of any of the above 3 items (generally, an array of JSX elements)
      */}

      <VoterForm addVoterToList={addVoterToList} />
      {
        voterData.length > 0 ?
          <VoterList
            listOfVoters={voterData}
            setVoterData={setVoterData} />
          :
          <p>No Voter Data to be found.</p>
      }
    </div>
  );
}

export default App;
