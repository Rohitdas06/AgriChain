import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const DistributorDashboard = () => {
  const { t } = useLanguage();
  const [shipments, setShipments] = useState([
    {
      id: 1,
      productName: 'Organic Tomatoes',
      batchId: 'BATCH-001',
      from: 'Farm A, Nashik, Maharashtra',
      to: 'Distribution Center, Pune',
      status: 'In Transit',
      estimatedArrival: '2024-01-25',
      temperature: '4°C',
      humidity: '65%'
    },
    {
      id: 2,
      productName: 'Fresh Lettuce',
      batchId: 'BATCH-002',
      from: 'Farm B, Ludhiana, Punjab',
      to: 'Distribution Center, Delhi',
      status: 'Delivered',
      estimatedArrival: '2024-01-22',
      temperature: '2°C',
      humidity: '70%'
    }
  ]);

  const [pendingProducts, setPendingProducts] = useState([
    {
      id: 1,
      productName: 'Organic Carrots',
      batchId: 'BATCH-003',
      farmer: 'Ravi Kumar',
      harvestDate: '2024-01-20',
      location: 'Farm C, Coimbatore, Tamil Nadu',
      requestDate: '2024-01-21'
    }
  ]);

  const acceptProduct = (productId) => {
    const product = pendingProducts.find(p => p.id === productId);
    const newShipment = {
      id: Date.now(),
      productName: product.productName,
      batchId: product.batchId,
      from: product.location,
      to: 'Distribution Center A',
      status: 'Accepted',
      estimatedArrival: '2024-01-28',
      temperature: '3°C',
      humidity: '60%'
    };
    setShipments([...shipments, newShipment]);
    setPendingProducts(pendingProducts.filter(p => p.id !== productId));
  };

  const updateStatus = (shipmentId, newStatus) => {
    setShipments(shipments.map(shipment => 
      shipment.id === shipmentId 
        ? { ...shipment, status: newStatus }
        : shipment
    ));
  };

  const stats = [
    { label: 'Active ' + t('dashboard.shipments'), value: shipments.filter(s => s.status === 'In Transit').length, icon: '🚛', color: 'text-blue-600' },
    { label: t('dashboard.delivered') + ' Today', value: shipments.filter(s => s.status === 'Delivered').length, icon: '✅', color: 'text-green-600' },
    { label: t('dashboard.pending_approvals'), value: pendingProducts.length, icon: '⏳', color: 'text-orange-600' },
    { label: 'Total Handled', value: shipments.length, icon: '📦', color: 'text-purple-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('dashboard.distributor_dashboard')}</h1>
        <p className="text-gray-600">Manage product distribution and transportation logistics</p>
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

      {/* Pending Products */}
      {pendingProducts.length > 0 && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-orange-50">
            <h2 className="text-xl font-semibold text-orange-800">{t('dashboard.pending_products')} {t('dashboard.pending_approvals')}</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {pendingProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{product.productName}</h3>
                    <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                      <div><span className="font-medium">Batch ID:</span> {product.batchId}</div>
                      <div><span className="font-medium">Farmer:</span> {product.farmer}</div>
                      <div><span className="font-medium">Location:</span> {product.location}</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-500">
                      <span className="font-medium">Request Date:</span> {product.requestDate}
                    </div>
                  </div>
                  <div className="ml-6 flex space-x-3">
                    <button
                      onClick={() => acceptProduct(product.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Accept
                    </button>
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Active Shipments */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Active Shipments</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {shipments.map((shipment, index) => (
            <motion.div
              key={shipment.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{shipment.productName}</h3>
                      <p className="text-sm text-gray-600">Batch: {shipment.batchId}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        shipment.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800'
                          : shipment.status === 'In Transit'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {shipment.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div><span className="font-medium">From:</span> {shipment.from}</div>
                    <div><span className="font-medium">To:</span> {shipment.to}</div>
                    <div><span className="font-medium">ETA:</span> {shipment.estimatedArrival}</div>
                    <div><span className="font-medium">Temp:</span> {shipment.temperature}</div>
                  </div>
                </div>
                <div className="ml-6 flex space-x-2">
                  {shipment.status === 'Accepted' && (
                    <button
                      onClick={() => updateStatus(shipment.id, 'In Transit')}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Start Transit
                    </button>
                  )}
                  {shipment.status === 'In Transit' && (
                    <button
                      onClick={() => updateStatus(shipment.id, 'Delivered')}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Mark Delivered
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistributorDashboard;
