"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function retryDelayCb(retryCount, _err) {
    const DELAY_MS = 500;
    return retryCount * DELAY_MS;
}
exports.default = retryDelayCb;
