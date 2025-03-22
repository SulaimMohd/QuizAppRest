import { useEffect, useState } from "react";
import { FaRegSadTear, FaRegFrown, FaRegMeh, FaRegSmile, FaRegGrinStars } from "react-icons/fa";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context/dataContext";
import axios from "axios"; // Import axios for API calls
import { useAuth } from "../../context/authContext";
import tickIcon from '../../assets/tickIcon.png'
import { motion } from "framer-motion";

export default function ScoreFeedback() {
  const {user} = useAuth()
  console.log(user._id)
  const { score, submitAnswers } = useData();
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [comment, setComment] = useState(""); // State to store the comment
  const navigate = useNavigate();

  const emojis = [
    { icon: <FaRegSadTear size={30} />, value: "very_bad" },
    { icon: <FaRegFrown size={30} />, value: "bad" },
    { icon: <FaRegMeh size={30} />, value: "neutral" },
    { icon: <FaRegSmile size={30} />, value: "good" },
    { icon: <FaRegGrinStars size={30} />, value: "excellent" },
  ];

  const handleFeedbackSubmit = async () => {
    if (!selectedEmoji) {
      alert("Please select an emoji before submitting feedback.");
      return;
    }

    const feedbackData = {
      emoji: selectedEmoji,
      comment: comment,
      score: score * 5, // Assuming score is out of 10 and each question is 5 marks
      userId: user._id, // Replace with actual user ID from context or state
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/feedback/addFeedback`, feedbackData,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }});
      if (response.status === 200) {
        alert("Feedback submitted successfully!");
        navigate("/"); // Redirect to home or another page
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center p-6 space-y-4">
        <div className="bg-white  p-6 text-center">
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-4xl"><img src={tickIcon} alt="tickIcon" className="h-16" /></div>
            <h2 className="text-xl font-semibold mt-2">Congratulations you have Successfully Completed The Test</h2>
            <p className="text-lg font-medium mt-2">
              Score: <span className="bg-yellow-400 px-2 py-1 rounded-lg">{score * 5}/50</span>
            </p>
            <p className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2 text-lg">Your ID: {user._id}</p>
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold">Give us a feedback!</h3>
            <p className="text-sm text-gray-600 mb-4">Your input is important for us. We take customer feedback very seriously.</p>
            <div className="flex justify-center space-x-4 mb-4">
              {emojis.map((emoji, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedEmoji(emoji.value)}
                  className={`p-2 rounded-full border-2 ${selectedEmoji === emoji.value ? 'border-blue-600' : 'border-gray-300'}`}
                >
                  {emoji.icon}
                </button>
              ))}
            </div>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Add a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-700 
              rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:from-blue-600 hover:to-blue-800"
            onClick={handleFeedbackSubmit}
            >
            Submit Feedback
            </motion.button>
          </div>
        </div>

        <button
          className="mt-4 text-gray-600 flex items-center space-x-2"
          onClick={() => navigate('/')}
        >
          <span>🏠</span>
          <span>Back to home</span>
        </button>
      </div>
    </>
  );
}