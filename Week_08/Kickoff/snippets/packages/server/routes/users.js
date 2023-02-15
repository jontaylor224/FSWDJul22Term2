import express from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../models'

// In Dev, all Routes in this Router start with: localhost:3001/api/users
const router = express.Router()


// Final Route in Dev: http://localhost:3001/api/users/:id where id is a parameter
router
  .route('/:id')
  .get(async (request, response) => {
    const populateQuery = [
      {
        path: 'posts',
        populate: { path: 'author', select: ['username', 'profile_image'] },
      },
    ]

    const user = await User.findOne({ username: request.params.id })
      .populate(populateQuery)
      .exec()
    if (user) {
      response.json(user.toJSON())
    } else {
      response.status(404).end()
    }
  })
  .put(async (request, response) => {
    const { password } = request.body
    const { id } = request.params

    const hashedpassword = await bcrypt.hash(password, 12)

    try {
      const userUpdate = await User.findByIdAndUpdate(
        {
          _id: id,
        },
        {
          passwordHash: hashedpassword,
        },
        {
          new: true,
        }
      )

      response.json(userUpdate.toJSON())
    } catch (error) {
      response.status(404).end()
    }
  })

module.exports = router
