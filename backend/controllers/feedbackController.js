import Feedback from "../modles/Feedback.js";

export const submitFeedback = async (req, res) => {
  try {
    const { emoji, comment, score, userId } = req.body;

    const newFeedback = new Feedback({
      emoji,
      comment,
      score,
      userId,
    });

    await newFeedback.save();
    res.status(200).json({ message: "Feedback submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit feedback", error });
  }
};