import AppError from "../utils/appError.js";

const handleValidationErrorDB = (err) => {
  const messages = Object.values(err.errors).map((error) => error.message);
  return new AppError(`Invalid input data: ${messages.join(". ")}`, 400);
};

function sendErrorProduction(err, res) {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  } else {
    console.error("ERROR 💥", err);
    res.status(500).json({
      status: "error",
      message: "Something went wrong!. Please try again later."
    });
  }
}

function sendErrorDevelopment(err, res) {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack
  });
}

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDevelopment(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err, message: err.message };

    if (err.name === "ValidationError") {
      error = handleValidationErrorDB(err);
    }

    sendErrorProduction(error, res);
  }
};