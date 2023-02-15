import mongoose from "mongoose";
import express from "express";
import cors from "cors";

mongoose
  .connect("mongodb://localhost/dataperdb")
  .then((_) => console.log("[Database] Connection established."))
  .catch((err) => {
    console.error("[Database] Connection failed.", err);
    process.exit(-1);
  });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => console.log("[Server] Now listening on port 8080"));
