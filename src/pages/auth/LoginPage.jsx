import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const roles = [
    { value: 'farmer', label: 'Farmer', icon: '🌾', color: 'text-green-600' },
    { value: 'distributor', label: 'Distributor', icon: '🚛', color: 'text-blue-600' },
    { value: 'retailer', label: 'Retailer', icon: '🏪', color: 'text-purple-600' },
    { value: 'consumer', label: 'Consumer', icon: '🛒', color: 'text-orange-600' },
    { value: 'admin', label: 'Admin/Government', icon: '🏛️', color: 'text-red-600' }
  ];

  const connectMetamask = async () => {
    if (!selectedRole) {
      alert('Please select your role first');
      return;
    }

    setIsConnecting(true);
    
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        
        const walletAddress = accounts[0];
        const userData = {
          address: walletAddress,
          role: selectedRole,
          loginTime: new Date().toISOString()
        };

        login(userData, selectedRole, walletAddress);
        navigate('/dashboard');
      } else {
        alert('MetaMask is not installed. Please install MetaMask to continue.');
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      alert('Failed to connect to MetaMask. Please try again.');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl text-white">🔗</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AgriChain</h1>
          <p className="text-gray-600">Blockchain Supply Chain Transparency</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Your Role
            </label>
            <div className="grid grid-cols-1 gap-3">
              {roles.map((role) => (
                <button
                  key={role.value}
                  onClick={() => setSelectedRole(role.value)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedRole === role.value
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{role.icon}</span>
                    <span className={`font-medium ${role.color}`}>{role.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={connectMetamask}
            disabled={!selectedRole || isConnecting}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
          >
            {isConnecting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Connecting...</span>
              </>
            ) : (
              <>
                <span>🦊</span>
                <span>Connect with MetaMask</span>
              </>
            )}
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Don't have MetaMask?{' '}
              <a
                href="https://metamask.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Install here
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
