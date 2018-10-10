import winston, { createLogger } from "winston";
const Console = winston.transports.Console;
const logConfig = {
    level: process.env.NODE_ENV === "production" ? "error" : "debug",
    format: winston.format.simple()
};

const log = createLogger({
    transports: [
        new Console(logConfig),
    ],
});

export default log;
