import "dotenv/config";
import express from "express";
import cors from "cors";
import { green, yellow } from "chalk";

import "./configs/db";
import router from "./routes";
import { errorHandler } from "./controllers/errorController";
import { PORT } from "./configs/api";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`${green("[Server]")} Now listening on port ${yellow(PORT)}`)
);
