import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";

const ProtectedRoute = ({ element: Element }) => {
  const { userState } = useContext(UserContext);
  const location = useLocation();

  return userState?.isAuthenticated ? (
    <Element />
  ) : (
    //state={{ from: location }} passes the current location (URL) to the login page,
    //so after the user logs in successfully,
    //they can be redirected back to the page they were trying to access before being redirected to login.
    <Navigate to="/Login" state={{ from: location }} replace /> // Redirect to Login if not authenticated
  );
};

export default ProtectedRoute;
