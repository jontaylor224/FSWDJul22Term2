import { useState, useEffect } from 'react';

const usePokedex = () => {
  const [allPokemon, setAllPokemon] = useState([])
  const [pageOfPokemon, setPageOfPokemon] = useState([])
  const [pageNum, setPageNum] = useState(0)
  const [activePokemon, setActivePokemon] = useState('')

  const fetchAllPokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1154')
      // If the promise is resolved (and the response comes back succesfully)
      .then((response) => response.json()) // Now, take that response and convert it to JSON
      .then((data) => {
        setAllPokemon(data.results)
        setPageOfPokemon(data.results.filter((mon, i) => i < 20))
      })
      // If the promise is rejected (either the response does not come back successfully,
      // OR literally anything else in the process went wrong)
      .catch((err) => console.log(err))
  }

  const nextPage = () => {
    if (pageNum < Math.floor(1154 / 20))
      goToPage(pageNum + 1)
  }

  const prevPage = () => {
    if (pageNum > 0)
      goToPage(pageNum - 1)
  }

  const goToPage = (pageNum) => {
    setPageNum(pageNum)
    setPageOfPokemon(allPokemon.slice(pageNum * 20, (pageNum * 20) + 20))
  }


  const getPokemonDetails = (apiUrl) => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setActivePokemon(data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    console.log("Does this only get called the first time like a normal useEffect with empty dependency array?")
    fetchAllPokemon()
  }, [])

  return {
    pageOfPokemon,
    activePokemon,
    prevPage,
    nextPage,
    getPokemonDetails
  }
}

export default usePokedex