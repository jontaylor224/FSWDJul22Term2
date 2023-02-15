// To build a router that will handle requests, import express' Router() method
import { Router } from 'express';
import heroesRoutes from './heroes.routes';

// All urls start with /api
const apiRoutes = Router();

// GET /api
apiRoutes.get('/', (req, res) => {
  res.send("This is the api route hub. You can direct requests to /api/heroes for endpoints involving heroes")
})

// All requests with a url starting with /api/heroes is sent to heroesRoutes
apiRoutes.use('/heroes', heroesRoutes)

export default apiRoutes;