import express from 'express';
import { submitAnswers } from '../controllers/submissionControllers.js';
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

// Submit answers and score
router.use(authMiddleware)
router.post('/submitAnswers', submitAnswers);

export default router;