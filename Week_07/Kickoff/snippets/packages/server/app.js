import 'dotenv/config'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import keys from './config/keys'
import router from './routes'
import { requestLogger, errorHandler } from './middleware'
import seedDatabase from './seedDatabase'

const createError = require('http-errors')

// mongoose.connect(keys.database.url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
// })

// mongoose.connection.on('connected', () => {
//   console.log('connected to mongoDB')
//   seedDatabase()
// })

// mongoose.connection.on('error', (err) => {
//   console.log('err connecting', err)
// })

const app = express()

// middleware
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(requestLogger)

// api router
// In Dev Env, apiEndpoint is '/api'
app.use(keys.app.apiEndpoint, router)

// If you wish to have a route that starts with localhost:3001, but NOT '/api', 
// you can create those endpoints directly in app.js, treating app as the router:
app.get('/hello', (req, res) => res.send("sup"))



// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, 'NotFound'))
})

// error handler
app.use(errorHandler)

module.exports = app
