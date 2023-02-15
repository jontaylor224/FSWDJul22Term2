import { Router } from 'express';
import Hero from '../models/hero';

// ALL starting with /api/heroes
const heroesRoutes = Router();

// GET /api/heroes - R
heroesRoutes.get('/', (req, res) => {
  // Using the model defined by the schema, call the .find() method
  // to find all heroes matching your filter
  Hero.find()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ message: "Error" }))
})

// POST /api/heroes - C
heroesRoutes.post('/', (req, res) => {
  Hero.create(req.body)
    .then(data => res.json(data))
    .catch(err => {
      if (err.errors) {
        return res.status(422).json({ message: "Validation Error" })
      }
    })
})

export default heroesRoutes;