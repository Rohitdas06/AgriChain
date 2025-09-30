import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductTimeline = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Mock product data - in real app, this would come from API
  const [product] = useState({
    id: productId || 'BATCH-001',
    name: 'Organic Tomatoes',
    batchId: 'BATCH-001',
    harvestDate: '2024-01-15',
    location: 'Farm A, Nashik, Maharashtra',
    timeline: [
      {
        step: 'Harvested',
        date: '2024-01-15',
        time: '08:30 AM',
        location: 'Farm A, Nashik, Maharashtra',
        farmer: 'Ravi Kumar',
        status: 'completed',
        details: 'Tomatoes harvested from greenhouse section 3A',
        temperature: '22°C',
        humidity: '65%'
      },
      {
        step: 'Quality Check',
        date: '2024-01-15',
        time: '10:15 AM',
        location: 'Farm A, Nashik, Maharashtra',
        farmer: 'Ravi Kumar',
        status: 'completed',
        details: 'Passed quality inspection - Grade A tomatoes',
        temperature: '20°C',
        humidity: '60%'
      },
      {
        step: 'Processing',
        date: '2024-01-16',
        time: '09:00 AM',
        location: 'Processing Plant A',
        processor: 'Green Valley Processing',
        status: 'completed',
        details: 'Washed, sorted, and packaged in eco-friendly containers',
        temperature: '4°C',
        humidity: '70%'
      },
      {
        step: 'Distribution',
        date: '2024-01-20',
        time: '06:00 AM',
        location: 'Distribution Center B',
        distributor: 'Fresh Distribution Co.',
        status: 'completed',
        details: 'Loaded onto refrigerated truck for retail delivery',
        temperature: '3°C',
        humidity: '65%'
      },
      {
        step: 'Retail',
        date: '2024-01-22',
        time: '11:30 AM',
        location: 'Fresh Market Store',
        retailer: 'Green Grocery Store',
        status: 'completed',
        details: 'Received and placed on store shelves',
        temperature: '5°C',
        humidity: '60%'
      },
      {
        step: 'Consumer',
        date: '2024-01-25',
        time: '02:15 PM',
        location: 'Consumer Home',
        consumer: 'You',
        status: 'current',
        details: 'Product scanned and verified for authenticity',
        temperature: 'Room Temperature',
        humidity: 'N/A'
      }
    ]
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'current':
        return 'bg-blue-500';
      case 'pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-300';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'current':
        return '📍';
      case 'pending':
        return '⏳';
      default:
        return '⭕';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-600">Batch ID: {product.batchId}</p>
              <p className="text-sm text-gray-500">Harvested: {product.harvestDate} at {product.location}</p>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-600 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>

        {/* Product Info Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Product Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-medium text-green-800 mb-2">🌾 Origin</h3>
              <p className="text-sm text-green-700">{product.location}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-medium text-blue-800 mb-2">📅 Harvest Date</h3>
              <p className="text-sm text-blue-700">{product.harvestDate}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-medium text-purple-800 mb-2">🔗 Blockchain Verified</h3>
              <p className="text-sm text-purple-700">100% Authentic</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Product Journey Timeline</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            {product.timeline.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full ${getStatusColor(step.status)} flex items-center justify-center text-white text-xl shadow-lg`}>
                  {getStatusIcon(step.status)}
                </div>

                {/* Content Card */}
                <div className="ml-6 flex-1">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{step.step}</h3>
                        <p className="text-sm text-gray-600">{step.details}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{step.date}</p>
                        <p className="text-xs text-gray-500">{step.time}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Location:</span>
                        <p className="text-gray-600">{step.location}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Responsible:</span>
                        <p className="text-gray-600">
                          {step.farmer || step.processor || step.distributor || step.retailer || step.consumer}
                        </p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Temperature:</span>
                        <p className="text-gray-600">{step.temperature}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Humidity:</span>
                        <p className="text-gray-600">{step.humidity}</p>
                      </div>
                    </div>

                    {step.status === 'current' && (
                      <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                        <p className="text-sm text-blue-800 font-medium">
                          🎉 This product is currently in your possession!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Blockchain Verification */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <span className="text-2xl text-white">🔗</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Blockchain Verification</h3>
              <p className="text-sm text-gray-600">
                This product's journey has been recorded on the blockchain and verified for authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTimeline;
