import { Schema, model } from "mongoose";
const { ObjectId } = Schema.Types;
const sessionSchema = new Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      unique: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    currentAccessToken: {
      type: String,
      unique: true,
    },
    currentRefreshToken: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

const Session = model("Session", sessionSchema);

export default Session;
