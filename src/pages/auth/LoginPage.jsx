import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../contexts/LanguageContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [selectedRole, setSelectedRole] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const { t } = useTranslation();
  const { currentLanguage, supportedLanguages, changeLanguage, isLoading } = useLanguage();
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const roles = [
    { value: 'farmer', label: t('auth.roles.farmer'), icon: '🌾', color: 'text-green-600' },
    { value: 'distributor', label: t('auth.roles.distributor'), icon: '🚛', color: 'text-blue-600' },
    { value: 'retailer', label: t('auth.roles.retailer'), icon: '🏪', color: 'text-purple-600' },
    { value: 'consumer', label: t('auth.roles.consumer'), icon: '🛒', color: 'text-orange-600' },
    { value: 'admin', label: t('auth.roles.admin'), icon: '🏛️', color: 'text-red-600' }
  ];

  const connectMetamask = async () => {
    if (!selectedRole) {
      alert(t('auth.select_role'));
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
        alert(t('auth.no_metamask'));
      }
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      alert(t('auth.connect_failed'));
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4 relative">
      {/* Language Dropdown in Top-Right Corner */}
      <div className="absolute top-4 right-4 z-10">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            disabled={isLoading}
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-3 py-2 sm:px-4 shadow-lg hover:bg-white transition-all duration-200 disabled:opacity-50"
          >
            <span className="text-lg">🌐</span>
            <span className="text-sm font-medium text-gray-700">
              {supportedLanguages.find(lang => lang.code === currentLanguage)?.nativeName || 'EN'}
            </span>
            <svg 
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Language Dropdown Menu */}
          {showLanguageDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full right-0 mt-2 w-48 sm:w-56 bg-white border border-gray-200 rounded-xl shadow-xl z-20 max-h-64 overflow-y-auto"
            >
              {supportedLanguages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    changeLanguage(language.code);
                    setShowLanguageDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 first:rounded-t-xl last:rounded-b-xl ${
                    currentLanguage === language.code ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{language.nativeName}</div>
                      <div className="text-xs text-gray-500">{language.name}</div>
                    </div>
                    {currentLanguage === language.code && (
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('app.name')}</h1>
          <p className="text-gray-600">{t('app.tagline')}</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              {t('auth.select_role')}
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
                <span>{t('auth.connecting')}</span>
              </>
            ) : (
              <>
                <span>🦊</span>
                <span>{t('auth.connect_metamask')}</span>
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
                {t('auth.install_here')}
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
