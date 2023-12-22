import dotenv from "dotenv";
dotenv.config();
import connectDb from "./utils/connectDb";
import getCode from "./getCode";
import axios from "axios";
import axiosRetry from "axios-retry";
import axiosRetryConfig from "./utils/axiosRetryConfig";
import express from "express";
import appListenCb from "./utils/callbacks/appListen";
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.all("/", (_, res) => res.send("ok"));

axiosRetry(axios, axiosRetryConfig);

(async () => {
  await connectDb();
  app.listen(PORT, appListenCb(PORT));
  while (true) await getCode();
})();
