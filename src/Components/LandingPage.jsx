import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import illustration from "../assets/freedom-concept-illustration.png"; // Import the image

function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#FCE7F3] to-[#FAE8FF] flex items-center justify-center p-8 font-figtree">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side - Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Title */}
          <h1 className=" text-2xl md:text-xl font-extrabold leading-tight text-gray-800">LinkTrim</h1>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            Simplify and Share Your Links Effortlessly
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 md:max-w-lg">
          Shrink your long URLs into compact links with ease.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-6 flex-wrap">
            <button
              onClick={() => navigate("/signUp")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
            >
              Start Now
            </button>
            <button
              onClick={() => navigate("/signIn")}
              className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-xl shadow-sm transform hover:scale-105 transition duration-200 ease-in-out"
            >
              Sign In
            </button>
          </div>
        </motion.div>

        {/* Right Side - Illustration Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>

          <img
             src={illustration} // Use the imported image here
            alt="Link Shortening Illustration"
            className="w-full max-w-md mx-auto z-10 relative"
          />
        </motion.div>
      </div>
    </main>
  );
}

export default LandingPage;
