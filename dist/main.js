"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const axios_1 = __importDefault(require("axios"));
const axios_retry_1 = __importDefault(require("axios-retry"));
const retryDelayCb_1 = __importDefault(require("./utils/retryDelayCb"));
const connectDb_1 = __importDefault(require("./utils/connectDb"));
const getCode_1 = __importDefault(require("./getCode"));
(0, axios_retry_1.default)(axios_1.default, { retries: Infinity, retryDelay: retryDelayCb_1.default });
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, connectDb_1.default)();
    while (true)
        yield (0, getCode_1.default)();
}))();
