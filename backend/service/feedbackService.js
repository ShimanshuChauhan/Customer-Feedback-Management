import Feedback from "../models/feedbackModel.js";

export const createFeedback = async (feedbackData) => {
  return Feedback.create(feedbackData);
};

export const getAllFeedback = async () => {
  return Feedback.find();
}

export const getFeedbackById = async (feedbackId) => {
  return Feedback.findById(feedbackId);
};
