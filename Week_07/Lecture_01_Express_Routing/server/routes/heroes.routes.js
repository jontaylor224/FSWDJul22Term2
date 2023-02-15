import { Router } from 'express';
import heroes from '../heroes';

// All urls start with /api/heroes
const heroesRoutes = Router();

// GET, POST /api/heroes
heroesRoutes
  .route('/')
  .get((req, res) => { // --> R
    // The purpose of this endpoint is to return
    // all of the heroes in the array back to the 
    // request origin
    res.json(heroes)
  })
  .post((req, res) => { // --> C
    // We can access the request body of an incoming
    // HTTP request
    const { name, alias, powers } = req.body

    if (!name || !alias || !powers) {
      return res.status(422).json({ message: "Invalid Submission" })
    }

    // Let's create a new object with the body data,
    // and add it to our list of heroes
    const newHero = {
      id: heroes[heroes.length - 1].id + 1,
      name,
      alias,
      powers
    }

    heroes.push(newHero)

    res.json(newHero)
  })

// GET /api/heroes/:heroId --> R
heroesRoutes.get('/:heroId', (req, res, next) => {
  // If we need to access a variable portion of the
  // url (aka, a route parameter), we can access it
  // through the request object. Specifically, the 
  // params property of the request object.
  const { heroId } = req.params

  const heroToReturn = heroes
    .find((hero) => hero.id === Number(heroId))

  if (!heroToReturn) {
    return next()
  }

  res.json(heroToReturn)
})

// PUT /api/heroes/:heroId --> U
heroesRoutes.put('/:heroId', (req, res, next) => {
  // First, let's pull the parameter "heroId" from the route
  // so we can get the right hero
  const { heroId } = req.params

  // Then, let's grab that hero from the array
  const heroToEdit = heroes.find((hero) => hero.id === Number(heroId))

  // If that object doesn't actually exist, thank you, next! (aka
  // send back a response saying it doesn't exist)
  if (!heroToEdit) {
    return next()
  }

  // But if it does exist, let's change it.

  // First, let's pull the new version of the data from the body
  const { name, alias, powers } = req.body

  // Edit hero based on which info was provided
  heroToEdit.name = name ? name : heroToEdit.name
  heroToEdit.alias = alias ? alias : heroToEdit.alias
  heroToEdit.powers = powers ? powers : heroToEdit.powers

  // Finally, let's just return the newly updated hero
  res.json(heroToEdit)
})

// DELETE /api/heroes/:heroId --> D
heroesRoutes.delete('/:heroId', (req, res, next) => {
  // Pull the id from the route:
  const { heroId } = req.params

  // Gross, we need to convert heroId to the associated heroe's 
  // index
  const index = heroes.findIndex((hero) => hero.id === Number(heroId))

  heroes.splice(index, 1)

  // Send heroes back
  res.json(heroes)
})





export default heroesRoutes;