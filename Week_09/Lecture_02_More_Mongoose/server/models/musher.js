import { Schema, model } from 'mongoose';
const { ObjectId } = Schema.Types;

const musherSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Musher's first name is a required field."],
    minLength: [2, "Musher's first name must be at least 2 characters."],
    maxLength: [25, "Databases are expensive, please limit the first name to 25 characters."]
  },
  lastName: {
    type: String,
    required: [true, "Musher's last name is a required field."],
    minLength: [2, "Musher's last name must be at least 2 characters."],
    maxLength: [25, "Databases are expensive, please limit the last name to 25 characters."]
  },
  phoneNumber: {
    type: String,
    required: [true, "You must provide a phone number for contact information."],
    match: [/\(\d{3}\) ?\d{3}-?\d{4}/, "Phone number must follow (123) 123-1234 format."]
  },
  reindeer: [
    {
      type: ObjectId,
      ref: 'Reindeer'
    }
  ]
}, { timestamps: true })

const Musher = model('Musher', musherSchema)

export default Musher