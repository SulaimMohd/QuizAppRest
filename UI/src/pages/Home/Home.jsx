import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [error, setError] = useState(''); // State for error message
  const navigate = useNavigate(); // Hook for navigation

  // Handle Get Started button click
  const handleGetStarted = () => {
    if (isChecked) {
      setError(''); // Clear error message
      navigate('/login'); // Navigate to login page
    } else {
      setError('Please agree to the terms and conditions.'); // Show error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={logo} alt="TSEEP Academy Logo" />
      </div>

      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Welcome to{' '}
          <span className="text-gray-900 underline decoration-yellow-400">
            TSEEP Mastery Box
          </span>
        </h1>
        <p className="text-gray-500 text-lg mt-3">
          Unlock your potential with{' '}
          <span className="font-bold text-gray-700">AI inspired tool</span>
        </p>
      </div>

      {/* Checkbox & Button */}
      <div className="mt-10 w-full max-w-md">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            className="w-5 h-5 border-gray-300 rounded"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)} // Update checkbox state
          />
          <label htmlFor="terms" className="text-gray-700 text-sm">
            I confirm that I have read and accept the terms and conditions and
            privacy policy.
          </label>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
        )}

        {/* Get Started Button */}
        <button
          className="mt-6 w-full bg-blue-800 text-white py-3 rounded-md text-lg font-medium shadow-md hover:bg-blue-900 transition"
          onClick={handleGetStarted} // Handle button click
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Home;