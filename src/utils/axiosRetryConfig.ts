import { IAxiosRetryConfig } from "axios-retry";
import retryDelayCb from "./retryDelayCb";

const axiosRetryConfig: IAxiosRetryConfig = {
  retries: Infinity,
  retryDelay: retryDelayCb,
  retryCondition: () => true,
};

export default axiosRetryConfig;
