import express from 'express';
import { getQuestions,addQuestion } from '../controllers/questionControllers.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();


router.use(authMiddleware)
// Fetch all questions
router.get('/getQuestions', getQuestions);

// Add a new question
router.post('/addQuesiton', addQuestion);

export default router;