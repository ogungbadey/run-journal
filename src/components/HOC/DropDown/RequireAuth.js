import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function RequireAuth({ children }) {
  const location = useLocation();
  //   const navigate = useNavigate();
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}
