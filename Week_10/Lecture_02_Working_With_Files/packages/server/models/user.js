import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    minLength: [4, "Username must be at least 4 characters."]
  },
  passwordHash: {
    type: String,
    required: true
  },
  folders: [
    {
      type: ObjectId,
      ref: 'Folder'
    }
  ],
  files: [String]
}, { timestamps: true })

userSchema.set('toJSON', {
  transform: function (doc, ret, opt) {
    delete ret['passwordHash']
    return ret
  }
})

const User = model('User', userSchema)

export default User