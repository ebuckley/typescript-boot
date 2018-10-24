
import express from "express";
import path from "path";
import error from "./routes/error";
import log from "./utils/logger";

const app = express();

app.use(
  "/public",
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("/", (req, res) => res.render("index", { title: "hello world!" }));

// error handler
app.use(error);

app.listen(3000, () => {
  log.info("Boom-shaka-laka a Running applicaiton is on port 3000");
});
