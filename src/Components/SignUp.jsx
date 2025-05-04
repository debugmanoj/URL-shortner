import React, { useState } from 'react';
import AxiosService from '../utils/Axios';
import apiRoutes from '../Routes/APIRoutes';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion'; // Import framer-motion

function SignUp() {
  let navigate = useNavigate();
  const [exist, setExist] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    try {
      let data = await AxiosService.post(`${apiRoutes.signUp.path}`, formProps);

      if (data.status === 200) {
        navigate("/thankYou");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setExist(true);
      } else {
        console.error("An error occurred:", error);
      }
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#FCE7F3] to-[#FAE8FF] flex items-center justify-center p-8 font-figtree">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-6">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-6">
              <label htmlFor="name" className="block text-md text-gray-600 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group mb-6">
              <label htmlFor="email" className="block text-md text-gray-600 mb-2">
                Email
              </label>
              <input
                type="text"
                style={exist ? { border: '1px solid red' } : {}}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                id="email"
                name="email"
                placeholder="Enter your email"
              />

              {/* Animated Error */}
              {exist && (
                <motion.small
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="tracking-wider font-figtree text-red-500 font-medium p-2 inline-block"
                >
                  Existing Email Address
                </motion.small>
              )}
            </div>

            <div className="form-group mb-6">
              <label htmlFor="password" className="block text-md text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-200 ease-in-out text-md"
            >
              Submit
            </button>
          </form>

          <div className="mt-6 text-center">
            <small>
              Already have an account?{' '}
              <a
                className="text-indigo-600 hover:text-indigo-700 cursor-pointer font-semibold"
                onClick={() => navigate("/signIn")}
              >
                Sign In
              </a>
            </small>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
