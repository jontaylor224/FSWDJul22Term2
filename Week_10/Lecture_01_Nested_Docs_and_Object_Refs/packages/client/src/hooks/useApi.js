import { api } from "../utils/apiConfig"
import { toast } from "react-toastify"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useApi = (initialState) => {
  const [data, setData] = useState(initialState)

  const navigate = useNavigate()

  const getAllHeroes = () => {
    api.get('/heroes')
      .then(res => {
        setData(res)
      })
      .catch(err => toast.error("Unable to retrieve heroes. The villains must be interfering."))
  }

  const createHero = (heroData) => {
    api.post('/heroes', heroData)
      .then(res => navigate(`/heroes/${res._id}`))
      .catch(err => toast.error("Unable to create hero. See errors for details."))
  }

  return {
    data,
    getAllHeroes,
    // getHeroById,
    createHero,
    // deleteHero,
  }
}

export default useApi