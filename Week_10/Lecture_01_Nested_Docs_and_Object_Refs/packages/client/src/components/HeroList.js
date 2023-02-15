import { useEffect } from 'react'
import useApi from '../hooks/useApi'
import { Container } from 'react-bootstrap'
import HeroSummary from './HeroSummary'

const HeroList = () => {
  const { data: heroes, getAllHeroes } = useApi([])

  useEffect(() => {
    getAllHeroes()
  }, [])


  return (
    <Container fluid>
      <h1>All Heroes</h1>
      {
        heroes.map((hero) => <HeroSummary key={hero._id} hero={hero} />)
      }
    </Container>
  )
}

export default HeroList