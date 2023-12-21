"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const getEnvVar_1 = __importDefault(require("./utils/getEnvVar"));
function connectDb() {
    const MONGO_URL = (0, getEnvVar_1.default)("MONGO_URL");
    const DB_NAME = process.env.DB_NAME;
    const DEFAULT_DB_NAME = "discord-nitro-codes";
    return mongoose_1.default.connect(MONGO_URL, {
        dbName: DB_NAME !== null && DB_NAME !== void 0 ? DB_NAME : DEFAULT_DB_NAME,
    });
}
exports.default = connectDb;
