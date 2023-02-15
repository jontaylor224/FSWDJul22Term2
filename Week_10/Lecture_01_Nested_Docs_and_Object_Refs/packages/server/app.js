import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { API_URL, DB_URL, PORT } from './configs/keys'
import apiRoutes from './routes'
import errorHandler from './middleware/errorHandler'

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(_ => console.log("[Database] Connection established."))
  .catch(err => console.log("[Database] Connection failed.", err))

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(API_URL, apiRoutes)

app.all("*", (req, res, next) => next({ name: "NotFoundError" }))

app.use(errorHandler)

app.listen(PORT, () => console.log(`[Server] Now listening at port ${PORT}`))