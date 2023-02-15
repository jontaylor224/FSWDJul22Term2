import { useEffect, useState } from "react"


const PokemonDetails = ({ pokemon }) => {
  return (
    <div className="pokemon-details">
      {
        pokemon ?
          <>
            <h2>{pokemon.id} - {pokemon.name}</h2>
          </>
          :
          <p>Loading Pokemon details...</p>
      }

    </div>
  )
}

export default PokemonDetails