import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png'
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import avatar from '../../assets/avatar.png'

export default function QuizLandingPage() {
  const [logoutDrop, setLogOutDrop] = useState(false)
  const {logout} = useAuth()
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white fixed left-0 right-0  p-4 flex justify-between items-center mb-[20px]">
      <div className="flex items-center space-x-4">
      <img src={logo} alt="TSEEP Academy Logo"  className="h-36"/>

      </div>
      <div className="relative">
      <button onClick={() => setLogOutDrop((prev) => !prev)} className="flex items-center space-x-2">
      <img src={avatar} alt="avatarImage" className="h-20 pr-40"/>
      </button>
      {/* Dropdown for Logout */}
      {
      logoutDrop && <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-md">
      <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={logout}>Logout</button>
      </div>
      }
      </div>
      </div>
      <div className="flex flex-col items-center justify-center min-h-svh bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 ">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Ultimate Quiz!</h1>
        <p className="text-lg mb-6 text-center max-w-xl">
          Test your knowledge and challenge yourself with our exciting quiz. Are you ready to take on the challenge?
        </p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 text-lg font-semibold bg-white text-indigo-600 rounded-2xl shadow-lg transition-transform"
          onClick={()=> navigate('/test')}
        >
          Start Quiz
        </motion.button>
      </div>
    </div>
  );
}