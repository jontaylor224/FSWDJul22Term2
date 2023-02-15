import React from 'react'
import DeleteButton from './DeleteButton'

const VoterCard = ({ firstName, lastName, age, didVote, deleteVoter }) => {
  return (
    <div className={didVote ? "" : "danger"}>
      <p>Name: {firstName} {lastName}</p>
      <p>Age: {age}</p>
      <p>Have they voted yet: {didVote ? "Yes" : "No"}</p>
      <DeleteButton deleteFunction={deleteVoter}>
        Remove voter from List
      </DeleteButton>
    </div>
  )
}

export default VoterCard