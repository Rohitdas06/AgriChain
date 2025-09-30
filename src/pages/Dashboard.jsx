import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import FarmerDashboard from '../components/dashboard/FarmerDashboard';
import DistributorDashboard from '../components/dashboard/DistributorDashboard';
import RetailerDashboard from '../components/dashboard/RetailerDashboard';
import ConsumerDashboard from '../components/dashboard/ConsumerDashboard';
import AdminDashboard from '../components/dashboard/AdminDashboard';

const Dashboard = () => {
  const { role, user } = useAuth();
  const { t } = useLanguage();

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
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('dashboard.invalid_role')}</h1>
            <p className="text-gray-600">{t('dashboard.contact_admin')}</p>
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
