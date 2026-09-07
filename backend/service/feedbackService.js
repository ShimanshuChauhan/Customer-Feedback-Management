import Feedback from "../models/feedbackModel.js";

export const createFeedback = async (feedbackData) => {
  return Feedback.create(feedbackData);
};
