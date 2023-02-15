import { Router } from 'express'
import authRoutes from './auth.routes'
import filesRoutes from './files.routes'
import usersRoutes from './users.routes'

const apiRoutes = Router()

apiRoutes.use('/auth', authRoutes)
apiRoutes.use('/files', filesRoutes)
apiRoutes.use('/users', usersRoutes)


export default apiRoutes