import { Router } from 'express'

const apiRoutes = Router()

apiRoutes.get('/', (req, res) => {
  try {
    res.json({ message: "You did it" })
  } catch (error) {
    res.status(500).json({ message: "Uh Oh" })
  }
})

apiRoutes.get('/:someParam', (req, res) => {
  try {
    const { someParam } = req.params

    res.json({ message: "You did it", param: someParam })
  } catch (error) {
    res.status(500).json({ message: "Uh Oh" })
  }
})

apiRoutes.post('/', (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) {
      return res.status(422).json({ message: "Missing Body" })
    }
    res.json({ message: "You did it", data: req.body })
  } catch (error) {
    res.status(500).json({ message: "Uh Oh" })
  }
})

apiRoutes.put('/:someParam', (req, res) => {
  try {
    const { someParam } = req.params
    if (Object.keys(req.body).length === 0) {
      return res.status(422).json({ message: "Missing Body" })
    }
    res.json({ message: "You did it", param: someParam, data: req.body })
  } catch (error) {
    res.status(500).json({ message: "Uh Oh" })
  }
})

apiRoutes.delete('/:someParam', (req, res) => {
  try {
    const { someParam } = req.params

    res.json({ message: "You did it", param: someParam, data: req.body })
  } catch (error) {
    res.status(500).json({ message: "Uh Oh" })
  }
})

export default apiRoutes