import { Router } from 'express';
import heroesRoutes from './heroes.routes';

const apiRoutes = Router();

apiRoutes.use('/heroes', heroesRoutes)

export default apiRoutes;