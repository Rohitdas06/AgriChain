import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);

  // Check for existing authentication on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedRole = localStorage.getItem('role');
    const savedWallet = localStorage.getItem('walletAddress');
    
    if (savedUser && savedRole) {
      setUser(JSON.parse(savedUser));
      setRole(savedRole);
      setWalletAddress(savedWallet);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (userData, userRole, wallet) => {
    setUser(userData);
    setRole(userRole);
    setWalletAddress(wallet);
    setIsAuthenticated(true);
    
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('role', userRole);
    localStorage.setItem('walletAddress', wallet);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setWalletAddress(null);
    setIsAuthenticated(false);
    
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('walletAddress');
  };

  const value = {
    user,
    role,
    isAuthenticated,
    walletAddress,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
