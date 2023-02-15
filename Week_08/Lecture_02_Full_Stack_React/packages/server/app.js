import express from 'express';
import cors from 'cors';
import apiRoutes from './routes';

const app = express();

// Global Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routing

// This line redirects ALL incoming HTTP requests with a url
// that starts with '/api'
app.use('/api', apiRoutes)

// The .all() method with express routing will handle ALL requests
// that match its url (as in, GET, POST, PUT, PATCH, and DELETE, 
// as long as the url matchs)

// All Express Routes should have a url and a callback function. The
// callback function needs at least 2 arguments: the request and 
// the response (IN THAT ORDER)
app.all('*', (req, res) => {
  // Each endpoint's function should end in a response being sent
  // back. This can be done with res.json() or res.send() depending
  // on the format you wish to send the data back. Attaching the status
  // is TECHNICALLY optional, but for the sake of the front end developers,
  // sending an appropriate status will help tremendously.
  res.status(404).send("Resource Not Found")
})


// Starting the Server 
app.listen(3001, () => console.log("[Server] Now listening on port 3001"))