import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useData } from './dataContext';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const {fetchQuestions} = useData()
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null)
  // Check if the user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const userData =  JSON.parse(localStorage.getItem('userData'));
        setUser(userData); 
        fetchQuestions() 
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/auth/login`, { email, password });
    console.log("User logged in:", response.data); // Check login data
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userData', JSON.stringify(response.data));
    fetchQuestions()
    setUser(response.data);
    console.log("User state updated. Navigation should not happen here.");
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user Data')
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading,token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);