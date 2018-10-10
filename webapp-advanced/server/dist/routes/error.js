"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const r = express_1.Router();
// add endpoint to generate an err
r.use("/generate_error", (req, res) => {
    throw new Error("bad happens!?");
});
r.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
exports.default = r;
//# sourceMappingURL=error.js.map