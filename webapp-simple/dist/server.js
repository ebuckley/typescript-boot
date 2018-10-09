"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const error_1 = __importDefault(require("./routes/error"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = express_1.default();
app.use("/public", express_1.default.static(path_1.default.join(__dirname, "public"), { maxAge: 31557600000 }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "hbs");
app.get("/", (req, res) => res.render("index", { title: "hello world!" }));
// error handler
app.use(error_1.default);
app.listen(3000, () => {
    logger_1.default.info("Starting a typescript applicaiton on port 3000");
});
//# sourceMappingURL=server.js.map