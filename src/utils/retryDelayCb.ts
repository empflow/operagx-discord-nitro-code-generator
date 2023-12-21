import { AxiosError } from "axios";

export default function retryDelayCb(retryCount: number, _err: AxiosError) {
  const DELAY_MS = 500;
  return retryCount * DELAY_MS;
}
