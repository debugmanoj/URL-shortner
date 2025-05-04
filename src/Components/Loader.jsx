import React from 'react';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

function Loader() {
  const isLoading = useSelector((state) => state.loader.isLoading);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Spinner Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            {/* Spinner */}
            <div className="w-10 h-10 border-[3px] border-indigo-500 border-t-transparent border-solid rounded-full animate-spin"></div>

            {/* Loading Text */}
            <p className="mt-2 text-sm text-indigo-600 font-semibold">Loading...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
