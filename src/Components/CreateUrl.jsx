import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AxiosService from '../utils/Axios';
import apiRoutes from '../Routes/APIRoutes';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { hideLoader, showLoader } from '../Redux/Loader/loaderSlice';

function CreateUrl() {
  const [shortUrl, setShortUrl] = useState('');
  const [displayShort, setDisplayShort] = useState(false);
  const dispatch=useDispatch()

  const { userId, userName } = useSelector((state) => state.auth);
  const { name } = useParams();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      dispatch(showLoader())
      let result = await AxiosService.post(`${apiRoutes.shortUrl.path}/${userId}`, data);
      if (result.status === 200) {
        setShortUrl(result?.data?.result?.short_url);
        setDisplayShort(true);
        reset(); // clear form
      }
      dispatch(hideLoader())
    } catch (error) {
      dispatch(hideLoader())
      setError('url', {
        type: 'server',
        message: error.response?.data?.message,
      });
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#F9FAFB] to-[#ffffff] min-h-screen rounded-lg">
        <div className="container mx-auto px-4 p-5">
          <h1 className="text-xl font-extrabold text-center text-gray-800 mb-6 ">Create Short Link</h1>
          <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Short Name Input */}
              <div className="mb-6">
                <label htmlFor="ShortenLinkName" className="block text-xs font-medium text-gray-700 mb-2">
                  Short Name
                </label>
                <input
                  {...register('ShortenLinkName', {
                    required: 'Short name is required',
                    minLength: {
                      value: 3,
                      message: 'Short name should be at least 3 characters',
                    },
                  })}
                  type="text"
                  className={`w-full text-xs p-2 border ${errors.ShortenLinkName ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  id="ShortenLinkName"
                  name="ShortenLinkName"
                  placeholder="Enter Short Name"
                />
                {errors.ShortenLinkName && (
                  <small className="text-red-500 font-medium p-2 inline-block">
                    {errors.ShortenLinkName.message}
                  </small>
                )}
              </div>

              {/* Long URL Input */}
              <div className="mb-3">
                <label htmlFor="url" className="block text-xs font-medium text-gray-700 mb-2">
                  Your Long URL
                </label>
                <input
                  {...register('url', {
                    required: 'URL is required',
                    pattern: {
                      value: /^(ftp|http|https):\/\/[^ "]+$/,
                      message: 'Invalid URL format',
                    },
                  })}
                  type="text"
                  className={`w-full text-xs p-2 border ${errors.url ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  id="url"
                  name="url"
                  placeholder="Enter Long URL"
                />
                {errors.url && (
                  <small className="text-red-500 font-medium p-2 inline-block">
                    {errors.url.message}
                  </small>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-xs font-semibold hover:bg-indigo-700 focus:outline-none transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>

            {/* Display Shortened URL */}
            {displayShort && (
              <div className="mt-6 text-center">
                <div className="p-2 bg-gray-100 rounded-lg shadow-md">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-semibold text-xs hover:underline"
                  >
                    {shortUrl}
                  </a>
                </div>
                <div className="mt-4">
                  <a
                    href={shortUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg text-xs font-semibold hover:bg-indigo-700 focus:outline-none transition duration-300"
                  >
                    Visit Shrunk URL
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUrl;
