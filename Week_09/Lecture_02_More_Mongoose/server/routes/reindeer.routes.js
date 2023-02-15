import { Router } from 'express';
import Musher from '../models/musher';
import Reindeer from '../models/reindeer';

// ALL /api/reindeer
const reindeerRoutes = Router();

// POST /api/reindeer
/**
 * @param {object} req.body - 
 * {
 *  name: String,
 *  furColor: String (one of several options)
 *  hasAntlers: Boolean (defaults to false),
 *  weight: Number
 * }
 */
reindeerRoutes
  .route('/')
  .get(async (req, res, next) => {
    try {
      const allReindeer = await Reindeer
        .find()
        .populate({
          path: 'mushedBy',
          populate: 'reindeer'
        })


      res.json(allReindeer)
    } catch (error) {
      next(error)
    }
  })
  .post(async (req, res, next) => {
    try {
      // Inserting a document into the database: Option 1
      const newReindeer = await Reindeer.create(req.body)

      res.json(newReindeer)
    } catch (error) {
      next(error)
    }
  })

// Endpoint that will create a new reindeer, and then add it to a musher's list of reindeer
/**
 * @param {object} req.body - 
 * {
 *  name: String,
 *  furColor: String (one of several options)
 *  hasAntlers: Boolean (defaults to false),
 *  weight: Number
 * }
 */
reindeerRoutes.post('/:musherId', async (req, res, next) => {
  try {
    const { musherId } = req.params

    // // Step 1: Let's query for the musher with the id provided by the route parameters
    // const musher = await Musher.findById(musherId) // Query for finding a single document with matching id

    // if (!musher) {
    //   return res.status(404).json({ error: "Musher not found" })
    // }

    // // Step 2: Create the reindeer
    // const reindeer = await Reindeer.create({ ...req.body, mushedBy: musher })

    // // Step 3: Add the newly created reindeer to the musher's list of reindeer
    // musher.reindeer.push(reindeer)
    // await musher.save()

    // Alternate Approach
    const reindeer = new Reindeer({ ...req.body, mushedBy: musherId })

    const musher = await Musher.findByIdAndUpdate(musherId, { $addToSet: { reindeer: reindeer } })

    if (!musher) {
      return res.status(422).json({ error: "Musher not found" })
    }

    await reindeer.save()

    res.json(reindeer)
  } catch (error) {
    next(error)
  }
})

reindeerRoutes.delete('/:reindeerId', async (req, res, next) => {
  try {
    const { reindeerId } = req.params

    // Step 1: Tell mongoose what to delete
    const deletedReindeer = await Reindeer.findByIdAndDelete(reindeerId)

    await Musher.findByIdAndUpdate(deletedReindeer.mushedBy, { $pull: { reindeer: deletedReindeer._id } })

    res.json(deletedReindeer)
  } catch (error) {
    console.log(error)
    next(error)
  }
})



export default reindeerRoutes;
