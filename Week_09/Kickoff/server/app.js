import express from 'express';
import cors from 'cors';
import apiRoutes from './routes';
import mongoose from 'mongoose';
import keys from './configs/keys';

// This is how we connect to a MongoDB from our
// express application. This is necessary to actually
// create, read, update, and delete data in our database
mongoose.connect(keys.db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(_ => console.log("[Database] Connection Established"))
  .catch(err => console.log("[Database] Connection Failed:", err))

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(8080, () => console.log("[Server] Now Listening on Port 8080"));