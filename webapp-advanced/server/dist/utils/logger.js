"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importStar(require("winston"));
const Console = winston_1.default.transports.Console;
const logConfig = {
    level: process.env.NODE_ENV === "production" ? "error" : "debug",
    format: winston_1.default.format.simple()
};
const log = winston_1.createLogger({
    transports: [
        new Console(logConfig),
    ],
});
exports.default = log;
//# sourceMappingURL=logger.js.map