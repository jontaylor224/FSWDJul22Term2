import { Schema, model } from 'mongoose';

// Mongoose involves a couple of steps to go from defining
// the structure (aka the schema) of entries in a databse, to 
// the actual functionality needed to make queries that follow
// that structure. The two steps are:
// 1. Define the schema 
// 2. Create a mongoose model based on that schema


// What Data Types can we declare?
// - String
// - Number
// - Boolean
// - Date
// - ObjectId
const heroSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30
  },
  alias: {
    type: String,
    default: "N/A",
    minLength: 2,
    maxLength: 50
  },
  powers: [
    {
      type: String,
      minLength: 2,
      maxLength: 30
    }
  ]
}, { timestamps: true })

const Hero = model('Hero', heroSchema)

export default Hero;

