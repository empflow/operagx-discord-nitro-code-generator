import mongoose from "mongoose";
import getEnvVar from "./getEnvVar";

export default function connectDb() {
  const MONGO_URL = getEnvVar("MONGO_URL");
  const DB_NAME = process.env.DB_NAME;
  const DEFAULT_DB_NAME = "discord-nitro-codes";

  return mongoose.connect(MONGO_URL, {
    dbName: DB_NAME ?? DEFAULT_DB_NAME,
  });
}
