import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';
import { useLanguage } from '../../contexts/LanguageContext';

const FarmerDashboard = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Organic Tomatoes',
      batchId: 'BATCH-001',
      harvestDate: '2024-01-15',
      location: 'Farm A, Nashik, Maharashtra, India',
      status: 'Harvested',
      qrCode: 'QR-TOMATO-001'
    },
    {
      id: 2,
      name: 'Fresh Lettuce',
      batchId: 'BATCH-002',
      harvestDate: '2024-01-20',
      location: 'Farm B, Ludhiana, Punjab, India',
      status: 'In Transit',
      qrCode: 'QR-LETTUCE-002'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    batchId: '',
    harvestDate: '',
    location: ''
  });

  const handleAddProduct = (e) => {
    e.preventDefault();
    const product = {
      ...newProduct,
      id: products.length + 1,
      status: 'Harvested',
      qrCode: `QR-${newProduct.name.toUpperCase().replace(/\s/g, '')}-${Date.now()}`
    };
    setProducts([...products, product]);
    setNewProduct({ name: '', batchId: '', harvestDate: '', location: '' });
    setShowAddForm(false);
  };

  const stats = [
    { label: t('dashboard.total_products'), value: products.length, icon: '🌾', color: 'text-green-600' },
    { label: t('dashboard.harvested_today'), value: 2, icon: '📅', color: 'text-blue-600' },
    { label: t('dashboard.in_transit'), value: 1, icon: '🚛', color: 'text-orange-600' },
    { label: 'QR Codes Generated', value: products.length, icon: '📱', color: 'text-purple-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Farmer Dashboard</h1>
          <p className="text-gray-600">Manage your agricultural products and track their journey</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
        >
          <span>➕</span>
          <span>{t('dashboard.add_product')}</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Product Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('dashboard.add_product')}</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('dashboard.product_name')}
                </label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Organic Tomatoes"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('dashboard.batch_id')}
                </label>
                <input
                  type="text"
                  value={newProduct.batchId}
                  onChange={(e) => setNewProduct({...newProduct, batchId: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., BATCH-001"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('dashboard.harvest_date')}
                </label>
                <input
                  type="date"
                  value={newProduct.harvestDate}
                  onChange={(e) => setNewProduct({...newProduct, harvestDate: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('dashboard.location')}
                </label>
                <input
                  type="text"
                  value={newProduct.location}
                  onChange={(e) => setNewProduct({...newProduct, location: e.target.value})}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., Farm A, Nashik, Maharashtra, India"
                />
              </div>
              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {t('dashboard.cancel')}
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-xl hover:from-green-700 hover:to-blue-700 transition-all duration-200"
                >
                  {t('dashboard.add_product')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* Products List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">{t('dashboard.recent_products')}</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">Batch: {product.batchId}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        {product.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">{t('dashboard.harvest_date')}:</span> {product.harvestDate}
                    </div>
                    <div>
                      <span className="font-medium">{t('dashboard.location')}:</span> {product.location}
                    </div>
                    <div>
                      <span className="font-medium">QR Code:</span> {product.qrCode}
                    </div>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <QRCodeCanvas value={product.qrCode} size={80} />
                    <p className="text-xs text-gray-500 mt-2 text-center">Scan QR Code</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
