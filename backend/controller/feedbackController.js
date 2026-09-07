import catchAsync from "../utils/catchAsync.js";
import { createFeedback as createFeedbackService } from "../service/feedbackService.js";

// Create a new feedback
export const createFeedback = catchAsync(async (req, res, next) => {
  console.log("Request Body:", req.body); // Log the request body for debugging
  const feedback = await createFeedbackService(req.body);

  res.status(201).json({
    status: "success",
    data: {
      feedback,
    },
  });
});
