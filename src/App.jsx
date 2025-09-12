import { useState } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';

// Pages
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import Dashboard from './pages/Dashboard';
import ProductTimeline from './pages/ProductTimeline';
import ProfileSettings from './pages/ProfileSettings';
import HelpSupport from './pages/HelpSupport';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';
import About from './components/About';

// Components
import Navigation from './components/Navigation';
import QRCodeGenerator from './components/QRCodeGenerator';
import QRCodeScanner from './components/QRCodeScanner';

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
    <Router>
          <div className="min-h-screen bg-gray-50">
      <Routes>
              {/* Public Routes */}
              <Route path='/' element={<LandingPage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<SignUpPage />} />
              
              {/* Protected Routes */}
              <Route path='/dashboard' element={
                <ProtectedRoute>
                  <Navigation />
                  <Dashboard />
                </ProtectedRoute>
              } />
              
              <Route path='/qr-generator' element={
                <ProtectedRoute>
                  <Navigation />
                  <QRCodeGenerator />
                </ProtectedRoute>
              } />
              
              <Route path='/qr-scanner' element={
                <ProtectedRoute>
                  <Navigation />
                  <QRCodeScanner />
                </ProtectedRoute>
              } />
              
              <Route path='/product-timeline/:productId?' element={
                <ProtectedRoute>
                  <Navigation />
                  <ProductTimeline />
                </ProtectedRoute>
              } />
              
              <Route path='/profile' element={
                <ProtectedRoute>
                  <Navigation />
                  <ProfileSettings />
                </ProtectedRoute>
              } />
              
              <Route path='/help' element={
                <ProtectedRoute>
                  <Navigation />
                  <HelpSupport />
                </ProtectedRoute>
              } />

              <Route path='/about' element={
                <ProtectedRoute>
                  <Navigation />
                  <About />
                </ProtectedRoute>
              } />
              
              {/* Error Routes */}
              <Route path='/unauthorized' element={<Unauthorized />} />
              <Route path='*' element={<NotFound />} />
      </Routes>
          </div>
    </Router>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
