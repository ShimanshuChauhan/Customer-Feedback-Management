import express from "express";
import morgan from "morgan";
import globalErrorHandler from "./controller/errorController.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/feedback", feedbackRoutes);

app.use(globalErrorHandler);

export default app;
