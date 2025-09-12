import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        {/* Unauthorized Animation */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="text-6xl mb-4">🚫</div>
          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 mb-4">
            Access Denied
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Unauthorized Access</h1>
          <p className="text-xl text-gray-600 mb-6">
            You don't have permission to access this resource. This area is restricted to authorized users only.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 max-w-md mx-auto">
            <p className="text-yellow-800">
              <strong>⚠️ Security Notice:</strong> Unauthorized access attempts are logged and monitored.
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center space-x-2 shadow-lg"
          >
            <span>🔐</span>
            <span>Login</span>
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="bg-white text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2 border border-gray-300 shadow-lg"
          >
            <span>🏠</span>
            <span>Go Home</span>
          </button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Access?</h3>
          <p className="text-gray-600 mb-4">
            If you believe you should have access to this resource, please contact your administrator.
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-2">
              <span>👨‍💼</span>
              <span>admin@agrichain.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>📞</span>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </motion.div>

        {/* Security Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 bg-gray-50 rounded-xl p-6 max-w-lg mx-auto"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Security Tips</h4>
          <div className="space-y-3 text-sm text-gray-600 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-green-600 mt-1">✅</span>
              <span>Always log out when finished using the system</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 mt-1">✅</span>
              <span>Use strong, unique passwords for your account</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 mt-1">✅</span>
              <span>Keep your MetaMask wallet secure and updated</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-600 mt-1">✅</span>
              <span>Report any suspicious activity immediately</span>
            </div>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 text-sm text-gray-500"
        >
          <p>🔒 Remember: Security is everyone's responsibility in the blockchain ecosystem!</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Unauthorized;
