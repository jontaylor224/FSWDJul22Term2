import { Router } from 'express'
import heroRoutes from './hero.routes'
import powerRoutes from './power.routes'

const apiRoutes = Router()

apiRoutes.use('/heroes', heroRoutes)
apiRoutes.use('/powers', powerRoutes)

export default apiRoutes