import React from "react";
import { Navigate } from "react-router-dom";

// PrivateRoute to protect routes from unauthenticated users
function PrivateRoute({ children }) {
  const isAuthenticated = !!sessionStorage.getItem("username"); // Check sessionStorage for authentication

  return isAuthenticated ? children : <Navigate to="/Login" />;
}

export default PrivateRoute;
