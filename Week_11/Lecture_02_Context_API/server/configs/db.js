import mongoose from "mongoose";
import { green, red } from "chalk";

const DB_URL = process.env.DB_URL || "mongodb://localhost/contextlivesession";

mongoose
  .connect(DB_URL)
  .then((_) => console.log(`${green("[Database]")} Connection established.`))
  .catch((err) => console.log(`${red("[Database]")} Conection failed:`, err));
