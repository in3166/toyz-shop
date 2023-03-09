import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import config from "config";
// import logger from "./utils/logger";
import { version } from "../package.json";

import socket from "./socket";

const port = config.get<number>("port");
const host = config.get<string>("host");
const corsOrigin = config.get<string>("corsOrigin");
console.log(port, host, corsOrigin)
const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

app.get("/", (_, res) => {
  console.log('server get')
  return res.send(`Server is up and running version ${version}`)
}
);

httpServer.listen(port, host, () => {
  socket({ io });
});