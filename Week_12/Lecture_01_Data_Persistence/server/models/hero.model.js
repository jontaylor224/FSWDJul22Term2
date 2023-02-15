import { Schema, model } from "mongoose";

const heroSchema = new Schema(
  {
    name: String,
    alias: String,
  },
  { timestamps: true }
);

const Hero = model("Hero", heroSchema);

export default Hero;
