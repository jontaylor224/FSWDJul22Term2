import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import keys from './configs/keys';
import apiRoutes from './routes';
import errorHandler from './middleware/errorHandler';

// How to hook your app up to your database
mongoose.connect('mongodb://localhost/mongo_intro', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(_ => console.log("[Database] Connection Established"))
  .catch(err => console.log("[Database] Connection Failed", err))

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api', apiRoutes)

// Set up error handler
app.use(errorHandler)

app.listen(keys.port, () => console.log(`[Server] Listening on port ${keys.port}`))