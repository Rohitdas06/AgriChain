import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import FarmerDashboard from '../components/dashboard/FarmerDashboard';
import DistributorDashboard from '../components/dashboard/DistributorDashboard';
import RetailerDashboard from '../components/dashboard/RetailerDashboard';
import ConsumerDashboard from '../components/dashboard/ConsumerDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const Dashboard = () => {
  const { role, user } = useAuth();

  const renderDashboard = () => {
    switch (role) {
      case 'farmer':
        return <FarmerDashboard />;
      case 'distributor':
        return <DistributorDashboard />;
      case 'retailer':
        return <RetailerDashboard />;
      case 'consumer':
        return <ConsumerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return (
          <div className="p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Role</h1>
            <p className="text-gray-600">Please contact an administrator to assign you a proper role.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
