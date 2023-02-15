import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

// The schema is the SHAPE that every document in a collection should adhere to
const reindeerSchema = new Schema({
  // Define the shape here
  name: {
    // this makes sure that the name is a string
    type: String,
    // this makes sure that a value is provided for name to add it to the database
    required: true,
    // this makes sure the name is at least 2 characters
    minLength: 2,
    // this makes sure the name is not longer than 40 characters
    maxLength: 40
  },
  furColor: {
    type: String,
    required: true,
    // this makes sure that whenever the field is accessed, it will be lowercase
    lowercase: true,
    // this makes sure that the string must be one of the strings in the array
    enum: ["brown", "red", "black", "white", "gray", "mottled"]
  },
  hasAntlers: {
    type: Boolean,
    // the default property ensures that if no value is provided, it will default to the provided value
    default: false
  },
  weight: {
    type: Number,
    required: true,
    // min ensures that the weight is at least the provided value (180)
    min: 180,
    // max ensures that the weight is at most the provided value (400)
    max: 400
  },
  mushedBy: {
    type: ObjectId,
    ref: 'Musher'
  }
}, { timestamps: true })

// But how do we USE that shape to store documents in the collection?
const Reindeer = model('Reindeer', reindeerSchema)

// Cool, the model has everything we need. Now let's make sure it's usable elsewhere
export default Reindeer;