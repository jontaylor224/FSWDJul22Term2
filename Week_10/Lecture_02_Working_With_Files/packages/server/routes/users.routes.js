import { Router } from 'express'
import requireAuth from '../middleware/requireAuth'
import User from '../models/user'

const usersRoutes = Router()

usersRoutes.post('/:userId/file', requireAuth, async (req, res, next) => {
  try {
    const { userId } = req.params
    if (!req.user._id.equals(userId)) {
      return res.status(401).json({ error: "Unauthorized" })
    }

    const { path } = req.body

    req.user.files.push(path)

    await req.user.save()


    res.json(req.user.toJSON())
  } catch (error) {
    console.log(error)
    next(error)
  }
})

export default usersRoutes