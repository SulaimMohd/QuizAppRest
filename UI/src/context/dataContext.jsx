import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const dataContext = createContext();

export const DataProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch questions from the backend
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/questions/getQuestions',{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }} );
      setQuestions(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Calculate the score
  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index + 1] === question.correctAnswer) {
        totalScore += 1;
      }
    });
    return totalScore;
  };

  // Submit answers to the backend
  const submitAnswers = async (finalScore, finalAnswers) => {
    try {
      
      await axios.post('http://localhost:3000/api/submit/submitAnswers', {
        answers: finalAnswers,
        score: finalScore *5,
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }});
      return score;
    } catch (err) {
      console.error('Error submitting answers:', err);
      throw err;
    }
  };

  // Update user's answer for a question
  const updateAnswer = (questionNumber, answer) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionNumber]: answer,
    }));
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <dataContext.Provider
      value={{
        questions,
        userAnswers,
        score,
        loading,
        error,
        updateAnswer,
        submitAnswers,
        setScore,
        setUserAnswers
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);