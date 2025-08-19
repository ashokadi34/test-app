import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return !!localStorage.getItem('mock_user');
};

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;

export default PrivateRoute;
