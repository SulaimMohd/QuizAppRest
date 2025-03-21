// import { useState } from 'react';
// import { useAuth } from '../../context/authContext';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await login(email, password);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h1 className='bg-purple-400'> Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className='w-10 h-10'>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// export default function LoginPage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
//       {/* Logo */}
//       <div className="absolute top-6 left-6">
//         <img src="/logo.png" alt="TSEEP Academy Logo" className="h-12" />
//       </div>
      
//       {/* Login Form */}
//       <div className="text-center mb-6">
//         <h2 className="text-3xl font-bold text-gray-900 underline decoration-yellow-400">Login</h2>
//       </div>
      
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
//         <div className="flex items-center border border-gray-300 rounded-md p-2 mb-4">
//           <span className="flex items-center space-x-2 pr-2 border-r border-gray-300">
//             <img src="/india-flag.png" alt="India Flag" className="h-4 w-6" />
//             <select className="outline-none bg-transparent text-gray-700">
//               <option value="+91">+91</option>
//             </select>
//           </span>
//           <input type="text" placeholder="Enter your phone number" className="w-full outline-none pl-2" />
//         </div>

//         <label className="block text-gray-700 font-medium mb-1">Password</label>
//         <input 
//           type="password" 
//           placeholder="Enter Password" 
//           className="w-full border border-gray-300 rounded-md p-2 mb-6 outline-none"
//         />

//         <button className="w-full bg-blue-800 text-white py-3 rounded-md text-lg font-medium shadow-md hover:bg-blue-900 transition">
//           Login
//         </button>
//       </div>

//       <p className="text-gray-600 mt-4">
//         Don’t have an account? <a href="#" className="text-blue-600 font-medium">Register Now</a>
//       </p>
//     </div>
//   );
// }
// import { useState } from 'react';
// import { useAuth } from '../../context/authContext';
// import { useNavigate, Link } from 'react-router-dom';
// import { useFormik } from 'formik';
// import TopLogo from '../../components/TopLogo/TopLogo';
// import * as Yup from 'yup';

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   // Yup validation schema
//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email('Invalid email address')
//       .required('Email is required'),
//     password: Yup.string()
//       .min(6, 'Password must be at least 6 characters')
//       .required('Password is required'),
//   });

//   // Formik setup
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       try {
//         await login(values.email, values.password);
//         navigate('/dashboard');
//       } catch (error) {
//         console.error('Login failed:', error);
//       }
//     },
//   });

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
//       {/* Logo */}
      
//       <TopLogo />
//       {/* Login Form */}
//       <div className="text-center mb-6">
//         <h2 className="text-3xl font-bold text-gray-900 underline decoration-yellow-400">
//           Login
//         </h2>
//       </div>

//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
//         {/* Email Input */}
//         <label className="block text-gray-700 font-medium mb-1">Email</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           name="email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           className={`w-full border ${
//             formik.touched.email && formik.errors.email
//               ? 'border-red-500'
//               : 'border-gray-300'
//           } rounded-md p-2 mb-4 outline-none`}
//         />
//         {formik.touched.email && formik.errors.email ? (
//           <p className="text-red-500 text-sm mb-2">{formik.errors.email}</p>
//         ) : null}

//         {/* Password Input */}
//         <label className="block text-gray-700 font-medium mb-1">Password</label>
//         <input
//           type="password"
//           placeholder="Enter Password"
//           name="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           className={`w-full border ${
//             formik.touched.password && formik.errors.password
//               ? 'border-red-500'
//               : 'border-gray-300'
//           } rounded-md p-2 mb-6 outline-none`}
//         />
//         {formik.touched.password && formik.errors.password ? (
//           <p className="text-red-500 text-sm mb-2">{formik.errors.password}</p>
//         ) : null}

//         {/* Login Button */}
//         <button
//           type="submit"
//           onClick={formik.handleSubmit}
//           className="w-full bg-blue-800 text-white py-3 rounded-md text-lg font-medium shadow-md hover:bg-blue-900 transition"
//         >
//           Login
//         </button>
//       </div>

//       {/* Register Link */}
//       <p className="text-gray-600 mt-4">
//         Don’t have an account?{' '}
//         <Link to="/register" className="text-blue-600 font-medium">
//           Register Now
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Login;
import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import TopLogo from '../../components/TopLogo/TopLogo';
import * as Yup from 'yup';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(''); // State to store server error messages

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } catch (error) {
        console.error('Login failed:', error);
        // Handle server errors
        if (error.response && error.response.data.message) {
          setErrorMessage(error.response.data.message); // Set error message from the server
        } else {
          setErrorMessage('Login failed. Please try again.'); // Generic error message
        }
      }
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Logo */}
      <TopLogo />
      {/* Login Form */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900 underline decoration-yellow-400">
          Login
        </h2>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Display server error message */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

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

        {/* Login Button */}
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className="w-full bg-blue-800 text-white py-3 rounded-md text-lg font-medium shadow-md hover:bg-blue-900 transition"
        >
          Login
        </button>
      </div>

      {/* Register Link */}
      <p className="text-gray-600 mt-4">
        Don’t have an account?{' '}
        <Link to="/register" className="text-blue-600 font-medium">
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default Login;