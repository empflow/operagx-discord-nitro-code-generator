import dotenv from "dotenv";
dotenv.config();
import connectDb from "./utils/connectDb";
import getCode from "./getCode";
import axios from "axios";
import axiosRetry from "axios-retry";
import axiosRetryConfig from "./utils/axiosRetryConfig";

axiosRetry(axios, axiosRetryConfig);

(async () => {
  await connectDb();
  while (true) await getCode();
})();
