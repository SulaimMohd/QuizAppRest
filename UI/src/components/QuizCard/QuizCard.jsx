// import AnswerChoice from "../AnswerChoice/AnswerChoice";
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

// export default QuizCard;
import AnswerChoice from "../AnswerChoice/AnswerChoice";

const QuizCard = ({ questionNumber,question, choices, selectedChoice, setSelectedChoice }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col max-w-2xl min-w-full">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold">
        {questionNumber}
      </div>
      <h2 className="text-xl font-semibold">{question}</h2>
    </div>

    <div className="mt-4 bg-gray-100 p-4 rounded-lg">
      {choices.map((choice, index) => (
        <AnswerChoice 
          key={index} 
          text={choice} 
          isSelected={selectedChoice === choice} 
          onClick={() => setSelectedChoice(choice)} 
        />
      ))}
    </div>
  </div>
);

export default QuizCard;
