import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { API_URL, DB_URL, PORT } from './configs/constants'
import chalk from 'chalk'
import apiRoutes from './routes'
import createHttpError from 'http-errors'
import errorHandler from './middleware/errorHandler'
import cookieParser from 'cookie-parser'
import path from 'path'


mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(_ => console.log(`${chalk.green("[Database]")} Connection established.`))
  .catch(err => console.log(`${chalk.red("[Database]")} Connection failed.`, err))

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
// Declare our static directory
app.use(express.static(path.join(__dirname, './public')))



app.use(API_URL, apiRoutes)

app.all("*", (req, res, next) => next(createHttpError(404, "NotFound")))

app.use(errorHandler)

app.listen(PORT, () => console.log(`${chalk.green("[Server]")} Now listening on port ${chalk.yellow(PORT)}`))