import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { QRCodeCanvas } from 'qrcode.react';

const RetailerDashboard = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Organic Tomatoes',
      batchId: 'BATCH-001',
      supplier: 'Distribution Center A',
      receivedDate: '2024-01-22',
      status: 'Available',
      price: '₹4.99',
      stock: 50,
      qrCode: 'QR-TOMATO-001'
    },
    {
      id: 2,
      name: 'Fresh Lettuce',
      batchId: 'BATCH-002',
      supplier: 'Distribution Center B',
      receivedDate: '2024-01-23',
      status: 'Low Stock',
      price: '₹2.99',
      stock: 5,
      qrCode: 'QR-LETTUCE-002'
    }
  ]);

  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const updateStock = (productId, newStock) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { 
            ...product, 
            stock: newStock,
            status: newStock > 20 ? 'Available' : newStock > 0 ? 'Low Stock' : 'Out of Stock'
          }
        : product
    ));
  };

  const printQRCode = (product) => {
    setSelectedProduct(product);
    setShowQRModal(true);
  };

  const stats = [
    { label: 'Total Products', value: products.length, icon: '📦', color: 'text-blue-600' },
    { label: 'Available', value: products.filter(p => p.status === 'Available').length, icon: '✅', color: 'text-green-600' },
    { label: 'Low Stock', value: products.filter(p => p.status === 'Low Stock').length, icon: '⚠️', color: 'text-orange-600' },
    { label: 'Out of Stock', value: products.filter(p => p.status === 'Out of Stock').length, icon: '❌', color: 'text-red-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Retailer Dashboard</h1>
        <p className="text-gray-600">Manage store inventory and product availability</p>
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

      {/* Products List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Store Inventory</h2>
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
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        product.status === 'Available' 
                          ? 'bg-green-100 text-green-800'
                          : product.status === 'Low Stock'
                          ? 'bg-orange-100 text-orange-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div><span className="font-medium">Supplier:</span> {product.supplier}</div>
                    <div><span className="font-medium">Received:</span> {product.receivedDate}</div>
                    <div><span className="font-medium">Price:</span> {product.price}</div>
                    <div><span className="font-medium">Stock:</span> {product.stock} units</div>
                  </div>
                </div>
                <div className="ml-6 flex space-x-3">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateStock(product.id, product.stock - 1)}
                      className="bg-red-100 text-red-600 px-3 py-1 rounded-lg hover:bg-red-200 transition-colors"
                      disabled={product.stock <= 0}
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-medium">{product.stock}</span>
                    <button
                      onClick={() => updateStock(product.id, product.stock + 1)}
                      className="bg-green-100 text-green-600 px-3 py-1 rounded-lg hover:bg-green-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => printQRCode(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <span>🖨️</span>
                    <span>Print QR</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* QR Code Print Modal */}
      {showQRModal && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Print QR Code</h2>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
                <QRCodeCanvas value={selectedProduct.qrCode} size={200} />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Product: {selectedProduct.name}<br />
                Batch: {selectedProduct.batchId}
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowQRModal(false)}
                  className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    window.print();
                    setShowQRModal(false);
                  }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                >
                  Print QR Code
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default RetailerDashboard;
