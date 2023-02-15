import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;

const HobbySchema = new Schema(
  {
    name: {
      type: String,
      unique: [true, "This hobby already exists."],
      required: [true, "You must provide a name for your hobby."],
      minLength: [3, "Your hobby name must be at least 3 characters long"],
      maxLength: [50, "Your hobby's name can't be longer than 50 characters."],
    },
    description: {
      type: String,
      required: [true, "You need to provide a brief description of your hobby"],
      minLength: [10, "Your description should be at least 10 characters."],
      maxLength: [
        200,
        "Your description should not be more than 200 characters.",
      ],
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    sharedWith: [
      {
        type: ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Hobby = model("Hobby", HobbySchema);

export default Hobby;
