import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import QrScanner from 'qr-scanner';
import { useLanguage } from '../../contexts/LanguageContext';

const ConsumerDashboard = () => {
  const { t } = useLanguage();
  const [scannedProducts, setScannedProducts] = useState([
    {
      id: 1,
      name: 'Organic Tomatoes',
      batchId: 'BATCH-001',
      scanDate: '2024-01-25',
      authenticity: 'Verified',
      timeline: [
        { step: 'Harvested', date: '2024-01-15', location: 'Farm A, Nashik, Maharashtra', status: 'completed' },
        { step: 'Processed', date: '2024-01-16', location: 'Processing Plant A', status: 'completed' },
        { step: 'Distributed', date: '2024-01-20', location: 'Distribution Center B', status: 'completed' },
        { step: 'Retailed', date: '2024-01-22', location: 'Fresh Market Store', status: 'completed' }
      ]
    }
  ]);

  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  const startScanning = () => {
    setIsScanning(true);
    if (videoRef.current) {
      qrScannerRef.current = new QrScanner(
        videoRef.current,
        (result) => {
          setScanResult(result.data);
          setIsScanning(false);
          qrScannerRef.current?.stop();
          
          // Simulate adding scanned product
          const newProduct = {
            id: Date.now(),
            name: 'Scanned Product',
            batchId: result.data,
            scanDate: new Date().toISOString().split('T')[0],
            authenticity: 'Verified',
            timeline: [
              { step: 'Harvested', date: '2024-01-15', location: 'Farm A, Nashik, Maharashtra', status: 'completed' },
              { step: 'Processed', date: '2024-01-16', location: 'Processing Plant A', status: 'completed' },
              { step: 'Distributed', date: '2024-01-20', location: 'Distribution Center B', status: 'completed' },
              { step: 'Retailed', date: '2024-01-22', location: 'Fresh Market Store', status: 'completed' }
            ]
          };
          setScannedProducts([newProduct, ...scannedProducts]);
        },
        {
          highlightScanRegion: true,
          highlightCodeOutline: true,
        }
      );
      qrScannerRef.current.start();
    }
  };

  const stopScanning = () => {
    setIsScanning(false);
    qrScannerRef.current?.stop();
  };

  const stats = [
    { label: t('dashboard.scanned_products'), value: scannedProducts.length, icon: '📱', color: 'text-blue-600' },
    { label: t('dashboard.verified') + ' Products', value: scannedProducts.filter(p => p.authenticity === 'Verified').length, icon: '✅', color: 'text-green-600' },
    { label: 'This Month', value: scannedProducts.length, icon: '📅', color: 'text-purple-600' },
    { label: 'Trust Score', value: '100%', icon: '🛡️', color: 'text-orange-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('dashboard.consumer_dashboard')}</h1>
        <p className="text-gray-600">Scan products to verify authenticity and track their journey</p>
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

      {/* QR Scanner */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('dashboard.scan_qr_code')}</h2>
        <div className="text-center">
          {!isScanning ? (
            <div className="space-y-4">
              <div className="w-64 h-64 bg-gray-100 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-6xl">📱</span>
              </div>
              <button
                onClick={startScanning}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center space-x-2 mx-auto"
              >
                <span>📷</span>
                <span>Start Scanning</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative w-64 h-64 mx-auto rounded-xl overflow-hidden">
                <video ref={videoRef} className="w-full h-full object-cover"></video>
              </div>
              <button
                onClick={stopScanning}
                className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-red-700 transition-all duration-200"
              >
                Stop Scanning
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scanned Products */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Scanned Products</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {scannedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-600">Batch: {product.batchId}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center space-x-1">
                        <span>🛡️</span>
                        <span>{product.authenticity}</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* Product Timeline */}
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Product Journey</h4>
                    <div className="space-y-2">
                      {product.timeline.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            step.status === 'completed' ? 'bg-green-500' : 'bg-gray-300'
                          }`}></div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-900">{step.step}</span>
                              <span className="text-xs text-gray-500">{step.date}</span>
                            </div>
                            <p className="text-xs text-gray-600">{step.location}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="ml-6 text-right">
                  <p className="text-sm text-gray-500">Scanned on</p>
                  <p className="text-sm font-medium text-gray-900">{product.scanDate}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConsumerDashboard;
