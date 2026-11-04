import express from "express";
import cors from "cors";
import morgan from "morgan";
import globalErrorHandler from "./controller/errorController.js";
import feedbackRoutes from "./routes/feedbackRoutes.js";

const app = express();

const allowedOrigins = ["http://localhost:5173", "https://your-frontend-domain.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

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
