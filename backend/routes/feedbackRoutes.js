import express from 'express';
import {createFeedback, getAllFeedback, getFeedbackById, deleteFeedback} from '../controller/feedbackController.js';

const router = express.Router();

router
  .get('/', getAllFeedback)
  .get('/:id', getFeedbackById)
  .post('/', createFeedback) 
  .delete('/:id', deleteFeedback)

export default router;