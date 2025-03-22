import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null)
  // Check if the user is logged in on initial load
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userData =  JSON.parse(localStorage.getItem('userData'));
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user:', error);
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/auth/login`, { email, password });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userData', JSON.stringify(response.data))
    setUser(response.data);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('useData')
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading,token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);