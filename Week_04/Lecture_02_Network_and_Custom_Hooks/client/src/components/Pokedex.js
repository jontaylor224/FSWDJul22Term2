import usePokedex from '../hooks/usePokedex'
import './Pokedex.css'
import PokemonDetails from './PokemonDetails'

const Pokedex = () => {
  const {
    pageOfPokemon,
    activePokemon,
    prevPage,
    nextPage,
    getPokemonDetails
  } = usePokedex()

  return (
    <div className="container">
      <div className="pokedex">
        {
          pageOfPokemon.length === 0 ?
            <p>Loading, please wait...</p>
            :
            <>
              <div className="page-controls">
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>
              </div>
              <ul>
                {
                  pageOfPokemon.map((mon, i) => (
                    <li key={`dex_num_${i + 1}`} >
                      <span className="pokemon-summary" onClick={() => getPokemonDetails(mon.url)}>{mon.name}</span>
                    </li>
                  ))
                }
              </ul>

            </>
        }
      </div>
      {
        activePokemon ?
          <PokemonDetails pokemon={activePokemon} />
          :
          <p>Select a Pokemon to see its Details</p>
      }
    </div>
  )
}

export default Pokedex