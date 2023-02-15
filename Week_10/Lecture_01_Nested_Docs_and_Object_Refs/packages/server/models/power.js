import { Schema, model } from 'mongoose'

const powerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Power can't be an empty string."],
    minLength: [3, "Power name must be at least 3 characters."]
  },
  description: {
    type: String,
    required: [true, "You must describe the power."],
    minLength: [10, "Power description must be at least 10 characters."]
  }
}, { timestamps: true })

const Power = model('Power', powerSchema)

export default Power