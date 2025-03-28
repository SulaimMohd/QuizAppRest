import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TopLogo from '../../components/TopLogo/TopLogo';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); // State to store server error messages

  // Yup validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
    currentStatus: Yup.string()
      .oneOf(['Student', 'Employee'], 'Invalid status')
      .required('Current status is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      mobileNumber: '',
      currentStatus: 'Student',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BASEURL}/api/auth/register`, values);
        if (response.status === 201) {
          navigate('/login'); // Redirect to login page on successful registration
        }
      } catch (error) {
        console.error('Registration failed:', error);
        // Handle server errors
        if (error.response && error.response.data.message) {
          setErrorMessage(error.response.data.message); // Set error message from the server
        } else {
          setErrorMessage('Registration failed. Please try again.'); // Generic error message
        }
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Logo */}
      <TopLogo />

      {/* Register Form */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 underline decoration-yellow-400">
          Register
        </h2>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Display server error message */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

        {/* Full Name Input */}
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full border ${
            formik.touched.fullName && formik.errors.fullName
              ? 'border-red-500'
              : 'border-gray-300'
          } rounded-md p-2 mb-4 outline-none`}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <p className="text-red-500 text-sm mb-2">{formik.errors.fullName}</p>
        ) : null}

        {/* Email Input */}
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full border ${
            formik.touched.email && formik.errors.email
              ? 'border-red-500'
              : 'border-gray-300'
          } rounded-md p-2 mb-4 outline-none`}
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 text-sm mb-2">{formik.errors.email}</p>
        ) : null}

        {/* Mobile Number Input */}
        <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
        <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4">
          <input
            type="text"
            placeholder="Enter your phone number"
            name="mobileNumber"
            value={formik.values.mobileNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full outline-none pl-2"
          />
        </div>
        {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
          <p className="text-red-500 text-sm mb-2">{formik.errors.mobileNumber}</p>
        ) : null}

        {/* Current Status Input */}
        <label className="block text-gray-700 font-medium mb-1">Current Status</label>
        <div className="flex space-x-4 mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="currentStatus"
              value="Student"
              checked={formik.values.currentStatus === 'Student'}
              onChange={formik.handleChange}
              className="form-radio text-blue-600"
            />
            <span>Student</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="currentStatus"
              value="Employee"
              checked={formik.values.currentStatus === 'Employee'}
              onChange={formik.handleChange}
              className="form-radio text-blue-600"
            />
            <span>Employee</span>
          </label>
        </div>
        {formik.touched.currentStatus && formik.errors.currentStatus ? (
          <p className="text-red-500 text-sm mb-2">{formik.errors.currentStatus}</p>
        ) : null}

        {/* Password Input */}
        <label className="block text-gray-700 font-medium mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full border ${
            formik.touched.password && formik.errors.password
              ? 'border-red-500'
              : 'border-gray-300'
          } rounded-md p-2 mb-6 outline-none`}
        />
        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 text-sm mb-2">{formik.errors.password}</p>
        ) : null}

        {/* Save Button */}
        <button
          type="button"
          onClick={formik.handleSubmit}
          className="w-full bg-blue-800 text-white py-3 rounded-md text-lg font-medium shadow-md hover:bg-blue-900 transition"
        >
          Save
        </button>
      </div>

      {/* Login Link */}
      <p className="text-gray-600 mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-blue-600 font-medium">
          Login Now
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;