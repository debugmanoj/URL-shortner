import React from 'react';
import { useForm } from 'react-hook-form';
import AxiosService from '../utils/Axios';
import apiRoutes from '../Routes/APIRoutes';

function ResetPassword() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let result = await AxiosService.post(`${apiRoutes.resetPassword.path}`, data);

      if (result.status === 200) {
        reset(); // Clear form after successful submit
        alert('Check the registered email ✉️\nThank You');
      }
    } catch (error) {
      setError('email', {
        type: 'server',
        message: error.response?.data?.message + ' 😊',
      });
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#FCE7F3] to-[#FAE8FF] flex items-center justify-center p-8">
        <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Reset Password
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-6">
              <label htmlFor="email" className="block text-lg text-gray-600 mb-2">
                Email Address
              </label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
                type="text"
                className={`w-full px-4 py-3 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              {errors.email && (
                <small className="text-red-500 font-medium p-2 inline-block">
                  {errors.email.message}
                </small>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
            >
              Submit
            </button>
          </form>

          {isSubmitSuccessful && (
            <h6 className="text-center mt-5 text-green-600 font-semibold">
              Check the registered email ✉️ Thank You
            </h6>
          )}
        </div>
      </main>
    </>
  );
}

export default ResetPassword;
