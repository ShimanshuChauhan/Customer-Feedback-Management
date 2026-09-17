import express from 'express';
import {createFeedback, getAllFeedback} from '../controller/feedbackController.js';

const router = express.Router();

router
  .get('/', getAllFeedback)
  .post('/', createFeedback); 

export default router;