import { Schema, model } from 'mongoose'
const { ObjectId } = Schema.Types

const heroSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    maxLength: [30, "Name cannot be longer than 50 characters."]
  },
  alias: {
    type: String,
    default: "N/A",
    required: false,
    minLength: [2, "Alias must be at least 2 characters."],
    maxLength: [61, "Alias cannot be longer than 61 characters."]
  },
  powers: [
    {
      type: ObjectId,
      ref: 'Power'
    }
  ],
  sideKick: {
    type: ObjectId,
    ref: 'Hero'
  }
}, { timestamps: true })

heroSchema.virtual('numPowers')
  .get(function () {
    return this.powers.length
  })

const Hero = model('Hero', heroSchema)

export default Hero