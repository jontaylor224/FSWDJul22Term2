import { Router } from 'express';
import mushersRoutes from './mushers.routes';
import reindeerRoutes from './reindeer.routes';

// ALL /api
const apiRoutes = Router();

apiRoutes.use('/mushers', mushersRoutes)
apiRoutes.use('/reindeer', reindeerRoutes)

export default apiRoutes;