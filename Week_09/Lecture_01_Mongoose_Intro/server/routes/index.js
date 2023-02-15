import { Router } from 'express';
import reindeerRoutes from './reindeer.routes';

// ALL /api
const apiRoutes = Router();

apiRoutes.use('/reindeer', reindeerRoutes)

export default apiRoutes;