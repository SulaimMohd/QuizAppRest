
import menuIcon from '../../assets/icon.png'
const SideNavbar = ({ isOpen, setIsOpen, questionNumbers, currentQuestion, setCurrentQuestion }) => (
  <div className={`fixed w-1/5 left-[5px] top-[208px] h-full bg-white shadow-md transition-transform ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
    <button onClick={() => setIsOpen(false)} className="p-2 flex w-full justify-end">
      <img src={menuIcon} alt="menuIcon" className='h-8 pr-3 self-end' />
    </button>
    <div className="p-4">
      {questionNumbers.map((num) => (
        <button 
          key={num} 
          onClick={() => setCurrentQuestion(num)} 
          className={`w-10 h-10 m-1 border ${currentQuestion === num ? "bg-gray-300" : "bg-white"}`}
        >
          {num}
        </button>
      ))}
    </div>
  </div>
);
export default SideNavbar;