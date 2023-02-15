import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dbConnect from "./config/db.config";
import { port, server_domain } from "./config/server.config";
import { green, yellow } from "chalk";
import router from "./routes";
import { errorHandler } from "./controllers/error.controller";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(
    `${green("[Server]")} Now listening on ${yellow(
      server_domain ? server_domain : `http://localhost:${port}`
    )}`
  );
  dbConnect();
});
