import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const LanguageTestDemo = () => {
  const { t, currentLanguage, supportedLanguages, changeLanguage, isLoading } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg p-6 m-4"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        🌐 Language Switching Demo
      </h2>
      
      <div className="space-y-4">
        {/* Current Language Display */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600 font-medium">Current Language:</p>
          <p className="text-lg font-bold text-blue-900">{currentLanguage.toUpperCase()}</p>
        </div>

        {/* Language Switcher */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Switch Language:
          </label>
          <select
            value={currentLanguage}
            onChange={(e) => changeLanguage(e.target.value)}
            disabled={isLoading}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 disabled:opacity-50"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.nativeName} ({lang.name})
              </option>
            ))}
          </select>
        </div>

        {/* Translation Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Navigation</h3>
            <ul className="space-y-1 text-sm text-green-700">
              <li>• {t('nav.dashboard')}</li>
              <li>• {t('nav.qr_generator')}</li>
              <li>• {t('nav.help')}</li>
              <li>• {t('nav.about')}</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">Farmer Dashboard</h3>
            <ul className="space-y-1 text-sm text-purple-700">
              <li>• {t('dashboard.farmer_dashboard')}</li>
              <li>• {t('dashboard.add_product')}</li>
              <li>• {t('dashboard.harvest_date')}</li>
              <li>• {t('dashboard.recent_products')}</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">Admin Dashboard</h3>
            <ul className="space-y-1 text-sm text-blue-700">
              <li>• {t('dashboard.admin_dashboard')}</li>
              <li>• {t('dashboard.total_users')}</li>
              <li>• {t('dashboard.pending_approvals')}</li>
              <li>• {t('dashboard.analytics')}</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">Consumer Dashboard</h3>
            <ul className="space-y-1 text-sm text-orange-700">
              <li>• {t('dashboard.consumer_dashboard')}</li>
              <li>• {t('dashboard.scan_qr_code')}</li>
              <li>• {t('dashboard.scanned_products')}</li>
              <li>• {t('dashboard.verified')}</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">Distributor Dashboard</h3>
            <ul className="space-y-1 text-sm text-yellow-700">
              <li>• {t('dashboard.distributor_dashboard')}</li>
              <li>• {t('dashboard.shipments')}</li>
              <li>• {t('dashboard.from')} / {t('dashboard.to')}</li>
              <li>• {t('dashboard.temperature')}</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">Retailer Dashboard</h3>
            <ul className="space-y-1 text-sm text-red-700">
              <li>• {t('dashboard.retailer_dashboard')}</li>
              <li>• {t('dashboard.available')}</li>
              <li>• {t('dashboard.low_stock')}</li>
              <li>• {t('dashboard.out_of_stock')}</li>
            </ul>
          </div>
        </div>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex items-center justify-center p-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-blue-600">Switching language...</span>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">✅ Test Instructions:</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
            <li>Change the language using the dropdown above</li>
            <li>Notice how all text updates immediately without page refresh</li>
            <li>Navigate to different pages and see consistent language</li>
            <li>The language preference is saved in localStorage</li>
          </ol>
        </div>
      </div>
    </motion.div>
  );
};

export default LanguageTestDemo;
