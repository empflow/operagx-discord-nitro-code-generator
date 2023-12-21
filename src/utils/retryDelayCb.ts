import { AxiosError } from "axios";

export default function retryDelayCb(retryCount: number, _err: AxiosError) {
  const DELAY_FACTOR_MS = 2000;
  console.log(`retry attempt ${retryCount}`);
  return retryCount * DELAY_FACTOR_MS;
}
