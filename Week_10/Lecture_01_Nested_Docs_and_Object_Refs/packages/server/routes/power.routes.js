import { Router } from 'express'
import Power from '../models/power'

const powerRoutes = Router()

powerRoutes
  .route('/')
  .get(async (req, res, next) => {
    try {
      const allPowers = await Power.find()

      res.json(allPowers)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const newPower = await Power.create(req.body)

      res.json(newPower)
    } catch (error) {
      next(error)
    }
  })

export default powerRoutes