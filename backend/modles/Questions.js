import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
  question: { type: String, required: true },
  choices: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
});

const Question = mongoose.model('Question', questionSchema);

export default Question;