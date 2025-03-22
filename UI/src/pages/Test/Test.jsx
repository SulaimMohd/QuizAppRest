// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { FaBars } from "react-icons/fa";
// // import { Button } from "@/components/ui/button";

// const TopHeader = () => (
//   <div className="bg-white shadow-md p-4 flex justify-between items-center">
//     <h1 className="text-xl font-bold">TSEEP Academy</h1>
//     <button className="bg-red-500 text-white">Logout</button>
//   </div>
// );

// const SideNav = ({ isOpen, setIsOpen, questionNumbers, currentQuestion, setCurrentQuestion }) => (
//   <div className={`fixed left-0 top-0 h-full bg-white shadow-md transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
//     <button onClick={() => setIsOpen(false)} className="p-2">Close</button>
//     <div className="p-4">
//       {questionNumbers.map((num) => (
//         <button 
//           key={num} 
//           onClick={() => setCurrentQuestion(num)} 
//           className={`w-10 h-10 m-1 border ${currentQuestion === num ? "bg-gray-300" : "bg-white"}`}
//         >
//           {num}
//         </button>
//       ))}
//     </div>
//   </div>
// );

// const ProgressBar = ({ progress }) => (
//   <motion.div className="h-2 bg-blue-500" initial={{ width: "0%" }} animate={{ width: `${progress}%` }} />
// );

// const Timer = ({ minutes }) => {
//   const [timeLeft, setTimeLeft] = useState(minutes * 60);
//   useEffect(() => {
//     const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const formatTime = (seconds) => `${Math.floor(seconds / 60)}:${seconds % 60}`;
//   return <div className="bg-yellow-400 p-2 rounded">{formatTime(timeLeft)}</div>;
// };

// const AnswerChoice = ({ text, isSelected, onClick }) => (
//   <button 
//     className={`block p-2 w-full border rounded my-1 ${isSelected ? "bg-green-300" : "bg-white"}`}
//     onClick={onClick}
//   >
//     {text}
//   </button>
// );

// const QuizCard = ({ question, choices, selectedChoice, setSelectedChoice }) => (
//   <div className="p-4 border rounded shadow-md">
//     <h2 className="text-lg font-bold mb-2">{question}</h2>
//     {choices.map((choice, index) => (
//       <AnswerChoice 
//         key={index} 
//         text={choice} 
//         isSelected={selectedChoice === choice} 
//         onClick={() => setSelectedChoice(choice)} 
//       />
//     ))}
//   </div>
// );

// const TestPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(1);
//   const [selectedChoice, setSelectedChoice] = useState(null);
//   const questions = [
//     { question: "Which of the following words is a synonym for 'exhilarating'?", choices: ["Exciting", "Boring", "Tiresome", "Frightening", "Confusing"] }
//   ];

//   return (
//     <div className="p-4">
//       <TopHeader />
//       <button onClick={() => setIsOpen(true)} className="p-2"><FaBars /></button>
//       <SideNav isOpen={isOpen} setIsOpen={setIsOpen} questionNumbers={[1,2,3,4,5,6,7,8,9,10]} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
//       <ProgressBar progress={(currentQuestion / 10) * 100} />
//       <Timer minutes={15} />
//       <QuizCard question={questions[0].question} choices={questions[0].choices} selectedChoice={selectedChoice} setSelectedChoice={setSelectedChoice} />
//     </div>
//   );
// };

// export default TestPage;
// import React, { useState, useEffect } from "react";

// import { FaBars, FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
// import Header from "../../components/Header/Header";
// import SideNavbar from "../../components/SideNavbar/SideNavbar";
// import QuizCard from "../../components/QuizCard/QuizCard";
// import ProgressBar from "../../components/ProressBar/ProgressBar";
// import Timer from "../../components/Timer/Timer";


// const TestPage = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [currentQuestion, setCurrentQuestion] = useState(1);
//   const [selectedChoice, setSelectedChoice] = useState(null);
//   const questions = [
//     { question: "Which of the following words is a synonym for 'exhilarating'?", choices: ["Exciting", "Boring", "Tiresome", "Frightening", "Confusing"], }
//   ];

//   const handleNext = () => {
//     if (currentQuestion < 10) setCurrentQuestion((prev) => prev + 1);
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 1) setCurrentQuestion((prev) => prev - 1);
//   };

//   return (
//     <div className="p-4">
//       <Header isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen} />
//       <button onClick={() => setIsOpen(true)} className="p-2"><FaBars /></button>
//       <SideNavbar 
//         isOpen={isOpen} 
//         setIsOpen={setIsOpen} 
//         questionNumbers={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} 
//         currentQuestion={currentQuestion} 
//         setCurrentQuestion={setCurrentQuestion} 
//       />
      
//       <div className="flex w-full">
//         <div className="flex w-1/5">

//         </div>
//         <div className="w-3/5">
//           <ProgressBar progress={currentQuestion} />
//           <Timer minutes={15} />
//           <QuizCard 
//             question={questions[0].question} 
//             choices={questions[0].choices} 
//             selectedChoice={selectedChoice} 
//             setSelectedChoice={setSelectedChoice} 
//           />
//           <div className="flex gap-2 justify-end mt-4">
//           <button 
//             onClick={handlePrevious} 
//             disabled={currentQuestion === 1} 
//             className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
//           >
//             <FaChevronLeft /> Previous
//           </button>
//           <button 
//             onClick={handleNext} 
//             disabled={currentQuestion === 10} 
//             className="flex items-center space-x-2 bg-blue-800 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
//           >
//             Next <FaChevronRight />
//           </button>
//         </div>
//         </div>
//         <div className="1/5">

//         </div>
//       </div>
      
      
//     </div>
//   );
// };

// export default TestPage;

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
  const [isOpen, setIsOpen] = useState(false);
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
      <button onClick={() => setIsOpen(true)} className="p-2"><img src={menuIcon} alt="menuIcon" className='h-5 pr-3 self-end' /></button>
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