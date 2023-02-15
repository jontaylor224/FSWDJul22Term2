import { Router } from 'express'
import Hero from '../models/hero'

const heroRoutes = Router()

heroRoutes.route('/')
  .get(async (req, res, next) => {
    try {
      const allHeroes = await Hero
        .find({})
        .sort({ alias: -1 })
        .limit(3)
        .populate([
          { path: 'powers', select: ['name', 'description'] },
          { path: 'sideKick', select: 'name' }
        ])
      // .populate('powers', ['name', 'description'])
      // .populate('sideKick', 'name')

      res.json(allHeroes)
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      const newHero = await Hero.create(req.body)

      res.json(newHero)
    } catch (error) {
      console.log(error)
      next(error)
    }
  })

heroRoutes.route('/:heroId')
  .get(async (req, res, next) => {
    try {
      const { heroId } = req.params
      const hero = await Hero.findById(heroId)

      if (!hero) {
        throw { name: "NotFoundError" }
      }

      res.json(hero)
    } catch (error) {
      next(error)
    }
  })
  .put(async (req, res, next) => {
    try {
      const { heroId } = req.params

      const updatedHero = await Hero.findByIdAndUpdate(heroId, req.body, { runValidators: true })

      if (!updatedHero) {
        throw { name: "NotFoundError" }
      }

      res.json(updatedHero)
    } catch (error) {
      next(error)
    }
  })
  .delete(async (req, res, next) => {
    const { heroId } = req.params
    const deletedHero = await Hero.findByIdAndDelete(heroId)

    if (!deletedHero) {
      throw { name: "NotFoundError" }
    }

    res.json(deletedHero)
  })

heroRoutes.get('/power/:powerId', async (req, res, next) => {
  try {
    const { powerId } = req.params
    const hero = await Hero.find({ "powers._id": powerId })

    res.json(hero)
  } catch (error) {
    next(error)
  }
})

heroRoutes.put('/:heroId/sidekick', async (req, res, next) => {
  try {
    const { heroId } = req.params
    const hero = await Hero.findByIdAndUpdate(heroId, { sideKick: req.body }, { runValidators: true, new: true })

    res.json(hero)
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default heroRoutes