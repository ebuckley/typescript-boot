import { NextFunction, Request, Response, Router } from "express";

const r = Router();
// add endpoint to generate an err
r.use("/generate_error", (req, res) => {
  throw new Error("bad happens!?");
});

r.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default r;
