import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AxiosService from '../utils/Axios';
import apiRoutes from '../Routes/APIRoutes';
import { useNavigate } from 'react-router';
import { showLoader, hideLoader } from "../Redux/Loader/loaderSlice.js";
import { setCredentials } from "../Redux/auth/authSlice.js"
import { useDispatch, useSelector } from 'react-redux';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Yup schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  // useForm hook
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit
  const onSubmit = async (formData) => {
    try {
      dispatch(showLoader());
      const { data } = await AxiosService.post(apiRoutes.signIn.path, formData);

      if (data?.isPassed) {
        dispatch(hideLoader());
        const { name, id } = data;
        dispatch(setCredentials({ userName: name, userId: id }));
        navigate("/dashboard/create-link");
      }
    } catch (error) {
      dispatch(hideLoader());
      if (error.response && error.response.status === 400) {
        const checker = error.response.data.checks;
        const message = error.response.data.message;

        // Set field errors
        if (checker === 'mailAlready') {
          setError('email', { type: 'manual', message });
        } else if (checker === 'incorrectpassword') {
          setError('password', { type: 'manual', message });
        } else {
          setError('activate', { type: 'manual', message });
        }
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#FCE7F3] to-[#FAE8FF] flex items-center justify-center p-2 font-figtree">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-md p-8 bg-white rounded-lg shadow-lg">

        <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-6">Sign In</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="form-group mb-6">
            <label htmlFor="email" className="block text-md text-gray-600 mb-2">Email</label>
            <input
              {...register('email')}
              type="text"
              className={`w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 text-xs focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              id="email"
              placeholder="Enter your email"
            />
            {errors.email && <small className="text-red-600 font-semibold">{errors.email.message}</small>}
          </div>

          {/* Password */}
          <div className="form-group mb-6">
            <label htmlFor="password" className="block text-md text-gray-600 mb-2">Password</label>
            <input
              {...register('password')}
              type="password"
              className={`w-full text-xs px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              id="password"
              placeholder="Enter your password"
            />
            {errors.password && <small className="text-red-600 font-semibold">{errors.password.message}</small>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-200 ease-in-out text-xs"
          >
            Submit
          </button>
        </form>

        {/* Links */}
        <div className="mt-6 text-center">
          <small>
            Forgotten Password?{' '}
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer font-semibold" onClick={() => navigate('/resetPassword')}>
              Reset Password
            </span>
          </small>
        </div>
        <div className="mt-4 text-center">
          <small>
            New User?{' '}
            <span className="text-indigo-600 hover:text-indigo-700 cursor-pointer font-semibold" onClick={() => navigate('/signUp')}>
              Sign Up
            </span>
          </small>
        </div>

        {/* Activation Message */}
        {errors.activate && (
          <h5 className="mt-5 text-red-600 text-center">{errors.activate.message}</h5>
        )}
      </div>
    </main>
  );
}

export default SignIn;
