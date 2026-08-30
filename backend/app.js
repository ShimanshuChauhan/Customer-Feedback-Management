import express from "express";
import morgan from "morgan";
import globalErrorHandler from "./controller/errorController.js";

const app = express();

app.use(morgan("dev"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(globalErrorHandler);

export default app;