import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { motion } from "framer-motion";
import AxiosService from "../utils/Axios";
import apiRoutes from "../Routes/APIRoutes";
import illustration from "../assets/freedom-concept-illustration.png"; // Use same image

function Authenticate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [change, setChange] = useState("");

  const AuthenticateUser = async () => {
    try {
      let res = await AxiosService.get(`${apiRoutes.authenticate.path}/${id}`);
      if (res.status === 200) {
        setChange(`Thank you ${res.data.data} ${res.data.message} `);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    AuthenticateUser();
  }, []);

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
          <h1 className="text-2xl md:text-xl font-extrabold leading-tight text-gray-800">LinkTrim</h1>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-800">
            {change ? change : "Activating your account..."}
          </h1>

          {/* CTA Button */}
          <div className="flex gap-6 flex-wrap mt-8">
            <button
              onClick={() => navigate("/signIn")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
            >
              Ready to Shorten
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
            src={illustration}
            alt="Link Shortening Illustration"
            className="w-full max-w-md mx-auto z-10 relative"
          />
        </motion.div>
      </div>
    </main>
  );
}

export default Authenticate;
