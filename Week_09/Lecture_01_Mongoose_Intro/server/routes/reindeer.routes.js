import { Router } from 'express';
import Reindeer from '../models/reindeer';

// ALL /api/reindeer
const reindeerRoutes = Router();

// POST /api/reindeer
reindeerRoutes.post('/', async (req, res, next) => {
  try {
    const newReindeer = await Reindeer.create(req.body)

    res.json(newReindeer)
  } catch (error) {
    next(error)
  }
})

export default reindeerRoutes;