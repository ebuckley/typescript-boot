
import express, { Request, Response } from "express";
import path from "path";
import error from "./routes/error";
import log from "./utils/logger";

const app = express();

log.warn(path.join(__dirname, "../../dist/"));

app.use(
  "/public",
  express.static(path.join(__dirname, "../../", "client/dist/"), { maxAge: 31557600000 }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "hbs");

app.get("/", (_req: Request, res: Response) => res.render("index", { title: "hello world!" }));

// error handler
app.use(error);

app.listen(3000, () => {
  log.info("Starting a typescript applicaiton on port 3000");
});
