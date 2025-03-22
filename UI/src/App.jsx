import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/authContext';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import TestPage from './pages/Test/Test';
import Home from './pages/Home/Home';
import ScoreFeedback from './pages/FeedBack/FeedBack';
import NotFound from './pages/NoteFound/NoteFound';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/test" element={user ? <TestPage /> : <Navigate to="/login" />} />
        <Route path="/feedbackAndScore" element={user ? <ScoreFeedback /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={user ? '/dashboard' : '/login'} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;