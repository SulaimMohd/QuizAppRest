import Submission from '../modles/Submissions.js';

// Submit answers and score
export const submitAnswers = async (req, res) => {
  try {
    const { answers, score } = req.body;
    // Save submission to MongoDB
    const submission = new Submission({ answers, score });
    await submission.save();

    res.status(200).json({ message: 'Answers submitted successfully', score });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit answers', error: error.message });
  }
};