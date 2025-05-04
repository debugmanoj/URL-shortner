import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AxiosService from '../utils/Axios';
import apiRoutes from '../Routes/APIRoutes';

function ResetForm() {
  const { token, email } = useParams();
  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);
  const [showText, setShowText] = useState('You are not allowed');
  const [success, setSuccess] = useState('');

  // Yup Schema
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Check token validity
  const getData = async () => {
    try {
      const result = await AxiosService.post(`${apiRoutes.checkResetPassword.path}/${token}/${email}`);
      if (result.status === 200) {
        setShowForm(true);
        setShowText('');
      }
    } catch (error) {
      setShowText(error.response?.data?.message || 'Invalid or expired link');
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // On Submit
  const onSubmit = async (formData) => {
    try {
      const updatePass = await AxiosService.post(`${apiRoutes.updatePassword.path}/${email}`, formData);
      if (updatePass.status === 200) {
        setShowForm(false);
        setSuccess('All set! You are ready for Sign In ');
      }
    } catch (error) {
      setError('password', {
        type: 'manual',
        message: error.response?.data?.message || 'Something went wrong',
      });
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#FCE7F3] to-[#FAE8FF] flex items-center justify-center p-8">
        <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-extrabold text-center text-gray-800 mb-6">Reset Password</h1>

          {showForm ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mb-6">
                  <label htmlFor="password" className="block text-sm text-gray-600 mb-2">New Password</label>
                  <input
                    {...register('password')}
                    type="password"
                    className={`w-full px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                    id="password"
                    placeholder="Enter new password"
                  />
                  {errors.password && (
                    <small className="text-red-600 font-semibold">{errors.password.message}</small>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="text-center font-bold mt-10 text-gray-700">
                {showText}
              </div>
              {success && (
                <>
                  <h5 className="mt-5 text-green-600 text-center font-figtree">{success}</h5>
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => navigate('/signIn')}
                      className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-200 ease-in-out text-sm"
                    >
                      Go to Sign In
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default ResetForm;
