import mongoose from "mongoose";
import { green, red } from "chalk";

const db_url = process.env.DB_URL || "mongodb://localhost/auth_lecture";

const dbConnect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(db_url)
    .then((_) => console.log(`${green("[Database]")} Connection established.`))
    .catch((err) => {
      console.error(`${red("[Database]")} Connection failed:`, err);
      process.exit(-1);
    });
};

export default dbConnect;
