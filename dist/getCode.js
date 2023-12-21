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
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("./constants");
const Code_1 = __importDefault(require("./models/Code"));
function getCode() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield axios_1.default.post(constants_1.DISCORD_URL, constants_1.DATA, {
                headers: constants_1.HEADERS,
            });
            yield Code_1.default.create({ code: data.token });
            console.log(data.token);
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.default = getCode;
