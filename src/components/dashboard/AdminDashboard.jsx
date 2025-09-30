import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');
  const [pendingUsers, setPendingUsers] = useState([
    {
      id: 1,
      name: 'Rahul Modi',
      email: 'rahul@farm.com',
      organization: 'Green Valley Farm',
      role: 'farmer',
      requestDate: '2024-01-20',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Piyush Rajat',
      email: 'piyush@distrib.com',
      organization: 'Fresh Distribution Co.',
      role: 'distributor',
      requestDate: '2024-01-21',
      status: 'pending'
    }
  ]);

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: 'Product Added',
      user: 'Rahul Modi',
      product: 'Organic Tomatoes',
      batchId: 'BATCH-001',
      timestamp: '2024-01-25 10:30:00',
      status: 'Confirmed'
    },
    {
      id: 2,
      type: 'Product Transferred',
      user: 'Piyush Rajat',
      product: 'Fresh Lettuce',
      batchId: 'BATCH-002',
      timestamp: '2024-01-25 11:15:00',
      status: 'Confirmed'
    }
  ]);

  const [analytics, setAnalytics] = useState({
    totalProducts: 1250,
    totalUsers: 45,
    fraudDetected: 2,
    transactionsToday: 89
  });

  const approveUser = (userId) => {
    setPendingUsers(pendingUsers.filter(user => user.id !== userId));
  };

  const rejectUser = (userId) => {
    setPendingUsers(pendingUsers.filter(user => user.id !== userId));
  };

  const tabs = [
    { id: 'overview', label: t('dashboard.overview'), icon: '📊' },
    { id: 'users', label: t('dashboard.users'), icon: '👥' },
    { id: 'transactions', label: t('dashboard.transactions'), icon: '🔗' },
    { id: 'analytics', label: t('dashboard.analytics'), icon: '📈' }
  ];

  const stats = [
    { label: t('dashboard.total_products'), value: analytics.totalProducts, icon: '📦', color: 'text-blue-600' },
    { label: t('dashboard.total_users'), value: analytics.totalUsers, icon: '👥', color: 'text-green-600' },
    { label: 'Fraud Detected', value: analytics.fraudDetected, icon: '⚠️', color: 'text-red-600' },
    { label: 'Transactions Today', value: analytics.transactionsToday, icon: '🔗', color: 'text-purple-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{t('dashboard.admin_dashboard')}</h1>
        <p className="text-gray-600">Manage the blockchain supply chain network</p>
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

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-lg">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">System Health</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Blockchain Status</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Healthy
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Database Status</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Online
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">API Status</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    <div className="text-sm">
                      <span className="font-medium">5 new products</span> added today
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">12 transactions</span> processed
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">3 users</span> registered
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* User Management Tab */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Pending User Approvals</h3>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                  {pendingUsers.length} pending
                </span>
              </div>
              
              {pendingUsers.length > 0 ? (
                <div className="space-y-4">
                  {pendingUsers.map((user, index) => (
                    <motion.div
                      key={user.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gray-50 rounded-xl p-6"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{user.name}</h4>
                          <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div><span className="font-medium">Email:</span> {user.email}</div>
                            <div><span className="font-medium">Organization:</span> {user.organization}</div>
                            <div><span className="font-medium">Role:</span> {user.role}</div>
                          </div>
                          <div className="mt-2 text-sm text-gray-500">
                            <span className="font-medium">Request Date:</span> {user.requestDate}
                          </div>
                        </div>
                        <div className="ml-6 flex space-x-3">
                          <button
                            onClick={() => approveUser(user.id)}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => rejectUser(user.id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <span className="text-6xl">✅</span>
                  <p className="text-gray-600 mt-4">No pending user approvals</p>
                </div>
              )}
            </div>
          )}

          {/* Transactions Tab */}
          {activeTab === 'transactions' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Recent Blockchain Transactions</h3>
              <div className="bg-gray-50 rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          User
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Timestamp
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {transactions.map((transaction, index) => (
                        <motion.tr
                          key={transaction.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="hover:bg-white transition-colors"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {transaction.type}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {transaction.user}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {transaction.product} ({transaction.batchId})
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                            {transaction.timestamp}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                              {transaction.status}
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">System Analytics</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Product Statistics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Total Products</span>
                      <span className="font-semibold">{analytics.totalProducts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Products This Month</span>
                      <span className="font-semibold">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Average Processing Time</span>
                      <span className="font-semibold">2.3 days</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Security Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Fraud Attempts</span>
                      <span className="font-semibold text-red-600">{analytics.fraudDetected}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Security Score</span>
                      <span className="font-semibold text-green-600">98%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Blockchain Integrity</span>
                      <span className="font-semibold text-green-600">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
