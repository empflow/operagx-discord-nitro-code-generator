import axios from "axios";
import { DATA, DISCORD_URL, HEADERS } from "./constants";
import Code from "./models/Code";
import { DiscordResp } from "./utils/types";

export default async function getCode() {
  try {
    const { data } = await axios.post<DiscordResp>(DISCORD_URL, DATA, {
      headers: HEADERS,
    });
    await Code.create({ code: data.token });
    console.log(data.token);
  } catch (err) {
    console.error((err as any).message);
  }
}
