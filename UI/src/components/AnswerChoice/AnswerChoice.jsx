// const AnswerChoice = ({ text, isSelected, onClick }) => (
//   <label className="flex items-center p-2 w-1/4 border rounded my-1 bg-white">
//     <input 
//       type="radio" 
//       name="answer" 
//       checked={isSelected} 
//       onChange={onClick} 
//       className="mr-2" 
//     />
//     {text}
//   </label>
// );

// export default AnswerChoice;

const AnswerChoice = ({ text, isSelected, onClick }) => (
  <label
    className={`flex items-center p-3 border rounded-lg my-2 cursor-pointer transition-all 
                ${isSelected ? 'bg-green-100 border-green-500' : 'bg-white border-gray-300'}`}
  >
    <input 
      type="radio" 
      name="answer" 
      checked={isSelected} 
      onChange={onClick} 
      className="hidden" 
    />
    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center mr-3 
                    ${isSelected ? 'border-green-500' : 'border-gray-400'}`}>
      {isSelected && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
    </div>
    {text}
  </label>
);

export default AnswerChoice;
