import { Router } from 'express';
import Musher from '../models/musher';

const mushersRoutes = Router();

// POST /api/mushers
mushersRoutes.post('/', async (req, res, next) => {
  try {
    // Inserting a document into the database: Option 2
    const newMusher = new Musher(req.body);// This just creates an object in memory; nothing happens with regards to a database yet

    // To SAVE this new document to the database:
    await newMusher.save()

    res.json(newMusher)
  } catch (error) {
    next(error)
  }
})

// GET /api/mushers/:musherId
mushersRoutes
  .route('/:musherId')
  .get(async (req, res, next) => {
    try {
      const { musherId } = req.params

      const musher = await Musher
        .findById(musherId)
        .populate('reindeer')


      res.json(musher)
    } catch (error) {
      next(error)
    }
  })
  .put(async (req, res, next) => {
    try {
      const { musherId } = req.params
      const updatedMusher = await Musher.findOneAndUpdate({ _id: musherId }, req.body, { new: true, runValidators: true })

      res.json(updatedMusher)
    } catch (error) {
      next(error)
    }
  })



export default mushersRoutes;