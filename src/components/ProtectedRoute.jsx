// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { userEmail } = useAuth();

  if (!userEmail) {
    return <Navigate to="/Team-Service-UI/login" />;
  }

  return children;
};

export default ProtectedRoute;
