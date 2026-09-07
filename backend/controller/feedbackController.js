import catchAsync from "../utils/catchAsync.js";
import { createFeedback as createFeedbackService } from "../service/feedbackService.js";

// Create a new feedback
export const createFeedback = catchAsync(async (req, res, next) => {
  console.log("Request Body:", req.body); // Log the request body for debugging
  const { customerName, email, message, rating, sentiment, category } =
    req.body ?? {};

  const feedbackData = {
    customerName,
    email,
    message,
    rating,
    sentiment,
    category,
  };
  const feedback = await createFeedbackService(feedbackData);

  res.status(201).json({
    status: "success",
    data: {
      feedback,
    },
  });
});
