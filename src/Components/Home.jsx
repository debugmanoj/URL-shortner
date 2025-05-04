import React, { useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { FiPlus, FiList } from 'react-icons/fi';
import { TbLayoutNavbarCollapseFilled } from "react-icons/tb";
import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa'; // Profile icon
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/auth/authSlice';

function Home() {
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleLogOut=()=>{
    dispatch(logout())
    navigate('/signIn');
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#EEF2FF] via-[#FCE7F3] to-[#FAE8FF] font-figtree">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? 'w-[15rem]' : 'w-16'
        } bg-white shadow-lg p-3 flex flex-col`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="mb-6 text-indigo-600 font-bold flex items-center space-x-2 inline-block shadow-cyan-500/50"
        >
          <motion.div
            animate={{ rotate: isSidebarOpen ? 0 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-between w-full"
          >
            {isSidebarOpen ? (
              <>
                <h1 className="text-xl">LinkTrim</h1>
                <TbLayoutNavbarCollapseFilled className="text-xl -rotate-90 mt-1" />
              </>
            ) : (
              <TbLayoutNavbarCollapseFilled className="text-xl mx-auto rotate-90" />
            )}
          </motion.div>
        </button>

        <nav className="flex flex-col space-y-4">
          <button
            onClick={() => navigate(`/dashboard/create-link`)}
            className="flex items-center space-x-2 text-gray-700 hover:text-black font-semibold text-sm md:text-base hover:bg-red-50 p-2 hover:rounded-lg"
          >
            <FiPlus className="text-sm" />
            {isSidebarOpen && <span className="text-xs">Create Short Link</span>}
          </button>
          <button
            onClick={() => navigate(`/dashboard/view-links`)}
            className="flex items-center space-x-2 text-gray-700 hover:text-black font-semibold text-sm md:text-base hover:bg-red-50 p-2 hover:rounded-lg"
          >
            <FiList className="text-sm" />
            {isSidebarOpen && <span className="text-xs">My Short Links</span>}
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen max-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center bg-gray-50 shadow-xs p-2 rounded-sm">
          <h2 className="text-xs font-semibold text-gray-700"></h2>

          {/* Profile Popover */}
          <div className="relative">
            {/* Profile Icon */}
            <FaUserCircle
              className="text-2xl text-indigo-600 cursor-pointer mt-2"
              onClick={() => setIsPopoverOpen((prev) => !prev)}
            />

            {/* Popover */}
            <div
              className={`absolute right-0 mt-2  bg-white border border-gray-200 rounded shadow-md p-2 z-50 transition-all duration-200 transform ${
                isPopoverOpen ? 'opacity-100 scale-100 w-44 text-center p-0 rounded-md' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <motion.button
                onClick={handleLogOut}
                className="text-xs w-full text-center text-gray-700 hover:text-black hover:bg-red-100 hover:p-1 hover:font-bold hover:rounded-md"
              >
                Log out
              </motion.button>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 p-2 md:p-1 overflow-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
