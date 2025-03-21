import { FaBars, FaChevronLeft, FaChevronRight, FaUserCircle } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import avatar from '../../assets/avatar.png'

const Header = () => {
  const [logoutDrop, setLogOutDrop] = useState(false)
  const {logout} = useAuth()
  return(
  <div className="bg-white   p-4 flex justify-between items-center mb-[20px]">
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
);}

export default Header;