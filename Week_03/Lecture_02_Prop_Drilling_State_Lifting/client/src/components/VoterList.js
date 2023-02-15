// This component is responsible for displaying our list of voters.
// Additionally, we will use this component to house as much logic
// involving that list as possible

import VoterCard from "./VoterCard"

const VoterList = ({ listOfVoters, setVoterData }) => {
  const handleDelete = (index) => {
    setVoterData(listOfVoters.filter((_, i) => index !== i))
  }


  return (
    <>
      <h2>This is a list of voters</h2>
      <ul>
        {
          listOfVoters.map((voter, i) =>
            <VoterCard
              key={`voter_${i}`}
              firstName={voter.firstName}
              lastName={voter.lastName}
              age={voter.age}
              didVote={voter.didVote}
              deleteVoter={() => handleDelete(i)}
            />
          )
        }
      </ul>
    </>
  )
}

export default VoterList