import catchAsync from "../utils/catchAsync.js";
import { createFeedback as createFeedbackService } from "../service/feedbackService.js";
import { getAllFeedback as getAllFeedbackService } from "../service/feedbackService.js";
import { getFeedbackById as getFeedbackByIdService } from "../service/feedbackService.js";
import { deleteFeedback as deleteFeedbackService } from "../service/feedbackService.js";

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

export const getAllFeedback = catchAsync(async (req, res, next) => {
  const feedbackList = await getAllFeedbackService();
  res.status(200).json({
    status: "success",
    results: feedbackList.length,
    data: {
      feedbackList,
    },
  });
})

export const getFeedbackById = catchAsync(async (req, res, next) => {
  const feedbackId = req.params.id;
  const feedback = await getFeedbackByIdService(feedbackId);

  if (!feedback) {
    return res.status(404).json({
      status: "fail",
      message: "Feedback not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      feedback,
    },
  });
});

export const deleteFeedback = catchAsync(async (req, res, next) => {
  const feedbackId = req.params.id;
  const feedback = await getFeedbackByIdService(feedbackId);
  
  if (!feedback) {
    return res.status(404).json({
      status: "fail",
      message: "Feedback not found",
    });
  }

  await deleteFeedbackService(feedbackId);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
