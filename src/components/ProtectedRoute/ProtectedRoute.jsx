import React from "react";

import { Navigate, useLocation } from "react-router";
import { useAuthCtx } from "../../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthCtx();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ location }} />;
  }
  return children;
};

export default ProtectedRoute;
