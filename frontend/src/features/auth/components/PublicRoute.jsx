import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Loader from "../../shared/components/Loader";

const PublicRoute = ({ children }) => {

  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return  <Loader/>
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoute;