import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* 404 Animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-4">
            404
          </div>
          <div className="text-6xl mb-4">🔍</div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-6">
            Oops! The page you're looking for seems to have wandered off into the digital wilderness.
          </p>
          <p className="text-gray-500">
            Don't worry, even the best farmers sometimes lose track of their crops! 🌾
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center space-x-2 shadow-lg"
          >
            <span>🏠</span>
            <span>Go Home</span>
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="bg-white text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 border border-gray-300 shadow-lg"
          >
            <span>←</span>
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4">
            If you think this is an error, please contact our support team.
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-2">
              <span>📧</span>
              <span>support@agrichain.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-sm text-gray-500"
        >
          <p>💡 Fun fact: The first QR code was created in 1994 for tracking automotive parts!</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
