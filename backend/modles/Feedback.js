import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  emoji: { type: String, required: true },
  comment: { type: String },
  score: { type: Number, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Feedback", feedbackSchema);