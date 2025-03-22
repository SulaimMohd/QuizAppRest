import React, { useEffect, useState } from "react";
import { FaBars, FaChevronLeft, FaChevronRight, FaCheck } from "react-icons/fa";
import Header from "../../components/Header/Header";
import SideNavbar from "../../components/SideNavbar/SideNavbar";
import QuizCard from "../../components/QuizCard/QuizCard";
import ProgressBar from "../../components/ProressBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import { useData } from "../../context/dataContext";
import { useNavigate } from "react-router-dom";
import menuIcon from '../../assets/icon.png'

const TestPage = () => {
  console.log("hi from the test")
  const {setScore: setFinalScore,setUserAnswers: setFinaAnswers, submitAnswers, questions, fetchQuestions} = useData()
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  useEffect(()=>{
    fetchQuestions()
  }, [])

  const handleNext = () => {
    if (currentQuestion < questions.length) setCurrentQuestion((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) setCurrentQuestion((prev) => prev - 1);
  };

  const handleAnswerSelect = (choice) => {
    setSelectedChoice(choice);
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion]: choice,
    }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index + 1] === question.correctAnswer) {
        score += 1;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    const calculatedScore = calculateScore();
    console.log('This is the calcaulate score', calculatedScore)
    setScore(calculatedScore);
    setShowScore(true);
    setFinalScore(calculatedScore)
    submitAnswers(calculatedScore, userAnswers)
    navigate('/feedbackAndScore')
    
  };

  return (
    <div className="p-4">
      <Header isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
      <button onClick={() => setIsOpen(true)} className="pl-7"><img src={menuIcon} alt="menuIcon" className='h-8 pr-3 self-end' /></button>
      <SideNavbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        questionNumbers={questions.map((_, index) => index + 1)}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />

      <div className="flex w-full">
        <div className="flex w-1/5"></div>
        <div className="w-3/5">
          <ProgressBar progress={currentQuestion} />
          {/* <Timer minutes={15} /> */}
          {
            questions.length > 0 && 
            <QuizCard
            questionNumber={currentQuestion}
            question={questions[currentQuestion - 1].question}
            choices={questions[currentQuestion - 1].choices}
            selectedChoice={userAnswers[currentQuestion] || null}
            setSelectedChoice={handleAnswerSelect}
          />
          }
          <div className="flex gap-2 justify-end mt-4">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
            >
              <FaChevronLeft /> Previous
            </button>
            {currentQuestion !== 10 ? (<button
              onClick={handleNext}
              disabled={currentQuestion === questions.length}
              className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
            >
              Next <FaChevronRight />
            </button>):(
              <button
              onClick={handleSubmit}
              className="flex gap-1 items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
            >
             <FaCheck /> Submit 
            </button>
            )}
          </div>
          {showScore ? (
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold">Your Score: {score}/{questions.length}</h2>
            </div>
          ) : (
            null
          )}
        </div>
        <div className="1/5"></div>
      </div>
    </div>
  );
};

export default TestPage;