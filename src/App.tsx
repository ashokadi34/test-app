import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import KYCOnboarding from './components/KYCOnboarding';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/kyc" element={<PrivateRoute><KYCOnboarding /></PrivateRoute>} />
      <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </Router>
);
export default App;