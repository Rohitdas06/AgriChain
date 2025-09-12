import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNotifications } from '../contexts/NotificationContext';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const { user, role, logout } = useAuth();
  const { notifications } = useNotifications();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const getRoleIcon = (role) => {
    switch (role) {
      case 'farmer': return '🌾';
      case 'distributor': return '🚛';
      case 'retailer': return '🏪';
      case 'consumer': return '🛒';
      case 'admin': return '🏛️';
      default: return '👤';
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'farmer': return 'text-green-600';
      case 'distributor': return 'text-blue-600';
      case 'retailer': return 'text-purple-600';
      case 'consumer': return 'text-orange-600';
      case 'admin': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const navigationItems = [
    { name: 'Dashboard', to: '/dashboard', icon: '📊' },
    { name: 'QR Generator', to: '/qr-generator', icon: '📱' },
    { name: 'QR Scanner', to: '/qr-scanner', icon: '📷' },
    { name: 'Product Timeline', to: '/product-timeline', icon: '📈' },
    // Removed Profile and Help from the main navbar buttons
  ];

  // Include a dedicated Farmer button in the navbar for farmer users
  const resolvedItems = (() => {
    const items = [...navigationItems];
    if (role === 'farmer') {
      items.splice(1, 0, { name: 'Farmer', to: '/dashboard', icon: '🌾' });
    }
    return items;
  })();

  return (
    <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center no-underline" style={{ textDecoration: 'none' }}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900 select-none">AgriChain</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center flex-1 justify-center overflow-x-auto whitespace-nowrap space-x-2">
            {resolvedItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) => [
                  'inline-flex items-center space-x-2 h-10 px-4 rounded-full text-sm font-medium transition-colors border no-underline whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                  isActive
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white border-transparent shadow'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 text-white border-transparent hover:from-green-700 hover:to-blue-700'
                ].join(' ')}
                style={{ textDecoration: 'none' }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors relative"
              >
                <span className="text-xl">🔔</span>
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50"
                >
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                          <div className="flex items-start space-x-3">
                            <span className="text-2xl">{notification.icon || '📢'}</span>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                              <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                              <p className="text-xs text-gray-400 mt-1">
                                {new Date(notification.timestamp).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-8 text-center text-gray-500">
                        <span className="text-4xl">🔔</span>
                        <p className="mt-2">No notifications</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center gap-3 h-10 px-4 rounded-full border border-gray-200 bg-white text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="hidden md:block text-left">
                  <p className={`text-sm ${getRoleColor(role)} leading-none whitespace-nowrap`}>
                    {`User ${role ? role.charAt(0).toUpperCase() + role.slice(1) : ''}`.trim()}
                  </p>
                </div>
                <span className="text-gray-400">▼</span>
              </button>

              {/* Dropdown Menu */}
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-50 p-2"
                >
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/profile"
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 no-underline"
                      style={{ textDecoration: 'none' }}
                    >
                      <span>👤</span>
                      <span>Profile Settings</span>
                    </Link>
                    <Link
                      to="/help"
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 no-underline"
                      style={{ textDecoration: 'none' }}
                    >
                      <span>❓</span>
                      <span>Help & Support</span>
                    </Link>
                    <div className="border-t border-gray-100 pt-2 mt-1">
                      <button
                        onClick={logout}
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium w-full text-left border border-transparent text-red-600 hover:bg-red-50"
                      >
                        <span>🚪</span>
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Top-right About button (last item) */}
            <NavLink
              to="/about"
              className={({ isActive }) => [
                'hidden md:inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-colors no-underline whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                isActive
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow'
                  : 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
              ].join(' ')}
              style={{ textDecoration: 'none' }}
            >
              <span>ℹ️</span>
              <span>About</span>
            </NavLink>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span className="text-xl">☰</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-2">
              <NavLink
                to="/about"
                className={({ isActive }) => [
                  'flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium border no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                  isActive
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white border-transparent shadow'
                    : 'bg-gradient-to-r from-green-600 to-blue-600 text-white border-transparent hover:from-green-700 hover:to-blue-700'
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <span>ℹ️</span>
                <span>About</span>
              </NavLink>
              {resolvedItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) => [
                    'flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium border no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
                    isActive
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white border-transparent shadow'
                      : 'bg-gradient-to-r from-green-600 to-blue-600 text-white border-transparent hover:from-green-700 hover:to-blue-700'
                  ].join(' ')}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
