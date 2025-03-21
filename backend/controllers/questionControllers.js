import Question from '../modles/Questions.js';

// Fetch all questions
export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch questions', error: error.message });
  }
};

// Add a new question
export const addQuestion = async (req, res) => {
  try {
    const { question, choices, correctAnswer } = req.body;

    // Validate input
    if (!question || !choices || !correctAnswer) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new question
    const newQuestion = new Question({ question, choices, correctAnswer });
    await newQuestion.save();

    res.status(201).json({ message: 'Question added successfully', question: newQuestion });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add question', error: error.message });
  }
};