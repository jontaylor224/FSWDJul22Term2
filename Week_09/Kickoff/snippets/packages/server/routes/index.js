import express from 'express'
import authRouter from './auth'
import userRouter from './users'
import postRouter from './posts'

// In Dev, All Routes Here start with: localhost:3001/api
const router = express.Router()

// Final URL (in Dev): http://localhost:3001/api/
router.get('/', (req, res, next) => {
  res.status(200).send('api endpoint')
})

// Hypothetical Endpoint: Add an endpoint to the API at http://localhost:3001/api/hello 
// that accepts GET requests, and returns a string "hello" as a response

router.get('/hello', (req, res) => {
  res.send("hello")
})

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/posts', postRouter)

module.exports = router
