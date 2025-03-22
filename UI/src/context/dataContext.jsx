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
      console.log('this is the token in the fetchQuestions')
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/questions/getQuestions`,{
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
      
      await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/submit/submitAnswers`, {
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
        setUserAnswers,
        fetchQuestions
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useData = () => useContext(dataContext);