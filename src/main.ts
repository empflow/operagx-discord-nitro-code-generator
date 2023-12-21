import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import axiosRetry from "axios-retry";
import retryDelayCb from "./utils/retryDelayCb";
import connectDb from "./utils/connectDb";
import getCode from "./getCode";

axiosRetry(axios, { retries: Infinity, retryDelay: retryDelayCb });

(async () => {
  await connectDb();
  while (true) await getCode();
})();
