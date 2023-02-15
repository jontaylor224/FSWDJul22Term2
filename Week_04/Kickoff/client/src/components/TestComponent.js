import React, { useEffect } from 'react'

const TestComponent = ({ myPokemon, setMyPokemon }) => {
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/salamence')
      .then((response) => response.json())
      .then((data) => setMyPokemon(data))
      .catch((err) => console.log(err))

    return () => {
      setMyPokemon()
    }
  }, [])

  return (
    <div>
      {
        myPokemon !== undefined ?
          <h2>My favorite pokemon is {myPokemon.name}</h2>
          :
          <p>Loading Pokemon...</p>
      }
    </div>
  )
}

export default TestComponent