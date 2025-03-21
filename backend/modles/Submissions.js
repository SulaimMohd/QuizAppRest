import mongoose from 'mongoose';

const submissionSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional: Link to a user
  answers: { type: Object, required: true }, // Stores user answers
  score: { type: Number, required: true }, // Stores the calculated score
  submittedAt: { type: Date, default: Date.now }, // Timestamp of submission
});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;